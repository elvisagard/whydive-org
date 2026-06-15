import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { StructuredData } from '@/components/site/StructuredData';
import { coreQuestions } from '@/lib/siteContent';
import { currentApplications } from '@/content/applications';
import { whyDiveSpaces } from '@/content/spaces';
import { whitepaperEntries } from '@/content/whitepapers';
import { assetUrl } from '@/lib/assets';
import { absoluteUrl, publisherName, siteName, siteUrl } from '@/lib/discovery';
import { discussionAction, readFoundationsAction, shareAction, traceApplicationsAction } from '@/lib/visitorActions';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

const judgmentSteps = ['Evidence', 'Reasoning', 'Conclusions', 'Judgment', 'Decisions', 'Consequences'];

const audienceCards = [
  {
    title: 'People Facing Hard Questions',
    text: 'Readers trying to think more carefully about belief, evidence, confidence, and action in real life.',
  },
  {
    title: 'Educators and Learning Leaders',
    text: 'Teachers, school leaders, and facilitators who help others reason from evidence without overstating what it supports.',
  },
  {
    title: 'Researchers, Builders, and Institutions',
    text: 'People designing standards, tools, assessments, research programs, or public systems that depend on judgment.',
  },
];

const readingPath = [
  {
    title: 'Start with the framework',
    href: '/foundations/what-is-whydive',
    text: 'Understand WhyDive as the parent framework for evidence, conclusion, judgment, and action.',
  },
  {
    title: 'Read the first principle',
    href: '/foundations/strong-conclusions-require-strong-evidence',
    text: 'Begin with the claim that gives the whole project its discipline.',
  },
  {
    title: 'Trace the applications',
    href: '/applications',
    text: 'See how Chart-Ed, DLS, and WhyDive Education express the larger framework.',
  },
];

const featuredSpaces = whyDiveSpaces.filter((space) =>
  ['educators', 'clergy-and-faith-leaders', 'business-executives'].includes(space.slug),
);

const foundationalWhitepaper = whitepaperEntries.find(
  (paper) => paper.slug === 'strengthening-judgment-under-evidence-constraints',
);

const architectureWhitepaper = whitepaperEntries.find(
  (paper) => paper.slug === 'bounded-reasoning-development-system',
);

