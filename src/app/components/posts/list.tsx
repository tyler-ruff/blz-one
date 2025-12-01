'use client'

import { useEffect, useState, useRef } from "react";

import { ref, push, onValue, remove, update } from "firebase/database";
import { realtime } from "@/src/lib/firebase";

import { Post } from "@/src/lib/types/post";

import { ArrowUpRightIcon } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/src/app/components/ui/empty";
import { Button } from "@/src/app/components/ui/button";
import PostCard from "./card";
import Loading from "../loading";

import { IPostCard } from "./data";


export function ListPosts(){
    const [loading, setLoading] = useState<boolean>(true);
    const [posts, setPosts] = useState<Post[]>([]);

    function normalizePost(raw: any): IPostCard {
        return {
            id: String(raw.id),
            author: String(raw.author),
            /*
            author: {
            id: String(raw.author?.id),
            name: String(raw.author?.name ?? "Unknown"),
            avatarUrl: raw.author?.avatarUrl ?? null,
            },
            */
            content: String(raw.content ?? ""),
            /*
            media: Array.isArray(raw.media)
            ? raw.media.filter(m => typeof m === "object" && !("stack" in m)) // no Error objects
            : [],
            */
            publishDate: raw.publishDate ?? Date.now(),
            visibility: raw.visibility ?? "public",
        };
    }

    useEffect(() => {
        const loadPosts = async () => {
            setPosts([]);
            setLoading(true);
            const postList = [] as Post[];
            const postRef = ref(realtime, 'posts');
            onValue(postRef, async(snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const rawData = childSnapshot.val();
                    const prepData = {
                        ...rawData,
                    } as Post;
                    postList.push(prepData);
                });
                setPosts(postList);
                setLoading(false);
            })
        }

        loadPosts();
    }, []);

    if(loading){
        return (
            <div className="py-5">
                <Loading />
            </div>
        )
    }

    if(posts.length <= 0){
        return (
             <Empty className="select-none">
                <EmptyHeader>
                    <EmptyMedia variant="icon">
                    
                    </EmptyMedia>
                    <EmptyTitle>No Posts Yet</EmptyTitle>
                    <EmptyDescription>
                        There haven't been any posts yet, but you can create the first.
                    </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                    <div className="flex gap-2">

                    </div>
                </EmptyContent>
                <Button
                    variant="link"
                    asChild
                    className="text-muted-foreground"
                    size="sm">
                    <a href="#">
                    Learn More <ArrowUpRightIcon />
                    </a>
                </Button>
            </Empty>
        )
    }
    
    return (
        <div className="space-y-3">
            {
                posts.map((postObj, index) => {
                    const post = normalizePost(postObj);
                    return <PostCard key={index} {...post} />
                })
            }
        </div>
    )
}