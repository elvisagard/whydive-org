import type { Metadata } from 'next';
import { AdvisorDeck } from '@/components/site/AdvisorDeck';
import { advisorSlides } from '@/content/advisor';

export const metadata: Metadata = {
  title: 'WhyDive Executive Brief',
  description: 'A private advisor orientation brief for understanding the WhyDive enterprise.',
};

export default function AdvisorOrientationPage() {
  return <AdvisorDeck slides={advisorSlides} />;
}
