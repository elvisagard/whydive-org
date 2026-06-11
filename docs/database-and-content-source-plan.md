# WhyDive.org Database and Content Source Plan

## Decision

WhyDive.org should use a hybrid content architecture.

Canonical long-form ideas should remain source-controlled as Markdown or MDX while the writing voice, whitepaper hierarchy, and editorial workflow are still forming.

Postgres should support the operational and discovery layer:

- Publication status
- Authority metadata
- Search indexing
- Related-content links
- Asset records
- Future admin review
- Future CMS or editorial dashboard

This keeps the intellectual source of truth durable while still preparing the site for scalable publishing.

## Local Database

Local database name:

`whydive_org`

Recommended local connection string:

`postgres://postgres@localhost:5432/whydive_org`

## Initial Schema

The first migration is:

`database/migrations/001_initial_authority_content.sql`

Run migrations with:

`pnpm db:migrate`

It creates:

- `schema_migrations`
- `content_items`
- `content_assets`
- `content_links`

The second migration seeds the first cornerstone and pillar records:

`database/migrations/002_seed_cornerstone_content.sql`

The schema mirrors the AMOS/content-authority direction:

- Ideas are valuable intellectual products.
- Cornerstone/foundational pages should carry explicit authority metadata.
- Search and AI discovery should not depend on page wording alone.

## Current Boundary

The database is ready for content metadata, but the current Next.js pages still render from local TypeScript content files and hand-authored page components.

Do not move essays and whitepapers fully into the database until one of these becomes true:

- The site needs an admin editor.
- Publication cadence becomes frequent enough to justify CMS workflow.
- Search requires database-backed indexing.
- Multiple content contributors need review/status workflow.

Until then, use Postgres as infrastructure for the next phase, not as a premature replacement for source-controlled writing.
