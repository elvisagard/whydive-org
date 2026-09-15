import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EditorialPage, SectionHeading } from '@/components/site/EditorialPage';
import { StructuredData } from '@/components/site/StructuredData';
import { claimAuditEntries, getClaimAuditByEssaySlug } from '@/content/claimAudits';
import { essayEntries } from '@/content/essays';
import { absoluteUrl, publisherName, siteName, siteUrl } from '@/lib/discovery';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function renderInlineMarkup(label: string) {
  return label.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
      return <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>;
    }

    return part;
  });
}

export function generateStaticParams() {
  return claimAuditEntries.map((audit) => ({ slug: audit.essaySlug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = essayEntries.find((entry) => entry.slug === slug);
  const audit = getClaimAuditByEssaySlug(slug);

  if (!essay || !audit) {
    return {};
  }

  return {
    title: `${audit.title} Claim Audit`,
    description: audit.deck,
    alternates: {
      canonical: `/essays/${essay.slug}/claim-audit`,
    },
    openGraph: {
      title: `${audit.title} Claim Audit`,
      description: audit.deck,
      type: 'article',
      url: absoluteUrl(`/essays/${essay.slug}/claim-audit`),
      authors: ['Elvis Agard'],
      section: 'Claim Audit',
    },
  };
}

export default async function ClaimAuditPage({ params }: PageProps) {
  const { slug } = await params;
  const essay = essayEntries.find((entry) => entry.slug === slug);
  const audit = getClaimAuditByEssaySlug(slug);

  if (!essay || !audit) {
    notFound();
  }

  const auditUrl = absoluteUrl(`/essays/${essay.slug}/claim-audit`);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${auditUrl}#claim-audit`,
    headline: `${audit.title} Claim Audit`,
    description: audit.deck,
    url: auditUrl,
    inLanguage: 'en-US',
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
    },
    author: {
      '@type': 'Person',
      name: 'Elvis Agard',
    },
    about: [
      { '@type': 'Thing', name: siteName },
      { '@type': 'Thing', name: essay.title },
      { '@type': 'Thing', name: 'Claim audit' },
    ],
  };

  return (
    <EditorialPage
      eyebrow="Claim Audit"
      eyebrowHref={`/essays/${essay.slug}`}
      title={`${audit.title} Claim Audit`}
      intro={audit.deck}
    >
      <StructuredData data={schema} />

      <div className="mb-8 border-l-2 border-[#8a6d2f] bg-[#fff8e6] p-5 text-base leading-7 text-[#465767]">
        <p className="font-semibold text-[#101b23]">{audit.statusNote}</p>
      </div>

      <section>
        <SectionHeading title="Claim Audit">
          <p>
            This table shows what the essay presently claims, how strongly each claim is held, and
            where a reader can inspect the supporting argument record.
          </p>
        </SectionHeading>

        <div className="mt-8 overflow-x-auto border border-[#d9d0c3] bg-[#fffdf8] shadow-[0_20px_60px_rgba(23,38,49,0.05)]">
          <table className="min-w-[880px] border-collapse text-left text-sm">
            <thead className="bg-[#101b23] text-[#fffdf8]">
              <tr>
                <th scope="col" className="w-[34%] px-4 py-3 font-semibold">
                  Claim
                </th>
                <th scope="col" className="w-[20%] px-4 py-3 font-semibold">
                  Present Status
                </th>
                <th scope="col" className="w-[31%] px-4 py-3 font-semibold">
                  Why This Status?
                </th>
                <th scope="col" className="w-[15%] px-4 py-3 font-semibold">
                  Evidence
                </th>
              </tr>
            </thead>
            <tbody>
              {audit.rows.map((row, index) => {
                const record = audit.argumentRecords.find((entry) => entry.id === row.argumentRecordId);

                return (
                  <tr key={row.argumentRecordId} className={index % 2 ? 'bg-[#f8f4ed]' : 'bg-[#fffdf8]'}>
                    <td className="border-t border-[#d9d0c3] px-4 py-4 align-top font-semibold text-[#101b23]">
                      {row.claim}
                    </td>
                    <td className="border-t border-[#d9d0c3] px-4 py-4 align-top text-[#6f551e]">
                      {row.status}
                    </td>
                    <td className="border-t border-[#d9d0c3] px-4 py-4 align-top leading-6 text-[#536271]">
                      {row.rationale}
                    </td>
                    <td className="border-t border-[#d9d0c3] px-4 py-4 align-top">
                      <a
                        href={`#${row.argumentRecordId}`}
                        className="font-semibold text-[#8a6d2f] underline underline-offset-4 hover:text-[#101b23]"
                      >
                        {record ? record.title : row.argumentRecordId}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading title="Argument Records">
          <p>
            These records preserve the audit trail: evidence, boundaries, revisions, competing
            interpretations, and source links behind the table.
          </p>
        </SectionHeading>

        <div className="mt-8 grid gap-6">
          {audit.argumentRecords.map((record) => (
            <article
              key={record.id}
              id={record.id}
              className="scroll-mt-28 border border-[#d9d0c3] bg-[#fffdf8] p-6 shadow-[0_20px_60px_rgba(23,38,49,0.05)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6d2f]">
                {record.id.toUpperCase()}
              </p>
              <h2 className="wd-display mt-3 text-3xl leading-tight text-[#101b23]">{record.title}</h2>
              <div className="mt-5 grid gap-4 text-base leading-7 text-[#536271]">
                <p>
                  <span className="font-semibold text-[#101b23]">Claim: </span>
                  {record.claim}
                </p>
                <p>
                  <span className="font-semibold text-[#101b23]">Present status: </span>
                  {record.status}
                </p>
              </div>

              <div className="mt-6 space-y-5 text-base leading-7 text-[#536271]">
                {record.sections.map((section, index) => (
                  <div key={`${record.id}-${section.label ?? index}`}>
                    {section.label ? (
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8a6d2f]">
                        {section.label}
                      </h3>
                    ) : null}
                    <div className={section.label ? 'mt-2 space-y-3' : 'space-y-3'}>
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{renderInlineMarkup(paragraph)}</p>
                      ))}
                      {section.quote ? (
                        <blockquote className="border-l-2 border-[#8a6d2f] bg-[#fff8e6] px-5 py-4 font-semibold text-[#243447]">
                          {renderInlineMarkup(section.quote)}
                        </blockquote>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>

              {record.sources?.length ? (
                <div className="mt-6 border-t border-[#d9d0c3] pt-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8a6d2f]">Sources</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {record.sources.map((source) => (
                      <a
                        key={`${record.id}-${source.href}`}
                        href={source.href}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-[#d9d0c3] bg-[#f8f4ed] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#536271] transition hover:border-[#8a6d2f] hover:text-[#101b23]"
                      >
                        {source.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {audit.revisionRecord?.length ? (
        <section className="mt-16">
          <SectionHeading title="Revision Record">
            <p>
              These entries show where earlier formulations were narrowed, corrected, or made more
              proportionate to the evidence.
            </p>
          </SectionHeading>
          <div className="mt-8 overflow-x-auto border border-[#d9d0c3] bg-[#fffdf8]">
            <table className="min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-[#101b23] text-[#fffdf8]">
                <tr>
                  <th scope="col" className="w-1/3 px-4 py-3 font-semibold">
                    Earlier Formulation
                  </th>
                  <th scope="col" className="w-1/3 px-4 py-3 font-semibold">
                    What Challenged It
                  </th>
                  <th scope="col" className="w-1/3 px-4 py-3 font-semibold">
                    Present Formulation
                  </th>
                </tr>
              </thead>
              <tbody>
                {audit.revisionRecord.map((entry, index) => (
                  <tr key={entry.earlier} className={index % 2 ? 'bg-[#f8f4ed]' : 'bg-[#fffdf8]'}>
                    <td className="border-t border-[#d9d0c3] px-4 py-4 align-top font-semibold text-[#101b23]">
                      {entry.earlier}
                    </td>
                    <td className="border-t border-[#d9d0c3] px-4 py-4 align-top leading-6 text-[#536271]">
                      {entry.challenge}
                    </td>
                    <td className="border-t border-[#d9d0c3] px-4 py-4 align-top leading-6 text-[#536271]">
                      {entry.present}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      {audit.architecture?.length || audit.closingPrinciples?.length ? (
        <section className="mt-16 border border-[#d9d0c3] bg-[#101b23] p-6 text-[#f8f4ed] md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c8a45a]">
            Publication Architecture
          </p>
          {audit.architecture?.length ? (
            <ol className="mt-5 grid gap-3 text-base leading-7 text-[#d8d0c5]">
              {audit.architecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          ) : null}
          {audit.closingPrinciples?.length ? (
            <div className="mt-6 grid gap-3 border-t border-white/15 pt-5 text-base font-semibold leading-7 text-[#fffdf8]">
              {audit.closingPrinciples.map((principle) => (
                <p key={principle}>{principle}</p>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      <div className="mt-10">
        <Link
          href={`/essays/${essay.slug}`}
          className="inline-flex border border-[#8a6d2f] bg-[#fffdf8] px-4 py-2 text-sm font-semibold text-[#101b23] transition hover:bg-[#fff8e6]"
        >
          Return to essay
        </Link>
      </div>
    </EditorialPage>
  );
}
