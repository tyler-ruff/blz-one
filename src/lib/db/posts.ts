import { adminDB, adminFirestore, adminStorage } from "@/src/lib/firebase-admin";

export async function getAllPosts(){
    const snap = await adminDB.ref(`posts`).get();
    return snap.exists() ? snap.val() : null;
}

export async function getTotalPostsNumber(){
    const snap = await adminDB.ref(`posts`).get();
    return snap.exists() ? snap.numChildren : 0;
}

export async function getPosts(limit: number, cursor: any){
    if(cursor === ""){
        const snap = await adminDB.ref(`posts`).limitToFirst(limit).orderByKey().get();
        return snap.exists() ? snap.val() : null;
    } else {
        const snap = await adminDB.ref(`posts`).limitToFirst(limit).orderByKey().startAfter(cursor).get();
        return snap.exists() ? snap.val() : null;
    }
}