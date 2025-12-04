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
    databaseURL: 'http://localhost:9000/?ns=blz-one-9e383-default-rtdb',
    storageBucket: 'blz-one-9e383.appspot.com'
  });
}
*/

/* DO NOT DELETE - Prod Config */

if (!admin.apps.length) {
  admin.initializeApp();
}


export const adminApp = admin.apps[0];

export const adminDB = admin.database();
export const adminFirestore = admin.firestore();
export const adminStorage = admin.storage();
