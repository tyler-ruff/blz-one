import { MenuItem } from "@/src/lib/types/site";

export interface FooterLinks{
    title: string;
    items: MenuItem[];
}

export const linksFooter = [
    {
        title: "Site",
        items: [
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
        ]
    },
    {
        title: "Community",
        items: [
            {
                label: "Documentation",
                href: "/docs"
            },
            {
                label: "Privacy Policy",
                href: "https://blazedlabs.com/privacy"
            },
            {
                label: "Terms of Service",
                href: "https://blazedlabs.com/terms"
            },
            {
                label: "Support",
                href: "https://blazed.company/help"
            }
        ]
    }
]