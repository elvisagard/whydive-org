'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import {
  MagnifyingGlassIcon,
  Squares2X2Icon,
  ListBulletIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import type { ContentStatus, EssayEntry } from '@/content/types';
import { assetUrl } from '@/lib/assets';

type ArchiveView = 'list' | 'cards';
type StatusFilter = 'all' | 'published' | 'future';
type SortMode = 'newest' | 'title' | 'status';

interface EssayArchiveBrowserProps {
  essays: EssayEntry[];
}

const pageSize = 6;

const statusLabels: Record<ContentStatus, string> = {
  published: 'Published',
  draft: 'In development',
  planned: 'Planned',
};

function getStatusRank(status: ContentStatus) {
  if (status === 'published') return 0;
  if (status === 'draft') return 1;
  return 2;
}

function getDateRank(essay: EssayEntry) {
  const dateLabel = essay.updatedDate ?? essay.publicationDate;
  if (!dateLabel) return 0;
  const parsed = Date.parse(dateLabel);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function ViewButton({
  active,
  label,
  onClick,
  children,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={`inline-flex h-10 w-10 items-center justify-center border transition ${
        active
          ? 'border-[#8a6d2f] bg-[#101b23] text-[#fffdf8]'
          : 'border-[#d9d0c3] bg-[#fffdf8] text-[#536271] hover:border-[#8a6d2f]/70 hover:text-[#101b23]'
      }`}
    >
      {children}
    </button>
  );
}

function StatusBadge({ status }: { status: ContentStatus }) {
  return (
    <span
      className={`inline-flex border px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] ${
        status === 'published'
          ? 'border-[#8a6d2f]/45 bg-[#fff8e6] text-[#6f551e]'
          : 'border-[#d9d0c3] bg-[#f8f4ed] text-[#536271]'
      }`}
    >
      {statusLabels[status]}
    </span>
  );
}

function EssayListItem({ essay }: { essay: EssayEntry }) {
  const isPublished = essay.status === 'published';

  return (
    <Link
      href={`/essays/${essay.slug}`}
      className="group grid gap-5 border border-[#d9d0c3] bg-[#fffdf8] p-4 transition hover:border-[#8a6d2f]/55 hover:shadow-[0_18px_45px_rgba(35,38,49,0.08)] sm:grid-cols-[160px_1fr]"
    >
      {isPublished ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-[#101b23] sm:aspect-auto sm:min-h-32">
          <Image
            src={assetUrl(essay.image ?? '/images/whydive/essays-study-table-banner.png')}
            alt={`Editorial image for ${essay.title}.`}
            fill
            sizes="(min-width: 768px) 160px, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.025]"
          />
        </div>
      ) : (
        <div className="flex min-h-28 items-center justify-center border border-dashed border-[#d9d0c3] bg-[#f8f4ed] px-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6d2f]">
          Forthcoming
        </div>
      )}

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={essay.status} />
          {essay.readingTime ? (
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a6d2f]">
              {essay.readingTime}
            </span>
          ) : null}
        </div>
        <h2 className="wd-display mt-3 text-2xl leading-tight text-[#101b23]">{essay.title}</h2>
        <p className="mt-3 text-sm leading-7 text-[#536271]">{essay.deck}</p>
      </div>
    </Link>
  );
}

function EssayCard({ essay }: { essay: EssayEntry }) {
  const isPublished = essay.status === 'published';

  return (
    <Link
      href={`/essays/${essay.slug}`}
      className="group block h-full border border-[#d9d0c3] bg-[#fffdf8] transition hover:border-[#8a6d2f]/55 hover:shadow-[0_18px_45px_rgba(35,38,49,0.09)]"
    >
      {isPublished ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-[#101b23]">
          <Image
            src={assetUrl(essay.image ?? '/images/whydive/essays-study-table-banner.png')}
            alt={`Editorial image for ${essay.title}.`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.025]"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] items-center justify-center bg-[#f8f4ed] px-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6d2f]">
          Future article
        </div>
      )}
      <div className="p-6">
        <StatusBadge status={essay.status} />
        <h2 className="wd-display mt-3 text-3xl leading-tight text-[#101b23]">{essay.title}</h2>
        <p className="mt-4 text-base leading-7 text-[#536271]">{essay.deck}</p>
        {essay.readingTime ? (
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6d2f]">
            {essay.readingTime}
          </p>
        ) : null}
      </div>
    </Link>
  );
}

