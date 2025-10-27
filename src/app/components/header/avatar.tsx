'use client'

import Image from 'next/image';

import { Profile, User } from '@/src/lib/types/user';
import { useAuthContext } from '@/src/context/AuthContext';

import { logoutUser } from '@/src/app/components/access/logout';
import ProfilePicture from '@/src/app/components/profile/avatar';
import { config } from '@/src/config/app';

export default function UserAvatar(){
    const { user, profile } = useAuthContext() as { user: User, profile: Profile };

    if(user){
        return (
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
                        <a href="/user/account" className="justify-between">
                            Account
                        </a>
                    </li>
                    <li>
                        <a href="/user/settings">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a onClick={logoutUser}>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        );
    } else {
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

}