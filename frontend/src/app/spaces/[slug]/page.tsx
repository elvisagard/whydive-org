import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { getWhyDiveSpace, whyDiveSpaces } from '@/content/spaces';
import { discussionAction, readFoundationsAction, shareAction, traceApplicationsAction } from '@/lib/visitorActions';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return whyDiveSpaces.map((space) => ({ slug: space.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const space = getWhyDiveSpace(slug);

  if (!space) {
    return {};
  }

  return {
    title: `${space.title} Space`,
    description: space.summary,
    alternates: {
      canonical: `/spaces/${space.slug}`,
    },
  };
}

export default async function SpaceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const space = getWhyDiveSpace(slug);

  if (!space) {
    notFound();
  }

  return (
    <EditorialPage
      eyebrow={space.eyebrow}
      title={`${space.title}: judgment where it is actually needed.`}
      intro={space.summary}
      image={space.image}
    >
      <section className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
        <aside className="border-t border-[#8a6d2f]/50 pt-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">
            Who This Serves
          </p>
          <p className="mt-4 text-lg leading-8 text-[#465767]">{space.audience}</p>
        </aside>

        <div className="space-y-8 text-lg leading-9 text-[#465767]">
          <SectionHeading title={space.scenario.title}>
            <p>{space.scenario.text}</p>
          </SectionHeading>
          <p>
            WhyDive helps by making the movement from evidence to action visible. The goal is not
            to replace professional wisdom, spiritual discernment, leadership experience, or
            technical expertise. The goal is to help each of those forms of responsibility carry
            evidence honestly.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="Where Judgment Breaks Down" title="The problem often appears before the decision.">
          <p>
            In this space, weak judgment usually begins when a conclusion becomes stronger than the
            evidence that supports it.
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {space.breakdown.map((item) => (
            <QuietCard key={item} title={item} eyebrow="Watch for this">
              <p>Pause here before confidence becomes a decision.</p>
            </QuietCard>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading title="Questions to bring into the room">
            <p>
              These questions are designed for real conversation, not private reflection only. Use
              them with the people who share responsibility for the judgment.
            </p>
          </SectionHeading>
        </div>
        <div className="border border-[#d9d0c3] bg-[#fffdf8] p-6">
          <ul className="space-y-3 text-base leading-7 text-[#465767]">
            {space.questions.map((question) => (
              <li key={question} className="border-l border-[#8a6d2f]/35 pl-4">
                {question}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="What WhyDive Offers" title="A framework for disciplined responsibility.">
          <p>
            WhyDive offers language, questions, and practices that help people carry evidence into
            judgment without pretending that evidence alone can do every part of the work.
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {space.frameworkOffers.map((item) => (
            <QuietCard key={item} title={item} eyebrow="Framework use">
              <p>Use this to make the reasoning path visible.</p>
            </QuietCard>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="Practice Moves" title="Try this before the next consequential claim.">
          <p>
            These are simple ways to begin using the framework without waiting for a formal program,
            product, or training.
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {space.practices.map((item) => (
            <QuietCard key={item} title={item} eyebrow="Practice">
              <p>Small enough to try now, strong enough to change the conversation.</p>
            </QuietCard>
          ))}
        </div>
      </section>

      <VisitorActionPanel
        title="Bring this space to your people."
        benefit="The framework becomes more useful when it is tested inside real classrooms, congregations, teams, institutions, and communities."
        actions={[
          {
            label: 'Browse all spaces',
            href: '/spaces',
            description: 'Compare this space with other places where judgment is needed.',
          },
          discussionAction,
          shareAction,
          traceApplicationsAction,
          readFoundationsAction,
        ]}
      />
    </EditorialPage>
  );
}
