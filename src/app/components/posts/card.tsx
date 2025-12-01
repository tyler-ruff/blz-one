//import { PostCardProps } from "@/interfaces/PostCardProps";
import Link from 'next/link';

import { IPostCard } from './data';

import { useUser } from '@/src/lib/cache';

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/src/app/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/src/app/components/ui/avatar";
import { Button } from "@/src/app/components/ui/button";
import { Badge } from "@/src/app/components/ui/badge";
import { EllipsisVertical, Heart, MessageCircle, Share2 } from "lucide-react";

export default function PostCard({
  author,
  content,
  media,
  publishDate,
  visibility,
}: IPostCard) {
  const userProfile = useUser(author).data;
  return (
    <Card className="w-full max-w-2xl mx-auto mb-6 shadow-sm rounded-2xl border border-base-300 bg-base-100">
      
      {/* Header */}
      <CardHeader className="flex flex-row items-start justify-between pb-0">
        
        {/* Left: Avatar + Name */}
        <div className="flex items-center gap-3">
          <Link href={`/u/${author}`}>
            <Avatar className="h-10 w-10">
                <AvatarImage src={userProfile?.avatar} alt={userProfile?.displayName} />
                <AvatarFallback>
                {userProfile?.displayName?.slice(0, 2)?.toUpperCase()}
                </AvatarFallback>
            </Avatar>
          </Link>

          <div className="flex flex-col">
            <Link href={`/u/${author}`} className="hover:underline">
                <span className="font-semibold leading-tight">
                    {userProfile?.displayName}
                </span>
            </Link>
            <span className="text-xs opacity-70">
              {new Date(publishDate).toLocaleString()}
            </span>
          </div>
        </div>

        {/* Post Options */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-base-200"
        >
          <EllipsisVertical className="h-5 w-5" />
        </Button>
      </CardHeader>

      {/* Visibility Badge */}
      <div className="px-6 pt-2">
        <Badge variant="secondary" className="text-xs">
          {visibility}
        </Badge>
      </div>

      {/* Content */}
      <CardContent className="pt-4 space-y-3">
        <p className="text-base leading-relaxed">{content}</p>

        {/* Media Grid */}
        {media && media.length > 0 && (
          <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden mt-2">
            {media.map((file) => (
              <img
                key={file.id}
                src={file.url}
                alt={file.alt ?? ""}
                className="rounded-xl max-h-64 w-full object-cover border border-base-300 bg-base-200"
              />
            ))}
          </div>
        )}
      </CardContent>

      {/* Footer / Actions */}
      <CardFooter className="flex items-center justify-between pt-3 border-t border-base-300">
        <div className="flex gap-3">
          <Button variant="ghost" size="sm" className="gap-2">
            <Heart className="h-5 w-5" />
            <span className="hidden sm:block">Like</span>
          </Button>

          <Button variant="ghost" size="sm" className="gap-2">
            <MessageCircle className="h-5 w-5" />
            <span className="hidden sm:block">Comment</span>
          </Button>

          <Button variant="ghost" size="sm" className="gap-2">
            <Share2 className="h-5 w-5" />
            <span className="hidden sm:block">Share</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}


{/*
    <article className="post-card">
      <header>
        <img src={author} alt={author} />
        <h4>{ userProfile?.displayName }</h4>
      </header>

      <p>{content}</p>

      {media !== undefined && (
        <div className="media-grid">
          {media.map(file => (
            <img key={file.id} src={file.url} alt={file.alt ?? ""} />
          ))}
        </div>
      )}

      <footer>
        <span>{new Date(publishDate).toLocaleString()}</span>
        <span>{visibility}</span>
      </footer>
    </article>
    */}