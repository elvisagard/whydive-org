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
            where a reader can inspect the supporting records.
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
                  Evidence &amp; Dialogue
                </th>
              </tr>
            </thead>
            <tbody>
              {audit.rows.map((row, index) => {
                const recordIds = row.argumentRecordIds ?? [row.argumentRecordId];
                const records = recordIds.map((recordId) => ({
                  id: recordId,
                  record: audit.argumentRecords.find((entry) => entry.id === recordId),
                }));
                const emergentRecords =
                  row.emergentRecordIds?.map((recordId) => ({
                    id: recordId,
                    record: audit.emergentRecords?.find((entry) => entry.id === recordId),
                  })) ?? [];
                const revisionRecords =
                  row.revisionRecordIds?.map((recordId) => ({
                    id: recordId,
                    record: audit.revisionRecord?.find((entry) => entry.id === recordId),
                  })) ?? [];
                const openQuestions =
                  row.openQuestionIds?.map((recordId) => ({
                    id: recordId,
                    record: audit.openQuestions?.find((entry) => entry.id === recordId),
                  })) ?? [];

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
                      <div className="grid gap-2">
                        {records.map(({ id, record }) => (
                          <a
                            key={`${row.argumentRecordId}-${id}`}
                            href={`#${id}`}
                            className="font-semibold text-[#8a6d2f] underline underline-offset-4 hover:text-[#101b23]"
                          >
                            {record ? record.title : id}
                          </a>
                        ))}
                        {emergentRecords.map(({ id, record }) => (
                          <a
                            key={`${row.argumentRecordId}-${id}`}
                            href={`#${id}`}
                            className="font-semibold text-[#8a6d2f] underline underline-offset-4 hover:text-[#101b23]"
                          >
                            <span className="block text-[0.65rem] uppercase tracking-[0.16em] text-[#536271]">
                              Later Development
                            </span>
                            {record ? record.title : id}
                          </a>
                        ))}
                        {revisionRecords.map(({ id }) => (
                          <a
                            key={`${row.argumentRecordId}-${id}`}
                            href={`#${id}`}
                            className="font-semibold text-[#8a6d2f] underline underline-offset-4 hover:text-[#101b23]"
                          >
                            <span className="block text-[0.65rem] uppercase tracking-[0.16em] text-[#536271]">
                              Revision Record
                            </span>
                            {id}
                          </a>
                        ))}
                        {openQuestions.map(({ id, record }) => (
                          <a
                            key={`${row.argumentRecordId}-${id}`}
                            href={`#${id}`}
                            className="font-semibold text-[#8a6d2f] underline underline-offset-4 hover:text-[#101b23]"
                          >
                            <span className="block text-[0.65rem] uppercase tracking-[0.16em] text-[#536271]">
                              Open Question
                            </span>
                            {record ? record.id : id}
                          </a>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {audit.boundaryClaims?.length ? (
        <section className="mt-16">
          <SectionHeading title="Claims Outside Present Authorization">
            <p>
              These claims show where the investigation stopped, narrowed, or refused to convert a
              possibility into a conclusion.
            </p>
          </SectionHeading>
          <div className="mt-8 overflow-x-auto border border-[#d9d0c3] bg-[#fffdf8] shadow-[0_20px_60px_rgba(23,38,49,0.05)]">
            <table className="min-w-[820px] border-collapse text-left text-sm">
              <thead className="bg-[#101b23] text-[#fffdf8]">
                <tr>
                  <th scope="col" className="w-[38%] px-4 py-3 font-semibold">
                    Claim
                  </th>
                  <th scope="col" className="w-[22%] px-4 py-3 font-semibold">
                    Present Status
                  </th>
                  <th scope="col" className="w-[40%] px-4 py-3 font-semibold">
                    Reason
                  </th>
                </tr>
              </thead>
              <tbody>
                {audit.boundaryClaims.map((claim, index) => (
                  <tr key={claim.claim} className={index % 2 ? 'bg-[#f8f4ed]' : 'bg-[#fffdf8]'}>
                    <td className="border-t border-[#d9d0c3] px-4 py-4 align-top font-semibold text-[#101b23]">
                      {claim.claim}
                    </td>
                    <td className="border-t border-[#d9d0c3] px-4 py-4 align-top text-[#6f551e]">
                      {claim.status}
                    </td>
                    <td className="border-t border-[#d9d0c3] px-4 py-4 align-top leading-6 text-[#536271]">
                      {claim.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

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

      {audit.emergentRecords?.length ? (
        <section className="mt-16">
          <SectionHeading title="Post-Publication Development">
            <p>
              These records preserve insights that emerged after publication and should not be
              represented as part of the original investigation.
            </p>
          </SectionHeading>

          <div className="mt-8 grid gap-6">
            {audit.emergentRecords.map((record) => (
              <article
                key={record.id}
                id={record.id}
                className="scroll-mt-28 border border-[#d9d0c3] bg-[#fffdf8] p-6 shadow-[0_20px_60px_rgba(23,38,49,0.05)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6d2f]">
                  {record.id} / {record.provenanceLabel}
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
      ) : null}

      {audit.openQuestions?.length ? (
        <section className="mt-16">
          <SectionHeading title="Open Questions">
            <p>
              These records preserve consequential questions the present evidence does not yet
              authorize the audit to resolve.
            </p>
          </SectionHeading>

          <div className="mt-8 grid gap-4">
            {audit.openQuestions.map((record) => (
              <article
                key={record.id}
                id={record.id}
                className="scroll-mt-28 border border-[#d9d0c3] bg-[#fffdf8] p-5 shadow-[0_20px_60px_rgba(23,38,49,0.05)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6d2f]">{record.id}</p>
                <p className="mt-3 text-lg font-semibold leading-7 text-[#101b23]">{record.question}</p>
                {record.status ? <p className="mt-3 text-base leading-7 text-[#6f551e]">{record.status}</p> : null}
                {record.notes?.length ? (
                  <div className="mt-4 grid gap-3 text-base leading-7 text-[#536271]">
                    {record.notes.map((note) => (
                      <p key={note}>{renderInlineMarkup(note)}</p>
                    ))}
                  </div>
                ) : null}
                {record.relatedArgumentRecordIds?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-[#d9d0c3] pt-4">
                    {record.relatedArgumentRecordIds.map((recordId) => (
                      <a
                        key={`${record.id}-${recordId}`}
                        href={`#${recordId}`}
                        className="border border-[#d9d0c3] bg-[#f8f4ed] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#536271] transition hover:border-[#8a6d2f] hover:text-[#101b23]"
                      >
                        {recordId}
                      </a>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

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
                  {audit.revisionRecord.some((entry) => entry.id) ? (
                    <th scope="col" className="w-[10%] px-4 py-3 font-semibold">
                      ID
                    </th>
                  ) : null}
                  <th scope="col" className="w-[28%] px-4 py-3 font-semibold">
                    Earlier Formulation
                  </th>
                  <th scope="col" className="w-[28%] px-4 py-3 font-semibold">
                    What Challenged It
                  </th>
                  <th scope="col" className="w-[28%] px-4 py-3 font-semibold">
                    Present Formulation
                  </th>
                  {audit.revisionRecord.some((entry) => entry.relatedArgumentRecordIds?.length) ? (
                    <th scope="col" className="w-[16%] px-4 py-3 font-semibold">
                      Related AR
                    </th>
                  ) : null}
                </tr>
              </thead>
              <tbody>
                {audit.revisionRecord.map((entry, index) => (
                  <tr
                    key={entry.id ?? entry.earlier}
                    id={entry.id}
                    className={`${index % 2 ? 'bg-[#f8f4ed]' : 'bg-[#fffdf8]'} scroll-mt-28`}
                  >
                    {audit.revisionRecord?.some((record) => record.id) ? (
                      <td className="border-t border-[#d9d0c3] px-4 py-4 align-top font-semibold text-[#6f551e]">
                        {entry.id}
                      </td>
                    ) : null}
                    <td className="border-t border-[#d9d0c3] px-4 py-4 align-top font-semibold text-[#101b23]">
                      {entry.earlier}
                    </td>
                    <td className="border-t border-[#d9d0c3] px-4 py-4 align-top leading-6 text-[#536271]">
                      {entry.challenge}
                    </td>
                    <td className="border-t border-[#d9d0c3] px-4 py-4 align-top leading-6 text-[#536271]">
                      {entry.present}
                    </td>
                    {audit.revisionRecord?.some((record) => record.relatedArgumentRecordIds?.length) ? (
                      <td className="border-t border-[#d9d0c3] px-4 py-4 align-top">
                        <div className="grid gap-2">
                          {entry.relatedArgumentRecordIds?.map((recordId) => (
                            <a
                              key={`${entry.id}-${recordId}`}
                              href={`#${recordId}`}
                              className="font-semibold text-[#8a6d2f] underline underline-offset-4 hover:text-[#101b23]"
                            >
                              {recordId}
                            </a>
                          ))}
                        </div>
                      </td>
                    ) : null}
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
