import Link from 'next/link';
import type { ClaimAuditEntry } from '@/content/types';
import { AuditInlineText } from './AuditInlineText';

export function EssayClaimStatus({ audit }: { audit: ClaimAuditEntry }) {
  return (
    <details className="print-hide mt-8 border border-[#d9d0c3] bg-[#fffdf8] p-5">
      <summary className="cursor-pointer text-lg font-semibold text-[#101b23]">
        Claim Status — {audit.rows.length} claims and boundaries
      </summary>
      <p className="mt-4 text-sm leading-6 text-[#536271]">
        Present judgments remain open to correction. Follow each rationale to the complete audit record.
      </p>
      <div className="mt-4 overflow-x-auto" role="region" aria-label="Claim status table" tabIndex={0}>
        <table className="min-w-[720px] w-full border-collapse text-left text-sm leading-6">
          <caption className="sr-only">Claim status for {audit.title}</caption>
          <thead className="bg-[#101b23] text-[#fffdf8]">
            <tr>{['Claim', 'Status', 'External dialogue', 'Rationale'].map((label) => <th key={label} scope="col" className="px-4 py-3">{label}</th>)}</tr>
          </thead>
          <tbody>
            {audit.rows.map((row) => (
              <tr key={row.id ?? row.argumentRecordId} className="border-t border-[#d9d0c3] odd:bg-[#f8f4ed]">
                <th scope="row" className="px-4 py-4 align-top font-normal text-[#101b23]">
                  <span className="block text-xs font-semibold text-[#6f551e]">{row.id}</span>
                  <AuditInlineText text={row.claim} />
                </th>
                <td className="px-4 py-4 align-top text-[#6f551e]">{row.status}</td>
                <td className="px-4 py-4 align-top text-[#536271]"><AuditInlineText text={row.externalChallenge ?? 'See rationale.'} /></td>
                <td className="px-4 py-4 align-top">
                  <Link href={`/essays/${audit.essaySlug}/claim-audit#${row.argumentRecordId}`} aria-label={`Read rationale for ${row.id ?? row.claim}`} className="font-semibold text-[#8a6d2f] underline underline-offset-4">Read rationale</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}
