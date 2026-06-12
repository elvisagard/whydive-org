import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface EditorialPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  image?: {
    src: string;
    alt: string;
    presentation?: 'wide' | 'portrait';
  };
  children: ReactNode;
}

export function EditorialPage({ eyebrow, title, intro, image, children }: EditorialPageProps) {
  const imagePresentation = image?.presentation ?? 'wide';
  const imageFrameClass =
    imagePresentation === 'portrait'
      ? 'relative mt-10 aspect-[17/22] w-full max-w-[520px] overflow-hidden border border-[#d9d0c3] bg-[#101b23] shadow-[0_24px_80px_rgba(23,38,49,0.12)]'
      : 'relative mt-10 aspect-[16/9] overflow-hidden border border-[#d9d0c3] bg-[#101b23] shadow-[0_24px_80px_rgba(23,38,49,0.12)]';
  const imageClass = imagePresentation === 'portrait' ? 'object-contain' : 'object-cover';

  return (
    <main className="min-h-screen bg-[#f8f4ed] text-[#172631]">
      <section className="border-b border-[#d9d0c3]">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7b633e]">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-[#101b23] md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465767] md:text-xl">{intro}</p>
          {image ? (
            <div className={imageFrameClass}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 960px, 100vw"
                className={imageClass}
                priority={false}
              />
            </div>
          ) : null}
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">{children}</div>
    </main>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = 'light',
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  tone?: 'light' | 'dark';
}) {
  const isDark = tone === 'dark';

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.28em] ${
            isDark ? 'text-[#c8a45a]' : 'text-[#8a6d2f]'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-semibold leading-tight md:text-4xl ${
          isDark ? 'text-[#fffdf8]' : 'text-[#101b23]'
        }`}
      >
        {title}
      </h2>
      {children ? (
        <div className={`mt-4 text-base leading-7 ${isDark ? 'text-[#d8d0c5]' : 'text-[#536271]'}`}>
          {children}
        </div>
      ) : null}
    </div>
  );
}

export function QuietCard({
  title,
  eyebrow,
  children,
  fillHeight = true,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  fillHeight?: boolean;
}) {
  return (
    <article
      className={`border border-[#d9d0c3] bg-[#fffdf8] p-6 shadow-[0_20px_60px_rgba(23,38,49,0.05)] ${
        fillHeight ? 'h-full' : ''
      }`}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6d2f]">{eyebrow}</p>
      ) : null}
      <h3 className="mt-3 text-xl font-semibold text-[#101b23]">{title}</h3>
      <div className="mt-3 text-sm leading-7 text-[#536271]">{children}</div>
    </article>
  );
}

export function VisitorActionPanel({
  eyebrow = 'Use This Page',
  title,
  benefit,
  actions,
}: {
  eyebrow?: string;
  title: string;
  benefit: string;
  actions: Array<{
    label: string;
    href: string;
    description: string;
    external?: boolean;
  }>;
}) {
  return (
    <section className="mt-16 border border-[#d9d0c3] bg-[#101b23] p-6 text-[#f8f4ed] md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c8a45a]">{eyebrow}</p>
      <div className="mt-4 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-[#fffdf8] md:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-[#d8d0c5]">{benefit}</p>
        </div>
        <div className="grid gap-3">
          {actions.map((action, index) => {
            const actionKey = `${action.label}-${action.href}-${index}`;
            const className =
              'block border border-white/12 bg-white/[0.045] p-4 transition hover:border-[#c8a45a]/70 hover:bg-white/[0.07]';
            const content = (
              <>
                <span className="block font-sans text-sm font-semibold text-[#fffdf8]">{action.label}</span>
                <span className="mt-2 block text-sm leading-6 text-[#d8d0c5]">{action.description}</span>
              </>
            );

            if (action.external) {
              return (
                <a key={actionKey} href={action.href} target="_blank" rel="noreferrer" className={className}>
                  {content}
                </a>
              );
            }

            return (
              <Link key={actionKey} href={action.href} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
