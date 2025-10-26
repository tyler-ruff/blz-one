import Link from "next/link";
import { BreadcrumbItemList, ITrail } from "./data";
import { config, url } from '@/src/config/app';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/app/components/ui/breadcrumb";
import { buildBreadcrumbSchema } from "./schema";

//import { SlashIcon } from "lucide-react";

export default function BlzBreadcrumb(params: {
    trail: ITrail[]
}){
    
    
    const breadcrumbSchema = buildBreadcrumbSchema(params.trail);
    return (
        <Breadcrumb id="breadcrumb" aria-label="Breadcrumb" className="select-none">
            <nav id="breadcrumb-nav" className="px-5 mb-5 mt-2">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />
                <BreadcrumbList>
                    {
                        params.trail.map((item, index) => (
                            <div key={index} className="inline-flex">
                                <BreadcrumbItem>
                                    {item.active !== true ? 
                                        <BreadcrumbLink asChild>
                                            <Link href={item.href || ""} className="text-gray-600" >
                                                {item.label}
                                            </Link>
                                        </BreadcrumbLink> : 
                                        <span aria-current="page" title="Current Page" className="cursor-default">
                                            {item.label}
                                        </span>
                                    }
                                </BreadcrumbItem>
                                {
                                    item.active !== true ? (
                                        <span className="pt-1 px-3 pl-5">
                                            <BreadcrumbSeparator />
                                        </span>
                                    ) : ""
                                }
                            </div>
                        ))
                    }
                </BreadcrumbList>
            </nav>
        </Breadcrumb>
    )
}