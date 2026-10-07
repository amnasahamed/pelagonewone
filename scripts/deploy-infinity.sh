#!/usr/bin/env bash
set -Eeuo pipefail
umask 022

stage=${1:?Staging directory required}
live=${2:?Live directory required}
deployment_id=${3:?Deployment ID required}
commit=${4:?Commit SHA required}

[[ "$deployment_id" =~ ^[0-9]+-[0-9]+$ ]]
[[ "$commit" =~ ^[a-f0-9]{40}$ ]]
[[ "$live" == */pelagoconsultants.com ]]
[[ -d "$live" && ! -L "$live" ]]
[[ -d "$stage" && ! -L "$stage" ]]
live=$(cd "$live" && pwd -P)
stage=$(cd "$stage" && pwd -P)
account_root=$(dirname "$live")
[[ "$stage" == "$account_root/deploy-releases/pelago-$deployment_id" ]]

for page in index.html about/index.html contact/index.html services/index.html; do
  test -s "$stage/$page"
done
test -d "$stage/_next"
test "$(cat "$stage/deployment.txt")" = "$commit"

backup_root="$account_root/deploy-backups"
mkdir -p "$backup_root"
chmod 700 "$backup_root"
backup="$backup_root/pelagoconsultants-$deployment_id.tar.gz"
test ! -e "$backup"
tar -czf "$backup" -C "$live" .
chmod 600 "$backup"
tar -tzf "$backup" >/dev/null
printf 'Backup saved: %s\n' "$backup"

rollback() {
  local status=$?
  trap - ERR
  local restore
  restore=$(mktemp -d "$backup_root/restore.XXXXXX")
  printf 'Deployment failed; restoring %s\n' "$backup" >&2
  tar -xzf "$backup" -C "$restore"
  rsync -a --no-owner --no-group --delete-after --delay-updates \
    --exclude=.htaccess --exclude=.well-known/ --exclude=error_pages/ "$restore/" "$live/"
  rm -rf -- "$restore"
  exit "$status"
}
trap rollback ERR

rsync -a --no-owner --no-group --delete-after --delay-updates \
  --chmod=u=rwX,go=rX --exclude=.htaccess --exclude=.well-known/ --exclude=error_pages/ \
  "$stage/" "$live/"
test -s "$live/index.html"
test "$(cat "$live/deployment.txt")" = "$commit"
trap - ERR
rm -rf -- "$stage"
printf 'Deployed commit: %s\n' "$commit"
