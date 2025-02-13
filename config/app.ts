import { Brand, Config, Social } from "@/lib/types/app";

const config = {
    name: "Blazed One",
    fbAppId: "980497166040811",
    description: "Backend for Blazed Labs."
} as Config;

const social = {
    facebook: "https://www.facebook.com/blazedlabs",
    instagram: "https://www.instagram.com/blazed_labs/",
    github: "https://github.com/blazed-labs",
    twitter: "https://twitter.com/BlazedLabs"
} as Social

const brand = {
    logo: "/images/blz-blue.png",
    company: "Blazed Labs LLC",
    email: "hello@blazed.space"
} as Brand;

export {
    config, brand, social
};