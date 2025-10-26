'use client'

import { Profile, User } from '@/src/lib/types/user';
import { useAuthContext } from '@/src/context/AuthContext';

import { logoutUser } from '@/src/app/components/access/logout';
import ProfilePicture from '@/src/app/components/profile/avatar';

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
        )
    }

}