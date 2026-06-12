import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { StructuredData } from '@/components/site/StructuredData';
import { whitepaperEntries } from '@/content/whitepapers';
import { absoluteUrl, publisherName, siteName, siteUrl } from '@/lib/discovery';
import { discussionAction, readFoundationsAction, traceApplicationsAction } from '@/lib/visitorActions';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return whitepaperEntries.map((paper) => ({ slug: paper.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const paper = whitepaperEntries.find((entry) => entry.slug === slug);

  if (!paper) {
    return {};
  }

  const image =
    paper.coverImage ??
    (paper.layer <= 2
      ? '/images/whydive/whitepaper-foundational-document.png'
      : '/images/whydive/whitepapers-og-publication.png');

  return {
    title: `${paper.title}: ${paper.subtitle}`,
    description: paper.question,
    alternates: {
      canonical: `/whitepapers/${paper.slug}`,
    },
    openGraph: {
      title: `${paper.title}: ${paper.subtitle}`,
      description: paper.question,
      type: 'article',
      url: absoluteUrl(`/whitepapers/${paper.slug}`),
      images: [
        {
          url: image,
          alt: `Formal whitepaper image for ${paper.title}: ${paper.subtitle}.`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${paper.title}: ${paper.subtitle}`,
      description: paper.question,
      images: [image],
    },
  };
}

export default async function WhitepaperDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const paper = whitepaperEntries.find((entry) => entry.slug === slug);

  if (!paper) {
    notFound();
  }

  const paperUrl = absoluteUrl(`/whitepapers/${paper.slug}`);
  const paperImage = absoluteUrl(
    paper.coverImage ??
      (paper.layer <= 2
      ? '/images/whydive/whitepaper-foundational-document.png'
      : '/images/whydive/whitepapers-og-publication.png'),
  );
  const whitepaperSchema = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    '@id': `${paperUrl}#whitepaper`,
    headline: `${paper.title}: ${paper.subtitle}`,
    description: paper.question,
    url: paperUrl,
    image: paperImage,
    datePublished: paper.publicationDate,
    articleSection: `Layer ${paper.layer}: ${paper.layerTitle}`,
    inLanguage: 'en-US',
    audience: paper.audience.map((audience) => ({
      '@type': 'Audience',
      audienceType: audience,
    })),
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
    },
    author: {
      '@type': 'Person',
      name: 'Elvis Agard',
    },
    about: [
      {
        '@type': 'Thing',
        name: siteName,
      },
      {
        '@type': 'Thing',
        name: paper.layerTitle,
      },
      {
        '@type': 'Thing',
        name: paper.question,
      },
    ],
  };

  return (
    <EditorialPage
      eyebrow={`Layer ${paper.layer}: ${paper.layerTitle}`}
      title={`${paper.title}: ${paper.subtitle}`}
      intro={paper.coreClaim ?? paper.question}
      image={{
        src:
          paper.coverImage ??
          (paper.layer <= 2
            ? '/images/whydive/whitepaper-foundational-document.png'
            : '/images/whydive/whitepapers-og-publication.png'),
        alt: `Formal whitepaper image for ${paper.title}: ${paper.subtitle}.`,
        presentation: paper.coverImage ? 'portrait' : 'wide',
      }}
    >
      <StructuredData data={whitepaperSchema} />
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="space-y-5">
          <QuietCard title="How to read this document" eyebrow="Reader guide" fillHeight={false}>
            <p>
              Use this page to understand the question this document answers, who it serves, and
              how it relates to the wider WhyDive framework.
            </p>
          </QuietCard>
          <QuietCard title={paper.sequenceLabel ?? `Layer ${paper.layer}`} eyebrow="Sequence" fillHeight={false}>
            <p>{paper.question}</p>
            {paper.version ? <p className="mt-3">{paper.version}</p> : null}
            {paper.publicationDate ? <p className="mt-3">{paper.publicationDate}</p> : null}
          </QuietCard>
          <QuietCard title="Audience" eyebrow="Who it serves" fillHeight={false}>
            <ul className="space-y-2">
              {paper.audience.map((audience) => (
                <li key={audience}>{audience}</li>
              ))}
            </ul>
          </QuietCard>
        </aside>

        <article>
          <SectionHeading title="Purpose">
            <p>
              This document clarifies one part of the WhyDive system so readers can see the
              relationship between the framework, its applications, and the practical questions it
              raises.
            </p>
          </SectionHeading>

          <ul className="mt-8 space-y-4 text-lg leading-8 text-[#465767]">
            {paper.purpose.map((item) => (
              <li key={item} className="border-l border-[#8a6d2f]/45 pl-4">
                {item}
              </li>
            ))}
          </ul>

          {paper.pdfUrl ? (
            <div className="mt-10 border border-[#d9d0c3] bg-[#fffdf8] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">
                Public whitepaper
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#101b23]">
                Read the full PDF.
              </h2>
              <p className="mt-3 text-base leading-7 text-[#536271]">
                This is the formal public distribution draft of the foundational WhyDive framework
                paper.
              </p>
              <Link
                href={paper.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-full bg-[#101b23] px-5 py-3 text-sm font-semibold text-[#fffdf8] transition hover:bg-[#243447]"
              >
                Open whitepaper PDF
              </Link>
            </div>
          ) : null}

          {paper.relationship ? (
            <div className="mt-10">
              <QuietCard title="Relationship" eyebrow="Architecture">
                <p>{paper.relationship}</p>
              </QuietCard>
            </div>
          ) : null}

          {paper.sourceDocuments?.length ? (
            <div className="mt-10">
              <QuietCard title="Source documents" eyebrow="Inputs">
                <ul className="space-y-2">
                  {paper.sourceDocuments.map((source) => (
                    <li key={source}>{source}</li>
                  ))}
                </ul>
              </QuietCard>
            </div>
          ) : null}

          <div className="mt-12 border-l border-[#8a6d2f]/50 pl-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">
              Reader's question
            </p>
            <p className="mt-3 text-base leading-7 text-[#465767]">
              Ask how this document serves {paper.audience.join(', ')} and how it answers the
              question: {paper.question}
            </p>
          </div>

          <VisitorActionPanel
            title="Use this document for review and conversation."
            benefit="Whitepapers are for readers who want to examine the framework carefully, test its claims, and discuss how it applies in real institutions."
            actions={[
              ...(paper.pdfUrl
                ? [
                    {
                      label: 'Read the full PDF',
                      href: paper.pdfUrl,
                      description: 'Open the public distribution draft in PDF form.',
                      external: true,
                    },
                  ]
                : []),
              traceApplicationsAction,
              discussionAction,
              readFoundationsAction,
            ]}
          />
        </article>
      </div>
    </EditorialPage>
  );
}
