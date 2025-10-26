import { Metadata } from "next";
import BlzBreadcrumb from "@/src/app/components/breadcrumb";
import MainHeading from "@/src/app/components/heading/main";

export const metadata: Metadata = {
    title: 'My Profile',
}

export default function Settings() {
  return (
    <div className="max-w-3xl relative mx-auto">
      <BlzBreadcrumb trail={[
          {
              label: "Home",
              href: '/'
          },
          {
              label: "User",
              active: true
          }
        ]} />
        <MainHeading text="My Profile" />
    </div>
  );
}