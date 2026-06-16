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
    deck: 'AI has made it easier to get an answer. It has not made it easier to know what an answer is worth.',
    category: 'ai-and-human-reasoning',
    status: 'published',
    publicationDate: 'June 2026',
    readingTime: '10 minute read',
    image: assetUrl('/images/whydive/judgment-problem-age-of-ai-approved-hero.png'),
    sourceNote:
      'This essay uses internal WhyDive framework sources and selected external sources on AI hallucination, risk management, AI literacy, AI trends, and human-AI reliance. It is not a systematic review of AI safety or cognitive science.',
    bibliography: [
      {
        label: 'OpenAI. "Why language models hallucinate." September 5, 2025.',
        href: 'https://openai.com/index/why-language-models-hallucinate/',
      },
      {
        label: 'National Institute of Standards and Technology. "AI Risk Management Framework." Released January 26, 2023.',
        href: 'https://www.nist.gov/itl/ai-risk-management-framework',
      },
      {
        label:
          'Annapureddy, Ravinithesh, Alessandro Fornaroli, and Daniel Gatica-Perez. "Generative AI Literacy: Twelve Defining Competencies." arXiv, 2024.',
        href: 'https://arxiv.org/abs/2412.12107',
      },
      {
        label: 'Maslej, Nestor, et al. "Artificial Intelligence Index Report 2025." arXiv, 2025.',
        href: 'https://arxiv.org/abs/2504.07139',
      },
      {
        label:
          'Alon-Barkat, Saar, and Madalina Busuioc. "Human-AI Interactions in Public Sector Decision-Making: Automation Bias and Selective Adherence to Algorithmic Advice." arXiv, 2021.',
        href: 'https://arxiv.org/abs/2103.02381',
      },
      {
        label:
          'Visser, Roel, Tobias M. Peters, Ingrid Scharlau, and Barbara Hammer. "Trust, distrust, and appropriate reliance in (X)AI: a survey of empirical evaluation of user trust." arXiv, 2023.',
        href: 'https://arxiv.org/abs/2312.02034',
      },
      {
        label:
          'Chen, Valerie, Q. Vera Liao, Jennifer Wortman Vaughan, and Gagan Bansal. "Understanding the Role of Human Intuition on Reliance in Human-AI Decision-Making with Explanations." arXiv, 2023.',
        href: 'https://arxiv.org/abs/2301.07255',
      },
      {
        label:
          'Sperber, Dan, Fabrice Clement, Christophe Heintz, Olivier Mascaro, Hugo Mercier, Gloria Origgi, and Deirdre Wilson. "Epistemic Vigilance." Mind & Language 25, no. 4 (2010): 359-393.',
        href: 'https://doi.org/10.1111/j.1468-0017.2010.01394.x',
      },
    ],
    sections: [
      {
        paragraphs: [
          'AI has made it easier to get an answer.',
          'It has not made it easier to know what an answer is worth.',
          'That is the judgment problem in the age of AI.',
          'A person can ask a system for an explanation, summary, plan, argument, source list, lesson, diagnosis, recommendation, or decision aid and receive something fluent within seconds. The answer may be useful. It may be partly useful. It may be wrong. It may be right about one thing and careless about another. It may sound more certain than the evidence allows.',
          'The old problem was scarcity: not enough information, not enough access, not enough speed.',
          'The new problem is not simply abundance.',
          'It is fluent abundance.',
          'AI can produce language that sounds like reasoning before the human being has judged whether the reasoning is warranted.',
        ],
      },
      {
        title: 'Fluency Is Not Judgment',
        paragraphs: [
          'Fluency has power.',
          'A fluent answer feels finished. It moves smoothly. It gives the mind a path to follow. It can make an uncertain question feel settled before the evidence has been examined.',
          'That does not make AI useless.',
          'It means AI has to be placed inside a discipline of judgment.',
          'The question is not only: what did the system say?',
          'The deeper question is: what does this output authorize me to believe, say, or do?',
          'Authorization is the difference between noticing an answer and letting that answer carry weight. An output may authorize a tentative inference, but not a recommendation. It may support a question to investigate, but not an action to take. It may provide language worth revising, but not a claim worth publishing. Judgment has to decide how far the output can responsibly travel.',
          'That is a WhyDive question.',
          'WhyDive begins from the principle that strong conclusions require strong evidence. In the age of AI, that principle becomes more important, not less. The system may generate a confident answer, but confidence is not justification. The sentence may be clear, but clarity is not evidence. The summary may be persuasive, but persuasion is not warrant.',
          'The human being still has to judge.',
        ],
      },
      {
        title: 'The Problem of Confident Error',
        paragraphs: [
          'AI systems can produce wrong or unsupported information in a fluent form. OpenAI\'s own explanation of language-model hallucination notes that some evaluation systems can reward guessing more than honest uncertainty. A model that guesses may sometimes score better than a model that abstains, even though confident errors are more dangerous than admitting uncertainty.',
          'That matters because human beings are vulnerable to finished-sounding answers.',
          'The danger is easiest to see in ordinary professional use. A lawyer asks an AI system for supporting cases and receives citations that look real. A school leader asks for a research summary and receives a paragraph that blends actual findings with claims the source did not make. A health professional asks for a plain-language explanation and receives something plausible that omits a crucial uncertainty. In each case, the problem is not only that the answer may be false. The problem is that the answer arrives in a form that invites use before verification.',
          'If a system says "I do not know," the user remains aware that judgment is still required. If a system gives a polished answer, the user may feel that judgment has already happened.',
          'But the system has not taken responsibility for the conclusion.',
          'The user has.',
          'The problem is not that AI sometimes makes mistakes. Human beings make mistakes too. The deeper problem is that AI can make a mistake in a form that feels more complete than it is.',
          'That is why the age of AI is not only an information age.',
          'It is a judgment age.',
        ],
      },
      {
        title: 'AI Literacy Is Not Just Prompting',
        paragraphs: [
          'Many people respond to AI by learning better prompts.',
          'That is useful, but it is not enough.',
          'Generative AI literacy has to include an understanding of capabilities, limitations, ethical concerns, context, and responsible use. A person who knows how to get an impressive answer but does not know how to evaluate its evidence is not yet prepared for responsible AI use.',
          'Prompting can improve the output. Judgment evaluates what the output is allowed to carry. Those are different skills.',
          'If the AI writes a summary, judgment asks whether the source was represented fairly. If the AI lists citations, judgment asks whether the citations exist and say what the answer claims. If the AI gives advice, judgment asks what assumptions, risks, and missing evidence remain. If the AI drafts an argument, judgment asks whether the conclusion has outrun the support.',
          'The age of AI does not eliminate epistemic responsibility.',
          'It distributes more language into the world that requires it.',
          'The reason prompting is not enough becomes clearer when we consider how humans actually interact with automated systems.',
          'This is why the judgment problem is connected to older research on automation bias, overreliance, calibrated trust, and epistemic vigilance. People do not simply evaluate automated systems from a neutral distance. They may defer to a system because it appears precise, because it reduces effort, because it speaks with authority, or because it confirms what they already hoped was true. Responsible AI use therefore requires more than access and efficiency. It requires habits of verification, restraint, and proportion.',
        ],
      },
      {
        title: 'Risk Management Begins With the Human Question',
        paragraphs: [
          'Organizations need technical safeguards, policies, governance, and risk-management systems. NIST\'s AI Risk Management Framework exists because AI risk is not solved by enthusiasm or tool access. Trustworthiness has to be considered in design, development, use, and evaluation.',
          'WhyDive does not replace that work.',
          'It names the human judgment problem inside it.',
          'Even when a system is governed well, people still decide how to use its outputs. They decide whether to trust a summary, forward a recommendation, publish a paragraph, rely on a classification, accept a source list, or act on an answer.',
          'The judgment question appears at each point:',
        ],
        bullets: [
          'What evidence supports this output?',
          'What is missing?',
          'What uncertainty is being hidden by fluency?',
          'What assumptions are built into the answer?',
          'What would I be overclaiming if I used this?',
          'What human responsibility remains mine?',
        ],
      },
      {
        title: 'The Antidote Is Proportion',
        paragraphs: [
          'These questions do not make AI less useful.',
          'They make its use more honest.',
          'The antidote is not suspicion of every AI output.',
          'The antidote is proportion.',
          'If the output is well supported, use it carefully. If it is plausible but unverified, treat it as a lead, not a conclusion. If it cannot show its evidence, do not let it carry a claim that requires evidence. If the stakes are high, slow down.',
          'Strong conclusions require strong evidence, even when the sentence was generated quickly.',
        ],
      },
      {
        title: 'What Human Judgment Must Do Now',
        paragraphs: [
          'The central human task is changing.',
          'People do not only need to learn how to ask AI for better answers. They need to learn how to judge what those answers can responsibly support.',
          'That means asking:',
        ],
        bullets: [
          'Is this answer grounded in sources I can inspect?',
          'Does it distinguish fact, inference, speculation, and recommendation?',
          'Does it admit uncertainty where uncertainty remains?',
          'Does it preserve the limits of the evidence?',
          'Does it invite verification, or does it replace it?',
          'Am I using this output to think more carefully, or to skip judgment?',
        ],
      },
      {
        title: 'WhyDive in the Age of AI',
        paragraphs: [
          'WhyDive exists to strengthen judgment by helping people align conclusions with evidence.',
          'That mission becomes sharper in the age of AI because AI changes the speed, volume, and fluency of the material entering human judgment.',
          'The question is no longer only whether people can find information.',
          'The question is whether they can judge the status of an answer when the answer arrives already dressed in confidence.',
          'AI can help people think.',
          'It can also help people overclaim.',
          'The difference depends partly on tools, systems, governance, and design. But it also depends on human beings who know how to ask what the evidence authorizes and what it does not.',
          'That makes this more than a private productivity issue. In education, students will need to learn not only how to use AI, but how to test the claims AI helps them produce. In organizations, leaders will need to distinguish faster reporting from better judgment. In public discourse, citizens will need to recognize when fluent language is carrying weak evidence. In professional life, people will need to remember that delegating part of a task does not delegate responsibility for the conclusion.',
          'The judgment problem in the age of AI is not that machines are thinking for us.',
          'It is that we may mistake fluent output for completed judgment.',
          'That mistake is avoidable.',
          'But only if we keep the human question alive: what conclusions are justified by the evidence available?',
          'Strong conclusions require strong evidence.',
        ],
      },
    ],
  },
];
