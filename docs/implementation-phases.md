# WhyDive.org Implementation Phases

## Purpose

This document defines the phased implementation plan for WhyDive.org.

The site already has a strategic identity, design direction, image set, foundational thesis, and whitepaper roadmap. This plan turns those documents into an ordered build sequence so implementation decisions happen in the right dependency order.

WhyDive.org should be built as a contemplative framework institute and writing platform. The implementation sequence should protect that purpose.

## Phase 0: Governance and Source-of-Truth Setup

Status:

Complete enough to proceed.

Goal:

Establish the documents that govern site decisions before design and code harden.

Inputs:

- [WhyDive.org Strategic Reference](./whydive-org-strategic-reference.md)
- [WhyDive Foundational Thesis](./whydive-foundational-thesis.md)
- [WhyDive Whitepaper Roadmap](./whydive-whitepaper-roadmap.md)
- [WhyDive.org Site Outline and Design Direction](./site-outline-and-design-direction.md)
- [WhyDive.org AI Search Discovery and Authority Plan](./ai-search-discovery-and-authority.md)
- [Midjourney Image Prompt Plan](./midjourney-image-prompts.md)
- [Image Asset Manifest](./image-asset-manifest.md)

Deliverables:

- Internal documentation in `docs/`
- Site purpose and anti-drift rules
- Initial route map
- Legal/contact posture under Living Spiral Studio LLC

Exit criteria:

- WhyDive.org is clearly defined as the framework home, not a product site.
- Whitepaper hierarchy is documented.
- Current legal/contact posture is documented.

## Phase 1: Brand and Visual Foundation

Status:

Initial implementation complete.

Goal:

Define the foundational visual language before building deeper pages.

This phase includes the font system.

### Font System

Recommended system:

- Fraunces for framework voice
- EB Garamond for contemplative long-form writing
- Inter for structure and interface

Roles:

- Fraunces: major headlines, hero statements, page titles, pull quotes, whitepaper title moments
- EB Garamond: essay bodies, long-form reflective passages, selected editorial introductions
- Inter: navigation, metadata, labels, buttons, captions, cards, tables, footers, technical structure

Rationale:

The WhyDive whitepaper already establishes Fraunces and Inter as a strong pairing. Fraunces gives conceptual weight and distinction; Inter gives modern clarity. EB Garamond should be added for the website because WhyDive.org will become a long-form writing home, and essays need a calmer literary reading voice than an interface sans-serif.

Fonts to retire from the public WhyDive.org identity:

- Montserrat, because it feels too marketing/startup for the site's purpose
- Mulish, because it is clean but not distinctive enough for the framework identity
- Cormorant, because it is beautiful but more ornamental and fragile than the authority WhyDive needs

Implementation notes:

- Use `next/font/google` unless local licensing or performance needs require self-hosting.
- Define CSS variables for each font.
- Create semantic utility classes or design tokens instead of scattering font names across pages.
- Test long-form readability on mobile before finalizing body size and line height.

### Color System

Recommended direction:

- Warm off-white or parchment background
- Deep ink / blue-black text
- Muted teal
- Old-gold accent
- Warm gray and slate support tones

Implementation notes:

- Avoid one-note palettes.
- Do not let the site become only dark blue, only beige, or only teal.
- Use accent color sparingly for hierarchy and wayfinding.

### Image System

Inputs:

- [Image Asset Manifest](./image-asset-manifest.md)

Deliverables:

- Public image paths under `/images/whydive/`
- Hero image treatment
- Page banner treatment
- Image alt text pattern
- Responsive image sizing rules

Exit criteria:

- Fonts are selected and implemented.
- Core colors are implemented as CSS variables or stable utility classes.
- Image usage rules are established.
- Homepage and route shells use the new visual system.

Current implementation notes:

- Fraunces, EB Garamond, and Inter are implemented through `next/font/google`.
- WhyDive color tokens are defined in Tailwind theme configuration.
- Selected images are stored under `/images/whydive/` and wired into the homepage and primary route shells.
- Static image assets can be synced to Cloudflare R2 using the documented workflow in [R2 Static Asset Workflow](./r2-static-assets.md).
- The symbolic institute image system now has a complementary documentary image system for Spaces and relatable case-study pages. Use [Midjourney Image Prompt Plan](./midjourney-image-prompts.md), Prompt Family 9, for educator, clergy, executive, civic, research, and technology scenarios.
- Future refinements should tune spacing, contrast, and long-form reading pages after the content model is established.

