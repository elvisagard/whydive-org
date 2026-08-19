'use client';

import Link from 'next/link';
import { useState } from 'react';
import { assetUrl } from '@/lib/assets';
import { livingSpiralContact, navItems } from '@/lib/siteContent';

const logoDark = assetUrl('/images/whydive/logo-dark.svg');
const logoLight = assetUrl('/images/whydive/logo-light.svg');

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d9d0c3]/80 bg-[#f8f4ed]/92 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-4 px-5 py-4 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-center justify-between gap-5">
          <Link href="/" className="group flex min-w-0 flex-col gap-1" aria-label="WhyDive home">
            <img src={logoDark} alt="WhyDive" className="h-auto w-[150px] max-w-full sm:w-[178px]" />
            <span className="block text-xs font-medium tracking-[0.14em] text-[#243447]/72 sm:text-sm">
              Framework Institute
            </span>
          </Link>

          <Link
            href="/foundations/what-is-whydive"
            className="hidden rounded-full border border-[#243447]/20 px-4 py-2 text-sm font-semibold text-[#243447] transition hover:border-[#8a6d2f] hover:text-[#6f551e] sm:inline-flex lg:hidden"
          >
            Start Here
          </Link>
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="site-mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center border border-[#243447]/20 text-[#243447] transition hover:border-[#8a6d2f] hover:text-[#6f551e] lg:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span aria-hidden="true" className="grid gap-1">
              <span className={`block h-0.5 w-5 bg-current transition ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        <nav
          className="hidden w-full min-w-0 max-w-full gap-5 lg:flex lg:w-auto lg:items-center"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 text-sm font-semibold text-[#243447]/78 transition hover:text-[#0f2433]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/foundations/what-is-whydive"
          className="hidden rounded-full border border-[#243447]/20 px-4 py-2 text-sm font-semibold text-[#243447] transition hover:border-[#8a6d2f] hover:text-[#6f551e] lg:inline-flex"
        >
          Start Here
        </Link>

        {isMenuOpen ? (
          <nav
            id="site-mobile-navigation"
            className="grid gap-1 border-t border-[#d9d0c3] pt-3 lg:hidden"
            aria-label="Mobile primary navigation"
          >
            {[...navItems, { label: 'Start Here', href: '/foundations/what-is-whydive' }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block border border-transparent px-3 py-2 text-sm font-semibold text-[#243447] transition hover:border-[#8a6d2f]/35 hover:bg-[#fffdf8]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d9d0c3] bg-[#111c24] text-[#f8f4ed]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.15fr_0.85fr] md:px-8">
        <div>
          <img src={logoLight} alt="WhyDive" className="h-auto w-[190px] max-w-full" />
          <p className="mt-4 max-w-2xl text-2xl font-semibold leading-snug">
            A framework for understanding and improving how human beings move from evidence to action.
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#d8d0c5]">
            WhyDive is currently owned and operated by {livingSpiralContact.legalName}. For
            invitations, questions, and correspondence, use the contact information listed here.
          </p>
        </div>

        <div className="grid gap-6 text-sm text-[#d8d0c5] sm:grid-cols-2">
          <div>
            <p className="font-semibold text-[#f8f4ed]">Contact</p>
            <div className="mt-3 space-y-1 leading-6">
              {livingSpiralContact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <a className="underline decoration-[#c8a45a]/60" href={livingSpiralContact.phoneHref}>
                  {livingSpiralContact.phone}
                </a>
              </p>
              <p>
                <a className="underline decoration-[#c8a45a]/60" href={livingSpiralContact.emailHref}>
                  {livingSpiralContact.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-[#f8f4ed]">Explore</p>
            <div className="mt-3 grid gap-2">
              {[...navItems, { label: 'Contact', href: '/contact' }].map((item) => (
                <Link key={item.href} className="hover:text-[#c8a45a]" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
