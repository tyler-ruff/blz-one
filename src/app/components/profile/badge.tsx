"use client"

import { useAuthContext } from "@/src/context/AuthContext";
import { logoutUser } from '@/src/app/components/access/logout';

export default function AuthBadge(){
    const { user, profile } = useAuthContext() as { user: any, profile: any };

    if(user){
        return (
            <ul className="pt-3 text-center md:text-left">
                <li>
                    <span className="select-none">Logged in as:</span> <span className="select-all">{user.email}</span>
                </li>
                <li>
                    <span className="select-none">Display Name:</span> <span className="select-all">{user.displayName}</span>
                </li>
                <li className="select-none">
                    <a className="hover:underline cursor-pointer" href="/user/account">Account</a>&nbsp;&bull;&nbsp;<a className="hover:underline cursor-pointer" href="/user/settings">Settings</a>&nbsp;&bull;&nbsp;<a className="hover:underline cursor-pointer" onClick={logoutUser}>Logout</a>
                </li>
            </ul>
        )
    }

    return (
        <ul className="pt-3 text-center md:text-left">
            <li>
                <span className="select-none">Not logged in.</span>
            </li>
            <li className="select-none">
                <a className="hover:underline cursor-pointer" href="/login">Login</a>&nbsp;&bull;&nbsp;<a className="hover:underline cursor-pointer" href="/register">Sign Up</a>
            </li>
        </ul>
    )
}