import type { MetadataRoute } from 'next';
import { getProjects } from '@/lib/projects';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url },
    ...getProjects().map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
    })),
  ];
}
