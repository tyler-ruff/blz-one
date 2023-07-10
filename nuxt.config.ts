// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
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
    preset: 'service-worker'
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
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      appId: process.env.appId
    },
    appCheck: {
      provider: 'ReCaptchaV3',
      key: process.env.recaptchaSiteKey || 'none'
    }
  }
});
