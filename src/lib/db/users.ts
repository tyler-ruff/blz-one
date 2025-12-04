import { adminFirestore } from "@/src/lib/firebase-admin";

export async function getUserProfile(uid: string) {
  const snap = await adminFirestore.doc(`profiles/${uid}`).get();
  return snap.exists ? snap.data() : null;
}