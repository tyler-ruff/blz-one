'use client'

import { useEffect, useState } from 'react';
//import { app, auth } from '@/src/lib/firebase';
import { User } from '@/src/lib/types/user';
//import { onAuthStateChanged } from "firebase/auth";
import { useAuthContext } from '@/src/context/AuthContext';

import Header from '@/src/app/components/header/index';
import Footer from '@/src/app/components/footer/index';
import Loading from '@/src/app/components/loading/index';
import Login from '@/src/app/components/access/login';
import Spinner from '../loading/spinner';

export default function BlzApp({
  children,
}: Readonly<{ children: React.ReactNode }>){
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    //const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
    //const [ user, setUser ] = useState<User | any>(null);
    const { user, profile } = useAuthContext() as { user: User, profile: { avatar?: string } };

    /*
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                //setUserEmail(user.email);
                setUser({... user});
                setIsLoading(false);
                setIsLoggedIn(true);
            } else {
                setIsLoading(false);
                setIsLoggedIn(false);
            }
        });
        return () => unsubscribe();
    }, [])

    */

    /*
    if(isLoading){
        return (
            <Spinner />
        )
    }
    */
    
        if(user){
            return (
                <section id="blz-app">
                    <Header />
                    <main role="main" id="blz-content" className="py-10">
                        {children}
                    </main>
                    <Footer />
                </section>
            )
       } else {
        return (
            <section id="blz-app">
                <Login />
            </section>
        )
       }
}