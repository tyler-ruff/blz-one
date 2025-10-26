import { Metadata } from "next";
import Image from "next/image";

import BlzBreadcrumb from "@/src/app/components/breadcrumb";
import MainHeading from "@/src/app/components/heading/main";
import HorizontalLargeStats from "@/src/app/components/stats/horizontalLarge";
import HorizontalSmallStats from "@/src/app/components/stats/horizontalSmall";
import BasicTable from "@/src/app/components/table/basic";

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
      <MainHeading text="Dashboard" />
      <HorizontalLargeStats />
      <HorizontalSmallStats />
      <BasicTable title="Users" data={
        [
          { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
          { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
          { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 22 },
        ]
      } />
    </div>
  );
}
