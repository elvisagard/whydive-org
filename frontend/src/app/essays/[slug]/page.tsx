import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticlePrintButton } from '@/components/site/ArticlePrintButton';
import { ArticlePrintStyles } from '@/components/site/ArticlePrintStyles';
import { EssaySectionJumpNav } from '@/components/site/EssaySectionJumpNav';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { StructuredData } from '@/components/site/StructuredData';
import { essayCategories, essayEntries } from '@/content/essays';
import { assetUrl } from '@/lib/assets';
import { absoluteUrl, publisherName, siteName, siteUrl } from '@/lib/discovery';
import { discussionAction, readFoundationsAction, shareAction } from '@/lib/visitorActions';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function renderBibliographyLabel(label: string) {
  return label.split(/(\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>;
    }

    return part;
  });
}

function getEssayWordCount(essay: (typeof essayEntries)[number]) {
  const text = essay.sections
    ?.flatMap((section) => [...(section.paragraphs ?? []), ...(section.bullets ?? [])])
    .join(' ');

  if (!text) return undefined;

  return text.trim().split(/\s+/).filter(Boolean).length;
}

function toIsoDate(value?: string) {
  if (!value) return undefined;

  const parsed = Date.parse(value);
  if (Number.isNaN(parsed)) return undefined;

  return new Date(parsed).toISOString().slice(0, 10);
}

function sectionAnchor(title: string, index: number) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return `section-${index}-${slug || 'essay-section'}`;
}

