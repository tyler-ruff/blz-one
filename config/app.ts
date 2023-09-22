import { Brand, Config, Social } from "@/lib/types/app";

const config = {
    name: "Blazed One",
    fbAppId: "",
    description: "The Blazed One Account System"
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
    config, brand, social
};