import type { Metadata } from 'next';
import Link from 'next/link';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { whitepaperLayers } from '@/content/whitepapers';
import { discussionAction, readFoundationsAction, traceApplicationsAction } from '@/lib/visitorActions';

export const metadata: Metadata = {
  title: 'Whitepapers',
  description: 'Formal WhyDive framework and application documents.',
};

export default function WhitepapersPage() {
  return (
    <EditorialPage
      eyebrow="Whitepapers"
      title="Formal documents for the framework and its applications."
      intro="Whitepapers give careful readers a more formal way to examine WhyDive: its claims, architecture, applications, and open questions."
      image={{
        src: '/images/whydive/whitepaper-foundational-document.png',
        alt: 'A formal archival document beneath glass with surrounding evidence fragments.',
      }}
    >
      <SectionHeading title="Repository structure">
        <p>
          Start with the foundational framework, then move into architecture and applications. The
          order matters because WhyDive is larger than any one product, standard, or classroom tool.
        </p>
      </SectionHeading>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {whitepaperLayers.map((group) => (
          <QuietCard key={group.layer} title={`Layer ${group.layer}: ${group.title}`}>
            <p className="mb-4 font-semibold text-[#243447]">{group.question}</p>
            <ul className="space-y-2">
              {group.papers.map((paper) => (
                <li key={paper.slug}>
                  <Link className="font-semibold text-[#6f551e] hover:text-[#101b23]" href={`/whitepapers/${paper.slug}`}>
                    {paper.title}: {paper.subtitle}
                  </Link>
                </li>
              ))}
            </ul>
          </QuietCard>
        ))}
      </div>

      <div className="mt-12 border-l border-[#8a6d2f]/50 pl-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">
          Reader's question
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-[#465767]">
          As you read, ask which entity is being discussed, which audience is being served, and what
          question the document is trying to answer.
        </p>
      </div>

      <VisitorActionPanel
        title="Use the whitepapers for review, alignment, and serious inquiry."
        benefit="The whitepaper section is where the framework can be examined with more formality. Readers should know whether to review a claim, trace the architecture, or start a discussion."
        actions={[
          {
            label: 'Review the foundational whitepaper',
            href: '/whitepapers/strengthening-judgment-under-evidence-constraints',
            description: 'Start with the public paper that frames the purpose and stakes of WhyDive.',
          },
          traceApplicationsAction,
          discussionAction,
          readFoundationsAction,
        ]}
      />
    </EditorialPage>
  );
}
