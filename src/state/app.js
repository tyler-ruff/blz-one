/*
    Blz.one - Global App State
*/

import { reactive } from 'vue'

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDJNpSgZqhn1_ipvk54wsU11UIE1BoYIfc",
    authDomain: "blz-one-9e383.firebaseapp.com",
    databaseURL: "https://blz-one-9e383-default-rtdb.firebaseio.com",
    projectId: "blz-one-9e383",
    storageBucket: "blz-one-9e383.appspot.com",
    messagingSenderId: "817319905653",
    appId: "1:817319905653:web:94174c7e723ee8d08bab3c",
    measurementId: "G-Y5ZW5STMX1"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)

export const firebase = reactive({
    app,
    analytics,
    auth
})