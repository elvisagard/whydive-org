import type { Metadata } from 'next';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { StructuredData } from '@/components/site/StructuredData';
import { assetUrl } from '@/lib/assets';
import { absoluteUrl, publisherName, siteName, siteUrl } from '@/lib/discovery';
import { discussionAction, shareAction, traceApplicationsAction } from '@/lib/visitorActions';

export const metadata: Metadata = {
  title: 'Strong Conclusions Require Strong Evidence',
  description: 'The governing principle beneath the WhyDive framework.',
  alternates: {
    canonical: '/foundations/strong-conclusions-require-strong-evidence',
  },
};

const articleImage = assetUrl('/images/whydive/strong-conclusions-require-strong-evidence-approved-hero.png');

const commonBreakdowns = [
  {
    title: 'Possibility Becomes Probability',
    text: 'A thing could be true, so people begin speaking as though it is likely true.',
  },
  {
    title: 'Confidence Becomes Justification',
    text: 'The force of conviction is mistaken for the strength of the evidence behind it.',
  },
  {
    title: 'Observation Becomes Permission',
    text: 'Something noticed in the world is treated as enough reason to decide or act.',
  },
  {
    title: 'Correlation Becomes Cause',
    text: 'A pattern is seen, and the explanation is chosen faster than the evidence allows.',
  },
];

const evidenceQuestions = [
  'What evidence is actually available?',
  'How strong is that evidence?',
  'What conclusion does it support?',
  'What conclusion does it not support?',
  'What alternatives remain possible?',
  'What level of confidence is justified?',
];

export default function StrongConclusionsPage() {
  const pageUrl = absoluteUrl('/foundations/strong-conclusions-require-strong-evidence');
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: 'Strong conclusions require strong evidence.',
    description: 'The governing principle beneath the WhyDive framework.',
    url: pageUrl,
    image: absoluteUrl(articleImage),
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
    about: [
      {
        '@type': 'Thing',
        name: siteName,
      },
      {
        '@type': 'Thing',
        name: 'evidence-bound judgment',
      },
      {
        '@type': 'Thing',
        name: 'proportional conclusions',
      },
    ],
  };

  return (
    <EditorialPage
      eyebrow="Foundational Essay"
      title="Strong conclusions require strong evidence."
      intro="The strength of a conclusion should not exceed the strength of the evidence supporting it."
      image={{
        src: articleImage,
        alt: 'A visual metaphor of evidence as a bridge that must be strong enough to carry the weight of a conclusion.',
      }}
    >
      <StructuredData data={articleSchema} />
      <article className="mx-auto max-w-3xl space-y-8 text-lg leading-9 text-[#384a5a]">
        <p>
          This principle is simple. Living it consistently is not. People often move from evidence
          to certainty faster than the evidence permits.
        </p>
        <p>
          They confuse correlation with causation, possibility with probability, confidence with
          justification, and observation with permission to act.
        </p>
        <p>
          WhyDive begins by asking whether a conclusion is proportionate to the evidence available.
          A weak conclusion may only need modest evidence. A strong conclusion requires stronger
          evidence because it carries greater force into judgment, decision, action, and consequence.
        </p>
        <p>
          One way to picture the problem is a bridge. Evidence is the structure carrying the claim.
          A light claim may cross on limited support. A heavy claim needs stronger support. When the
          claim becomes heavier than the evidence can carry, judgment has crossed into overclaiming.
        </p>
        <blockquote className="wd-display border-l border-[#8a6d2f]/60 pl-6 text-3xl leading-tight text-[#243447]">
          What does the evidence authorize? What does it not authorize? What judgment should follow?
        </blockquote>
        <p>
          This is not a call to permanent hesitation. It is a call to proportion. Some situations
          require action under incomplete evidence. WhyDive does not deny that. It asks people and
          institutions to name the limits honestly, carry uncertainty responsibly, and resist making
          the claim stronger than the evidence allows.
        </p>
        <p>
          Judgment always involves more than evidence. Values, obligations, purpose, worldview,
          character, and community all matter. But when evidence is used to support a claim, the
          claim should not be permitted to outrun what the evidence can bear.
        </p>
      </article>

      <section className="mt-16">
        <SectionHeading eyebrow="Where Judgment Breaks Down" title="The problem is often not ignorance.">
          <p>
            Poor judgment can emerge even when information is abundant and reasoning appears
            sophisticated. The failure often happens when the movement from evidence to conclusion is
            allowed to blur.
          </p>
        </SectionHeading>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {commonBreakdowns.map((item) => (
            <QuietCard key={item.title} title={item.title}>
              <p>{item.text}</p>
            </QuietCard>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading title="A disciplined conclusion has a visible relationship to evidence.">
            <p>
              The goal is not to make every person reach the same judgment. The goal is to make the
              evidential pathway visible enough that people can examine where a conclusion came
              from, what it depends on, and where it may be overstated.
            </p>
          </SectionHeading>
        </div>

        <div className="border border-[#d9d0c3] bg-[#fffdf8] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">
            Working Questions
          </p>
          <ul className="mt-5 space-y-3 text-base leading-7 text-[#465767]">
            {evidenceQuestions.map((question) => (
              <li key={question} className="border-l border-[#8a6d2f]/35 pl-4">
                {question}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16 border-l border-[#8a6d2f]/50 pl-6">
        <p className="wd-display text-3xl leading-tight text-[#243447]">
          Strong conclusions are not forbidden. They are earned.
        </p>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-[#465767]">
          When evidence is strong, WhyDive permits strength. When evidence is partial, uncertain, or
          contested, WhyDive asks the conclusion to carry that humility into judgment.
        </p>
      </section>

      <VisitorActionPanel
        title="Use this principle as a discussion prompt."
        benefit="This page is useful in any setting where people are making claims, interpreting evidence, or deciding how much confidence a conclusion deserves."
        actions={[
          shareAction,
          {
            label: 'Read the framework overview',
            href: '/foundations/framework-overview',
            description: 'See how evidence, reasoning, conclusion, judgment, decision, and action fit together.',
          },
          traceApplicationsAction,
          discussionAction,
        ]}
      />
    </EditorialPage>
  );
}
