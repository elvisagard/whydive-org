'use client';

import { PrinterIcon } from '@heroicons/react/24/outline';

interface ArticlePrintButtonProps {
  label?: string;
}

export function ArticlePrintButton({ label = 'Print essay' }: ArticlePrintButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 border border-[#b9aa95] bg-[#fffdf8] px-4 py-2 text-sm font-semibold text-[#243447] transition hover:border-[#8a6d2f] hover:bg-white"
      aria-label={label}
      title={label}
    >
      <PrinterIcon className="h-4 w-4" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}
