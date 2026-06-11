import type { Metadata } from 'next';
import Link from 'next/link';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { essayCategories, essayEntries } from '@/content/essays';
import { discussionAction, readFoundationsAction, shareAction } from '@/lib/visitorActions';

export const metadata: Metadata = {
  title: 'Essays',
  description: 'Long-form writing from WhyDive on evidence, judgment, wisdom, decision-making, and human flourishing.',
};

export default function EssaysPage() {
  return (
    <EditorialPage
      eyebrow="Essays"
      title="A writing home for disciplined judgment."
      intro="Essays connect the framework to the questions people actually face: what to believe, when to trust, how to decide, and how to live with consequences."
      image={{
        src: '/images/whydive/essays-study-table-banner.png',
        alt: 'A quiet study table with an open notebook and pen in soft window light.',
      }}
    >
      <SectionHeading title="Writing categories">
        <p>
          These categories are not silos. They are different approaches to one question: how do human
          beings move from evidence toward wise action?
        </p>
      </SectionHeading>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {essayCategories.map((category) => (
          <QuietCard key={category.slug} title={category.title}>
            <p>{category.description}</p>
          </QuietCard>
        ))}
      </div>

      <div className="mt-14">
        <SectionHeading title="Start with these questions">
          <p>
            These essays are for readers who want the framework expressed through recognizable
            human problems, not only formal definitions.
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {essayEntries.map((essay) => (
            <Link key={essay.slug} href={`/essays/${essay.slug}`}>
              <QuietCard title={essay.title} eyebrow="Essay">
                <p>{essay.deck}</p>
              </QuietCard>
            </Link>
          ))}
        </div>
      </div>

      <VisitorActionPanel
        title="Let the essays start better conversations."
        benefit="These essays are meant to become prompts for communities that care about evidence, wisdom, uncertainty, education, technology, faith, and public judgment."
        actions={[
          {
            label: 'Read an essay aloud with others',
            href: '/essays/strong-conclusions-require-strong-evidence',
            description: 'Use the first principle as a shared opening question for discussion.',
          },
          shareAction,
          discussionAction,
          readFoundationsAction,
        ]}
      />
    </EditorialPage>
  );
}
