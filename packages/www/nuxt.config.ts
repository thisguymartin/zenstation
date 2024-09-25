// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  nitro: {
    preset: 'aws-lambda'
  },
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true }
})
