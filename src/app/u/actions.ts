'use server'

import { cache } from 'react';

import { db, storage } from "@/src/lib/firebase";
import { getDoc, doc } from "firebase/firestore";
import { ref, getDownloadURL } from 'firebase/storage';

import { Profile } from '@/src/lib/types/user';

export const preload = (id: string) => {
  void getUser(id)
}
 
export const getUser = cache(async (uid: string) => {
    async function getAvatarURL(uid: string, avatar: string){
        // Get avatar URL
        //let avatarURL = "";
        if(!avatar.startsWith('https://')){
            // Handle all cloud storage profile pictures
            const size: { width: number, height: number } = {
                width: 98,
                height: 98
            };
            const fileType = "png";
            const avatarRef = ref(storage, `profile_pictures/${uid}/${avatar}_${size.width}x${size.height}.${fileType}`);
            const avatarURL = await getDownloadURL(avatarRef);
            return avatarURL;
        } else {
            return avatar;
        }
    }
  try{
        const userDoc = doc(db, "profiles", uid);
        const userSnapshot = await getDoc(userDoc);

        const userProfile = userSnapshot.exists() ? userSnapshot.data() : null;

        if(userProfile === null){
            return null;
        }

        const avatarURL = await getAvatarURL(uid, userProfile.avatar);

        return {
            avatarURL: avatarURL,
            profile: userProfile as Profile
        }
    } catch (error){
        return null;
    }
})

export async function getProfileById(uid: string){
    async function getAvatarURL(uid: string, avatar: string){
        // Get avatar URL
        //let avatarURL = "";
        if(!avatar.startsWith('https://')){
            // Handle all cloud storage profile pictures
            const size: { width: number, height: number } = {
                width: 98,
                height: 98
            };
            const fileType = "png";
            const avatarRef = ref(storage, `profile_pictures/${uid}/${avatar}_${size.width}x${size.height}.${fileType}`);
            const avatarURL = await getDownloadURL(avatarRef);
            return avatarURL;
        } else {
            return avatar;
        }
    }
    try{
        const userDoc = doc(db, "profiles", uid);
        const userSnapshot = await getDoc(userDoc);

        const userProfile = userSnapshot.exists() ? userSnapshot.data() : null;

        if(userProfile === null){
            return null;
        }

        const avatarURL = await getAvatarURL(uid, userProfile.avatar);

        return {
            avatarURL: avatarURL,
            profile: userProfile as Profile
        }
    } catch (error){
        return null;
    }
}