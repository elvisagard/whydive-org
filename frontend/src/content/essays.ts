import type { EssayCategory, EssayEntry } from './types';
import { assetUrl } from '@/lib/assets';

export const essayCategories: EssayCategory[] = [
  {
    title: 'Judgment',
    slug: 'judgment',
    description: 'How people form, discipline, and communicate judgment under uncertainty.',
  },
  {
    title: 'Evidence',
    slug: 'evidence',
    description: 'What evidence can authorize, what it cannot authorize, and why overclaiming matters.',
  },
  {
    title: 'Decision-Making',
    slug: 'decision-making',
    description: 'How conclusions and judgments become decisions that shape action.',
  },
  {
    title: 'Wisdom',
    slug: 'wisdom',
    description: 'The habits, virtues, and restraints that help judgment become wise.',
  },
  {
    title: 'Human Formation',
    slug: 'human-formation',
    description: 'Character, humility, discernment, and the formation of evidence-bound people.',
  },
  {
    title: 'AI and Human Reasoning',
    slug: 'ai-and-human-reasoning',
    description: 'How people should evaluate fluent synthetic claims and AI-generated answers.',
  },
  {
    title: 'Public Discourse',
    slug: 'public-discourse',
    description: 'Claims, arguments, evidence, and judgment in shared civic life.',
  },
  {
    title: 'Ethics and Stewardship',
    slug: 'ethics-and-stewardship',
    description: 'The moral responsibilities that surround evidence, claims, and public action.',
  },
  {
    title: 'Human Flourishing',
    slug: 'human-flourishing',
    description: 'Why disciplined judgment matters for lives, institutions, and societies.',
  },
];

