import { Menu, MenuItem } from "@/lib/types/site";

const mainMenu = {
    _id: "root",
    nav: [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "About",
            href: "/about"
        },
        {
            label: "Solution",
            href: "/solution"
        },
        {
            label: "Pricing",
            href: "/pricing"
        }
    ] as MenuItem[],
    cta: {
        label: "Contact",
        href: "https://blazedlabs.com/contact"
    } as MenuItem
} as Menu;

export {
    mainMenu
};