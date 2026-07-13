import type { Metadata } from 'next';
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
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { DiagramPreviewLink } from '@/components/site/DiagramPreviewLink';
import { assetUrl } from '@/lib/assets';
import { discussionAction, readFoundationsAction } from '@/lib/visitorActions';

export const metadata: Metadata = {
  title: 'Ecosystem',
  description: 'The relationship among WhyDive, WhyDive Education, DLS, Chart-Ed Institute, Chart-Ed, and Living Spiral Studio LLC.',
};

const entities = [
  ['WhyDive', 'Parent epistemic framework and architectural home at whydive.org.'],
  ['WhyDive Education', 'K-12 district-facing adaptive assessment application at whydive.education.'],
  ['WhyDive Reading', 'Textual reasoning application at whydive.education/reading.'],
  ['WhyDive Charts', 'Chart and quantitative reasoning application at whydive.education/charts.'],
  ['Data Literacy Standards', 'Global standards application of WhyDive at chart-ed.cc/en/standards/the-dls-standard.'],
  ['Chart-Ed Institute', 'Global steward of the DLS at chart-ed.cc.'],
  ['Chart-Ed', 'American K-12 teacher-facing implementation of the DLS at chart-ed.com.'],
  ['Living Spiral Studio LLC', 'Current legal parent and public contact identity for WhyDive.'],
];

function EcosystemFlowDiagram() {
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
    <figure className="mt-8 overflow-visible border border-[#d9d0c3] bg-[#f7f3eb] p-4 shadow-[0_24px_80px_rgba(23,38,49,0.12)] md:p-7">
      <div
        className="border border-[#d8cab4] bg-[#fffdf8] px-4 py-8 md:px-8"
        role="img"
        aria-label="WhyDive ecosystem map showing the parent framework, service domains, and the current education worked example."
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.26em] text-[#8a6d2f]">
            Parent framework
          </p>
          <a
            className="group mt-2 block border border-[#c8a45a] bg-[#101b23] px-6 py-6 shadow-sm transition hover:border-[#f0d68a]"
            href="/foundations/what-is-whydive"
          >
            <p className="wd-display text-5xl leading-none text-[#fffdf8] md:text-6xl">WhyDive</p>
          </a>
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
      <figcaption className="border-t border-[#d9d0c3] bg-[#fffdf8] px-5 py-4 text-sm leading-6 text-[#465767] md:px-7">
        The important distinction: WhyDive Education and the DLS pathway are parallel applications
        of the parent framework. Chart-Ed is a DLS-based implementation, not the same thing as
        WhyDive Education.
      </figcaption>
    </figure>
  );
}

export default function EcosystemPage() {
  return (
    <EditorialPage
      eyebrow="Ecosystem"
      title="One parent framework, several distinct expressions."
      intro="The ecosystem page exists to prevent confusion among WhyDive, WhyDive Education, the DLS, the Chart-Ed Institute, and Chart-Ed."
      image={{
        src: assetUrl('/images/whydive/ecosystem-constellation-banner.png'),
        alt: 'A dark constellation-like framework map with connected gold nodes and orbital lines.',
      }}
    >
      <SectionHeading title="Entity map">
        <p>
          WhyDive is the parent framework. WhyDive Education and the DLS pathway are parallel
          applications. Chart-Ed Institute stewards the DLS globally. Chart-Ed applies the DLS in
          American K-12 classrooms.
        </p>
      </SectionHeading>
      <EcosystemFlowDiagram />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {entities.map(([title, description]) => (
          <QuietCard key={title} title={title}>
            <p>{description}</p>
          </QuietCard>
        ))}
      </div>
      <div className="mt-12 border border-[#d9d0c3] bg-[#fffdf8] p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">
          Distinctions to preserve
        </p>
        <ul className="mt-4 grid gap-3 text-base leading-7 text-[#465767] md:grid-cols-2">
          <li>Chart-Ed is not WhyDive Education.</li>
          <li>The DLS is not K-12 only.</li>
          <li>The Chart-Ed Institute is not chart-ed.com.</li>
          <li>WhyDive Education is not subordinate to the DLS.</li>
          <li>WhyDive.org is not a product site.</li>
          <li>WhyDive is not yet a separate legal company.</li>
        </ul>
      </div>

      <VisitorActionPanel
        title="Use this map to route the next conversation."
        benefit="If you are trying to understand where to read, where to send someone, or which part of the ecosystem fits your need, start with this map."
        actions={[
          readFoundationsAction,
          {
            label: 'Explore current applications',
            href: '/applications',
            description: 'See the product, standards, and classroom expressions that grow from the framework.',
          },
          discussionAction,
        ]}
      />
    </EditorialPage>
  );
}
