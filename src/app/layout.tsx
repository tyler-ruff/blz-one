import type { Metadata } from "next";
import { Hind_Vadodara, DM_Serif_Display } from 'next/font/google';

import Header from "./components/header/index";
import Footer from "./components/footer";

import { config } from "@/config/app";

import "./globals.css";

const hind = Hind_Vadodara({
  variable: '--font-hind', 
  subsets: ["latin"], 
  weight: '400', 
  display: 'swap' 
});

const dm = DM_Serif_Display({
  variable: '--font-dm', 
  subsets: ["latin"], 
  weight: '400', 
  display: 'swap'
});


export const metadata: Metadata = {
  title: {
    template: `%s | ${config.name}`,
    default: config.name, 
  },
  applicationName: config.name,
  description: 'Blazed One backend',
  keywords: ['blazed', 'labs', 'software', 'solutions', 'company'],
  publisher: 'Blazed Labs LLC',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark-theme">
      <body className={`${dm.variable} ${hind.variable}`} suppressHydrationWarning>
        <section id="blz-app">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
