//import { initializeApp, getApps, cert } from 'firebase-admin/app';

import * as admin from "firebase-admin";

/* DO NOT DELETE - Dev Config */
/*
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID!,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL!,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    }),
    //databaseURL: process.env.FIREBASE_DATABASE_URL!,
    databaseURL: 'http://localhost:9000/?ns=blz-one-9e383-default-rtdb'
  });
}
*/

/* TODO: Remove old config */
/*

const firebaseAdminConfig = {
    credential: cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
    }),
    //databaseURL: `http://localhost:9000`,
    databaseURL: 'http://localhost:9000/?ns=blz-one-9e383-default-rtdb'
}

export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}
*/
/* ------------------ */
/*
export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp();
    }
}
*/

/* DO NOT DELETE - Prod Config */

if (!admin.apps.length) {
  admin.initializeApp();
}


export const adminDB = admin.database();
export const adminFirestore = admin.firestore();
