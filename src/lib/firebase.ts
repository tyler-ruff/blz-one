
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

//import { firebaseConfig } from '@/src/config/firebase';


const app = initializeApp();
//const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const realtime = getDatabase(app);
const storage = getStorage(app);

export const isAuthenticated = () => {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(!!user);
      });
    });
};

export {
    app,
    auth,
    db,
    realtime,
    storage
};
