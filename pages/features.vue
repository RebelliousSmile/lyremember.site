<template>
  <div class="features-page">
    <section class="page-header">
      <div class="container">
        <p class="header-label">✦ Fonctionnalités</p>
        <h1>Tout ce que <span class="header-accent">Lyremember</span> peut faire</h1>
        <p class="header-sub">Découvrez toutes les capacités de l'application</p>
      </div>
    </section>

    <section class="features-detailed">
      <div class="container">
        <div class="feature-detail">
          <div class="feature-detail-icon">🎵</div>
          <div class="feature-detail-content">
            <h2>Capture de Musique</h2>
            <p>
              Lyremember vous permet de sauvegarder instantanément les informations sur les chansons que vous découvrez.
              Que ce soit le titre, l'artiste, l'album ou le genre, tout est mémorisé pour retrouver facilement vos découvertes.
            </p>
            <ul class="feature-list">
              <li>Sauvegarde rapide des informations musicales</li>
              <li>Support de multiples formats et sources</li>
              <li>Reconnaissance automatique des métadonnées</li>
              <li>Intégration avec les plateformes de streaming</li>
            </ul>
          </div>
        </div>

        <div class="feature-detail reverse">
          <div class="feature-detail-icon">📝</div>
          <div class="feature-detail-content">
            <h2>Notes et Annotations</h2>
            <p>
              Ajoutez des notes personnelles à chaque chanson pour vous rappeler le contexte de votre découverte.
              Où étiez-vous ? Avec qui ? Quelle émotion avez-vous ressentie ?
            </p>
            <ul class="feature-list">
              <li>Notes personnalisées pour chaque chanson</li>
              <li>Étiquettes et catégories personnalisables</li>
              <li>Capture du contexte de découverte</li>
              <li>Évaluation et favori</li>
            </ul>
          </div>
        </div>

        <div class="feature-detail">
          <div class="feature-detail-icon">🗂️</div>
          <div class="feature-detail-content">
            <h2>Organisation Intelligente</h2>
            <p>
              Organisez votre collection musicale de manière intuitive avec des listes, des catégories et des filtres avancés.
            </p>
            <ul class="feature-list">
              <li>Création de playlists thématiques</li>
              <li>Organisation par genre, humeur ou occasion</li>
              <li>Tri et filtrage avancés</li>
              <li>Vue chronologique de vos découvertes</li>
            </ul>
          </div>
        </div>

        <div class="feature-detail reverse">
          <div class="feature-detail-icon">🔍</div>
          <div class="feature-detail-content">
            <h2>Recherche Puissante</h2>
            <p>
              Retrouvez n'importe quelle chanson de votre collection en quelques secondes grâce à notre système de recherche avancé.
            </p>
            <ul class="feature-list">
              <li>Recherche par titre, artiste ou album</li>
              <li>Recherche dans les notes personnelles</li>
              <li>Filtres multiples combinables</li>
              <li>Suggestions et auto-complétion</li>
            </ul>
          </div>
        </div>

        <div class="feature-detail">
          <div class="feature-detail-icon">📊</div>
          <div class="feature-detail-content">
            <h2>Statistiques et Insights</h2>
            <p>
              Découvrez vos tendances musicales avec des statistiques détaillées sur vos découvertes et préférences.
            </p>
            <ul class="feature-list">
              <li>Analyse de vos goûts musicaux</li>
              <li>Évolution de vos découvertes dans le temps</li>
              <li>Genres et artistes les plus écoutés</li>
              <li>Partage de vos statistiques</li>
            </ul>
          </div>
        </div>

        <div class="feature-detail reverse">
          <div class="feature-detail-icon">🔒</div>
          <div class="feature-detail-content">
            <h2>Confidentialité et Sécurité</h2>
            <p>
              Vos données musicales sont privées et sécurisées. Vous gardez le contrôle total sur votre collection.
            </p>
            <ul class="feature-list">
              <li>Données stockées de manière sécurisée</li>
              <li>Contrôle total sur vos informations</li>
              <li>Export de vos données à tout moment</li>
              <li>Respect de votre vie privée</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <p class="cta-label">✦ Prêt à commencer ?</p>
          <h2>Commencez à mémoriser dès maintenant</h2>
          <p>Transformez votre rapport à la musique avec Lyremember</p>
          <NuxtLink to="/" class="btn btn-primary">Retour à l'accueil</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.features-page {
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

/* ─── FEATURES DETAILED ─── */
.features-detailed {
  padding: 90px 0;
}

.feature-detail {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  margin-bottom: 80px;
  align-items: center;
  padding: 40px;
  background: #1A1528;
  border: 1px solid #2A2440;
  border-radius: 24px;
}

.feature-detail.reverse {
  grid-template-columns: 2fr 1fr;
}

.feature-detail.reverse .feature-detail-icon {
  order: 2;
}

.feature-detail-icon {
  font-size: 100px;
  text-align: center;
  line-height: 1;
}

.feature-detail-content h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 400;
  color: #F5F0EB;
  margin-bottom: 16px;
}

.feature-detail-content p {
  font-size: 1rem;
  line-height: 1.8;
  color: #B8B0D0;
  margin-bottom: 20px;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: 9px 0;
  padding-left: 28px;
  position: relative;
  color: #B8B0D0;
  font-size: 14px;
  border-bottom: 1px solid #2A2440;
}

.feature-list li:last-child {
  border-bottom: none;
}

.feature-list li::before {
  content: '●';
  position: absolute;
  left: 0;
  color: #F2A93B;
  font-size: 8px;
  top: 12px;
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

@media (max-width: 968px) {
  .feature-detail,
  .feature-detail.reverse {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 28px;
  }

  .feature-detail.reverse .feature-detail-icon {
    order: 0;
  }

  .feature-detail-icon {
    font-size: 72px;
  }

  .page-header h1 {
    font-size: 2.2rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>
