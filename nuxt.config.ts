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
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-vuefire',
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          href: "/favicon.ico"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        },
        {
          rel: "manifest",
          href: "/site.webmanifest"
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        }
    ]
    }
  },
  nitro: {
    preset: 'firebase'
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
