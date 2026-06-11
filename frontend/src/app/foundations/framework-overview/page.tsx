import type { Metadata } from 'next';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { StructuredData } from '@/components/site/StructuredData';
import { absoluteUrl, publisherName, siteName, siteUrl } from '@/lib/discovery';
import { discussionAction, shareAction, traceApplicationsAction } from '@/lib/visitorActions';

export const metadata: Metadata = {
  title: 'Framework Overview',
  description: 'A first map of the WhyDive movement from evidence to action.',
  alternates: {
    canonical: '/foundations/framework-overview',
  },
};

const steps = [
  ['Evidence', 'What is available, observed, claimed, measured, narrated, testified, or generated.'],
  ['Reasoning', 'How meaning, support, alternatives, and limits are interpreted from that evidence.'],
  ['Conclusion', 'The claim a person or institution believes the evidence supports.'],
  ['Judgment', 'What ought to be believed, communicated, prioritized, or done in light of the conclusion.'],
  ['Decision', 'The chosen direction that follows judgment under real constraints.'],
  ['Action', 'The moment judgment enters the world and begins producing consequences.'],
];

const boundaryQuestions = [
  {
    title: 'Support',
    text: 'What does the evidence actually support?',
  },
  {
    title: 'Limits',
    text: 'Where does the evidence stop supporting the claim?',
  },
  {
    title: 'Alternatives',
    text: 'What other explanations, interpretations, or judgments remain possible?',
  },
  {
    title: 'Responsibility',
    text: 'How should uncertainty be carried into communication, decision, and action?',
  },
];

const applicationExamples = [
  {
    title: 'Data Literacy',
    text: 'Students learn what charts show, what they imply, and what they do not authorize as conclusions.',
  },
  {
    title: 'Reading and Interpretation',
    text: 'Readers learn to distinguish textual evidence, inference, interpretation, and judgment.',
  },
  {
    title: 'AI Evaluation',
    text: 'People learn to audit generated answers before treating fluent reasoning as justified judgment.',
  },
];

export default function FrameworkOverviewPage() {
  const pageUrl = absoluteUrl('/foundations/framework-overview');
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: 'WhyDive Framework Overview',
    description: 'A first map of the WhyDive movement from evidence to action.',
    url: pageUrl,
    image: absoluteUrl('/images/whydive/foundations-thresholds-framework.png'),
    articleSection: 'Foundations',
    inLanguage: 'en-US',
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
    },
    author: {
      '@type': 'Person',
      name: 'Elvis Agard',
    },
    about: steps.map(([name]) => ({
      '@type': 'Thing',
      name,
    })),
  };

  return (
    <EditorialPage
      eyebrow="Foundations"
      title="The framework makes the movement visible."
      intro="WhyDive studies the passage from evidence through reasoning and judgment into action."
      image={{
        src: '/images/whydive/foundations-thresholds-framework.png',
        alt: 'Illuminated thresholds receding across a dark architectural room.',
      }}
    >
      <StructuredData data={pageSchema} />
      <SectionHeading title="A first map">
        <p>
          The framework does not begin with a product category. It begins with a human movement that
          appears across domains whenever people decide what follows from evidence.
        </p>
      </SectionHeading>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {steps.map(([title, description], index) => (
          <QuietCard key={title} title={title} eyebrow={`0${index + 1}`}>
            <p>{description}</p>
          </QuietCard>
        ))}
      </div>

      <section className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="border-t border-[#8a6d2f]/50 pt-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">
            Why the Map Matters
          </p>
          <p className="wd-display mt-4 text-3xl leading-tight text-[#243447]">
            A person can have information, perform reasoning, and still make poor judgment if the
            movement between stages is not examined.
          </p>
        </aside>

        <div className="space-y-8 text-lg leading-9 text-[#465767]">
          <p>
            Information is not judgment. Reasoning is not judgment. Reasoning helps determine what
            evidence means, what it supports, what it does not support, and what limits must be
            acknowledged. Judgment then brings those conclusions into contact with values,
            obligations, purposes, communities, and consequences.
          </p>
          <p>
            This is why WhyDive resists reducing judgment to either data processing or personal
            conviction. Data without judgment can become mechanical. Conviction without evidential
            discipline can become reckless. WhyDive works in the space between them.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="Boundary Work" title="The framework watches for overreach.">
          <p>
            The central discipline is not merely asking whether evidence exists. It is asking what
            boundary the evidence places around the conclusion.
          </p>
        </SectionHeading>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {boundaryQuestions.map((item) => (
            <QuietCard key={item.title} title={item.title}>
              <p>{item.text}</p>
            </QuietCard>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="Applications" title="The same movement appears across domains.">
          <p>
            WhyDive Education, Data Literacy Standards, Chart-Ed, and future applications are not
            separate philosophies. They are domain expressions of the same evidential movement.
          </p>
        </SectionHeading>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {applicationExamples.map((item) => (
            <QuietCard key={item.title} title={item.title}>
              <p>{item.text}</p>
            </QuietCard>
          ))}
        </div>
      </section>

      <section className="mt-16 border-l border-[#8a6d2f]/50 pl-6">
        <p className="wd-display text-3xl leading-tight text-[#243447]">
          The framework is simple enough to remember and deep enough to govern a family of tools,
          standards, essays, and future domain systems.
        </p>
      </section>

      <VisitorActionPanel
        title="Use the map to locate your question."
        benefit="If you are dealing with a hard claim, a confusing decision, a classroom challenge, or a public argument, this map helps you ask where the reasoning path needs attention."
        actions={[shareAction, traceApplicationsAction, discussionAction]}
      />
    </EditorialPage>
  );
}
