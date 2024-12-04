// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
 
  css: [
    '@mdi/font/css/materialdesignicons.css',
    'vuetify/styles'
  ],
  build: {
    transpile: ['vuetify'],
   },
  
   plugins: [
    '@/store/index.js'
  ],
  ssr: false
})
