# Genesis creation movement — closing essays deployment preparation

Prepared September 22, 2026. Local integration and R2 asset sync complete. Production application deployment must be verified after the release push.

## Routes and series order

7. `/essays/and-god-blessed-them` — Genesis 1:20–25.
8. `/essays/when-the-making-was-finished` — Genesis 1:26–2:3.
9. `/essays/look-at-creation-but-watch-god` — final reflection on Genesis 1:1–2:3.

Each uses the existing Knowing God in Genesis series, essay rendering, metadata, archive, and sitemap conventions. Content entries are marked published so the next deployment includes them. Canonical user-approved Markdown is preserved in `docs/internal/essay-drafts/`; generated site content preserves every body block, heading, quotation, and emphasis marker. Public claim audits are attached to all three essays using the user-supplied public tables, separately from the internal dossiers. All 38 claims/boundaries, including three open questions, retain their supplied statuses, rationale, external dialogue, and source links. Collapsed Claim Status tables link to argument-record anchors on the existing claim-audit routes.

## Images

All three hero images are saved under `frontend/public/images/whydive/`, named after their essay slugs. And God Blessed Them uses `-hero.png`; When the Making Was Finished and Look at Creation—but Watch God use the revised `-hero-v2.png` assets. The superseded images remain available locally but are not referenced by the essays. Generation prompts are recorded in `docs/internal/essay-drafts/assets/`.

## Validation

- Exact Markdown-to-content body reconstruction passed for all three essays.
- Production build and TypeScript validation passed (`pnpm frontend:build`). The initial restricted-network build could not fetch existing Google Fonts; the network-enabled build passed.
- Generated HTML includes the correct hero references and all four user-requested textual edits.
- All three entries appear in the generated essay archive and sitemap.

## Remaining release steps

1. Commit and push the reviewed changes to the deployment branch and deploy through the existing Coolify application, following `docs/deployment-coolify.md`.
2. Verify all three live routes and their `static.whydive.org` images after deployment.

R2 synchronization completed successfully before committing the release. The production build and final image-reference checks passed. Commit/push and application rollout status are reported separately in the release task.
