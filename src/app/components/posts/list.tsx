'use client';

import { useEffect, useState, useRef } from "react";
import { ref, onValue } from "firebase/database";
import { realtime } from "@/src/lib/firebase";

import { useUser } from "@/src/hooks/useUser";

import PostCard from "./card";
import Loading from "../loading";
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

import type { PostCardProps } from "./data";

import type { Profile } from "@/src/lib/types/user";

export function ListPosts() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PostCardProps[]>([]);
  const [userProfiles, setUserProfiles] = useState<Record<string, Profile>>({});

  // Optional: use ref to avoid multiple subscriptions
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const postRef = ref(realtime, "posts");

    const unsubscribe = onValue(postRef, (snapshot) => {
      const postList: PostCardProps[] = [];
      const authorsToFetch = new Set<string>();

      snapshot.forEach((child) => {
        const rawData = child.val();
        //postList.push(normalizePost(rawData));
        const post = normalizePost(rawData);
        postList.push(post);

        if (!userProfiles[post.author.uid]) {
          authorsToFetch.add(post.author.uid);
        }
      });
      setPosts(postList);

      // Fetch missing user profiles
      authorsToFetch.forEach((authorId) => {
        const { data } = useUser(authorId); // Assuming useUser is synchronous or returns cached data
        if (data) {
          setUserProfiles((prev) => ({ ...prev, [authorId]: data }));
        }
      });

      setLoading(false);
    });

    // Clean up listener
    return () => unsubscribe();
  }, [userProfiles]);

  // Normalize raw Firebase post to PostCardProps
  function normalizePost(raw: any): PostCardProps {
    return {
      id: String(raw.id ?? raw.key ?? Date.now()),
      author: {
        uid: String(raw.author?.id ?? "unknown"),
        displayName: String(raw.author?.name ?? "Unknown"),
        avatar: raw.author?.avatarUrl ?? null,
      },
      content: String(raw.content ?? ""),
      media: Array.isArray(raw.media)
        ? raw.media.filter((m: string) => m && typeof m === "object")
        : [],
      publishDate: raw.publishDate ?? Date.now(),
      visibility: raw.visibility ?? "public",
      heartsCount: 0,
      commentsCount: 0
    };
  }

  // Loading state
  if (loading) {
    return (
      <div className="py-5 flex justify-center">
        <Loading />
      </div>
    );
  }

  // Empty state
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
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}
