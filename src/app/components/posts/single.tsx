'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import TextareaAutosize from "react-textarea-autosize"
import { LinkIt } from 'react-linkify-it';

import { PostCardProps } from './data';
import { getPostById } from '@/src/app/posts/single/actions';

import { timeAgo } from '@/src/lib/functions';

import { useAuthContext } from "@/src/context/AuthContext";
import { Profile, User } from "@/src/lib/types/user";

import { HASHTAG_REGEX } from '@/src/config/posts';

import {
  ArrowLeft,
  Globe,
  Lock,
  MessageSquare,
  Share2,
  Heart,
  MoreHorizontal,
} from "lucide-react";

import { Card, CardContent, CardHeader } from "@/src/app/components/ui/card";
import { Separator } from "@/src/app/components/ui/separator";
import { Button } from "@/src/app/components/ui/button";
import { Badge } from "@/src/app/components/ui/badge";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/src/app/components/ui/input-group";

//import { getPostById, getCommentsForPost } from "@src/lib/api/posts";
import { useUser } from "@/src/hooks/useUser";

import { fetchUserFromAPI } from "@/src/lib/db/users";

import { Spinner } from '../ui/spinner';


export function SinglePost(params: {
    id: string
}){
    const { user } = useAuthContext() as { user: User };
    const router = useRouter();

    const [post, setPost] = useState<any>(null);
    const [comments, setComments] = useState<any[]>([]);
    const [author, setAuthor] = useState<Profile>();
    const [loading, setLoading] = useState(true);

    const postId = params.id;

    /*
    useEffect(() => {
        async function load() {
        const p = await getPostById(postId);
        const a = await fetchUserFromAPI(p ? p.author : "");
        //const h = await getHeartsForPost(postId);
        //const c = await getCommentsForPost(postId);
        setPost(p);
        setAuthor(a);
        //setComments(c);
        setLoading(false);
        }
        load();
    }, [postId]);
    */

    useEffect(() => {
      async function load() {
        setLoading(true);
        const p = await getPostById(postId);
        if(p === null){
          window.location.reload();
        }
        if (!p) {
          window.location.reload();
          //setPost(null);
          //setLoading(false);
          return;
        }
        setPost(p);
        const a = await fetchUserFromAPI(p.author);
        //const { data: author } = useCachedUser(p.author);
        setAuthor(a);
        setLoading(false);
      }
      if (postId) load();
    }, [postId]);

    if (loading || !author?.uid) {
        return (
        <div className="flex justify-center py-20 text-muted-foreground">
            <span className="inline-flex mt-1"><Spinner /></span>
            <span className="inline-flex pl-3 select-none">Loading post…</span>
        </div>
        );
    }

    if (!post) {
        return (
            <div className="flex justify-center py-20 text-muted-foreground">
                Post not found.
            </div>
        );
    }

    const visibilityIcon =
        post.visibility === "public" ? (
            <Globe className="w-4 h-4" />
        ) : (
            <Lock className="w-4 h-4" />
        );
    
    return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Back button */}
      <Button
        variant="ghost"
        className="flex items-center gap-2 mb-4 select-none"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </Button>

      {/* Post */}
      <Card className="shadow-sm border-border/50">
        <CardHeader className="flex flex-row items-start gap-4">
          {/* Avatar */}
          <Link href={`/u/${author?.uid}`}>
            <Image
                src={author?.avatar ?? "/default-avatar.png"}
                alt={author?.displayName || ""}
                width={50}
                height={50}
                className="rounded-full object-cover select-none"
            />
          </Link>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-lg select-all">
                <Link href={`/u/${author?.uid}`} className="hover:underline">
                    {author?.displayName}
                </Link>
              </h2>

                {
                    user?.uid === author?.uid ?
                    (
                        <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    ) : (
                        <span></span>
                    )
                }
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground select-none">
              <span>{new Date(post.publishDate).toLocaleString()}</span>
              <span>·</span>
              <span>{timeAgo(new Date(post.publishDate))}</span>
              <span>·</span>
              <span title={`Visibility: ${post.visibility}`}>
                {visibilityIcon}
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Post text content */}
          <p className="text-base leading-relaxed whitespace-pre-line">
            <LinkIt
                regex={HASHTAG_REGEX}
                component={(match, key) => (
                    <Link title={`Discover ${match} on Blazed One`} className="hover:underline text-gray-800/80" href={`/h/${encodeURIComponent(match.slice(1))}`} key={key}>
                    {match}
                    </Link>
            )}>
                {post.content}
            </LinkIt>
          </p>

          {/* Media gallery */}
          {post.media && post.media.length > 0 && (
            <div className="grid grid-cols-1 gap-2">
              {post.media.map((url: string, i: number) => (
                <Image
                  key={i}
                  src={url}
                  alt="Post media"
                  width={900}
                  height={600}
                  className="rounded-xl object-cover border"
                />
              ))}
            </div>
          )}

          <Separator />

          {/* Action bar */}
          <div className="flex items-center justify-between px-2 pt-2 text-muted-foreground select-none">
            <Button variant="ghost" className="flex gap-2">
              <Heart className="w-4 h-4" />
              Love
            </Button>

            <Link href="#comments">
                <Button variant="ghost" className="flex gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Comment
                </Button>
            </Link>

            <Button variant="ghost" className="flex gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Comments */}

      <div id="comments" className="mt-10 mb-5">
        <h3 className="text-lg font-semibold mb-4 select-none">Comments</h3>

        {comments.length === 0 ? (
          <p className="text-muted-foreground text-sm select-none">No comments yet.</p>
        ) : (
          <div className="space-y-4">
            {comments.map((c, i) => (
              <CommentItem key={i} comment={c} />
            ))}
          </div>
        )}
      </div>

      <Separator />

    
      {/* Sidebar metadata? (optional) */}
      {/* Insert analytics, share panel, related posts, etc. */}
    
      <div className="mt-10">
        {
            user ? <CommentForm /> : ""
        }
        
      </div>
    </div>
  );
}

function CommentForm(){
    return (
        <form>
            <div className="grid w-full relative mx-auto max-w-lg gap-6">
                <InputGroup>
                    <TextareaAutosize
                    data-slot="input-group-control"
                    className="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
                    placeholder="Join in on the conversation..."
                    />
                    <InputGroupAddon align="block-end">
                    <InputGroupButton className="ml-auto" size="sm" variant="default">
                        Submit
                    </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        </form>
    )
}

function CommentItem({ comment }: { comment: any }) {
  const user = useUser(comment.author)?.data;

  return (
    <Card className="border-border/40">
      <CardContent className="flex items-start gap-3 py-4">
        <Image
          src={user?.avatar ?? "/default-avatar.png"}
          alt={user?.displayName || ""}
          width={40}
          height={40}
          className="rounded-full"
        />

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="font-medium text-sm">{user?.displayName}</p>
            <Badge variant="secondary" className="text-xs">
              {new Date(comment.timestamp).toLocaleString()}
            </Badge>
          </div>

          <p className="text-sm mt-1">{comment.text}</p>
        </div>
      </CardContent>
    </Card>
  );
}
