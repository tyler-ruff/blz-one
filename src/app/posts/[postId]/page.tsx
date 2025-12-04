// /app/post/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { getPostById, getUserProfile, getPostComments } from "@/src/lib/db/post";
import { timeAgo } from '@/src/lib/functions';

import { LikeButton } from "@/src/app/components/posts/cardNew";
import { CommentForm } from "@/src/app/components/posts/cardNew";
import { CommentsList } from "@/src/app/components/posts/cardNew";
import { Post } from "@/src/lib/types/post";

import { HASHTAG_REGEX } from '@/src/config/posts';
import { LinkIt } from 'react-linkify-it';

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

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
    
      <Link href="/" className="text-sm opacity-70 hover:opacity-100">
        ← Back
      </Link>

      {/* Post Card */}
      <article className="mt-4 border rounded-xl p-6 bg-background shadow-sm">
        <header className="flex items-start gap-4">
          <Link href={`/u/${profile?.uid}`} className="hover:underline select-none">
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

            <p title="Publish Date" className="text-sm text-muted-foreground select-none">
              {publishDate} &bull; {publishAgo} &bull; {post.visibility}
            </p>
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
          <span className="text-xs opacity-70">{post.visibility}</span>
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
