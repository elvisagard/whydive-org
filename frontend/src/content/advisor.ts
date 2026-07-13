export type AdvisorDeepDive = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  links?: Array<{ label: string; href: string; note: string }>;
  sections: Array<{
    heading: string;
    body: string[];
    points?: string[];
    visual?: 'sequence' | 'cycle' | 'layers' | 'ecosystem';
  }>;
};

export type AdvisorSlide = {
  id: string;
  act: string;
  question: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  layout:
    | 'title'
    | 'flow'
    | 'stack'
    | 'inventory'
    | 'beachhead'
    | 'architecture'
    | 'engines'
    | 'focus'
    | 'timeline'
    | 'guidance'
    | 'success'
    | 'questions'
    | 'comparison';
  points?: string[];
  flow?: string[];
  comparison?: {
    leftTitle: string;
    rightTitle: string;
    left: string[];
    right: string[];
    statement: string;
  };
  notes?: string[];
  links?: Array<{ label: string; href: string }>;
};

export const advisorDeepDives: AdvisorDeepDive[] = [
  {
    slug: 'framework',
    eyebrow: 'Understanding',
    title: 'Understanding the Framework',
    summary:
      'WhyDive is the parent framework for strengthening judgment by aligning conclusions with evidence.',
    links: [
      {
        label: 'WhyDive ecosystem',
        href: 'https://whydive.org/ecosystem',
        note: 'Entity map for the parent framework, education branch, standards path, and product expressions.',
      },
      {
        label: 'WhyDive applications',
        href: 'https://whydive.org/applications',
        note: 'Current and future domains that grow from the same evidence-bound reasoning pattern.',
      },
      {
        label: 'Chart-Ed Institute',
        href: 'https://chart-ed.cc/en',
        note: 'Standards-facing expression of the evidence, ethics, and data-literacy architecture.',
      },
      {
        label: 'Data Literacy Standards',
        href: 'https://chart-ed.cc/en/standards/the-dls-standard',
        note: 'Domain standards that show how one WhyDive application becomes developmental levels.',
      },
    ],
    sections: [
      {
        heading: 'One-sentence definition',
        body: [
          'WhyDive is a framework for improving human judgment by making the movement from evidence to action visible, bounded, and proportional.',
          'It is not the same thing as Chart-Ed, WhyDive Education, the Data Literacy Standards, or any one product line. Those are expressions of the parent framework.',
        ],
      },
      {
        heading: 'Core claim',
        body: [
          'WhyDive begins with a simple discipline: the strength of a conclusion should not exceed the strength of the evidence supporting it.',
          'The framework focuses on the movement from evidence to reasoning, from reasoning to judgment, and from judgment to decision.',
        ],
        points: ['Evidence', 'Reasoning', 'Conclusion', 'Judgment', 'Decision'],
        visual: 'sequence',
      },
      {
        heading: 'Architecture layers',
        body: [
          'The ecosystem is organized in layers. The framework defines the reasoning principles. Services adapt those principles to professional domains. Applications make the service usable. Products place the application into practical hands.',
        ],
        points: ['Framework', 'Services', 'Applications', 'Products'],
        visual: 'layers',
      },
      {
        heading: 'Ecosystem relationships',
        body: [
          'WhyDive is the parent framework. Its service layer can adapt the same evidence-bound reasoning architecture to business, healthcare, education, policy, AI, research, leadership, and other domains.',
          'Education is the current worked example because it is the most mature service area today. Inside that worked example, WhyDive Education is the district-facing diagnostic service. WhyDive Reading and WhyDive Charts are diagnostic branches. The Data Literacy Standards are a standards application in chart and data reasoning. Chart-Ed Institute stewards that standards work, while Chart-Ed turns the DLS into teacher-facing classroom products and revenue.',
        ],
        points: [
          'WhyDive',
          'Education',
          'Business',
          'Healthcare',
          'Policy',
          'AI',
          'Research',
          'WhyDive Education',
          'WhyDive Reading',
          'WhyDive Charts',
          'Data Literacy Standards',
          'Chart-Ed Institute',
          'Chart-Ed',
        ],
        visual: 'ecosystem',
      },
      {
        heading: 'Why this matters commercially',
        body: [
          'The framework is intellectual capital. Products, services, applications, research, standards, diagnostics, publications, and future domains are expressions of that capital.',
          'Chart-Ed is the clearest proof that the framework can become standards, assessments, classroom resources, professional learning, authority, and revenue. It is a flagship application, not the whole mission.',
        ],
      },
    ],
  },
  {
    slug: 'business-model',
    eyebrow: 'Business',
    title: 'How the Business Works',
    summary:
      'WhyDive creates value by turning a judgment framework into useful products, services, applications, and authority.',
    links: [
      {
        label: 'Chart-Ed product lines',
        href: 'https://chart-ed.com/products',
        note: 'Teacher-facing commercial products organized around evidence tasks.',
      },
      {
        label: 'WhyDive Education',
        href: 'https://whydive.education/',
        note: 'District-facing diagnostic branch that shows the framework moving toward institutional services.',
      },
    ],
    sections: [
      {
        heading: 'Why customers pay',
        body: [
          'Customers rarely pay for information by itself. They pay for better outcomes: stronger reasoning, clearer instruction, better decisions, and greater confidence that conclusions stay inside what the evidence can actually support.',
          'Teachers do not buy Chart-Ed because they lack charts. Charts are widely available. They buy it because they want students who reason more effectively from evidence. Districts will not buy WhyDive because they need another assessment. They will buy it if it helps them understand how students reason in ways traditional assessments often miss.',
          'The product is stronger judgment.',
        ],
      },
      {
        heading: 'Value creation cycle',
        body: [
          'The business model compounds through research, framework development, service development, applications, products, revenue, reinvestment, and improved framework capacity.',
          'The goal is not scattered growth. The goal is cumulative capability.',
        ],
        points: ['Research', 'Framework', 'Services', 'Applications', 'Products', 'Revenue', 'Reinvestment'],
        visual: 'cycle',
      },
      {
        heading: 'Revenue logic',
        body: [
          'The current commercial center is education because it offers a practical first market, immediate product value, and a credible path toward evidence, authority, and larger service capacity.',
        ],
        points: ['Teacher products', 'Pilots', 'Subscriptions', 'Professional learning', 'Future services'],
        visual: 'sequence',
      },
    ],
  },
  {
    slug: 'commercialization',
    eyebrow: 'Execution',
    title: 'Commercialization Roadmap',
    summary:
      'WhyDive should grow in stages, expanding only into what the current stage can responsibly sustain.',
    links: [
      {
        label: 'Chart-Ed store',
        href: 'https://chart-ed.com/store',
        note: 'Current revenue channel with searchable classroom products.',
      },
      {
        label: 'WhyDive Education Trust Center',
        href: 'https://whydive.education/trust-center',
        note: 'Procurement-facing trust and district readiness materials for later-stage adoption.',
      },
    ],
    sections: [
      {
        heading: 'Current stage',
        body: [
          'WhyDive is in the foundation stage: proving customer value, improving acquisition, strengthening the product portfolio, and gathering evidence.',
          'The main challenge is commercialization and execution, not invention.',
        ],
        points: ['Recurring product sales', 'Marketing systems', 'Pilot evidence', 'Subscriptions', 'Operational discipline'],
      },
      {
        heading: 'Strategic discipline',
        body: [
          'The roadmap explicitly avoids premature hiring, unrelated market expansion, borrowing to cover operating losses, and chasing opportunities outside the strategic sequence.',
        ],
      },
    ],
  },
  {
    slug: 'products',
    eyebrow: 'Assets',
    title: 'Current Products and Infrastructure',
    summary:
      'The enterprise already has real assets: product lines, store infrastructure, teacher marketplaces, catalog channels, assessment architecture, publications, and a pilot path.',
    links: [
      {
        label: 'Chart-Ed store',
        href: 'https://chart-ed.com/store',
        note: '122 available products and product filters.',
      },
      {
        label: 'Chart generator',
        href: 'https://chart-ed.com/create',
        note: 'Classroom chart tool for creating teacher-ready visuals.',
      },
      {
        label: 'WhyDive Charts',
        href: 'https://whydive.education/charts',
        note: 'Diagnostic branch for chart, graph, quantitative claim, and data-based reasoning.',
      },
      {
        label: 'WhyDive Reading',
        href: 'https://whydive.education/reading',
        note: 'Diagnostic branch for textual evidence, inference, and bounded conclusions.',
      },
    ],
    sections: [
      {
        heading: 'What exists today',
        body: [
          'WhyDive is not starting from an idea alone. It already has framework writing, four Chart-Ed product lines, 122 store products, TPT and Classful marketplace presence, a Pinterest catalog, store infrastructure, Stripe, websites, whitepapers, and assessment architecture.',
        ],
        points: [
          'WhyDive Framework',
          'Chart-Ed',
          'Chart-Ed Institute',
          '122 products',
          'Four product families',
          'TPT store',
          'Classful store',
          'Pinterest catalog',
          'Pilot school',
          'Stripe and store infrastructure',
        ],
      },
      {
        heading: 'Advisor relevance',
        body: [
          'The useful question is how to sequence, package, price, market, and fund the assets that already exist.',
        ],
      },
      {
        heading: 'Competitive framing',
        body: [
          'Advisors may initially compare Chart-Ed to free chart sources. That comparison is too narrow. The real comparison is raw information versus the development of judgment.',
          'Free chart providers publish excellent data and visuals. Chart-Ed uses charts as evidence so students can practice reasoning, support conclusions, and keep claims inside what the evidence can responsibly carry.',
          'The chart is not the product. Judgment is the product.',
        ],
        points: ['Raw information', 'Evidence task', 'Reasoning practice', 'Judgment development'],
        visual: 'sequence',
      },
    ],
  },
  {
    slug: 'advisor-questions',
    eyebrow: 'Guidance',
    title: 'Where Advisor Guidance Is Needed',
    summary:
      'The advisor role is to help sharpen commercialization, risk, capital choices, partnerships, and sequence.',
    links: [
      {
        label: 'Chart-Ed product lines',
        href: 'https://chart-ed.com/products',
        note: 'Useful for pricing, packaging, bundling, and product-line strategy conversations.',
      },
      {
        label: 'WhyDive Education contact path',
        href: 'https://whydive.education/#contact',
        note: 'Shows the district conversation-first entry point for institutional opportunities.',
      },
    ],
    sections: [
      {
        heading: 'Immediate guidance areas',
        body: [
          'WhyDive needs experienced feedback on where the business model is weakest, what assumptions are riskiest, what should be prioritized first, and what programs or introductions are worth pursuing.',
        ],
        points: ['Commercialization', 'Marketing', 'Pricing', 'Capital allocation', 'Hiring', 'Scaling', 'Partnerships'],
      },
      {
        heading: 'Important framing',
        body: [
          'This is guidance, not rescue. The architecture is coherent and the assets are real. The next challenge is disciplined execution.',
        ],
      },
    ],
  },
];

