import { useQuery } from '@tanstack/react-query';

import { fetchUserFromAPI } from '@/src/lib/db/users';

export function useUser(uid: string) {
  return useQuery({
    queryKey: ['user', uid],
    queryFn: () => fetchUserFromAPI(uid),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 60,   // 1 hour
  });
}

/*
export function usePost(id: string){
    return useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPostFromAPI(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 60,   // 1 hour
  });
}
*/