'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pathwayLinks = [
  { label: 'Portal', href: '/advisor' },
  { label: 'Orientation', href: '/advisor/orientation' },
  { label: 'Framework', href: '/advisor/deep-dive/framework' },
  { label: 'Products', href: '/advisor/deep-dive/products' },
  { label: 'Business model', href: '/advisor/deep-dive/business-model' },
  { label: 'Roadmap', href: '/advisor/deep-dive/commercialization' },
  { label: 'Guidance', href: '/advisor/deep-dive/advisor-questions' },
];

const supportLinks = [
  { label: 'FAQ', href: '/advisor/faq' },
  { label: 'Org chart', href: '/advisor/org-chart' },
  {
    label: 'Business overview PDF',
    href: '/advisor/living-spiral-studio-sba-business-overview.pdf',
    download: true,
  },
];

function isActivePath(pathname: string, href: string) {
  return pathname === href;
}

export function AdvisorSystemNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-[#d8cab4] bg-[#fffdf8]/95 text-[#172631] shadow-[0_1px_0_rgba(16,27,35,0.04)] backdrop-blur">
      <div className="mx-auto flex min-h-[68px] max-w-7xl flex-col gap-3 px-5 py-3 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
        <Link href="/advisor" className="shrink-0 text-sm font-semibold text-[#101b23] hover:text-[#6f551e]">
          WhyDive Advisor Pathway
        </Link>

        <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
          {pathwayLinks.map((item, index) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 border px-3 py-2 text-xs font-semibold transition ${
                  active
                    ? 'border-[#101b23] bg-[#101b23] text-[#fffdf8]'
                    : 'border-[#d8cab4] bg-[#fffdf8] text-[#536271] hover:border-[#8a6d2f] hover:text-[#101b23]'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                <span className="mr-2 text-[#8a6d2f]">{String(index + 1).padStart(2, '0')}</span>
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex gap-2">
          {supportLinks.map((item) => {
            const active = isActivePath(pathname, item.href);
            const className = `shrink-0 border px-3 py-2 text-xs font-semibold transition ${
              active
                ? 'border-[#8a6d2f] bg-[#f7f3eb] text-[#101b23]'
                : 'border-[#d8cab4] bg-[#fffdf8] text-[#6f551e] hover:border-[#8a6d2f] hover:text-[#101b23]'
            }`;

            if ('download' in item && item.download) {
              return (
                <a key={item.href} href={item.href} download className={className}>
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={className}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
