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
    media?: string[];
    hearts?: string[];
    hashtags?: string[];
    visibility: string;
}

export interface Comment{
    id: string;
    author: string;
    linkedPost: string;
    publishDate: string;
    updatedDate: string;
    hearts?: string[];
}
