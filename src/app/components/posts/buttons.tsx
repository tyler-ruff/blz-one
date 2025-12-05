'use state'

import { useState } from "react";

import { useAuthContext } from "@/src/context/AuthContext";
import { User } from "@/src/lib/types/user";

import {
  ButtonGroup,
} from '@/src/app/components/ui/button-group';
import { Toggle } from '@/src/app/components/ui/toggle';
import { Button } from "@/src/app/components/ui/button";
import { 
    EllipsisVertical, 
    Heart, 
    MessageCircle, 
    Share2 
} from "lucide-react";

export function HeartButton(props: {
    postId: string;
    author: string;
    heartCount: number;
}){
    const { user } = useAuthContext() as { user: User };

    const [liked, setLiked] = useState(false);

    /*
    const toggleHeart = () => {
        setLiked(prev => !prev);
    };
    */

    if(user){
      return (
        <ButtonGroup title="Love This">
            <Toggle
                aria-label="Love this post"
                size="default"
                variant="outline"
                disabled={user.uid === props.author ? true : false}
                defaultPressed={liked}
                onPressedChange={async () => {
                    alert('Liked post!')
                    setLiked(prev => !prev);
                }}
                className="px-5 bg-white data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500 cursor-pointer"
                >
                    <Heart fill={liked ? "red" : "white"} />
            </Toggle>
            <Button variant="secondary" className="bg-zinc-300 hover:bg-gray-300" title={`99 users have loved this post`}>
                {props.heartCount}
            </Button>
        </ButtonGroup>
      )
    } else {
      return (
        <ButtonGroup title="Please login or register to Love posts">
            <Toggle
                aria-label="Love this post"
                disabled={true}
                size="default"
                variant="outline"
                className="px-5 bg-white data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500 cursor-pointer"
                >
                    <Heart />
            </Toggle>
            <Button variant="secondary" className="bg-zinc-300 hover:bg-gray-300">
                {props.heartCount}
            </Button>
        </ButtonGroup>
      )
    }

}