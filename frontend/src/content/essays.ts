import type { EssayCategory, EssayEntry } from './types';
import { assetUrl } from '@/lib/assets';

export const essayCategories: EssayCategory[] = [
  {
    title: 'Judgment',
    slug: 'judgment',
    description: 'How people form, discipline, and communicate judgment under uncertainty.',
  },
  {
    title: 'Evidence',
    slug: 'evidence',
    description: 'What evidence can authorize, what it cannot authorize, and why overclaiming matters.',
  },
  {
    title: 'Decision-Making',
    slug: 'decision-making',
    description: 'How conclusions and judgments become decisions that shape action.',
  },
  {
    title: 'Wisdom',
    slug: 'wisdom',
    description: 'The habits, virtues, and restraints that help judgment become wise.',
  },
  {
    title: 'Human Formation',
    slug: 'human-formation',
    description: 'Character, humility, discernment, and the formation of evidence-bound people.',
  },
  {
    title: 'AI and Human Reasoning',
    slug: 'ai-and-human-reasoning',
    description: 'How people should evaluate fluent synthetic claims and AI-generated answers.',
  },
  {
    title: 'Public Discourse',
    slug: 'public-discourse',
    description: 'Claims, arguments, evidence, and judgment in shared civic life.',
  },
  {
    title: 'Ethics and Stewardship',
    slug: 'ethics-and-stewardship',
    description: 'The moral responsibilities that surround evidence, claims, and public action.',
  },
  {
    title: 'Human Flourishing',
    slug: 'human-flourishing',
    description: 'Why disciplined judgment matters for lives, institutions, and societies.',
  },
];

export const essayEntries: EssayEntry[] = [
  {
    title: 'Strong Conclusions Require Strong Evidence',
    slug: 'strong-conclusions-require-strong-evidence',
    deck: 'The governing principle beneath the WhyDive framework.',
    category: 'evidence',
    status: 'draft',
    image: assetUrl('/images/whydive/essays-archive-social.png'),
  },
  {
    title: 'Why Judgment Matters',
    slug: 'why-judgment-matters',
    deck: 'Why reasoning matters most when it helps people decide what ought to be believed, said, or done.',
    category: 'judgment',
    status: 'planned',
  },
  {
    title: 'The Judgment Problem in the Age of AI',
    slug: 'the-judgment-problem-in-the-age-of-ai',
    deck: 'How to respond when fluent answers sound convincing before their claims have been judged.',
    category: 'ai-and-human-reasoning',
    status: 'planned',
  },
];
