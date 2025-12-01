import { Profile } from '@/src/lib/types/user';
export async function fetchUserFromAPI(uid: string): Promise<Profile>{
    const response = await fetch(`/api/profile?uid=${uid}`);
    return await response.json();
}