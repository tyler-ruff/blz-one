import { mainMenu } from '@/src/config/menu';

import Link from 'next/link';

import { INav } from './data';

const Nav = (props: INav) => {
    return (
        <ul role="menu" aria-label="Desktop Main Menu" className="items-stretch hidden lg:flex select-none">
            {
                mainMenu.nav.map((item, index) => {
                    return (
                        <li className="flex" key={index}>
                            <Link aria-label={item.label}
                                href={item.href || ""}
                                className={`menu-item flex items-center px-4 dark:hover:text-blue-400 mb-1 border-b-2 font-bold border-transparent ${props.pathname === item.href && `active underline`}`}>
                                {item.label}
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
};

const MobileNav = (props: INav) => {
    return (
        <ul role="menu" aria-label="Mobile Main Menu" className="items-stretch block mt-20 ml-10 space-y-6">
            {
                mainMenu.nav.map((item, index) => {
                    return (
                        <li className="flex" key={index}>
                            <a aria-label={item.label}
                                href={item.href}
                                className={`menu-item flex items-center px-4 mb-1 border-b-2 font-bold border-transparent ${props.pathname === item.href && `text-blue-500 border-blue-500`}`}>
                                    {item.label}
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export {
    Nav,
    MobileNav
};