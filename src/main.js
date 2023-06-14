import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import topbar, { show, hide } from 'topbar'

import build_head from './util/head.js'
import getConfig from './util/firebaseConfig.js'

import './style.css'
import App from './App.vue'

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Unknown from './pages/Unknown.vue'

import Profile from './pages/dashboard/Profile.vue'
import UserSettings from './pages/dashboard/UserSettings.vue'

import { auth, logout } from './state/auth'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login, beforeEnter: (to, from) => {
        if(auth.loggedIn === true){
            return false
        }
      }, },
    { path: '/register', name: 'register', component: Register, beforeEnter: (to, from) => {
        if(auth.loggedIn === true){
            return false
        }
      }, },
    { path: '/profile', name: 'profile', component: Profile, beforeEnter: (to, from) => {
        if(auth.loggedIn === false){
            return false
        }
    }, },
    { path: '/settings', name: 'settings', component: UserSettings, beforeEnter: (to, from) => {
        if(auth.loggedIn === false){
            return false
        }
    }, },
    { path: '/logout', name: 'logout', beforeEnter: (to, from) => {
        if(auth.loggedIn === false){
            return false
        }
        logout();
        window.location.href = "/";
    }, },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: Unknown },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from) => {
    topbar.show()
    document.activeElement?.blur()
})

router.afterEach((to, from, failure) => {
    topbar.hide()
    const drawer = document.querySelector('#mobile-menu-drawer')
    if(drawer.checked === true){
        drawer.checked = false
    }
})

const app = createApp(App)
app.use(router)
app.mount('#app')

build_head();
