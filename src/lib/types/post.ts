export enum Visibility{
    PUBLIC="public",
    FOLLOWERS="followers",
    PRIVATE="private"
}

export interface Post{
    id: string;
    author: string;
    publishDate: string;
    updatedDate?: string;
    content: string;
    /*media?: string[];*/
    media?: Array<{
      id: string;
      url: string;
      alt?: string;
      type: "image" | "video" | "audio" | "file";
    }>;
    hearts?: string[];
    hashtags?: string[];
    visibility: string;
}

export interface Comment{
    id: string;
    postId: string;
    author: string;
    publishDate: string;
    updatedDate: string;
    content: string;
    hearts?: string[];
    replyTo?: string;
}
