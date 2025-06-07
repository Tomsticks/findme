import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr:false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['vuetify'],
  },
  // pinia: {
  //   storesDirs: ['./stores/**', './custom-folder/stores/**'],
  // },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',

  ],
  
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
