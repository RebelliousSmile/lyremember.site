<template>
  <div class="about-page">
    <section class="page-header">
      <div class="container">
        <h1>À propos de Lyremember</h1>
        <p>Une application pour ne jamais oublier vos découvertes musicales</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="about-section">
          <h2>Qu'est-ce que Lyremember ?</h2>
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
          <h2>Pourquoi Lyremember ?</h2>
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
          <h2>Comment ça marche ?</h2>
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
          <h2>Technologies utilisées</h2>
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
          <h2>Notre Vision</h2>
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
          <h2>Contact et Contribution</h2>
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

.about-content {
  padding: 80px 0;
}

.about-section {
  margin-bottom: 80px;
}

.about-section h2 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 30px;
  text-align: center;
}

.about-section p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #6b7280;
  margin-bottom: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.reason-card {
  background: #f9fafb;
  padding: 30px;
  border-radius: 12px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.reason-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.reason-card h3 {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 15px;
}

.reason-card p {
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  margin: 40px auto 0;
}

.step {
  display: flex;
  gap: 25px;
  align-items: flex-start;
}

.step-number {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
}

.step-content h3 {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 10px;
}

.step-content p {
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.tech-stack {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 40px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background: #f9fafb;
  border-radius: 12px;
  min-width: 120px;
  transition: transform 0.3s;
}

.tech-item:hover {
  transform: scale(1.05);
}

.tech-icon {
  font-size: 3rem;
}

.tech-name {
  font-weight: 600;
  color: #1f2937;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: #f9fafb;
  border-radius: 8px;
  text-decoration: none;
  color: #1f2937;
  font-weight: 600;
  transition: all 0.3s;
}

.contact-link:hover {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
}

.link-icon {
  font-size: 1.5rem;
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

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.5rem;
  }

  .about-section h2 {
    font-size: 2rem;
  }

  .step {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>
