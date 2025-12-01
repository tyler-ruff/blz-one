"use client"

import { useEffect, useState } from "react";
import { config } from "@/src/config/app";

import Image from "next/image";
import Spinner from "@/src/app/components/loading/spinner";
import { IAvatar } from "./data";
import { useAuthContext } from "@/src/context/AuthContext";
import { User, Profile } from "@/src/lib/types/user";

const ProfilePicture = (props: IAvatar) => {
    const { user, profile } = useAuthContext() as { user: User, profile: Profile };

    if(!profile){
        return (
            <Spinner />
        );
    }

    if(profile){
            if(profile.avatar && profile?.avatar?.startsWith('https://')){
                return (
                    <Image
                        width={props.size || 80}
                        height={props.size || 80}
                        title={`Logged in as: ${user?.displayName || ""}`}
                        alt="Your profile picture"
                        src={`${profile?.avatar}`} />
                );
            } else {
                return (
                    <Image
                        width={props.size || 80}
                        height={props.size || 80}
                        title={`Logged in as: ${user?.displayName || ""}`}
                        alt="Default profile picture"
                        src={`${config.defaultAvatar}?h=${props.size || 80}&w=${props.size || 80}`}/>
                )
            }
        }
}

export default ProfilePicture;