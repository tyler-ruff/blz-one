'use client'

import React, { ChangeEvent, FormEvent, useEffect, useState, useRef, useCallback } from "react";

import { User } from "@/src/lib/types/user";
import { useAuthContext } from "@/src/context/AuthContext";

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { createComment } from '@/src/app/posts/new/actions';
import TextareaAutosize from "react-textarea-autosize";

import { ICommentFormProps, IFormCommentSchema, CommentFormProps, ReplyCallback } from "./data";

import { Button } from "@/src/app/components/ui/button";
import { ButtonGroup } from "@/src/app/components/ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
} from "@/src/app/components/ui/input-group";
import { FieldLabel } from "@/src/app/components/ui/field";
import { Separator } from "@/src/app/components/ui/separator";
import { Spinner } from '@/src/app/components/ui/spinner';
import { Badge } from "@/src/app/components/ui/badge";

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

export function CommentForm({postId, replyTo, updateReplyTo, ...props}: CommentFormProps){
    const { user } = useAuthContext() as { user: User };
    const [loading, setLoading] = useState<boolean>(true);
    const [hasPosted, setHasPosted] = useState(false);
    const [activeReplyTo, setActiveReplyTo] = useState<string | undefined>(replyTo);

    const characterLimit = 255;

    const {
      register,
      handleSubmit,
      watch,
      control,
      reset,
      formState: { errors, isSubmitting, isLoading, isSubmitSuccessful },
      setValue
    } = useForm<IFormCommentSchema>({
      defaultValues: {
        postId: "",
        author: "",
        publishDate: "",
        updatedDate: "",
        content: ""
      }
    });

    const contentValue = watch('content');
    const characterCount = contentValue ? contentValue.length : 0;

    const onSubmit: SubmitHandler<IFormCommentSchema> = (data) => {
      if (hasPosted) return;
      reset();
      setHasPosted(true);
      //setResponse(JSON.stringify(data));
      createComment(data);
    }

    useEffect(() => {
        if(user){
            setLoading(false);
            setValue('author', user?.uid);
            setValue('publishDate', new Date().toISOString());
            setValue('updatedDate', new Date().toISOString());
            setValue('postId', postId);
        }
    }, [setValue, user, postId]);

    const textareaStyle = {
      "maxWidth": "100%"
    }

    if(user){
      return (
          <form onSubmit={handleSubmit(onSubmit)} {...props}>
              <div className="grid w-full relative mx-auto max-w-lg gap-6 mt-5">
                  <input type="hidden" {...register('postId')} />
                  <InputGroup>
                      <InputGroupAddon className="pb-3 pt-3 font-bold text-md">
                        {
                          user && (
                            <InputGroupText>
                              <span>
                              Post comment as: {user?.displayName}
                              </span>
                            </InputGroupText>
                          )
                        }
                      </InputGroupAddon>
                      {
                        /*
                        replyTo && (
                          <InputGroupAddon className="pb-3">
                            <InputGroupText>
                              <span className="inline-flex font-bold">
                                Reply to: @Briggs
                              </span>
                              <Badge
                                className="text-xs cursor-pointer" 
                                title="Clear reply to"
                              >
                                <X className="w-2 h-2 mr-1" />
                                Clear
                              </Badge>
                            </InputGroupText>
                          </InputGroupAddon>
                        )
                        */
                      }
                      <Separator />
                      <TextareaAutosize
                        id="comment-content"
                        style={textareaStyle}
                        data-slot="input-group-control"
                        className="flex overflow-x-hidden min-h-16 w-full max-w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
                        placeholder="Join in on the conversation..."
                        maxLength={characterLimit}
                        aria-invalid={errors.content ? true : false}
                        {...register('content', {
                          required: "Comment content is required.",
                          minLength: {
                              value: 3,
                              message: "Comment is too short."
                          },
                          maxLength: {
                              value: characterLimit,
                              message: `Comment may not exceed ${characterLimit} characters.`
                          },
                        })}
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="pt-2">
                        {
                          errors.content ? (
                            <FieldLabel className="text-red-600">
                              { errors?.content.message || errors?.content.type }
                            </FieldLabel>
                          ) : (
                            <FieldLabel className={`${characterCount >= characterLimit && "text-red-800"} text-gray-600/50`}>
                              {characterCount} / {characterLimit}
                            </FieldLabel>
                          )
                        }
                        </InputGroupText>
                        <InputGroupButton 
                            type="submit" 
                            className="ml-auto" 
                            size="sm" 
                            variant="default"
                            disabled={errors.content ? true : false}
                          >
                            Comment
                        </InputGroupButton>
                      </InputGroupAddon>
                  </InputGroup>
              </div>
          </form>
      )
    }
}