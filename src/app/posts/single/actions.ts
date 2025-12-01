'use server'

import { redirect } from 'next/navigation';

import { v4 as uuidv4 } from 'uuid';

import { Visibility } from '@/src/lib/types/post';

import { realtime } from '@/src/lib/firebase';
import { ref, set, push, onValue, remove, update } from "firebase/database";

import { Post } from '@/src/lib/types/post';

export async function getPostById(id: string) {
    try{
        const postRef = ref(realtime, `posts/${id}`);
        let data = {};
        onValue(postRef, (snapshot) => {
            data = snapshot.val();
        })
        return data as Post;
    } catch (error){
        
    }
}