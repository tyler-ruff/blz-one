import { Brand, Config, Social } from "@/src/lib/types/app";

const url = process.env.NODE_ENV === "development" ? 
'http://localhost:5020' : 'https://blz.one';

const config = {
    name: "Blazed One",
    fbAppId: "503698127531557",
    description: "Blazed One social network.",
    defaultAvatar: "https://blazed.sirv.com/util/default-avatar.jpg",
    sessionId: "blz-one-session",
} as Config;

const social = {
    facebook: "https://www.facebook.com/blazedlabs",
    instagram: "https://www.instagram.com/blazed_labs/",
    github: "https://github.com/blazed-labs",
    twitter: "https://twitter.com/BlazedLabs"
} as Social

const brand = {
    logo: "/icons/beaker_dark.svg",
    company: "Blazed Labs LLC",
    email: "hello@blazed.space"
} as Brand;

export {
    config, url, brand, social
};