export const essayEntries: EssayEntry[] = [
  {
    title: 'Strong Conclusions Require Strong Evidence',
    slug: 'strong-conclusions-require-strong-evidence',
    deck: 'The governing principle beneath the WhyDive framework.',
    category: 'evidence',
    status: 'draft',
    image: assetUrl('/images/whydive/essays-archive-social.png'),
  },
  {
    title: 'Why Judgment Matters',
    slug: 'why-judgment-matters',
    deck: 'More information does not automatically produce better judgment. WhyDive begins with the movement from evidence to reasoning to judgment.',
    category: 'judgment',
    status: 'published',
    publicationDate: 'June 2026',
    readingTime: '8 minute read',
    image: assetUrl('/images/whydive/essays-study-table-banner.png'),
    sourceNote:
      'This essay is based on internal WhyDive framework and ecosystem documents developed by Living Spiral Studio LLC. It is a framework essay, not a literature review.',
    bibliography: [
      'Living Spiral Studio LLC / WhyDive. "WhyDive Foundational Thesis." Internal framework document.',
      'Living Spiral Studio LLC / WhyDive. "WhyDive Worldview." Internal worldview document.',
      'Living Spiral Studio LLC / WhyDive. "WhyDive.org Parent Entity Direction." Internal strategy document, 2026.',
      'Living Spiral Studio LLC / WhyDive. "WhyDive Public Positioning Architecture." Internal positioning document, 2026.',
    ],
    sections: [
      {
        paragraphs: [
          'People do not live inside information.',
          'They live inside judgment.',
          'A person reads a report and decides what it means. A leader looks at several imperfect signals and decides what to prioritize. A teacher watches a student struggle and decides what kind of help the student needs. A citizen hears a public argument and decides what to believe. A parent, pastor, principal, founder, researcher, or friend weighs partial evidence and decides what should be said or done next.',
          'Information matters. Evidence matters. Reasoning matters.',
          'But human life does not stop with information, evidence, or reasoning. It moves toward judgment.',
          'In this essay, judgment means the act of forming and carrying a conclusion in proportion to the evidence available, in light of what is at stake.',
          'That is why judgment matters.',
        ],
      },
      {
        title: 'Information Is Not Enough',
        paragraphs: [
          'Much of modern life assumes that the central problem is access to information. If people can find more data, read more reports, see more charts, hear more experts, or ask more powerful tools, then better decisions should follow.',
          'Sometimes they do.',
          'But more information does not automatically produce better judgment.',
          'Information can be accurate and still be misused. Evidence can be relevant and still be overstated. A chart can show a real pattern while people draw a conclusion the chart cannot support. A fluent explanation can sound reasonable while hiding weak evidence. A report can be useful while leaving important uncertainty unresolved.',
          'The harder problem is not only whether people have information.',
          'The harder problem is what people do with it.',
          'WhyDive begins there.',
        ],
      },
      {
        title: 'Reasoning Serves Judgment',
        paragraphs: [
          'Reasoning is the work of examining evidence. It asks what the evidence means, what it supports, what it does not support, what assumptions are being made, and what alternatives remain possible.',
          'That work is essential.',
          'But reasoning is not the final destination. Reasoning serves judgment.',
          'Judgment is where people determine what should be believed, communicated, prioritized, or done. Judgment is where evidence meets responsibility. It is where a person decides whether a conclusion is strong enough to carry, whether a claim should be spoken, whether uncertainty should be preserved, whether action is justified, and whether restraint is required.',
          'This is why WhyDive does not treat reasoning as an abstract mental exercise.',
          'Reasoning matters because judgment matters.',
          'And judgment matters because decisions and actions have consequences.',
        ],
      },
      {
        title: 'The Problem of Conclusions That Outrun Evidence',
        paragraphs: [
          'Poor judgment often begins when a conclusion becomes stronger than the evidence behind it.',
          'That can happen quietly.',
          'An example becomes a rule. A possibility becomes a probability. A trend becomes a prediction. A correlation becomes a cause. A confident explanation becomes a justified claim. A partial data point becomes a sweeping conclusion.',
          'WhyDive calls attention to that movement because it is easy to miss. People often see the conclusion, decision, or action. They do not always see how the mind traveled from evidence to interpretation to judgment.',
          'That hidden movement matters.',
          'If the evidence is strong, a strong conclusion may be appropriate. If the evidence is limited, the conclusion should remain limited. If the evidence is incomplete, the judgment should preserve uncertainty. If the evidence does not support the claim, the claim should not be carried as though it does.',
          'The opposite failure also matters. Judgment can weaken through under-claiming, excessive caution, deference, or refusal to decide when the evidence is strong enough to require action. WhyDive is not a discipline of endless hedging. It is a discipline of proportion.',
          'This is the central WhyDive discipline: strong conclusions require strong evidence.',
        ],
      },
      {
        title: 'Judgment Is More Than Evidence',
        paragraphs: [
          'WhyDive is serious about evidence, but it does not reduce judgment to evidence alone.',
          'Human beings bring values, character, purpose, worldview, obligations, relationships, and community commitments into judgment. Evidence can inform what should be believed or done, but it does not replace wisdom, ethics, faith, philosophy, courage, humility, or care.',
          'That distinction matters.',
          'WhyDive does not ask people to pretend that evidence answers every human question. It asks people to be honest about what the evidence does and does not authorize as they form judgment.',
          'In other words, WhyDive disciplines the pathway through which evidence enters judgment.',
          'That pathway is often where overclaiming begins.',
        ],
      },
      {
        title: 'Judgment Under Constraints',
        paragraphs: [
          'Most real judgments happen before all uncertainty is resolved.',
          'Evidence may be incomplete. It may be contested. It may be emotionally charged. It may come through charts, texts, institutions, algorithms, authorities, stories, or personal experience. It may support more than one possible interpretation.',
          'Responsible judgment does not always have the luxury of waiting for perfect evidence.',
          'But it can still be disciplined.',
          'These questions are not merely a generic critical-thinking checklist. They are WhyDive\'s way of asking whether a conclusion remains proportionate to the evidence that carries it.',
          'Disciplined judgment asks:',
        ],
        bullets: [
          'What do we know?',
          'How do we know it?',
          'What are we assuming?',
          'What remains uncertain?',
          'What conclusion is warranted?',
          'What would be an overclaim?',
        ],
      },
      {
        title: 'Why This Matters Now',
        paragraphs: [
          'The need for judgment is growing, not shrinking.',
          'People are surrounded by more information than ever. They encounter dashboards, headlines, research summaries, AI-generated explanations, public claims, institutional statements, personal stories, and persuasive arguments every day.',
          'The danger is not only that some information is false.',
          'The danger is that even true information can be carried into conclusions it does not support.',
          'That is why judgment matters for education, leadership, public discourse, artificial intelligence, faith, business, policy, and ordinary life. The domain changes. The human movement remains: evidence becomes reasoning. Reasoning shapes judgment. Judgment shapes action. Action carries consequences.',
          'WhyDive exists to make that movement visible.',
        ],
      },
      {
        title: 'A Better Kind of Strength',
        paragraphs: [
          'Strong judgment is not loud certainty.',
          'It is not the refusal to change your mind. It is not confidence without proportion. It is not the ability to make a claim sound persuasive.',
          'Strong judgment is disciplined enough to match the strength of its conclusion to the strength of its evidence.',
          'It can say yes when evidence is strong. It can say maybe or not yet when evidence is partial. It can say I was wrong when evidence changes.',
          'It can say the evidence does not support that claim, even when the claim is useful, popular, or emotionally satisfying.',
          'That kind of judgment is not weakness.',
          'It is strength under evidence constraints.',
        ],
      },
      {
        title: 'The WhyDive Invitation',
        paragraphs: [
          'WhyDive is built around a question: what conclusions are justified by the evidence available?',
          'That question belongs wherever people form beliefs, make claims, guide others, interpret evidence, or decide what to do next.',
          'It belongs in schools. It belongs in leadership. It belongs in public discourse. It belongs around AI. It belongs in ordinary conversation. It belongs anywhere conclusions carry consequences.',
          'Judgment matters because life does not end at information.',
          'People believe, communicate, decide, act, and live with what follows.',
          'So the question is not only whether we have information.',
          'The question is whether our judgment is worthy of the evidence we have.',
          'Strong conclusions require strong evidence.',
        ],
      },
    ],
  },
  {
    title: 'The Judgment Problem in the Age of AI',
    slug: 'the-judgment-problem-in-the-age-of-ai',
    deck: 'How to respond when fluent answers sound convincing before their claims have been judged.',
    category: 'ai-and-human-reasoning',
    status: 'planned',
  },
];
