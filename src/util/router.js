import { createRouter, createWebHashHistory } from 'vue-router'

import topbar from 'topbar'

import routes from '../config/routes'

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

export default router;