// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-lodash',
    '@vueuse/nuxt',
    'dayjs-nuxt',
  ],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_URL,
      companyToken: process.env.NUXT_PUBLIC_COMPANY_TOKEN,
      eventId: process.env.NUXT_PUBLIC_EVENT_ID || '',
    },
  },

  pinia: {
    autoImports: ['defineStore'],
  },
  lodash: {
    prefix: '_',
    upperAfterPrefix: false,
  },
  dayjs: {
    locales: ['pt-br'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'pt-br',
    defaultTimezone: 'America/Sao_Paulo',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
