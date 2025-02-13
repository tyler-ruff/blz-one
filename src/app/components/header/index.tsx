"use client"

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useWindowSize } from "@uidotdev/usehooks";

import { mainMenu } from '@/config/menu';
import { config } from '@/config/app';

import Logo from "./logo";
import { Cta } from './cta';
import Burger from "./burger";
import { MobileNav, Nav } from "./nav";


/**
 * Header component
 * @example <Header />
 * @returns JSX Component
 */
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
        <header role="banner">
            <nav id={`nav-${mainMenu._id}`} role="navigation" className="p-4 bg-gray-100 text-gray-800 border-b">
                <div className="container flex justify-between h-16 mx-auto">
                    <Logo title={config.name} />
                    <div className="flex space-x-5 pt-1">
                        <Nav pathname={pathname} />
                        {mainMenu.cta !== undefined && (<Cta label={mainMenu.cta.label} url={mainMenu.cta.href || ``} />)}
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