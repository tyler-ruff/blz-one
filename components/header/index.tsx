'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Dropdown } from 'flowbite-react';
import { HiUser, HiUserCircle } from 'react-icons/hi';

export default function Header(){
    const loggedIn: boolean = false;
    return (
        <header className="border-b">
            <nav className="navbar bg-base-100 shadow-md">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost normal-case text-xl">
                        <Image src="/images/blz-blue.png" alt="logo" width={45} height={45} />
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    { loggedIn ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                <Link href="/profile" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                                </li>
                                <li>
                                    <a>
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="dropdown-end pr-3 selection-none">
                            <Dropdown
                                arrowIcon={false}
                                inline
                                label={<HiUser className="w-6 h-6" />}
                                placement="bottom-start">
                                <Dropdown.Header>
                                <span className="block text-sm">
                                    Not logged in.
                                </span>
                            </Dropdown.Header>
                                <Dropdown.Item href="/login">
                                    Login
                                </Dropdown.Item>
                                <Dropdown.Item href="/register">
                                    Sign Up
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}