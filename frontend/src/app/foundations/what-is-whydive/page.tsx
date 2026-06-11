import type { Metadata } from 'next';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { StructuredData } from '@/components/site/StructuredData';
import { absoluteUrl, publisherName, siteName, siteUrl } from '@/lib/discovery';
import { discussionAction, shareAction, traceApplicationsAction } from '@/lib/visitorActions';

export const metadata: Metadata = {
  title: 'What Is WhyDive?',
  description: 'WhyDive is a framework for understanding and improving how human beings move from evidence to action.',
  alternates: {
    canonical: '/foundations/what-is-whydive',
  },
};

const whatWhyDiveIs = [
  {
    title: 'A Framework',
    text: 'WhyDive names the movement from evidence through reasoning and judgment into decision, action, and consequence.',
  },
  {
    title: 'A Discipline',
    text: 'It asks whether conclusions are proportionate to the evidence available, especially when certainty is tempting.',
  },
  {
    title: 'A Publishing Home',
    text: 'It gives essays, whitepapers, research notes, and applications a shared conceptual foundation.',
  },
];

const whatWhyDiveIsNot = [
  'Not primarily a curriculum',
  'Not primarily a test',
  'Not primarily a standards project',
  'Not primarily a software platform',
  'Not limited to education or data literacy',
];

const whyDiveQuestions = [
  'Why do I believe this?',
  'Why does this evidence support this claim?',
  'Why am I confident?',
  'Why am I rejecting alternatives?',
  'Why do I think this conclusion follows?',
];

export default function WhatIsWhyDivePage() {
  const pageUrl = absoluteUrl('/foundations/what-is-whydive');
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `${pageUrl}#defined-term`,
    name: siteName,
    url: pageUrl,
    description:
      'A framework for understanding and improving how human beings move from evidence to action.',
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'WhyDive Foundations',
      url: absoluteUrl('/foundations'),
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      url: siteUrl,
    },
  };

  return (
    <EditorialPage
      eyebrow="Foundations"
      title="What is WhyDive?"
      intro="WhyDive is a framework for understanding and improving how human beings move from evidence to action."
      image={{
        src: '/images/whydive/ecosystem-spiral-map-square.png',
        alt: 'A hand-drawn spiral architecture map with connected nodes and subtle gold and teal lines.',
      }}
    >
      <StructuredData data={pageSchema} />
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="border-t border-[#8a6d2f]/50 pt-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">
            Foundational Statement
          </p>
          <p className="wd-display mt-4 text-3xl leading-tight text-[#243447]">
            It develops the forms of reasoning that shape judgment because judgment shapes
            decisions, and decisions shape the lives of individuals, communities, and societies.
          </p>
        </aside>

        <div className="space-y-8 text-lg leading-9 text-[#465767]">
          <p>
            Human beings do not merely encounter information. They encounter situations: a report, a
            chart, a conversation, a scientific finding, a sacred text, an AI-generated answer, a
            business proposal, or a personal crisis.
          </p>
          <p>
            From these encounters they form conclusions. From conclusions they form judgments. From
            judgments they make decisions. From decisions come actions. From actions come
            consequences.
          </p>
          <p>
            WhyDive exists because this movement is often invisible. People see conclusions,
            decisions, and outcomes. They rarely see the reasoning and judgment processes that
            produced them.
          </p>
          <p>
            The purpose of WhyDive is to make that movement visible enough to examine, teach,
            improve, and apply across domains. It does not begin as a product category. It begins as
            a way of asking whether a claim has been carried honestly from evidence into judgment.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading eyebrow="Definition" title="WhyDive is the parent framework, not one of its applications.">
          <p>
            WhyDive Education, Data Literacy Standards, Chart-Ed Institute, and Chart-Ed are domain
            expressions. They matter because they show the framework in practice. But WhyDive itself
            is larger than any one domain.
          </p>
        </SectionHeading>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {whatWhyDiveIs.map((item) => (
            <QuietCard key={item.title} title={item.title}>
              <p>{item.text}</p>
            </QuietCard>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <section>
          <SectionHeading title="What WhyDive is not">
            <p>
              Clear boundaries keep the framework from collapsing into its first visible uses.
            </p>
          </SectionHeading>
          <ul className="mt-7 space-y-3 text-base leading-7 text-[#465767]">
            {whatWhyDiveIsNot.map((item) => (
              <li key={item} className="border-l border-[#8a6d2f]/35 pl-4">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading title="Why the name matters">
            <p>
              The name is an invitation to go beneath the surface of an answer, claim, belief, or
              decision.
            </p>
          </SectionHeading>
          <ul className="mt-7 space-y-3 text-base leading-7 text-[#465767]">
            {whyDiveQuestions.map((question) => (
              <li key={question} className="border-l border-[#8a6d2f]/35 pl-4">
                {question}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-16">
        <SectionHeading eyebrow="The Pattern" title="What WhyDive helps name">
          <p>
            Many failures of judgment begin when conclusions exceed what evidence justifies. The
            framework gives language to that movement so individuals and institutions can examine it.
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {['Overclaiming', 'Overgeneralizing', 'Overstating certainty'].map((title) => (
            <QuietCard key={title} title={title}>
              <p>When a conclusion outruns the evidence available to support it.</p>
            </QuietCard>
          ))}
        </div>
      </div>

      <div className="mt-16 border-l border-[#8a6d2f]/50 pl-6">
        <p className="wd-display text-3xl leading-tight text-[#243447]">
          WhyDive exists to discipline the pathway through which evidence enters judgment, without
          pretending that evidence alone can answer every question human beings face.
        </p>
      </div>

      <VisitorActionPanel
        title="Use this page to introduce the framework."
        benefit="This is the best starting point for someone who has heard the name WhyDive but does not yet know what problem it addresses."
        actions={[
          {
            label: 'Continue to the first principle',
            href: '/foundations/strong-conclusions-require-strong-evidence',
            description: 'Read the claim that gives the framework its discipline.',
          },
          shareAction,
          traceApplicationsAction,
          discussionAction,
        ]}
      />
    </EditorialPage>
  );
}
