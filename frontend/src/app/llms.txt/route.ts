import { coreDiscoveryClaims, discoveryRoutes, discoveryTopics, siteName, siteUrl } from '@/lib/discovery';

export const dynamic = 'force-static';

export function GET() {
  const lines = [
    `# ${siteName}`,
    '',
    `Canonical site: ${siteUrl}`,
    '',
    '## Summary',
    'WhyDive is the public framework home for evidence-bound judgment: how human beings move from evidence through reasoning and conclusion into judgment, decision, action, and consequence.',
    '',
    '## Core Claims',
    ...coreDiscoveryClaims.map((claim) => `- ${claim}`),
    '',
    '## Discovery Topics',
    ...discoveryTopics.map((topic) => `- ${topic}`),
    '',
    '## Priority URLs',
    ...discoveryRoutes
      .filter((route) => route.priority >= 0.8)
      .map((route) => `- ${siteUrl}${route.path}`),
    '',
    '## Ownership',
    'WhyDive is currently owned and operated under Living Spiral Studio LLC.',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
}
