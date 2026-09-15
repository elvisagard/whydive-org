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
];

export function getClaimAuditByEssaySlug(essaySlug: string) {
  return claimAuditEntries.find((entry) => entry.essaySlug === essaySlug);
}
