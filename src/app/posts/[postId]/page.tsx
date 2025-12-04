// /app/post/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { getPostById, getPostComments } from "@/src/lib/db/post";
import { getUserProfile } from "@/src/lib/db/users";

import { timeAgo } from '@/src/lib/functions';

import { LikeButton, ShareButton, CommentForm, CommentsList, PostMenu } from "@/src/app/components/posts/cardNew";
import { Post } from "@/src/lib/types/post";

import { HASHTAG_REGEX } from '@/src/config/posts';
import { LinkIt } from 'react-linkify-it';

import {
  Globe,
  Lock,
} from "lucide-react";

export const revalidate = 30; 
// Static but revalidates every 30 sec (ISR)

export default async function SinglePostPage({
  params,
}: {
  params: Promise<{ postId: string }>
}) {
  const { postId } = await params;

  // Fetch everything server-side
  const post: Post | null = await getPostById(postId);
  //const post = await getPostById('10c94c67-7c59-4c5e-8f1d-0f0d208b3449');
  if (!post) return notFound();

  const profile = post.author
    ? await getUserProfile(post.author)
    : null;

  //const comments = await getPostComments(postId);
  const comments: any[] = [];

  const publishDate = new Date(post.publishDate ?? 0).toLocaleString();
  const publishAgo = timeAgo(new Date(post.publishDate ?? 0));

  const visibilityIcon =
      post.visibility === "public" ? (
          <Globe className="w-3 h-3" />
      ) : (
          <Lock className="w-3 h-3" />
      );

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
    
      <Link href="/" className="text-sm opacity-70 hover:opacity-100">
        ← Back
      </Link>

      {/* Post Card */}
      <article className="mt-4 border rounded-xl p-6 bg-background shadow-sm">
        <header className="flex flex-row items-start justify-between gap-4">
          <div className="flex">
            <Link href={`/u/${profile?.uid}`} className="hover:underline select-none mr-5">
              <Image
                src={profile?.avatar ?? "/default-avatar.png"}
                alt={profile?.displayName ?? "User"}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
            </Link>
            <div className="flex flex-col flex-1">
              <h2 className="font-semibold text-lg">
                <Link href={`/u/${profile?.uid}`} className="hover:underline select-none">
                  {profile?.displayName ?? "Unknown User"}
                </Link>
              </h2>

              <p title="Publish Date" className="flex text-sm text-muted-foreground select-none space-x-5">
                <time className="inline-flex" dateTime={publishDate}>{publishDate}</time> 
                <span className="inline-flex">{publishAgo}</span>
                <span className="inline-flex mt-1" title={`Visibility: ${post.visibility}`}>
                  {visibilityIcon}
                </span>
              </p>
            </div>
          </div>
          <div className="flex">
            <PostMenu authorId={post.author} />
          </div>
        </header>

        {/* Content */}
        <div className="mt-4 whitespace-pre-line leading-relaxed text-base">
          <LinkIt
                regex={HASHTAG_REGEX}
                component={(match, key) => (
                    <Link title={`Discover ${match} on Blazed One`} className="hover:underline text-gray-800/80" href={`/h/${encodeURIComponent(match.slice(1))}`} key={key}>
                      {match}
                    </Link>
            )}>
              {post.content}
            </LinkIt>
        </div>

        {/* Media */}
        {post.media && post.media.length > 0 && (
          <div className="grid gap-3 mt-4">
            {post.media.map((m: any) => (
              <Image
                key={m.url}
                src={m.url}
                alt="Media"
                width={1200}
                height={800}
                className="rounded-lg border object-cover"
              />
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between items-center mt-6">
          <LikeButton postId={postId} initialLikes={0} />
          {/*<span className="text-xs opacity-70">{post.visibility}</span>*/}
          <ShareButton />
        </div>
      </article>

      {/* Comments */}
      <section className="mt-10">
        <h3 className="font-semibold text-lg mb-3">Comments</h3>

        <CommentsList comments={comments} />

        <CommentForm postId={postId} />
      </section>
    </div>
  );
}
