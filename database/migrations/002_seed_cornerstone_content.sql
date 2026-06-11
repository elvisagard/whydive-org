insert into content_items (
  slug,
  content_type,
  title,
  deck,
  status,
  authority_role,
  content_family,
  canonical_path,
  source_path,
  metadata_json
)
values
  (
    'what-is-whydive',
    'foundation',
    'What Is WhyDive?',
    'WhyDive is a framework for understanding and improving how human beings move from evidence to action.',
    'published',
    'cornerstone',
    'foundations',
    '/foundations/what-is-whydive',
    'frontend/src/app/foundations/what-is-whydive/page.tsx',
    '{"discovery_topic":["evidence to action","reasoning and judgment"],"entity":"WhyDive"}'::jsonb
  ),
  (
    'strong-conclusions-require-strong-evidence',
    'foundation',
    'Strong Conclusions Require Strong Evidence',
    'The governing principle beneath the WhyDive framework.',
    'published',
    'cornerstone',
    'foundations',
    '/foundations/strong-conclusions-require-strong-evidence',
    'frontend/src/app/foundations/strong-conclusions-require-strong-evidence/page.tsx',
    '{"discovery_topic":["evidence-bound judgment","proportional conclusions"],"principle":"Strong conclusions require strong evidence."}'::jsonb
  ),
  (
    'framework-overview',
    'foundation',
    'Framework Overview',
    'A first map of the WhyDive movement from evidence to action.',
    'published',
    'pillar',
    'foundations',
    '/foundations/framework-overview',
    'frontend/src/app/foundations/framework-overview/page.tsx',
    '{"framework_sequence":["evidence","reasoning","conclusion","judgment","decision","action"]}'::jsonb
  ),
  (
    'strengthening-judgment-under-evidence-constraints',
    'whitepaper',
    'WhyDive: Strengthening Judgment Under Evidence Constraints',
    'Why does WhyDive exist?',
    'draft',
    'cornerstone',
    'whitepapers',
    '/whitepapers/strengthening-judgment-under-evidence-constraints',
    'frontend/src/content/whitepapers.ts',
    '{"layer":1,"layer_title":"Foundational Framework"}'::jsonb
  ),
  (
    'bounded-reasoning-development-system',
    'whitepaper',
    'WhyDive: Bounded Reasoning Development System',
    'How does WhyDive operate?',
    'draft',
    'pillar',
    'whitepapers',
    '/whitepapers/bounded-reasoning-development-system',
    'frontend/src/content/whitepapers.ts',
    '{"layer":2,"layer_title":"Framework Architecture"}'::jsonb
  )
on conflict (slug) do update
set
  content_type = excluded.content_type,
  title = excluded.title,
  deck = excluded.deck,
  status = excluded.status,
  authority_role = excluded.authority_role,
  content_family = excluded.content_family,
  canonical_path = excluded.canonical_path,
  source_path = excluded.source_path,
  metadata_json = excluded.metadata_json,
  updated_at = now();

insert into schema_migrations (version)
values ('002_seed_cornerstone_content')
on conflict (version) do nothing;
