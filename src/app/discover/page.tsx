//export const dynamic = "force-dynamic";
import { Metadata } from "next";
import BlzBreadcrumb from "@/src/app/components/breadcrumb";

export const metadata: Metadata = {
    title: 'Discover',
}

export default function DiscoverHome() {
  //const message = process.env["MESSAGE"] || "Hello!";

  return (
    <div className="max-w-2xl relative mx-auto">
      <BlzBreadcrumb trail={[
            {
                label: "Home",
                href: "/"
            },
            {
                label: "Discover",
                active: true
            }
        ]} />
        Discover
    </div>
  );
}