export function generateStaticParams() {
  return essayEntries.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = essayEntries.find((entry) => entry.slug === slug);

  if (!essay) {
    return {};
  }

  return {
    title: essay.title,
    description: essay.deck,
    alternates: {
      canonical: `/essays/${essay.slug}`,
    },
    openGraph: {
      title: essay.title,
      description: essay.deck,
      type: 'article',
      url: absoluteUrl(`/essays/${essay.slug}`),
      publishedTime: toIsoDate(essay.publicationDate),
      modifiedTime: toIsoDate(essay.updatedDate ?? essay.publicationDate),
      authors: ['Elvis Agard'],
      section: essay.category,
      images: [
        {
          url: assetUrl(essay.image ?? '/images/whydive/essays-study-table-banner.png'),
          alt: `Editorial image for ${essay.title}.`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: essay.title,
      description: essay.deck,
      images: [assetUrl(essay.image ?? '/images/whydive/essays-study-table-banner.png')],
    },
  };
}

export default async function EssayDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const essay = essayEntries.find((entry) => entry.slug === slug);

  if (!essay) {
    notFound();
  }

  const category = essayCategories.find((entry) => entry.slug === essay.category);
  const essayUrl = absoluteUrl(`/essays/${essay.slug}`);
  const essayImagePath = assetUrl(essay.image ?? '/images/whydive/essays-study-table-banner.png');
  const essayImage = absoluteUrl(essayImagePath);
  const hasFullEssay = Boolean(essay.sections?.length);
  const essayWordCount = getEssayWordCount(essay);
  const datePublished = toIsoDate(essay.publicationDate);
  const dateModified = toIsoDate(essay.updatedDate ?? essay.publicationDate);
  const sectionNavItems =
    essay.sections
      ?.map((section, index) => {
        if (!section.title) return null;

        return {
          id: sectionAnchor(section.title, index),
          title: section.title,
          isMovementTitle: section.title.startsWith('Movement '),
        };
      })
      .filter((item): item is { id: string; title: string; isMovementTitle: boolean } => Boolean(item)) ?? [];
  const showSectionNav = sectionNavItems.length > 5;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${essayUrl}#article`,
    headline: essay.title,
    description: essay.deck,
    url: essayUrl,
    mainEntityOfPage: essayUrl,
    image: essayImage,
    thumbnailUrl: essayImage,
    articleSection: category?.title ?? essay.category,
    inLanguage: 'en-US',
    datePublished,
    dateModified,
    wordCount: essayWordCount,
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
        name: category?.title ?? essay.category,
      },
    ],
  };

  return (
    <EditorialPage
      eyebrow={category?.title ?? 'Essay'}
      eyebrowHref={category ? `/essays/category/${category.slug}` : undefined}
      title={essay.title}
      intro={essay.deck}
      image={{
        src: essayImagePath,
        alt: `Editorial image for ${essay.title}.`,
      }}
    >
      <ArticlePrintStyles essayUrl={essayUrl} />
      <StructuredData data={articleSchema} />
      <div className="print-hide mb-8 flex justify-end">
        <ArticlePrintButton />
      </div>
      {showSectionNav ? (
        <EssaySectionJumpNav items={sectionNavItems} />
      ) : null}

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start">
      <article className="essay-print-body mx-auto w-full max-w-3xl lg:mx-0">
        <div className="essay-print-cover" aria-hidden="true">
          <p className="essay-print-cover-label">Document Metadata</p>
          <div className="essay-print-meta">
            <div>
              <p>
                <strong>Use</strong>
                Reading and discussion
              </p>
              <p>
                <strong>Category</strong>
                {category?.title ?? essay.category}
              </p>
              <p>
                <strong>Reading time</strong>
                {essay.readingTime ?? 'Reflective read'}
              </p>
            </div>
            <div>
              <p>
                <strong>Publication</strong>
                WhyDive Essay
              </p>
              <p>
                <strong>Category</strong>
                {category?.title ?? essay.category}
              </p>
              <p>
                <strong>Author</strong>
                Elvis Agard
              </p>
            </div>
          </div>
        </div>

        <div className="essay-print-article-opener" aria-hidden="true">
          <p className="essay-print-kicker">{category?.title ?? 'Essay'}</p>
          <h1 className="essay-print-title">{essay.title}</h1>
          <p className="essay-print-deck">{essay.deck}</p>
          <img className="essay-print-image" src={essayImagePath} alt="" />
        </div>

        <div className="print-hide grid gap-4 border-y border-[#d9d0c3] py-6 text-sm text-[#536271] sm:grid-cols-3">
          <p>
            <span className="block font-semibold text-[#101b23]">Use</span>
            Reading and discussion
          </p>
          <p>
            <span className="block font-semibold text-[#101b23]">Category</span>
            {category?.title ?? essay.category}
          </p>
          <p>
            <span className="block font-semibold text-[#101b23]">Reading time</span>
            {essay.readingTime ?? 'Reflective read'}
          </p>
        </div>

        {hasFullEssay ? (
          <div className="mt-12 space-y-14">
            {essay.sections?.map((section, index) => {
              const isMovementTitle = section.title?.startsWith('Movement ');

              return (
                <section
                  key={section.title ?? `opening-${index}`}
                  id={section.title ? sectionAnchor(section.title, index) : undefined}
                  className="scroll-mt-28"
                >
                  {section.title ? (
                    <h2
                      className={`wd-display text-4xl leading-tight ${
                        isMovementTitle ? 'text-[#8a6d2f]' : 'text-[#101b23]'
                      }`}
                    >
                      {section.title}
                    </h2>
                  ) : null}
                  <div className="wd-reading mt-6 space-y-7 text-xl leading-9 text-[#384a5a]">
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets?.length ? (
                    <ul className="mt-7 space-y-3 text-lg leading-8 text-[#465767]">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="border-l border-[#8a6d2f]/45 pl-4">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              );
            })}
          </div>
        ) : (
          <>
            <div className="wd-reading mt-10 space-y-7 text-2xl leading-10 text-[#243447]">
              <p>
                This essay is part of the public conversation WhyDive is trying to make possible: a
                slower, more honest movement from evidence into judgment.
              </p>
              <p>
                Read it as a prompt. What claim is being made? What evidence would justify it? What
                would need to be held with humility? What would change if a community practiced that
                discipline together?
              </p>
            </div>

            <div className="mt-12">
              <SectionHeading title="Related framework question">
                <p>
                  What conclusions are justified by the evidence available, and what limits must be
                  acknowledged before judgment becomes action?
                </p>
              </SectionHeading>
            </div>
          </>
        )}

        {essay.sourceNote ? (
          <div className="essay-print-backmatter mt-12 border-t border-[#d9d0c3] pt-6 text-sm leading-7 text-[#536271]">
            <p>
              <span className="essay-print-backmatter-heading font-semibold text-[#101b23]">Source note: </span>
              {essay.sourceNote}
            </p>
          </div>
        ) : null}

        {essay.bibliography?.length ? (
          <div className="essay-print-backmatter mt-8 border border-[#d9d0c3] bg-[#fffdf8] p-6">
            <p className="essay-print-backmatter-heading text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">
              Bibliography
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[#536271]">
              {essay.bibliography.map((source) => {
                const label = typeof source === 'string' ? source : source.label;
                const href = typeof source === 'string' ? undefined : source.href;

                return (
                  <li key={label} className="border-l border-[#8a6d2f]/35 pl-4">
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#101b23]">
                        {renderBibliographyLabel(label)}
                      </a>
                    ) : (
                      renderBibliographyLabel(label)
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        <div className="print-hide mt-8">
          <QuietCard title="For discussion" eyebrow="Community use">
            <p>
              Bring the question to a classroom, reading group, faculty meeting, leadership team,
              or learning community. Ask where conclusions are running ahead of the evidence and
              where stronger evidence could support stronger judgment.
            </p>
          </QuietCard>
        </div>

        <VisitorActionPanel
          title="Turn this essay into a conversation."
          benefit="WhyDive essays are meant to help people discuss real questions with more care: belief, evidence, certainty, action, and consequence."
          actions={[shareAction, discussionAction, readFoundationsAction]}
        />
      </article>

      {showSectionNav ? (
        <aside className="print-hide sticky top-28 hidden max-h-[calc(100vh-8rem)] overflow-y-auto border-l border-[#d9d0c3] pl-5 lg:block">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6d2f]">On This Essay</p>
          <nav aria-label="Essay sections" className="mt-4 grid gap-2">
            {sectionNavItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block border-l pl-3 text-sm leading-6 transition hover:border-[#8a6d2f] hover:text-[#101b23] ${
                  item.isMovementTitle
                    ? 'border-[#8a6d2f]/65 font-semibold text-[#8a6d2f]'
                    : 'border-transparent text-[#536271]'
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </aside>
      ) : null}
      </div>
    </EditorialPage>
  );
}
