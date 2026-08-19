# WhyDive.org Coolify Deployment

WhyDive.org should deploy to Coolify as a Dockerfile-based application from the repository root.

## Why Dockerfile

Coolify can build many Node applications with a build pack, but this repository is a pnpm workspace with the public site inside `frontend/`. A Dockerfile gives the deployment an explicit contract:

- install workspace dependencies from the repository root
- build only the Next.js frontend
- run Next.js from its standalone production server output
- expose one public service on port `3000`
- keep secrets in Coolify environment variables, not in the repository

The Express backend and database migration scripts remain available for later phases, but the current public site is served by the frontend container.

## Coolify Settings

- Application type: Dockerfile
- Repository root: `/`
- Dockerfile path: `Dockerfile`
- Exposed port: `3000`
- Health check path: `/`
- Build command: handled by Dockerfile
- Start command: handled by Dockerfile

## Health Check

Configure the Coolify health check against the public Next.js server:

```text
Health check enabled: Yes
Method: GET
Path: /
Port: 3000
Expected status code: 200
Interval: 30 seconds
Timeout: 10 seconds
Retries: 3
Start period: 30 seconds
```

The root page is prerendered by Next.js and is a good deployment readiness signal for the current static/content-first site. If a dedicated health endpoint is added later, update the path to that endpoint.

## Required Environment Variables

Set the public asset origin so images, PDFs, favicons, and social assets are served from R2 rather than the VPS container:

```env
NEXT_PUBLIC_ASSET_BASE_URL=https://static.whydive.org
CHART_ASSETS_S3_ENDPOINT=
CHART_ASSETS_S3_REGION=auto
CHART_ASSETS_S3_FORCE_PATH_STYLE=true
CHART_ASSETS_S3_BUCKET=whydive-org
CHART_ASSETS_S3_ACCESS_KEY_ID=
CHART_ASSETS_S3_SECRET_ACCESS_KEY=
DATABASE_URL=postgres://postgres:...:5432/postgres?sslmode=require&useLibpqCompat=true
```

`NEXT_PUBLIC_ASSET_BASE_URL` must be the public R2 custom domain or public bucket URL. The `CHART_ASSETS_S3_*` values are for uploading/syncing assets to R2, not for browser delivery.

Do not commit production `.env` files.

## Deployment Notes

The Docker image runs:

```sh
node frontend/server.js
```

That file is produced by `next build` with `output: "standalone"` enabled in `frontend/next.config.ts`.

The Docker build excludes heavy local image and whitepaper assets from the build context and runtime image. Production should set `NEXT_PUBLIC_ASSET_BASE_URL` at build time so generated pages point to R2. The runtime image keeps only lightweight public fallbacks such as favicons, manifests, brand SVGs, the advisor PDF, and the generic article fallback image. Run `pnpm assets:sync:r2` before deployment whenever public images, PDFs, favicons, or manifest files change.
