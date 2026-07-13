import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  AcademicCapIcon,
  BookOpenIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  CpuChipIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { DiagramPreviewLink } from '@/components/site/DiagramPreviewLink';
import { advisorDeepDives } from '@/content/advisor';
import { assetUrl } from '@/lib/assets';

type PageProps = {
  params: Promise<{ slug: string }>;
};

const advisorEmphasisPhrases = [
  'framework for improving human judgment',
  'movement from evidence to action',
  'visible, bounded, and proportional',
  'not the same thing as Chart-Ed, WhyDive Education, the Data Literacy Standards, or any one product line',
  'parent framework',
  'service layer',
  'domain-specific forms',
  'Operational systems',
  'Concrete offerings',
  'current worked example',
  'not the boundary of WhyDive',
  'intellectual capital',
  'flagship application, not the whole mission',
];

function renderAdvisorEmphasis(text: string): ReactNode {
  const matches = advisorEmphasisPhrases
    .map((phrase) => ({ phrase, index: text.indexOf(phrase) }))
    .filter((match) => match.index >= 0)
    .sort((a, b) => a.index - b.index);

  if (!matches.length) {
    return text;
  }

  const nodes: ReactNode[] = [];
  let cursor = 0;

  matches.forEach(({ phrase, index }) => {
    if (index < cursor) {
      return;
    }

    if (index > cursor) {
      nodes.push(text.slice(cursor, index));
    }

    nodes.push(
      <strong key={`${phrase}-${index}`} className="font-semibold text-[#101b23]">
        {phrase}
      </strong>,
    );
    cursor = index + phrase.length;
  });

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes;
}

