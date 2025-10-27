'use client'

import { auth, db } from '@/src/lib/firebase';
import { createUserWithEmailAndPassword, 
        signInWithPopup, 
        updateProfile, 
        validatePassword,
        GithubAuthProvider, 
        GoogleAuthProvider,
        OAuthProvider,
        onAuthStateChanged
} from 'firebase/auth';


export function googleLogin(){
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential?.accessToken;

        const token = await result.user.getIdToken();
        await fetch("/api/login", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        const user = result.user;
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

export function githubLogin(){
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider).then(async (result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        //const token = credential?.accessToken;
        const token = await result.user.getIdToken();
        await fetch("/api/login", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        const user = result.user;
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
    });
}

export function microsoftLogin(){
    const microsoftProvider = new OAuthProvider('microsoft.com');
    signInWithPopup(auth, microsoftProvider).then(async (result) => {
        // User is signed in.
        // IdP data available in result.additionalUserInfo.profile.

        // Get the OAuth access token and ID Token
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;
        const idToken = credential?.idToken;

        const token = await result.user.getIdToken();
        await fetch("/api/login", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        const user = result.user;
    })
    .catch((error) => {
        // Handle error.
    });
}