/*
    Blz.one - Auth State
*/

import { reactive } from 'vue'

import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signOut } from 'firebase/auth'

import { firebase } from './app'

export const auth = reactive({
    loggedIn: false,
    name: "Not logged in.",
    uid: "guest",
    email: "",
    profilePic: "",
    menu: []
})

onAuthStateChanged(firebase.auth, (user) => {
    if(user){
        //const uid = user.uid
        auth.loggedIn = true;
        auth.name = user.displayName;
        auth.uid = user.uid;
        auth.email = user.email;
        auth.profilePic = user.photoURL;
        auth.menu = [
            {
                label: "Profile",
                url: "/profile"
            },
            {
                label: "Settings",
                url: "/settings"
            },
            {
                label: "Logout",
                url: "/logout"
            }
        ]
    } else {
        auth.loggedIn = false;
        auth.menu = [
            {
                label: "Login",
                url: "/login"
            },
            {
                label: "Register",
                url: "/register"
            }
        ]
    }
})

export function signIn(email, password){
    signInWithEmailAndPassword(firebase.auth, email, password)
        .then((userCredential) => {
            window.location.href = "/";
        }).catch((errorMsg) => {
            //error.show = true;
            //error.title = `Error ${errorMsg.code}`;
            //error.message.firebase = errorMsg.message;
        })
}

export function googleSignIn(){
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebase.auth, provider)
    .then((result) => {
        window.location.href = "/";
    }).catch((errorMsg) => {
        error.show = true;
        error.title = `Error ${errorMsg.code}`;
        error.message.firebase = errorMsg.message;
    });
}

export function signUp(email, password, firstName, lastName){
    createUserWithEmailAndPassword(auth, email, password, )
    .then((userCredential) => {
        updateProfile(userCredential.user, {
            'displayName': `${firstName} ${lastName}`
        }).then(() => {
            window.location.href = "/";
        });
    })
}

export function logout(){
    signOut(firebase.auth);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    auth.loggedIn = false;
}