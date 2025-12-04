"use client";

import Link from 'next/link';
import Image from 'next/image';

import React, { ChangeEvent, FormEvent, useEffect, useState, useRef, useCallback } from "react";

import { Profile, User } from "@/src/lib/types/user";
import { useAuthContext } from "@/src/context/AuthContext";

import { Button } from "@/src/app/components/ui/button";
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
  MessageSquareReply,
  Share2,
  Heart,
  MoreHorizontal,
  EllipsisVertical,
  X
} from "lucide-react";

import { IDropdownMenuItem } from "@/src/lib/types/dropdown";

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
      <Button variant="ghost" className="flex gap-2 select-none">
        <Heart className="w-4 h-4" />
        Love
      </Button>
  );
}

export function ShareButton(){
  return (
    <Button variant="ghost" className="flex gap-2 select-none">
      <Share2 className="w-4 h-4" />
      Share
    </Button>
  )
}






