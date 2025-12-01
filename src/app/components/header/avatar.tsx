'use client'

import Image from 'next/image';
import Link from 'next/link';

import { MouseEventHandler, useState, useEffect } from 'react';

import { Profile, User } from '@/src/lib/types/user';
import { useAuthContext } from '@/src/context/AuthContext';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/src/lib/firebase';

import { config } from '@/src/config/app';

import { getInitials } from '@/src/lib/functions';

import { logoutUser } from '@/src/app/components/access/logout';
import ProfilePicture from '@/src/app/components/profile/avatar';
import { Cta } from './cta';

import Spinner from "@/src/app/components/loading/spinner";

import { Button } from "@/src/app/components/ui/button";
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
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/app/components/ui/avatar";
import { Badge } from "@/src/app/components/ui/badge";


/*
            <div className="dropdown dropdown-end pt-2">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <ProfilePicture />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-900 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <Link href="/user/profile" className="justify-between">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link href="/user/account" className="justify-between">
                            Account
                        </Link>
                    </li>
                    <li>
                        <Link href="/user/settings">
                            Settings
                        </Link>
                    </li>
                    <li>
                        <a onClick={logoutUser}>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>



            <DropdownMenuLabel className="select-none">
                            My Account
                        </DropdownMenuLabel>
                        <DropdownMenuGroup>
                        <Link href="/user/profile">
                        <DropdownMenuItem className="cursor-pointer">
                            Profile
                        </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem onSelect={() => location.href = "/user/account"} className="cursor-pointer">
                            Account
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => location.href = "/user/settings"} className="cursor-pointer">
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Keyboard shortcuts
                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuItem>
                            New Team
                            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuItem disabled>API</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
            */

interface IDropdownMenuItem {
    text: string;
    href?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    children?: IDropdownMenuItem[];
    sideDetail?: string;
}
interface IDropdownMenuData {
    children: [
        IDropdownMenuItem[],
        IDropdownMenuItem[],
        IDropdownMenuItem[]
    ];
}

export default function UserAvatar(){
    const { user, profile } = useAuthContext() as { user: User, profile: Profile };

    const [loading, setLoading] = useState<boolean>(true);
    const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

    const dropDownMenuData = {
        children: [
        [
            {
                text: "My Account"
            },
            {
                text: "Profile",
                href: "/user/profile"
            },
            {
                text: "Account",
                href: "/user/account"
            },
            {
                text: "Settings",
                href: "/user/settings"
            },
            {
                text: "Notifications",
                href: "/user/notifications",
                sideDetail: "7+"
            }
        ],
        [
            { text: '-' },
            {
                text: "Test Item"
            },
            { text: '-' }
        ],
        [
            {
                text: "Documentation",
                href: "/docs"
            },
            {
                text: "Support",
                href: "https://blazed.company/help"
            },
            { text: '-' },
            {
                text: "Logout",
                onClick: logoutUser
            }
        ],
    ]
    } as IDropdownMenuData;
    const UserDropDownMenu = () => {
        return (
            <div className="select-none">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="mt-2 focus-visible:outline-none focus-visible:ring-0 outline-none border-none">
                            <div className="rounded-full hover:shadow-lg cursor-pointer" title={`My profile picture`}>
                                <Avatar className="rounded-full">
                                    <AvatarImage
                                        src={profile?.avatar}
                                        alt={`@${profile?.uid}`}
                                    />
                                </Avatar>
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="start">
                        {
                            dropDownMenuData.children.map((group, index) => (
                                <DropdownMenuGroup key={index}>
                                    { group.map((item, zindex) => {
                                        if(item.text === '-'){
                                            return (
                                                <DropdownMenuSeparator key={zindex} />
                                            )
                                        }

                                        if(item.href === undefined && item.onClick === undefined){
                                            return (
                                                <DropdownMenuLabel key={zindex} className="select-none">
                                                    {item.text}
                                                </DropdownMenuLabel>
                                            )
                                        }

                                        if(item.onClick !== undefined && item.onClick !== null){
                                            return (
                                                <DropdownMenuItem key={zindex} onClick={item.onClick} className="cursor-pointer">
                                                    {item.text}
                                                </DropdownMenuItem>
                                            );
                                        }

                                        return (
                                                <Link href={item.href || "#"} key={zindex} className="group">
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

                                    }) }
                                </DropdownMenuGroup>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        )
    }

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        async function checkProfile(){
            await sleep(400);
            if(user){
                setLoggedIn(true);
                setLoading(false);
            } else {
                setLoggedIn(false);
                setLoading(false);
            }
        }
        checkProfile();
        const unsubscribe = onAuthStateChanged( auth, ( user ) => {
                setLoading(true);
                if ( user ) {
                    // User is signed in
                    setLoggedIn(true);
                } else {
                    // User is signed out
                    setLoggedIn(false);
                }
                // Set loading to false once authentication state is determined
                setLoading( false );
                } );
                return () => unsubscribe();
    }, [user]);

    if(loading){
        return (
            <div className="pt-3 px-3" title="Loading avatar...">
                <Spinner />
            </div>
        );
    }

    if(loggedIn){
        return (
            <UserDropDownMenu />
        );
    }

    if(!loggedIn){
        return (
            <Cta label="Sign Up" url="/register" />
        );
    }

}

/*else {
        return (
            <div className="dropdown dropdown-end pt-2">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <Image
                        width={80}
                        height={80}
                        title={`Not logged in.`}
                        alt="User is not logged in."
                        src={`${config.defaultAvatar}?h=80&w=80`}/>
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-900 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <a href="/login" className="justify-between">
                            Login
                        </a>
                    </li>
                    <li>
                        <a href="/register">
                            Sign Up
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
*/