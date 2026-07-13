import type { Metadata } from 'next';
import Link from 'next/link';
import { advisorFaq } from '@/content/advisor';

export const metadata: Metadata = {
  title: 'Advisor FAQ',
  description: 'Frequently asked questions for WhyDive advisors.',
};

export default function AdvisorFaqPage() {
  return (
    <main className="min-h-screen bg-[#f7f3eb] px-5 py-12 text-[#172631] md:px-10 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Link href="/advisor" className="text-sm font-semibold text-[#6f551e] hover:text-[#101b23]">
          ← Advisor portal
        </Link>
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6d2f]">
          Advisor FAQ
        </p>
        <h1 className="wd-display mt-4 text-5xl leading-[1.04] text-[#101b23] md:text-7xl">
          Fast answers for serious conversations.
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-[#384a5a]">
          These questions are designed to reduce repetitive explanation and move the conversation
          toward judgment, sequence, and execution.
        </p>

        <div className="mt-12 divide-y divide-[#d8cab4] border-y border-[#d8cab4]">
          {advisorFaq.map((item) => (
            <details key={item.question} className="group bg-[#fffdf8] px-6 py-5">
              <summary className="cursor-pointer list-none text-xl font-semibold text-[#101b23]">
                <span className="inline-flex w-full items-center justify-between gap-5">
                  {item.question}
                  <span className="text-[#8a6d2f] transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#536271]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
