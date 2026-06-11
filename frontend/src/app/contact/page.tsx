import type { Metadata } from 'next';
import { EditorialPage, QuietCard, SectionHeading, VisitorActionPanel } from '@/components/site/EditorialPage';
import { livingSpiralContact } from '@/lib/siteContent';
import { discussionAction, readFoundationsAction, traceApplicationsAction } from '@/lib/visitorActions';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact information for WhyDive through Living Spiral Studio LLC.',
};

export default function ContactPage() {
  return (
    <EditorialPage
      eyebrow="Contact"
      title="WhyDive currently uses Living Spiral Studio LLC contact information."
      intro="Use this page for invitations, questions, correspondence, and ecosystem clarification related to WhyDive."
      image={{
        src: '/images/whydive/contact-letter-banner.png',
        alt: 'A simple letter on warm paper beside a dark pen and brass paperweight.',
      }}
    >
      <SectionHeading title="Public contact">
        <p>
          WhyDive is currently owned and operated by Living Spiral Studio LLC. The contact
          information below is the appropriate contact path for WhyDive-related inquiries.
        </p>
      </SectionHeading>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <QuietCard title={livingSpiralContact.legalName} eyebrow="Legal identity">
          <div className="space-y-1">
            {livingSpiralContact.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </QuietCard>
        <QuietCard title="Phone" eyebrow="Contact">
          <a className="font-semibold text-[#6f551e]" href={livingSpiralContact.phoneHref}>
            {livingSpiralContact.phone}
          </a>
        </QuietCard>
        <QuietCard title="Email" eyebrow="Contact">
          <a className="font-semibold text-[#6f551e]" href={livingSpiralContact.emailHref}>
            {livingSpiralContact.email}
          </a>
        </QuietCard>
      </div>

      <VisitorActionPanel
        title="Use contact when the work needs a conversation."
        benefit="WhyDive is still being defined in public. Reach out when you want to invite a discussion, explore a partnership, suggest a research connection, or clarify which part of the ecosystem fits your need."
        actions={[discussionAction, readFoundationsAction, traceApplicationsAction]}
      />
    </EditorialPage>
  );
}
