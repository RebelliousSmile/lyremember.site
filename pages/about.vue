<template>
  <div class="about-page">
    <section class="page-header">
      <div class="container">
        <p class="header-label">✦ À propos</p>
        <h1>À propos de <span class="header-accent">Lyremember</span></h1>
        <p class="header-sub">Une application pour ne jamais oublier vos découvertes musicales</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="about-section">
          <h2>Qu'est-ce que <span class="accent">Lyremember</span> ?</h2>
          <p>
            Lyremember est une application conçue pour les passionnés de musique qui souhaitent garder une trace
            de toutes leurs découvertes musicales. Combien de fois avez-vous entendu une chanson géniale et l'avez
            oubliée quelques heures plus tard ? Lyremember résout ce problème.
          </p>
          <p>
            Avec Lyremember, vous pouvez capturer instantanément les informations sur les chansons que vous découvrez,
            ajouter des notes personnelles sur le contexte de votre découverte, et organiser votre collection musicale
            de manière intuitive. Plus jamais vous ne perdrez une pépite musicale.
          </p>
        </div>

        <div class="about-section">
          <h2>Pourquoi <span class="accent">Lyremember</span> ?</h2>
          <div class="reasons-grid">
            <div class="reason-card">
              <h3>🎯 Mission</h3>
              <p>
                Préserver vos souvenirs musicaux et faciliter la redécouverte de chansons que vous avez aimées.
              </p>
            </div>
            <div class="reason-card">
              <h3>💡 Innovation</h3>
              <p>
                Une approche unique qui combine organisation musicale et journal de bord de vos expériences musicales.
              </p>
            </div>
            <div class="reason-card">
              <h3>❤️ Passion</h3>
              <p>
                Créée par des mélomanes pour des mélomanes, avec une attention particulière aux détails qui comptent.
              </p>
            </div>
            <div class="reason-card">
              <h3>🌟 Simplicité</h3>
              <p>
                Interface intuitive et facile à utiliser, accessible à tous les amateurs de musique.
              </p>
            </div>
          </div>
        </div>

        <div class="about-section">
          <h2>Comment ça <span class="accent">marche</span> ?</h2>
          <div class="steps">
            <div class="step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>Découvrez une chanson</h3>
                <p>En soirée, à la radio, dans un café, ou sur une plateforme de streaming.</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>Sauvegardez-la dans Lyremember</h3>
                <p>Ajoutez les informations de la chanson et vos notes personnelles sur le contexte de découverte.</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>Retrouvez-la facilement</h3>
                <p>Recherchez et organisez votre collection. Redécouvrez vos coups de cœur à tout moment.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="about-section">
          <h2>Technologies <span class="accent">utilisées</span></h2>
          <div class="tech-stack">
            <div class="tech-item">
              <span class="tech-icon">⚡</span>
              <span class="tech-name">Nuxt 3</span>
            </div>
            <div class="tech-item">
              <span class="tech-icon">💚</span>
              <span class="tech-name">Vue 3</span>
            </div>
            <div class="tech-item">
              <span class="tech-icon">🎵</span>
              <span class="tech-name">Web Audio API</span>
            </div>
            <div class="tech-item">
              <span class="tech-icon">🎨</span>
              <span class="tech-name">CSS3</span>
            </div>
          </div>
        </div>

        <div class="about-section">
          <h2>Notre <span class="accent">Vision</span></h2>
          <p>
            Nous croyons que la musique est intimement liée à nos souvenirs et émotions. Chaque chanson raconte
            une histoire, évoque un moment, un lieu, une personne. Lyremember vise à préserver ces connexions
            précieuses entre musique et mémoire.
          </p>
          <p>
            Notre objectif est de créer l'outil ultime pour les découvreurs de musique, ceux qui sont toujours
            à l'affût de nouvelles sonorités et qui veulent garder une trace de leur voyage musical.
          </p>
        </div>

        <div class="about-section">
          <h2>Contact et <span class="accent">Contribution</span></h2>
          <p>
            Lyremember est un projet en constante évolution. Nous accueillons avec plaisir les retours,
            suggestions et contributions de notre communauté de mélomanes.
          </p>
          <div class="contact-links">
            <a href="https://github.com" target="_blank" rel="noopener" class="contact-link">
              <span class="link-icon">🐙</span>
              <span>GitHub</span>
            </a>
            <a href="mailto:contact@lyremember.site" class="contact-link">
              <span class="link-icon">📧</span>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <p class="cta-label">✦ Rejoignez l'aventure</p>
          <h2>Commencez votre voyage musical</h2>
          <p>Découvrez comment Lyremember peut transformer votre expérience musicale</p>
          <NuxtLink to="/" class="btn btn-primary">Retour à l'accueil</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  background: #0D0B1A;
}

