"use client";

import Link from 'next/link';

import { Profile, User } from "@/src/lib/types/user";
import { useAuthContext } from "@/src/context/AuthContext";

import TextareaAutosize from "react-textarea-autosize";

import { Button } from "@/src/app/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/src/app/components/ui/input-group";
import { Separator } from "@/src/app/components/ui/separator";
import { Spinner } from '@/src/app/components/ui/spinner';
import { Badge } from "@/src/app/components/ui/badge";

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

import {
  ArrowLeft,
  Globe,
  Lock,
  MessageSquare,
  Share2,
  Heart,
  MoreHorizontal,
  EllipsisVertical
} from "lucide-react";

import { IDropdownMenuItem } from "@/src/lib/types/dropdown";

interface IDropdownMenuData {
    children: [
        IDropdownMenuItem[]
    ];
}

export function PostMenu(props: {
  authorId: string;
}){
  const { user } = useAuthContext() as { user: User };

  if(user){
    if(user.uid === props.authorId){
      const menuData = {
        children: [
          {
            text: "Edit",
            href: "#edit"
          },
          {
            text: "Delete",
            href: "#delete"
          }
        ] as IDropdownMenuItem[]
      }
      return (
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
              {
                menuData.children.map((item, index) => {
                   if(item.text === '-'){
                        return (
                            <DropdownMenuSeparator key={index} />
                        )
                    }

                    if(item.href === undefined && item.onClick === undefined){
                        return (
                            <DropdownMenuLabel key={index} className="select-none">
                                {item.text}
                            </DropdownMenuLabel>
                        )
                    }

                    if(item.onClick !== undefined && item.onClick !== null){
                        return (
                            <DropdownMenuItem key={index} onClick={item.onClick} className="cursor-pointer">
                                {item.text}
                            </DropdownMenuItem>
                        );
                    }

                    return (
                            <Link href={item.href || "#"} key={index} className="group">
                                <DropdownMenuItem className="cursor-pointer">
                                    {item.text}
                                    {
                                        item.sideDetail !== undefined && (
                                            <DropdownMenuShortcut>
                                                <Badge className="h-5 min-w-5 hover:bg-gray-700 group-hover:bg-gray-600 rounded-full px-1 font-mono tabular-nums">
                                                    {item.sideDetail}
                                                </Badge>
                                            </DropdownMenuShortcut>
                                        )
                                    }
                                </DropdownMenuItem>
                            </Link>
                    )
                })
              }
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

  }
}

export function LikeButton(props: {
  postId: string;
  initialLikes: number;
}){
  return (
      <Button variant="ghost" className="flex gap-2">
        <Heart className="w-4 h-4" />
        Love
      </Button>
  );
}

export function ShareButton(){
  return (
    <Button variant="ghost" className="flex gap-2">
      <Share2 className="w-4 h-4" />
      Share
    </Button>
  )
}

export function CommentsList(props: {
  comments: any[];
}){
  const comments = [];
  return (
      <div id="comments" className="mt-10 mb-5">
        {comments.length === 0 ? (
          <p className="text-muted-foreground text-sm select-none">No comments yet.</p>
        ) : (
          <div className="space-y-4">
            {/*comments.map((c, i) => (
              <CommentItem key={i} comment={c} />
            ))*/}
          </div>
        )}
      </div>
  )
}

export function CommentForm(props: {
  postId: string;
}){
    return (
        <form>
            <Separator />
            <div className="grid w-full relative mx-auto max-w-lg gap-6 mt-5">
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