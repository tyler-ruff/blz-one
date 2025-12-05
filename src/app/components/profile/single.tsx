'use client'

import { useEffect, useState } from 'react';
import { ISingleProfile } from './data';

import { url } from '@/src/config/app';
import { Profile } from '@/src/lib/types/user';
import { formatDate, getInitials } from '@/src/lib/functions';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/app/components/ui/avatar";

import { Button } from "@/src/app/components/ui/button";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/src/app/components/ui/item";

import { Spinner } from "@/src/app/components/ui/spinner";
import Image from 'next/image';


export default function SingleProfile(params: ISingleProfile){
    const [profile, setProfile] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    /*
    useEffect(() => {
        const res = fetch(`${url}/api/profile?uid=${params.uid}`).then((res) => {
          const data = res.json();
          setProfile(data);
          setLoading(false);
        });
    }, []);
    */

    useEffect(() => {
        async function getProfile(){
            try{
                const res = await fetch(`${url}/api/profile?uid=${params.uid}`);
                const data = await res.json();
                if(data?.message?.includes('cannot be found')){
                    throw new Error("Error 404: User Not Found");
                }
                setProfile(data);
                setLoading(false);
            } catch (error: any){
                console.log("Error reading profile");
            }
        }
        getProfile();
    }, [params.uid]);

    if(loading){
        return (
            <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
                <Item variant="muted">
                    <ItemMedia>
                        <Spinner />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle className="line-clamp-1">Loading user profile...</ItemTitle>
                    </ItemContent>
                </Item>
            </div>
        )
    }

    return (
    <div className="flex flex-row flex-wrap items-center gap-10 max-w-sm">
      <div title={`${profile?.displayName}'s Profile Picture`} className="relative mx-auto">
        <Image 
            src={profile?.avatar}
            alt={`@${profile?.uid}`}
            width={135}
            height={135} 
            className="rounded-lg shadow-sm outline outline-gray-500/50"
            />
            <span className="sr-only">
                {getInitials(profile?.displayName || "")}
            </span>
       </div>
       <div className="flex flex-col gap-6">
        <Item variant="muted">
            <ItemContent>
                <ItemTitle title="User Display Name" className="text-lg">
                    {profile?.displayName}
                </ItemTitle>
                <ItemDescription title="User Bio">
                    Bio: {profile?.bio}
                </ItemDescription>
            </ItemContent>
        <ItemActions>
          <Button title="Follow this user">Follow</Button>
        </ItemActions>
      </Item>
      <Item>
        <ItemContent>
            <ItemTitle title="Last time user logged in" className="text-gray-700 select-none">
                Account Created
            </ItemTitle>
            <ItemDescription>
                {profile.createdAt === "never" || profile.createdAt === undefined ? "unknown" : formatDate(profile.createdAt, 'MM/DD/YYYY')}
            </ItemDescription>
        </ItemContent>
      </Item>
      <Item>
        <ItemContent>
            <ItemTitle title="Last time user logged in" className="text-gray-700 select-none">
                Last Online
            </ItemTitle>
            <ItemDescription>
                {profile.lastOnline === "never" || profile.lastOnline === undefined ? "never" : formatDate(profile.lastOnline, 'MM/DD/YYYY')}
            </ItemDescription>
        </ItemContent>
      </Item>
      </div>
    </div>
    );
}