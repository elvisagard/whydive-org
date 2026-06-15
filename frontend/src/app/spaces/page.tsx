import type { Metadata } from 'next';
import Link from 'next/link';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { whyDiveSpaces } from '@/content/spaces';
import { assetUrl } from '@/lib/assets';
import { discussionAction, readFoundationsAction, shareAction, traceApplicationsAction } from '@/lib/visitorActions';

export const metadata: Metadata = {
  title: 'Spaces',
  description:
    'WhyDive spaces for educators, clergy, executives, civic leaders, researchers, and technology teams.',
};

export default function SpacesPage() {
  return (
    <EditorialPage
      eyebrow="Spaces"
      title="Find the room where the framework meets your work."
      intro="WhyDive becomes useful when it enters real situations: classrooms, congregations, boardrooms, civic meetings, research reviews, and technology decisions."
      image={{
        src: assetUrl('/images/whydive/spaces-documentary-table-social-v2.png'),
        alt: 'A group gathered around maps, notes, photographs, and documents during a serious evidence discussion.',
      }}
    >
      <SectionHeading title="Choose the space closest to your responsibility.">
        <p>
          Each space begins with a recognizable scenario, then shows how WhyDive helps people ask
          better questions, avoid overconfident conclusions, and move toward wiser action.
        </p>
      </SectionHeading>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {whyDiveSpaces.map((space) => (
          <Link key={space.slug} href={`/spaces/${space.slug}`} className="block">
            <QuietCard title={space.title} eyebrow={space.eyebrow}>
              <p>{space.summary}</p>
            </QuietCard>
          </Link>
        ))}
      </div>

      <section className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="border-t border-[#8a6d2f]/50 pt-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">
            Why This Matters
          </p>
          <p className="wd-display mt-4 text-3xl leading-tight text-[#243447]">
            The average reader may not be looking for a theory of judgment. They may be looking for
            help with a hard conversation, a confusing claim, or a decision that carries real
            consequences.
          </p>
        </aside>

        <div className="space-y-7 text-lg leading-9 text-[#465767]">
          <p>
            Chart-Ed makes data literacy relatable through stakeholder pathways and case studies.
            WhyDive can do the same for judgment. The point is not to make the framework smaller.
            The point is to give people a door into it.
          </p>
          <p>
            These spaces let visitors see the framework at work before they read the full
            architecture. They also create natural prompts for blogs, talks, discussion guides, and
            invitations to learning communities.
          </p>
        </div>
      </section>

      <VisitorActionPanel
        title="Use these spaces to start a focused conversation."
        benefit="Choose a space, read the scenario, and bring the questions to the people who share that responsibility with you."
        actions={[shareAction, discussionAction, readFoundationsAction, traceApplicationsAction]}
      />
    </EditorialPage>
  );
}
