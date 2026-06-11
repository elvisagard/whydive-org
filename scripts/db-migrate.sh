#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DATABASE_URL="${DATABASE_URL:-postgres://postgres@localhost:5432/whydive_org}"
PSQL_BIN="${PSQL_BIN:-psql}"

if ! command -v "$PSQL_BIN" >/dev/null 2>&1; then
  if [[ -x "/Applications/Postgres.app/Contents/Versions/latest/bin/psql" ]]; then
    PSQL_BIN="/Applications/Postgres.app/Contents/Versions/latest/bin/psql"
  else
    echo "psql not found. Set PSQL_BIN or install Postgres tools." >&2
    exit 1
  fi
fi

for migration in "$ROOT_DIR"/database/migrations/*.sql; do
  echo "Applying $(basename "$migration")"
  "$PSQL_BIN" "$DATABASE_URL" -v ON_ERROR_STOP=1 -f "$migration"
done