function SequenceGraphic({ points }: { points: string[] }) {
  return (
    <div className="mt-8">
      <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
        {points.map((point, index) => (
          <div key={point} className="contents">
            <div className="relative min-h-28 border border-[#d8cab4] bg-[#f7f3eb] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6d2f]">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="mt-4 text-2xl font-semibold leading-tight text-[#101b23]">{point}</p>
            </div>
            {index < points.length - 1 ? (
              <div className="flex items-center justify-center text-2xl text-[#8a6d2f]" aria-hidden="true">
                <span className="hidden lg:block">→</span>
                <span className="lg:hidden">↓</span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-5 border-l-2 border-[#c8a45a] pl-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#6f551e]">
        Movement from what is available to what is responsibly decided.
      </div>
    </div>
  );
}

function PointGrid({ points }: { points: string[] }) {
  return (
    <div className="mt-7 grid gap-3 sm:grid-cols-2">
      {points.map((point) => (
        <div key={point} className="border-t border-[#c8a45a] pt-3">
          <p className="font-semibold text-[#101b23]">{point}</p>
        </div>
      ))}
    </div>
  );
}

function CycleGraphic({ points }: { points: string[] }) {
  const positions = [
    { x: 500, y: 78 },
    { x: 760, y: 142 },
    { x: 838, y: 292 },
    { x: 682, y: 424 },
    { x: 390, y: 424 },
    { x: 174, y: 292 },
    { x: 236, y: 142 },
  ];

  return (
    <div className="mt-8">
      <div className="relative border border-[#d8cab4] bg-[#f7f3eb] p-5 md:p-7">
        <svg
          className="h-auto w-full"
          role="img"
          viewBox="0 0 1000 540"
          aria-labelledby="value-cycle-title value-cycle-desc"
        >
          <title id="value-cycle-title">WhyDive value creation cycle</title>
          <desc id="value-cycle-desc">
            Research develops the framework, which becomes services, applications, products,
            revenue, and reinvestment that strengthens research and framework capacity.
          </desc>
          <defs>
            <marker id="cycle-arrow" markerHeight="10" markerWidth="10" orient="auto" refX="8" refY="5">
              <path d="M0,0 L10,5 L0,10 Z" fill="#8a6d2f" />
            </marker>
          </defs>
          <rect x="18" y="18" width="964" height="504" fill="#fffdf8" stroke="#d8cab4" />
          <path
            d="M500 108 C760 108 892 206 852 326 C812 446 610 486 390 456 C190 428 102 286 188 168 C260 70 410 62 500 108"
            fill="none"
            markerEnd="url(#cycle-arrow)"
            stroke="#8a6d2f"
            strokeDasharray="7 9"
            strokeWidth="3"
          />
          <circle cx="500" cy="280" fill="#101b23" r="92" />
          <text fill="#c8a45a" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" letterSpacing="4" textAnchor="middle" x="500" y="260">
            COMPOUNDS
          </text>
          <text fill="#fffdf8" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" textAnchor="middle" x="500" y="298">
            capability
          </text>
          {points.map((point, index) => {
            const position = positions[index];
            return (
              <g key={point}>
                <rect
                  fill="#f7f3eb"
                  height="76"
                  stroke="#d8cab4"
                  width="168"
                  x={position.x - 84}
                  y={position.y - 38}
                />
                <text
                  fill="#8a6d2f"
                  fontFamily="Arial, sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  letterSpacing="3"
                  textAnchor="middle"
                  x={position.x}
                  y={position.y - 8}
                >
                  {String(index + 1).padStart(2, '0')}
                </text>
                <text
                  fill="#101b23"
                  fontFamily="Arial, sans-serif"
                  fontSize="21"
                  fontWeight="700"
                  textAnchor="middle"
                  x={position.x}
                  y={position.y + 20}
                >
                  {point}
                </text>
              </g>
            );
          })}
          <path d="M234 102 C318 46 411 44 500 78" fill="none" markerEnd="url(#cycle-arrow)" stroke="#c8a45a" strokeWidth="3" />
          <text fill="#6f551e" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" textAnchor="middle" x="342" y="54">
            reinvestment strengthens the framework
          </text>
        </svg>

        <div className="mt-6 grid gap-4 border-t border-[#c8a45a] pt-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6f551e]">
            Reinvestment strengthens the framework
          </div>
          <div className="hidden text-2xl text-[#8a6d2f] md:block" aria-hidden="true">
            ↺
          </div>
          <div className="text-base leading-7 text-[#536271]">
            Each pass through the cycle should increase capability, evidence, authority, and future
            commercial options.
          </div>
        </div>
      </div>
    </div>
  );
}

function LayersGraphic({ points }: { points: string[] }) {
  const descriptions = [
    'Universal principles for evidence, reasoning, judgment, decision, and action.',
    'Domain-specific forms such as Education, Business, Healthcare, Policy, and AI.',
    'Operational systems such as diagnostics, standards, professional learning, and certification.',
    'Concrete offerings such as classroom resources, reports, publications, tools, and services.',
  ];

  return (
    <div className="mt-8 border border-[#d8cab4] bg-[#f7f3eb] p-5 md:p-7">
      <div
        className="border border-[#d8cab4] bg-[#fffdf8] px-4 py-7 md:px-10"
        role="img"
        aria-label="WhyDive architecture layers: framework flows into services, applications, and products."
      >
        <div className="text-center text-xs font-bold uppercase tracking-[0.28em] text-[#6f551e]">
          From principles to practical use
        </div>

        <div className="mx-auto mt-7 max-w-3xl">
          {points.map((point, index) => {
            const isFramework = index === 0;

            return (
              <div key={point}>
                <div
                  className={[
                    'grid min-h-[92px] gap-4 border px-5 py-5 md:grid-cols-[190px_1fr] md:items-center md:px-7',
                    isFramework
                      ? 'border-[#c8a45a] bg-[#101b23] text-[#fffdf8]'
                      : 'border-[#d8cab4] bg-[#f7f3eb] text-[#101b23]',
                  ].join(' ')}
                >
                  <div>
                    <div
                      className={[
                        'text-xs font-bold uppercase tracking-[0.24em]',
                        isFramework ? 'text-[#c8a45a]' : 'text-[#8a6d2f]',
                      ].join(' ')}
                    >
                      Layer {index + 1}
                    </div>
                    <div className="mt-1 font-serif text-3xl font-bold leading-none">{point}</div>
                  </div>
                  <p
                    className={[
                      'max-w-[52ch] text-sm leading-6 md:text-base',
                      isFramework ? 'text-[#d8d0c5]' : 'text-[#536271]',
                    ].join(' ')}
                  >
                    {descriptions[index]}
                  </p>
                </div>

                {index < points.length - 1 ? (
                  <div className="flex h-8 items-center justify-center" aria-hidden="true">
                    <div className="h-full w-px bg-[#8a6d2f]" />
                    <div className="-ml-[7px] mt-6 h-0 w-0 border-x-[7px] border-t-[12px] border-x-transparent border-t-[#8a6d2f]" />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-7 max-w-3xl border-t border-[#d8cab4] pt-4 text-center text-sm font-bold leading-6 text-[#6f551e]">
          Products should remain traceable to applications, services, and the parent framework.
        </div>
      </div>
    </div>
  );
}

function EcosystemGraphic() {
  const serviceDomains = [
    { name: 'Business', sublabel: 'organizational judgment', href: '/applications', icon: BriefcaseIcon },
    { name: 'Healthcare', sublabel: 'clinical judgment', href: '/applications', icon: HeartIcon },
    {
      name: 'Education',
      sublabel: 'learning judgment',
      href: 'https://whydive.education',
      previewSrc: assetUrl('/images/site-previews/whydive-education.png'),
      icon: AcademicCapIcon,
    },
    { name: 'Policy', sublabel: 'public judgment', href: '/applications', icon: BuildingLibraryIcon },
    { name: 'AI', sublabel: 'synthetic claims', href: '/applications', icon: CpuChipIcon },
    { name: 'Research', sublabel: 'evidence methods', href: '/research', icon: MagnifyingGlassIcon },
  ];

  const educationBranches = [
    {
      name: 'WhyDive Education',
      sublabel: 'district-facing diagnostics',
      href: 'https://whydive.education',
      logoSrc: assetUrl('/images/whydive/logo-light.svg'),
      logoAlt: 'WhyDive',
      previewSrc: assetUrl('/images/site-previews/whydive-education.png'),
      icon: BuildingOffice2Icon,
      children: [
        {
          name: 'Reading',
          sublabel: 'textual reasoning',
          href: 'https://whydive.education/reading',
          previewSrc: assetUrl('/images/site-previews/whydive-reading.png'),
          logoSrc: undefined,
          logoAlt: undefined,
          icon: BookOpenIcon,
        },
        {
          name: 'Charts',
          sublabel: 'data reasoning',
          href: 'https://whydive.education/charts',
          previewSrc: assetUrl('/images/site-previews/whydive-charts.png'),
          logoSrc: undefined,
          logoAlt: undefined,
          icon: ChartBarIcon,
        },
      ],
    },
    {
      name: 'Data Literacy Standards',
      sublabel: 'chart and data reasoning standards',
      href: 'https://chart-ed.cc/en/standards/the-dls-standard',
      logoSrc: 'https://chart-ed.cc/dls-logo.svg',
      logoAlt: 'Data Literacy Standards',
      previewSrc: assetUrl('/images/site-previews/chart-ed-institute.png'),
      icon: BookOpenIcon,
      children: [
        {
          name: 'Chart-Ed Institute',
          sublabel: 'stewardship and authority',
          href: 'https://chart-ed.cc/en',
          previewSrc: assetUrl('/images/site-previews/chart-ed-institute.png'),
          logoSrc: 'https://chart-ed.cc/dls-logo.svg',
          logoAlt: 'Chart-Ed Institute',
          icon: ShieldCheckIcon,
        },
        {
          name: 'Chart-Ed',
          sublabel: 'products',
          href: 'https://chart-ed.com',
          previewSrc: assetUrl('/images/site-previews/chart-ed.png'),
          logoSrc: assetUrl('/images/brands/chart-ed-logo.svg'),
          logoAlt: 'Chart-Ed',
          icon: ShoppingCartIcon,
        },
      ],
    },
  ];

  return (
    <div className="mt-8 border border-[#d8cab4] bg-[#f7f3eb] p-4 md:p-7">
      <div
        className="border border-[#d8cab4] bg-[#fffdf8] px-4 py-8 md:px-8"
        role="img"
        aria-label="WhyDive ecosystem map showing the parent framework, service domains, and the current education worked example."
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.26em] text-[#8a6d2f]">
            Parent framework
          </p>
          <Link
            className="group mt-2 block border border-[#c8a45a] bg-[#101b23] px-6 py-6 shadow-sm transition hover:border-[#f0d68a]"
            href="/ecosystem"
          >
            <p className="wd-display text-5xl leading-none text-[#fffdf8] md:text-6xl">WhyDive</p>
          </Link>
        </div>

        <div className="flex h-9 items-end justify-center" aria-hidden="true">
          <div className="h-full w-px bg-[#8a6d2f]" />
          <div className="-ml-[8px] h-0 w-0 border-x-8 border-t-[14px] border-x-transparent border-t-[#8a6d2f]" />
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="h-px bg-[#c8a45a]" />
          <p className="text-center text-sm font-bold uppercase tracking-[0.24em] text-[#101b23]">
            Service layer: domain examples
          </p>
          <div className="h-px bg-[#c8a45a]" />
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {serviceDomains.map(({ name, sublabel, href, previewSrc, icon: Icon }) => (
            <DiagramPreviewLink
              key={name}
              className="group border border-[#d8cab4] bg-[#fffdf8] p-4 text-center shadow-sm transition hover:border-[#8a6d2f] hover:bg-[#fffaf0]"
              href={href}
              previewAlt={`${name} site preview`}
              previewSrc={previewSrc}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              target={href.startsWith('http') ? '_blank' : undefined}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f0eee9] text-[#0b2442]">
                <Icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <p className="mt-4 text-lg font-bold leading-tight text-[#101b23]">{name}</p>
              <p className="mt-2 text-sm leading-6 text-[#25364a]">{sublabel}</p>
            </DiagramPreviewLink>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="h-px bg-[#c8a45a]" />
          <p className="text-center text-sm font-bold uppercase tracking-[0.24em] text-[#101b23]">
            Current worked example: education
          </p>
          <div className="h-px bg-[#c8a45a]" />
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          {educationBranches.map(({ name, sublabel, href, logoSrc, logoAlt, previewSrc, icon: Icon, children }) => (
            <div key={name} className="relative">
              <DiagramPreviewLink
                className="group flex h-[216px] flex-col items-center justify-center border border-[#c8a45a] bg-[#101b23] p-6 text-center text-[#fffdf8] shadow-sm transition hover:border-[#f0d68a]"
                href={href}
                previewAlt={`${name} site preview`}
                previewSrc={previewSrc}
                rel="noreferrer"
                target="_blank"
              >
                {logoSrc ? (
                  <div className="mx-auto flex h-16 w-full max-w-[250px] items-center justify-center">
                    <img
                      alt={logoAlt}
                      className={[
                        'max-h-14 w-full object-contain',
                        logoSrc.includes('dls-logo') ? 'brightness-0 invert' : '',
                      ].join(' ')}
                      src={logoSrc}
                    />
                  </div>
                ) : (
                  <Icon className="h-12 w-12 flex-none text-[#fffdf8]" aria-hidden="true" />
                )}
                <div className="mt-4">
                  <p className="font-serif text-2xl font-semibold leading-tight text-balance">{name}</p>
                  <p className="mx-auto mt-2 max-w-[24ch] text-base leading-6 text-[#d8d0c5]">{sublabel}</p>
                </div>
              </DiagramPreviewLink>

              <div className="mx-auto h-8 w-px bg-[#8a6d2f]" aria-hidden="true" />
              <div className="grid gap-4 sm:grid-cols-2">
                {children.map(
                  ({
                    name: childName,
                    sublabel: childSublabel,
                    href: childHref,
                    previewSrc: childPreviewSrc,
                    logoSrc: childLogoSrc,
                    logoAlt: childLogoAlt,
                    icon: ChildIcon,
                  }) => (
                  <DiagramPreviewLink
                    key={childName}
                    className={[
                      'flex min-h-[126px] flex-col justify-center border border-[#b7c8dc] bg-[#f7fbff] p-4 text-[#0b2442] shadow-sm transition hover:border-[#4e7fb2] hover:bg-[#eff7ff]',
                      childLogoSrc ? 'items-center text-center' : 'md:grid md:grid-cols-[44px_1fr] md:items-center md:gap-4',
                    ].join(' ')}
                    href={childHref}
                    previewAlt={`${childName} site preview`}
                    previewSrc={childPreviewSrc}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {childLogoSrc ? (
                      <div className="mx-auto flex h-12 w-full max-w-[150px] items-center justify-center">
                        <img alt={childLogoAlt} className="max-h-10 w-full object-contain" src={childLogoSrc} />
                      </div>
                    ) : (
                      <ChildIcon className="h-10 w-10 flex-none" aria-hidden="true" />
                    )}
                    <div className={childLogoSrc ? 'mt-3' : 'mt-3 md:mt-0'}>
                      <p className="text-lg font-bold leading-tight text-balance">{childName}</p>
                      <p className="mx-auto mt-1 max-w-[18ch] text-sm leading-6 text-[#25364a]">{childSublabel}</p>
                    </div>
                  </DiagramPreviewLink>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-4xl border-l-4 border-[#8a6d2f] bg-[#f7f3eb] px-5 py-4 text-center text-sm font-semibold leading-6 text-[#25364a] md:text-base">
          The education branch shows the pattern in use. It is not the boundary of WhyDive.
        </div>
      </div>
    </div>
  );
}

function OperatingSystemPositioningPanel() {
  const layers = [
    {
      label: 'Operating system',
      title: 'WhyDive',
      body: 'The parent framework for Evidence-Based Judgment Development.',
    },
    {
      label: 'First service layer address',
      title: 'Education',
      body: 'The first service layer address and currently the most mature application path.',
    },
    {
      label: 'Commercial application',
      title: 'Chart-Ed',
      body: 'One market-facing expression of the framework, not the whole enterprise.',
    },
  ];

  return (
    <section className="mt-12 border border-[#d8cab4] bg-[#101b23] p-7 text-[#fffdf8]">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c8a45a]">
        Advisor framing
      </p>
      <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[#fffdf8]">
        WhyDive is not another education company.
      </h2>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[#e8dfd2]">
        Think of <strong className="text-[#fffdf8]">WhyDive as an operating system</strong>. The
        operating system is not one app. It enables applications. The domain of{' '}
        <strong className="text-[#fffdf8]">Education is the first service layer address</strong>.
        As such, it is currently the <strong className="text-[#fffdf8]">mature application</strong>,
        and <strong className="text-[#fffdf8]">Chart-Ed is one commercial implementation</strong>{' '}
        inside that application path.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {layers.map((layer, index) => (
          <div key={layer.title} className="border border-[#d8cab4]/30 bg-[#172631] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8a45a]">
              {String(index + 1).padStart(2, '0')} / {layer.label}
            </p>
            <p className="mt-4 font-serif text-3xl font-semibold leading-tight">{layer.title}</p>
            <p className="mt-3 text-sm leading-6 text-[#d8d0c5]">{layer.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-7 border-l-4 border-[#c8a45a] bg-[#0d171f] px-5 py-4 text-base font-semibold leading-7 text-[#fffdf8]">
        We are <strong>not building multiple unrelated businesses</strong>. We are building{' '}
        <strong>one framework</strong> with <strong>multiple reinforcing applications</strong>.
      </div>
    </section>
  );
}

function ProductsInfrastructurePanel() {
  const channels = [
    {
      label: 'Product families',
      title: '4 Chart-Ed product lines',
      body: 'The current product families give advisors a concrete packaging and pricing system to inspect.',
      href: 'https://chart-ed.com/products',
      previewSrc: assetUrl('/images/site-previews/chart-ed-products.png'),
    },
    {
      label: 'Direct store',
      title: '122 Chart-Ed products',
      body: 'The searchable store shows the current inventory, product filters, pricing, and marketable classroom assets.',
      href: 'https://chart-ed.com/store',
      previewSrc: assetUrl('/images/site-previews/chart-ed-store.png'),
    },
    {
      label: 'Marketplace',
      title: 'Teachers Pay Teachers',
      body: 'The TPT store creates access to an existing educator marketplace and discovery channel.',
      href: 'https://www.teacherspayteachers.com/store/chart-ed',
      previewSrc: assetUrl('/images/site-previews/tpt-store.png'),
    },
    {
      label: 'Marketplace',
      title: 'Classful',
      body: 'The Classful store extends product presence into another teacher-facing marketplace.',
      href: 'https://classful.com/elvis-agard/',
      previewSrc: assetUrl('/images/site-previews/classful-store.png'),
    },
    {
      label: 'Catalog channel',
      title: 'Pinterest catalog',
      body: 'Pinterest supports discovery, visual merchandising, and product-catalog traffic.',
      href: 'https://www.pinterest.com/chart_ed/',
      previewSrc: assetUrl('/images/site-previews/pinterest-catalog.png'),
    },
  ];

  return (
    <section className="mt-12 border border-[#d8cab4] bg-[#fffdf8] p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6d2f]">
        Distribution footprint
      </p>
      <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[#101b23]">
        The product system already has multiple routes to market.
      </h2>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[#536271]">
        This section should help an advisor assess commercialization from real channels: product
        families, direct store inventory, teacher marketplaces, and visual catalog discovery.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {channels.map((channel) => (
          <DiagramPreviewLink
            key={channel.href}
            className="border border-[#d8cab4] bg-[#f7f3eb] p-5 transition hover:border-[#8a6d2f] hover:bg-[#fffaf0]"
            href={channel.href}
            previewAlt={`${channel.title} preview`}
            previewSrc={channel.previewSrc}
            rel="noreferrer"
            target="_blank"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6d2f]">
              {channel.label}
            </p>
            <p className="mt-3 text-2xl font-semibold leading-tight text-[#101b23]">
              {channel.title}
            </p>
            <p className="mt-3 text-sm leading-6 text-[#536271]">{channel.body}</p>
            <p className="mt-5 text-sm font-semibold text-[#6f551e]">Open channel →</p>
          </DiagramPreviewLink>
        ))}
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return advisorDeepDives.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = advisorDeepDives.find((entry) => entry.slug === slug);

  if (!item) {
    return {};
  }

  return {
    title: item.title,
    description: item.summary,
  };
}

export default async function AdvisorDeepDivePage({ params }: PageProps) {
  const { slug } = await params;
  const item = advisorDeepDives.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f3eb] px-5 py-12 text-[#172631] md:px-10 md:py-16">
      <article className="mx-auto max-w-5xl">
        <Link href="/advisor" className="text-sm font-semibold text-[#6f551e] hover:text-[#101b23]">
          ← Advisor portal
        </Link>
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6d2f]">
          {item.eyebrow}
        </p>
        <h1 className="wd-display mt-4 text-5xl leading-[1.04] text-[#101b23] md:text-7xl">
          {item.title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-[#384a5a]">{item.summary}</p>

        <div className="mt-12 grid gap-8">
          {item.sections.map((section) => (
            <section key={section.heading} className="border border-[#d8cab4] bg-[#fffdf8] p-7">
              <h2 className="text-3xl font-semibold leading-tight text-[#101b23]">{section.heading}</h2>
              <div className="mt-5 grid gap-4 text-base leading-7 text-[#536271]">
                {section.body.map((paragraph, paragraphIndex) => {
                  const isDefinitionLead =
                    item.slug === 'framework' &&
                    section.heading === 'One-sentence definition' &&
                    paragraphIndex === 0;
                  const workedExampleLead =
                    'Education is the current worked example because it is the most mature service area today. ';
                  const startsWithWorkedExample =
                    item.slug === 'framework' &&
                    section.heading === 'Ecosystem relationships' &&
                    paragraph.startsWith(workedExampleLead);

                  return startsWithWorkedExample ? (
                    <p key={paragraph}>
                      <strong className="block border-l-4 border-[#c8a45a] bg-[#f7f3eb] px-4 py-3 text-lg leading-7 text-[#101b23]">
                        {workedExampleLead.trim()}
                      </strong>
                      <span className="mt-4 block">
                        {renderAdvisorEmphasis(paragraph.slice(workedExampleLead.length))}
                      </span>
                    </p>
                  ) : (
                    <p
                      key={paragraph}
                      className={
                        isDefinitionLead
                          ? 'max-w-4xl text-2xl font-bold leading-9 text-[#101b23] md:text-3xl md:leading-10'
                          : undefined
                      }
                    >
                      {isDefinitionLead ? paragraph : renderAdvisorEmphasis(paragraph)}
                    </p>
                  );
                })}
              </div>
              {section.points?.length ? (
                section.visual === 'sequence' ? (
                  <SequenceGraphic points={section.points} />
                ) : section.visual === 'cycle' ? (
                  <CycleGraphic points={section.points} />
                ) : section.visual === 'layers' ? (
                  <LayersGraphic points={section.points} />
                ) : section.visual === 'ecosystem' ? (
                  <EcosystemGraphic />
                ) : (
                  <PointGrid points={section.points} />
                )
              ) : null}
            </section>
          ))}
        </div>

        {item.slug === 'framework' ? <OperatingSystemPositioningPanel /> : null}
        {item.slug === 'products' ? <ProductsInfrastructurePanel /> : null}
      </article>
    </main>
  );
}
