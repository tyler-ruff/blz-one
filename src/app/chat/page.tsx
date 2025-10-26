//export const dynamic = "force-dynamic";
import { Metadata } from "next";
import BlzBreadcrumb from "@/src/app/components/breadcrumb";

export const metadata: Metadata = {
    title: 'Chat',
}

export default function ChatHome() {
  //const message = process.env["MESSAGE"] || "Hello!";

  return (
    <div className="max-w-2xl relative mx-auto">
      <BlzBreadcrumb trail={[
            {
                label: "Home",
                href: "/"
            },
            {
                label: "Chat",
                active: true
            }
        ]} />
        Chat
    </div>
  );
}