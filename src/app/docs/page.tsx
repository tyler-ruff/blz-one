//export const dynamic = "force-dynamic";
import { Metadata } from "next";
import BlzBreadcrumb from "@/src/app/components/breadcrumb";
import DocsHomeComponent from "@/src/app/components/docs/home";

export const metadata: Metadata = {
    title: 'Documentation Home',
}

export default function DocsHome() {
  //const message = process.env["MESSAGE"] || "Hello!";

  return (
    <div className="max-w-2xl relative mx-auto">
      <BlzBreadcrumb trail={[
            {
                label: "Home",
                href: "/"
            },
            {
                label: "Documentation",
                active: true
            }
        ]} />
        <DocsHomeComponent />
    </div>
  );
}