import { Metadata } from "next";

import BlzBreadcrumb from "@/src/app/components/breadcrumb";
import MainHeading from "@/src/app/components/heading/main";
import ThemeSwitcher from "@/src/app/components/app/theme-switcher";

export const metadata: Metadata = {
    title: 'User Settings',
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
            href: '/user'
        },
        {
            label: 'Settings',
            active: true
        }
      ]} />
      <MainHeading text="Site Settings" />
      <hr />
      <ThemeSwitcher />
    </div>
  );
}