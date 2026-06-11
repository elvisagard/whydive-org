#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$ROOT_DIR/.env"
SOURCE_DIR="$ROOT_DIR/frontend/public/images/whydive"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "Missing .env file at $ENV_FILE" >&2
  exit 1
fi

if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "Missing source asset directory at $SOURCE_DIR" >&2
  exit 1
fi

set -a
source "$ENV_FILE"
set +a

: "${CHART_ASSETS_S3_ENDPOINT:?Missing CHART_ASSETS_S3_ENDPOINT}"
: "${CHART_ASSETS_S3_REGION:?Missing CHART_ASSETS_S3_REGION}"
: "${CHART_ASSETS_S3_BUCKET:?Missing CHART_ASSETS_S3_BUCKET}"
: "${CHART_ASSETS_S3_ACCESS_KEY_ID:?Missing CHART_ASSETS_S3_ACCESS_KEY_ID}"
: "${CHART_ASSETS_S3_SECRET_ACCESS_KEY:?Missing CHART_ASSETS_S3_SECRET_ACCESS_KEY}"

AWS_ACCESS_KEY_ID="$CHART_ASSETS_S3_ACCESS_KEY_ID" \
AWS_SECRET_ACCESS_KEY="$CHART_ASSETS_S3_SECRET_ACCESS_KEY" \
aws s3 sync "$SOURCE_DIR" "s3://$CHART_ASSETS_S3_BUCKET/images/whydive/" \
  --endpoint-url "$CHART_ASSETS_S3_ENDPOINT" \
  --region "$CHART_ASSETS_S3_REGION" \
  --cache-control "public, max-age=86400" \
  --exclude ".DS_Store" \
  --no-cli-pager
