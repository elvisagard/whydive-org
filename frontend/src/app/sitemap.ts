import type { MetadataRoute } from 'next';
import { absoluteUrl, discoveryRoutes } from '@/lib/discovery';

const lastModified = new Date('2026-06-10');

export default function sitemap(): MetadataRoute.Sitemap {
  return discoveryRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
