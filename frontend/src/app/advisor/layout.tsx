import type { Metadata } from 'next';
import { AdvisorSystemNav } from '@/components/site/AdvisorSystemNav';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdvisorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        body > header,
        body > footer {
          display: none !important;
        }
      `}</style>
      <div className="[--advisor-nav-height:112px]">
        <AdvisorSystemNav />
        {children}
      </div>
    </>
  );
}
