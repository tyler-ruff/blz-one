// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'

const firebaseConfig = {
  apiKey: "AIzaSyDJNpSgZqhn1_ipvk54wsU11UIE1BoYIfc",
  authDomain: "blz-one-9e383.firebaseapp.com",
  databaseURL: "https://blz-one-9e383-default-rtdb.firebaseio.com",
  projectId: "blz-one-9e383",
  storageBucket: "blz-one-9e383.appspot.com",
  messagingSenderId: "817319905653",
  appId: "1:817319905653:web:94174c7e723ee8d08bab3c",
  measurementId: "G-Y5ZW5STMX1",
  recaptchaSiteKey: "6LdlFgsnAAAAAGqHCe06GGtpQA-490hi91p25p3A"
};

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-vuefire',
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
  content: {
      highlight: {
        theme: {
          dark: 'github-dark',
          default: 'github-light'
        }
      }
  },
  nitro: {
    preset: 'node-server',
    prerender: {
      crawlLinks: true
    },
  },
  colorMode: {
    classSuffix: ''
  },
  css: ['~/assets/css/global.css'],
  tailwindcss: {
    config: {
      darkMode: 'class',
      plugins: [
        require('daisyui'), 
        tailwindTypography, 
        tailwindForms
      ],
      content: [
        `./components/**/*.{vue,js,ts}`,
        `./layouts/**/*.vue`,
        `./pages/**/*.vue`,
        `./composables/**/*.{js,ts}`,
        `./plugins/**/*.{js,ts}`,
        `./utils/**/*.{js,ts}`,
        `./App.{js,ts,vue}`,
        `./app.{js,ts,vue}`,
        `./Error.{js,ts,vue}`,
        `./error.{js,ts,vue}`,
        `./app.config.{js,ts}`
      ]
    }
  },
  generate: {
    routes: ['/docs/hello']
  },
  vuefire: {
    auth: true,
    config: {
      apiKey: firebaseConfig.apiKey,
      authDomain: firebaseConfig.authDomain,
      projectId: firebaseConfig.projectId,
      appId: firebaseConfig.appId
    }
  }
});
