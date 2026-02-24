<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <p class="hero-label">✦ Votre journal musical</p>
          <h1 class="hero-title">
            Mémorisez vos<br><span class="hero-accent">découvertes musicales</span>
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
          <div class="app-preview">
            <div class="preview-header">
              <div class="preview-dot" />
              <div class="preview-dot" />
              <div class="preview-dot" />
            </div>
            <div class="preview-title">
              Ma <span class="preview-accent">Lyre</span>
            </div>
            <p class="preview-sub">5 chansons · 4 langues</p>
            <div class="preview-songs">
              <div v-for="song in previewSongs" :key="song.title" class="preview-song">
                <div class="song-cover">{{ song.cover }}</div>
                <div class="song-info">
                  <div class="song-title">{{ song.title }}</div>
                  <div class="song-artist">{{ song.artist }}</div>
                  <div class="song-bar">
                    <div class="song-progress" :style="{ width: song.progress + '%' }" />
                  </div>
                </div>
                <div class="song-pct">{{ song.progress }}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features-preview">
      <div class="container">
        <p class="section-label">Fonctionnalités</p>
        <h2 class="section-title">Pourquoi <span class="section-accent">Lyremember</span> ?</h2>
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
        <p class="section-label">Parcours utilisateur</p>
        <h2 class="section-title">Comment ça <span class="section-accent">marche</span> ?</h2>
        <div class="use-cases-list">
          <div class="use-case">
            <div class="use-case-number">01</div>
            <h3>Ajouter une chanson</h3>
            <p>Recherchez ou saisissez manuellement un titre avec ses paroles originales.</p>
          </div>
          <div class="use-case">
            <div class="use-case-number">02</div>
            <h3>Comprendre les paroles</h3>
            <p>Lisez une traduction bilingue ligne par ligne dans Ma Lyre.</p>
          </div>
          <div class="use-case">
            <div class="use-case-number">03</div>
            <h3>Mémoriser</h3>
            <p>Apprenez par cœur grâce à des exercices interactifs : texte à trous, karaoké, flashcards.</p>
          </div>
          <div class="use-case">
            <div class="use-case-number">04</div>
            <h3>Suivre sa progression</h3>
            <p>Visualisez votre avancement chanson par chanson et par langue.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const previewSongs = [
  { title: "Something About Us", artist: "Daft Punk", cover: "🌙", progress: 72 },
  { title: "Papaoutai", artist: "Stromae", cover: "🎭", progress: 45 },
  { title: "99 Luftballons", artist: "Nena", cover: "🎈", progress: 18 },
];
</script>

<style scoped>
/* ─── HERO ─── */
.hero {
  background: radial-gradient(ellipse at top, #13102280, #0D0B1A);
  padding: 90px 0 80px;
  border-bottom: 1px solid #2A2440;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  gap: 60px;
  align-items: center;
}

.hero-content {
  flex: 1;
  max-width: 580px;
}

.hero-label {
  color: #F2A93B;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: 500;
}

.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.8rem;
  font-weight: 300;
  line-height: 1.15;
  color: #F5F0EB;
  margin-bottom: 24px;
}

.hero-accent {
  color: #F2A93B;
}

.hero-subtitle {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #B8B0D0;
  margin-bottom: 36px;
}

.hero-cta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
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

.btn-secondary {
  background: transparent;
  color: #B8B0D0;
  border: 1px solid #2A2440;
}

.btn-secondary:hover {
  border-color: #F2A93B;
  color: #F2A93B;
  transform: translateY(-2px);
}

/* ─── APP PREVIEW ─── */
.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
}

.app-preview {
  background: #1A1528;
  border: 1px solid #2A2440;
  border-radius: 24px;
  padding: 24px;
  width: 320px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(123, 111, 160, 0.06);
}

.preview-header {
  display: flex;
  gap: 6px;
  margin-bottom: 20px;
}

.preview-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2A2440;
}

.preview-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  font-weight: 400;
  color: #F5F0EB;
  margin-bottom: 4px;
}

.preview-accent {
  color: #F2A93B;
}

.preview-sub {
  color: #8A82A0;
  font-size: 12px;
  margin-bottom: 18px;
}

.preview-songs {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.preview-song {
  background: #131022;
  border: 1px solid #2A2440;
  border-radius: 14px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.song-cover {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(123, 111, 160, 0.3), #0D0B1A);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.song-info {
  flex: 1;
  min-width: 0;
}

.song-title {
  color: #F5F0EB;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.song-artist {
  color: #8A82A0;
  font-size: 11px;
  margin-top: 2px;
}

.song-bar {
  height: 3px;
  background: #2A2440;
  border-radius: 2px;
  margin-top: 6px;
}

.song-progress {
  height: 100%;
  background: #F2A93B;
  border-radius: 2px;
}

.song-pct {
  color: #F2A93B;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}

/* ─── FEATURES PREVIEW ─── */
.features-preview {
  padding: 90px 0;
  background: #0D0B1A;
}

.features-preview .container,
.use-cases .container {
  display: block;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-label {
  color: #F2A93B;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
  font-weight: 500;
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  text-align: center;
  font-size: 2.8rem;
  font-weight: 300;
  margin-bottom: 50px;
  color: #F5F0EB;
}

.section-accent {
  color: #F2A93B;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.feature-card {
  background: #1A1528;
  padding: 28px;
  border-radius: 20px;
  border: 1px solid #2A2440;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba(242, 169, 59, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  font-size: 42px;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #F5F0EB;
}

.feature-card p {
  color: #8A82A0;
  font-size: 14px;
  line-height: 1.6;
}

/* ─── USE CASES ─── */
.use-cases {
  padding: 90px 0;
  background: #131022;
  border-top: 1px solid #2A2440;
  border-bottom: 1px solid #2A2440;
}

.use-cases-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.use-case {
  background: #1A1528;
  padding: 28px;
  border-radius: 20px;
  border: 1px solid #2A2440;
  border-left: 3px solid #F2A93B;
  transition: transform 0.25s;
}

.use-case:hover {
  transform: translateX(4px);
}

.use-case-number {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 600;
  color: #F2A93B;
  opacity: 0.5;
  margin-bottom: 12px;
}

.use-case h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #F5F0EB;
}

.use-case p {
  color: #8A82A0;
  font-size: 14px;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .container {
    flex-direction: column;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-title {
    font-size: 2.8rem;
  }

  .section-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .app-preview {
    width: 100%;
    max-width: 320px;
  }
}
</style>
