export type ContentStatus = 'planned' | 'draft' | 'published';

export interface EssayCategory {
  title: string;
  slug: string;
  description: string;
}

export interface EssaySeriesRef {
  title: string;
  slug: string;
  order: number;
  label?: string;
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
  series?: EssaySeriesRef;
  scriptureRange?: string;
  topics?: string[];
  tags?: string[];
  claimAuditSlug?: string;
  sourceNote?: string;
  bibliography?: Array<string | { label: string; href?: string }>;
  sections?: {
    title?: string;
    blocks?: {
      type: 'paragraph' | 'quote' | 'heading';
      text: string;
      cite?: string;
    }[];
    paragraphs?: string[];
    bullets?: string[];
  }[];
}

export interface ClaimAuditSource {
  label: string;
  href: string;
}

export interface ClaimAuditRow {
  claim: string;
  status: string;
  rationale: string;
  argumentRecordId: string;
  argumentRecordIds?: string[];
}

export interface BoundaryClaim {
  claim: string;
  status: string;
  reason: string;
}

export interface ArgumentRecord {
  id: string;
  title: string;
  claim: string;
  status: string;
  sections: {
    label?: string;
    body: string[];
    quote?: string;
  }[];
  sources?: ClaimAuditSource[];
}

export interface RevisionRecordEntry {
  id?: string;
  earlier: string;
  challenge: string;
  present: string;
  relatedArgumentRecordIds?: string[];
}

export interface ClaimAuditEntry {
  title: string;
  slug: string;
  essaySlug: string;
  deck: string;
  statusNote: string;
  rows: ClaimAuditRow[];
  boundaryClaims?: BoundaryClaim[];
  argumentRecords: ArgumentRecord[];
  revisionRecord?: RevisionRecordEntry[];
  architecture?: string[];
  closingPrinciples?: string[];
}

export interface WhitepaperEntry {
  title: string;
  subtitle: string;
  slug: string;
  sequenceLabel?: string;
  layer: number;
  layerTitle: string;
  question: string;
  audience: string[];
  status: ContentStatus;
  publicationDate?: string;
  version?: string;
  pdfUrl?: string;
  coverImage?: string;
  coreClaim?: string;
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
