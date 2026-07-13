import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Advisor Portal',
  description: 'Curated WhyDive advisor briefing material.',
};

const pathway = [
  {
    step: '01',
    label: 'Begin',
    title: 'Executive orientation',
    summary:
      'Start with the 15-minute brief. It establishes the mental model before any detailed advising begins.',
    href: '/advisor/orientation',
    action: 'Open orientation',
  },
  {
    step: '02',
    label: 'What we are',
    title: 'Understanding the framework',
    summary:
      'WhyDive is a framework-centered enterprise. This section explains the judgment problem and the parent idea.',
    href: '/advisor/deep-dive/framework',
    action: 'Study framework',
    links: [
      { label: 'Chart-Ed Institute', href: 'https://chart-ed.cc/en' },
      { label: 'DLS Standard', href: 'https://chart-ed.cc/en/standards/the-dls-standard' },
    ],
  },
  {
    step: '03',
    label: 'What exists',
    title: 'Products and infrastructure',
    summary:
      'Move from concept to reality: products, sites, payment systems, assessment architecture, and pilot readiness.',
    href: '/advisor/deep-dive/products',
    action: 'Review assets',
    links: [
      { label: 'Chart-Ed store', href: 'https://chart-ed.com/store' },
      { label: 'Chart generator', href: 'https://chart-ed.com/create' },
    ],
  },
  {
    step: '04',
    label: 'How it works',
    title: 'Business model',
    summary:
      'See how research, framework development, products, revenue, and reinvestment compound into capability.',
    href: '/advisor/deep-dive/business-model',
    action: 'Trace the model',
    links: [
      { label: 'Product lines', href: 'https://chart-ed.com/products' },
      { label: 'WhyDive Education', href: 'https://whydive.education/' },
    ],
  },
  {
    step: '05',
    label: 'Where we are going',
    title: 'Commercialization roadmap',
    summary:
      'Understand the staged path from foundation to recurring revenue, authority, and future service domains.',
    href: '/advisor/deep-dive/commercialization',
    action: 'Read roadmap',
    links: [
      { label: 'District diagnostics', href: 'https://whydive.education/' },
      { label: 'Trust center', href: 'https://whydive.education/trust-center' },
    ],
  },
  {
    step: '06',
    label: 'Where help is needed',
    title: 'Advisor guidance questions',
    summary:
      'Focus the conversation on commercialization, risk, pricing, capital allocation, hiring, scaling, and partnerships.',
    href: '/advisor/deep-dive/advisor-questions',
    action: 'Prepare guidance',
    links: [
      { label: 'Advisor FAQ', href: '/advisor/faq' },
      { label: 'Org chart', href: '/advisor/org-chart' },
    ],
  },
];

export default function AdvisorPortalPage() {
  return (
    <main className="min-h-screen bg-[#f7f3eb] text-[#172631]">
      <section className="px-5 py-12 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.36fr_1fr]">
          <aside className="border-b border-[#d8cab4] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
            <Link href="/advisor/orientation" className="text-sm font-semibold text-[#6f551e] hover:text-[#101b23]">
              WhyDive Executive Brief
            </Link>
            <div className="mt-14">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6d2f]">
                Advisor Portal
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-[#101b23]">
                A pathway through the enterprise.
              </h1>
              <p className="mt-5 text-base leading-7 text-[#536271]">
                Use this page after, or alongside, the orientation deck. It moves from understanding
                to assets, business logic, direction, and guidance.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-3 text-sm text-[#536271]">
              <span>01</span>
              <div className="h-px w-16 bg-[#c8a45a]" />
              <span>06</span>
            </div>
          </aside>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6d2f]">
              Guided Briefing Path
            </p>
            <h2 className="wd-display mt-4 max-w-5xl text-5xl leading-[1.04] text-[#101b23] md:text-7xl">
              From what WhyDive is to where advisor judgment is needed.
            </h2>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[#384a5a]">
              Establish the correct mental model first. Then use the supporting briefs to focus the
              conversation on commercialization, sequence, capital choices, and risk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="inline-flex border border-[#101b23] bg-[#101b23] px-5 py-3 text-sm font-semibold text-[#fffdf8] transition hover:bg-[#243447]"
                href="/advisor/orientation"
              >
                Open orientation
              </Link>
              <Link
                className="inline-flex border border-[#d8cab4] bg-[#fffdf8] px-5 py-3 text-sm font-semibold text-[#243447] transition hover:border-[#8a6d2f]"
                href="/advisor/faq"
              >
                Advisor FAQ
              </Link>
              <Link
                className="inline-flex border border-[#d8cab4] bg-[#fffdf8] px-5 py-3 text-sm font-semibold text-[#243447] transition hover:border-[#8a6d2f]"
                href="/advisor/org-chart"
              >
                Org chart
              </Link>
              <a
                className="inline-flex border border-[#d8cab4] bg-[#fffdf8] px-5 py-3 text-sm font-semibold text-[#243447] transition hover:border-[#8a6d2f]"
                href="/advisor/living-spiral-studio-sba-business-overview.pdf"
                download
              >
                Download business overview
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d8cab4] px-5 py-12 md:px-10 md:py-16 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.36fr_1fr]">
          <aside className="lg:border-r lg:border-[#d8cab4] lg:pr-10">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6d2f]">
              Meeting objective
            </p>
            <p className="mt-4 text-2xl font-semibold leading-tight text-[#101b23]">
              Guidance, not rescue.
            </p>
            <p className="mt-4 text-base leading-7 text-[#536271]">
              The architecture is coherent and the assets are real. The advisor role is to sharpen
              sequence, commercialization, capital choices, and risk.
            </p>
          </aside>

          <div>
            <div className="grid gap-0 border-y border-[#d8cab4]">
              {pathway.map((item, index) => (
                <div
                  key={item.href}
                  className="group grid gap-5 border-b border-[#d8cab4] py-6 transition last:border-b-0 hover:bg-[#fffdf8] md:grid-cols-[0.18fr_1fr_auto] md:items-center md:px-5"
                >
                  <div className="flex items-center gap-4">
                    <p className="text-3xl font-semibold text-[#101b23]">{item.step}</p>
                    {index < pathway.length - 1 ? (
                      <div className="h-px w-12 bg-[#c8a45a] md:hidden" />
                    ) : null}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6d2f]">
                      {item.label}
                    </p>
                    <Link href={item.href}>
                      <h3 className="mt-2 text-3xl font-semibold leading-tight text-[#101b23] transition hover:text-[#6f551e]">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="mt-3 max-w-3xl text-base leading-7 text-[#536271]">
                      {item.summary}
                    </p>
                  {'links' in item && item.links?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.links.map((link) => {
                        const isExternal = link.href.startsWith('http');
                        const chipClassName =
                          'inline-flex border border-[#d8cab4] px-3 py-1 text-xs font-semibold text-[#6f551e] transition hover:border-[#8a6d2f] hover:text-[#101b23]';

                        return isExternal ? (
                          <a
                            key={link.href}
                            className={chipClassName}
                            href={link.href}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link key={link.href} className={chipClassName} href={link.href}>
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
                  <Link className="text-sm font-semibold text-[#6f551e] hover:text-[#101b23]" href={item.href}>
                  {item.action} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