export function EssayArchiveBrowser({ essays }: EssayArchiveBrowserProps) {
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [sortMode, setSortMode] = useState<SortMode>('status');
  const [view, setView] = useState<ArchiveView>('list');
  const [page, setPage] = useState(1);

  const filteredEssays = useMemo(() => {
    const normalizedQuery = normalize(query);

    return essays
      .filter((essay) => {
        if (statusFilter === 'published' && essay.status !== 'published') return false;
        if (statusFilter === 'future' && essay.status === 'published') return false;
        if (!normalizedQuery) return true;

        return normalize(`${essay.title} ${essay.deck} ${essay.category}`).includes(normalizedQuery);
      })
      .sort((a, b) => {
        if (sortMode === 'title') return a.title.localeCompare(b.title);
        if (sortMode === 'newest') return getDateRank(b) - getDateRank(a);
        return getStatusRank(a.status) - getStatusRank(b.status) || a.title.localeCompare(b.title);
      });
  }, [essays, query, sortMode, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredEssays.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * pageSize;
  const visibleEssays = filteredEssays.slice(pageStart, pageStart + pageSize);
  const publishedCount = essays.filter((essay) => essay.status === 'published').length;
  const futureCount = essays.length - publishedCount;

  function updateQuery(value: string) {
    setQuery(value);
    setPage(1);
  }

  function updateStatusFilter(value: StatusFilter) {
    setStatusFilter(value);
    setPage(1);
  }

  function updateSortMode(value: SortMode) {
    setSortMode(value);
    setPage(1);
  }

  return (
    <section>
      <div className="border border-[#d9d0c3] bg-[#fffdf8] p-4 shadow-[0_20px_60px_rgba(23,38,49,0.05)] md:p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_180px_180px_auto] lg:items-end">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6d2f]">
              Search
            </span>
            <span className="relative mt-2 block">
              <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8a6d2f]" />
              <input
                type="search"
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
                placeholder="Search this archive"
                className="h-11 w-full border border-[#d9d0c3] bg-[#f8f4ed] pl-10 pr-3 text-sm text-[#101b23] outline-none transition placeholder:text-[#7a8793] focus:border-[#8a6d2f]"
              />
            </span>
          </label>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6d2f]">
              Filter
            </span>
            <select
              value={statusFilter}
              onChange={(event) => updateStatusFilter(event.target.value as StatusFilter)}
              className="mt-2 h-11 w-full border border-[#d9d0c3] bg-[#f8f4ed] px-3 text-sm text-[#101b23] outline-none transition focus:border-[#8a6d2f]"
            >
              <option value="all">All articles</option>
              <option value="published">Published</option>
              <option value="future">Future</option>
            </select>
          </label>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6d2f]">
              Sort
            </span>
            <select
              value={sortMode}
              onChange={(event) => updateSortMode(event.target.value as SortMode)}
              className="mt-2 h-11 w-full border border-[#d9d0c3] bg-[#f8f4ed] px-3 text-sm text-[#101b23] outline-none transition focus:border-[#8a6d2f]"
            >
              <option value="status">Published first</option>
              <option value="newest">Newest</option>
              <option value="title">Title</option>
            </select>
          </label>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6d2f]">
              View
            </p>
            <div className="mt-2 flex gap-2">
              <ViewButton active={view === 'list'} label="Show list view" onClick={() => setView('list')}>
                <ListBulletIcon className="h-5 w-5" />
              </ViewButton>
              <ViewButton active={view === 'cards'} label="Show card view" onClick={() => setView('cards')}>
                <Squares2X2Icon className="h-5 w-5" />
              </ViewButton>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3 border-t border-[#d9d0c3] pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#536271]">
          <span>{filteredEssays.length} shown</span>
          <span>{publishedCount} published</span>
          <span>{futureCount} future</span>
        </div>
      </div>

      <div className={view === 'cards' ? 'mt-8 grid gap-5 md:grid-cols-2' : 'mt-8 grid gap-4'}>
        {visibleEssays.length ? (
          visibleEssays.map((essay) =>
            view === 'cards' ? (
              <EssayCard key={essay.slug} essay={essay} />
            ) : (
              <EssayListItem key={essay.slug} essay={essay} />
            ),
          )
        ) : (
          <div className="border border-[#d9d0c3] bg-[#fffdf8] p-6">
            <h2 className="text-xl font-semibold text-[#101b23]">No articles match this view.</h2>
            <p className="mt-3 text-sm leading-7 text-[#536271]">
              Try a broader search or switch the filter back to all articles.
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-[#d9d0c3] pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-7 text-[#536271]">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPage((value) => Math.max(1, value - 1))}
            disabled={currentPage === 1}
            className="inline-flex h-10 items-center gap-2 border border-[#d9d0c3] bg-[#fffdf8] px-3 text-sm font-semibold text-[#101b23] transition hover:border-[#8a6d2f]/70 disabled:cursor-not-allowed disabled:opacity-45"
          >
            <ChevronLeftIcon className="h-4 w-4" />
            Previous
          </button>
          <button
            type="button"
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            disabled={currentPage === totalPages}
            className="inline-flex h-10 items-center gap-2 border border-[#d9d0c3] bg-[#fffdf8] px-3 text-sm font-semibold text-[#101b23] transition hover:border-[#8a6d2f]/70 disabled:cursor-not-allowed disabled:opacity-45"
          >
            Next
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
