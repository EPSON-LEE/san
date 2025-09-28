// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: ['@nuxt/eslint', '@unocss/nuxt'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'App PC',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'description', name: 'description', content: 'PC Web Application' }
      ]
    }
  }
})