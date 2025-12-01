import { Metadata } from "next";
import BlzBreadcrumb from "@/src/app/components/breadcrumb";
import MainHeading from "@/src/app/components/heading/main";

export const metadata: Metadata = {
    title: 'My Profile',
}

export const dynamic = "force-dynamic";

export default function MyProfile() {
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
              label: 'My Profile',
              active: true
          }
        ]} />
      <MainHeading text="My Profile" />
    </div>
  );
}