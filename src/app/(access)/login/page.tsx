import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { LoginForm } from "@/src/app/components/login/form";
import { config } from "@/src/config/app";

export const metadata: Metadata = {
    title: 'Login',
}

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
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
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          height={2000}
          width={2000}
          src="https://blazed.sirv.com/logo/blazed-mountain-bg.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale select-none"
        />
      </div>
    </div>
  )
}
