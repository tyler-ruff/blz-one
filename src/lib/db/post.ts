import { adminDB, adminFirestore, adminStorage } from "@/src/lib/firebase-admin";

export async function getPostById(id: string) {
  const snap = await adminDB.ref(`posts/${id}`).get();
  return snap.exists() ? snap.val() : null;
}

export async function getPostComments(postId: string) {
  const snap = await adminDB.ref(`posts/${postId}/comments`).get();
  if (!snap.exists()) return [];
  const raw = snap.val();
  return Object.keys(raw).map(k => ({ id: k, ...raw[k] }));
}