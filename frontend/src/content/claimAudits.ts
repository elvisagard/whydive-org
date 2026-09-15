import type { ClaimAuditEntry } from './types';

export const claimAuditEntries: ClaimAuditEntry[] = [
  {
    title: 'In the Beginning, God',
    slug: 'in-the-beginning-god',
    essaySlug: 'in-the-beginning-god',
    deck: 'Claim Audit & Argument Records for the Genesis 1:1-2 essay.',
    statusNote:
      'Present status means present status. New evidence may strengthen, weaken, revise, or overturn any judgment below.',
    rows: [
      {
        claim: "Genesis introduces God as the acting subject of creation without first explaining God's own being.",
        status: 'High-confidence finding / translation-resilient',
        rationale:
          "Major syntactical readings of Genesis 1:1 differ, but God remains the acting subject of the creation account without a preceding explicit explanation of God's own being.",
        argumentRecordId: 'G12-AR-01',
      },
      {
        claim:
          'Divine creative activity precedes any narrated human request, merit, worship, usefulness, contribution, or claim.',
        status: 'High-confidence narrative finding / strong relational inference',
        rationale:
          'Humanity appears later in the creation narrative. Divine initiative therefore precedes narrated human response; gift is a further theological characterization.',
        argumentRecordId: 'G12-AR-02',
      },
      {
        claim: "Human existence belongs to what God deliberately brings about in the larger Genesis 1 narrative.",
        status: 'Strong inference / later-context dependent / weakened-revised claim',
        rationale:
          "Humanity is not yet present in Genesis 1:1-2 but subsequently appears as part of God's creative activity. Stronger motive or personalized claims require additional evidence.",
        argumentRecordId: 'G12-AR-03',
      },
      {
        claim: '*Tohu wabohu* does not itself establish moral evil, rebellion, or divine defeat.',
        status: 'High-confidence negative finding / translation-resilient',
        rationale:
          "Serious disagreement remains about the phrase's positive characterization, but the phrase itself does not supply moral rebellion, satanic agency, or divine defeat.",
        argumentRecordId: 'G12-AR-04',
      },
      {
        claim:
          'Genesis presents the earth before its later differentiation and filling without identifying that earlier condition as failure.',
        status: 'Strong literary inference / translation-resilient',
        rationale:
          '"Unfinished" is not the lexical definition of *tohu wabohu*, but the narrative develops beyond the verse-2 condition without calling that earlier state failed.',
        argumentRecordId: 'G12-AR-05',
      },
      {
        claim: 'Darkness in Genesis 1:2 is present without being identified as moral evil.',
        status: 'High-confidence finding / translation-invariant',
        rationale:
          'The verse does not moralize darkness. Its later naming as Night provides local corroboration without generating the original observation.',
        argumentRecordId: 'G12-AR-06',
      },
      {
        claim:
          'Genesis 1:1-2 does not narrate God as panicked, threatened, defeated, or struggling for control.',
        status: 'High-confidence negative narrative finding / strong relational implication',
        rationale:
          "No divine emergency, battle, defeat, surprise, or recovery from lost control is narrated. This does not claim exhaustive access to God's internal emotional state.",
        argumentRecordId: 'G12-AR-07',
      },
      {
        claim: '*Ruach Elohim* is genuinely translation-sensitive.',
        status: 'High-confidence finding / translation-sensitive / competing possibilities',
        rationale:
          'Serious readings include Spirit of God, wind from God, and mighty wind. Later doctrine may correspond without settling the lexical question in advance.',
        argumentRecordId: 'G12-AR-08',
      },
      {
        claim:
          'The ambiguity of *ruach Elohim* does not erase all meaningful evidence or require the scene to be characterized as divine absence.',
        status: 'Strong inference / translation-resilient',
        rationale:
          'Exact identification remains open, but placement, movement, and narrative relation survive much of the disagreement. Uncertainty should remain local.',
        argumentRecordId: 'G12-AR-09',
      },
      {
        claim:
          'Genesis gives placement and movement before exhaustive definition, supporting a practice of attending before defining.',
        status: 'High-confidence literary finding / strong methodological application',
        rationale:
          '*Ruach Elohim* is presented in relation to the waters and moving before exhaustive definition. The reader practice arises from that disclosure structure.',
        argumentRecordId: 'G12-AR-10',
        argumentRecordIds: ['G12-AR-10', 'G12-AR-11'],
      },
    ],
    boundaryClaims: [
      {
        claim: 'Genesis deliberately rejects surrounding ancient Near Eastern chaos-war creation myths.',
        status: 'Open question / future comparative research',
        reason:
          'The present investigation authorizes the narrower local finding that Genesis 1:1-2 itself does not narrate God fighting, being defeated by, or recovering control from hostile primordial powers.',
      },
      {
        claim:
          'Genesis introduces the Creator before every later religious, doctrinal, or communal boundary.',
        status: 'Post-publication emergent insight / explicitly excluded here',
        reason:
          'This later insight did not generate the original essay and belongs to a separate development stream associated principally with Let the Beginning Remain a Beginning.',
      },
    ],
    argumentRecords: [
      {
        id: 'G12-AR-01',
        title: 'God Before Explanation',
        claim: "Genesis introduces God as the acting subject of creation without first explaining God's own being.",
        status: 'High-confidence finding / translation-resilient',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              "Genesis opens by naming God in relation to creation. Whether Genesis 1:1 is read as an independent clause or through a serious temporal alternative, God appears as the acting subject of the creation account.",
              "The text does not first provide God's origin, an argument for God's existence, a definition of God's being, or an explanation of divine causation.",
            ],
          },
          {
            label: 'Translation/source-language evidence',
            body: [
              'The syntax of Genesis 1:1 is genuinely disputed. The present claim therefore does not depend on settling absolute chronology, creation ex nihilo, or the independent-clause versus temporal-clause question.',
            ],
          },
          {
            label: 'Counterevidence / complication',
            body: [
              'The word God already carries conceptual content. Before explanation does not mean the opening is theologically empty; it means Genesis does not first give an explicit account of divine being before presenting God acting.',
            ],
          },
          {
            label: 'Previous formulation / revision',
            body: [
              'Earlier reasoning moved toward saying God chose this beginning because finite creatures require encounter before explanation. The later effect/purpose distinction weakened that stronger claim.',
            ],
          },
          {
            label: 'What could change this status?',
            body: [
              "A compelling reading showing that Genesis begins by explicitly explaining God's being prior to presenting God acting would change this status. No such reading emerged.",
            ],
          },
        ],
        sources: [
          { label: 'Genesis 1:1', href: 'https://www.biblegateway.com/verse/en/Genesis%201%3A1' },
          { label: 'NET Bible Genesis 1:1 notes', href: 'https://netbible.org/bible/Genesis+1' },
          { label: 'Westermann, Genesis 1-11', href: 'https://www.logos.com/product/9219/continental-commentary-series-genesis-1-11' },
        ],
      },
      {
        id: 'G12-AR-02',
        title: 'Divine Initiative Before Human Claim',
        claim:
          'Divine creative activity precedes any narrated human request, merit, worship, usefulness, contribution, or claim.',
        status: 'High-confidence narrative finding / strong relational inference',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              'Human beings appear later in Genesis 1. No human has yet requested existence, earned it, supplied material, worshiped, obeyed, proved useful, or persuaded God to create.',
            ],
          },
          {
            label: 'Competing interpretations',
            body: [
              'The asymmetry may be characterized as givenness, gift, grace, divine initiative, or creaturely dependence. Initiative/reception is closest to the evidence. Gift is meaningful theological characterization one step further.',
            ],
          },
          {
            label: 'Counterevidence / complication',
            body: [
              "The claim does not establish God's exhaustive motive for creation and does not imply that later human response is unimportant.",
            ],
          },
          {
            label: 'Previous formulation / revision',
            body: [
              'Gift is first was refined into divine initiative and creaturely reception, with gift retained as interpretive language.',
            ],
          },
        ],
        sources: [
          { label: 'Genesis 1', href: 'https://www.biblegateway.com/passage/?search=Genesis%201&version=KJV' },
        ],
      },
      {
        id: 'G12-AR-03',
        title: 'Human Existence Belongs to What God Deliberately Brings About',
        claim: "Human existence belongs to what God deliberately brings about in the larger Genesis 1 narrative.",
        status: 'Strong inference / later-context dependent / weakened-revised claim',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              "Genesis 1:1-2 does not yet contain humanity. Later Genesis 1 explicitly includes humanity within God's creative activity.",
            ],
          },
          {
            label: 'Important limitation',
            body: [
              "This does not establish from Genesis 1:1-2 God's exhaustive motive for creating humanity. It also does not establish God wanted me as an individual proposition.",
            ],
          },
          {
            label: 'Counterevidence / complication',
            body: [
              'This claim depends on later Genesis 1, so its evidentiary status must remain visibly different from direct verse-1-2 observations.',
            ],
          },
          {
            label: 'Previous formulation / revision',
            body: [
              'Earlier formulations included Human existence is something God wanted and God wants me. The present judgment is narrower: human existence belongs to what God deliberately brings about in Genesis 1.',
            ],
          },
          {
            label: 'What could change this status?',
            body: [
              'A dedicated canonical investigation into divine intention for humanity could strengthen or revise the larger relational claim.',
            ],
          },
        ],
        sources: [
          { label: 'Genesis 1:26-31', href: 'https://www.biblegateway.com/passage/?search=Genesis%201%3A26-31&version=KJV' },
        ],
      },
      {
        id: 'G12-AR-04',
        title: '*Tohu Wabohu* Does Not Establish Moral Evil, Rebellion, or Divine Defeat',
        claim:
          '*Tohu wabohu* does not itself authorize the conclusion that moral evil, rebellion, or divine defeat is already present.',
        status: 'High-confidence negative finding / translation-resilient',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              "Genesis 1:2 does not call the condition sinful, wicked, rebellious, satanic, divine judgment, or God's defeat.",
            ],
          },
          {
            label: 'Translation/source-language evidence',
            body: [
              'The investigation encountered real disagreement. Tsumura strongly challenges a primordial-chaos reading. Westermann complicates simplistic mythological-chaos assumptions. Routledge preserves a serious theological use of chaos.',
              'The positive characterization remains contested, but chaos is not identical with moral evil, rebellion, or divine defeat.',
            ],
          },
          {
            label: 'Counterevidence / complication',
            body: [
              'Elsewhere *tohu* can describe desolation, emptiness, or waste. The Hebrew therefore does not establish serene artistic beauty either.',
            ],
          },
          {
            label: 'Previous formulation / revision',
            body: [
              'Earlier positive descriptions of beautiful or orderly unfinishedness exceeded the lexical evidence.',
            ],
          },
        ],
        sources: [
          {
            label: 'Tsumura, The Earth and the Waters',
            href: 'https://books.google.com/books/about/The_Earth_and_the_Waters_in_Genesis_1_an.html?id=Z7S9QgAACAAJ',
          },
          {
            label: 'Tsumura, Creation and Destruction',
            href: 'https://www.eisenbrauns.org/books/titles/978-1-57506-106-1.html',
          },
          {
            label: 'Routledge, Did God Create Chaos?',
            href: 'https://www.tyndalebulletin.org/article/29296-did-god-create-chaos-unresolved-tension-in-genesis-1-1-2',
          },
          { label: 'Westermann, Genesis 1-11', href: 'https://www.logos.com/product/9219/continental-commentary-series-genesis-1-11' },
        ],
      },
      {
        id: 'G12-AR-05',
        title: 'Unfinished Is Not Automatically Failed',
        claim:
          'Genesis presents the earth before its later differentiation and filling without identifying that earlier condition as failure.',
        status: 'Strong literary inference / translation-resilient',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              'The verse-2 condition precedes the progressively differentiated and populated world of the remainder of Genesis 1. The earlier condition is not called failure, mistake, rebellion, or divine disappointment.',
            ],
          },
          {
            label: 'Why we presently hold it',
            body: [
              '"Unfinished" is a literary characterization of the chapter\'s progression, not the lexical definition of *tohu wabohu*. The responsible inference is that incompletion should not automatically be classified as failure.',
            ],
          },
          {
            label: 'Counterevidence / complication',
            body: [
              'This does not mean every unfinished human situation is healthy, every failed project is merely incomplete, or every unresolved situation will be completed favorably.',
            ],
          },
          {
            label: 'Correspondence with human experience',
            body: [
              'The unfinished-artwork analogy illustrates the logical distinction unfinished does not necessarily mean ruined. It does not authorize the exegesis.',
            ],
          },
        ],
        sources: [
          { label: 'Genesis 1:2', href: 'https://www.biblegateway.com/verse/en/Genesis%201%3A2' },
          {
            label: 'Routledge, Did God Create Chaos?',
            href: 'https://www.tyndalebulletin.org/article/29296-did-god-create-chaos-unresolved-tension-in-genesis-1-1-2',
          },
        ],
      },
      {
        id: 'G12-AR-06',
        title: 'Darkness Before Moralizing',
        claim: 'Darkness in Genesis 1:2 is present without being identified as moral evil.',
        status: 'High-confidence finding / translation-invariant',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              'Genesis 1:2 says darkness is present. It does not call darkness evil, wicked, sinful, rebellious, or demonic.',
            ],
          },
          {
            label: 'Canonical correspondence',
            body: [
              'Genesis 1:5 later names darkness Night. This corroborates restraint but must not manufacture the earlier observation.',
            ],
          },
          {
            label: 'Counterevidence / complication',
            body: [
              'Later Scripture genuinely uses darkness metaphorically for negative realities, and those meanings must be allowed to arrive later. Absence of moralization does not prove darkness has no other literary or theological significance.',
            ],
          },
          {
            label: 'Previous formulation / revision',
            body: [
              'Earlier: darkness is neutral. Present: darkness is not identified as moral evil.',
            ],
          },
        ],
        sources: [
          { label: 'Genesis 1:2', href: 'https://www.biblegateway.com/verse/en/Genesis%201%3A2' },
          { label: 'Genesis 1:5', href: 'https://www.biblegateway.com/verse/en/Genesis%201%3A5' },
        ],
      },
      {
        id: 'G12-AR-07',
        title: 'No Narrated Divine Panic',
        claim:
          'Genesis 1:1-2 does not narrate God as panicked, threatened, surprised, defeated, or struggling to regain control.',
        status: 'High-confidence negative narrative finding / strong relational implication',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              'The opening narrates no divine emergency, cosmic battle, surprise, defeat, or recovery of lost control.',
            ],
          },
          {
            label: 'Why we presently hold it',
            body: [
              "This is a claim about narration, not exhaustive access to God's psychology.",
            ],
          },
          {
            label: 'Counterevidence / complication',
            body: [
              'Ancient Near Eastern creation traditions sometimes contain deity-versus-chaos conflict. The original investigation did not complete enough comparative research to establish that Genesis deliberately functions as a polemic against such traditions.',
            ],
          },
          {
            label: 'Relational implication',
            body: ['Readers should hesitate before projecting their own alarm onto God\'s narrated posture.'],
          },
        ],
        sources: [
          { label: 'Genesis 1:1-2', href: 'https://www.biblegateway.com/passage/?search=Genesis%201%3A1-2&version=KJV' },
          {
            label: 'Tsumura, Creation and Destruction',
            href: 'https://www.eisenbrauns.org/books/titles/978-1-57506-106-1.html',
          },
          {
            label: 'Routledge, Did God Create Chaos?',
            href: 'https://www.tyndalebulletin.org/article/29296-did-god-create-chaos-unresolved-tension-in-genesis-1-1-2',
          },
        ],
      },
      {
        id: 'G12-AR-08',
        title: '*Ruach Elohim* Is Translation-Sensitive',
        claim: '*Ruach Elohim* is genuinely translation-sensitive.',
        status: 'High-confidence finding / translation-sensitive / competing possibilities',
        sections: [
          {
            label: 'Primary evidence',
            body: ['The investigation encountered serious readings including Spirit of God, wind from God, and mighty wind.'],
          },
          {
            label: 'Translation/source-language evidence',
            body: [
              '*Ruach* can occupy a semantic field involving spirit, wind, and breath. The relation of *Elohim* to the noun is also interpreted differently.',
            ],
          },
          {
            label: 'Why we presently hold it',
            body: [
              'The familiar English Spirit of God should not be treated as though the translation question never existed. Translation sensitivity also does not mean every interpretation is equally probable or the phrase is meaningless.',
            ],
          },
          {
            label: 'Canonical correspondence',
            body: [
              'Later Spirit theology may correspond meaningfully. It cannot simply become the lexical adjudicator of Genesis 1:2.',
            ],
          },
        ],
        sources: [
          { label: 'NET Bible Genesis 1:2 notes', href: 'https://netbible.org/bible/Genesis+1' },
          { label: 'Ibn Ezra on Genesis 1:2', href: 'https://www.sefaria.org/Ibn_Ezra_on_Genesis.1.2' },
          {
            label: 'Berkovic, Merahefet',
            href: 'https://hrcak.srce.hr/en/clanak/38509',
          },
        ],
      },
      {
        id: 'G12-AR-09',
        title: 'Ambiguity Does Not Require a Divine-Absence Reading',
        claim:
          'The unresolved translation of *ruach Elohim* does not erase all meaningful evidence or require the scene to be characterized as one of divine absence.',
        status: 'Strong inference / translation-resilient',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              'Across the interpretations considered, important textual features remain: the phrase itself, relation to the waters, movement, and placement within a God-centered creation narrative.',
            ],
          },
          {
            label: 'Why we presently hold it',
            body: [
              'The investigation learned that uncertainty should remain attached to the claim whose evidence warrants it. Exact identification can remain uncertain without making every neighboring observation uncertain.',
            ],
          },
          {
            label: 'Counterevidence / complication',
            body: [
              'The mighty-wind reading weakens direct personal-presence claims. Therefore every translation should not be treated as proving personal divine presence identically.',
            ],
          },
          {
            label: 'Previous formulation / revision',
            body: [
              'The investigation moved between overcertainty and ambiguity-as-emptiness. The mature result is local confidence.',
            ],
          },
        ],
        sources: [
          { label: 'Genesis 1:2', href: 'https://www.biblegateway.com/verse/en/Genesis%201%3A2' },
          { label: 'NET Bible Genesis 1:2 notes', href: 'https://netbible.org/bible/Genesis+1' },
        ],
      },
      {
        id: 'G12-AR-10',
        title: 'Placement and Movement Before Exhaustive Definition',
        claim: 'Genesis gives the reader *ruach Elohim* in relation to the waters and in motion before supplying an exhaustive definition.',
        status: 'High-confidence literary finding / translation-resilient',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              'The phrase is presented over or in relation to the waters, with movement expressed through *merahephet*. The text does not pause to provide an exhaustive ontology or doctrine.',
            ],
          },
          {
            label: '*Merahephet* evidence',
            body: [
              'The Deuteronomy 32:11 correspondence illuminates the movement root. But Genesis itself supplies no bird, nest, wings, or explicit maternal image.',
              'Movement or hovering is warranted; a developed brooding-bird metaphor is not presently authorized.',
            ],
          },
          {
            label: 'Purpose safeguard',
            body: [
              "The text demonstrably gives scene before exhaustive definition. The stronger claim that this proves God's universal pedagogical preference for experience-before-definition remains inferential.",
            ],
          },
          {
            label: 'Previous formulation / revision',
            body: [
              'Earlier attraction to brooding or mother-bird imagery was narrowed to movement/hovering because Genesis 1:2 itself does not supply the full metaphor.',
            ],
          },
        ],
        sources: [
          { label: 'Genesis 1:2', href: 'https://www.biblegateway.com/verse/en/Genesis%201%3A2' },
          { label: 'Deuteronomy 32:11', href: 'https://www.biblegateway.com/verse/en/Deuteronomy%2032%3A11' },
          {
            label: 'Berkovic, Merahefet',
            href: 'https://hrcak.srce.hr/en/clanak/38509',
          },
        ],
      },
      {
        id: 'G12-AR-11',
        title: 'Attend Before Defining',
        claim:
          'The encounter with *ruach Elohim* supports a reader discipline of attending carefully to what the text gives before demanding exhaustive definition.',
        status: 'Strong reader-effect inference / methodological application',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              'The investigation encountered genuine ambiguity, stable textual features, multiple serious interpretations, unresolved questions, and continuing disclosure.',
            ],
          },
          {
            label: 'Why we presently hold it',
            body: [
              'Two responses proved disproportionate: premature certainty and interpretive paralysis. The text permitted a third posture: attend carefully to what has actually been disclosed while leaving unresolved what has not yet been settled.',
            ],
          },
          {
            label: 'Reader/relational lens',
            body: [
              'The reader may say, "I do not fully understand this. But I am paying attention." That effect arises from demonstrable textual features: something has been disclosed, something remains unresolved, and the narrative continues.',
            ],
          },
          {
            label: 'Counterevidence / complication',
            body: [
              'Attend before defining does not mean never define, doctrine is unnecessary, precise language is unimportant, ambiguity is spiritually preferable to clarity, or every interpretation is equally legitimate.',
            ],
          },
          {
            label: 'Canonical correspondence',
            body: [
              'Later revelation may deepen, clarify, or reframe the reader\'s understanding of *ruach Elohim*. That possibility reinforces attend now; continue later.',
            ],
          },
          {
            label: 'Correspondence with human experience',
            body: [
              'Ordinary relational knowing offers an analogy: a person may be genuinely encountered before being exhaustively understood. The analogy helps readers grasp the practice but does not establish the interpretation of Genesis 1:2.',
            ],
          },
        ],
        sources: [
          { label: 'Genesis 1:2', href: 'https://www.biblegateway.com/verse/en/Genesis%201%3A2' },
          { label: 'NET Bible Genesis 1:2 notes', href: 'https://netbible.org/bible/Genesis+1' },
        ],
      },
    ],
    revisionRecord: [
      {
        id: 'G12-RR-01',
        earlier: 'God chose this beginning because creatures need a starting place they can understand.',
        challenge: 'Textual effect was being converted into precise divine communicative purpose.',
        present:
          'Genesis gives finite readers a place from which they can begin; precise divine pedagogical purpose remains inferential.',
        relatedArgumentRecordIds: ['G12-AR-01', 'G12-AR-10', 'G12-AR-11'],
      },
      {
        id: 'G12-RR-02',
        earlier: 'Gift is first.',
        challenge: 'Divine initiative/reception is narratively observable; gift adds theological characterization.',
        present: 'Humanity enters as recipient of a reality it did not initiate; gift remains a meaningful inference.',
        relatedArgumentRecordIds: ['G12-AR-02'],
      },
      {
        id: 'G12-RR-03',
        earlier: 'Human existence is something God wanted / God wants me.',
        challenge: "Genesis 1:1-2 does not yet contain humanity or disclose God's motive.",
        present: 'Human existence belongs to what God deliberately brings about in the larger Genesis 1 narrative.',
        relatedArgumentRecordIds: ['G12-AR-03'],
      },
      {
        id: 'G12-RR-04',
        earlier: '*Tohu wabohu* depicts a beautiful/orderly unfinished stage rather than chaos.',
        challenge: 'Hebrew scholarship permits competing positive descriptions.',
        present:
          'The phrase does not itself establish moral evil, rebellion, or divine defeat; exact positive characterization remains contested.',
        relatedArgumentRecordIds: ['G12-AR-04'],
      },
      {
        id: 'G12-RR-05',
        earlier: '*Tohu wabohu* means unfinished.',
        challenge: 'Lexical meaning and literary development had been conflated.',
        present:
          'Genesis presents an earlier condition before later differentiation/filling without identifying it as failure.',
        relatedArgumentRecordIds: ['G12-AR-05'],
      },
      {
        id: 'G12-RR-06',
        earlier: 'Darkness is simply neutral.',
        challenge: 'Lack of moralization does not prove absence of all literary/theological significance.',
        present: 'Darkness is present without being identified as moral evil.',
        relatedArgumentRecordIds: ['G12-AR-06'],
      },
      {
        id: 'G12-RR-07',
        earlier: 'God is calm, unhurried, enjoying the process.',
        challenge: 'These formulations exceeded the narrative by claiming access to divine psychology.',
        present: 'Genesis does not narrate God as panicked, threatened, defeated, or struggling for control.',
        relatedArgumentRecordIds: ['G12-AR-07'],
      },
      {
        id: 'G12-RR-08',
        earlier: '*Ruach Elohim* straightforwardly means the later doctrinal Holy Spirit.',
        challenge: 'Hebrew lexical range and serious competing translations.',
        present:
          '*Ruach Elohim* remains translation-sensitive; later doctrine may correspond without settling the lexical question in advance.',
        relatedArgumentRecordIds: ['G12-AR-08', 'G12-AR-09'],
      },
      {
        id: 'G12-RR-09',
        earlier: 'If *ruach Elohim* remains ambiguous, little can confidently be known.',
        challenge: 'Placement, movement, and narrative relation survive much of the disagreement.',
        present: 'Ambiguity requires care without producing epistemic emptiness; uncertainty remains local.',
        relatedArgumentRecordIds: ['G12-AR-09', 'G12-AR-10', 'G12-AR-11'],
      },
      {
        id: 'G12-RR-10',
        earlier: '*Merahephet* establishes a mother-bird brooding image.',
        challenge: 'Deuteronomy 32:11 illuminates the root, but Genesis supplies no bird/nest/wings imagery.',
        present:
          'Movement/hovering is warranted; a developed brooding-bird metaphor is not presently authorized.',
        relatedArgumentRecordIds: ['G12-AR-10'],
      },
    ],
    architecture: [
      'Essay - The Encounter: accessible narrative of discovery.',
      'Claim Audit - The Judgment: consequential claims, present status, concise rationale, and links into the audit trail.',
      'Argument Records - The Audit Trail: supporting evidence, counterevidence, competing interpretations, revisions, canonical and human-experience correspondence, and sources.',
      'Revision Record - The Provenance: earlier formulation, pressure from evidence, present judgment, and related Argument Records.',
    ],
    closingPrinciples: [
      'A correction is evidence that the method is working, not something publication should conceal.',
      'The essay remains the accessible encounter; the audit carries the heavier epistemic machinery.',
      'The reader should be able to move from judgment back toward evidence.',
    ],
  },
  {
    title: 'Let the Beginning Remain a Beginning',
    slug: 'let-the-beginning-remain-a-beginning',
    essaySlug: 'let-the-beginning-remain-a-beginning',
    deck: 'Claim Audit & Argument Records for the Genesis 1:1-2 continuation essay.',
    statusNote:
      'Present status means present status. New evidence may strengthen, weaken, revise, or overturn any judgment below.',
    rows: [
      {
        claim: 'Genesis 1:1-2 leaves major questions unanswered while nevertheless providing genuine disclosure.',
        status: 'High-confidence literary finding / strong epistemic inference',
        rationale:
          'The opening leaves substantial questions unresolved while still placing identifiable information about God and the scene before the reader.',
        argumentRecordId: 'G12-AR-12',
      },
      {
        claim:
          'The opening gives enough to begin responsible recognition, not enough to finish every theological question.',
        status: 'Strong reader-effect inference / methodological synthesis',
        rationale:
          'Genuine disclosure and genuine incompletion coexist. Enough means enough to begin responsible recognition, not enough to complete every doctrine or later theological question.',
        argumentRecordId: 'G12-AR-13',
      },
      {
        claim: "Genesis's selection and sequence order what becomes available to the reader's attention first.",
        status: 'High-confidence literary finding / strong reader-effect inference',
        rationale:
          'Some realities are presented before many questions readers later bring. A later application showed that Genesis introduces God as Creator before human religious boundaries appear.',
        argumentRecordId: 'G12-AR-14',
        emergentRecordIds: ['G12-ER-01'],
      },
      {
        claim:
          "Demonstrable textual effect should be distinguished from claims about God's precise communicative purpose.",
        status: 'High-confidence methodological judgment / weakened-revised purpose claim',
        rationale:
          'Selection, sequence, and reader effect are observable. Claims about precisely why God selected those features require additional evidence unless purpose itself is disclosed.',
        argumentRecordId: 'G12-AR-15',
      },
      {
        claim:
          'Later revelation should be allowed to arrive rather than being imported prematurely into the opening.',
        status: 'High-confidence methodological judgment / canonical-sequencing principle',
        rationale:
          'Later biblical truth may inform, test, deepen, or correct an earlier reading without being treated as though Genesis 1:1-2 had already explicitly supplied it.',
        argumentRecordId: 'G12-AR-16',
      },
      {
        claim:
          'Later Scripture may confirm, deepen, complicate, or correct our interpretation; the earlier text is not thereby "immature."',
        status: 'High-confidence methodological judgment / strong theological-methodological inference',
        rationale:
          "The biblical text must be distinguished from the reader's recognition of it. Later evidence has genuine corrective authority over interpretation.",
        argumentRecordId: 'G12-AR-17',
        argumentRecordIds: ['G12-AR-17', 'G12-AR-18'],
      },
      {
        claim:
          'First recognition should remain teachable: carried forward without being absolutized, erased, or made predictive of everything later revelation will disclose.',
        status: 'Strong methodological synthesis / relational-theological safeguard',
        rationale:
          'Genuine recognition need not become final mastery. Corrigibility also need not collapse into epistemic emptiness.',
        argumentRecordId: 'G12-AR-19',
        argumentRecordIds: ['G12-AR-19', 'G12-AR-20'],
      },
      {
        claim: 'Genuine knowledge of God need not be exhaustive knowledge of God.',
        status: 'Strong theological-epistemic inference / canonically corroborated',
        rationale:
          'Genesis provides real disclosure without exhaustive explanation. Later disciple narratives provide canonical correspondence for genuine knowing amid substantial incompletion.',
        argumentRecordId: 'G12-AR-22',
      },
      {
        claim:
          'Genuine relationship with God can coexist with incomplete understanding, and correction need not automatically mean rejection.',
        status: 'Strong relational-theological finding / canonically corroborated',
        rationale:
          'John 13, John 16, Mark 8, and Luke 24 show incomplete or mistaken understanding, continued relationship, correction, and further teaching.',
        argumentRecordId: 'G12-AR-21',
        argumentRecordIds: ['G12-AR-21', 'G12-AR-24', 'G12-AR-25'],
      },
      {
        claim:
          'God may genuinely make Himself known without becoming exhaustively containable within creaturely explanation.',
        status: 'Strong theological synthesis / broader biblical-theological premise',
        rationale:
          'The local investigation establishes genuine but incomplete disclosure. Containment language extends this into broader Creator-creature theology and remains classified as synthesis.',
        argumentRecordId: 'G12-AR-23',
      },
    ],
    boundaryClaims: [
      {
        claim: 'Genesis 1:1-2 supplies a complete doctrine of God, creation, Spirit, or every later theological question.',
        status: 'Not presently authorized',
        reason:
          'The opening gives enough to begin responsible recognition, not enough to finish every theological question.',
      },
      {
        claim: "Later revelation exists mainly to confirm or enlarge the reader's first portrait.",
        status: 'Weakened/rejected formulation',
        reason:
          'Later Scripture may confirm, deepen, complicate, or correct interpretation. It must retain authority to surprise the reader.',
      },
      {
        claim: 'A relationally helpful interpretation is therefore textually true.',
        status: 'Not presently authorized',
        reason:
          'The order remains text, responsible inference, relational implication, not the reverse.',
      },
      {
        claim: 'Creator before our boundaries means all religious claims are equally valid.',
        status: 'Not presently authorized',
        reason:
          'G12-ER-01 concerns priority and horizon, not the resolution of later questions about covenant, worship, truth, election, or salvation.',
      },
    ],
    argumentRecords: [
      {
        id: 'G12-AR-12',
        title: 'Genuine Disclosure Amid Unanswered Questions',
        claim: 'Genesis 1:1-2 leaves major questions unanswered while nevertheless providing genuine disclosure.',
        status: 'High-confidence literary finding / strong epistemic inference',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              "Genesis 1:1-2 names God, creation, heaven and earth, the earth's early condition, darkness, deep, waters, and *ruach Elohim*, while leaving many later questions unanswered.",
            ],
          },
          {
            label: 'Why we presently hold it',
            body: [
              'Unanswered questions do not cancel disclosed content. The passage withholds exhaustive explanation while still giving identifiable realities for responsible attention.',
            ],
          },
          {
            label: 'Counterevidence / complication',
            body: [
              'This does not mean every desired question is irrelevant. It means those questions should not be treated as already answered by the opening.',
            ],
          },
        ],
        sources: [
          { label: 'Genesis 1:1-2', href: 'https://www.biblegateway.com/passage/?search=Genesis%201%3A1-2&version=KJV' },
        ],
      },
      {
        id: 'G12-AR-13',
        title: 'Enough to Begin',
        claim:
          'The opening gives enough to begin responsible recognition, not enough to finish every theological question.',
        status: 'Strong reader-effect inference / methodological synthesis',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              'The text combines genuine disclosure with genuine incompletion. It gives a beginning rather than mastery.',
            ],
          },
          {
            label: 'Boundary',
            body: [
              'Enough is task-specific. It means enough to begin responsible recognition, not enough for a complete doctrine of God, creation, Spirit, or every later theological question.',
            ],
          },
          {
            label: 'Previous formulation / revision',
            body: ['Less than exhaustive disclosure does not equal no meaningful knowledge.'],
          },
        ],
        sources: [
          { label: 'Genesis 1:1-2', href: 'https://www.biblegateway.com/passage/?search=Genesis%201%3A1-2&version=KJV' },
        ],
      },
      {
        id: 'G12-AR-14',
        title: 'Ordered Attention',
        claim: "Genesis's selection and sequence order what becomes available to the reader's attention first.",
        status: 'High-confidence literary finding / strong reader-effect inference',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              'The received text places God, creative action, heaven and earth, the earth before completion, darkness, deep, waters, and *ruach Elohim* before many later questions readers bring.',
            ],
          },
          {
            label: 'Why we presently hold it',
            body: [
              'Selection and sequence are observable features of the text. They order attention without settling every question about why God chose this exact beginning.',
            ],
          },
          {
            label: 'Public audit relationship',
            body: [
              'B-03 is supported by this original Argument Record. The later Creator-before-boundaries application is separately marked as G12-ER-01.',
            ],
          },
        ],
        sources: [
          { label: 'Genesis 1:1-2', href: 'https://www.biblegateway.com/passage/?search=Genesis%201%3A1-2&version=KJV' },
        ],
      },
      {
        id: 'G12-AR-15',
        title: 'Effect Is Not Automatically Purpose',
        claim:
          "Demonstrable textual effect should be distinguished from claims about God's precise communicative purpose.",
        status: 'High-confidence methodological judgment / weakened-revised purpose claim',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              'The text demonstrably selects some realities and sequences them before others. That creates reader effect.',
            ],
          },
          {
            label: 'Why we presently hold it',
            body: [
              'A claim about precisely why God selected those features requires additional evidence unless purpose itself is disclosed.',
            ],
          },
          {
            label: 'Previous formulation / revision',
            body: [
              'The investigation shifted from "Why did God choose to begin this way?" toward "What does this selection and sequence demonstrably do?"',
            ],
          },
        ],
      },
      {
        id: 'G12-AR-16',
        title: 'Let Later Revelation Arrive',
        claim:
          'Later revelation should be allowed to arrive rather than being imported prematurely into the opening.',
        status: 'High-confidence methodological judgment / canonical-sequencing principle',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              'Genesis 1:1-2 begins a canonical sequence; it does not speak every later word at once.',
            ],
          },
          {
            label: 'Why we presently hold it',
            body: [
              'Later biblical truth may inform, test, deepen, or correct an earlier reading without being treated as though the opening had already explicitly supplied it.',
            ],
          },
          {
            label: 'Boundary',
            body: ['Not first does not mean not ever. It means later revelation should be allowed to arrive as later revelation.'],
          },
        ],
        sources: [
          { label: 'Genesis 1:1-2', href: 'https://www.biblegateway.com/passage/?search=Genesis%201%3A1-2&version=KJV' },
        ],
      },
      {
        id: 'G12-AR-17',
        title: 'Later Revelation Can Correct Recognition',
        claim:
          'Later Scripture may confirm, deepen, complicate, or correct our interpretation of an earlier text.',
        status: 'High-confidence methodological judgment / strong theological-methodological inference',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              'The essay distinguishes the earlier text from the reader\'s recognition of it. The text is not immature; interpretation may be.',
            ],
          },
          {
            label: 'Why we presently hold it',
            body: [
              'Later evidence has genuine corrective authority over interpretation. This prevents first recognition from becoming confirmation bias.',
            ],
          },
        ],
        sources: [
          { label: 'John 16:12-15', href: 'https://www.biblegateway.com/passage/?search=John%2016%3A12-15&version=KJV' },
          { label: 'Luke 24:25-32', href: 'https://www.biblegateway.com/passage/?search=Luke%2024%3A25-32&version=KJV' },
        ],
      },
      {
        id: 'G12-AR-18',
        title: 'The Earlier Text Is Not Immature',
        claim:
          'Later correction of interpretation does not mean the earlier revelation itself was immature.',
        status: 'High-confidence methodological judgment / canonical-sequencing safeguard',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              'A reader may misrecognize what a text gives, or overextend a first recognition, without the earlier text being defective.',
            ],
          },
          {
            label: 'Boundary',
            body: [
              'Later Scripture should not be used to erase the beginning, and the beginning should not be used to control everything later Scripture is allowed to say.',
            ],
          },
        ],
        sources: [
          { label: 'John 13:7', href: 'https://www.biblegateway.com/verse/en/John%2013%3A7' },
          { label: 'Mark 8:27-34', href: 'https://www.biblegateway.com/passage/?search=Mark%208%3A27-34&version=KJV' },
        ],
      },
      {
        id: 'G12-AR-19',
        title: 'Corrigible Recognition',
        claim:
          'First recognition should remain teachable: carried forward without being absolutized, erased, or made predictive of everything later revelation will disclose.',
        status: 'Strong methodological synthesis / relational-theological safeguard',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              'Genesis gives a genuine beginning. The reader must carry what has been seen while allowing later Scripture to test and refine the recognition.',
            ],
          },
          {
            label: 'Why we presently hold it',
            body: [
              'Genuine recognition need not become final mastery. Corrigibility need not become epistemic emptiness.',
            ],
          },
          {
            label: 'Previous formulation / revision',
            body: ['Recognizable does not mean predictable. Do not defend the first portrait; continue knowing the Person.'],
          },
        ],
      },
      {
        id: 'G12-AR-20',
        title: 'Recognizable Does Not Mean Predictable',
        claim:
          'A true first recognition may remain recognizable while later revelation surprises, deepens, or corrects the reader.',
        status: 'Strong relational-theological safeguard',
        sections: [
          {
            label: 'Correspondence with human experience',
            body: [
              'Ordinary relational knowing can begin truthfully without predicting everything a person will later reveal. The analogy illustrates the reading posture; it does not authorize the exegesis.',
            ],
          },
          {
            label: 'Boundary',
            body: [
              "Later Scripture is not required to fit the reader's existing portrait. It retains authority to surprise.",
            ],
          },
        ],
      },
      {
        id: 'G12-AR-21',
        title: 'Correction Within Relationship',
        claim:
          'Genuine relationship with God can coexist with incomplete understanding, and correction need not automatically mean rejection.',
        status: 'Strong relational-theological finding / canonically corroborated',
        sections: [
          {
            label: 'Canonical correspondence',
            body: [
              'John 13, John 16, Mark 8, and Luke 24 show disciples in continuing relationship while misunderstanding, receiving correction, or awaiting further teaching.',
            ],
          },
          {
            label: 'Why we presently hold it',
            body: [
              'The later canonical pass strengthened the relational hypothesis generated by the Genesis investigation without manufacturing the Genesis finding retroactively.',
            ],
          },
          {
            label: 'Previous formulation / revision',
            body: [
              'God tolerates incomplete understanding was replaced by a richer pattern: continuing relationship, teaching, correction, and further disclosure.',
            ],
          },
        ],
        sources: [
          { label: 'John 13:7', href: 'https://www.biblegateway.com/verse/en/John%2013%3A7' },
          { label: 'John 16:12-15', href: 'https://www.biblegateway.com/passage/?search=John%2016%3A12-15&version=KJV' },
          { label: 'Mark 8:27-34', href: 'https://www.biblegateway.com/passage/?search=Mark%208%3A27-34&version=KJV' },
          { label: 'Luke 24:25-32', href: 'https://www.biblegateway.com/passage/?search=Luke%2024%3A25-32&version=KJV' },
        ],
      },
      {
        id: 'G12-AR-22',
        title: 'True Without Exhaustive',
        claim: 'Genuine knowledge of God need not be exhaustive knowledge of God.',
        status: 'Strong theological-epistemic inference / canonically corroborated',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              'Genesis provides real disclosure without exhaustive explanation. The reader can know truly without knowing exhaustively.',
            ],
          },
          {
            label: 'Boundary',
            body: [
              'This does not mean every incomplete belief about God is therefore genuine knowledge. Each belief must still be supported by evidence.',
            ],
          },
          {
            label: 'Canonical correspondence',
            body: [
              'The disciple narratives give canonical correspondence for genuine knowing amid substantial incompletion.',
            ],
          },
        ],
        sources: [
          { label: 'John 13:7', href: 'https://www.biblegateway.com/verse/en/John%2013%3A7' },
          { label: 'John 16:12-15', href: 'https://www.biblegateway.com/passage/?search=John%2016%3A12-15&version=KJV' },
        ],
      },
      {
        id: 'G12-AR-23',
        title: 'Known Without Being Contained',
        claim:
          'God may genuinely make Himself known without becoming exhaustively containable within creaturely explanation.',
        status: 'Strong theological synthesis / broader biblical-theological premise',
        sections: [
          {
            label: 'Primary evidence',
            body: [
              'The local investigation establishes genuine but incomplete disclosure. The language of containment extends this into broader Creator-creature theology.',
            ],
          },
          {
            label: 'Boundary',
            body: [
              'Containment is not a direct lexical finding from Genesis 1:1-2. Its status remains theological synthesis.',
            ],
          },
        ],
      },
      {
        id: 'G12-AR-24',
        title: 'Further Teaching Within Relationship',
        claim:
          'Incomplete understanding may be met with further teaching rather than relational dismissal.',
        status: 'Strong canonical correspondence / relational-theological finding',
        sections: [
          {
            label: 'Canonical correspondence',
            body: [
              'John 16:12-15 presents further teaching as something disciples cannot yet bear but will later receive. Luke 24 shows correction and opened understanding within continuing encounter.',
            ],
          },
          {
            label: 'Boundary',
            body: [
              'These later passages test and strengthen the relational hypothesis; they are not used to make Genesis 1:1-2 say what it has not said.',
            ],
          },
        ],
        sources: [
          { label: 'John 16:12-15', href: 'https://www.biblegateway.com/passage/?search=John%2016%3A12-15&version=KJV' },
          { label: 'Luke 24:25-32', href: 'https://www.biblegateway.com/passage/?search=Luke%2024%3A25-32&version=KJV' },
        ],
      },
      {
        id: 'G12-AR-25',
        title: 'Correction Need Not Mean Rejection',
        claim: 'Correction can occur within continuing relationship and need not automatically mean rejection.',
        status: 'Strong canonical correspondence / relational-theological finding',
        sections: [
          {
            label: 'Canonical correspondence',
            body: [
              "Mark 8 shows Peter's recognition and misrecognition in close sequence, followed by severe correction without erasing discipleship. John 13 shows present incomprehension held within continuing relationship.",
            ],
          },
          {
            label: 'Boundary',
            body: [
              'Correction as mercy may be appropriate theological reflection, but mercy is not made to carry evidentiary weight beyond what the canonical pass supports.',
            ],
          },
        ],
        sources: [
          { label: 'Mark 8:27-34', href: 'https://www.biblegateway.com/passage/?search=Mark%208%3A27-34&version=KJV' },
          { label: 'John 13:7', href: 'https://www.biblegateway.com/verse/en/John%2013%3A7' },
        ],
      },
    ],
    emergentRecords: [
      {
        id: 'G12-ER-01',
        title: 'Creator Before Our Boundaries',
        provenanceLabel: 'Post-publication emergent insight',
        claim:
          'Genesis introduces God as Creator before the narrative introduces any human religious community, and later biblical particularity therefore arises within a Creator-creature horizon that precedes it.',
        status:
          'Strong literary-theological inference / externally corroborated / post-publication emergent insight',
        sections: [
          {
            label: 'Required synthesis',
            body: [
              "Genesis does not introduce the Creator from inside a religious boundary. It introduces every later boundary from inside the Creator's world.",
            ],
          },
          {
            label: 'Provenance',
            body: [
              'This insight emerged after publication by applying the matured method again. It authorizes a narrow Movement IV addition and supports B-03 as a later development, not as an original Argument Record.',
            ],
          },
          {
            label: 'Guardrails',
            body: [
              'The claim does not establish that all religions are equally true, all religious claims are equally warranted, covenant is unimportant, election is illegitimate, God never distinguishes among peoples, all worship is equivalent, universal salvation, or religious institutions are inherently corrupt.',
              'The insight concerns priority and horizon, not resolution of later religious questions.',
            ],
          },
          {
            label: 'External dialogue',
            body: [
              'Sacks helps preserve universal human horizon without erasing particular vocation. Levenson helps name a universal horizon for biblical particularism while warning against simplistic universal/particular binaries. Clifford and Brooke keep creation traditions historically and theologically located. Kaminsky and Lohr warn against flattening election or particularity into modern preferences.',
            ],
          },
          {
            label: 'Future questions',
            body: [
              'Future work may address universal Creatorhood and election, creation and covenant, "our God" without proprietary containment, religious outsiders, particularity and universality, and Jesus and these categories.',
            ],
          },
        ],
        sources: [
          {
            label: 'Sacks, The Dignity of Difference',
            href: 'https://www.tandfonline.com/doi/abs/10.1080/15570274.2009.9523391',
          },
          {
            label: 'Levenson, The Universal Horizon of Biblical Particularism',
            href: 'https://doi.org/10.1163/9789004493544_010',
          },
          {
            label: 'Clifford, Creation Accounts in the Ancient Near East and in the Bible',
            href: 'https://wipfandstock.com/9781666786590/creation-accounts-in-the-ancient-near-east-and-in-the-bible/',
          },
          {
            label: 'Kaminsky, Election in the Hebrew Bible',
            href: 'https://bibleinterp.arizona.edu/articles/election-hebrew-bible',
          },
          {
            label: 'Lohr, Chosen and Unchosen',
            href: 'https://www.eisenbrauns.org/books/titles/978-1-57506-171-9.html',
          },
          {
            label: 'Brooke, Creation in the Biblical Tradition',
            href: 'https://doi.org/10.1111/j.1467-9744.1987.tb00848.x',
          },
        ],
      },
    ],
    revisionRecord: [
      {
        id: 'G12-RR-01',
        earlier: 'God chose this beginning because creatures need a starting place they can understand.',
        challenge: 'Textual effect was being converted into precise divine communicative purpose.',
        present:
          'Genesis gives finite readers a place from which they can begin; precise divine pedagogical purpose remains inferential.',
        relatedArgumentRecordIds: ['G12-AR-12', 'G12-AR-13', 'G12-AR-15'],
      },
      {
        id: 'G12-RR-09',
        earlier: 'If *ruach Elohim* remains ambiguous, little can confidently be known.',
        challenge: 'Placement, movement, and narrative relation survive much of the disagreement.',
        present: 'Ambiguity requires care without producing epistemic emptiness; uncertainty remains local.',
        relatedArgumentRecordIds: ['G12-AR-12', 'G12-AR-13'],
      },
      {
        id: 'G12-RR-11',
        earlier: 'Why did God choose to begin this way?',
        challenge: 'Purpose was being inferred from demonstrable textual effect.',
        present: 'Ask first what this selection and sequence demonstrably do; theological purpose questions remain inferential.',
        relatedArgumentRecordIds: ['G12-AR-14', 'G12-AR-15'],
      },
      {
        id: 'G12-RR-12',
        earlier: 'Less than exhaustive disclosure leaves the reader with too little to know meaningfully.',
        challenge: 'Genesis gives real disclosure and real incompletion together.',
        present: 'Enough to begin is different from enough to finish.',
        relatedArgumentRecordIds: ['G12-AR-13'],
      },
      {
        id: 'G12-RR-13',
        earlier: 'Later revelation should preserve or enlarge the first picture.',
        challenge: 'Later Scripture may also complicate or correct the reader.',
        present: 'Later revelation should be allowed to confirm, deepen, complicate, or correct interpretation.',
        relatedArgumentRecordIds: ['G12-AR-16', 'G12-AR-17', 'G12-AR-18'],
      },
      {
        id: 'G12-RR-14',
        earlier: 'Later revelation mainly confirms or deepens the first picture.',
        challenge: 'Canonical examples showed correction as well as confirmation and deepening.',
        present: 'Later revelation may confirm, deepen, complicate, or correct the reader\'s first interpretation.',
        relatedArgumentRecordIds: ['G12-AR-17', 'G12-AR-18'],
      },
      {
        id: 'G12-RR-15',
        earlier: 'A recognizable God should fit the reader\'s first portrait.',
        challenge: 'Recognition can become defensive predictability.',
        present: 'Recognizable does not mean predictable; continue knowing the Person rather than defending the portrait.',
        relatedArgumentRecordIds: ['G12-AR-19', 'G12-AR-20'],
      },
      {
        id: 'G12-RR-16',
        earlier: 'God tolerates incomplete understanding.',
        challenge: 'The canonical pattern is richer than reluctant tolerance.',
        present: 'Genuine relationship can continue through teaching, correction, and further disclosure.',
        relatedArgumentRecordIds: ['G12-AR-21', 'G12-AR-24', 'G12-AR-25'],
      },
      {
        id: 'G12-RR-17',
        earlier: 'Correction is mercy.',
        challenge: 'Mercy was carrying more evidentiary weight than the investigation established.',
        present: 'Correction can occur within continuing relationship and need not automatically mean rejection.',
        relatedArgumentRecordIds: ['G12-AR-21', 'G12-AR-25'],
      },
      {
        id: 'G12-RR-18',
        earlier: 'Known without being contained is a direct Genesis 1:1-2 finding.',
        challenge: 'Containment language extends beyond direct lexical observation.',
        present: 'God makes Himself known without becoming containable is theological synthesis grounded in genuine but incomplete disclosure.',
        relatedArgumentRecordIds: ['G12-AR-22', 'G12-AR-23'],
      },
    ],
    architecture: [
      'Essay - The Encounter: accessible narrative of discovery.',
      'Claim Audit - The Judgment: consequential claims, present status, concise rationale, and links into the audit trail.',
      'Argument Records - The Audit Trail: supporting evidence, counterevidence, competing interpretations, revisions, canonical and human-experience correspondence, and sources.',
      'Post-Publication Development - The Later Insight: new adjudicated insight with distinct provenance.',
      'Revision Record - The Provenance: earlier formulation, pressure from evidence, present judgment, and related Argument Records.',
    ],
    closingPrinciples: [
      'Do not make the original essay say it always knew G12-ER-01.',
      'Do not hide that the later insight is consequential.',
      'The reader should be able to move from judgment back toward evidence without losing provenance.',
    ],
  },
  {
    title: 'You Can Look Now',
    slug: 'you-can-look-now',
    essaySlug: 'you-can-look-now',
    deck: 'Claim Audit & Argument Records for the Genesis 1:9-13 essay.',
    statusNote:
      'Present status means present status. New evidence may strengthen, weaken, revise, or overturn any judgment below.',
    rows: [
      {
        claim: 'God discloses intended outcomes before the narrative reports their realization.',
        status: 'High-confidence finding',
        rationale:
          'Both third-day movements begin with divine speech describing what is to occur before the result is presented.',
        argumentRecordId: 'ar-01-prior-disclosure',
      },
      {
        claim: "God's disclosed intentions substantively correspond with the resulting reality.",
        status: 'High-confidence finding',
        rationale:
          'The command/result pattern repeats across the unit and survives Hebrew, ancient witnesses, and modern translations.',
        argumentRecordId: 'ar-02-speech-and-reality',
      },
      {
        claim: 'The dry land is presented as becoming visible.',
        status: 'High-confidence finding',
        rationale:
          'Appearance and visibility survive Hebrew, Greek, Latin, Spanish, Korean, and other witnesses.',
        argumentRecordId: 'ar-03-what-becomes-visible',
      },
      {
        claim: "God's repeated naming gives the reader language for the differentiated world being disclosed.",
        status: 'High-confidence literary finding',
        rationale:
          'Day, Night, Heavens, Earth, and Seas are explicitly supplied through divine naming.',
        argumentRecordId: 'ar-04-naming-and-shared-language',
      },
      {
        claim:
          'The earth receives a genuine productive function without the text explicitly attributing independent intention to it.',
        status: 'Strong finding',
        rationale:
          'God says the earth is to produce vegetation, and the earth subsequently does so.',
        argumentRecordId: 'ar-05-the-earth-produces',
      },
      {
        claim: 'Seed introduces future-oriented reproductive capacity.',
        status: 'High-confidence finding',
        rationale:
          "Seed is explicit in both God's prospective description and the resulting vegetation.",
        argumentRecordId: 'ar-06-the-future-inside-the-fruit',
      },
      {
        claim: 'Continuation is presented as patterned rather than indeterminate.',
        status: 'High-confidence finding; locally translation-sensitive',
        rationale:
          'According-to-kind language establishes patterned continuation, although its exact distribution varies.',
        argumentRecordId: 'ar-07-seed-kind-and-continuity',
      },
      {
        claim: 'The represented world becomes increasingly accessible to ordinary human observation.',
        status: 'Strong cumulative finding',
        rationale:
          'The narrative moves toward land, seas, vegetation, trees, fruit, and seed.',
        argumentRecordId: 'ar-08-you-can-look-now',
      },
      {
        claim:
          "The reader's evidence ecology broadens as narrated testimony is supplemented by experiential correspondence.",
        status: 'Strong inference',
        rationale:
          'Readers still depend upon the narrative for the creation claim, but can increasingly encounter described regularities.',
        argumentRecordId: 'ar-09-when-evidence-leaves-the-page',
      },
      {
        claim: 'The Person can remain mysterious without remaining a stranger.',
        status: 'Strong synthesis',
        rationale:
          "Unresolved questions coexist with accumulating observations concerning God's behavior.",
        argumentRecordId: 'ar-10-mystery-and-warranted-confidence',
      },
      {
        claim: 'The narrative architecture provides grounds from which confidence in God can reasonably grow.',
        status: 'Strong cumulative inference',
        rationale:
          'Prior disclosure, repeated correspondence, accumulated history, naming, and observable regularities converge.',
        argumentRecordId: 'ar-11-evidence-and-trust',
      },
      {
        claim: 'Cultivating trust is the primary purpose of Genesis 1.',
        status: 'Not presently authorized',
        rationale:
          'The reader-facing architecture can support trust, but other substantial literary purposes remain viable.',
        argumentRecordId: 'ar-12-effect-is-not-purpose',
      },
    ],
    argumentRecords: [
      {
        id: 'ar-01-prior-disclosure',
        title: 'Prior Disclosure',
        claim: 'God discloses intended outcomes before the narrative reports their realization.',
        status: 'High-confidence finding / translation-resilient',
        sections: [
          {
            body: [
              "Genesis 1:9 announces gathering and appearance before fulfillment. Genesis 1:11 announces the earth's production of seed-bearing vegetation before the result. The prospective structure survives Hebrew, Greek, Spanish, and modern translations.",
            ],
          },
          {
            label: 'Boundary',
            body: ['Prior disclosure is a finding. Why the narrative uses it remains inferential.'],
          },
        ],
        sources: [
          { label: 'Hebrew Genesis 1:9', href: 'https://www.fellowshipbook.org/en/genesis/1/9' },
          { label: 'Septuagint Genesis 1:9', href: 'https://septuaginta.net/gn1-9' },
          {
            label: 'RVR1960/NVI Genesis 1:9-11',
            href: 'https://www.biblegateway.com/passage/?search=G%C3%A9nesis+1%3A9-11&version=RVR1960%3BNVI',
          },
        ],
      },
      {
        id: 'ar-02-speech-and-reality',
        title: 'Speech & Reality',
        claim: "God's disclosed intention substantively corresponds with resulting reality.",
        status: 'High-confidence finding / translation-resilient',
        sections: [
          {
            body: [
              "The Septuagint makes Genesis 1:9's fulfillment especially explicit. A Qumran witness supports part of this expanded tradition. Ancient Jewish readers also noticed differences between command and realization in 1:11-12.",
            ],
            quote: 'Substantive correspondence is not transcription.',
          },
          {
            label: 'Canonical correspondence',
            body: ['John 14:11 later explicitly permits belief on account of observable works.'],
          },
        ],
        sources: [
          { label: 'LXX Genesis 1:9', href: 'https://septuaginta.net/gn1-9' },
          { label: 'LXX/Qumran evidence', href: 'https://library.biblicalarchaeology.org/sidebar/genesis-19/' },
          { label: 'Rashi on Genesis 1:11', href: 'https://www.sefaria.org/Rashi_on_Genesis.1.11?with=Genesis' },
          { label: 'John 14:11', href: 'https://www.biblegateway.com/verse/en/John%2014%3A11' },
        ],
      },
      {
        id: 'ar-03-what-becomes-visible',
        title: 'What Becomes Visible',
        claim: 'Dry land is presented as becoming visible.',
        status: 'High-confidence finding / highly translation-resilient',
        sections: [
          {
            body: [
              'Hebrew uses seeing/appearance language; Greek preserves appearance/being-seen language. Reina-Valera 1960 uses *descubrase lo seco*, making uncovering especially salient.',
            ],
          },
          {
            label: 'Emergent question',
            body: ['Is Genesis sometimes revealing by uncovering rather than simply adding?'],
          },
          {
            label: 'Status',
            body: ['Emergent hypothesis, not finding.'],
          },
        ],
        sources: [
          { label: 'Hebrew Genesis 1:9', href: 'https://www.fellowshipbook.org/en/genesis/1/9' },
          { label: 'LXX Genesis 1:9', href: 'https://septuaginta.net/gn1-9' },
          {
            label: 'RVR1960 Genesis 1:9',
            href: 'https://www.biblegateway.com/passage/?search=G%C3%A9nesis+1%3A9&version=RVR1960',
          },
        ],
      },
      {
        id: 'ar-04-naming-and-shared-language',
        title: 'Naming & Shared Language',
        claim: "God's repeated naming gives the reader language for the differentiated world.",
        status: 'High-confidence literary finding',
        sections: [
          {
            body: ["The reader receives God's narrated designations: Day, Night, Heavens, Earth, Seas."],
          },
          {
            label: 'Relational inference',
            body: ['Shared names make common reference possible.'],
          },
          {
            label: 'Competing possibilities',
            body: ['Naming may also concern authority, classification, differentiation, function, or order.'],
          },
          {
            label: 'Canonical correspondence',
            body: ['Genesis 2:19 later portrays God bringing animals to the human to see what the human will call them.'],
          },
        ],
        sources: [
          {
            label: 'Genesis 1:9-10',
            href: 'https://www.biblegateway.com/passage/?search=Genesis+1%3A9-10&version=NIV',
          },
          { label: 'Genesis 2:19', href: 'https://www.biblegateway.com/verse/en/Genesis_2%3A19' },
        ],
      },
      {
        id: 'ar-05-the-earth-produces',
        title: 'The Earth Produces',
        claim:
          'The earth receives a genuine productive function without the text explicitly attributing independent intention to it.',
        status: 'Strong finding',
        sections: [
          {
            label: 'Earlier formulation',
            body: ['The earth has no agency.'],
          },
          {
            label: 'Challenge',
            body: [
              "Rashi, drawing on Genesis Rabbah, preserves an ancient reading in which the earth is treated as failing to carry out the command exactly. Whether adopted or not, it shows that the wording can generate an agency-like reading.",
            ],
          },
          {
            label: 'Revision',
            body: [
              'The text attributes productive function to the earth without explicitly attributing intention, deliberation, or independent purpose.',
              'John Walton independently emphasizes role, purpose, function, and ordering in Genesis 1. His larger thesis is not required for our finding, but it is a serious competing framework.',
            ],
          },
        ],
        sources: [
          { label: 'Rashi on Genesis 1:11', href: 'https://www.sefaria.org/Rashi_on_Genesis.1.11?with=Genesis' },
          {
            label: 'Walton on function/order',
            href: 'https://biologos.org/series/reflections-on-the-lost-world-of-genesis-1-by-john-walton/articles/material-or-function-in-genesis-1-john-walton-responds',
          },
          { label: 'Isaiah 55:10', href: 'https://www.biblegateway.com/verse/en/Isaiah%2055%3A10' },
        ],
      },
      {
        id: 'ar-06-the-future-inside-the-fruit',
        title: 'The Future Inside the Fruit',
        claim: 'Seed introduces future-oriented reproductive capacity.',
        status: 'High-confidence finding',
        sections: [
          {
            body: [
              'Seed relates the presently existing plant to subsequent possible plants. Rashi explains seed-bearing concretely as seed that can be planted elsewhere; Ramban independently reads reproductive capacity as providing continuation of the kinds.',
            ],
          },
          {
            label: 'Boundary',
            body: ['This does not establish endless duration.'],
          },
          {
            label: 'Strong inference',
            body: ["God's disclosed intention now extends beyond the initially narrated living specimens."],
          },
        ],
        sources: [
          { label: 'Rashi on Genesis 1:11', href: 'https://www.sefaria.org/Rashi_on_Genesis.1.11?with=Genesis' },
          { label: 'Ramban on Genesis 1:11', href: 'https://www.sefaria.org/Ramban_on_Genesis.1.11.1?with=Genesis' },
        ],
      },
      {
        id: 'ar-07-seed-kind-and-continuity',
        title: 'Seed, Kind & Continuity',
        claim: 'Continuation is presented as patterned rather than indeterminate.',
        status: 'High-confidence finding / locally translation-sensitive',
        sections: [
          {
            body: [
              '"According to kind" accompanies reproductive description, while exact distribution and phrasing vary across textual traditions and translations.',
            ],
          },
          {
            label: 'Rejected overreach',
            body: ['Genesis 1:11-12 establishes modern biological species categories.'],
          },
          {
            label: 'Present judgment',
            body: ['Reproduction is narratively patterned; its precise relationship to modern taxonomy is not established here.'],
          },
        ],
        sources: [
          { label: 'Genesis 1:11 with Rashi', href: 'https://www.sefaria.org/Rashi_on_Genesis.1.11?with=Genesis' },
          { label: 'Ramban', href: 'https://www.sefaria.org/Ramban_on_Genesis.1.11.1?with=Genesis' },
        ],
      },
      {
        id: 'ar-08-you-can-look-now',
        title: 'You Can Look Now',
        claim: 'The represented world becomes increasingly accessible to ordinary human observation.',
        status: 'Strong cumulative finding',
        sections: [
          {
            body: [
              'Earlier realities include beginning, deep, waters, *ruach Elohim*, and expanse. The third day increasingly foregrounds Earth, Seas, vegetation, trees, fruit, and seed.',
            ],
          },
          {
            label: 'Distinction',
            body: [
              'Lexical access is understanding exactly what a word means. Referential access is encountering the reality toward which the word points.',
            ],
            quote: 'Referential access increasingly supplements lexical access.',
          },
          {
            label: 'Boundary',
            body: ['Familiarity with a referent cannot determine ancient lexical meaning by itself.'],
          },
        ],
        sources: [
          {
            label: 'Genesis 1:9-13',
            href: 'https://www.biblegateway.com/passage/?search=Genesis+1%3A9-13',
          },
          {
            label: 'RVR1960 Genesis 1:9-13',
            href: 'https://www.bible.com/es/bible/149/GEN.1.9-13.RVR1960',
          },
        ],
      },
      {
        id: 'ar-09-when-evidence-leaves-the-page',
        title: 'When Evidence Leaves the Page',
        claim:
          "The reader's evidence ecology broadens as narrated testimony is supplemented by experiential correspondence.",
        status: 'Strong inference',
        sections: [
          {
            body: [
              'The reader still requires Genesis for Genesis\' creation claim. But the reader can encounter the kinds of regularities described: land, seas, vegetation, fruit, seed, growth, and patterned reproduction.',
            ],
          },
          {
            label: 'Revision',
            body: ['"Independent observation" was too strong. Better: the evidence ecology broadens.'],
          },
          {
            label: 'Canonical correspondence',
            body: [
              "Acts 14:17 treats rain and fruitful seasons as witness concerning God. Isaiah 55:10 uses rain, earth, sprouting, and seed as the analogy for the effectiveness of God's word.",
            ],
          },
          {
            label: 'Boundary',
            body: ['Experiential correspondence does not prove the historical mechanism of Genesis 1.'],
          },
        ],
        sources: [
          { label: 'Acts 14:17', href: 'https://www.biblegateway.com/verse/en/Acts%2014%3A17' },
          { label: 'Isaiah 55:10', href: 'https://www.biblegateway.com/verse/en/Isaiah%2055%3A10' },
        ],
      },
      {
        id: 'ar-10-mystery-and-warranted-confidence',
        title: 'Mystery & Warranted Confidence',
        claim: 'The Person can remain mysterious without remaining a stranger.',
        status: 'Strong synthesis',
        sections: [
          {
            body: [
              "Major questions remain unresolved, including the precise force of *ruach Elohim* and mechanisms of creation. Yet observations concerning God's speech, correspondence, naming, seeing, appraisal, and continued action accumulate.",
            ],
            quote: 'Question does not equal uncertainty, and uncertainty does not equal doubt.',
          },
          {
            body: ['Uncertainty should remain attached to the claim whose evidence warrants it.'],
          },
          {
            label: 'Boundary',
            body: ['We cannot claim that every unexplained detail was intentionally withheld specifically to teach this lesson.'],
          },
          {
            label: 'Methodological consequence',
            body: ['Incomplete explanation does not entail unreliable revelation.'],
          },
        ],
      },
      {
        id: 'ar-11-evidence-and-trust',
        title: 'Evidence & Trust',
        claim: 'The narrative architecture provides grounds from which confidence in God can reasonably grow.',
        status: 'Strong cumulative inference',
        sections: [
          {
            label: 'Genesis evidence',
            body: [
              'Prior disclosure, substantive correspondence, repetition, accumulated history, shared designations, and increasingly observable regularities.',
            ],
          },
          {
            label: 'Canonical correspondence',
            body: [
              'John 14:11 explicitly permits belief because of observable works. Acts 14:17 treats ordinary created regularities as witness concerning God.',
            ],
          },
          {
            label: 'Human-experience correspondence',
            body: [
              'Experimental research finds that subjective consistency predicts trust judgments and trusting behavior. Research on communication and promises also finds that preplay communication, predominantly promises, substantially increases trust and cooperation.',
            ],
          },
          {
            label: 'Control',
            body: [
              'Consistency alone does not establish trustworthiness. Human correspondence tests intelligibility; it does not authorize the Genesis interpretation.',
            ],
            quote:
              'Genesis supplies an accumulating evidentiary environment capable of grounding confidence in the Person being revealed.',
          },
        ],
        sources: [
          { label: 'John 14:11', href: 'https://www.biblegateway.com/verse/en/John%2014%3A11' },
          { label: 'Acts 14:17', href: 'https://www.biblegateway.com/verse/en/Acts%2014%3A17' },
          { label: 'Nowak et al., Scientific Reports (2023)', href: 'https://www.nature.com/articles/s41598-023-32034-4' },
          { label: 'Ederer & Schneider, AEJ: Microeconomics (2022)', href: 'https://www.aeaweb.org/doi/10.1257/mic.20200049' },
        ],
      },
      {
        id: 'ar-12-effect-is-not-purpose',
        title: 'Effect Is Not Purpose',
        claim: 'Cultivating trust is the primary purpose of Genesis 1.',
        status: 'Not presently authorized',
        sections: [
          {
            body: [
              'The narrative demonstrably permits prior disclosure, comparison, accumulated history, and increasingly observable correspondence. These are capable of grounding confidence.',
              'But external scholarship identifies other substantial concerns, including order, function, sacred space, and ancient cosmology. John Walton, for example, argues strongly that Genesis 1 focuses on ordering, role, purpose, and function.',
              'The issue is not finding a safe middle ground. The question is whether present evidence authorizes trust formation as the controlling purpose.',
              'It does not.',
            ],
            quote:
              'Trust formation is a plausible consequence of the reader-facing architecture and possibly part of its purpose, but it cannot presently be established as the primary purpose of Genesis 1.',
          },
        ],
        sources: [
          {
            label: 'Walton - Material or Function in Genesis 1?',
            href: 'https://biologos.org/series/reflections-on-the-lost-world-of-genesis-1-by-john-walton/articles/material-or-function-in-genesis-1-john-walton-responds',
          },
          {
            label: 'Walton - Reading Genesis 1 Through Ancient Eyes',
            href: 'https://biologos.org/articles/reading-genesis-1-through-ancient-not-modern-eyes',
          },
        ],
      },
    ],
    revisionRecord: [
      {
        earlier: 'The earth has no agency.',
        challenge: 'Ancient Jewish readings exposed the categorical nature of the claim.',
        present:
          'The earth receives productive function without explicit disclosure of intention or independent purpose.',
      },
      {
        earlier: 'Command and fulfillment closely duplicate one another.',
        challenge: 'Textual variation and rabbinic attention to differences.',
        present:
          "God's disclosed intention and resulting reality substantively correspond without requiring verbal duplication.",
      },
      {
        earlier: 'The reader becomes increasingly independently able to verify the narrative.',
        challenge: 'The phrase overstated independence from textual testimony.',
        present: "The reader's evidence ecology broadens through experiential correspondence.",
      },
      {
        earlier: 'Increasingly observable reality shows that Genesis intends to build trust.',
        challenge: 'Competing literary purposes and Effect does not equal Purpose.',
        present: 'The architecture can ground confidence; trust as primary purpose remains unestablished.',
      },
      {
        earlier: 'The Spirit remains present throughout the account.',
        challenge: 'Narrative silence cannot establish continuing location or function.',
        present: 'Departure is not narrated; subsequent status remains unresolved.',
      },
    ],
    architecture: [
      'Essay - The Encounter: accessible narrative of discovery.',
      'Claim Audit - The Judgment: consequential claims, present status, concise rationale, and links into the audit trail.',
      'Argument Records - The Audit Trail: supporting evidence, counterevidence, competing interpretations, revisions, canonical and human-experience correspondence, and sources.',
    ],
    closingPrinciples: [
      'Accessibility must not require hiding uncertainty.',
      'Rigor must not require making expertise the price of admission.',
      'The reader should be able to move from judgment back toward evidence.',
    ],
  },
  {
    title: 'When God Looks at Light',
    slug: 'when-god-looks-at-light',
    essaySlug: 'when-god-looks-at-light',
    deck: 'Claim Audit & Argument Records for the Genesis 1:3-5 essay.',
    statusNote:
      'Present status means present status. New evidence may strengthen, weaken, revise, or overturn any judgment below.',
    rows: [
      {
        claim: "In Genesis 1:3, God's expressed intention concerning light corresponds with the resulting reality.",
        status: 'High-confidence finding / translation-resilient',
        rationale:
          "Yehi 'or -> wayehi 'or gives strong local correspondence. The finding does not establish a universal metaphysical proposition about every divine intention.",
        argumentRecordId: 'ar-01-expressed-intention',
      },
      {
        claim:
          'Through Genesis 1:1-5, God remains the only explicitly disclosed center of intentional agency.',
        status: 'High-confidence finding / translation-resilient',
        rationale:
          'Intentional and conceptual activity is concentrated in God; created realities are not explicitly attributed deliberation, volition, or self-determined purpose.',
        argumentRecordId: 'ar-02-intentional-agency',
      },
      {
        claim:
          "Genesis 1:1-5 narrates large-scope divine creative activity with striking economy and without explicit divine self-praise emphasizing the magnitude of God's achievement.",
        status: 'High-confidence literary finding / translation-resilient with rhetorical sensitivity',
        rationale:
          'Narrative compression is clear, though exact economy varies by translation. Stronger psychological claims about admiration are not authorized.',
        argumentRecordId: 'ar-03-narrative-economy',
      },
      {
        claim:
          'Genesis 1:4 presents God as seeing the light and discloses His positive appraisal.',
        status: 'High-confidence finding + strong inference / translation-resilient',
        rationale:
          'God saw is immediately joined to tov. Nothing in the speech/result sequence depicts failed realization requiring inspection.',
        argumentRecordId: 'ar-04-god-saw-appraisal',
      },
      {
        claim:
          "For the sequential reader of Genesis, the first tov occurs as God's positive appraisal of light before human moral performance enters the narrative.",
        status: 'High-confidence finding / translation-resilient with lexical sensitivity',
        rationale:
          'Tov has a broader positive semantic range than a simple moral binary. Human command, guilt, obedience, and moral performance have not yet entered the story.',
        argumentRecordId: 'ar-05-first-tov',
      },
      {
        claim: "Light's explicit appraisal as tov does not authorize declaring darkness morally evil or ra.",
        status: 'High-confidence finding / translation-resilient',
        rationale:
          'Darkness is neither explicitly called tov nor ra. It is separated, named Night, and retained within the developing order.',
        argumentRecordId: 'ar-06-darkness-not-evil',
      },
      {
        claim: 'Positive divine appraisal and continued development/order coexist within the first creative movement.',
        status: 'High-confidence structural finding + strong inference / translation-resilient',
        rationale:
          'Light is tov, yet God continues differentiating and naming while the larger project remains incomplete.',
        argumentRecordId: 'ar-07-good-and-unfinished',
      },
      {
        claim:
          "God's differentiation of light and darkness is not narrated as hostility, combat, resistance, or defeat between competing intentional agents.",
        status: 'High-confidence finding / translation-resilient',
        rationale:
          'God separates and names rather than destroys. No competing intention is attributed to darkness.',
        argumentRecordId: 'ar-08-differentiation-without-hostility',
      },
      {
        claim: 'Day and Night are the immediate designations God gives the differentiated light and darkness.',
        status: 'High-confidence finding / translation-resilient',
        rationale:
          'These are the categories Genesis itself supplies before later symbolism. They constrain an immediate Good/Evil reading without excluding later symbolic uses.',
        argumentRecordId: 'ar-09-day-and-night',
      },
      {
        claim:
          "Genesis 1:3-5 gives readers limited but genuine revelatory access to aspects of God's perspective.",
        status: 'High-confidence composite finding + strong relational inference / translation-resilient',
        rationale:
          "God's expressed intention, attention, positive appraisal, distinctions, and designations accumulate without implying exhaustive access to divine cognition.",
        argumentRecordId: 'ar-10-access-to-gods-perspective',
      },
      {
        claim:
          'Effective divine creative action coexists with staged progression rather than instantaneous completion of the larger project.',
        status: 'High-confidence structural finding / translation-resilient',
        rationale:
          'Effective speech/result correspondence is followed by appraisal, differentiation, naming, and a bounded temporal unit.',
        argumentRecordId: 'ar-11-progressive-creation',
      },
      {
        claim:
          "Genesis 1:3-5 positions readers to consider created reality in relation to God's disclosed perspective.",
        status: 'Strong reader-effect finding / provisional perceptual-formation hypothesis',
        rationale:
          'Reader positioning arises from demonstrable textual features and narratological support; specific divine purpose remains provisional.',
        argumentRecordId: 'ar-12-reader-perception',
      },
    ],
    boundaryClaims: [
      {
        claim: 'Darkness is evil because light is tov.',
        status: 'Not presently authorized',
        reason: 'The text supplies no ra appraisal of darkness.',
      },
      {
        claim: 'Darkness must therefore also be tov.',
        status: 'Not presently authorized',
        reason: 'The text specifically appraises light; do not erase the asymmetry.',
      },
      {
        claim: "Matter consciously obeys God's command.",
        status: 'Not presently authorized',
        reason: 'No intentional agency is attributed to matter.',
      },
      {
        claim: 'Ruach Elohim is explicitly the mechanism producing light.',
        status: 'Open question / not presently authorized',
        reason: 'Divine activity is present, but mechanism is undisclosed.',
      },
      {
        claim: 'Tov means exclusively functional.',
        status: 'Not presently authorized',
        reason: 'Its semantic range is broader.',
      },
      {
        claim: 'God evaluates light to discover whether creation succeeded.',
        status: 'Weakened/rejected formulation',
        reason: 'Appraises better fits the evidence without importing uncertainty.',
      },
      {
        claim: 'God is an artist.',
        status: 'Not presently authorized / rejected formulation',
        reason: "Genesis' category is Creator; only the activity's motif is compared with composition rather than conflict.",
      },
      {
        claim: 'Genesis 1:3 explicitly teaches the electromagnetic spectrum.',
        status: 'Not presently authorized',
        reason: 'Modern physical knowledge concerns the referent; it cannot determine the ancient lexical claim.',
      },
      {
        claim: "God's silence about mechanism proves opposition to inquiry.",
        status: 'Not presently authorized',
        reason: 'Silence constrains claims but does not establish motive.',
      },
      {
        claim: 'God withheld explanation specifically to stimulate curiosity.',
        status: 'Provisional purpose hypothesis',
        reason: 'A curiosity-producing effect is possible; purpose is not established.',
      },
      {
        claim: 'God structured Genesis 1:3-5 specifically to train readers to see as He sees.',
        status: 'Provisional hypothesis',
        reason: 'Reader positioning is much stronger than evidence for communicative purpose.',
      },
      {
        claim: 'Progressive creation explains later human suffering or divine delay.',
        status: 'Not presently authorized',
        reason: 'The local process observation cannot carry that later theological burden.',
      },
    ],
    argumentRecords: [
      {
        id: 'ar-01-expressed-intention',
        title: 'Expressed Intention',
        claim: "In Genesis 1:3, God's expressed intention concerning light corresponds with the resulting reality.",
        status: 'High-confidence finding / translation-resilient',
        sections: [
          {
            body: [
              "The local wording moves from yehi 'or to wayehi 'or: light-be, and light was. The essay can state this as real correspondence while the audit preserves scope.",
            ],
          },
          {
            label: 'Boundary',
            body: [
              "This does not establish a universal metaphysical claim about every possible divine intention. It establishes what Genesis 1:3 narrates here.",
            ],
          },
        ],
      },
      {
        id: 'ar-02-intentional-agency',
        title: 'Intentional Agency',
        claim:
          'Through Genesis 1:1-5, God remains the only explicitly disclosed center of intentional agency.',
        status: 'High-confidence finding / translation-resilient',
        sections: [
          {
            body: [
              'Created realities may function or participate, but the text has not explicitly attributed deliberation, volition, self-determined purpose, or independent intention to them.',
            ],
          },
          {
            label: 'Essay consequence',
            body: [
              'The essay can keep the line, "The only disclosed Mind is God\'s," because disclosed carries the necessary epistemic restraint.',
            ],
          },
        ],
      },
      {
        id: 'ar-03-narrative-economy',
        title: 'Narrative Economy',
        claim:
          "Genesis 1:1-5 narrates large-scope divine creative activity with striking economy and without explicit divine self-praise emphasizing the magnitude of God's achievement.",
        status: 'High-confidence literary finding / translation-resilient with rhetorical sensitivity',
        sections: [
          {
            body: [
              'The magnitude of what is narrated and the economy of the narration are clear literary features. The stronger claim concerns presentation, not inferred divine psychology.',
            ],
          },
          {
            label: 'Revision pressure',
            body: [
              'The essay should avoid making God\'s internal motive or attention more specific than the narrative presentation authorizes.',
            ],
          },
        ],
      },
      {
        id: 'ar-04-god-saw-appraisal',
        title: 'God Saw & Appraisal',
        claim:
          'Genesis 1:4 presents God as seeing the light and discloses His positive appraisal; the sequence is better characterized as attention/appraisal than uncertain inspection.',
        status: 'High-confidence finding + strong inference / translation-resilient',
        sections: [
          {
            body: [
              'God saw is immediately joined to tov. Nothing in the preceding speech/result sequence depicts failed realization requiring quality-control inspection.',
            ],
          },
          {
            label: 'Essay consequence',
            body: [
              'The essay may speak of God placing attention on the light as long as this remains provisional and tied to the narrated sequence.',
            ],
          },
        ],
      },
      {
        id: 'ar-05-first-tov',
        title: 'The First Tov',
        claim:
          "For the sequential reader of Genesis, the first tov occurs as God's positive appraisal of light before human moral performance enters the narrative.",
        status: 'High-confidence finding / translation-resilient with lexical sensitivity',
        sections: [
          {
            body: [
              'The immediate context has not yet introduced human command, guilt, obedience, disobedience, reward, failure, accusation, or moral performance.',
            ],
          },
          {
            label: 'Lexical boundary',
            body: [
              'Tov carries a broad positive range and should not be reduced to a simple moral binary or to a single functional meaning.',
            ],
          },
        ],
      },
      {
        id: 'ar-06-darkness-not-evil',
        title: 'Darkness Not Evil',
        claim: "Light's explicit appraisal as tov does not authorize declaring darkness morally evil or ra.",
        status: 'High-confidence finding / translation-resilient',
        sections: [
          {
            body: [
              'Darkness is neither explicitly called tov nor ra. It is subsequently separated, named Night, and retained within the developing order.',
            ],
          },
          {
            label: 'Boundary',
            body: ['Silence cannot be converted into the opposite assertion.'],
          },
        ],
      },
      {
        id: 'ar-07-good-and-unfinished',
        title: 'Good & Unfinished',
        claim: 'Positive divine appraisal and continued development/order coexist within the first creative movement.',
        status: 'High-confidence structural finding + strong inference / translation-resilient',
        sections: [
          {
            body: [
              'Light is tov, yet God continues differentiating and naming while the larger project remains incomplete. Good does not mean finished is an appropriate essay simplification.',
            ],
          },
          {
            label: 'Local scope',
            body: [
              "The positive appraisal concerns light within an unfinished larger project, not a blanket appraisal of the entire unfinished project.",
            ],
          },
        ],
      },
      {
        id: 'ar-08-differentiation-without-hostility',
        title: 'Differentiation Without Hostility',
        claim:
          "God's differentiation of light and darkness is not narrated as hostility, combat, resistance, or defeat between competing intentional agents.",
        status: 'High-confidence finding / translation-resilient',
        sections: [
          {
            body: [
              'God separates and names rather than destroys. No competing intention is attributed to darkness. The activity resembles composition/order more than conflict while God remains Creator, not artist.',
            ],
          },
        ],
      },
      {
        id: 'ar-09-day-and-night',
        title: 'Day & Night',
        claim: 'Day and Night are the immediate designations God gives the differentiated light and darkness.',
        status: 'High-confidence finding / translation-resilient',
        sections: [
          {
            body: [
              'These are the categories Genesis supplies before later symbolism. They constrain an immediate Good/Evil reading without excluding later symbolic uses.',
            ],
          },
          {
            label: 'Boundary',
            body: ['Designation does not exhaust ontology.'],
          },
        ],
      },
      {
        id: 'ar-10-access-to-gods-perspective',
        title: "Access to God's Perspective",
        claim:
          "Genesis 1:3-5 gives readers limited but genuine revelatory access to aspects of God's perspective.",
        status: 'High-confidence composite finding + strong relational inference / translation-resilient',
        sections: [
          {
            body: [
              "God's expressed intention, attention, positive appraisal, distinctions, and designations are made available to readers. Access to God's mind is appropriate essay language when understood as limited disclosed access, not exhaustive divine cognition.",
            ],
          },
        ],
      },
      {
        id: 'ar-11-progressive-creation',
        title: 'Progressive Creation',
        claim:
          'Effective divine creative action coexists with staged progression rather than instantaneous completion of the larger project.',
        status: 'High-confidence structural finding / translation-resilient',
        sections: [
          {
            body: [
              'Effective speech/result correspondence is followed by appraisal, differentiation, naming, and a bounded temporal unit. Process therefore cannot itself be treated as evidence of incapacity.',
            ],
          },
          {
            label: 'Essay consequence',
            body: ['Power does not require immediacy is appropriately simplified for the essay.'],
          },
        ],
      },
      {
        id: 'ar-12-reader-perception',
        title: 'Reader Perception',
        claim:
          "Genesis 1:3-5 positions readers to consider created reality in relation to God's disclosed perspective.",
        status: 'Strong reader-effect finding / provisional perceptual-formation hypothesis',
        sections: [
          {
            body: [
              'Reader positioning arises from demonstrable textual features and has narratological support. The stronger claim that God specifically designed the passage to train human perception remains provisional.',
            ],
          },
          {
            label: 'Essay consequence',
            body: [
              'The section headed "Perhaps Genesis Is Teaching Us How to Look" should remain provisional rather than be flattened into technical prose.',
            ],
          },
        ],
      },
    ],
    revisionRecord: [
      {
        earlier: "Matter responds/obeys God's command.",
        challenge:
          'Nothing created is explicitly attributed intention or volition; later methodology distinguished participation from intentional agency.',
        present:
          'God expresses intention and corresponding reality is narrated; no created intentional response is required.',
      },
      {
        earlier: 'Nothing resists God.',
        challenge: 'Resistance itself presupposes competing volition that has not been disclosed.',
        present: 'No competing intention is disclosed.',
      },
      {
        earlier: 'Matter has no agency.',
        challenge:
          'Later agency methodology distinguished function, productive capacity, participation, grammatical agency, intentional agency, and independent agency.',
        present: 'Nothing created is explicitly attributed intentional or independent agency here.',
      },
      {
        earlier: 'God evaluates the light.',
        challenge: 'Evaluate can imply testing under uncertainty.',
        present: 'God appraises the light positively.',
      },
      {
        earlier: 'Tov means morally good.',
        challenge: 'Hebrew semantic range and immediate context are broader.',
        present: 'Tov expresses positive valuation/appraisal whose exact nuance remains context-dependent.',
      },
      {
        earlier: 'Light is good, therefore darkness is evil.',
        challenge: 'Darkness is neither called ra nor destroyed; it becomes Night.',
        present: "Light's positive appraisal does not authorize a negative moral appraisal of darkness.",
      },
      {
        earlier: 'Darkness therefore must also be good.',
        challenge: 'The text preserves an asymmetry: light alone receives explicit tov.',
        present: 'Darkness remains without explicit positive or negative appraisal here.',
      },
      {
        earlier: 'God calls the unfinished creation good.',
        challenge: 'Tov specifically concerns light at this stage.',
        present: 'God positively appraises light within an unfinished larger project.',
      },
      {
        earlier: 'God is an artist.',
        challenge: 'This confused motif with identity.',
        present: 'God is Creator; the narrated activity resembles composition/order more than conflict.',
      },
      {
        earlier: "We have access to God's mind without qualification.",
        challenge: 'Mind could imply exhaustive divine cognition.',
        present: "Readers receive limited revelatory access to God's disclosed perspective.",
      },
      {
        earlier: 'Genesis teaches us how to see.',
        challenge: 'No explicit command; effect/purpose distinction developed later.',
        present:
          "Genesis makes God's perspective available and positions readers to consider reality in relation to it; perceptual formation remains provisional.",
      },
      {
        earlier: 'Human usefulness strengthens the exegesis.',
        challenge: 'Human correspondence cannot authorize textual interpretation.',
        present: 'Human correspondence is tested after textual adjudication and cannot authorize interpretation.',
      },
    ],
    architecture: [
      'Essay - The Encounter: accessible narrative of discovery.',
      'Claim Audit - The Judgment: consequential claims, present status, concise rationale, and links into the audit trail.',
      'Argument Records - The Audit Trail: supporting evidence, counterevidence, competing interpretations, revisions, canonical and human-experience correspondence, and sources.',
    ],
    closingPrinciples: [
      'A correction is evidence that the method is working, not something publication should conceal.',
      'The essay remains the accessible encounter; the audit carries the heavier epistemic machinery.',
      'The reader should be able to move from judgment back toward evidence.',
    ],
  },
];

export function getClaimAuditByEssaySlug(essaySlug: string) {
  return claimAuditEntries.find((entry) => entry.essaySlug === essaySlug);
}
