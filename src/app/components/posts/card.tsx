'use client'

import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect, useMemo, memo } from 'react';

import { ref, getDownloadURL } from "firebase/storage";

import { storage } from '@/src/lib/firebase';

import { useAuthContext } from "@/src/context/AuthContext";
import { User } from "@/src/lib/types/user";

import { PostCardProps } from './data';

import { timeAgo, isValidHttpUrl } from '@/src/lib/functions';

import { LinkIt } from 'react-linkify-it';

import { HeartButton } from './buttons';

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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/src/app/components/ui/dropdown-menu";

import { HASHTAG_REGEX } from '@/src/config/posts';
import { config } from '@/src/config/app';

async function getFileUrl(filePath: string) {
  const fileRef = ref(storage, filePath);
  try {
    const downloadURL = await getDownloadURL(fileRef);
    return downloadURL;
  } catch (error) {
    console.error("Error getting download URL:", error);
    throw error;
  }
}

const PostCard = ({
  id,
  author,
  content,
  media,
  publishDate,
  visibility,
  profile,
  heartCount
}: PostCardProps) => {
  const { user } = useAuthContext() as { user: User };

  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(config.defaultAvatar);
  const [error, setError] = useState(null);

  const formattedDate = useMemo(() => {
    return new Date(publishDate).toLocaleString();
  }, [publishDate]);

  const ago = useMemo(() => timeAgo(new Date(publishDate)), [publishDate]);
  
  useEffect(() => {
    if(profile?.avatar == undefined){
      return;
    }
    if(profile.avatar !== "" && !isValidHttpUrl(profile.avatar)){
          const fetchUrl = async () => {
            try {
              const fileName = profile.avatar || "";
              const filePath = `profile_pictures/${profile.uid}/${fileName}_98x98.png`;
              const fileUrl = await getFileUrl(filePath);
              setAvatarUrl(fileUrl);
            } catch (err) {
              console.log("error");
            }
          };
        fetchUrl();
      } else {
        setAvatarUrl(profile.avatar);
      }
  }, [profile]); // Rerun if the file path changes

  return (
    <Card className="w-full max-w-2xl mx-auto mb-3 shadow-sm rounded-2xl border border-base-300 bg-base-100">
      
      {/* Header */}
      <CardHeader className="flex flex-row items-start justify-between pb-0">
        
        {/* Left: Avatar + Name */}
        <div className="flex items-center gap-3">
          <Link href={`/u/${author}`} className="select-none">
            <Avatar className="h-10 w-10">
                <AvatarImage src={avatarUrl} alt={profile?.displayName} />
                <AvatarFallback>
                {profile?.displayName?.slice(0, 2)?.toUpperCase()}
                </AvatarFallback>
            </Avatar>
          </Link>

          <div className="flex flex-col select-none">
            <Link href={`/u/${author}`} title={`User: ${profile?.displayName}`} className="hover:underline">
                <span className="font-semibold leading-tight">
                    {profile?.displayName}
                </span>
            </Link>
            <span className="text-xs opacity-70">
              {formattedDate} &bull; {ago}
            </span>
          </div>
        </div>

        {/* Post Options */}
        { user?.uid === author ?
        (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-base-200"
            >
              <EllipsisVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-36" align="start">
              <DropdownMenuGroup>
                  <Link href={`/post/${id}`}>
                    <DropdownMenuItem>
                      View Post
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Delete
                  </DropdownMenuItem>
              </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        ) : (<div></div>)
      }

      </CardHeader>

      <div className="flex space-x-2 text-center select-none ml-6 mt-2">
        {/* View Post Link */}
        <div className="inline-flex pt-2" title="View Post">
          <Badge variant="default">
            <Link href={`/posts/${id}`}>View Post</Link>
          </Badge>
        </div>
        {/* Visibility Badge */}
        <div className="inline-flex pt-2" title="Post Visibility">
          <Badge variant="secondary" className="text-xs">
            {visibility}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <CardContent className="pt-4 space-y-3">
        <p className="text-base leading-relaxed">
          <LinkIt
            regex={HASHTAG_REGEX}
            component={(match, key) => (
              <Link title={`Discover ${match} on Blazed One`} className="hover:underline text-gray-800/80" href={`/h/${encodeURIComponent(match.slice(1))}`} key={key}>
                {match}
              </Link>
            )}>
            {content}
          </LinkIt>
          </p>

        {/*
          {
              params?.media ? 
              (
                  <div className="mt-5">
                      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
                          <Image
                              src="https://blazed.sirv.com/logo/Wallpaper-Beaker.png"
                              alt="Photo media"
                              fill
                              className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
                          />
                      </AspectRatio>
                  </div>
              ) :
              ""
          }
        */}
        {/* Media Grid */}
        {/*
        {media && media.length > 0 && (
          <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden mt-2">
            {media.map((file) => (
              <Image
                key={file.id}
                src={file.url}
                alt={file.alt ?? ""}
                className="rounded-xl max-h-64 w-full object-cover border border-base-300 bg-base-200"
              />
            ))}
          </div>
        )}
        */}
      </CardContent>

      {/* Footer / Actions */}
      <CardFooter className="grid w-full pt-5 border-t border-base-300 select-none">
        <div className="flex justify-between gap-3">
          {/*
          <Button variant="ghost" size="sm" className="gap-2">
            <Heart className="h-5 w-5" />
            <span className="hidden sm:block">Like</span>
          </Button>
          */}
          <HeartButton postId={id} author={author} heartCount={heartCount || 0} />
          
          <Link href={`/posts/${id}#comments`}>
            <Button variant="ghost" size="default" className="gap-2 px-5 flex cursor-pointer">
              <MessageCircle className="h-5 w-5" />
              <span className="hidden sm:block">Comment</span>
            </Button>
          </Link>

          <Button variant="ghost" size="default" className="gap-2 px-5 flex cursor-pointer">
            <Share2 className="h-5 w-5" />
            <span className="hidden sm:block">Share</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default memo(PostCard);