export default function Home() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}/#home`,
    url: siteUrl,
    name: 'WhyDive | Evidence, Reasoning, Judgment',
    description:
      'WhyDive is a framework for understanding and improving how human beings move from evidence to action.',
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
    },
    about: [
      'evidence-bound judgment',
      'reasoning and judgment',
      'strong conclusions require strong evidence',
      'evidence to action',
    ].map((name) => ({ '@type': 'Thing', name })),
    mainEntity: {
      '@type': 'DefinedTerm',
      name: siteName,
      description:
        'A framework for understanding and improving how human beings move from evidence to action.',
      url: absoluteUrl('/foundations/what-is-whydive'),
    },
  };

  return (
    <main className="min-h-screen bg-[#f8f4ed] text-[#172631]">
      <StructuredData data={homeSchema} />

      <section className="relative min-h-[760px] overflow-hidden border-b border-[#d9d0c3] bg-[#101b23] text-[#f8f4ed]">
        <Image
          src={assetUrl('/images/whydive/hero-threshold-water-desktop.png')}
          alt="A lone figure standing near a reflective pool at a bright architectural threshold."
          fill
          priority
          sizes="100vw"
          className="hidden object-cover opacity-72 md:block"
        />
        <Image
          src={assetUrl('/images/whydive/hero-mobile-light-threshold.png')}
          alt="A narrow beam of light reaching water and submerged fragments below a threshold."
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-62 md:hidden"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#07141b]/95 via-[#07141b]/74 to-[#07141b]/18" />
        <div className="absolute inset-0 bg-linear-to-t from-[#07141b]/85 via-transparent to-[#07141b]/40" />

        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#c8a45a]">
              WhyDive Framework Institute
            </p>
            <h1 className="wd-display mt-6 max-w-5xl text-5xl leading-[1.04] tracking-normal text-[#fffdf8] md:text-7xl">
              Dive into the why behind what you believe, conclude, and decide.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#d8d0c5]">
              WhyDive is a framework for understanding and improving how human beings move from
              evidence to action.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/foundations/what-is-whydive"
                className="inline-flex justify-center rounded-full bg-[#f8f4ed] px-6 py-3 text-sm font-semibold text-[#101b23] transition hover:bg-white"
              >
                Read the framework
              </Link>
              <Link
                href="/foundations/strong-conclusions-require-strong-evidence"
                className="inline-flex justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-[#fffdf8] transition hover:border-[#c8a45a] hover:text-[#c8a45a]"
              >
                Start with the essay
              </Link>
            </div>
            <div className="mt-16 max-w-2xl border-l border-[#c8a45a]/55 pl-6">
              <p className="wd-display text-3xl leading-tight text-[#fffdf8] md:text-4xl">
                Strong conclusions require strong evidence.
              </p>
              <p className="mt-4 text-base leading-8 text-[#d8d0c5]">
                The strength of a conclusion should not exceed the strength of the evidence
                supporting it. This principle is simple. Living it consistently is not.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="The Human Problem"
          title="Information is not judgment. Reasoning is not judgment."
        >
          <p>
            Information supplies material. Reasoning tests what the material can support. Judgment
            decides what should be believed, communicated, prioritized, or done.
          </p>
          <p className="mt-4">
            Human beings encounter situations, form conclusions, make judgments, decide, act, and
            live with consequences. Modern systems help people acquire information and automate
            reasoning, but often leave the movement into judgment invisible.
          </p>
        </SectionHeading>

        <div className="mt-10 grid gap-4 md:grid-cols-6">
          {judgmentSteps.map((step, index) => (
            <div key={step} className="border-t border-[#8a6d2f]/40 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6d2f]">
                0{index + 1}
              </p>
              <p className="mt-2 text-lg font-semibold text-[#101b23]">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#d9d0c3] bg-[#fffdf8] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Who This Is For" title="For people who cannot afford careless conclusions.">
            <p>
              WhyDive is for readers, educators, leaders, researchers, and communities who need
              better ways to examine claims before confidence becomes action.
            </p>
            <p className="mt-4">
              The writing here will not interest everyone. It is for people who sense that modern
              life is full of information, but still thin on judgment.
            </p>
          </SectionHeading>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {audienceCards.map((card) => (
              <QuietCard key={card.title} title={card.title} eyebrow="Audience">
                <p>{card.text}</p>
              </QuietCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101b23] px-5 py-16 text-[#f8f4ed] md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="The WhyDive Question"
            title="What conclusions are justified by the evidence available?"
            tone="dark"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {coreQuestions.map((question) => (
              <div key={question} className="border border-white/10 bg-white/[0.04] p-5">
                <p className="text-base leading-7 text-[#eee5d9]">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Reading Path" title="A first path through the work.">
          <p>
            Begin with the pages below if you want the clearest way into the work: what WhyDive is,
            the principle that governs it, and how the framework appears in real applications.
          </p>
        </SectionHeading>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {readingPath.map((item) => (
            <Link key={item.href} href={item.href} className="block">
              <QuietCard title={item.title} eyebrow="Begin Here">
                <p>{item.text}</p>
              </QuietCard>
            </Link>
          ))}
        </div>
      </section>

      {foundationalWhitepaper ? (
        <section className="border-y border-[#d9d0c3] bg-[#101b23] px-5 py-16 text-[#f8f4ed] md:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_0.9fr_1fr] lg:items-center">
            <div className="flex gap-4">
              {[foundationalWhitepaper, architectureWhitepaper].filter(Boolean).map((paper) =>
                paper?.coverImage ? (
                  <Link
                    key={paper.slug}
                    href={`/whitepapers/${paper.slug}`}
                    className="group block w-full max-w-[155px] sm:max-w-[190px] lg:max-w-[205px]"
                    aria-label={`Read ${paper.title}: ${paper.subtitle}`}
                  >
                    <div className="relative aspect-[17/22] overflow-hidden border border-white/14 bg-[#07141b] shadow-[0_28px_90px_rgba(0,0,0,0.28)] transition duration-300 group-hover:border-[#c8a45a]/65">
                      <Image
                        src={paper.coverImage}
                        alt={`Cover of ${paper.title}: ${paper.subtitle}.`}
                        fill
                        sizes="(min-width: 1024px) 205px, 45vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </Link>
                ) : null,
              )}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#c8a45a]">
                Foundational whitepapers / {foundationalWhitepaper.publicationDate}
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#fffdf8] md:text-5xl">
                WhyDive Framework: why it exists and how it works.
              </h2>
            </div>
            <div className="text-lg leading-9 text-[#d8d0c5]">
              <p>{foundationalWhitepaper.coreClaim}</p>
              <p className="mt-5">
                The first paper explains why WhyDive exists. The second explains how the framework
                works through reasoning events, authorization, boundaries, repair, and disciplined
                judgment.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/whitepapers/${foundationalWhitepaper.slug}`}
                  className="inline-flex justify-center rounded-full bg-[#f8f4ed] px-5 py-3 text-sm font-semibold text-[#101b23] transition hover:bg-white"
                >
                  Read Whitepaper 1
                </Link>
                {foundationalWhitepaper.pdfUrl ? (
                  <Link
                    href={foundationalWhitepaper.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-[#fffdf8] transition hover:border-[#c8a45a] hover:text-[#c8a45a]"
                  >
                    Open Whitepaper 1 PDF
                  </Link>
                ) : null}
                {architectureWhitepaper ? (
                  <Link
                    href={`/whitepapers/${architectureWhitepaper.slug}`}
                    className="inline-flex justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-[#fffdf8] transition hover:border-[#c8a45a] hover:text-[#c8a45a]"
                  >
                    Read Whitepaper 2
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-y border-[#d9d0c3] bg-[#fffdf8] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Spaces" title="See the framework inside real responsibilities.">
            <p>
              WhyDive becomes relatable when it enters the places where people already carry
              responsibility: classrooms, congregations, boardrooms, civic meetings, research
              reviews, and technology decisions.
            </p>
          </SectionHeading>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredSpaces.map((space) => (
              <Link key={space.slug} href={`/spaces/${space.slug}`} className="block">
                <QuietCard title={space.title} eyebrow={space.eyebrow}>
                  <p>{space.summary}</p>
                </QuietCard>
              </Link>
            ))}
          </div>

          <Link className="mt-8 inline-flex font-semibold text-[#6f551e] hover:text-[#101b23]" href="/spaces">
            Explore all spaces
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Current Applications" title="The framework is larger than any one domain.">
          <p>
            Education, data literacy, assessment, and classroom tools are expressions of WhyDive.
            They are not the whole of WhyDive.
          </p>
        </SectionHeading>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {currentApplications.slice(0, 6).map((item) => (
            <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="block">
              <QuietCard title={item.title} eyebrow={item.eyebrow}>
                <p>{item.description}</p>
              </QuietCard>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-[#d9d0c3] bg-[#fffdf8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7b633e]">
              Writing Home
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#101b23]">
              This site is built for the long work of thought.
            </h2>
          </div>
          <div className="text-lg leading-9 text-[#465767]">
            <p>
              Essays, whitepapers, research notes, and application overviews will develop the nature
              and purpose of WhyDive through both formal documents and relatable writing about
              everyday judgment.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className="font-semibold text-[#6f551e] hover:text-[#101b23]" href="/essays">
                Explore essays
              </Link>
              <Link className="font-semibold text-[#6f551e] hover:text-[#101b23]" href="/whitepapers">
                View whitepapers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <VisitorActionPanel
          eyebrow="What To Do Next"
          title="Use WhyDive as a shared question, not just a website to read."
          benefit="Choose a next move: study the framework, bring the central question into a learning community, or invite a serious conversation about applying it."
          actions={[readFoundationsAction, shareAction, discussionAction, traceApplicationsAction]}
        />
      </section>
    </main>
  );
}
