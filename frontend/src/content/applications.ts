import type { ApplicationEntry } from './types';

export const applicationEntries: ApplicationEntry[] = [
  {
    title: 'WhyDive Education',
    slug: 'whydive-education',
    eyebrow: 'K-12 district application',
    description:
      'A district-facing adaptive assessment and development system for evidence-bound reasoning across reading and charts.',
    status: 'current',
    href: 'https://whydive.education',
    domain: 'K-12 education',
    audience: 'District leaders, curriculum directors, assistant superintendents, and principals as procurement decision-makers.',
    relationship: 'Application of the WhyDive framework, not the parent framework itself.',
  },
  {
    title: 'WhyDive Reading',
    slug: 'whydive-reading',
    eyebrow: 'Textual reasoning',
    description:
      'The WhyDive engine applied to passages, narratives, textual evidence, inference, and interpretation.',
    status: 'current',
    href: 'https://whydive.education/reading',
    domain: 'Reading and textual interpretation',
    audience: 'Districts using WhyDive Education.',
    relationship: 'Domain expression within WhyDive Education.',
  },
  {
    title: 'WhyDive Charts',
    slug: 'whydive-charts',
    eyebrow: 'Data reasoning',
    description:
      'The WhyDive engine applied to charts, graphs, quantitative claims, and the boundaries of visual evidence.',
    status: 'current',
    href: 'https://whydive.education/charts',
    domain: 'Chart, graph, and quantitative reasoning',
    audience: 'Districts using WhyDive Education.',
    relationship: 'Domain expression within WhyDive Education.',
  },
  {
    title: 'Data Literacy Standards',
    slug: 'data-literacy-standards',
    eyebrow: 'Global standards application',
    description:
      'A global standards framework for ethical data literacy development, stewarded by the Chart-Ed Institute.',
    status: 'current',
    href: 'https://chart-ed.cc/en/standards/the-dls-standard',
    domain: 'Global data literacy',
    audience: 'Educators, researchers, policy makers, standards bodies, and global partners.',
    relationship: 'Separate application of the WhyDive framework to data literacy.',
  },
  {
    title: 'Chart-Ed Institute',
    slug: 'chart-ed-institute',
    eyebrow: 'Global stewardship',
    description:
      'The steward of the Data Literacy Standards and public home for global data literacy research and standards work.',
    status: 'current',
    href: 'https://chart-ed.cc',
    domain: 'Standards stewardship and research',
    audience: 'Educators, policy makers, researchers, institutional partners, and supporters worldwide.',
    relationship: 'Steward of the DLS, not the same as chart-ed.com.',
  },
  {
    title: 'Chart-Ed',
    slug: 'chart-ed',
    eyebrow: 'American K-12 classroom tools',
    description:
      'Teacher-facing DLS-based classroom products, resources, and tools for American K-12 schools.',
    status: 'current',
    href: 'https://chart-ed.com',
    domain: 'American K-12 classroom tools',
    audience: 'Teachers, schools, and individuals.',
    relationship: 'Built from the DLS, not a standards body and not WhyDive Education.',
  },
  {
    title: 'WhyDive Business',
    slug: 'whydive-business',
    eyebrow: 'Future domain',
    description: 'A future application for organizational evidence, judgment, and decision-making.',
    status: 'future',
    domain: 'Business and organizational leadership',
    audience: 'Future organizational partners and leaders.',
    relationship: 'Planned extension of WhyDive beyond education.',
  },
  {
    title: 'WhyDive Policy',
    slug: 'whydive-policy',
    eyebrow: 'Future domain',
    description: 'A future application for public decisions under uncertainty.',
    status: 'future',
    domain: 'Policy and civic reasoning',
    audience: 'Future policy leaders, civic institutions, and researchers.',
    relationship: 'Planned extension of WhyDive into public decision-making.',
  },
  {
    title: 'WhyDive AI Evaluation',
    slug: 'whydive-ai-evaluation',
    eyebrow: 'Future domain',
    description: 'A future application for evaluating AI-generated claims and synthetic information.',
    status: 'future',
    domain: 'AI and synthetic information',
    audience: 'Future AI users, organizations, educators, and researchers.',
    relationship: 'Planned extension of WhyDive into AI-mediated reasoning.',
  },
];

export const currentApplications = applicationEntries.filter((entry) => entry.status === 'current');
export const futureApplications = applicationEntries.filter((entry) => entry.status === 'future');