## Phase 2: Structural Site Build

Status:

Partially complete.

Goal:

Build the first complete public skeleton with correct routes, navigation, footer, metadata, and page shells.

Current routes:

- `/`
- `/foundations`
- `/foundations/what-is-whydive`
- `/foundations/strong-conclusions-require-strong-evidence`
- `/foundations/framework-overview`
- `/essays`
- `/whitepapers`
- `/research`
- `/applications`
- `/ecosystem`
- `/contact`

Deliverables:

- Shared site chrome
- Shared editorial page shell
- Route metadata
- Responsive navigation
- Living Spiral Studio LLC footer/contact language
- Removal of starter placeholder public routes

Exit criteria:

- Build passes.
- All public launch routes resolve.
- No placeholder starter pages remain in the public navigation.

## Phase 3: Content Architecture

Status:

Initial implementation complete.

Goal:

Turn placeholder sections into structured content systems that can support writing over time.

Deliverables:

- Content model for foundations pages
- Essay content model
- Whitepaper content model
- Research library content model
- Application overview content model
- Ecosystem entity model

Recommended approach:

- Start with local TypeScript/MDX content files.
- Avoid a CMS until the writing format and editorial workflow are clearer.
- Preserve source clarity: each essay or whitepaper should have title, slug, deck, category, status, publication date, updated date, related items, and optional citations.

Exit criteria:

- New essays and whitepapers can be added without rebuilding page layouts.
- Whitepaper hierarchy is reflected in the data model.
- Applications remain clearly distinct from the parent framework.

Current implementation notes:

- Content types are defined in `frontend/src/content/types.ts`.
- Essay categories and first planned essay entries are defined in `frontend/src/content/essays.ts`.
- Whitepaper hierarchy and entries are defined in `frontend/src/content/whitepapers.ts`.
- Research topics are defined in `frontend/src/content/research.ts`.
- Current and future applications are defined in `frontend/src/content/applications.ts`.
- Public index pages now read from these content modules instead of hard-coded local arrays.

## AMOS Adaptation Notes

The AMOS marketing system for Chart-Ed.com should inform WhyDive.org, but it should not be copied directly.

Useful AMOS principles for WhyDive.org:

- Speak to a defined reader instead of an abstract institution.
- State the problem clearly before presenting the framework.
- Avoid proofless claims, empty counters, and ornamental authority.
- Make the next path visible from every major page.
- Name the cost of inaction without turning the site into a sales page.
- Treat the framework ideas as valuable intellectual products that require discoverability,
  authority structure, and a visible path to deeper engagement.

WhyDive-specific adaptation:

- Chart-Ed.com is a product conversion surface; WhyDive.org is a framework and writing surface.
- Calls to action should invite study, reading, correspondence, and application tracing.
- The homepage should identify who the site is for: serious readers, educators, researchers, framework builders, and future implementation partners.
- The central homepage problem should distinguish information, reasoning, judgment, decision, and consequence.
- The site should show a first reading path so a new visitor knows where to begin.
- AI search discovery should be supported through clear cornerstone pages, canonical URLs,
  structured data, `sitemap.xml`, `robots.txt`, and `llms.txt`.

## Phase 4: Foundational Page Completion

Status:

Initial implementation complete.

Goal:

Complete the first set of meaningful public pages.

Priority pages:

1. Home
2. What Is WhyDive?
3. Strong Conclusions Require Strong Evidence
4. Framework Overview
5. Ecosystem
6. Whitepapers index
7. Essays index

Deliverables:

- Full editorial copy
- Strong page intros
- Supporting images where useful
- Internal links among foundations, essays, whitepapers, applications, and ecosystem
- Clear CTA language that invites reading and study rather than sales conversion

Exit criteria:

- A serious first-time visitor can understand what WhyDive is.
- The site does not collapse into WhyDive Education, DLS, or Chart-Ed.
- The homepage communicates the core thesis in less than one minute.

Current implementation notes:

- `What Is WhyDive?` now defines WhyDive as the parent framework, distinguishes it from applications, and introduces the core "why beneath the claim" questions.
- `Strong Conclusions Require Strong Evidence` now functions as a first foundational essay rather than a placeholder, with sections on proportionality, common breakdowns, evidential questions, and disciplined confidence.
- `Framework Overview` now maps evidence, reasoning, conclusion, judgment, decision, and action, with boundary questions and application examples.

## Phase 5: Writing Platform

Status:

Initial template implementation complete.

Goal:

Make WhyDive.org a durable home for long-form writing.

