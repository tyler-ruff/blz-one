'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/app/components/ui/card";
import { Input } from "@/src/app/components/ui/input";
import { Label } from "@/src/app/components/ui/label";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/app/components/ui/avatar";
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  Heart,
  ListFilterPlusIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
  Slash,
  Share
} from "lucide-react"
import { Button } from "@/src/app/components/ui/button"
import { ButtonGroup } from "@/src/app/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/src/app/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/app/components/ui/popover";
import { AspectRatio } from "@/src/app/components/ui/aspect-ratio";
import { Toggle } from "@/src/app/components/ui/toggle";
import { config, url } from "@/src/config/app";
import { ShareButtons } from "@/src/app/components/share/button";
import { TypographyP } from "@/src/app/components/ui/typography";

import { useUser } from '@/src/lib/cache';

import { IPostCard } from "./data";
import Loading from "../loading";
import { Profile, User } from "@/src/lib/types/user";
import { capitalizeEachWord, formatDate, getInitials } from "@/src/lib/functions";
import { useAuthContext } from "@/src/context/AuthContext";

export function PostCard(params: IPostCard){
    const { user } = useAuthContext() as { user: User };
    const handleFocus = (event: any) => event.target.select();
    const [userProfile, setAuthorProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                /*
                const response = await fetch(`/api/profile?uid=${params.post.author}`);
                if(!response.ok){
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();
                */
                const userProfile = useUser(params.author).data;
                setAuthorProfile(userProfile);
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) return <Loading />;
    if (error) return <p>Error: {error}</p>;

    return (
        <Card className={`w-full max-w-3xl ${params?.media == undefined ? "bg-gradient-to-b from-zinc-50 to-zinc-100" : ""}`}>
            <CardHeader>
                <CardTitle className="border-b pb-5">
                    <div className="flex flex-row flex-wrap items-center gap-12 justify-between">
                        <Link href={`/u/${params.author}`} title={`View ${userProfile?.displayName || ''}'s profile`} className="group flex flex-row flex-wrap select-none">
                            <Avatar className="border">
                                <AvatarImage src={userProfile?.avatar || config.defaultAvatar} alt={`${userProfile?.displayName || ''}`} />
                                <AvatarFallback>{getInitials(userProfile?.displayName || '')}</AvatarFallback>
                            </Avatar>
                            <span className="group-hover:text-gray-700 pt-3 pl-5">
                                {userProfile?.displayName || ''}
                            </span>
                        </Link>
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
                </CardTitle>
                <CardContent>
                    <div className="pt-5 flex flex-row flex-wrap items-center gap-3 select-none">
                        <span className="text-md text-gray-700">
                            Posted on: <time dateTime={new Date(params.publishDate).toISOString()}>{formatDate(new Date(params.publishDate || ""), "MM/DD/YYYY")}</time>
                        </span>
                        <Slash className="w-3 h-3 hidden md:flex" />
                        <span className="text-md text-gray-700 hidden md:flex">
                            Updated on: <time dateTime={new Date().toISOString()}>{formatDate(new Date(), "MM/DD/YYYY")}</time>
                        </span>
                        <Slash className="w-3 h-3 hidden lg:flex" />
                        <span className="hidden lg:flex text-md text-gray-700">
                            Visibility: {capitalizeEachWord(params.visibility.toLowerCase())}
                        </span>
                    </div>
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
                    <div className="md:px-8 py-5 pt-10">
                        <TypographyP className="prose lg:prose-xl dark:prose-invert">
                            {params.content}
                        </TypographyP>
                    </div>
                </CardContent>
                <CardFooter className="p-0 md:p-6">
                    <div className="flex flex-row flex-wrap items-center gap-8">
                        <ButtonGroup className="select-none">
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
                            <ButtonGroup>
                                <Button variant="outline" title="Comment on this post">
                                    Comments
                                </Button>
                                <Button variant="secondary" className="bg-zinc-300" title={`12 comments on this post`}>
                                    12
                                </Button>
                            </ButtonGroup>
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
                                                    title={`Post by ${userProfile?.displayName || ''}`} 
                                                    url={`${url}/post/${params.id}`} 
                                                />
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </ButtonGroup>
                        </ButtonGroup>
                    </div>
                </CardFooter>
            </CardHeader>
        </Card>
    )
}