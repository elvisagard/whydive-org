import type { ClaimAuditEntry } from './types';

export const frameworkClaimAudits: ClaimAuditEntry[] = [
  {
    "title": "Strong Conclusions Require Strong Evidence",
    "slug": "strong-conclusions-require-strong-evidence",
    "essaySlug": "strong-conclusions-require-strong-evidence",
    "deck": "A retrospective claim audit distinguishing framework principles, supporting arguments, and empirical limits.",
    "statusNote": "A published essay is not a claim that every proposition is empirically established. These statuses separate definitions and recommendations from research findings and unresolved generalizations. Each judgment remains open to relevant counterevidence.",
    "rows": [
      {
        "claim": "Strong conclusions require proportionately strong evidence.",
        "status": "Framework principle / normative argument",
        "rationale": "The essay and WhyDive Foundational Thesis make proportionality the governing rule for evidence-dependent claims. A conclusion that rules out alternatives requires support that distinguishes it from those alternatives.",
        "argumentRecordId": "SC-AR-01"
      },
      {
        "claim": "A before-and-after improvement alone does not establish that a new program caused it.",
        "status": "Analytical finding / illustrative example",
        "rationale": "The school example supplies an observed sequence but leaves attendance, enrollment, testing, tutoring, and other explanations uncontrolled. Multiple causal stories remain compatible with the stated observations.",
        "argumentRecordId": "SC-AR-02"
      },
      {
        "claim": "Evidence can be relevant and accurate while insufficient for a broader claim.",
        "status": "Analytical distinction",
        "rationale": "One accurately reported experience does not by itself establish population prevalence. Likewise, an observed association can fit more than one causal account.",
        "argumentRecordId": "SC-AR-03"
      },
      {
        "claim": "Proportion permits both firm conclusions and action under uncertainty.",
        "status": "Normative decision principle",
        "rationale": "The sections on timidity and urgent action explicitly allow strong conclusions when warranted and provisional, monitored action when evidence remains limited.",
        "argumentRecordId": "SC-AR-04"
      },
      {
        "claim": "Evidence informs judgment without determining every value or obligation.",
        "status": "Philosophical / framework position",
        "rationale": "The essay explicitly retains values, purpose, moral reasoning, and obligations alongside evidential assessment. Evidence can inform consequences without independently selecting every goal.",
        "argumentRecordId": "SC-AR-05"
      },
      {
        "claim": "The examples of overclaiming identify possible failures, not measured prevalence or motives.",
        "status": "Illustration supported / generalizations unverified",
        "rationale": "The essay illustrates how claims can outrun support. It supplies no study measuring how often people overclaim or why they usually do so.",
        "argumentRecordId": "SC-AR-06"
      },
      {
        "claim": "The framework’s intended benefits are not demonstrated intervention effects.",
        "status": "Mission statement / empirical effects unverified",
        "rationale": "The essay proposes making evidence-to-conclusion reasoning visible and connects overclaiming with institutional and social consequences. No comparative outcome evaluation is supplied.",
        "argumentRecordId": "SC-AR-07"
      }
    ],
    "argumentRecords": [
      {
        "id": "SC-AR-01",
        "title": "Strong conclusions require proportionately strong evidence.",
        "claim": "Strong conclusions require proportionately strong evidence.",
        "status": "Framework principle / normative argument",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "The essay and WhyDive Foundational Thesis make proportionality the governing rule for evidence-dependent claims. A conclusion that rules out alternatives requires support that distinguishes it from those alternatives."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "Urgent action can be reasonable on limited evidence. The essay distinguishes acting under uncertainty from representing uncertain evidence as certain."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "This is a proposed standard, not a measured law or proof that the WhyDive framework improves outcomes. Revise applications when their evidential or decision thresholds are inappropriate."
            ]
          }
        ]
      },
      {
        "id": "SC-AR-02",
        "title": "A before-and-after improvement alone does not establish that a new program caused it.",
        "claim": "A before-and-after improvement alone does not establish that a new program caused it.",
        "status": "Analytical finding / illustrative example",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "The school example supplies an observed sequence but leaves attendance, enrollment, testing, tutoring, and other explanations uncontrolled. Multiple causal stories remain compatible with the stated observations."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "The program may genuinely work. The objection limits what this example establishes; it does not show the program is ineffective."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "The example is hypothetical. A stronger design or independent causal evidence could warrant a stronger conclusion about an actual program."
            ]
          }
        ]
      },
      {
        "id": "SC-AR-03",
        "title": "Evidence can be relevant and accurate while insufficient for a broader claim.",
        "claim": "Evidence can be relevant and accurate while insufficient for a broader claim.",
        "status": "Analytical distinction",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "One accurately reported experience does not by itself establish population prevalence. Likewise, an observed association can fit more than one causal account."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "A single observation can settle some claims, such as whether an event ever occurred. Sufficiency depends on the claim, not simply the number of observations."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "No universal minimum sample size or evidential formula is proposed. Revise a particular judgment when the scope and quality of its evidence change."
            ]
          }
        ]
      },
      {
        "id": "SC-AR-04",
        "title": "Proportion permits both firm conclusions and action under uncertainty.",
        "claim": "Proportion permits both firm conclusions and action under uncertainty.",
        "status": "Normative decision principle",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "The sections on timidity and urgent action explicitly allow strong conclusions when warranted and provisional, monitored action when evidence remains limited."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "Higher stakes need not always mean waiting for more evidence: the cost of delay also matters. Confidence in a factual claim and the threshold for action are different judgments."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "Reversibility and monitoring are recommendations, not guarantees. An application must weigh costs, alternatives, urgency, and available safeguards."
            ]
          }
        ]
      },
      {
        "id": "SC-AR-05",
        "title": "Evidence informs judgment without determining every value or obligation.",
        "claim": "Evidence informs judgment without determining every value or obligation.",
        "status": "Philosophical / framework position",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "The essay explicitly retains values, purpose, moral reasoning, and obligations alongside evidential assessment. Evidence can inform consequences without independently selecting every goal."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "Values are themselves open to reasoning and criticism. Distinguishing them from descriptive evidence does not exempt factual claims made on their behalf from examination."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "This is the framework’s position, not a settled account of every philosophical dispute about facts and values. Counterarguments may revise its formulation."
            ]
          }
        ]
      },
      {
        "id": "SC-AR-06",
        "title": "The examples of overclaiming identify possible failures, not measured prevalence or motives.",
        "claim": "The examples of overclaiming identify possible failures, not measured prevalence or motives.",
        "status": "Illustration supported / generalizations unverified",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "The essay illustrates how claims can outrun support. It supplies no study measuring how often people overclaim or why they usually do so."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "The opening suggests people usually overclaim without intending carelessness. A plausible explanation is not evidence of a typical psychological motive."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "Read examples as possibilities. Frequency and motive claims need representative empirical evidence; the current source synthesis does not establish them."
            ]
          }
        ]
      },
      {
        "id": "SC-AR-07",
        "title": "The framework’s intended benefits are not demonstrated intervention effects.",
        "claim": "The framework’s intended benefits are not demonstrated intervention effects.",
        "status": "Mission statement / empirical effects unverified",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "The essay proposes making evidence-to-conclusion reasoning visible and connects overclaiming with institutional and social consequences. No comparative outcome evaluation is supplied."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "A coherent principle may be useful, but coherence alone does not show improved education, leadership, public trust, or decisions."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "Claims about benefit magnitude, institutional decline, or effectiveness require outcome evidence and consideration of alternative causes. They remain open here."
            ]
          }
        ]
      }
    ],
    "provenanceNotes": [
      "Retrospective editorial audit added October 4, 2026. These records were created for this public audit; they are not recovered historical adjudications. Record IDs are navigation identifiers, not evidence of prior approval.",
      "Source basis: the published essay and WhyDive Foundational Thesis (June 2026). Internal framework documents establish what the framework proposes; they do not independently validate its psychological claims or practical effectiveness. Supporting documents remain outside the public repository."
    ]
  },
  {
    "title": "Why Judgment Matters",
    "slug": "why-judgment-matters",
    "essaySlug": "why-judgment-matters",
    "deck": "A retrospective claim audit distinguishing framework principles, supporting arguments, and empirical limits.",
    "statusNote": "A published essay is not a claim that every proposition is empirically established. These statuses separate definitions and recommendations from research findings and unresolved generalizations. Each judgment remains open to relevant counterevidence.",
    "rows": [
      {
        "claim": "Judgment means forming and carrying a conclusion in proportion to evidence and stakes.",
        "status": "Explicit framework definition",
        "rationale": "The opening supplies this definition, and the Foundational Thesis distinguishes examining evidence from deciding what to believe, communicate, prioritize, or do.",
        "argumentRecordId": "WJ-AR-01"
      },
      {
        "claim": "More information does not automatically yield better judgment.",
        "status": "Analytical possibility / qualified claim",
        "rationale": "An accurate chart can support a pattern while leaving its cause unresolved. Adding facts does not logically ensure that a person draws only warranted conclusions.",
        "argumentRecordId": "WJ-AR-02"
      },
      {
        "claim": "Reasoning serves judgment in the WhyDive framework.",
        "status": "Framework architecture",
        "rationale": "The essay assigns evidence examination to reasoning and responsibility for belief, communication, and action to judgment. The Foundational Thesis presents the same relationship.",
        "argumentRecordId": "WJ-AR-03"
      },
      {
        "claim": "Overclaiming and unwarranted hesitation can both misrepresent the evidence.",
        "status": "Normative principle / analytical distinction",
        "rationale": "The essay distinguishes asserting more than evidence warrants from refusing a warranted conclusion. Proportion, rather than habitual certainty or hesitation, is its criterion.",
        "argumentRecordId": "WJ-AR-04"
      },
      {
        "claim": "Judgment involves commitments beyond descriptive evidence.",
        "status": "Philosophical / framework position",
        "rationale": "The section on judgment being more than evidence names obligations, values, purpose, and relationships as additional considerations.",
        "argumentRecordId": "WJ-AR-05"
      },
      {
        "claim": "Judgment can be exercised before uncertainty is fully resolved.",
        "status": "Practical principle / unquantified generalization",
        "rationale": "The essay recommends identifying assumptions, uncertainty, and warranted conclusions when a decision cannot await complete knowledge.",
        "argumentRecordId": "WJ-AR-06"
      },
      {
        "claim": "Growing information abundance makes judgment increasingly necessary.",
        "status": "Contemporary framing / trend claim unverified",
        "rationale": "The essay lists dashboards, headlines, AI explanations, and other information sources, but supplies no longitudinal measure of information exposure or the need for judgment.",
        "argumentRecordId": "WJ-AR-07"
      }
    ],
    "argumentRecords": [
      {
        "id": "WJ-AR-01",
        "title": "Judgment means forming and carrying a conclusion in proportion to evidence and stakes.",
        "claim": "Judgment means forming and carrying a conclusion in proportion to evidence and stakes.",
        "status": "Explicit framework definition",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "The opening supplies this definition, and the Foundational Thesis distinguishes examining evidence from deciding what to believe, communicate, prioritize, or do."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "Other disciplines use judgment more broadly. This definition organizes the essay rather than establishing an exclusive psychological taxonomy."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "Revise if the definition obscures useful distinctions or fails to serve the stated inquiry."
            ]
          }
        ]
      },
      {
        "id": "WJ-AR-02",
        "title": "More information does not automatically yield better judgment.",
        "claim": "More information does not automatically yield better judgment.",
        "status": "Analytical possibility / qualified claim",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "An accurate chart can support a pattern while leaving its cause unresolved. Adding facts does not logically ensure that a person draws only warranted conclusions."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "Additional information can improve decisions. The argument denies an automatic guarantee, not the usefulness of information."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "The essay does not quantify the average effect of information access on decision quality. Such an effect needs a specified task and empirical comparison."
            ]
          }
        ]
      },
      {
        "id": "WJ-AR-03",
        "title": "Reasoning serves judgment in the WhyDive framework.",
        "claim": "Reasoning serves judgment in the WhyDive framework.",
        "status": "Framework architecture",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "The essay assigns evidence examination to reasoning and responsibility for belief, communication, and action to judgment. The Foundational Thesis presents the same relationship."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "Real cognition can be iterative, intuitive, and socially distributed. A conceptual pathway is not evidence of a fixed sequential mechanism in every person."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "Use this as an explanatory framework. Claims about actual cognitive processes require separate research."
            ]
          }
        ]
      },
      {
        "id": "WJ-AR-04",
        "title": "Overclaiming and unwarranted hesitation can both misrepresent the evidence.",
        "claim": "Overclaiming and unwarranted hesitation can both misrepresent the evidence.",
        "status": "Normative principle / analytical distinction",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "The essay distinguishes asserting more than evidence warrants from refusing a warranted conclusion. Proportion, rather than habitual certainty or hesitation, is its criterion."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "Action is not determined by confidence alone. Costs of action and inaction, duties, and uncertainty also enter the decision."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "No universal threshold for action is established. Reassess a recommendation when stakes, alternatives, or evidence change."
            ]
          }
        ]
      },
      {
        "id": "WJ-AR-05",
        "title": "Judgment involves commitments beyond descriptive evidence.",
        "claim": "Judgment involves commitments beyond descriptive evidence.",
        "status": "Philosophical / framework position",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "The section on judgment being more than evidence names obligations, values, purpose, and relationships as additional considerations."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "Such commitments can still be criticized and informed by evidence. The distinction does not authorize unsupported factual assertions."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "This position does not resolve all debates about ethics, faith, or epistemology; those require their own arguments."
            ]
          }
        ]
      },
      {
        "id": "WJ-AR-06",
        "title": "Judgment can be exercised before uncertainty is fully resolved.",
        "claim": "Judgment can be exercised before uncertainty is fully resolved.",
        "status": "Practical principle / unquantified generalization",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "The essay recommends identifying assumptions, uncertainty, and warranted conclusions when a decision cannot await complete knowledge."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "Its claim that most real judgments occur under unresolved uncertainty is not backed here by a prevalence study. The practical recommendation does not require that numerical generalization."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "Treat the checklist as proposed guidance. Its effectiveness and comparative advantages remain to be evaluated."
            ]
          }
        ]
      },
      {
        "id": "WJ-AR-07",
        "title": "Growing information abundance makes judgment increasingly necessary.",
        "claim": "Growing information abundance makes judgment increasingly necessary.",
        "status": "Contemporary framing / trend claim unverified",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "The essay lists dashboards, headlines, AI explanations, and other information sources, but supplies no longitudinal measure of information exposure or the need for judgment."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "Examples of abundant information do not establish “more than ever” across populations or prove a growing trend in judgment difficulty."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "The normative case for careful judgment stands separately. Quantified or universal historical claims need independent longitudinal evidence."
            ]
          }
        ]
      }
    ],
    "provenanceNotes": [
      "Retrospective editorial audit added October 4, 2026. These records were created for this public audit; they are not recovered historical adjudications. Record IDs are navigation identifiers, not evidence of prior approval.",
      "Source basis: the published essay and WhyDive Foundational Thesis (June 2026). Internal framework documents establish what the framework proposes; they do not independently validate its psychological claims or practical effectiveness. Supporting documents remain outside the public repository."
    ]
  },
  {
    "title": "The Judgment Problem in the Age of AI",
    "slug": "the-judgment-problem-in-the-age-of-ai",
    "essaySlug": "the-judgment-problem-in-the-age-of-ai",
    "deck": "A retrospective claim audit distinguishing framework principles, supporting arguments, and empirical limits.",
    "statusNote": "A published essay is not a claim that every proposition is empirically established. These statuses separate definitions and recommendations from research findings and unresolved generalizations. Each judgment remains open to relevant counterevidence.",
    "rows": [
      {
        "claim": "Fluent language does not by itself establish factual accuracy.",
        "status": "Supported capability limitation / analytical distinction",
        "rationale": "OpenAI describes plausible, confident false answers and explains why fluency can coexist with error. This supports checking the warrant for an answer rather than inferring accuracy from its polish.",
        "argumentRecordId": "AI-AR-01"
      },
      {
        "claim": "Some evaluation incentives reward guessing over acknowledging uncertainty.",
        "status": "Source-supported explanatory claim",
        "rationale": "OpenAI’s September 2025 account explains how accuracy-only scoring can favor guesses over abstentions and discusses training and evaluation incentives.",
        "argumentRecordId": "AI-AR-02"
      },
      {
        "claim": "Generative AI literacy extends beyond prompt construction.",
        "status": "Research framework / normative recommendation",
        "rationale": "Annapureddy, Fornaroli, and Gatica-Perez propose twelve competencies covering foundational literacy, prompting, programming, and ethical and legal considerations.",
        "argumentRecordId": "AI-AR-03"
      },
      {
        "claim": "Human reliance on automated advice deserves scrutiny.",
        "status": "Research topic supported / mechanisms not fully adjudicated",
        "rationale": "Alon-Barkat and Busuioc report three experiments investigating automation bias and selective adherence in public-sector decisions in the Netherlands. The verified abstract establishes the study’s scope.",
        "argumentRecordId": "AI-AR-04"
      },
      {
        "claim": "AI risk management includes design, development, use, and evaluation.",
        "status": "Official framework scope",
        "rationale": "NIST describes AI RMF 1.0 as a voluntary framework incorporating trustworthiness throughout these activities. This supports placing user judgment within broader organizational governance.",
        "argumentRecordId": "AI-AR-05"
      },
      {
        "claim": "The professional examples illustrate possible failures rather than documented cases.",
        "status": "Illustrative scenarios",
        "rationale": "The essay describes a lawyer, school leader, and health professional receiving plausible but problematic outputs. No named case or case-specific evidence accompanies these scenarios.",
        "argumentRecordId": "AI-AR-06"
      },
      {
        "claim": "Verification and proportion are recommended practices, not a demonstrated cure.",
        "status": "Normative recommendation / effectiveness unverified",
        "rationale": "The proposed questions ask readers to inspect sources, separate inference from fact, identify uncertainty, and weigh stakes. These follow from the essay’s proportionality principle.",
        "argumentRecordId": "AI-AR-07"
      },
      {
        "claim": "Delegating output generation does not settle responsibility for using it.",
        "status": "Ethical position / historical framing qualified",
        "rationale": "The essay urges people to retain responsibility for what they publish or act on. Its contrast between information scarcity and fluent abundance explains the concern.",
        "argumentRecordId": "AI-AR-08"
      }
    ],
    "argumentRecords": [
      {
        "id": "AI-AR-01",
        "title": "Fluent language does not by itself establish factual accuracy.",
        "claim": "Fluent language does not by itself establish factual accuracy.",
        "status": "Supported capability limitation / analytical distinction",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "OpenAI describes plausible, confident false answers and explains why fluency can coexist with error. This supports checking the warrant for an answer rather than inferring accuracy from its polish."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "Many fluent answers are correct. The point is that fluency alone cannot discriminate reliably between a supported claim and an unsupported one."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "No error rate for all AI systems or current models is established here. Task-specific evaluations may change the degree of warranted reliance."
            ]
          }
        ],
        "sources": [
          {
            "label": "OpenAI — Why language models hallucinate (2025)",
            "href": "https://openai.com/index/why-language-models-hallucinate/"
          }
        ]
      },
      {
        "id": "AI-AR-02",
        "title": "Some evaluation incentives reward guessing over acknowledging uncertainty.",
        "claim": "Some evaluation incentives reward guessing over acknowledging uncertainty.",
        "status": "Source-supported explanatory claim",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "OpenAI’s September 2025 account explains how accuracy-only scoring can favor guesses over abstentions and discusses training and evaluation incentives."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "This is an identified mechanism, not a complete explanation of every hallucination. Different scoring rules and systems can reward calibrated uncertainty."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "The claim is limited to the described incentive structure. Assess other evaluation regimes separately."
            ]
          }
        ],
        "sources": [
          {
            "label": "OpenAI — Why language models hallucinate (2025)",
            "href": "https://openai.com/index/why-language-models-hallucinate/"
          }
        ]
      },
      {
        "id": "AI-AR-03",
        "title": "Generative AI literacy extends beyond prompt construction.",
        "claim": "Generative AI literacy extends beyond prompt construction.",
        "status": "Research framework / normative recommendation",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "Annapureddy, Fornaroli, and Gatica-Perez propose twelve competencies covering foundational literacy, prompting, programming, and ethical and legal considerations."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "A proposed competency framework is not proof that every competency is necessary in every role or that a particular curriculum works."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "The essay’s broader responsible-use recommendation is consistent with this proposal; practical effectiveness needs evaluation."
            ]
          }
        ],
        "sources": [
          {
            "label": "Annapureddy, Fornaroli, and Gatica-Perez — Generative AI Literacy: Twelve Defining Competencies (2024 preprint; 2025 journal reference)",
            "href": "https://arxiv.org/abs/2412.12107"
          }
        ]
      },
      {
        "id": "AI-AR-04",
        "title": "Human reliance on automated advice deserves scrutiny.",
        "claim": "Human reliance on automated advice deserves scrutiny.",
        "status": "Research topic supported / mechanisms not fully adjudicated",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "Alon-Barkat and Busuioc report three experiments investigating automation bias and selective adherence in public-sector decisions in the Netherlands. The verified abstract establishes the study’s scope."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "The abstract does not establish every mechanism named in the essay, nor a universal tendency to overrely. These studies concern algorithmic advice and cannot automatically be generalized to conversational AI."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "This audit does not claim a full-text result adjudication. Claims about effect size, effort reduction, authority, precision, and confirmation require examination of relevant results and contexts."
            ]
          }
        ],
        "sources": [
          {
            "label": "Alon-Barkat and Busuioc — Human-AI Interactions in Public Sector Decision-Making (2022 revision; abstract inspected)",
            "href": "https://arxiv.org/abs/2103.02381"
          }
        ]
      },
      {
        "id": "AI-AR-05",
        "title": "AI risk management includes design, development, use, and evaluation.",
        "claim": "AI risk management includes design, development, use, and evaluation.",
        "status": "Official framework scope",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "NIST describes AI RMF 1.0 as a voluntary framework incorporating trustworthiness throughout these activities. This supports placing user judgment within broader organizational governance."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "The existence of guidance does not show that adopting it eliminates risks or validates the WhyDive method."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "This is an attribution to the framework’s stated scope, not an effectiveness claim or legal requirement."
            ]
          }
        ],
        "sources": [
          {
            "label": "NIST — AI Risk Management Framework",
            "href": "https://www.nist.gov/itl/ai-risk-management-framework"
          }
        ]
      },
      {
        "id": "AI-AR-06",
        "title": "The professional examples illustrate possible failures rather than documented cases.",
        "claim": "The professional examples illustrate possible failures rather than documented cases.",
        "status": "Illustrative scenarios",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "The essay describes a lawyer, school leader, and health professional receiving plausible but problematic outputs. No named case or case-specific evidence accompanies these scenarios."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "Similar events may have occurred, but resemblance does not establish the provenance of these particular examples."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "Do not treat these passages as verified case reports or estimates of occupational risk. Actual cases require independent records."
            ]
          }
        ]
      },
      {
        "id": "AI-AR-07",
        "title": "Verification and proportion are recommended practices, not a demonstrated cure.",
        "claim": "Verification and proportion are recommended practices, not a demonstrated cure.",
        "status": "Normative recommendation / effectiveness unverified",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "The proposed questions ask readers to inspect sources, separate inference from fact, identify uncertainty, and weigh stakes. These follow from the essay’s proportionality principle."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "Verification can itself fail, consume resources, or rely on unreliable sources. Calling proportion an antidote does not demonstrate elimination of error or improved outcomes."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "No controlled evaluation of this checklist is supplied. “Avoidable” expresses an aim or possibility, not a guarantee for every user and situation."
            ]
          }
        ]
      },
      {
        "id": "AI-AR-08",
        "title": "Delegating output generation does not settle responsibility for using it.",
        "claim": "Delegating output generation does not settle responsibility for using it.",
        "status": "Ethical position / historical framing qualified",
        "sections": [
          {
            "label": "Evidence and reasoning",
            "body": [
              "The essay urges people to retain responsibility for what they publish or act on. Its contrast between information scarcity and fluent abundance explains the concern."
            ]
          },
          {
            "label": "Challenge and response",
            "body": [
              "Responsibility is shared among users, developers, organizations, and governing institutions. The essay does not establish exclusive user responsibility or that AI never helps evaluate evidence."
            ]
          },
          {
            "label": "Boundary and revision conditions",
            "body": [
              "No blanket legal conclusion or historical claim that scarcity has ended follows. Whether AI makes evaluation easier varies by task and requires comparative evidence."
            ]
          }
        ]
      }
    ],
    "provenanceNotes": [
      "Retrospective editorial audit added October 4, 2026. These records were created for this public audit; they are not recovered historical adjudications. Record IDs are navigation identifiers, not evidence of prior approval.",
      "Source basis: the published essay and WhyDive Foundational Thesis (June 2026). Internal framework documents establish what the framework proposes; they do not independently validate its psychological claims or practical effectiveness. Supporting documents remain outside the public repository.",
      "Selected external sources are linked at the relevant records. Verification scope is stated explicitly; this is not a systematic literature review or a full-text adjudication of every work in the essay bibliography."
    ]
  }
];
