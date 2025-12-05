import { IDropdownMenuItem } from "@/src/lib/types/dropdown";
import { Post } from "@/src/lib/types/post";

import { Visibility } from '@/src/lib/types/post';
import { Profile } from "@/src/lib/types/user";

export interface IFormPostSchema{
    author: string;
    publishDate: string;
    content: string;
    media?: string[];
    visibility: Visibility;
}

export interface PostCardProps{
    id: string;
    author: string;
    profile: {
      uid: string;
      displayName: string;
      avatar?: string;
      bio?: string;
    };
    publishDate: string;
    updatedDate?: string;
    content: string;
    //media?: string[];
    media?: Array<{
      id: string;
      url: string;
      alt?: string;
      type: "image" | "video" | "audio" | "file";
    }>;
    heartCount?: number;
    commentCount?: number;
    
    visibility: string;
}

export interface IDropdownMenuData {
    children: [
        IDropdownMenuItem[]
    ];
}

export interface IPostFeedCard{
    data: Post[]
}


export async function fetchUserProfile(uid: string): Promise<Profile> {
  if (!uid) {
    return { uid, displayName: "Unknown", avatar: "" };
  }

  try {
    const res = await fetch(`/api/profile?uid=${uid}`);
    if (!res.ok) throw new Error("Profile not found");
    return await res.json();
  } catch {
    return {
      uid,
      displayName: `User ${uid}`,
      avatar: ""
    };
  }
}