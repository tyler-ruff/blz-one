import type { MetadataRoute } from 'next';
import { url } from '@/src/config/app';
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/*',
        '/success',
        '/*/search',
        '/blog/*'
      ],
    },
    sitemap: `${url}/sitemap.xml`,
  }
}