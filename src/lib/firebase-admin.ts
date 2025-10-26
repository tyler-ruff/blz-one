import { initializeApp, getApps, cert } from 'firebase-admin/app';

/* DO NOT DELETE - Dev Config */

/*
const firebaseAdminConfig = {
    credential: cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
    })
}

export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}
*/

/* DO NOT DELETE - Prod Config */
export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp();
    }
}