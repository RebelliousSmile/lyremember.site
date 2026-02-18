<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <nav class="nav">
          <NuxtLink to="/" class="logo">
            <span class="logo-icon">🎵</span>
            <span>Lyremember</span>
          </NuxtLink>
          <div class="nav-links">
            <NuxtLink to="/">Accueil</NuxtLink>
            <NuxtLink to="/features">Fonctionnalités</NuxtLink>
            <NuxtLink to="/about">À propos</NuxtLink>
          </div>
        </nav>
      </div>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2026 Lyremember. Mémorisez vos souvenirs musicaux.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #8b5cf6;
  text-decoration: none;
  transition: transform 0.2s;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  font-size: 32px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
}

.nav-links a:hover {
  color: #8b5cf6;
}

.nav-links a.router-link-active {
  color: #8b5cf6;
}

.nav-links a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: #8b5cf6;
}

.main {
  flex: 1;
}

.footer {
  background: #1f2937;
  color: white;
  padding: 30px 0;
  margin-top: 60px;
  text-align: center;
}

.footer p {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    height: auto;
    padding: 15px 0;
    gap: 15px;
  }

  .nav-links {
    gap: 20px;
  }
}
</style>
