'use client';

import { useEffect, useState, useRef, useCallback } from "react";

//import { v4 as uuidv4 } from 'uuid';

import { ref, query, limitToFirst, startAfter, orderByKey, onValue, get, orderByChild, equalTo } from "firebase/database";
import { realtime } from "@/src/lib/firebase";

//import { getPosts } from "@/src/lib/db/posts";
//import { getUserProfile } from "@/src/lib/db/users";

import PostCard from "./card";
import Loading from "../loading";
import { Spinner } from "../ui/spinner";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/src/app/components/ui/empty";
import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/src/app/components/ui/button";

import { PostCardProps } from './data';
import { Post } from "@/src/lib/types/post";
import type { Profile } from "@/src/lib/types/user";

import { fetchUserProfile } from "./data";
import { getListOfPosts } from "../../posts/feed/actions";

const PAGE_SIZE = 3;

/* ----------------- Fetch profile (cached by component) ------------------ */

/* ------------------------ Fetch Posts Page ------------------------ */


/*
async function fetchPostsBatch(limitNum: number, cursorKey: string | null, userId?: string) {
  const postsRef = ref(realtime, "posts");

  let q;

  if (!cursorKey) {
    // first page
    q = query(postsRef, orderByKey(), limit(limitNum));
  } else {
    // next pages
    q = query(postsRef, orderByKey(), startAfter(cursorKey), limit(limitNum));
  }


  /*
  // Todo: Filter & 
  if(userId && userId !== null){
    q = query(postsRef, orderByChild('author'), equalTo(userId))
  } else {
    q = query(postsRef);
  }
  */
/*
  const snapshot = await get(q);

  const result: Array<{ key: string; post: Post }> = [];

  snapshot.forEach(child => {
    const post = child.val() as Post;
    result.push({ key: child.key!, post });
  });

  return result;
}
*/

export function ListPosts(props: {
  userId?: string;
}){
    const [posts, setPosts] = useState<Array<{ key: string; post: Post }>>([]);
    const [profiles, setProfiles] = useState<Record<string, Profile>>({});
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [lastPostKey, setLastPostKey] = useState<string>("");
    const [totalPosts, setTotalPosts] = useState<number>(0);
    const [hasMore, setHasMore] = useState(true);
    const firstLoadRef = useRef(true);

    const observer = useRef<IntersectionObserver | null>(null);
    //const observerRef = useRef<IntersectionObserver | null>(null);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    /* ---------------- Load next page ---------------- */
  
    const loadNextPage = useCallback(async () => {
        if (!hasMore || loadingMore) return;

        if (firstLoadRef.current) {
          firstLoadRef.current = false;
          return; // skip first observer-triggered load
        }

        setLoadingMore(true);

        const lastKey = posts.length > 0 ? posts[posts.length - 1].post.id : null;

        //const batch = await fetchPostsBatch(PAGE_SIZE, lastKey, props.userId);
        const batch = await getListOfPosts(PAGE_SIZE, lastKey);

        if (batch.length === 0) {
            setHasMore(false);
            setLoading(false);
            setLoadingMore(false);
            return;
        }

        //setPosts(prev => [...prev, ...batch]);
        // Deduplicate posts before adding to list
        setPosts(prev => {
            const map = new Map<string, { key: string; post: Post }>();

            // old posts
            prev.forEach(item => map.set(item.key, item));

            // new posts
            batch.forEach(item => map.set(item.key, item));

            return Array.from(map.values());
        });

        // Preload profiles
        const missingIds = new Set(
            batch.map(item => item.post.author).filter(id => !profiles[id])
        );

        if (missingIds.size > 0) {
            const entries = await Promise.all(
                Array.from(missingIds).map(async id => [id, await fetchUserProfile(id)] as [string, Profile])
            );

            setProfiles(prev => {
                const copy = { ...prev };
                for (const [id, prof] of entries) copy[id] = prof;
                return copy;
            });
        }

        setLoading(false);
        setLoadingMore(false);
    }, [posts, hasMore, loadingMore, profiles, firstLoadRef]);
    
   /*
   const loadNextPage = useCallback(async () => {
      if (!hasMore || loadingMore) return;

      setLoadingMore(true);

      const lastKey = posts.length > 0
        ? posts[posts.length - 1].post.id
        : null;

      const batch = await getListOfPosts(PAGE_SIZE, lastKey);

      if (batch.length === 0) {
        setHasMore(false);
        setLoadingMore(false);
        return;
      }

      setPosts(prev => {
        const map = new Map(prev.map(p => [p.key, p]));
        batch.forEach(item => map.set(item.key, item));
        return Array.from(map.values());
      });

      setLoadingMore(false);
    }, [posts, hasMore, loadingMore]);
    */
    /* ---------------- Initial load ---------------- */
    useEffect(() => {
        loadNextPage();
    }, [loadNextPage]);

    /* ---------------- Infinite Scroll Observer ---------------- */
    /*
    useEffect(() => {
        if (loading || !loadMoreRef.current) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadNextPage();
            }
        },{
          rootMargin: "200px", // only trigger when 200px near bottom
        });

        observer.current.observe(loadMoreRef.current);

        return () => observer.current?.disconnect();
    }, [loading, loadingMore, hasMore, loadNextPage]);
    */
   useEffect(() => {
      const init = async () => {
        setLoading(true);

        const batch = await getListOfPosts(PAGE_SIZE, null);

        if (batch.length === 0) {
          setHasMore(false);
          setLoading(false);
          return;
        }

        setPosts(batch);
        setLoading(false);
      };

      init();
    }, []);

    if (loading) {
        return (
            <div className="py-5 flex justify-center">
                <Loading />
            </div>
        );
    }
    
    if (posts.length === 0) {
        return (
          <Empty className="select-none">
            <EmptyHeader>
              <EmptyMedia variant="icon" />
              <EmptyTitle>No Posts Yet</EmptyTitle>
              <EmptyDescription>
                There haven&apos;t been any posts yet, but you can create the first.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <div className="flex gap-2" />
            </EmptyContent>
            <Button variant="link" asChild className="text-muted-foreground" size="sm">
              <a href="#">
                Learn More <ArrowUpRightIcon />
              </a>
            </Button>
          </Empty>
        );
    }

    return (
        <div className="space-y-3">
            {posts.map(({ key, post }) => {
                const postProps: PostCardProps = {
                  ...post,
                  profile: profiles[post.author] ?? null
                };

                return <PostCard key={key} {...postProps} />;
            })}

            {hasMore && (
                <div ref={loadMoreRef} className="py-20 flex justify-center">
                    <Spinner />
                </div>
            )}
        </div>
    );

}