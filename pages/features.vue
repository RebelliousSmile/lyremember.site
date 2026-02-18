<template>
  <div class="features-page">
    <section class="page-header">
      <div class="container">
        <h1>Fonctionnalités</h1>
        <p>Découvrez toutes les capacités de Lyremember</p>
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
          <h2>Prêt à essayer ?</h2>
          <p>Commencez à mémoriser vos découvertes musicales dès maintenant</p>
          <NuxtLink to="/" class="btn btn-primary">Retour à l'accueil</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.features-page {
  background: white;
}

.page-header {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.page-header h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 15px;
}

.page-header p {
  font-size: 1.25rem;
  opacity: 0.95;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.features-detailed {
  padding: 80px 0;
}

.feature-detail {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  margin-bottom: 80px;
  align-items: center;
}

.feature-detail.reverse {
  grid-template-columns: 2fr 1fr;
}

.feature-detail.reverse .feature-detail-icon {
  order: 2;
}

.feature-detail-icon {
  font-size: 120px;
  text-align: center;
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.feature-detail-content h2 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 20px;
}

.feature-detail-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #6b7280;
  margin-bottom: 20px;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: 10px 0;
  padding-left: 30px;
  position: relative;
  color: #374151;
}

.feature-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #8b5cf6;
  font-weight: bold;
  font-size: 1.2rem;
}

.cta-section {
  background: #f9fafb;
  padding: 80px 0;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 15px;
}

.cta-content p {
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 30px;
}

.btn {
  padding: 12px 30px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(139, 92, 246, 0.4);
}

@media (max-width: 968px) {
  .feature-detail,
  .feature-detail.reverse {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .feature-detail.reverse .feature-detail-icon {
    order: 0;
  }

  .feature-detail-icon {
    font-size: 80px;
  }

  .page-header h1 {
    font-size: 2.5rem;
  }

  .feature-detail-content h2 {
    font-size: 1.75rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>
