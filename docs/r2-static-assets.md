# R2 Static Asset Workflow

## Purpose

WhyDive.org can store generated static assets in Cloudflare R2 using the S3-compatible credentials in the project `.env`.

The app currently keeps selected image assets in:

`frontend/public/images/whydive/`

Those local assets are available to Next.js at:

`/images/whydive/<filename>.png`

## Credential Status

The project `.env` contains S3-compatible R2 variables for the `whydive-org` bucket. A signed bucket listing request succeeded, confirming that the current credentials can access the bucket.

Do not commit `.env`.

If these credentials are ever pasted into a shared system, rotate them in Cloudflare and update local `.env`.

## Next.js Image Behavior

The app uses the Next.js `Image` component from `next/image` for the homepage hero and editorial page images.

When deployed with the standard Next.js image optimizer, these images are optimized and served in modern formats such as WebP when the requesting browser supports them. This depends on the deployment target supporting the Next.js image optimization route. A static export-only deployment would not perform the same runtime conversion.

If images are later served directly from an R2 public domain, add the public asset host to `next.config.ts` `images.remotePatterns`.

## Public Base URL

The `.env` includes a placeholder/commented public base URL. Before switching app image references from local `/images/...` paths to R2 URLs, confirm the final public domain for WhyDive assets.

Recommended future shape:

`https://static.whydive.org/images/whydive/<filename>.png`

## Sync Command

Use the project script:

```bash
pnpm assets:sync:r2
```

The script:

- Reads `.env`
- Maps the custom R2 variables to AWS CLI variables
- Syncs `frontend/public/images/whydive/` to `s3://$CHART_ASSETS_S3_BUCKET/images/whydive/`
- Sets browser cache headers suitable for current human-readable asset filenames

Current cache policy:

`public, max-age=86400`

Use content-hashed filenames before switching to immutable one-year caching.

## App Usage Guidance

For now, keep app references local:

```tsx
<Image src="/images/whydive/hero-threshold-water-desktop.png" ... />
```

This keeps the app simple and lets Next.js optimize local public assets. Move to R2 URLs when the public asset domain is finalized.
