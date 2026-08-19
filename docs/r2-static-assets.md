# R2 Static Asset Workflow

## Purpose

WhyDive.org uses Cloudflare R2 to relieve the VPS of serving heavy static assets such as page imagery, whitepaper cover images, social images, and PDF whitepapers.

The repository still keeps a local copy of static assets in:

`frontend/public/`

Those local assets provide a development fallback and define the public path structure. In production, the app should point those same paths at the public R2 asset domain.

Example:

`/whitepapers/whydive-framework-why-it-exists.pdf`

becomes:

`https://static.whydive.org/whitepapers/whydive-framework-why-it-exists.pdf`

## Credential Status

The project `.env` contains S3-compatible R2 variables for the `whydive-org` bucket. A signed bucket listing request succeeded, confirming that the current credentials can access the bucket.

Do not commit `.env`.

If these credentials are ever pasted into a shared system, rotate them in Cloudflare and update local `.env`.

## Production Asset Origin

Set this environment variable in Coolify:

```env
NEXT_PUBLIC_ASSET_BASE_URL=https://static.whydive.org
```

Use the final public R2 custom domain or public bucket URL. Do not use the private S3 API endpoint as the public base URL.

When `NEXT_PUBLIC_ASSET_BASE_URL` is set, the app rewrites public asset paths through R2. When it is absent, the app falls back to local `/public` paths for local development.

## Next.js Image Behavior

The app uses the Next.js `Image` component from `next/image` for homepage, editorial, space, and whitepaper cover images.

When `NEXT_PUBLIC_ASSET_BASE_URL` is set, `frontend/next.config.ts` adds that public host to `images.remotePatterns`, allowing Next.js to optimize remote R2 images and serve modern formats such as WebP when the browser supports them.

PDF links are served directly from R2 and are not image-optimized.

## Public Path Contract

R2 keys should mirror `frontend/public` paths exactly:

- `frontend/public/images/whydive/logo-dark.svg` -> `https://static.whydive.org/images/whydive/logo-dark.svg`
- `frontend/public/images/whydive/hero-threshold-water-desktop.png` -> `https://static.whydive.org/images/whydive/hero-threshold-water-desktop.png`
- `frontend/public/whitepapers/whydive-framework-how-it-works.pdf` -> `https://static.whydive.org/whitepapers/whydive-framework-how-it-works.pdf`
- `frontend/public/site.webmanifest` -> `https://static.whydive.org/site.webmanifest`

## Sync Command

Use the project script:

```bash
pnpm assets:sync:r2
```

The script:

- Reads `.env`
- Maps the custom R2 variables to AWS CLI variables
- Syncs `frontend/public/` to `s3://$CHART_ASSETS_S3_BUCKET/`
- Sets browser cache headers suitable for current human-readable asset filenames

Current cache policy:

`public, max-age=86400`

Use content-hashed filenames before switching to immutable one-year caching.

## App Usage Guidance

Use `assetUrl()` for static assets that should be served by R2 in production:

```tsx
<Image src={assetUrl('/images/whydive/hero-threshold-water-desktop.png')} ... />
```

This preserves local development while making Coolify production serve assets from R2.

## Production Image Size

The Docker build excludes heavy local image and whitepaper assets from the Docker context and
runtime image. Production must set:

```env
NEXT_PUBLIC_ASSET_BASE_URL=https://static.whydive.org
```

The runtime image keeps only lightweight root public files, brand SVGs, the advisor PDF, and
`/images/whydive/article-fallback.svg`. This keeps local development convenient while preventing
the VPS/container from carrying the full `frontend/public/images` payload.
