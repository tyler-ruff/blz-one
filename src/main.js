import { createApp } from 'vue'

import build_head from './util/head.js'

import './assets/style.css'
import './assets/build.css'

import App from './App.vue'

import router from './util/router.js'

const app = createApp(App)
app.use(router)
app.mount('#app')

build_head();