Deliverables:

- Essay index
- Essay detail template
- Category pages
- Related essays
- Reading-time metadata
- Citation/notes section
- Pull quote styling
- Optional table of contents
- Open Graph image pattern

Design requirements:

- Long-form pages must be more readable than ordinary marketing pages.
- Use EB Garamond for extended essay reading where appropriate.
- Maintain restrained line length and generous vertical rhythm.

Exit criteria:

- New essays can be published consistently.
- Reading pages feel contemplative and authoritative on desktop and mobile.

Current implementation notes:

- Essay entries are defined in `frontend/src/content/essays.ts`.
- Essay detail pages are generated at `/essays/[slug]`.
- The first template includes metadata, category/status/read-time slots, image treatment, reading typography, related framework question, and editorial placeholder structure.

## Phase 6: Whitepaper Repository

Status:

Initial template implementation complete.

Goal:

Build a formal whitepaper repository that follows the documented hierarchy.

Inputs:

- [WhyDive Whitepaper Roadmap](./whydive-whitepaper-roadmap.md)

Deliverables:

- Whitepaper index by layer
- Whitepaper detail template
- Abstract, status, version, date, citation, download, and related items
- PDF download handling
- Open Graph images

Exit criteria:

- Foundational framework documents are visibly prior to application documents.
- Every whitepaper answers the anti-drift questions before publication.

Current implementation notes:

- Whitepaper entries and hierarchy are defined in `frontend/src/content/whitepapers.ts`.
- Whitepaper detail pages are generated at `/whitepapers/[slug]`.
- The first template includes layer, question, audience, purpose, relationship, source documents, and anti-drift context.

## Phase 7: Research Library

Status:

Planned.

Goal:

Connect WhyDive to existing scholarship without making the site feel like a static bibliography.

Deliverables:

- Research topic index
- Annotated bibliography format
- Reading guide format
- Research summary format
- Recommended books format

Exit criteria:

- Research content is legible to serious readers.
- The library supports the framework rather than overwhelming it.

## Phase 8: Application and Ecosystem Deepening

Status:

Planned.

Goal:

Clarify the relationship among WhyDive, WhyDive Education, DLS, Chart-Ed Institute, Chart-Ed, Living Spiral Studio LLC, and future applications.

Deliverables:

- Application detail pages
- Ecosystem diagram or visual map
- Entity distinction table
- External links to current application sites

Exit criteria:

- Visitors can understand each entity's role without confusion.
- Future applications can be added without rewriting the ecosystem architecture.

## Phase 9: SEO, Accessibility, Performance, and Deployment

Status:

Planned; initial metadata and mobile QA started.

Goal:

Prepare the site for public launch.

Deliverables:

- Metadata and Open Graph images
- Sitemap
- Robots configuration
- Image optimization
- Accessibility pass
- Mobile layout pass
- Build/deployment configuration
- Domain configuration for whydive.org

Exit criteria:

- Production build passes.
- Lighthouse/accessibility issues are addressed.
- Public legal/contact language is correct.
- The site is deployable as a frontend-first Next app.

Current implementation notes:

- Base Open Graph and Twitter metadata are defined in the root layout.
- Essay and whitepaper detail pages generate entry-specific metadata and social images.
- A mobile-width browser QA pass at approximately 390px wide found no horizontal overflow on the main launch routes or first essay/whitepaper detail pages.
- `sitemap.xml`, `robots.txt`, and `llms.txt` are implemented.
- Organization, WebSite, WebPage, DefinedTerm, Article, and ScholarlyArticle structured data are implemented across the homepage, foundation pages, essays, and whitepapers.
- The AI/search discovery strategy is documented in [WhyDive.org AI Search Discovery and Authority Plan](./ai-search-discovery-and-authority.md).

## Phase 10: Post-Launch Editorial Growth

Status:

Future.

Goal:

Grow WhyDive.org as a serious writing and framework-development platform.

Deliverables:

- Regular essay publishing
- Whitepaper release cadence
- Research library expansion
- Future domain landing pages
- Possible newsletter or update system
- Possible CMS if editorial volume requires it

Exit criteria:

- The site supports ongoing intellectual development without architectural drift.

## Immediate Next Implementation Order

1. Deepen the highest-priority foundation pages with real copy.
2. Refine the homepage copy and section rhythm against the new visual system.
3. Add sitemap and robots configuration.
4. Run a fuller accessibility and visual QA pass.
5. Prepare deployment configuration for whydive.org.
