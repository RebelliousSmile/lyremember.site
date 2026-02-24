<template>
  <div class="bg-deep">

    <section class="bg-gradient-to-b from-[#13102280] to-deep border-b border-border py-[70px] text-center">
      <div class="container block">
        <p class="label mb-[14px]">{{ $t('legal.header.label') }}</p>
        <h1 class="font-serif text-[2.8rem] font-light text-primary">{{ $t('legal.header.title') }}</h1>
      </div>
    </section>

    <section class="py-[80px]">
      <div class="container block max-w-[720px]">

        <!-- Notice for non-French locales -->
        <div v-if="notice" class="notice-banner mb-[48px]">
          <span class="notice-icon">ℹ️</span>
          {{ notice }}
        </div>

        <div v-for="section in sections" :key="section.title" class="legal-section">
          <h2>{{ section.title }}</h2>
          <div v-for="(block, i) in section.blocks" :key="i">
            <h3 v-if="block.subtitle">{{ block.subtitle }}</h3>
            <p v-for="(line, j) in block.lines" :key="j">{{ line }}</p>
          </div>
        </div>

        <p class="text-muted text-[13px] mt-[60px] pt-6 border-t border-border">
          {{ $t('legal.last_update') }} {{ lastUpdate }}
        </p>

      </div>
    </section>

  </div>
</template>

<script setup>
const { t } = useI18n()

const notice = computed(() => t('legal.notice') || '')
const lastUpdate = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

const sections = [
  {
    title: '1. Éditeur du site',
    blocks: [
      {
        lines: [
          'Le site lyremember.site est édité à titre personnel.',
          'Directeur de la publication : [Votre nom]',
          'Contact : contact@lyremember.site',
        ],
      },
    ],
  },
  {
    title: '2. Hébergement',
    blocks: [
      {
        lines: [
          'Ce site est hébergé par un prestataire tiers. Les coordonnées de l\'hébergeur sont disponibles sur demande à contact@lyremember.site.',
        ],
      },
    ],
  },
  {
    title: '3. Propriété intellectuelle',
    blocks: [
      {
        lines: [
          "L'ensemble des contenus présents sur ce site (textes, visuels, code source, logo) sont protégés par le droit d'auteur. Toute reproduction, même partielle, est soumise à autorisation préalable.",
          "Le code source de l'application est publié sous licence open source. Les conditions d'utilisation sont disponibles sur le dépôt GitHub du projet.",
        ],
      },
    ],
  },
  {
    title: '4. Données personnelles (RGPD)',
    blocks: [
      {
        subtitle: '4.1 Données collectées',
        lines: [
          "Dans le cadre de la liste d'attente, nous collectons uniquement votre adresse e-mail et votre préférence de plateforme (iOS / Android). Ces données sont utilisées exclusivement pour vous notifier lors du lancement de l'application.",
        ],
      },
      {
        subtitle: '4.2 Durée de conservation',
        lines: [
          "Vos données sont conservées jusqu'au lancement de l'application ou jusqu'à votre désinscription, au premier des deux termes.",
        ],
      },
      {
        subtitle: '4.3 Vos droits',
        lines: [
          "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles.",
          "Pour exercer ces droits, contactez-nous à : contact@lyremember.site",
        ],
      },
      {
        subtitle: '4.4 Cookies',
        lines: [
          "Ce site n'utilise pas de cookies à des fins de traçage ou de publicité. Des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.",
        ],
      },
    ],
  },
  {
    title: '5. Responsabilité',
    blocks: [
      {
        lines: [
          "Les informations fournies sur ce site le sont à titre indicatif. Nous nous efforçons de maintenir le contenu à jour mais ne pouvons garantir l'exactitude, l'exhaustivité ou l'actualité des informations publiées.",
          "Nous déclinons toute responsabilité pour les dommages directs ou indirects qui pourraient résulter de l'utilisation du site.",
        ],
      },
    ],
  },
  {
    title: '6. Droit applicable',
    blocks: [
      {
        lines: [
          "Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.",
        ],
      },
    ],
  },
]
</script>

<style scoped>
.notice-banner {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: rgba(242, 169, 59, 0.08);
  border: 1px solid rgba(242, 169, 59, 0.3);
  border-radius: 12px;
  padding: 16px 20px;
  color: #B8B0D0;
  font-size: 14px;
  line-height: 1.6;
}
.notice-icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }

.legal-section {
  margin-bottom: 48px;
}
.legal-section h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: #F5F0EB;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid #2A2440;
}
.legal-section h3 {
  font-weight: 600;
  color: #F2A93B;
  margin: 20px 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 11px;
}
.legal-section p {
  color: #B8B0D0;
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 12px;
}
</style>
