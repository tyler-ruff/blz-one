import Home from './../pages/Home.vue'
import Login from './../pages/Login.vue'
import Register from './../pages/Register.vue'
import Unknown from './../pages/Unknown.vue'

import Profile from './../pages/dashboard/Profile.vue'
import UserSettings from './../pages/dashboard/UserSettings.vue'

import { auth, logout } from './../state/auth'

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
];

export default routes;

