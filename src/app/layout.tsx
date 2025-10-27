import type { Metadata } from "next";

import { config, url } from '@/src/config/app';
import { Providers } from "./providers";

import BlzApp from "@/src/app/components/app";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    template: `%s | ${config.name}`,
    default: config.name, 
  },
  description: config.description,
  keywords: ['blazed', 'labs', 'employee', 'portal', 'company', 'work'],
  publisher: 'Blazed Labs LLC',
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png'}
    ],
    shortcut: '/icons/ms-icon-150x150.png',
    apple: [
      { url: '/icons/apple-icon.png', type: 'image/png' },
      { url: '/icons/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/icons/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/icons/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/icons/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#992323"
      },
      {
        rel: "shortcut icon",
        url: "/favicon.ico"
      },
      {
        type: "text/plain",
        rel: "author",
        url: "https://blazedlabs.com/humans"
      },
    ]
  },
  other: {
    "fb:app_id": config.fbAppId || ""
  },
  manifest: '/manifest.webmanifest',
  robots: '/robots.txt'
};

const siteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: url,
  name: config.name,
  description: config.description,
  license: "https://blazedlabs.com/license"
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" data-theme="blz" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <Providers>
          <BlzApp>
            {children}
          </BlzApp>
        </Providers>
      </body>
    </html>
  );
}
