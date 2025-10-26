import type { MetadataRoute } from 'next';

import { config } from '@/src/config/app';
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: config.name,
    short_name: 'blz-one',
    description: config.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#5171A5',
    icons: [
      {
        src: '/icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        src: '/icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: '/icons/android-icon-36x36.png',
        sizes: '36x36',
        type: 'image/png'
      },
      {
        src: '/icons/android-icon-48x48.png',
        sizes: '48x48',
        type: 'image/png'
      },
      {
        src: '/icons/android-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png'
      },
      {
        src: '/icons/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      },
      {
        src: '/icons/android-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png'
      },
      {
        src: '/icons/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
    ],
  }
}