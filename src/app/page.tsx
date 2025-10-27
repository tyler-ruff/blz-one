import { Metadata } from "next";
import Image from "next/image";

import BlzBreadcrumb from "@/src/app/components/breadcrumb";
import MainHeading from "@/src/app/components/heading/main";
import HorizontalLargeStats from "@/src/app/components/stats/horizontalLarge";
import HorizontalSmallStats from "@/src/app/components/stats/horizontalSmall";
import BasicTable from "@/src/app/components/table/basic";
import { NewForm } from "./components/posts/new";
import { ListPosts } from "./components/posts/list";

export const metadata: Metadata = {
    title: 'Home',
}

export default function Home() {
  return (
    <div className="max-w-3xl relative mx-auto space-y-4">
      <BlzBreadcrumb trail={[
        {
          label: "Home",
          active: true
        }
      ]} />
      {/* Brand/Email Header:
      <Image 
        className="relative mx-auto select-none" 
        alt="Blazed Labs" 
        width={600} 
        height={200} 
        src="https://blazed.sirv.com/promo/Blazed-Header-600x200.png" 
      />
      */}
      <MainHeading text="Feed" />
      <NewForm />
      <ListPosts />
    </div>
  );
}
