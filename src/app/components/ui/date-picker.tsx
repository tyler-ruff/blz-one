"use client"
 
//import * as React from "react"
import { FormEventHandler, useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
 
import { cn } from "@/lib/utils";
import { Button } from "@/src/app/components/ui/button";
import { Calendar } from "@/src/app/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/app/components/ui/popover";

//import { v4 as uuidv4 } from 'uuid';

 
export function DatePicker(params: any) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
 
  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            data-empty={!date}
            className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <input type="hidden" value={format(date, "yyyy-MM-dd")} {... params} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            required 
            mode="single" 
            selected={date} 
            onSelect={(newDate) => {setDate(newDate);setOpen(false);}}
            className="rounded-lg border" />
        </PopoverContent>
      </Popover>
    </div>
  )
}