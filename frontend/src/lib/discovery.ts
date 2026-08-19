import { essayEntries } from '@/content/essays';
import { essayCategories } from '@/content/essays';
import { whyDiveSpaces } from '@/content/spaces';
import { whitepaperEntries } from '@/content/whitepapers';

export const siteUrl = 'https://whydive.org';
export const siteName = 'WhyDive';
export const publisherName = 'Living Spiral Studio LLC';

export function absoluteUrl(path: string) {
  if (path.startsWith('http')) {
    return path;
  }

  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export const staticDiscoveryRoutes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/foundations', priority: 0.95, changeFrequency: 'weekly' as const },
  { path: '/foundations/what-is-whydive', priority: 0.95, changeFrequency: 'weekly' as const },
  {
    path: '/foundations/strong-conclusions-require-strong-evidence',
    priority: 0.95,
    changeFrequency: 'weekly' as const,
  },
  { path: '/foundations/framework-overview', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/spaces', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/essays', priority: 0.85, changeFrequency: 'weekly' as const },
  { path: '/whitepapers', priority: 0.85, changeFrequency: 'weekly' as const },
  { path: '/research', priority: 0.75, changeFrequency: 'monthly' as const },
  { path: '/applications', priority: 0.75, changeFrequency: 'monthly' as const },
  { path: '/ecosystem', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.45, changeFrequency: 'yearly' as const },
];

export const essayDiscoveryRoutes = essayEntries.map((essay) => ({
  path: `/essays/${essay.slug}`,
  priority: essay.status === 'draft' ? 0.72 : 0.55,
  changeFrequency: 'monthly' as const,
  lastModified: essay.updatedDate ?? essay.publicationDate,
}));

export const essayCategoryDiscoveryRoutes = essayCategories.map((category) => ({
  path: `/essays/category/${category.slug}`,
  priority: 0.7,
  changeFrequency: 'monthly' as const,
}));

export const whitepaperDiscoveryRoutes = whitepaperEntries.map((paper) => ({
  path: `/whitepapers/${paper.slug}`,
  priority: paper.layer <= 2 ? 0.82 : 0.68,
  changeFrequency: 'monthly' as const,
}));

export const spaceDiscoveryRoutes = whyDiveSpaces.map((space) => ({
  path: `/spaces/${space.slug}`,
  priority: 0.82,
  changeFrequency: 'monthly' as const,
}));

export const discoveryRoutes = [
  ...staticDiscoveryRoutes,
  ...spaceDiscoveryRoutes,
  ...essayCategoryDiscoveryRoutes,
  ...essayDiscoveryRoutes,
  ...whitepaperDiscoveryRoutes,
];

export const coreDiscoveryClaims = [
  'WhyDive is a framework for understanding and improving how human beings move from evidence to action.',
  'Strong conclusions require strong evidence.',
  'Information is not judgment. Reasoning is not judgment.',
  'WhyDive studies evidence, reasoning, conclusion, judgment, decision, action, and consequence.',
  'WhyDive is the parent framework beneath WhyDive Education, the Data Literacy Standards, Chart-Ed Institute, and Chart-Ed.',
];

export const discoveryTopics = [
  'evidence-based judgment',
  'reasoning and judgment',
  'evidence to action framework',
  'bounded reasoning development',
  'strong conclusions require strong evidence',
  'AI-generated claims evaluation',
  'data literacy standards',
  'chart literacy',
  'public judgment under uncertainty',
  'human reasoning and decision-making',
];
