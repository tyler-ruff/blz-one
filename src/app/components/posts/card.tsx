//import { PostCardProps } from "@/interfaces/PostCardProps";
import Link from 'next/link';
import Image from 'next/image';

import { PostCardProps } from './data';

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
  id,
  author,
  content,
  media,
  publishDate,
  visibility,
  profile
}: PostCardProps) {
  //const author = useUser(author).data;
  return (
    <Card className="w-full max-w-2xl mx-auto mb-6 shadow-sm rounded-2xl border border-base-300 bg-base-100">
      
      {/* Header */}
      <CardHeader className="flex flex-row items-start justify-between pb-0">
        
        {/* Left: Avatar + Name */}
        <div className="flex items-center gap-3">
          <Link href={`/u/${author}`}>
            <Avatar className="h-10 w-10">
                <AvatarImage src={profile?.avatar} alt={profile?.displayName} />
                <AvatarFallback>
                {profile?.displayName?.slice(0, 2)?.toUpperCase()}
                </AvatarFallback>
            </Avatar>
          </Link>

          <div className="flex flex-col">
            <Link href={`/u/${author}`} className="hover:underline">
                <span className="font-semibold leading-tight">
                    {profile?.displayName}
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
  ****** Heart Button ******

  <ButtonGroup className="">
      <Toggle
          disabled={(user && user.uid == params.author) ? true : false}
          aria-label="Love this post"
          size="default"
          variant="outline"
          className="px-5 bg-white data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500"
          >
              <Heart />
      </Toggle>
      <Button variant="secondary" className="bg-zinc-300" title={`99 users have loved this post`}>
          99
      </Button>
  </ButtonGroup>

      ******* REPORT & SHARE BUTTONS *******

    <ButtonGroup className="hidden md:flex">
      <Popover>
          <Button variant="outline" title="Report content as inappropriate">
              Report
          </Button>
          <PopoverTrigger asChild>
              <Button variant="outline">
                  <Share />
                  Share
              </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
              <div className="grid gap-4 mb-5">
                  <div className="space-y-2">
                      <h4 className="leading-none font-medium">
                          Share Post
                      </h4>
                      <p className="text-muted-foreground text-sm">
                          Share this post with friends.
                      </p>
                  </div>
              </div>
              <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="permalink">URL</Label>
                  <Input
                      id="permalink"
                      defaultValue={`${url}/post/${params.id}`}
                      readOnly={true}
                      className="col-span-2 h-8 select-all cursor-pointer"
                      onClick={handleFocus}
                  />
                  </div>
                  <div className="mt-5">
                      <ShareButtons 
                          title={`Post by ${author?.displayName || ''}`} 
                          url={`${url}/post/${params.id}`} 
                      />
                  </div>
              </div>
          </PopoverContent>
      </Popover>
  </ButtonGroup>

    ****** VIEW POST BUTTON & 'three dots' dropdown *******

    <div className="flex content-end justify-end space-x-2">
      <ButtonGroup className="hidden lg:flex select-none">
          <Link href={`/post/${params.id}`}>
              <Button title="Reveal post in browser" variant="outline">
                  View Post
              </Button>
          </Link>
      </ButtonGroup>
      <ButtonGroup>
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="More Options">
              <MoreHorizontalIcon />
              </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuGroup>
              <DropdownMenuItem>
                  <MailCheckIcon />
                  Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem>
                  <ArchiveIcon />
                  Archive
              </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
              <DropdownMenuItem>
                  <ClockIcon />
                  Snooze
              </DropdownMenuItem>
              <DropdownMenuItem>
                  <CalendarPlusIcon />
                  Add to Calendar
              </DropdownMenuItem>
              <DropdownMenuItem>
                  <ListFilterPlusIcon />
                  Add to List
              </DropdownMenuItem>
              <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                  <TagIcon />
                  Label As...
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                  >
                      <DropdownMenuRadioItem value="personal">
                      Personal
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="work">
                      Work
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="other">
                      Other
                      </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
              </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
              <DropdownMenuItem>
                  <Trash2Icon />
                  Trash
              </DropdownMenuItem>
              </DropdownMenuGroup>
          </DropdownMenuContent>
          </DropdownMenu>
      </ButtonGroup>
  </div>
</div>

    */}