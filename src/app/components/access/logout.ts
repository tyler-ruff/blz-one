import { redirect } from 'next/navigation';

import { signOut } from "firebase/auth";
import { auth } from '@/src/lib/firebase';

async function logoutUser(){
    await signOut(auth).then(async () => {
          const response = await fetch("/api/logout", {
            method: "POST",
          });
    }).finally(() => {
      redirect('/');
    });
}

export {
    logoutUser
};

