'use client'

import { useEffect, useState } from 'react';
//import { app, auth } from '@/src/lib/firebase';
import { User } from '@/src/lib/types/user';
//import { onAuthStateChanged } from "firebase/auth";
import { useAuthContext } from '@/src/context/AuthContext';
import { usePathname } from 'next/navigation'

import Header from '@/src/app/components/header/index';
import Footer from '@/src/app/components/footer/index';
import Loading from '@/src/app/components/loading/index';
import Spinner from '../loading/spinner';

export default function BlzApp({
  children
}: Readonly<{ children: React.ReactNode }>){
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const pathname = usePathname();
    const segments = pathname.split('/');
    const { user, profile } = useAuthContext() as { user: User, profile: { avatar?: string } };

    if(pathname.startsWith('/login') || pathname.startsWith('/register') || pathname.startsWith('/forgot')){
        return (
            <section id="blz-app">
                <main role="main" id="blz-content">
                    {children}
                </main>
            </section>
        )
    }

    return (
        <section id="blz-app">
            <Header />
            <main role="main" id="blz-content" className="py-10">
                {children}
            </main>
            <Footer />
        </section>
    )
}