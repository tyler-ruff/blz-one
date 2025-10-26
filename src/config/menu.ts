import { Menu, MenuItem } from "@/src/lib/types/site";

const mainMenu = {
    _id: "root",
    nav: [
        {
            label: "Feed",
            href: "/"
        },
        {
            label: "Discover",
            href: "/discover"
        },
        {
            label: "Chat",
            href: "/chat"
        }
    ] as MenuItem[],
    cta: {
        label: "Documentation",
        href: "/docs"
    } as MenuItem
} as Menu;

export {
    mainMenu
};