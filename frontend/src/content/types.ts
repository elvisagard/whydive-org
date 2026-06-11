export type ContentStatus = 'planned' | 'draft' | 'published';

export interface EssayCategory {
  title: string;
  slug: string;
  description: string;
}

export interface EssayEntry {
  title: string;
  slug: string;
  deck: string;
  category: string;
  status: ContentStatus;
  publicationDate?: string;
  updatedDate?: string;
  readingTime?: string;
  image?: string;
}

export interface WhitepaperEntry {
  title: string;
  subtitle: string;
  slug: string;
  layer: number;
  layerTitle: string;
  question: string;
  audience: string[];
  status: ContentStatus;
  purpose: string[];
  relationship?: string;
  sourceDocuments?: string[];
}

export interface ResearchTopic {
  title: string;
  slug: string;
  description: string;
  formats: string[];
}

export interface ApplicationEntry {
  title: string;
  slug: string;
  eyebrow: string;
  description: string;
  status: 'current' | 'future';
  href?: string;
  domain: string;
  audience: string;
  relationship: string;
}
