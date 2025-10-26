import { Metadata } from "next";
import BlzBreadcrumb from "@/src/app/components/breadcrumb";
import MainHeading from "@/src/app/components/heading/main";

export const metadata: Metadata = {
    title: 'User Account',
}

export const dynamic = "force-dynamic";

export default function Account() {
  return (
    <div className="max-w-3xl relative mx-auto">
      <BlzBreadcrumb trail={[
          {
              label: "Home",
              href: '/'
          },
          {
              label: "User",
              href: '/user'
          },
          {
              label: 'Account',
              active: true
          }
        ]} />
      <MainHeading text="Account Settings" />
    </div>
  );
}