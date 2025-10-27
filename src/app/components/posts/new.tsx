'use client'

import { ArrowUpIcon, Plus, Search } from "lucide-react"
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
import { Separator } from "@/src/app/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/src/app/components/ui/tooltip";
import { useState } from "react";
import { Visibility } from "@/src/lib/types/post";
import { capitalizeEachWord, enumKeys } from "@/src/lib/functions";

export function NewForm(){
    const [text, setText] = useState('');
    const [charCount, setCharCount] = useState(0);

    const maxLength = 500;
    
    const handleChange = (e: any) => {
        const newText = e.target.value;
        setText(newText);
        setCharCount(newText.length);
    };

    return (
        <div>
            <InputGroup>
            <InputGroupTextarea
                placeholder="Create new post..." 
                name="postBody"
                onChange={handleChange}
                maxLength={maxLength}
            />
            <InputGroupAddon align="block-end">
            <InputGroupButton
                title="Add media"
                variant="outline"
                className="rounded-full"
                size="icon-xs"
            >
                <Plus />
            </InputGroupButton>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <InputGroupButton variant="ghost">
                    Visibility: Public
                </InputGroupButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                side="top"
                align="start"
                className="[--radius:0.95rem]"
                >
                    {enumKeys(Visibility).map((item, index) => (
                        <DropdownMenuItem textValue={item.toLowerCase()} key={index}>
                            {capitalizeEachWord(item.toLowerCase())}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <InputGroupText className="ml-auto">
                Characters: {charCount} / {maxLength}
            </InputGroupText>
            <Separator orientation="vertical" className="!h-4" />
            <InputGroupButton
                variant="default"
                className="rounded-full"
                size="icon-xs"
                disabled
            >
                <ArrowUpIcon />
                <span className="sr-only">Send</span>
            </InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
        </div>
    )
}