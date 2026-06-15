import type { Metadata } from 'next';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { currentApplications, futureApplications } from '@/content/applications';
import { assetUrl } from '@/lib/assets';
import { discussionAction, readFoundationsAction, traceApplicationsAction } from '@/lib/visitorActions';

export const metadata: Metadata = {
  title: 'Applications',
  description: 'Current and future domain applications of the WhyDive framework.',
};

export default function ApplicationsPage() {
  return (
    <EditorialPage
      eyebrow="Applications"
      title="The domain changes. The pattern remains."
      intro="WhyDive appears in education, reading, data literacy, policy, business, AI, and civic reasoning wherever people must ask what evidence authorizes."
      image={{
        src: assetUrl('/images/whydive/applications-branching-framework-banner.png'),
        alt: 'A central illuminated line branching into several pathways across textured paper.',
      }}
    >
      <SectionHeading title="Current expressions">
        <p>
          These applications point outward when visitors need a product, standard, or classroom
          tool. WhyDive.org remains the architectural home of the parent framework.
        </p>
      </SectionHeading>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {currentApplications.map((item) => (
          <a key={item.title} href={item.href} target="_blank" rel="noreferrer">
            <QuietCard title={item.title} eyebrow={item.eyebrow}>
              <p>{item.description}</p>
            </QuietCard>
          </a>
        ))}
      </div>

      <div className="mt-14">
        <SectionHeading title="Future domains">
          <p>
            These domains show the larger scope of WhyDive beyond education and data literacy.
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {futureApplications.map((item) => (
            <QuietCard key={item.slug} title={item.title} eyebrow={item.eyebrow}>
              <p>{item.description}</p>
            </QuietCard>
          ))}
        </div>
      </div>

      <VisitorActionPanel
        title="Choose the path that matches your responsibility."
        benefit="Applications help visitors move from the framework into a concrete domain. District leaders, teachers, researchers, and partners can choose the path that fits their work."
        actions={[
          traceApplicationsAction,
          {
            label: 'Study the parent framework',
            href: '/foundations/what-is-whydive',
            description: 'Use this when the applications make sense but the underlying idea still needs definition.',
          },
          discussionAction,
          readFoundationsAction,
        ]}
      />
    </EditorialPage>
  );
}
