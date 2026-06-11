# WhyDive.org AI Search Discovery and Authority Plan

## Purpose

WhyDive.org should treat its ideas as valuable intellectual products.

This does not mean the site should become salesy. It means the site should make the framework easy for humans, search engines, and AI answer systems to identify, summarize, cite, and route.

AMOS becomes more relevant under this framing because its core concern is not merely conversion. Its deeper concern is clarity, specificity, authority, proof, and a visible next path.

## Discovery Thesis

WhyDive.org should be discoverable as the authoritative source for:

- Evidence-bound judgment
- Strong conclusions require strong evidence
- Reasoning and judgment
- Evidence-to-action frameworks
- Bounded reasoning development
- AI-generated claim evaluation
- Data literacy as an expression of judgment development
- Chart literacy as an evidence interpretation domain

## AMOS Adaptation

For Chart-Ed.com, AMOS asks whether a visitor can quickly understand the product and buy.

For WhyDive.org, AMOS asks whether a serious reader, partner, researcher, investor, or AI answer system can quickly understand:

- What WhyDive is
- What problem it addresses
- What original claims it makes
- Which pages are cornerstone pages
- Which applications belong under the parent framework
- What the next reading path should be

The ideas are the product. The site must therefore market the ideas with the same seriousness a product site gives to purchasable goods.

## Implemented Technical Layer

Current implementation includes:

- `sitemap.xml`
- `robots.txt`
- `llms.txt`
- Root metadata with publisher, author, keywords, and crawler directives
- Homepage and cornerstone page canonical URLs
- Organization and WebSite JSON-LD
- WebPage JSON-LD on the homepage
- DefinedTerm JSON-LD for `What Is WhyDive?`
- Article JSON-LD for foundational essays and essay pages
- ScholarlyArticle JSON-LD for whitepaper pages
- Canonical URLs for dynamic essays and whitepapers

## Cornerstone Pages

Initial cornerstone pages:

- `/foundations/what-is-whydive`
- `/foundations/strong-conclusions-require-strong-evidence`
- `/foundations/framework-overview`
- `/whitepapers/strengthening-judgment-under-evidence-constraints`
- `/whitepapers/bounded-reasoning-development-system`

These pages should receive the strongest internal links, the clearest definitions, and the richest metadata.

## Editorial Rules for AI Discoverability

Each cornerstone page should:

- State its core claim in plain language near the top.
- Use stable terms consistently.
- Answer likely direct questions without burying the answer.
- Name boundaries and limitations.
- Avoid vague authority phrases such as "research shows" unless the research is named or summarized.
- Link to the next page in the framework sequence.
- Distinguish parent framework from application.

## Future Work

- Add RSS feeds for essays and whitepapers when publication cadence begins.
- Add `datePublished` and `dateModified` metadata once pages have real publication dates.
- Add citation blocks for whitepapers.
- Add related-content links between cornerstone pages and application pages.
- Add FAQ structured data only after the FAQ content is real and stable.
- Submit `sitemap.xml` in Google Search Console after domain deployment.
