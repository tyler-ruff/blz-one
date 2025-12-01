"use client"

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldSeparator
} from "@/src/app/components/ui/field";
import { Switch } from "@/src/app/components/ui/switch";

export default function ThemeSwitcher(){
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState<boolean>(false);

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const toggleTheme = async (isChecked: boolean) => {
        if(theme === "dark"){
            setTheme('light');
            setIsDark(false);
        } else {
            setTheme('dark');
            setIsDark(true);
        }
    };

    useEffect(() => {
        if(theme === "dark"){
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    }, [theme]);

    return (
        <div className="w-full py-5 px-2 select-none">
            <Field orientation="horizontal" className="pt-4 pb-6">
                <FieldContent>
                    <label htmlFor="theme-switcher-control" className="cursor-pointer">
                        <FieldLabel htmlFor="theme-switcher-control">
                            Toggle Dark Mode
                        </FieldLabel>
                        <FieldDescription>
                            Ride on the wild side with this awesome dark mode theme.
                            Every hacker loves dark mode.
                        </FieldDescription>
                    </label>
                </FieldContent>
                <Switch id="theme-switcher-control" value="dark" onCheckedChange={toggleTheme} checked={isDark} />
            </Field>
            <FieldSeparator />
        </div>
    )
    
    /*
    return (
        <label className="py-5 flex cursor-pointer gap-2 dark:text-white select-none">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path
                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input type="checkbox" value="dark" onChange={toggleTheme} checked={isDark} className="toggle theme-controller" />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        </label>
    )
    */
}
