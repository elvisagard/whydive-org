import { assetUrl } from '@/lib/assets';

export interface WhyDiveSpace {
  title: string;
  slug: string;
  eyebrow: string;
  summary: string;
  audience: string;
  scenario: {
    title: string;
    text: string;
  };
  image: {
    src: string;
    alt: string;
  };
  breakdown: string[];
  questions: string[];
  frameworkOffers: string[];
  practices: string[];
  featuredEssaySlugs?: string[];
}

export const whyDiveSpaces: WhyDiveSpace[] = [
  {
    title: 'Educators',
    slug: 'educators',
    eyebrow: 'Classrooms and learning communities',
    summary:
      'For teachers, school leaders, curriculum designers, and facilitators helping learners move from evidence to better judgment.',
    audience: 'Teachers, school leaders, curriculum teams, instructional coaches, homeschool leaders, and learning designers.',
    scenario: {
      title: 'The answer sounds confident, but the evidence is thin.',
      text: 'A student reads a chart, article, AI answer, or primary source and reaches a strong conclusion. The class can repeat the claim, but cannot yet show what evidence actually supports it or what remains uncertain.',
    },
    image: {
      src: assetUrl('/images/whydive/spaces-educators-documentary-banner.png'),
      alt: 'An educator guiding a small group discussion around printed evidence, notes, and questions.',
    },
    breakdown: [
      'Students mistake fluency for understanding.',
      'A single example becomes a general rule.',
      'Confidence rises before evidence has been examined.',
    ],
    questions: [
      'What does the learner think the evidence proves?',
      'What conclusion is justified, and what conclusion goes too far?',
      'What question would help the learner slow down without shutting down curiosity?',
    ],
    frameworkOffers: [
      'A shared language for evidence, reasoning, conclusion, judgment, decision, and action.',
      'Discussion prompts that turn charts, texts, and claims into judgment practice.',
      'A way to connect reading, data literacy, argument, and AI evaluation under one framework.',
    ],
    practices: [
      'Ask students to mark what the evidence supports, what it suggests, and what it does not authorize.',
      'Have learners revise an overconfident claim into a proportionate conclusion.',
      'Use WhyDive questions during class discussion before students defend an answer.',
    ],
  },
  {
    title: 'Clergy and Faith Leaders',
    slug: 'clergy-and-faith-leaders',
    eyebrow: 'Discernment, teaching, and community care',
    summary:
      'For pastors, ministers, spiritual directors, chaplains, and faith educators guiding people through belief, interpretation, counsel, and action.',
    audience: 'Clergy, ministry leaders, chaplains, spiritual directors, faith educators, and lay leaders.',
    scenario: {
      title: 'A community needs wisdom, not only information.',
      text: 'A leader is asked to interpret a difficult situation: a public controversy, a personal crisis, a moral decision, a sacred text, or a claim spreading through the congregation. People want certainty quickly, but the evidence, context, and responsibilities are complex.',
    },
    image: {
      src: assetUrl('/images/whydive/spaces-clergy-documentary-banner-v2.png'),
      alt: 'A small group seated around open books and notebooks in a contemplative discussion.',
    },
    breakdown: [
      'Conviction is mistaken for discernment.',
      'A partial story becomes the whole moral frame.',
      'Action is urged before limits, obligations, and alternatives are named.',
    ],
    questions: [
      'What do we actually know, and what have we only assumed?',
      'What would humility require before we speak or act?',
      'How do evidence, wisdom, tradition, character, and care belong together here?',
    ],
    frameworkOffers: [
      'A disciplined way to slow the passage from claim to counsel.',
      'Language for separating evidence, interpretation, judgment, and faithful action.',
      'A practical structure for discussion groups, leadership teams, and pastoral discernment.',
    ],
    practices: [
      'Before offering counsel, name what is known, unknown, inferred, and hoped.',
      'Use the framework to help groups distinguish interpretation from certainty.',
      'Invite the community to ask what judgment love and truth can responsibly support.',
    ],
    featuredEssaySlugs: ['in-the-beginning-god'],
  },
  {
    title: 'Business Executives',
    slug: 'business-executives',
    eyebrow: 'Strategy, risk, and organizational judgment',
    summary:
      'For leaders who must make consequential decisions from dashboards, forecasts, market signals, reports, and human testimony.',
    audience: 'Executives, founders, operators, managers, board members, strategists, and organizational decision-makers.',
    scenario: {
      title: 'The dashboard points one way, but the decision affects people.',
      text: 'A leadership team sees a trend in revenue, retention, customer behavior, hiring, or risk. The numbers are persuasive, but the choice will affect employees, customers, reputation, and long-term trust.',
    },
    image: {
      src: assetUrl('/images/whydive/spaces-business-documentary-banner.png'),
      alt: 'Business leaders reviewing printed reports and charts during a serious decision meeting.',
    },
    breakdown: [
      'A metric becomes a mandate.',
      'Speed is treated as clarity.',
      'Human consequences are separated from evidential claims.',
    ],
    questions: [
      'What decision is the data being asked to justify?',
      'What evidence is missing from the dashboard?',
      'What risk follows if the conclusion is stronger than the evidence?',
    ],
    frameworkOffers: [
      'A decision discipline for separating signal, interpretation, judgment, and action.',
      'A shared language for leadership teams reviewing evidence under pressure.',
      'A way to include ethical, reputational, and human consequences without abandoning evidence.',
    ],
    practices: [
      'Require every recommendation to name evidence strength and uncertainty.',
      'Ask what the dashboard cannot see before deciding what it proves.',
      'Use a judgment review before irreversible decisions.',
    ],
  },
  {
    title: 'Civic and Community Leaders',
    slug: 'civic-and-community-leaders',
    eyebrow: 'Public trust and shared decisions',
    summary:
      'For people helping communities reason through public claims, competing needs, limited evidence, and visible consequences.',
    audience: 'Civic leaders, nonprofit leaders, organizers, journalists, public communicators, moderators, and community advocates.',
    scenario: {
      title: 'A public claim becomes a public decision.',
      text: 'A community faces a claim about safety, schooling, housing, health, funding, or local priorities. People bring facts, stories, fear, values, and distrust into the same room.',
    },
    image: {
      src: assetUrl('/images/whydive/spaces-civic-documentary-banner-v2.png'),
      alt: 'Community members gathered in a public meeting around a map covered with notes.',
    },
    breakdown: [
      'The loudest claim becomes the working conclusion.',
      'Data is used to win rather than understand.',
      'People argue over outcomes before agreeing what the evidence supports.',
    ],
    questions: [
      'What evidence can everyone examine together?',
      'Which claims are supported, which are uncertain, and which are premature?',
      'What decision can carry both evidence and responsibility?',
    ],
    frameworkOffers: [
      'A public conversation structure that makes evidence boundaries visible.',
      'Prompts for community meetings, forums, articles, and civic education.',
      'A way to rebuild trust by showing how conclusions are formed.',
    ],
    practices: [
      'Separate shared evidence from disputed interpretation at the start of discussion.',
      'Ask participants to name what would change their confidence.',
      'Close meetings by identifying what judgment is justified now and what remains open.',
    ],
  },
  {
    title: 'Researchers and Policy Thinkers',
    slug: 'researchers-and-policy-thinkers',
    eyebrow: 'Evidence, limits, and public consequence',
    summary:
      'For people translating research, data, and analysis into claims that may shape policy, institutions, or public belief.',
    audience: 'Researchers, policy analysts, evaluators, graduate students, public scholars, and institutional reviewers.',
    scenario: {
      title: 'A finding travels farther than its evidence can carry it.',
      text: 'A study, evaluation, or model produces an important result. By the time it reaches a memo, grant report, media article, or policy meeting, its limitations have been softened and its conclusions strengthened.',
    },
    image: {
      src: assetUrl('/images/whydive/spaces-research-policy-documentary-banner.png'),
      alt: 'Researchers and policy thinkers reviewing notes, documents, and a laptop during a careful discussion.',
    },
    breakdown: [
      'Statistical significance becomes practical certainty.',
      'A limited sample becomes a universal claim.',
      'Limitations disappear as the finding moves through institutions.',
    ],
    questions: [
      'What does the evidence authorize in this specific context?',
      'Where should uncertainty remain visible?',
      'How should findings be communicated when people may act on them?',
    ],
    frameworkOffers: [
      'A bridge between technical evidence and responsible public judgment.',
      'Language for communicating limits without weakening legitimate findings.',
      'A structure for reviewing how research claims become institutional action.',
    ],
    practices: [
      'Write conclusions with their evidence boundaries intact.',
      'Track how claims change as they move from study to summary to decision.',
      'Use WhyDive questions in peer review, policy review, and public communication.',
    ],
  },
  {
    title: 'AI and Technology Teams',
    slug: 'ai-and-technology-teams',
    eyebrow: 'Generated answers and human judgment',
    summary:
      'For teams building, deploying, or relying on systems that produce fluent answers before human judgment has tested them.',
    audience: 'AI users, product teams, technology leaders, instructional technologists, compliance teams, and evaluators.',
    scenario: {
      title: 'The system gives an answer before the person has judged it.',
      text: 'A model produces a summary, recommendation, explanation, score, or generated response. It is fast, fluent, and plausible. The risk is not only that the answer may be wrong; it is that people may stop noticing where judgment is still required.',
    },
    image: {
      src: assetUrl('/images/whydive/spaces-ai-technology-documentary-banner.png'),
      alt: 'A technology team comparing digital outputs with printed notes and source material.',
    },
    breakdown: [
      'Fluency becomes credibility.',
      'Automation hides uncertainty.',
      'Human review becomes approval rather than judgment.',
    ],
    questions: [
      'What claim did the system produce?',
      'What evidence, source, or reasoning supports that claim?',
      'Where must a human still judge before action follows?',
    ],
    frameworkOffers: [
      'A practical audit path for generated claims.',
      'Language for distinguishing automated reasoning from human judgment.',
      'Prompts for AI literacy, product review, governance, and classroom use.',
    ],
    practices: [
      'Require generated claims to be traced to evidence before use.',
      'Build review steps around evidence, alternatives, uncertainty, and consequence.',
      'Teach users that verification is not the same thing as judgment.',
    ],
  },
];

export function getWhyDiveSpace(slug: string) {
  return whyDiveSpaces.find((space) => space.slug === slug);
}
