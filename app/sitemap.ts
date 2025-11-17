import { MetadataRoute } from 'next';
import { workPage } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const workEntries = workPage.projects.map((project) => ({
    url: `https://scullum.com/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://scullum.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://scullum.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://scullum.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...workEntries,
  ];
}
