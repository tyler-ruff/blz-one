import { Menu, MenuItem } from '@/lib/types/layout';

const mainMenu = {
    list: [
        {
            label: "Home",
            url: "/"
        },
        {
            label: "About",
            url: "/about"
        },
        {
            label: "News",
            url: "https://news.blz.one/"
        }
    ]
} as Menu;

export {
    mainMenu
};