import type { MetadataRoute } from 'next';
import { absoluteUrl, discoveryRoutes } from '@/lib/discovery';

const lastModified = new Date('2026-06-10');

function parseLastModified(value?: string) {
  if (!value) return lastModified;

  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? lastModified : new Date(parsed);
}

function getRouteLastModified(route: (typeof discoveryRoutes)[number]) {
  if ('lastModified' in route && typeof route.lastModified === 'string') {
    return route.lastModified;
  }

  return undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return discoveryRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: parseLastModified(getRouteLastModified(route)),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
