'use client'

import Image from 'next/image';
import Link from 'next/link';

import React, { ChangeEvent, FormEvent, useEffect, useState, useRef, useCallback } from "react";

import { Profile, User } from "@/src/lib/types/user";
import { useAuthContext } from "@/src/context/AuthContext";
import { fetchUserProfile } from "@/src/app/components/posts/data";

import { timeAgo } from '@/src/lib/functions';

import { Comment } from '@/src/lib/types/post';

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/src/app/components/ui/card";

import { Button } from "@/src/app/components/ui/button";
import { ButtonGroup } from "@/src/app/components/ui/button-group";
import { Badge } from "@/src/app/components/ui/badge";
import { Spinner } from '@/src/app/components/ui/spinner';

import {
  MessageSquareReply,
  Heart,
  Share
} from "lucide-react";
import { CommentForm } from './form';
import { ReplyCallback } from './data'


export function CommentsSection(props: {
    postId: string;
    comments: Comment[]
}){
    const [replyTo, setReplyTo] = useState<string | undefined>(undefined);

    const commentCount = props.comments.length;

    const updateReplyTo = (commentId: string | undefined) => {
        setReplyTo(commentId);
        const replyUser = props.comments.find(item => item.id === commentId);
        replyUser?.author
    }

    return (
        <section className="mt-10">
            <h3 className="font-semibold text-lg mb-3 select-none">
                Comments
            </h3>
            <CommentsList comments={props.comments} />
            {
            /*JSON.stringify(comments)*/
            }
            <CommentForm 
                postId={props.postId}
                updateReplyTo={updateReplyTo}
            />
        </section>
    )
}

export function CommentItem(props: { comment: Comment, profile: Profile }) {

  const publishDateObj = new Date(props.comment.publishDate);
  const publishedDate = publishDateObj.toLocaleString();
  const publishedAgo = timeAgo(publishDateObj);
  
  return (
    <Card className="border-none group">
      <CardContent className="flex items-start gap-3 py-4">
        <Link 
          title={`View ${props.profile?.displayName}'s Profile`} 
          href={`/u/${props.profile?.uid}`}
        >
          <Image
            src={props?.profile?.avatar || ""}
            alt={props?.profile?.displayName || ("")}
            width={40}
            height={40}
            className="rounded-full select-none mt-3"
          />
        </Link>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="font-bold text-sm select-none py-2">
              <Link 
                title={`View ${props.profile?.displayName}'s Profile`} 
                href={`/u/${props.profile?.uid}`}
                className="hover:underline"
              >
                {props.profile?.displayName}
              </Link>
            </p>
            <span className="flex">
              <Badge variant="secondary" className="inline-flex text-xs select-none">
                <time dateTime={publishedDate}>
                  {publishedAgo}
                </time>
              </Badge>
              <Badge variant="outline" className="inline-flex text-xs select-none hidden group-hover:inline-flex border-none text-zinc-500/70">
                <time dateTime={publishedDate}>
                  {publishedDate}
                </time>
              </Badge>
            </span>
          </div>
          <p className="text-sm mt-1">
            {props.comment.content}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="space-x-2">
          <ButtonGroup className="inline-flex">
            <Button size="sm" variant="ghost" className="space-x-1 select-none cursor-pointer">
              <Heart className="inline-flex w-3 h-3" /*fill="red" color="red"*/ />
              <span className="inline-flex text-xs">
                Love
              </span>
            </Button>
            <Badge variant="secondary" className="select-none">
                5
            </Badge>
          </ButtonGroup>
          <Button size="sm" onClick={() => {alert(`Reply to: ${props.comment.id}`)}} variant="ghost" className="space-x-1 select-none cursor-pointer">
            <MessageSquareReply className="inline-flex w-3 h-3" />
            <span className="inline-flex text-xs">
              Reply
            </span>
          </Button>
          <Button size="sm" onClick={() => {alert(`Share`)}} variant="ghost" className="space-x-1 select-none cursor-pointer">
            <Share className="inline-flex w-3 h-3" />
            <span className="inline-flex text-xs">
              Share
            </span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export function CommentsList(props: {
  comments: any[];
}){
  const [loading, setLoading] = useState<boolean>(true);
  const [profiles, setProfiles] = useState<Record<string, Profile>>({});

  const loadComments = useCallback(async () => {
    const missingIds = new Set(
        props.comments.map(item => item.author).filter(id => !profiles[id])
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
  }, [props.comments, profiles]);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  if (loading) {
        return (
            <div className="py-5 flex justify-center">
                <Spinner />
            </div>
        );
    }

  return (
      <div id="comments" className="mt-10 mb-5">
        {props.comments.length === 0 ? (
          <p className="text-muted-foreground text-sm select-none">No comments yet.</p>
        ) : (
          <div className="space-y-4">
            {
              props.comments.map((comment, index) => (
                <CommentItem key={index} comment={comment} profile={profiles[comment.author]} />
              ))
            }
          </div>
        )}
      </div>
  )
}

