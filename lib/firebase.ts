import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

import { firebaseConfig } from '@/config/firebase';

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const realtime = getDatabase(firebaseApp);
const db = getFirestore(firebaseApp);

export { 
    firebaseApp,
    auth,
    db,
    realtime
};