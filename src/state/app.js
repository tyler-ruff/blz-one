/*
    Blz.one - Global App State
*/

import { reactive } from 'vue'

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

import firebaseConfig from '../config/firebaseConfig'

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)

export const firebase = reactive({
    app,
    analytics,
    auth
})