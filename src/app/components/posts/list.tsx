'use client'

import Image from "next/image";

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
import Link from "next/link";

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

import { Separator } from "@/src/app/components/ui/separator";

import { AspectRatio } from "@/src/app/components/ui/aspect-ratio";

import { Toggle } from "@/src/app/components/ui/toggle";
import { Badge } from "@/src/app/components/ui/badge";
import { url } from "@/src/config/app";
import { ShareButtons } from "../share/button";

export function ListPosts(){
    const handleFocus = (event: any) => event.target.select();
    
    return (
        <Card className="w-full max-w-3xl">
            <CardHeader>
                <CardTitle className="border-b pb-5">
                    <div className="flex flex-row flex-wrap items-center gap-12 justify-between">
                        <Link href="#" title={`View John Doe's profile`} className="group flex flex-row flex-wrap select-none">
                            <Avatar className="border">
                                <AvatarImage src="https://blazed.sirv.com/ruff-manage.com/ruff-manage-lion1.jpg" alt="@user" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className="group-hover:text-gray-700 pt-3 pl-5">
                                John Doe
                            </span>
                        </Link>
                        <div className="flex content-end justify-end space-x-2">
                            <ButtonGroup className="hidden lg:flex select-none">
                                <Button title="Reveal post in browser" variant="outline">
                                    View Post
                                </Button>
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
                            Posted on: <time>10/27/2025</time>
                        </span>
                        <Slash className="w-3 h-3 hidden md:flex" />
                        <span className="text-md text-gray-700 hidden md:flex">
                            Updated on: <time>10/28/2025</time>
                        </span>
                        <Slash className="w-3 h-3 hidden lg:flex" />
                        <span className="hidden lg:flex text-md text-gray-700">
                            Visibility: Public
                        </span>
                    </div>
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
                    <div className="px-8 py-5 pt-8">
                        Post contents. Hello World! This is a post.
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="flex flex-row flex-wrap items-center gap-8">
                        <ButtonGroup className="select-none">
                            <ButtonGroup className="">
                                <Toggle
                                    aria-label="Toggle bookmark"
                                    size="default"
                                    variant="outline"
                                    className="px-5 data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500"
                                    >
                                        <Heart />
                                </Toggle>
                                <Button variant="secondary" title={`99 users have loved this post`}>
                                    99
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button variant="outline" title="Comment on this post">
                                    Comments
                                </Button>
                                <Button variant="secondary" title={`12 comments on this post`}>
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
                                                defaultValue={`${url}/post/[POST_ID]`}
                                                readOnly={true}
                                                className="col-span-2 h-8 select-all cursor-pointer"
                                                onClick={handleFocus}
                                            />
                                            </div>
                                            <div className="mt-5">
                                                <ShareButtons title="Post by John Smith" url={`${url}/post/[POST_ID]`} />
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