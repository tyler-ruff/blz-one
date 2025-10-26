'use client'
import { createContext, useContext, useEffect, useState, ReactNode, ReactElement } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from '../lib/firebase';

import Loading from '@/src/app/components/loading/index';
import { generateRandomHex } from '@/src/lib/functions';
import { Profile } from '@/src/lib/types/user';
import { url } from '../config/app';

export const AuthContext = createContext( {} );

export const useAuthContext = () => useContext( AuthContext );

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider( { children }: AuthContextProviderProps ): ReactElement {
    const [ user, setUser ] = useState<User | null>( null );
    const [ profile, setProfile ] = useState<Profile | null>(null);
    const [ loading, setLoading ] = useState( true );
    
    const LoadingSpinner = () => {
        return (
        <div className="text-center dark:bg-gray-800">
            <Loading />
        </div>
        )
    }

    useEffect( ( ) => {
        async function getProfile(user: any){
            try{
                const res = await fetch(`${url}/api/profile?uid=${user.uid}`);
                const data = await res.json();
                
                if (data?.message?.includes('cannot be found')) {
                    //Profile not found; create new one
                    const docRef = doc(db, "profiles", user.uid);
                    setDoc(docRef, {
                        uid: user.uid,
                        avatar: `https://blazed.sirv.com/util/default-avatar.jpg`,
                        displayName: user.displayName,
                        theme: generateRandomHex(),
                        createdAt: user.metadata.creationTime,
                        lastOnline: user.metadata.lastSignInTime
                    })
                    setProfile(null);
                    
                } else {
                    setProfile(data);
                }

            } catch (error){
                console.error('Error fetching profile:', error);
                setProfile(null); // fallback on error
            }
        }
        const unsubscribe = onAuthStateChanged( auth, ( user ) => {
        if ( user ) {
            // User is signed in
            setUser( user );
            getProfile( user );
        } else {
            // User is signed out
            setUser( null );
        }
        // Set loading to false once authentication state is determined
        setLoading( false );
        } );
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, profile }}>
            {loading ? <LoadingSpinner /> : children}
        </AuthContext.Provider>
    )
}

