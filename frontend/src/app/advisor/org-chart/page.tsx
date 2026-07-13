import type { Metadata } from 'next';
import Link from 'next/link';
import { organizationCurrent, organizationTarget } from '@/content/advisor';

export const metadata: Metadata = {
  title: 'Advisor Organizational Chart',
  description: 'Current and target organizational architecture for WhyDive advisors.',
};

export default function AdvisorOrgChartPage() {
  return (
    <main className="min-h-screen bg-[#f7f3eb] px-5 py-12 text-[#172631] md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Link href="/advisor" className="text-sm font-semibold text-[#6f551e] hover:text-[#101b23]">
          ← Advisor portal
        </Link>
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6d2f]">
          Organizational Architecture
        </p>
        <h1 className="wd-display mt-4 max-w-5xl text-5xl leading-[1.04] text-[#101b23] md:text-7xl">
          Founder-led now. Function-led over time.
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-[#384a5a]">
          The current organization is intentionally lean. The target architecture shows the
          functional capacity WhyDive must develop as revenue, evidence, and district adoption mature.
        </p>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="border border-[#d8cab4] bg-[#fffdf8] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6d2f]">
              Current operating reality
            </p>
            <div className="mt-8 grid gap-4">
              {organizationCurrent.map((item) => (
                <div key={item.role} className="border-l-2 border-[#c8a45a] pl-5">
                  <h2 className="text-2xl font-semibold text-[#101b23]">{item.role}</h2>
                  <p className="mt-1 text-sm font-semibold text-[#6f551e]">{item.owner}</p>
                  <p className="mt-2 text-sm leading-6 text-[#536271]">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[#d8cab4] bg-[#101b23] p-7 text-[#fffdf8]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c8a45a]">
              Target functional architecture
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {organizationTarget.map((item) => (
                <div key={item} className="border border-[#f8f4ed]/20 p-5">
                  <p className="text-lg font-semibold">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-6 text-[#d8d0c5]">
              Early hires should remove founder constraints before adding complexity. The priority
              is capacity that strengthens revenue, customer success, implementation, and evidence.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
