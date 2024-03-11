'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { mainMenu } from '@/config/layout';

export default function Header(){
    const loggedIn: boolean = false;
    const pathname = usePathname();
    const MainMenuComponent = () => (
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {
                mainMenu.list.map((item, index) => {
                    return <li key={index}>
                        <a href={item.url} className={`block py-2 px-3 text-gray-800 hover:text-blue-700 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white ${pathname === item.url && `text-blue-400`}`}>
                            {item.label}
                        </a>
                    </li>
                })
            }
        </ul>
    );
    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link title="Blazed One" href="/" className="flex items-center space-x-3 rtl:space-x-reverse hover:opacity-75">
                        <Image src="/images/blz-blue.png" alt="logo" className="h-8 w-8" width={45} height={45} />
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <MainMenuComponent />
                    </div>
                </div>
            </nav>
        </header>
        /*
        <header classNameNameName="border-b">
            <nav classNameNameName="navbar bg-base-100 shadow-md">
                <div classNameNameName="flex-1">
                    <Link href="/" title="Blazed One" classNameNameName="btn btn-ghost normal-case text-xl">
                        <Image src="/images/blz-blue.png" alt="logo" width={45} height={45} />
                    </Link>
                </div>
                <div classNameNameName="flex-none gap-2">
                    { loggedIn ? (
                        <div classNameNameName="dropdown dropdown-end">
                            <label tabIndex={0} classNameNameName="btn btn-ghost btn-circle avatar">
                                <div classNameNameName="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} classNameNameName="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                <Link href="/profile" classNameNameName="justify-between">
                                    Profile
                                    <span classNameNameName="badge">New</span>
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
                        <div classNameNameName="dropdown-end pr-3 selection-none">
                            <Dropdown
                                arrowIcon={false}
                                inline
                                label={<HiUser classNameNameName="w-6 h-6" />}
                                placement="bottom-start">
                                <Dropdown.Header>
                                <span classNameNameName="block text-sm">
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
        */
    )
}