export const advisorSlides: AdvisorSlide[] = [
  {
    id: 'whydive',
    act: 'Act I',
    question: 'Who are you?',
    layout: 'title',
    title: 'WhyDive',
    subtitle: 'Strengthening judgment by aligning conclusions with evidence.',
    links: [{ label: 'Framework overview', href: '/advisor/deep-dive/framework' }],
  },
  {
    id: 'why-exist',
    act: 'Act I',
    question: 'Why does WhyDive exist?',
    layout: 'flow',
    eyebrow: 'The human problem',
    title: 'The world has solved information. It has not yet solved judgment.',
    flow: ['Evidence', 'Reasoning', 'Judgment', 'Decision'],
    notes: [
      'This slide establishes the core problem. WhyDive is not arguing that people lack access to information. It is arguing that information does not automatically become sound judgment.',
      'The sequence shows the missing work between seeing evidence and making a decision. Advisors should understand that WhyDive is focused on that movement, not on content delivery alone.',
    ],
    links: [{ label: 'Understanding the framework', href: '/advisor/deep-dive/framework' }],
  },
  {
    id: 'business-thesis',
    act: 'Act I',
    question: 'Why is this a good business?',
    layout: 'focus',
    eyebrow: 'Business thesis',
    title:
      'The world has invested heavily in helping people acquire information. WhyDive exists to help people determine what that information actually justifies them in believing, deciding, and doing.',
    points: ['Real problem', 'Market gap', 'Willingness to pay', 'Expandable framework'],
    notes: [
      'This is the business thesis in one sentence. It answers why the problem is real, why current tools do not fully solve it, and why customers would pay for a practical system.',
      'Use this slide to shift the advisor from asking whether people need more content to asking whether people need better judgment from the content, data, charts, reports, and AI answers they already have.',
    ],
    links: [{ label: 'Business model', href: '/advisor/deep-dive/business-model' }],
  },
  {
    id: 'what-kind',
    act: 'Act I',
    question: 'What kind of company is this?',
    layout: 'stack',
    eyebrow: 'Mental model',
    title: 'WhyDive is a framework-centered enterprise.',
    subtitle:
      'It turns intellectual capital into products, services, applications, research, and institutional capacity.',
    points: ['Framework', 'Services', 'Applications', 'Products'],
    notes: [
      'This is the mental model slide. WhyDive should not be understood as one website, one product, or one education brand.',
      'The important point is that the framework is the parent asset. Products and services are expressions of that intellectual capital.',
    ],
    links: [{ label: 'How the business works', href: '/advisor/deep-dive/business-model' }],
  },
  {
    id: 'why-now',
    act: 'Act I',
    question: 'Why now?',
    layout: 'focus',
    eyebrow: 'Timing',
    title: 'AI increases the need for disciplined human judgment.',
    subtitle: 'The remaining challenge is commercialization.',
    points: ['Information abundance', 'Reasoning pressure', 'Demand for evidence', 'Current readiness'],
    notes: [
      'This slide explains timing. AI makes fluent unsupported claims easier to produce, so the need for evidence-bound judgment becomes more visible.',
      'The business question is not whether the framework is useful. The advisor conversation should focus on how to commercialize the useful work already underway.',
    ],
  },
  {
    id: 'exists',
    act: 'Act I',
    question: 'What already exists?',
    layout: 'inventory',
    eyebrow: 'Reality, not vision',
    title: 'The foundation is already in place.',
    points: [
      'WhyDive Framework',
      'Chart-Ed',
      'Chart-Ed Institute',
      '122 products',
      'Four product families',
      'Pilot school',
      'Assessment architecture',
      'Stripe, store, websites, whitepapers',
    ],
    notes: [
      'This slide prevents the advisor from seeing WhyDive as only an idea. There are already products, infrastructure, content assets, and institutional concepts in place.',
      'The advisor should be invited to evaluate sequencing and leverage, not basic feasibility from zero.',
    ],
    links: [{ label: 'Current products and infrastructure', href: '/advisor/deep-dive/products' }],
  },
  {
    id: 'competition',
    act: 'Act I',
    question: 'What do we actually compete against?',
    layout: 'comparison',
    eyebrow: 'Positioning',
    title: 'Not all chart resources are the same.',
    subtitle: 'The chart is not the product. Judgment is the product.',
    comparison: {
      leftTitle: 'Free chart resources',
      rightTitle: 'Chart-Ed',
      left: ['Provide charts', 'Provide data', 'Provide information', 'Provide activities'],
      right: [
        'Develops judgment',
        'Provides a developmental framework',
        'Builds evidence-based reasoning',
        'Strengthens decision making',
      ],
      statement: 'The chart is the medium. Judgment is the product.',
    },
    notes: [
      'This slide corrects a likely misunderstanding. The competition is not simply free charts versus paid charts.',
      'Chart-Ed uses charts as evidence for developing reasoning and judgment. That is the strategic distinction advisors need before discussing pricing, marketing, or product positioning.',
    ],
    links: [{ label: 'Products and infrastructure', href: '/advisor/deep-dive/products' }],
  },
  {
    id: 'education-first',
    act: 'Act II',
    question: 'Why education first?',
    layout: 'beachhead',
    eyebrow: 'Beachhead',
    title: 'Education is the first mature implementation.',
    subtitle: 'It creates revenue, evidence, trust, and the foundation for future services.',
    points: ['Revenue', 'Evidence', 'Trust', 'Future services'],
    notes: [
      'Education is the first service layer addressed because it is the most mature path today. It should not be mistaken for the full boundary of WhyDive.',
      'The education branch gives WhyDive a practical market, visible products, and a way to collect evidence before expanding into other domains.',
    ],
    links: [{ label: 'Commercialization roadmap', href: '/advisor/deep-dive/commercialization' }],
  },
  {
    id: 'architecture',
    act: 'Act II',
    question: 'How does the enterprise fit together?',
    layout: 'architecture',
    eyebrow: 'Business architecture',
    title: 'One framework. Multiple reinforcing expressions.',
    notes: [
      'This slide shows why the pieces should not be judged as unrelated projects. The framework, commercial products, research, and authority work are intended to reinforce one another.',
      'The advisor can help test whether the architecture is clear enough for customers, partners, funders, and future hires.',
    ],
    links: [{ label: 'Business model', href: '/advisor/deep-dive/business-model' }],
  },
  {
    id: 'engines',
    act: 'Act II',
    question: 'What are the commercial engines?',
    layout: 'engines',
    eyebrow: 'Commercial engines',
    title: 'The engines are connected, not separate businesses.',
    points: ['Products', 'Subscriptions', 'Professional learning', 'Authority', 'Research', 'Future services'],
    notes: [
      'This slide names the revenue and authority engines without implying they should all be pursued at once.',
      'The immediate advising issue is order: which engine moves first, which one depends on evidence, and which one should wait until capacity grows.',
    ],
  },
  {
    id: 'focus',
    act: 'Act II',
    question: 'What is the current strategic focus?',
    layout: 'focus',
    eyebrow: 'Discipline',
    title: 'Focus is the strategy.',
    points: ['Revenue', 'Platform', 'Evidence', 'Authority'],
    notes: [
      'This slide is about restraint. WhyDive has many possible applications, but near-term credibility depends on disciplined execution in the strongest path.',
      'Advisor feedback should help protect the organization from scattering effort across too many attractive opportunities.',
    ],
  },
  {
    id: 'three-year',
    act: 'Act II',
    question: 'Where is this going?',
    layout: 'timeline',
    eyebrow: 'Three-year strategy',
    title: 'Establish a sustainable education enterprise that can finance the larger WhyDive vision.',
    points: ['Year One: revenue, pilot, products', 'Year Two: subscriptions, professional learning, authority', 'Year Three: district adoption, recurring revenue, first future service preparation'],
    notes: [
      'This timeline frames growth as staged capacity. The goal is not to jump immediately to the largest version of the vision.',
      'Each year should create the conditions for the next: revenue and evidence first, then recurring systems, then broader institutional adoption and future service preparation.',
    ],
    links: [{ label: 'Commercialization roadmap', href: '/advisor/deep-dive/commercialization' }],
  },
  {
    id: 'help',
    act: 'Act III',
    question: 'Where do I need help?',
    layout: 'guidance',
    eyebrow: 'Guidance, not rescue',
    title: 'The next challenge is commercialization and execution.',
    points: ['Commercialization', 'Marketing', 'Pricing', 'Capital allocation', 'Hiring', 'Scaling', 'Partnerships'],
    notes: [
      'This slide defines the advisor role. The request is not for someone to invent the enterprise, but to sharpen decisions around execution.',
      'Useful advice should focus on risks, priorities, pricing, customer acquisition, capital choices, and the order of growth.',
    ],
    links: [{ label: 'Advisor guidance questions', href: '/advisor/deep-dive/advisor-questions' }],
  },
  {
    id: 'success',
    act: 'Act III',
    question: 'What does success look like?',
    layout: 'success',
    eyebrow: 'Organizational maturity',
    title: 'A durable institution, not a collection of projects.',
    points: ['Framework', 'Business', 'Customers', 'Research', 'Institution', 'Future services'],
    notes: [
      'This slide names the destination: an institution with durable functions, not a loose set of experiments.',
      'The advisor can help identify what organizational capacity should be built first and what should remain founder-led for now.',
    ],
    links: [{ label: 'Organizational chart', href: '/advisor/org-chart' }],
  },
  {
    id: 'conversation',
    act: 'Act III',
    question: 'What conversation should we have?',
    layout: 'questions',
    eyebrow: 'Advisor conversation',
    title: 'The questions that matter most',
    points: [
      'Where is the business model weakest?',
      'What assumptions concern you most?',
      'If this were your business, what would you focus on first?',
      'What introductions, programs, or resources should I pursue?',
      'What am I too close to see clearly?',
    ],
    notes: [
      'This final slide turns the presentation into a working conversation. The goal is to invite judgment from the advisor, not simply approval.',
      'The strongest meeting outcome is a clearer next sequence: what to prioritize, what to avoid, who to talk to, and what assumption needs testing first.',
    ],
    links: [
      { label: 'Advisor portal', href: '/advisor' },
      { label: 'Advisor FAQ', href: '/advisor/faq' },
    ],
  },
];

