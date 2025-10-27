import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";

import { SignupForm } from "@/src/app/components/register/form";
import { config } from "@/src/config/app";

export const metadata: Metadata = {
    title: 'Register',
}

export default function SignupPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" title="Return Home" className="flex items-center gap-2 self-center font-medium group">
          <div className="text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <Image
                width={35}
                height={35} 
                alt="blz.one Logo"
                className="group-hover:opacity-75"
                src="https://blazed.sirv.com/logo/BLZ-blue.png?w=35&h=35" />
          </div>
          <span className="group-hover:text-gray-400">
            {config.name}
          </span>
        </Link>
        <SignupForm />
      </div>
    </div>
  )
}
