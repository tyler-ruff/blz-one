import { ref, query, limitToFirst, startAfter, orderByKey, onValue, get, orderByChild, equalTo } from "firebase/database";
import { realtime } from "@/src/lib/firebase";


import { Post } from '@/src/lib/types/post';

export async function getListOfPosts(limit: number, cursorKey: string | null){
    const postsRef = ref(realtime, "posts");

    let q;

    if(!cursorKey){
        q = query(postsRef, orderByKey(), limitToFirst(limit));
    } else {
    // next pages
        q = query(postsRef, orderByKey(), startAfter(cursorKey), limitToFirst(limit));
    }

    const snapshot = await get(q);

    const result: Array<{ key: string; post: Post }> = [];

    snapshot.forEach(child => {
        const post = child.val() as Post;
        result.push({ key: child.key!, post });
    })

    return result;
}

//export async function getListOfUsersPosts()
