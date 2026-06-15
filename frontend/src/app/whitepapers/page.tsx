import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { whitepaperEntries, whitepaperLayers } from '@/content/whitepapers';
import { discussionAction, readFoundationsAction, traceApplicationsAction } from '@/lib/visitorActions';

export const metadata: Metadata = {
  title: 'Whitepapers',
  description: 'Formal WhyDive framework and application documents.',
};

export default function WhitepapersPage() {
  const foundationalPair = whitepaperEntries.filter((paper) =>
    ['strengthening-judgment-under-evidence-constraints', 'bounded-reasoning-development-system'].includes(
      paper.slug,
    ),
  );

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
      {foundationalPair.length ? (
        <section className="mb-14 border border-[#d9d0c3] bg-[#101b23] text-[#f8f4ed]">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-4 border-b border-white/10 bg-[#07141b] p-6 sm:grid-cols-2 lg:border-b-0 lg:border-r">
              {foundationalPair.map((paper) =>
                paper.coverImage ? (
                  <Link
                    key={paper.slug}
                    href={`/whitepapers/${paper.slug}`}
                    className="group block"
                    aria-label={`Read ${paper.title}: ${paper.subtitle}`}
                  >
                    <div className="relative aspect-[17/22] overflow-hidden border border-white/12 bg-[#101b23] transition group-hover:border-[#c8a45a]/70">
                      <Image
                        src={paper.coverImage}
                        alt={`Cover of ${paper.title}: ${paper.subtitle}.`}
                        fill
                        sizes="(min-width: 1024px) 230px, 45vw"
                        className="object-cover object-top"
                        priority={false}
                      />
                    </div>
                  </Link>
                ) : null,
              )}
            </div>
            <div className="p-6 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c8a45a]">
                Foundational pair / June 2026
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#fffdf8]">
                WhyDive Framework: why it exists and how it works.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#d8d0c5]">
                Whitepaper 1 names the human problem and foundational claim. Whitepaper 2 defines
                the parent-framework architecture for bounded reasoning development.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {foundationalPair.map((paper, index) => (
                  <Link
                    key={paper.slug}
                    href={`/whitepapers/${paper.slug}`}
                    className={`inline-flex justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                      index === 0
                        ? 'bg-[#f8f4ed] text-[#101b23] hover:bg-white'
                        : 'border border-white/25 text-[#fffdf8] hover:border-[#c8a45a] hover:text-[#c8a45a]'
                    }`}
                  >
                    Read Whitepaper {index + 1}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

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
            label: 'Review the foundational pair',
            href: '/whitepapers/strengthening-judgment-under-evidence-constraints',
            description: 'Start with why WhyDive exists, then continue into how the architecture works.',
          },
          traceApplicationsAction,
          discussionAction,
          readFoundationsAction,
        ]}
      />
    </EditorialPage>
  );
}
