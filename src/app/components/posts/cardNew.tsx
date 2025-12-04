"use client";

import TextareaAutosize from "react-textarea-autosize";

import { Button } from "@/src/app/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/src/app/components/ui/input-group";

import {
  ArrowLeft,
  Globe,
  Lock,
  MessageSquare,
  Share2,
  Heart,
  MoreHorizontal,
} from "lucide-react";

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
            <div className="grid w-full relative mx-auto max-w-lg gap-6">
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