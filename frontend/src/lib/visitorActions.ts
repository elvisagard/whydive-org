import { livingSpiralContact } from '@/lib/siteContent';

const discussionSubject = encodeURIComponent('WhyDive discussion invitation');
const discussionBody = encodeURIComponent(
  [
    'Hello Elvis,',
    '',
    'I am writing about WhyDive and would like to invite a discussion.',
    '',
    'Context:',
    '- Organization or learning community:',
    '- Topic or question:',
    '- Preferred format:',
    '',
    'Thank you.',
  ].join('\n'),
);

export const discussionHref = `${livingSpiralContact.emailHref}?subject=${discussionSubject}&body=${discussionBody}`;

export const discussionAction = {
  label: 'Invite a discussion',
  href: discussionHref,
  description:
    'Use this when your learning community, school, team, church, research group, or organization wants to examine the framework together.',
};

export const shareAction = {
  label: 'Share with a learning community',
  href: '/foundations/strong-conclusions-require-strong-evidence',
  description:
    'Post the central principle as a discussion prompt: What conclusions are justified by the evidence available?',
};

export const traceApplicationsAction = {
  label: 'Trace the applications',
  href: '/ecosystem',
  description:
    'See how WhyDive relates to WhyDive Education, the Data Literacy Standards, Chart-Ed Institute, and Chart-Ed.',
};

export const readFoundationsAction = {
  label: 'Read the foundations',
  href: '/foundations',
  description:
    'Start with the pages that define the framework before moving into essays, whitepapers, and applications.',
};
