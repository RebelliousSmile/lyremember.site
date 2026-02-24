<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <nav class="nav">
          <NuxtLink to="/" class="logo">
            <svg width="22" height="22" viewBox="0 0 48 48" fill="none" class="logo-svg">
              <path d="M18 44C16 38 14 32 13 28C11 22 10 16 12 10C14 6 16 4 14 2" stroke="#F2A93B" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M30 44C32 38 34 32 35 28C37 22 38 16 36 10C34 6 32 4 34 2" stroke="#F2A93B" stroke-width="1.8" stroke-linecap="round"/>
              <line x1="18" y1="44" x2="30" y2="44" stroke="#F2A93B" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M13.5 12H34.5" stroke="#F2A93B" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="20" y1="16" x2="20" y2="20" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
              <line x1="20" y1="23" x2="20" y2="30" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
              <line x1="20" y1="33" x2="20" y2="36" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
              <line x1="24" y1="14" x2="24" y2="22" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
              <line x1="24" y1="25" x2="24" y2="32" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
              <line x1="24" y1="35" x2="24" y2="42" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
              <line x1="28" y1="16" x2="28" y2="24" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
              <line x1="28" y1="27" x2="28" y2="34" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
              <line x1="28" y1="37" x2="28" y2="40" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
            </svg>
            <span class="logo-text">Lyre<span class="logo-accent">member</span></span>
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
        <div class="footer-inner">
          <div class="footer-brand">
            <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
              <path d="M18 44C16 38 14 32 13 28C11 22 10 16 12 10C14 6 16 4 14 2" stroke="#F2A93B" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M30 44C32 38 34 32 35 28C37 22 38 16 36 10C34 6 32 4 34 2" stroke="#F2A93B" stroke-width="1.8" stroke-linecap="round"/>
              <line x1="18" y1="44" x2="30" y2="44" stroke="#F2A93B" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M13.5 12H34.5" stroke="#F2A93B" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="24" y1="14" x2="24" y2="42" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
            </svg>
            <span>Lyre<span class="footer-accent">member</span></span>
          </div>
          <p class="footer-copy">&copy; 2026 Lyremember. Mémorisez vos souvenirs musicaux.</p>
        </div>
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
  background: #131022;
  border-bottom: 1px solid #2A2440;
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
  text-decoration: none;
  transition: transform 0.2s;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-svg {
  flex-shrink: 0;
}

.logo-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 300;
  color: #F5F0EB;
}

.logo-accent {
  color: #F2A93B;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  color: #B8B0D0;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  transition: color 0.2s;
  position: relative;
}

.nav-links a:hover {
  color: #F2A93B;
}

.nav-links a.router-link-active {
  color: #F2A93B;
}

.nav-links a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: #F2A93B;
  border-radius: 1px;
}

.main {
  flex: 1;
}

.footer {
  background: #131022;
  border-top: 1px solid #2A2440;
  padding: 32px 0;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  font-weight: 300;
  color: #F5F0EB;
}

.footer-accent {
  color: #F2A93B;
}

.footer-copy {
  color: #8A82A0;
  font-size: 13px;
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
