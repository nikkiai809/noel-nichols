import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';
import { getProjectSlugs } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectSlugs = getProjectSlugs();

  const projectPages = projectSlugs.map((slug) => ({
    url: `${SITE.url}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${SITE.url}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...projectPages,
  ];
}
