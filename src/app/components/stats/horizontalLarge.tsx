"use client"

import Link from "next/link";

import { Profile, User } from '@/src/lib/types/user';
import { useAuthContext } from '@/src/context/AuthContext';

import ProfilePicture from '@/src/app/components/profile/avatar';


export default function HorizontalLargeStats(){
    const { user, profile } = useAuthContext() as { user: User, profile: Profile };

    return (
        <div className="stats shadow select-none">
            <div className="stat">
                <div className="stat-figure text-primary">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-8 w-8 stroke-current"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                </svg>
                </div>
                <div className="stat-title">Total Likes</div>
                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-8 w-8 stroke-current"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                </svg>
                </div>
                <div className="stat-title">Page Views</div>
                <div className="stat-value text-secondary">2.6M</div>
                <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                <div className="avatar avatar-online">
                    <div className="w-16 rounded-full">
                        {/* size: 192px */}
                        <ProfilePicture user={user} profile={profile} size={192} />
                    </div>
                </div>
                </div>
                <div className="stat-value">86%</div>
                <div className="stat-title">Tasks done</div>
                <div className="stat-desc text-secondary">
                    <Link href="/tasks" className="hover:underline">31 tasks remaining</Link>
                </div>
            </div>
        </div>
    )
}