export const advisorFaq = [
  {
    question: 'Is WhyDive solving a real problem?',
    answer:
      'Yes. Modern institutions produce more information than ever: charts, reports, dashboards, articles, assessments, and AI-generated answers. The persistent problem is determining what that information actually justifies people in believing, deciding, and doing.',
  },
  {
    question: 'Why does the market not already solve this?',
    answer:
      'Most tools either deliver information or measure knowledge. Very few are designed to develop judgment itself: the ability to identify what evidence supports, where inference begins, what remains uncertain, and when a conclusion becomes an overclaim.',
  },
  {
    question: 'Why will customers pay for WhyDive?',
    answer:
      'Customers rarely pay for information alone. They pay for better outcomes. Teachers want students who reason better from evidence. Districts want to understand how students reason. Future professional customers will want better decisions from reports, dashboards, and AI outputs.',
  },
  {
    question: 'Are free chart providers Chart-Ed competitors?',
    answer:
      'Not primarily. Free chart providers publish valuable data and charts. Chart-Ed uses charts as evidence for developing student judgment. The better comparison is not free charts versus paid charts. It is raw information versus a developmental reasoning system.',
  },
  {
    question: 'What does Chart-Ed actually compete against?',
    answer:
      'Chart-Ed competes for teacher attention, instructional time, school budgets, and product purchases. Its immediate product competition includes downloadable worksheets, teacher-created resources, and marketplace activities. Its deeper differentiation is that it builds evidence-based judgment rather than simply offering chart activities.',
  },
  {
    question: 'Is the chart the product?',
    answer:
      'No. The chart is the medium. Judgment is the product. Charts provide the evidence students use to practice reasoning, support conclusions, and decide what a claim can responsibly carry.',
  },
  {
    question: 'Why multiple websites?',
    answer:
      'WhyDive is the parent framework and institutional identity. Chart-Ed is a commercial education expression. Separate sites help each audience enter through the door that makes sense while preserving a coherent parent architecture.',
  },
  {
    question: 'Why education first?',
    answer:
      'Education offers the clearest first market because the judgment problem is visible, the product path already exists, and evidence can be gathered through classroom implementation.',
  },
  {
    question: 'Why not just Chart-Ed?',
    answer:
      'Chart-Ed is an important commercial engine, but it is not the whole enterprise. WhyDive is the broader framework that can support future services, research, professional learning, and additional domains.',
  },
  {
    question: 'Why not raise investment immediately?',
    answer:
      'The current strategy favors disciplined validation, recurring revenue, and evidence before taking on capital that could pressure the organization toward premature scale.',
  },
  {
    question: 'How does WhyDive make money?',
    answer:
      'Near-term revenue comes through educational products. The planned path expands into subscriptions, professional learning, pilots, district implementation, certification, and later non-education services.',
  },
  {
    question: 'What is the pilot expected to validate?',
    answer:
      'The pilot should help validate classroom usefulness, implementation patterns, student reasoning growth, teacher experience, and the evidence needed for school or district adoption.',
  },
  {
    question: 'How is WhyDive different from critical thinking?',
    answer:
      'Critical thinking is a broad category. WhyDive is more specific: it focuses on whether conclusions, judgments, and decisions are properly aligned with available evidence.',
  },
  {
    question: 'What is the long-term vision?',
    answer:
      'The long-term vision is a framework-centered institution that strengthens judgment across education first, then future service domains such as business, healthcare, leadership, public policy, and AI.',
  },
];

export const organizationCurrent = [
  { role: 'Founder / Executive Direction', owner: 'Elvis Agard', focus: 'Strategy, framework, product architecture, partnerships, and execution.' },
  { role: 'Product and Content', owner: 'Founder-led', focus: 'Chart-Ed products, WhyDive essays, whitepapers, and resource development.' },
  { role: 'Technology and Infrastructure', owner: 'Founder-led with tool support', focus: 'Websites, store infrastructure, assessment architecture, and automation.' },
  { role: 'Marketing and Growth', owner: 'Founder-led', focus: 'Customer acquisition, channel testing, authority development, and audience growth.' },
  { role: 'Research and Evidence', owner: 'Emerging', focus: 'Pilot design, evidence collection, validation, and future publication.' },
];

export const organizationTarget = [
  'Executive Direction',
  'Product',
  'Marketing and Growth',
  'Customer Success',
  'Education Partnerships',
  'Research and Evidence',
  'Operations',
  'Finance and Administration',
  'Technology',
];