/* ─── PAGE HEADER ─── */
.page-header {
  background: radial-gradient(ellipse at top, #13102280, #0D0B1A);
  border-bottom: 1px solid #2A2440;
  padding: 70px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-label {
  color: #F2A93B;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 14px;
  font-weight: 500;
}

.page-header h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  font-weight: 300;
  color: #F5F0EB;
  margin-bottom: 14px;
}

.header-accent {
  color: #F2A93B;
}

.header-sub {
  font-size: 1.1rem;
  color: #B8B0D0;
}

/* ─── ABOUT CONTENT ─── */
.about-content {
  padding: 90px 0;
}

.about-section {
  margin-bottom: 80px;
}

.about-section h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.2rem;
  font-weight: 300;
  color: #F5F0EB;
  margin-bottom: 28px;
  text-align: center;
}

.accent {
  color: #F2A93B;
}

.about-section p {
  font-size: 1rem;
  line-height: 1.8;
  color: #B8B0D0;
  margin-bottom: 16px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

/* ─── REASONS ─── */
.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 36px;
}

.reason-card {
  background: #1A1528;
  border: 1px solid #2A2440;
  padding: 28px;
  border-radius: 20px;
  transition: transform 0.25s, border-color 0.25s;
}

.reason-card:hover {
  transform: translateY(-5px);
  border-color: rgba(242, 169, 59, 0.3);
}

.reason-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #F5F0EB;
  margin-bottom: 12px;
}

.reason-card p {
  color: #8A82A0;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  text-align: left;
}

/* ─── STEPS ─── */
.steps {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 700px;
  margin: 36px auto 0;
}

.step {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background: #1A1528;
  border: 1px solid #2A2440;
  border-radius: 20px;
  padding: 24px;
}

.step-number {
  width: 44px;
  height: 44px;
  background: rgba(242, 169, 59, 0.15);
  border: 1px solid rgba(242, 169, 59, 0.3);
  color: #F2A93B;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #F5F0EB;
  margin-bottom: 6px;
}

.step-content p {
  color: #8A82A0;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  text-align: left;
}

/* ─── TECH STACK ─── */
.tech-stack {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 36px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 24px;
  background: #1A1528;
  border: 1px solid #2A2440;
  border-radius: 16px;
  min-width: 110px;
  transition: transform 0.25s, border-color 0.25s;
}

.tech-item:hover {
  transform: scale(1.05);
  border-color: rgba(242, 169, 59, 0.3);
}

.tech-icon {
  font-size: 2.5rem;
}

.tech-name {
  font-weight: 600;
  font-size: 13px;
  color: #B8B0D0;
}

/* ─── CONTACT ─── */
.contact-links {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: #1A1528;
  border: 1px solid #2A2440;
  border-radius: 12px;
  text-decoration: none;
  color: #B8B0D0;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.25s;
}

.contact-link:hover {
  background: rgba(242, 169, 59, 0.1);
  border-color: #F2A93B;
  color: #F2A93B;
  transform: translateY(-2px);
}

.link-icon {
  font-size: 1.3rem;
}

/* ─── CTA ─── */
.cta-section {
  background: #131022;
  border-top: 1px solid #2A2440;
  padding: 90px 0;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-label {
  color: #F2A93B;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 14px;
  font-weight: 500;
}

.cta-content h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.5rem;
  font-weight: 300;
  color: #F5F0EB;
  margin-bottom: 14px;
}

.cta-content p {
  font-size: 1.1rem;
  color: #B8B0D0;
  margin-bottom: 32px;
}

.btn {
  padding: 13px 28px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.25s;
  display: inline-block;
}

.btn-primary {
  background: #F2A93B;
  color: #0D0B1A;
}

.btn-primary:hover {
  background: #E09520;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(242, 169, 59, 0.35);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.2rem;
  }

  .about-section h2 {
    font-size: 1.8rem;
  }

  .step {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .step-content p {
    text-align: center;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>
