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
} from "@/src/app/components/ui/popover"
 
export function DatePicker(params: {
  id: string;
  value: any;
  name?: string;
  onChange: FormEventHandler<HTMLDivElement>;
}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>(params.value);
 
  return (
    <div className="flex flex-col gap-3" id={params.id}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            data-empty={!date}
            className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <input type="hidden" name={params.name} value={format(date, "yyyy-MM-dd")} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar 
            required 
            mode="single" 
            selected={date} 
            onSelect={(date) => {setDate(date);setOpen(false);}}
            className="rounded-lg border" />
        </PopoverContent>
      </Popover>
    </div>
  )
}