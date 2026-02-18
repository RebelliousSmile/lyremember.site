// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Enable static site generation for better deployment compatibility
  ssr: true,
  
  app: {
    head: {
      title: 'Lyremember - Mémorisez vos souvenirs musicaux',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Lyremember vous aide à capturer et mémoriser vos découvertes musicales. Ne perdez plus jamais une chanson que vous avez aimée.' },
        { name: 'keywords', content: 'musique, souvenirs, playlist, découverte musicale, lyremember' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    baseURL: '/'
  },
  
  // Ensure proper route rules for deployment
  routeRules: {
    '/': { prerender: true },
    '/features': { prerender: true },
    '/about': { prerender: true }
  }
})
