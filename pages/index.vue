<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            Mémorisez vos découvertes musicales
          </h1>
          <p class="hero-subtitle">
            Lyremember vous aide à capturer et organiser vos souvenirs musicaux. Ne perdez plus jamais une chanson que vous avez aimée.
          </p>
          <div class="hero-cta">
            <NuxtLink to="/features" class="btn btn-primary">
              Découvrir les fonctionnalités
            </NuxtLink>
            <NuxtLink to="/about" class="btn btn-secondary">
              En savoir plus
            </NuxtLink>
          </div>
        </div>
        <div class="hero-visual">
          <div class="music-preview">
            <div class="preview-header">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <div class="preview-content">
              <div class="music-icon">🎵</div>
              <div class="arrow">→</div>
              <div class="memory-icon">💾</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features-preview">
      <div class="container">
        <h2 class="section-title">Pourquoi Lyremember ?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎧</div>
            <h3>Capture Instantanée</h3>
            <p>Sauvegardez rapidement les chansons que vous entendez et aimez.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📝</div>
            <h3>Notes et Contexte</h3>
            <p>Ajoutez des notes pour vous rappeler où et quand vous avez découvert chaque chanson.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🗂️</div>
            <h3>Organisation</h3>
            <p>Organisez vos découvertes musicales par humeur, genre ou occasion.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>Recherche Facile</h3>
            <p>Retrouvez rapidement n'importe quelle chanson dans votre collection.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="use-cases">
      <div class="container">
        <h2 class="section-title">Cas d'utilisation</h2>
        <div class="use-cases-list">
          <div class="use-case">
            <div class="use-case-number">01</div>
            <h3>Découvertes en soirée</h3>
            <p>Capturez les chansons que vous entendez lors de vos sorties et soirées.</p>
          </div>
          <div class="use-case">
            <div class="use-case-number">02</div>
            <h3>Radio et streaming</h3>
            <p>Mémorisez les titres diffusés à la radio ou découverts sur les plateformes de streaming.</p>
          </div>
          <div class="use-case">
            <div class="use-case-number">03</div>
            <h3>Recommandations</h3>
            <p>Gardez une trace des recommandations musicales de vos amis.</p>
          </div>
          <div class="use-case">
            <div class="use-case-number">04</div>
            <h3>Playlists thématiques</h3>
            <p>Créez des collections musicales pour différentes humeurs ou occasions.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  color: white;
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.3;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 600px;
  margin-bottom: 40px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 30px;
  opacity: 0.95;
}

.hero-cta {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
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
  background: white;
  color: #8b5cf6;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #8b5cf6;
}

.hero-visual {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.music-preview {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
}

.preview-header {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
}

.preview-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px 20px;
}

.music-icon,
.memory-icon {
  font-size: 60px;
}

.arrow {
  font-size: 40px;
  color: #8b5cf6;
  font-weight: bold;
}

.features-preview {
  padding: 80px 0;
  background: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  color: #1f2937;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  background: #f9fafb;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 50px;
  margin-bottom: 15px;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #1f2937;
}

.feature-card p {
  color: #6b7280;
  line-height: 1.6;
}

.use-cases {
  padding: 80px 0;
  background: #f9fafb;
}

.use-cases-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.use-case {
  background: white;
  padding: 30px;
  border-radius: 12px;
  border-left: 4px solid #8b5cf6;
  transition: transform 0.3s;
}

.use-case:hover {
  transform: translateX(5px);
}

.use-case-number {
  font-size: 2rem;
  font-weight: 800;
  color: #8b5cf6;
  opacity: 0.3;
  margin-bottom: 10px;
}

.use-case h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #1f2937;
}

.use-case p {
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
