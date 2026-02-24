// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxtjs/i18n'],

  // Enable static site generation for better deployment compatibility
  ssr: true,

  app: {
    head: {
      title: 'Lyremember',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Lyremember helps you understand and memorize song lyrics with bilingual translations and interactive exercises.' },
        { name: 'keywords', content: 'music, lyrics, bilingual, memorize, language learning, lyremember' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Sans:wght@400;500;600;700&display=swap' }
      ]
    },
    baseURL: '/'
  },

  i18n: {
    locales: [
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'en', language: 'en-US', name: 'English',  file: 'en.json' },
      { code: 'ko', language: 'ko-KR', name: '한국어',    file: 'ko.json' },
      { code: 'ja', language: 'ja-JP', name: '日本語',    file: 'ja.json' },
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
})
