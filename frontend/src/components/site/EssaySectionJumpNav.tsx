'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface EssaySectionJumpNavProps {
  items: Array<{
    id: string;
    title: string;
    isMovementTitle?: boolean;
  }>;
}

export function EssaySectionJumpNav({ items }: EssaySectionJumpNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="print-hide sticky top-[88px] z-30 -mx-5 border-y border-[#d9d0c3] bg-[#f8f4ed]/96 px-5 py-3 backdrop-blur-md md:-mx-8 md:px-8 lg:hidden">
      <nav aria-label="Essay section shortcuts">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-[#8a6d2f]">
            On this essay
          </span>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-label="Open essay section menu"
            className="inline-grid min-h-11 grid-cols-[1fr_42px] items-stretch overflow-hidden border border-[#8a6d2f]/55 bg-[#f3eadb] text-base font-semibold text-[#243447] shadow-inner outline-none transition hover:border-[#8a6d2f] focus-visible:ring-2 focus-visible:ring-[#8a6d2f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f4ed]"
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="flex items-center px-4">Sections</span>
            <span
              aria-hidden="true"
              className="flex items-center justify-center border-l border-[#8a6d2f]/40 bg-[#101b23] text-[#fffdf8]"
            >
              <ChevronDownIcon className={`h-5 w-5 transition ${isOpen ? 'rotate-180' : ''}`} />
            </span>
          </button>
        </div>

        {isOpen ? (
          <div className="mt-3 max-h-[62vh] overflow-y-auto border border-[#d9d0c3] bg-[#fffdf8] shadow-[0_18px_45px_rgba(23,38,49,0.18)]">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block border-b border-[#d9d0c3]/75 px-4 py-3 text-base leading-6 outline-none transition last:border-b-0 focus-visible:bg-[#f3eadb] ${
                  item.isMovementTitle
                    ? 'font-semibold text-[#8a6d2f]'
                    : 'font-medium text-[#243447]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        ) : null}
      </nav>
    </section>
  );
}
