# When the Tree Changed Without Changing publication package

## Prepared site content

- Route: `/essays/when-the-tree-changed-without-changing`.
- Series: Knowing God in Genesis, installment 11, Genesis 3:1–7.
- Release date metadata: October 1, 2026.
- Reading time: 27 minutes, based on 5,823 body words.
- Canonical prose: `docs/internal/essay-drafts/when-the-tree-changed-without-changing.md`.
- Site content: `frontend/src/content/genesisTreeEssay.ts`, registered in `essays.ts`.
- Selected hero: `/images/whydive/when-the-tree-changed-without-changing-hero.png`.

The introduction and all thirteen sections preserve the supplied essay wording, paragraph order, quotations, emphasis, and subsection heading. The Markdown image becomes the site's hero rather than a duplicated body image. Source-note and discovery metadata are added separately from the prose. The existing site components supply section navigation, print styling, social metadata, structured data, archive/category listings, sitemap, and llms.txt discovery.

## Research records

The seven separate verse dossiers, synthesis, formal claim adjudication, original supplied parts, and citation provenance remain in `docs/internal/essay-dossiers/genesis-3-1-7/`. The methodology update is preserved separately in `docs/internal/methodology/`. Existing citation gaps remain recorded in the collection index. No public claim-audit route is linked because the separate Public Claim Audit Structure has not been supplied. The internal candidate inventory is not presented as that missing artifact.

## Validation

- Production build and TypeScript checks passed; 81 routes generated.
- Body content round-trip matches the canonical Markdown draft exactly after separating title, deck, and hero from body blocks.
- Generated HTML contains all thirteen section headings and the complete final paragraph.
- Generated archive, Religion category, sitemap, and llms.txt include the new essay.
- Local browser preview verified the title, deck, approved hero, and article content.
- Approved hero uploaded individually to R2; public asset URL returned HTTP 200 with image/png content type.
- Targeted ESLint checks passed using the installed Next.js flat configs through a temporary config. The repository's existing FlatCompat-based ESLint config fails with a circular-JSON error; that unrelated configuration was left unchanged.

## Manual release

Prepared locally for the user's manual Git push. No Git push or site deployment was performed. The hero upload is complete. After pushing the prepared commit, verify the Coolify rollout and essay route. If release is delayed beyond October 1, adjust the publication-date metadata before the push.
