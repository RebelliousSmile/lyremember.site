import { createClient } from '@libsql/client'
import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, platform } = body

  // Validation
  if (!email || typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
    throw createError({ statusCode: 400, statusMessage: 'Email invalide' })
  }
  const safePlatform = ['ios', 'android', 'both'].includes(platform) ? platform : 'ios'
  const cleanEmail = email.toLowerCase().trim()

  const config = useRuntimeConfig()

  // ── 1. Turso — sauvegarde ────────────────────────────────
  const db = createClient({
    url: config.tursoUrl,
    authToken: config.tursoAuthToken,
  })

  await db.execute(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      email      TEXT    NOT NULL UNIQUE,
      platform   TEXT    NOT NULL DEFAULT 'ios',
      created_at TEXT    NOT NULL DEFAULT (datetime('now'))
    )
  `)

  let alreadyRegistered = false
  try {
    await db.execute({
      sql: 'INSERT INTO waitlist (email, platform) VALUES (?, ?)',
      args: [cleanEmail, safePlatform],
    })
  } catch (e: any) {
    if (e?.message?.includes('UNIQUE constraint failed')) {
      alreadyRegistered = true
    } else {
      console.error('[waitlist] db error', e)
      throw createError({ statusCode: 500, statusMessage: 'Erreur serveur' })
    }
  }

  // ── 2. Resend — notification à l'admin ──────────────────
  if (!alreadyRegistered && config.resendApiKey && config.notifyEmail) {
    const resend = new Resend(config.resendApiKey)
    const platformLabels: Record<string, string> = { ios: 'iOS', android: 'Android', both: 'iOS + Android' }
    await resend.emails.send({
      from: 'Lyremember <noreply@lyremember.site>',
      to: config.notifyEmail,
      subject: `Nouvelle inscription — ${cleanEmail}`,
      html: `
        <p>Nouvelle inscription sur la liste d'attente Lyremember.</p>
        <ul>
          <li><strong>Email :</strong> ${cleanEmail}</li>
          <li><strong>Plateforme :</strong> ${platformLabels[safePlatform] ?? safePlatform}</li>
          <li><strong>Date :</strong> ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}</li>
        </ul>
      `,
    }).catch(err => console.error('[waitlist] resend error', err))
  }

  return { success: true, already: alreadyRegistered }
})
