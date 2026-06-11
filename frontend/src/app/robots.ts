import type { MetadataRoute } from 'next';
import { absoluteUrl, siteUrl } from '@/lib/discovery';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: absoluteUrl('/sitemap.xml'),
    host: siteUrl,
  };
}
