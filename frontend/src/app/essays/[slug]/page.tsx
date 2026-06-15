import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { StructuredData } from '@/components/site/StructuredData';
import { essayCategories, essayEntries } from '@/content/essays';
import { assetUrl } from '@/lib/assets';
import { absoluteUrl, publisherName, siteName, siteUrl } from '@/lib/discovery';
import { discussionAction, readFoundationsAction, shareAction } from '@/lib/visitorActions';

interface PageProps {
  params: Promise<{ slug: string }>;
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
  const essayImage = absoluteUrl(assetUrl(essay.image ?? '/images/whydive/essays-study-table-banner.png'));
  const hasFullEssay = Boolean(essay.sections?.length);
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${essayUrl}#article`,
    headline: essay.title,
    description: essay.deck,
    url: essayUrl,
    image: essayImage,
    articleSection: category?.title ?? essay.category,
    inLanguage: 'en-US',
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
      title={essay.title}
      intro={essay.deck}
      image={{
        src: assetUrl(essay.image ?? '/images/whydive/essays-study-table-banner.png'),
        alt: `Editorial image for ${essay.title}.`,
      }}
    >
      <StructuredData data={articleSchema} />
      <article className="mx-auto max-w-3xl">
        <div className="grid gap-4 border-y border-[#d9d0c3] py-6 text-sm text-[#536271] sm:grid-cols-3">
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
            {essay.sections?.map((section, index) => (
              <section key={section.title ?? `opening-${index}`}>
                {section.title ? (
                  <h2 className="wd-display text-4xl leading-tight text-[#101b23]">{section.title}</h2>
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
            ))}
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
          <div className="mt-12 border-t border-[#d9d0c3] pt-6 text-sm leading-7 text-[#536271]">
            <p>
              <span className="font-semibold text-[#101b23]">Source note: </span>
              {essay.sourceNote}
            </p>
          </div>
        ) : null}

        <div className="mt-8">
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
    </EditorialPage>
  );
}
