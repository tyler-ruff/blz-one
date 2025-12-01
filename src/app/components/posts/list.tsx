'use client';

import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { realtime } from "@/src/lib/firebase";

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

// Replace this with your actual API / hook function
async function fetchUserProfile(authorId: string): Promise<Profile> {
    try{
        const response = await fetch(`/api/profile?uid=${authorId}`);
        if(!response.ok){
            throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        return result;
    } catch (err: any) {
        return {
          uid: authorId,
          displayName: `User ${authorId}`,
          avatar: ""
        };
    }
}

export function ListPosts() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PostCardProps[]>([]);
  const [userProfiles, setUserProfiles] = useState<Record<string, Profile>>({});

  useEffect(() => {
    const postRef = ref(realtime, "posts");

    const unsubscribe = onValue(postRef, async (snapshot) => {
      const postList: PostCardProps[] = [];
      const authorsToFetch = new Set<string>();

      snapshot.forEach((child) => {
        const rawData = child.val();
        const post = normalizePost(rawData);
        postList.push(post);

        if (!userProfiles[post.author]) {
          authorsToFetch.add(post.author);
        }
      });

      setPosts(postList);

      // Fetch all missing author profiles in parallel
      const profilesArray = await Promise.all(
        Array.from(authorsToFetch).map(async (id) => {
          const profile = await fetchUserProfile(id);
          return [id, profile] as [string, Profile];
        })
      );

      // Merge profiles into state
      setUserProfiles((prev) => {
        const copy = { ...prev };
        profilesArray.forEach(([id, profile]) => {
          copy[id] = profile;
        });
        return copy;
      });

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  function normalizePost(raw: any): PostCardProps {
    return {
      id: String(raw.id ?? raw.key ?? Date.now()),
      author: String(raw.author),
      profile: {
        uid: String(raw.author?.uid ?? "unknown"),
        displayName: String(raw.author?.displayName ?? "Unknown"),
        avatar: raw.author?.avatar ?? ""
      },
      content: String(raw.content ?? ""),
      media: Array.isArray(raw.media)
        ? raw.media.filter((m: any) => m && typeof m === "object")
        : [],
      publishDate: raw.publishDate ?? Date.now(),
      visibility: raw.visibility ?? "public",
    };
  }

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
      {posts.map((post) => {
        const profile = userProfiles[post.author];
        return <PostCard key={post.id} {...post} profile={profile} />;
      })}
    </div>
  );
}
