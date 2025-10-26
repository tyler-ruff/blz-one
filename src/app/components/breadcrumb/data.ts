export interface ITrail{
    label?: string;
    href?: string;
    active?: boolean;
}

export type BreadcrumbItemList = {
    "@type": string;
    position: number;
    name: string;
    url?: string;
}