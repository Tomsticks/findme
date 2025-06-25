import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr:false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['vuetify','vue-toast-notification'],
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
    'nuxt-toast',
    // '@nuxtjs/toast',
    // '@pinia/nuxt',

  ],
//   toast: {
//     position: 'top-center',
//     register: [ // Register custom toasts
//       {
//         name: 'my-error',
//         message: 'Oops...Something went wrong',
//         options: {
//           type: 'error'
//         }
//       }
//     ]
// },
  
  
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
