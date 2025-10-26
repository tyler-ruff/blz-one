'use client'

import { useEffect, useState } from 'react';
import { app, auth } from '../../lib/firebase';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { User } from '@/src/lib/types/user';

export default function Login(){
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
  //const [ userEmail, setUserEmail ] = useState<string | null>(null);
  const [ user, setUser ] = useState<User | any>(null);

  function googleLogin(){
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      hd: "blazed.space"
    });

    signInWithPopup(auth, provider)
      .then(function(result) {
        var user = result.user;
        const currentUser: User = {
          email: user.email,
          displayName: user.displayName
        } as User
        setUser(currentUser);
      })
      .catch(function(error) {
        console.log("Error signing in:", error);
      });
  }

  function logoutUser(){
    signOut(auth);
  }

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            //setUserEmail(user.email);

            setIsLoading(false);
            setIsLoggedIn(true);
        } else {
            setIsLoading(false);
            setIsLoggedIn(false);
        }
    });
    return () => unsubscribe();
  }, [])

  if(isLoading){
        return (
            <span>
                Loading...
            </span>
        )
  } else {
    if(isLoggedIn){
        return (
                <div>
                    <span>
                        Logged in as: {user.email || ``}
                    </span>
                    &nbsp;&nbsp;
                    <button onClick={logoutUser}>
                        Logout
                    </button>
                </div>
            )
    } else {
        return (
          <div>
                <button onClick={googleLogin}>Google Login</button>
          </div>
        )
    }
  }

}