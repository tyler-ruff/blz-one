'use server'

import { redirect } from 'next/navigation';

import { v4 as uuidv4 } from 'uuid';

import { Visibility } from '@/src/lib/types/post';

import { realtime } from '@/src/lib/firebase';
import { ref, set, push, onValue, remove, update } from "firebase/database";

import { IFormPostSchema } from '@/src/app/components/posts/data';

export async function createPost(data: IFormPostSchema){
    try{
        const id = uuidv4();
        const parsedData = {
            id: id,
            hearts: [],
            comments: [],
            updatedDate: data.publishDate,
            ...data
        }
        const postRef = ref(realtime, `posts/${id}`);

        set(postRef, JSON.parse(JSON.stringify(parsedData))).then((item) => {
            console.log('Post created!');
        });
    } catch(error: any){
        error = true;
        console.log(`Error submitting form: ${error}`);
    } finally{
        redirect('/');
   }
}