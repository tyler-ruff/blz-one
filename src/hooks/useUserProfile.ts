// /hooks/useUserProfile.ts
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(async r => {
  if (!r.ok) throw new Error(`Fetch failed: ${r.status}`);
  return r.json();
});

export function useUserProfile(uid?: string | null) {
  const shouldFetch = typeof uid === "string" && uid.length > 0;

  const { data, error, isValidating, mutate } = useSWR(
    shouldFetch ? `/api/profile?uid=${encodeURIComponent(uid!)}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 1000 * 60 * 2, // 2 minutes
      errorRetryCount: 1,
    }
  );

  return {
    profile: data ?? null,
    loading: shouldFetch && !data && !error,
    error,
    mutate, // allow caller to revalidate/update cache (optimistic UI)
  };
}

/*
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useUserProfile(uid?: string) {
  const shouldFetch = !!uid;

  const { data, error, isLoading } = useSWR(
    shouldFetch ? `/api/profile?uid=${uid}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000, // 1 minute caching
    }
  );

  return {
    profile: data,
    loading: isLoading,
    error
  };
}
*/