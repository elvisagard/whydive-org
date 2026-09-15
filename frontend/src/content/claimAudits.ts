import type { ClaimAuditEntry } from './types';

export const claimAuditEntries: ClaimAuditEntry[] = [
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
