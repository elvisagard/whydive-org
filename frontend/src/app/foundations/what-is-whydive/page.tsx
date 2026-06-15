import type { Metadata } from 'next';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { StructuredData } from '@/components/site/StructuredData';
import { assetUrl } from '@/lib/assets';
import { absoluteUrl, publisherName, siteName, siteUrl } from '@/lib/discovery';
import { discussionAction, shareAction, traceApplicationsAction } from '@/lib/visitorActions';

const articleImage = assetUrl('/images/whydive/what-is-whydive-linkedin-card.png');

export const metadata: Metadata = {
  title: 'What Is WhyDive? A Framework for Stronger Judgment',
  description:
    'WhyDive is a framework for strengthening judgment by helping people align conclusions with evidence.',
  alternates: {
    canonical: '/foundations/what-is-whydive',
  },
  openGraph: {
    title: 'What Is WhyDive?',
    description:
      'WhyDive exists in the movement from evidence to judgment. It helps people ask what the evidence actually supports.',
    type: 'article',
    url: absoluteUrl('/foundations/what-is-whydive'),
    images: [
      {
        url: articleImage,
        width: 1732,
        height: 908,
        alt: 'Evidence fragments moving through an illuminated boundary toward a point of judgment.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is WhyDive?',
    description:
      'WhyDive is a framework for strengthening judgment by helping people align conclusions with evidence.',
    images: [articleImage],
  },
};

const overclaimingForms = [
  'treating a correlation as if it proves causation',
  'turning one example into a universal rule',
  'confusing confidence with justification',
  'presenting a possibility as if it were probability',
  'using a partial data point to support a sweeping claim',
  'ignoring uncertainty because certainty feels more useful',
];

const whyDiveSequence = ['Evidence', 'Reasoning', 'Judgment', 'Action', 'Consequences'];

export default function WhatIsWhyDivePage() {
  const pageUrl = absoluteUrl('/foundations/what-is-whydive');
  const pageImage = absoluteUrl(articleImage);
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: 'What Is WhyDive?',
    url: pageUrl,
    description:
      'WhyDive is a framework for strengthening judgment by helping people align conclusions with evidence.',
    image: pageImage,
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
      { '@type': 'Thing', name: siteName },
      { '@type': 'Thing', name: 'evidence-proportional judgment' },
      { '@type': 'Thing', name: 'overclaiming' },
    ],
  };

  return (
    <EditorialPage
      eyebrow="Foundations"
      title="What is WhyDive?"
      intro="WhyDive is a framework for strengthening judgment by helping people align conclusions with evidence."
      image={{
        src: articleImage,
        alt: 'Evidence fragments moving through an illuminated boundary toward a point of judgment.',
      }}
    >
      <StructuredData data={pageSchema} />
      <article className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr]">
        <aside className="border-t border-[#8a6d2f]/50 pt-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">Anchor Article</p>
          <p className="wd-display mt-4 text-3xl leading-tight text-[#243447]">
            Strong conclusions require strong evidence.
          </p>
          <p className="mt-5 text-base leading-7 text-[#536271]">
            The strength of what we believe, claim, recommend, or decide should not exceed the
            strength of the evidence supporting it.
          </p>
        </aside>

        <div className="wd-reading space-y-7 text-xl leading-9 text-[#384a5a]">
          <p>WhyDive is a framework for strengthening judgment.</p>
          <p>
            It begins with a simple discipline: strong conclusions require strong evidence. The
            strength of what we believe, claim, recommend, or decide should not exceed the strength
            of the evidence supporting it.
          </p>
          <p>
            That sounds obvious until ordinary life begins.
          </p>
          <p>
            People make judgments from partial information. A chart suggests a trend. A report
            highlights one number. A text supports more than one interpretation. A leader must
            decide before every uncertainty has been resolved. An AI system gives a confident answer
            without showing what its confidence is worth. A public argument moves quickly from
            evidence to accusation, policy, identity, or action.
          </p>
          <p>
            The problem is not only that people lack information. Often, the harder problem is that
            people move too quickly from information to conclusion.
          </p>
          <p>WhyDive exists in that movement.</p>
        </div>
      </article>

      <section className="mt-16">
        <SectionHeading eyebrow="The Question WhyDive Asks" title="What conclusions are justified by the evidence available?">
          <p>
            Every WhyDive application begins with that question. It does not ask only what we can
            notice, prefer, imagine, or argue. It asks what the evidence can responsibly support.
          </p>
        </SectionHeading>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            'Sometimes the evidence supports a strong conclusion.',
            'Sometimes it supports a cautious interpretation.',
            'Sometimes it supports only a possibility.',
            'Sometimes it shows that several explanations remain open.',
            'Sometimes it does not support the claim we want to make at all.',
          ].map((statement) => (
            <QuietCard key={statement} title="Boundary">
              <p>{statement}</p>
            </QuietCard>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="border-t border-[#8a6d2f]/50 pt-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">
            Evidence and Judgment
          </p>
          <p className="wd-display mt-4 text-3xl leading-tight text-[#243447]">
            More information does not automatically produce better judgment.
          </p>
        </aside>
        <div className="space-y-7 text-lg leading-9 text-[#465767]">
          <p>
            WhyDive is concerned with evidence, but it is not trying to reduce human life to data.
            Evidence matters because it informs judgment. Judgment is what people use to decide what
            to believe, what to communicate, what to prioritize, and what to do.
          </p>
          <p>
            A person can have accurate information and still reach a poor judgment if the conclusion
            outruns the evidence, ignores uncertainty, or treats a partial signal as proof.
          </p>
          <p>
            That is why WhyDive does not stop at information literacy. Information literacy asks
            whether people can access, read, and evaluate information. Those are important skills.
            But WhyDive presses further into epistemic literacy: how people determine what they can
            responsibly conclude from the evidence they have.
          </p>
          <p>
            More data can create more confidence without creating more justification. More fluent
            explanations can make weak claims feel stronger than they are. More evidence can even be
            misused when people pull it beyond its proper boundary.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="The Problem of Overclaiming" title="A conclusion becomes stronger than the evidence behind it.">
          <p>
            Overclaiming is not only a reasoning problem. It is also a responsibility problem.
            Claims affect other people. They shape trust, decisions, representation, policy,
            teaching, leadership, and action.
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {overclaimingForms.map((form) => (
            <QuietCard key={form} title="Overclaiming">
              <p>{form}</p>
            </QuietCard>
          ))}
        </div>
        <div className="mt-10 border-l border-[#8a6d2f]/50 pl-6 text-lg leading-9 text-[#465767]">
          <p>
            WhyDive does not ask people to become timid thinkers. It asks them to become
            proportionate thinkers. If the evidence is strong, say so. If the evidence is limited,
            say so. If the evidence is incomplete, preserve that uncertainty. If the evidence does
            not support the claim, do not pretend that it does.
          </p>
        </div>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading title="Reasoning in service of judgment">
            <p>
              Reasoning helps people examine what evidence means, what it supports, what it does
              not support, what assumptions are being made, and what alternatives remain possible.
            </p>
          </SectionHeading>
          <p className="mt-7 text-lg leading-9 text-[#465767]">
            Judgment uses that reasoning to determine what should be believed, communicated,
            prioritized, or done. WhyDive therefore treats reasoning as a pathway, not the
            destination. The destination is better judgment under evidence constraints.
          </p>
        </div>

        <div>
          <SectionHeading title="WhyDive sequence">
            <p>
              Evidence is often incomplete, uncertain, conflicting, emotionally charged, or mediated
              through institutions, charts, texts, models, stories, and authorities.
            </p>
          </SectionHeading>
          <div className="mt-7 grid gap-3">
            {whyDiveSequence.map((step, index) => (
              <div key={step} className="flex items-center gap-4 border border-[#d9d0c3] bg-[#fffdf8] p-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6d2f]">
                  0{index + 1}
                </span>
                <span className="font-semibold text-[#101b23]">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="Parent Framework" title="WhyDive is not first a curriculum, assessment, standard, product, or software platform.">
          <p>
            Those can all become applications. At its root, WhyDive is a framework for understanding
            and improving how human beings move from evidence to action.
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-7 text-lg leading-9 text-[#465767]">
            <p>
              It is designed to travel wherever people must interpret evidence and form conclusions:
              charts, reading, writing, science, leadership, business, artificial intelligence,
              public discourse, theology, civic life, and everyday decisions.
            </p>
            <p>
              This is also why WhyDive should not be confused with Chart-Ed. Chart-Ed is a flagship
              application of the broader WhyDive framework in graph literacy and data reasoning. It
              shows what can happen when the framework is applied deeply to charts, data, standards,
              assessments, and classroom resources.
            </p>
          </div>
          <QuietCard title="WhyDive.org is the architectural home." eyebrow="Public purpose">
            <p>
              This site exists for foundational essays, whitepapers, research notes, conceptual
              explainers, and public-interest writing about evidence, reasoning, judgment,
              uncertainty, overclaiming, decision-making, AI, civic reasoning, leadership, and human
              flourishing.
            </p>
          </QuietCard>
        </div>
      </section>

      <div className="mt-16 border-l border-[#8a6d2f]/50 pl-6">
        <p className="wd-display text-3xl leading-tight text-[#243447]">
          WhyDive exists to slow down the movement from evidence to judgment, examine it, and
          strengthen it.
        </p>
        <p className="mt-5 text-lg leading-8 text-[#465767]">
          Strong conclusions require strong evidence. Dive into the why behind what you believe,
          conclude, and decide.
        </p>
      </div>

      <section className="mt-16 border border-[#d9d0c3] bg-[#fffdf8] p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">
          Source note
        </p>
        <p className="mt-4 text-sm leading-7 text-[#536271]">
          This article is based on internal WhyDive framework and ecosystem documents developed by
          Living Spiral Studio LLC. It is a framework orientation essay, not a literature review.
        </p>
      </section>

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
