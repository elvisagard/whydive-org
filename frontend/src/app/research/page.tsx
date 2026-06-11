import type { Metadata } from 'next';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { researchTopics } from '@/content/research';
import { discussionAction, readFoundationsAction, shareAction } from '@/lib/visitorActions';

export const metadata: Metadata = {
  title: 'Research Library',
  description: 'Research areas connected to WhyDive, including epistemic cognition, judgment, decision science, and wisdom literature.',
};

export default function ResearchPage() {
  return (
    <EditorialPage
      eyebrow="Research Library"
      title="Connecting WhyDive to scholarship."
      intro="The research library connects WhyDive to scholarship on reasoning, judgment, wisdom, decision-making, learning, and public life."
      image={{
        src: '/images/whydive/research-library-banner.png',
        alt: 'A quiet library reading room with books and notes arranged across a long table.',
      }}
    >
      <SectionHeading title="Initial research areas">
        <p>
          Use these areas to see where WhyDive is in conversation with existing work and where its
          own language offers a distinct contribution.
        </p>
      </SectionHeading>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {researchTopics.map((topic) => (
          <QuietCard key={topic.slug} title={topic.title}>
            <p>{topic.description}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6d2f]">
              {topic.formats.join(' / ')}
            </p>
          </QuietCard>
        ))}
      </div>

      <VisitorActionPanel
        title="Help connect the framework to serious scholarship."
        benefit="The research library is for readers who want sources, citations, book paths, and conceptual anchors. Contributions are most helpful when they sharpen the framework rather than merely add references."
        actions={[
          {
            label: 'Suggest a source or research thread',
            href: discussionAction.href,
            description: 'Send a paper, book, author, or field that could sharpen the research library.',
          },
          shareAction,
          discussionAction,
          readFoundationsAction,
        ]}
      />
    </EditorialPage>
  );
}
