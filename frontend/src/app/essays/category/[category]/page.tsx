import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EditorialPage, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { EssayArchiveBrowser } from '@/components/site/EssayArchiveBrowser';
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
      <SectionHeading title="Archive">
        <p>
          Browse published essays and future topics in this category. Published articles include
          their editorial image; planned and in-development articles remain text-first until they
          are ready.
        </p>
      </SectionHeading>

      <div className="mt-8">
        <EssayArchiveBrowser essays={categoryEssays} />
      </div>

      <VisitorActionPanel
        title="Use this archive as a reading path."
        benefit="Category archives help readers follow one line of thought through the WhyDive framework while seeing what has been published and what is still developing."
        actions={[shareAction, discussionAction, readFoundationsAction]}
      />
    </EditorialPage>
  );
}
