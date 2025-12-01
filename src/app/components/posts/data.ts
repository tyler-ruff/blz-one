import { Post } from "@/src/lib/types/post";

import { Visibility } from '@/src/lib/types/post';

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
    visibility: string;
}

/*
export interface IPostCard {
  id: string;
  profile: {
    uid: string;
    displayName: string;
    avatar?: string;
    bio?: string;
  };
  author: string;
  content: string;
  media?: Array<{
    id: string;
    url: string;
    alt?: string;
    type: "image" | "video" | "audio" | "file";
  }>;
  publishDate: string | number | Date;
  visibility: "public" | "private" | "friends";
  //heartsCount: number;
  //commentsCount: number;
}
*/


export interface IPostFeedCard{
    data: Post[]
}