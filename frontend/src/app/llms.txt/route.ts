import { essayCategories, essayEntries } from '@/content/essays';
import { claimAuditEntries } from '@/content/claimAudits';
import { coreDiscoveryClaims, discoveryRoutes, discoveryTopics, siteName, siteUrl } from '@/lib/discovery';

export const dynamic = 'force-static';

function formatEssayLine(essay: (typeof essayEntries)[number]) {
  const parts = [
    `${essay.title}: ${siteUrl}/essays/${essay.slug}`,
    essay.deck,
    `Category: ${essay.category}`,
    essay.status ? `Status: ${essay.status}` : undefined,
    essay.publicationDateIso ? `Published: ${essay.publicationDateIso}` : essay.publicationDate,
    essay.series ? `Series: ${essay.series.title}, order ${essay.series.order}` : undefined,
    essay.series?.role ? `Series role: ${essay.series.role}` : undefined,
    essay.series?.relatedSeries ? `Related series: ${essay.series.relatedSeries.title}` : undefined,
    essay.scriptureRange ? `Text: ${essay.scriptureRange}` : undefined,
    essay.topics?.length ? `Topics: ${essay.topics.join(', ')}` : undefined,
    essay.tags?.length ? `Tags: ${essay.tags.join(', ')}` : undefined,
    essay.claimAuditSlug ? `Claim audit: ${siteUrl}/essays/${essay.slug}/claim-audit` : undefined,
  ].filter(Boolean);

  return `- ${parts.join(' — ')}`;
}

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
    '## Essay Categories',
    ...essayCategories.map((category) => `- ${category.title}: ${siteUrl}/essays/category/${category.slug}`),
    '',
    '## Essays',
    ...essayEntries.map(formatEssayLine),
    '',
    '## Claim Audits',
    ...claimAuditEntries.map((audit) => {
      const essay = essayEntries.find((entry) => entry.slug === audit.essaySlug);
      const parts = [
        `${audit.title}: ${siteUrl}/essays/${audit.essaySlug}/claim-audit`,
        audit.deck,
        essay?.series ? `Series: ${essay.series.title}, order ${essay.series.order}` : undefined,
        essay?.series?.role ? `Series role: ${essay.series.role}` : undefined,
        essay?.series?.relatedSeries ? `Related series: ${essay.series.relatedSeries.title}` : undefined,
        essay?.scriptureRange ? `Text: ${essay.scriptureRange}` : undefined,
        `Claims: ${audit.rows.length}`,
        `Argument records: ${audit.argumentRecords.length}`,
      ].filter(Boolean);

      return `- ${parts.join(' — ')}`;
    }),
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
