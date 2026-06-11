create extension if not exists pgcrypto;

create table if not exists schema_migrations (
  version text primary key,
  applied_at timestamptz not null default now()
);

create table if not exists content_items (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  content_type text not null check (
    content_type in (
      'foundation',
      'essay',
      'whitepaper',
      'research_note',
      'application',
      'page'
    )
  ),
  title text not null,
  deck text,
  status text not null default 'draft' check (
    status in ('draft', 'review', 'published', 'archived')
  ),
  authority_role text check (
    authority_role in ('cornerstone', 'pillar', 'foundational', 'anchor', 'supporting')
  ),
  content_family text,
  canonical_path text,
  source_path text,
  body_format text not null default 'md' check (body_format in ('md', 'mdx', 'structured')),
  body_md text,
  metadata_json jsonb not null default '{}'::jsonb,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists content_items_content_type_idx on content_items (content_type);
create index if not exists content_items_status_idx on content_items (status);
create index if not exists content_items_authority_role_idx on content_items (authority_role);
create index if not exists content_items_metadata_json_idx on content_items using gin (metadata_json);

create table if not exists content_assets (
  id uuid primary key default gen_random_uuid(),
  content_item_id uuid not null references content_items (id) on delete cascade,
  role text not null,
  public_url text not null,
  alt_text text,
  metadata_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists content_assets_content_item_id_idx on content_assets (content_item_id);

create table if not exists content_links (
  id uuid primary key default gen_random_uuid(),
  source_content_item_id uuid references content_items (id) on delete cascade,
  target_content_item_id uuid references content_items (id) on delete set null,
  target_url text,
  relationship text not null,
  label text,
  metadata_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  check (target_content_item_id is not null or target_url is not null)
);

create index if not exists content_links_source_content_item_id_idx on content_links (source_content_item_id);
create index if not exists content_links_target_content_item_id_idx on content_links (target_content_item_id);

insert into schema_migrations (version)
values ('001_initial_authority_content')
on conflict (version) do nothing;
