import { signOut } from "firebase/auth";
import { auth } from '@/src/lib/firebase';

async function logoutUser(){
    await signOut(auth);
    const response = await fetch("/api/logout", {
      method: "POST",
    });
}

export {
    logoutUser
};

