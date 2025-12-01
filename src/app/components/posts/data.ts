import { Post } from "@/src/lib/types/post";

import { Visibility } from '@/src/lib/types/post';

export interface IFormPostSchema{
    author: string;
    publishDate: string;
    content: string;
    media?: string[];
    visibility: Visibility;
}

/*
export interface IPostCard{
    id: string;
    author: string;
    publishDate: string;
    updatedDate?: string;
    content: string;
    media?: string[];
    visibility: string;
    //hearts?: string[];
    //heartsCount: number;
}
*/

export interface IPostCard {
  id: string;
  /*
  author: {
    id: string;
    name: string;
    avatarUrl?: string;
  };
  */
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
}


export interface IPostFeedCard{
    data: Post[]
}