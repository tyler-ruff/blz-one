import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next"

import { ForgotForm } from "@/src/app/components/forgot/form";
import { config } from "@/src/config/app";

export const metadata: Metadata = {
    title: 'Forgot Password (Step 1 of 3)',
}

export default function ForgotPasswordPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-xs flex-col gap-6">
        <Link href="/" title="Return Home" className="flex items-center gap-2 font-medium group active:outline active:outline-solid active:outline-2 active:outline-gray-900">
            <div className="select-none text-primary-foreground flex size-6 items-center justify-center rounded-md">
                <Image
                width={35}
                height={35} 
                alt="blz.one Logo"
                className="group-hover:opacity-75"
                src="https://blazed.sirv.com/logo/BLZ-blue.png?w=35&h=35" />
            </div>
            <span className="group-hover:text-gray-400 select-none">
                {config.name}
            </span>
        </Link>
        <ForgotForm />
      </div>
    </div>
  )
}
