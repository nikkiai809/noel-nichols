import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://noel-nichols.vercel.app';

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/projects/signal`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects/yami`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects/velvet-rouge`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/projects/abe-music-hub`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/projects/sonora-digital-corp`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
