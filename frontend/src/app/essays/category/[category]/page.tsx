import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { essayCategories, essayEntries } from '@/content/essays';
import { assetUrl } from '@/lib/assets';
import { absoluteUrl } from '@/lib/discovery';
import { discussionAction, readFoundationsAction, shareAction } from '@/lib/visitorActions';

interface PageProps {
  params: Promise<{ category: string }>;
}

function getCategory(slug: string) {
  return essayCategories.find((category) => category.slug === slug);
}

function getCategoryEssays(slug: string) {
  return essayEntries.filter((essay) => essay.category === slug);
}

export function generateStaticParams() {
  return essayCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.title} Essays`,
    description: category.description,
    alternates: {
      canonical: `/essays/category/${category.slug}`,
    },
    openGraph: {
      title: `${category.title} Essays | WhyDive`,
      description: category.description,
      type: 'website',
      url: absoluteUrl(`/essays/category/${category.slug}`),
      images: [
        {
          url: assetUrl('/images/whydive/essays-study-table-banner.png'),
          alt: `Editorial image for ${category.title} essays.`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.title} Essays | WhyDive`,
      description: category.description,
      images: [assetUrl('/images/whydive/essays-study-table-banner.png')],
    },
  };
}

export default async function EssayCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const categoryEssays = getCategoryEssays(category.slug);
  const publishedEssays = categoryEssays.filter((essay) => essay.status === 'published');
  const futureEssays = categoryEssays.filter((essay) => essay.status !== 'published');

  return (
    <EditorialPage
      eyebrow="Essay Archive"
      title={`${category.title} essays`}
      intro={category.description}
      image={{
        src: assetUrl('/images/whydive/essays-study-table-banner.png'),
        alt: `Editorial image for ${category.title} essays.`,
      }}
    >
      <SectionHeading title="Live articles">
        <p>
          Published essays in this category are ready to read, share, and use for discussion.
        </p>
      </SectionHeading>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {publishedEssays.length ? (
          publishedEssays.map((essay) => (
            <Link
              key={essay.slug}
              href={`/essays/${essay.slug}`}
              className="group block border border-[#d9d0c3] bg-[#fffdf8] transition hover:border-[#8a6d2f]/55 hover:shadow-[0_18px_45px_rgba(35,38,49,0.09)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#0f1f28]">
                <Image
                  src={assetUrl(essay.image ?? '/images/whydive/essays-study-table-banner.png')}
                  alt={`Editorial image for ${essay.title}.`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.025]"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">
                  {essay.publicationDate ?? 'Published'}
                </p>
                <h2 className="wd-display mt-3 text-3xl leading-tight text-[#101b23]">
                  {essay.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-[#536271]">{essay.deck}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6d2f]">
                  {essay.readingTime ?? 'Essay'}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <QuietCard title="No live articles yet" eyebrow="Coming">
            <p>
              This category is part of the WhyDive writing architecture. Published essays will
              appear here as they are released.
            </p>
          </QuietCard>
        )}
      </div>

      <div className="mt-14">
        <SectionHeading title="Future articles">
          <p>
            These topics are visible so readers can see where the archive is heading.
          </p>
        </SectionHeading>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {futureEssays.length ? (
            futureEssays.map((essay) => (
              <Link key={essay.slug} href={`/essays/${essay.slug}`} className="block">
                <QuietCard
                  title={essay.title}
                  eyebrow={essay.status === 'draft' ? 'In development' : 'Planned'}
                >
                  <p>{essay.deck}</p>
                </QuietCard>
              </Link>
            ))
          ) : (
            <QuietCard title="No future articles listed" eyebrow="Archive">
              <p>
                This category currently has no planned articles beyond the live archive.
              </p>
            </QuietCard>
          )}
        </div>
      </div>

      <VisitorActionPanel
        title="Use this archive as a reading path."
        benefit="Category archives help readers follow one line of thought through the WhyDive framework while seeing what has been published and what is still developing."
        actions={[shareAction, discussionAction, readFoundationsAction]}
      />
    </EditorialPage>
  );
}
