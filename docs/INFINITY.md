# Infinity static deployment

GitHub repository: `amnasahamed/pelagonewone`, branch `main`.

Server: `desgrocr1@infinity.herosite.pro`, SSH port `22`.

Document root: `/var/www/057de4ba-9d3f-4436-ab56-12b994e23b9d/pelagoconsultants.com`.

## Build

Run `npm ci`, then `npm run lint` and `npm run build`. The build uses Webpack and exports HTML, JavaScript, styles, and images to `out/`. The server serves these files directly; Node.js is unnecessary. `next start` does not serve an export. For a local preview, use `python3 -m http.server 3002 --directory out`.

Contact submissions go directly from the browser to Web3Forms. Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` before building, using the form key created for the receiving inbox. This key is public and is included in the browser bundle. Never substitute a Resend key or private API token. Without the key, the form shows alternative contact links and disables submission.

Sanity content is read at build time when configured; changes require a rebuild. Studio is exported at `/studio/` with hash navigation, so document links do not require a server-side catch-all. `/api/health` is a static build marker with `generatedAt`, not a live server uptime response. The old contact Server Action is retained for reference but is no longer imported by the static contact form.

## GitHub Actions configuration

Add repository Actions secrets:

| Name | Value |
| --- | --- |
| `DEPLOY_SSH_KEY` | Dedicated deployment private key; never commit it |
| `DEPLOY_KNOWN_HOSTS` | Verified line `infinity.herosite.pro ssh-ed25519 PUBLIC_SERVER_HOST_KEY` |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Public Web3Forms form key for the receiving inbox |

Optional repository variables: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`. Do not add a Sanity write token to the workflow.

Get the server host public key from the existing trusted server session: `cat /etc/ssh/ssh_host_ed25519_key.pub`. Keep its key type and key material, replacing the comment with the hostname at the beginning of the known-hosts line. The workflow enforces host-key verification and does not accept an unverified `ssh-keyscan` result.

Authorise the dedicated deployment **public** key in the server account's `~/.ssh/authorized_keys`, preferably with the `restrict` option. Keep the directory mode `700` and file mode `600`.

## Deployment sequence

Pushes to `main` and manual workflow runs build and validate the export before accessing the server. Missing form/SSH configuration fails the job without changing the live site. Deployments run sequentially.

The workflow uploads a complete staging copy outside the document root, then backs up the existing site under the account's `deploy-backups/`. It synchronises the staged files into the live directory using delayed updates and deletes stale files after transfer. Existing `.htaccess`, `.well-known/`, and hosting `error_pages/` are preserved. A failed promotion restores the backup. The workflow then verifies that the public `/deployment.txt` matches the deployed Git commit.

This update operates within the existing document root rather than changing the hosting panel's directory configuration. It is not an atomic directory swap. A failure during the separate public HTTP check is reported and retains the backup for recovery.

Review existing `.htaccess` rules before the first deployment: directory indexes must serve `index.html`, and old application redirects must not intercept the new pages. Keep hosting-provided SSL and access rules.

## Manual recovery

Use the backup path printed in the workflow log. Extract it into a temporary directory outside the public root, then use `rsync -a --delete-after --exclude=.htaccess --exclude=.well-known/ --exclude=error_pages/ RESTORE_DIRECTORY/ DOCUMENT_ROOT/`. This replaces the failed deployment while preserving host-managed rules and SSL challenge files. Backups are retained until deliberately removed.
