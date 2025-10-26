import { BreadcrumbItemList, ITrail } from "./data";
import { config, url } from '@/src/config/app';

export const createItemList = (trail: ITrail[]) => {
    let itemList: BreadcrumbItemList[] = [];
    let siteURL = (new URL(url).toString()).slice(0, -1);
    for(let i = 0; i < trail.length; i++){
        let item: BreadcrumbItemList = {} as BreadcrumbItemList;
        if(!trail[i].active){
            item = {
                "@type": "ListItem",
                position: (i+1),
                name: trail[i].label || "",
                url: `${siteURL}${trail[i].href || ""}`,
            }
        } else {
            item = {
                "@type": "ListItem",
                position: (i+1),
                name: trail[i].label || ""
            }
        }
        itemList.push(item);
    }
    return itemList;
}

export const buildBreadcrumbSchema = (trail: ITrail[]) => {
    const breadcrumbMetaItemList = createItemList(trail);
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": (JSON.parse(JSON.stringify(breadcrumbMetaItemList)))
    }
}