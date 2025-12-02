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
import useSWR from "swr";
import { fetchUserFromAPI } from "../lib/db/users";

const fetcher = (uid: string) => fetchUserFromAPI(uid);

export function useCachedUser(uid?: string) {
  return useSWR(uid ? ["user", uid] : null, () => fetcher(uid), {
    revalidateOnFocus: false,
    dedupingInterval: 1000 * 60 * 5, // 5 minutes
  });
}
*/

