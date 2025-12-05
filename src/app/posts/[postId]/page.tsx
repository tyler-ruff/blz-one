// /app/post/[id]/page.tsx
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { getPostById, getPostComments } from "@/src/lib/db/post";
//import { getUserProfile } from "@/src/lib/db/users";
import { getUser } from '@/src/app/u/actions';

import { timeAgo, truncateText } from '@/src/lib/functions';

import { LikeButton, ShareButton, PostMenu } from "@/src/app/components/posts/single";
import { CommentsSection } from "../../components/comments";

import { Post } from "@/src/lib/types/post";

import { HASHTAG_REGEX } from '@/src/config/posts';
import { LinkIt } from 'react-linkify-it';

import { config, url } from "@/src/config/app";

import {
  Globe,
  Lock,
} from "lucide-react";

export const revalidate = 30; 
// Static but revalidates every 30 sec (ISR)

type Props = {
  params: Promise<{ postId: string }>
  //searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: { params: { postId: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { postId } = await params;

  const post = await getPostById(postId);
  const profile = post?.author ? await getUser(post.author) : null;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `View Single Post by ${profile?.profile.displayName || "John Doe"}`,
    description: `"${post?.content}"`,
    openGraph: {
      images: [profile?.avatarURL || "", ...previousImages],
    },
  };
}

/*
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata>{
  const { postId } = await params;
  const post: Post | null = await getPostById(postId);
  const profile = post?.author
    ? await getUserProfile(post.author)
    : null;
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: `View Single Post by ${profile?.displayName}`,
    description: `"${post?.content}"`,
    openGraph: {
      images: [profile?.avatar, ...previousImages]
    }
  };
}
*/

export default async function SinglePostPage({
  params,
}: {
  params: Promise<{ postId: string }>
}) {
  
  const { postId } = await params;

  // Fetch everything server-side
  const post: Post | null = await getPostById(postId);

  if (!post) return notFound();

  const profile = post.author
    ? await getUser(post.author)
    : null;

  const comments = await getPostComments(postId);
  const commentCount = comments.length;

  const authorAvatar = profile?.avatarURL.startsWith("https") ? 
  profile?.avatarURL : `${url}/api/image?path=profile_pictures/${profile?.profile.uid}/${profile?.avatarURL}_98x98.png`;

  const publishDate = new Date(post.publishDate ?? new Date()).toLocaleString();
  const publishAgo = timeAgo(new Date(post.publishDate ?? new Date()));
  const updateDate = new Date(post.updatedDate ?? new Date()).toLocaleString();
  const simpleDate = new Date(post.publishDate ?? new Date()).toLocaleDateString();

  const contentWordCount = post.content.length;
  const headline = truncateText(post.content, 150);

  const postSingleSchema = {
    '@context': 'https://schema.org',
    '@type': 'SocialMediaPosting',
    '@id': `${url}/posts/${postId}`,
    'url': `${url}/posts/${postId}`,
    'discussionUrl': `${url}/posts/${postId}#comments`,
    'datePublished': simpleDate,
    'dateModified': updateDate,
    'description': `A post by ${profile?.profile.displayName}`,
    'wordCount': contentWordCount,
    'commentCount': `${commentCount}`,
    'text': post.content,
    'author': {
      '@type': 'Person',
      'name': profile?.profile.displayName,
      'url': `${url}/u/${profile?.profile.uid}`,
    },
    'headline': headline,
    'sharedContent': {
      '@type': "WebPage",
      'headline': headline,
      'url': `${url}/posts/${postId}`,
      'author':{
        '@type': 'Person',
        'name':  profile?.profile.displayName
      }
    }
  }

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

      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(postSingleSchema) }}
      />

      {/* Post Card */}
      <article className="mt-4 border rounded-xl p-6 bg-background shadow-sm">
        <header className="flex flex-row items-start justify-between gap-4">
          <div className="flex">
            <Link href={`/u/${profile?.profile.uid}`} className="hover:underline select-none mr-5">
              <Image
                src={authorAvatar ?? config.defaultAvatar}
                alt={profile?.profile.displayName ?? "User"}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
            </Link>
            <div className="flex flex-col flex-1">
              <h2 className="font-semibold text-lg">
                <Link href={`/u/${profile?.profile.uid}`} className="hover:underline select-none">
                  {profile?.profile.displayName ?? "Unknown User"}
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
        <div className="mt-4 pt-3 whitespace-pre-line leading-relaxed text-base">
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
      <CommentsSection comments={comments} postId={postId} />
    </div>
  );
}
