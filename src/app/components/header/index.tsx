'use client'
import { useState, useEffect } from "react";

import { usePathname } from 'next/navigation';
import { useWindowSize } from "@uidotdev/usehooks";

import { mainMenu } from '@/src/config/menu';
import { config } from '@/src/config/app';

import Logo from "./logo";
import Burger from "./burger";
import { MobileNav, Nav } from "./nav";
import UserAvatar from "./avatar";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const size = useWindowSize();

    const toggleBurger = async() =>{
        if(!isOpen){
          setIsOpen(true);
          document.body.style.overflowY = "hidden";
        } else {
          setIsOpen(false);
          document.body.style.overflowY = "scroll";
        }
    };

    useEffect(() => {
        if(size.width !== null){
            if(size.width >= 767){
                document.body.style.overflowY = "scroll";
                if(isOpen){
                    setIsOpen(false);
                    document.body.style.overflowY = "scroll";
                }
            }
        }
    }, [size.width]);

    return (
         <header role="banner" id="top">
            <nav role="navigation" aria-label="Main" id={`nav-${mainMenu._id}`} className="p-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b shadow-lg">
                <div className="container flex justify-between h-16 mx-auto">
                    <Logo title={config.name} />
                    <div className="flex space-x-5 pt-1">
                        <Nav pathname={pathname} />
                        {/*{mainMenu.cta !== undefined && (<Cta label={mainMenu.cta.label} url={mainMenu.cta.href || ``} />)} */}
                        <div className="hidden lg:block">
                            <UserAvatar />
                        </div>
                    </div>
                    <a className="lg:hidden" onClick={() => toggleBurger()}>
                        <Burger active={isOpen} />
                    </a>
                </div>
                {
                    isOpen && (
                        <div className="h-screen">
                            <MobileNav pathname={pathname} />
                        </div>
                    )
                }
            </nav>
        </header>
    );
}