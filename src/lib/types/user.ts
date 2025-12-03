export interface User{
    uid: string;
    email: string;
    displayName: string;
}

export interface Profile{
    uid: string;
    avatar?: string;
    avatarURL?: string;
    displayName: string;
    theme?: string;
    lastOnline?: string;
    createdAt?: string;
    bio?: string;
}
