import type { Metadata } from 'next';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
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
  return (
    <figure className="mt-8 overflow-hidden border border-[#d9d0c3] bg-[#101b23] shadow-[0_24px_80px_rgba(23,38,49,0.12)]">
      <div className="space-y-4 p-5 md:hidden">
        <p className="text-center text-sm leading-6 text-[#d5c8b7]">
          Legal ownership, framework authority, and application paths
        </p>
        <div className="border border-[#d9d0c3]/35 bg-[#172631] p-4 text-center">
          <p className="font-sans text-base font-semibold text-[#fffdf8]">Living Spiral Studio LLC</p>
          <p className="mt-1 font-sans text-sm leading-6 text-[#d5c8b7]">Current legal parent and public contact identity</p>
        </div>
        <div className="text-center font-sans text-sm font-semibold text-[#c9a24d]">operates</div>
        <div className="border-2 border-[#c9a24d] bg-[#f8f4ed] p-4 text-center">
          <p className="font-sans text-lg font-semibold text-[#101b23]">WhyDive</p>
          <p className="mt-1 font-sans text-sm leading-6 text-[#465767]">
            Parent framework for evidence, reasoning, judgment, decision, and action
          </p>
        </div>
        <div className="grid gap-4">
          <div className="border border-[#d9d0c3]/35 bg-[#172631] p-4">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#c9a24d]">Application path</p>
            <p className="mt-3 font-sans text-base font-semibold text-[#fffdf8]">WhyDive Education</p>
            <p className="mt-1 font-sans text-sm leading-6 text-[#d5c8b7]">District-facing adaptive assessment</p>
            <div className="mt-4 grid gap-2 text-sm text-[#101b23]">
              <p className="bg-[#fffdf8] p-3 font-sans font-semibold">WhyDive Reading</p>
              <p className="bg-[#fffdf8] p-3 font-sans font-semibold">WhyDive Charts</p>
            </div>
          </div>
          <div className="border border-[#d9d0c3]/35 bg-[#172631] p-4">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#c9a24d]">Standards path</p>
            <p className="mt-3 font-sans text-base font-semibold text-[#fffdf8]">Data Literacy Standards</p>
            <p className="mt-1 font-sans text-sm leading-6 text-[#d5c8b7]">Global standards expression of WhyDive</p>
            <p className="mt-4 bg-[#fffdf8] p-3 font-sans text-sm font-semibold leading-6 text-[#101b23]">
              Chart-Ed Institute and Chart-Ed
            </p>
          </div>
        </div>
      </div>
      <svg
        className="hidden h-auto w-full md:block"
        viewBox="0 0 920 780"
        role="img"
        aria-labelledby="ecosystem-flow-title ecosystem-flow-desc"
      >
        <title id="ecosystem-flow-title">WhyDive ecosystem architecture</title>
        <desc id="ecosystem-flow-desc">
          A flow diagram showing Living Spiral Studio LLC as the current legal parent, WhyDive as
          the domain-neutral framework, and two parallel application pathways: WhyDive Education
          and the Data Literacy Standards pathway through Chart-Ed Institute and Chart-Ed.
        </desc>
        <defs>
          <marker
            id="ecosystem-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M2 1L8 5L2 9" fill="none" stroke="#c9a24d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
          <linearGradient id="ecosystem-gold" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ead08b" />
            <stop offset="100%" stopColor="#8a6d2f" />
          </linearGradient>
        </defs>

        <rect width="920" height="780" fill="#101b23" />
        <path d="M80 650C220 590 270 690 420 610C570 530 640 610 820 540" fill="none" stroke="#233949" strokeWidth="1" opacity="0.7" />
        <path d="M120 130C260 90 360 125 470 100C610 70 690 105 810 80" fill="none" stroke="#8a6d2f" strokeWidth="1" opacity="0.35" />

        <text x="460" y="54" textAnchor="middle" className="fill-[#d5c8b7] font-sans text-[15px]">
          Legal ownership, framework authority, and application paths
        </text>

        <g>
          <rect x="258" y="84" width="404" height="78" rx="8" fill="#172631" stroke="#d9d0c3" strokeOpacity="0.38" />
          <text x="460" y="116" textAnchor="middle" className="fill-[#fffdf8] font-sans text-[18px] font-semibold">
            Living Spiral Studio LLC
          </text>
          <text x="460" y="140" textAnchor="middle" className="fill-[#d5c8b7] font-sans text-[14px]">
            Current legal parent and public contact identity
          </text>
        </g>

        <line x1="460" y1="162" x2="460" y2="206" stroke="#c9a24d" strokeWidth="2" markerEnd="url(#ecosystem-arrow)" />
        <text x="484" y="189" className="fill-[#d5c8b7] font-sans text-[12px]">operates</text>

        <g>
          <rect x="182" y="212" width="556" height="92" rx="8" fill="#f8f4ed" stroke="url(#ecosystem-gold)" strokeWidth="2" />
          <text x="460" y="246" textAnchor="middle" className="fill-[#101b23] font-sans text-[22px] font-semibold">
            WhyDive
          </text>
          <text x="460" y="272" textAnchor="middle" className="fill-[#465767] font-sans text-[15px]">
            Parent epistemic framework for evidence, reasoning, judgment, decision, and action
          </text>
        </g>

        <path d="M394 304C300 352 232 378 180 420" fill="none" stroke="#c9a24d" strokeWidth="2" markerEnd="url(#ecosystem-arrow)" />
        <path d="M526 304C620 352 688 378 740 420" fill="none" stroke="#c9a24d" strokeWidth="2" markerEnd="url(#ecosystem-arrow)" />
        <text x="250" y="354" textAnchor="middle" className="fill-[#d5c8b7] font-sans text-[13px]">application path</text>
        <text x="668" y="354" textAnchor="middle" className="fill-[#d5c8b7] font-sans text-[13px]">standards path</text>

        <g>
          <rect x="72" y="424" width="300" height="118" rx="8" fill="#172631" stroke="#d9d0c3" strokeOpacity="0.45" />
          <text x="222" y="458" textAnchor="middle" className="fill-[#fffdf8] font-sans text-[18px] font-semibold">
            WhyDive Education
          </text>
          <text x="222" y="484" textAnchor="middle" className="fill-[#d5c8b7] font-sans text-[14px]">
            District-facing adaptive assessment
          </text>
          <text x="222" y="508" textAnchor="middle" className="fill-[#d5c8b7] font-sans text-[14px]">
            whydive.education
          </text>
        </g>

        <g>
          <rect x="548" y="424" width="300" height="118" rx="8" fill="#172631" stroke="#d9d0c3" strokeOpacity="0.45" />
          <text x="698" y="458" textAnchor="middle" className="fill-[#fffdf8] font-sans text-[18px] font-semibold">
            Data Literacy Standards
          </text>
          <text x="698" y="484" textAnchor="middle" className="fill-[#d5c8b7] font-sans text-[14px]">
            Global standards expression of WhyDive
          </text>
          <text x="698" y="508" textAnchor="middle" className="fill-[#d5c8b7] font-sans text-[14px]">
            chart-ed.cc/en/standards/the-dls-standard
          </text>
        </g>

        <path d="M222 542L150 602" fill="none" stroke="#c9a24d" strokeWidth="1.75" markerEnd="url(#ecosystem-arrow)" />
        <path d="M222 542L294 602" fill="none" stroke="#c9a24d" strokeWidth="1.75" markerEnd="url(#ecosystem-arrow)" />
        <path d="M698 542L698 600" fill="none" stroke="#c9a24d" strokeWidth="1.75" markerEnd="url(#ecosystem-arrow)" />

        <g>
          <rect x="48" y="606" width="204" height="84" rx="8" fill="#fffdf8" stroke="#d9d0c3" />
          <text x="150" y="638" textAnchor="middle" className="fill-[#101b23] font-sans text-[16px] font-semibold">
            WhyDive Reading
          </text>
          <text x="150" y="662" textAnchor="middle" className="fill-[#536271] font-sans text-[13px]">
            Textual reasoning
          </text>
        </g>

        <g>
          <rect x="270" y="606" width="204" height="84" rx="8" fill="#fffdf8" stroke="#d9d0c3" />
          <text x="372" y="638" textAnchor="middle" className="fill-[#101b23] font-sans text-[16px] font-semibold">
            WhyDive Charts
          </text>
          <text x="372" y="662" textAnchor="middle" className="fill-[#536271] font-sans text-[13px]">
            Chart reasoning
          </text>
        </g>

        <g>
          <rect x="548" y="606" width="300" height="84" rx="8" fill="#fffdf8" stroke="#d9d0c3" />
          <text x="698" y="638" textAnchor="middle" className="fill-[#101b23] font-sans text-[16px] font-semibold">
            Chart-Ed Institute and Chart-Ed
          </text>
          <text x="698" y="662" textAnchor="middle" className="fill-[#536271] font-sans text-[13px]">
            Stewardship and American K-12 teacher tools
          </text>
        </g>

        <g>
          <line x1="100" y1="732" x2="820" y2="732" stroke="#d9d0c3" strokeOpacity="0.2" />
          <text x="460" y="754" textAnchor="middle" className="fill-[#d5c8b7] font-sans text-[13px]">
            WhyDive.org explains the framework. Product, standards, and classroom tools live on their own domains.
          </text>
        </g>
      </svg>
      <figcaption className="border-t border-[#d9d0c3]/20 px-5 py-4 text-sm leading-6 text-[#d5c8b7] md:px-7">
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
