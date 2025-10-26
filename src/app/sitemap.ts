import { MetadataRoute } from 'next';
import { url } from '@/src/config/app';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${url}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        {
            url: `${url}/discover`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.9
        },
        {
            url: `${url}/chat`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8
        },
        {
            url: `${url}/user`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6
        },
        {
            url: `${url}/user/account`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.61
        },
        {
            url: `${url}/user/settings`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.62
        },
        {
            url: `${url}/calendar`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.5
        },
    ]
}