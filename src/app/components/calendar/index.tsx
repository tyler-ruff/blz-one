"use client"

import { useState } from 'react';

import { Calendar } from "@/src/app/components/ui/calendar";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/src/app/components/ui/context-menu";

export default function CalendarApp(){
    const [date, setDate] = useState<Date>(new Date());
    return (
        <ContextMenu>
            <div>
                <ContextMenuTrigger>
                    <Calendar 
                    required 
                    mode="single" 
                    selected={date} 
                    onSelect={setDate} 
                    className="rounded-lg border" />
                </ContextMenuTrigger>
                <ContextMenuContent>
                    <ContextMenuItem>Add event on this day</ContextMenuItem>
                    <ContextMenuItem>View all events on this day</ContextMenuItem>
                    <ContextMenuItem>Team</ContextMenuItem>
                    <ContextMenuItem>Subscription</ContextMenuItem>
                </ContextMenuContent>
            </div>
        </ContextMenu>
    );
}