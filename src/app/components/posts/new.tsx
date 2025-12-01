'use client'

import { z } from 'zod';

import Link from "next/link";

import { cn } from '@/lib/utils';

import { ChangeEvent, FormEvent, useEffect, useState, useRef } from "react";
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";

import { useAuthContext } from "@/src/context/AuthContext";
import { capitalizeEachWord, enumKeys } from '@/src/lib/functions';
import { Profile, User } from "@/src/lib/types/user";

import { ArrowRightIcon, Plus, Search, UserX } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/app/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/src/app/components/ui/input-group";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/src/app/components/ui/alert";
import { Separator } from "@/src/app/components/ui/separator";
import { Button } from "@/src/app/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/src/app/components/ui/field";
import { Input } from "@/src/app/components/ui/input";

import { Visibility } from "@/src/lib/types/post";
import { postMaxLength } from '@/src/config/posts';

//import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
//import { getFileExtension } from '@/src/lib/functions';

import { IFormPostSchema } from '@/src/app/components/posts/data';

import { createPost } from '@/src/app/posts/new/actions';

//import moment from "moment";

export function NewPostForm({
 ...props   
}: React.ComponentProps<"form">){
    const { user, profile } = useAuthContext() as { user: User, profile: Profile };
    
    const [text, setText] = useState('');
    const [charCount, setCharCount] = useState(0);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const [hasPosted, setHasPosted] = useState(false);

    const {
            register,
            handleSubmit,
            watch,
            control,
            reset,
            formState: { errors, isSubmitting, isLoading, isSubmitSuccessful },
            setValue
    } = useForm<IFormPostSchema>({
        defaultValues: {
            author: "",
            publishDate: new Date().toISOString(),
            content: "",
            media: undefined,
            visibility: Visibility.PUBLIC
        }
    });

    const onSubmit: SubmitHandler<IFormPostSchema> = (data) => {
        if (hasPosted) return;
        setValue('publishDate', new Date().toISOString());
        reset(); setCharCount(0);
        setHasPosted(true);
        createPost(data);
    }

    useEffect(() => {
        if(user){
            setValue('author', user?.uid);
        }
    }, []);

    const handleOpenFilePicker = () => {
        fileInputRef.current?.click();
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files);
    };
    
    const handleChange = (e: any) => {
        const newText = e.target.value;
        setText(newText);
        setCharCount(newText.length);
    };

    if(!user){
        return (
            <div className="grid w-full max-w-xl relative mx-auto items-center gap-4 select-none">
                <Alert>
                    <UserX className="pb-2" />
                    <AlertTitle className="pt-1 pl-3">
                        You must <Link href="/login" className="text-gray-700 hover:underline">Login</Link> or <Link href="/register" className="text-gray-700 hover:underline">Register</Link> to create a post.
                    </AlertTitle>
                </Alert>
            </div>
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} {...props}>
                <FieldGroup>
                    <InputGroup>
                        <Field className="hidden">
                            <input 
                                type="hidden"
                                {...register("author")} 
                            />
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                id="input-media-filepicker" 
                                accept="image/*" 
                                className="hidden"
                                onChange={handleFileUpload}
                            />
                        </Field>
                        <Field>
                            <InputGroupTextarea
                                id="input-post-content"
                                placeholder="Create new post..." 
                                onKeyUp={handleChange}
                                maxLength={postMaxLength}
                                aria-invalid={errors.content ? true : false}
                                {...register('content', 
                                    {
                                        required: "Post content is required.",
                                        minLength: {
                                            value: 3,
                                            message: "Post content is too short."
                                        },
                                        maxLength: {
                                            value: postMaxLength,
                                            message: `Post content may not exceed ${postMaxLength} characters.`
                                        }
                                    }
                                )}
                            />
                        </Field>
                        <InputGroupAddon className="cursor-default" align="block-end">
                            <label htmlFor="input-media-filepicker">
                            <InputGroupButton
                                title="Attach media to this post."
                                variant="outline"
                                className="rounded-full cursor-pointer ml-1 sm:ml-2 mr-3"
                                size="icon-xs"
                                onClick={handleOpenFilePicker}
                            >
                                <Plus />
                            </InputGroupButton>
                            </label>
                            <Separator orientation="vertical" className="!h-4 cursor-default" />
                            <Controller
                                name="visibility"
                                control={control}
                                render={({ field }) => (
                                    <Field title="Set post visibility." className="inline-flex w-32 ml-2 md:ml-0" {... field}>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <InputGroupButton variant="ghost">
                                                    Visibility: {capitalizeEachWord(field.value || "")}
                                                </InputGroupButton>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent
                                                side="top"
                                                align="start"
                                                className="[--radius:0.95rem]"
                                            >
                                                {enumKeys(Visibility).map((item, index) => (
                                                    <DropdownMenuItem 
                                                        onClick={() => { 
                                                            setValue('visibility', Visibility[item as keyof typeof Visibility])}
                                                        } 
                                                        textValue={item.toLowerCase()} 
                                                        key={index}
                                                    >
                                                        {capitalizeEachWord(item.toLowerCase())}
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </Field>
                                )}
                            />
                            <InputGroupText className="ml-auto">
                                <Separator orientation="vertical" className="!h-4 sm:hidden cursor-default" />
                                <span className="hidden md:flex">
                                    {errors.content && (
                                        <FieldLabel className="text-red-600">
                                            {errors?.content.message || errors?.content.type}
                                        </FieldLabel>
                                        )
                                    }
                                </span>
                                <span 
                                    title={`${charCount} out of ${postMaxLength} characters.`} 
                                    className="flex space-x-2 mr-1 sm:mr-3 ml-1 sm:ml-0 cursor-default">
                                    <span className="hidden md:flex">
                                        Characters:
                                    </span>
                                    <span className={`${charCount >= postMaxLength && "text-red-800"}`}>
                                        {charCount} / {postMaxLength}
                                    </span>
                                </span>
                            </InputGroupText>
                            <Separator orientation="vertical" className="!h-4 hidden sm:flex cursor-default" />
                            <InputGroupButton
                                type="submit"
                                variant="default"
                                className="rounded-full ml-3 mr-3 hidden sm:flex"
                                size="icon-xs"
                                title="Publish post"
                                disabled={errors.content ? true : false}
                            >
                            <ArrowRightIcon />
                            <span className="sr-only">Submit Post</span>
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
            </FieldGroup>
            </form>
        </div>
    )
}