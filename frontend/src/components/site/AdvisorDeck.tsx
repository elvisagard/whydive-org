'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import type { AdvisorSlide } from '@/content/advisor';

type AdvisorDeckProps = {
  slides: AdvisorSlide[];
};

function ArrowGlyph() {
  return <span aria-hidden="true" className="text-[#8a6d2f]">→</span>;
}

function DeepLinks({ links }: { links?: AdvisorSlide['links'] }) {
  if (!links?.length) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {links.map((link) => (
        <Link
          key={link.href}
          className="inline-flex items-center gap-2 border border-[#d8cab4] bg-[#fffdf8] px-4 py-2 text-sm font-semibold text-[#243447] transition hover:border-[#8a6d2f] hover:text-[#6f551e]"
          href={link.href}
        >
          {link.label}
          <ArrowGlyph />
        </Link>
      ))}
    </div>
  );
}

function FlowDiagram({ items }: { items: string[] }) {
  return (
    <div className="mt-12 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
      {items.map((item, index) => (
        <div key={item} className="contents">
          <div className="border border-[#d8cab4] bg-[#fffdf8] px-6 py-5 text-center text-xl font-semibold text-[#101b23]">
            {item}
          </div>
          {index < items.length - 1 ? (
            <div className="hidden text-2xl text-[#8a6d2f] md:block">→</div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="mt-7 grid gap-3">
      <div className="mx-auto w-full max-w-xl border border-[#c8a45a] bg-[#101b23] px-7 py-4 text-center text-[#fffdf8]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c8a45a]">Parent</p>
        <p className="mt-1 wd-display text-3xl">WhyDive Framework</p>
      </div>
      <div className="mx-auto h-7 w-px bg-[#c8a45a]" />
      <div className="grid gap-4 md:grid-cols-3">
        {['Research', 'Commercial', 'Authority'].map((item) => (
          <div key={item} className="border border-[#d8cab4] bg-[#fffdf8] p-4 text-center">
            <p className="text-xl font-semibold text-[#101b23]">{item}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto h-7 w-px bg-[#c8a45a]" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border border-[#d8cab4] p-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">Near-term</p>
          <p className="mt-1 text-xl font-semibold text-[#101b23]">Sustainable Growth</p>
        </div>
        <div className="border border-[#d8cab4] p-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">Long-term</p>
          <p className="mt-1 text-xl font-semibold text-[#101b23]">Future Service Domains</p>
        </div>
      </div>
    </div>
  );
}

function EnginesDiagram({ items }: { items: string[] }) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <div key={item} className="min-h-36 border border-[#d8cab4] bg-[#fffdf8] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6d2f]">
            Engine {index + 1}
          </p>
          <p className="mt-4 text-2xl font-semibold text-[#101b23]">{item}</p>
        </div>
      ))}
    </div>
  );
}

function Timeline({ items }: { items: string[] }) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {items.map((item) => {
        const [label, rest] = item.split(': ');
        return (
          <div key={item} className="border-t-2 border-[#8a6d2f] pt-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a6d2f]">{label}</p>
            <p className="mt-4 text-2xl font-semibold leading-tight text-[#101b23]">{rest}</p>
          </div>
        );
      })}
    </div>
  );
}

function PointGrid({ points, numbered = false }: { points: string[]; numbered?: boolean }) {
  return (
    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {points.map((point, index) => (
        <div key={point} className="border border-[#d8cab4] bg-[#fffdf8] p-5">
          {numbered ? (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6d2f]">
              {String(index + 1).padStart(2, '0')}
            </p>
          ) : null}
          <p className="mt-2 text-xl font-semibold leading-tight text-[#101b23]">{point}</p>
        </div>
      ))}
    </div>
  );
}

function ComparisonDiagram({ comparison }: { comparison: NonNullable<AdvisorSlide['comparison']> }) {
  return (
    <div className="mt-9">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="border border-[#d8cab4] bg-[#fffdf8] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">
            Common comparison
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#101b23]">{comparison.leftTitle}</h2>
          <ul className="mt-5 grid gap-3 text-base leading-7 text-[#536271]">
            {comparison.left.map((item) => (
              <li key={item} className="border-t border-[#e4d8c6] pt-3">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-[#c8a45a] bg-[#101b23] p-6 text-[#fffdf8]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c8a45a]">
            WhyDive implementation
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight">{comparison.rightTitle}</h2>
          <ul className="mt-5 grid gap-3 text-base leading-7 text-[#d8d0c5]">
            {comparison.right.map((item) => (
              <li key={item} className="border-t border-[#f8f4ed]/20 pt-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-5 border-l-4 border-[#c8a45a] bg-[#fffdf8] px-5 py-4 text-lg font-semibold leading-7 text-[#101b23]">
        {comparison.statement}
      </p>
    </div>
  );
}

function SlideVisual({ slide }: { slide: AdvisorSlide }) {
  if (slide.layout === 'flow') return <FlowDiagram items={slide.flow ?? []} />;
  if (slide.layout === 'architecture') return <ArchitectureDiagram />;
  if (slide.layout === 'engines') return <EnginesDiagram items={slide.points ?? []} />;
  if (slide.layout === 'timeline') return <Timeline items={slide.points ?? []} />;
  if (slide.layout === 'questions') return <PointGrid numbered points={slide.points ?? []} />;
  if (slide.layout === 'comparison' && slide.comparison) return <ComparisonDiagram comparison={slide.comparison} />;
  if (slide.points?.length) return <PointGrid points={slide.points} />;
  return null;
}

function SlideNotesDialog({
  notes,
  question,
  title,
  onClose,
}: {
  notes: string[];
  question: string;
  title: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[#101b23]/45 px-5 backdrop-blur-sm" role="presentation">
      <section
        aria-labelledby="advisor-slide-notes-title"
        aria-modal="true"
        className="w-full max-w-2xl border border-[#c8a45a] bg-[#fffdf8] p-6 text-[#172631] shadow-2xl"
        role="dialog"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6d2f]">
              Advisor notes
            </p>
            <h2 id="advisor-slide-notes-title" className="mt-3 text-2xl font-semibold leading-tight text-[#101b23]">
              {question}
            </h2>
            <p className="mt-2 text-sm font-semibold text-[#536271]">{title}</p>
          </div>
          <button
            type="button"
            className="grid size-10 shrink-0 place-items-center border border-[#d8cab4] text-[#243447] transition hover:border-[#8a6d2f] hover:text-[#101b23]"
            onClick={onClose}
            aria-label="Close advisor notes"
          >
            <XMarkIcon className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 grid gap-4 border-t border-[#d8cab4] pt-5">
          {notes.map((note) => (
            <p key={note} className="text-base leading-7 text-[#384a5a]">
              {note}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}

export function AdvisorDeck({ slides }: AdvisorDeckProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const activeSlide = slides[activeIndex];
  const progress = useMemo(() => ((activeIndex + 1) / slides.length) * 100, [activeIndex, slides.length]);
  const hasSlideNotes = activeIndex > 0 && Boolean(activeSlide.notes?.length);
  const compactTitle =
    activeSlide.title.length > 120 || ['architecture', 'timeline', 'questions'].includes(activeSlide.layout);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setNotesOpen(false);
        return;
      }

      if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        if (notesOpen) return;
        event.preventDefault();
        setActiveIndex((index) => Math.min(index + 1, slides.length - 1));
      }

      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        if (notesOpen) return;
        event.preventDefault();
        setActiveIndex((index) => Math.max(index - 1, 0));
      }

      if (event.key === 'Home') setActiveIndex(0);
      if (event.key === 'End') setActiveIndex(slides.length - 1);
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [notesOpen, slides.length]);

  useEffect(() => {
    setNotesOpen(false);
  }, [activeIndex]);

  return (
    <main className="relative h-[calc(100vh-var(--advisor-nav-height))] min-h-[660px] overflow-hidden bg-[#f7f3eb] text-[#172631]">
      <div className="absolute inset-x-0 top-0 z-40 h-1 bg-[#e4d8c6]">
        <div className="h-full bg-[#8a6d2f] transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      <section className="flex h-full items-center px-5 py-10 md:px-10 lg:px-14">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-center">
          <aside className="self-stretch border-r border-[#d8cab4] pr-0 lg:pr-10">
            <Link href="/advisor" className="text-sm font-semibold text-[#6f551e] hover:text-[#101b23]">
              WhyDive Executive Brief
            </Link>
            <div className="mt-14 hidden lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6d2f]">
                Advisor pathway
              </p>
              <p className="mt-3 max-w-xs text-3xl font-semibold leading-tight text-[#101b23]">
                {activeSlide.question}
              </p>
            </div>
            <div className="mt-14 flex items-center gap-3 text-sm text-[#536271]">
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              <div className="h-px w-16 bg-[#c8a45a]" />
              <span>{String(slides.length).padStart(2, '0')}</span>
            </div>
          </aside>

          <article className="max-h-[86vh] overflow-hidden">
            <div className="flex items-start justify-between gap-5">
              {activeSlide.eyebrow ? (
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6d2f]">
                  {activeSlide.eyebrow}
                </p>
              ) : (
                <span />
              )}
              {hasSlideNotes ? (
                <button
                  type="button"
                  className="inline-flex shrink-0 items-center gap-2 border border-[#d8cab4] bg-[#fffdf8] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6f551e] transition hover:border-[#8a6d2f] hover:text-[#101b23]"
                  onClick={() => setNotesOpen(true)}
                  aria-label="Open advisor notes for this slide"
                >
                  <InformationCircleIcon className="size-5" aria-hidden="true" />
                  Notes
                </button>
              ) : null}
            </div>
            <h1
              className={`wd-display mt-4 max-w-5xl leading-[1.04] tracking-normal text-[#101b23] ${
                compactTitle
                  ? 'text-4xl md:text-5xl'
                  : 'text-5xl md:text-7xl'
              }`}
            >
              {activeSlide.title}
            </h1>
            {activeSlide.subtitle ? (
              <p className="mt-6 max-w-3xl text-xl leading-8 text-[#384a5a] md:text-2xl md:leading-9">
                {activeSlide.subtitle}
              </p>
            ) : null}
            <SlideVisual slide={activeSlide} />
            <DeepLinks links={activeSlide.links} />
          </article>
        </div>
      </section>

      {notesOpen && activeSlide.notes?.length ? (
        <SlideNotesDialog
          notes={activeSlide.notes}
          question={activeSlide.question}
          title={activeSlide.title}
          onClose={() => setNotesOpen(false)}
        />
      ) : null}

      <div className="fixed bottom-5 right-5 z-30 flex gap-2">
        <button
          type="button"
          onClick={() => setActiveIndex((index) => Math.max(index - 1, 0))}
          className="grid size-11 place-items-center border border-[#d8cab4] bg-[#fffdf8] text-xl text-[#243447] transition hover:border-[#8a6d2f] disabled:opacity-40"
          disabled={activeIndex === 0}
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => setActiveIndex((index) => Math.min(index + 1, slides.length - 1))}
          className="grid size-11 place-items-center border border-[#d8cab4] bg-[#fffdf8] text-xl text-[#243447] transition hover:border-[#8a6d2f] disabled:opacity-40"
          disabled={activeIndex === slides.length - 1}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </main>
  );
}
