import type { Metadata } from 'next';
import Link from 'next/link';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { discussionAction, shareAction, traceApplicationsAction } from '@/lib/visitorActions';

export const metadata: Metadata = {
  title: 'Foundations',
  description: 'Start here for the core concepts, questions, and architecture of the WhyDive framework.',
};

const foundationPages = [
  {
    title: 'What Is WhyDive?',
    href: '/foundations/what-is-whydive',
    description: 'The clearest introduction to WhyDive as a framework for moving from evidence to action.',
  },
  {
    title: 'Strong Conclusions Require Strong Evidence',
    href: '/foundations/strong-conclusions-require-strong-evidence',
    description: 'The governing principle beneath every domain expression of WhyDive.',
  },
  {
    title: 'Framework Overview',
    href: '/foundations/framework-overview',
    description: 'A first map of evidence, reasoning, judgment, decision, action, and consequence.',
  },
];

export default function FoundationsPage() {
  return (
    <EditorialPage
      eyebrow="Foundations"
      title="Start with the movement from evidence to judgment."
      intro="The Foundations section defines WhyDive before any application, product, or domain expression enters the conversation."
      image={{
        src: '/images/whydive/foundations-layered-evidence-banner.png',
        alt: 'Layered translucent sheets suggesting evidence, boundaries, and framework architecture.',
      }}
    >
      <SectionHeading title="Recommended first reading path">
        <p>
          These pages help a first-time reader understand what WhyDive is, what human problem it
          addresses, and why its applications remain distinct from the parent framework.
        </p>
      </SectionHeading>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {foundationPages.map((page) => (
          <Link key={page.href} href={page.href}>
            <QuietCard title={page.title}>
              <p>{page.description}</p>
            </QuietCard>
          </Link>
        ))}
      </div>

      <div className="mt-14 border-l border-[#8a6d2f]/50 pl-6">
        <p className="wd-display text-3xl leading-tight text-[#243447]">
          WhyDive is not a curriculum, test, standards project, or software platform. Those are
          applications. WhyDive is the framework beneath them.
        </p>
      </div>

      <VisitorActionPanel
        title="Move from orientation to use."
        benefit="The foundation pages give a shared vocabulary for conversation. Use them to frame a reading group, professional discussion, curriculum conversation, or research question."
        actions={[
          {
            label: 'Begin with What Is WhyDive?',
            href: '/foundations/what-is-whydive',
            description: 'Use the definition page when someone needs the clearest entry point.',
          },
          shareAction,
          discussionAction,
          traceApplicationsAction,
        ]}
      />
    </EditorialPage>
  );
}
