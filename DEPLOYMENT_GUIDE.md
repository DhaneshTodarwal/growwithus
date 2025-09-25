# Fresh Deployment Guide (Vercel + Monorepo)

This repository is a monorepo. The Next.js site lives in `apps/web`.

## 1. Prerequisites
- Vercel account (logged in locally: `npx vercel login`)
- Git repo pushed to GitHub (recommended) OR deploy directly from CLI.

## 2. One-Time: Push to GitHub
```bash
# From repo root
git remote add origin <YOUR_GITHUB_REPO_URL>  # only if not added
git push -u origin master
```
Then import the repo at https://vercel.com/new and select the `apps/web` folder when Vercel asks for root (Set: Root Directory -> `apps/web`).

## 3. (Alternative) Deploy via CLI Without GitHub
From repo root run:
```bash
cd apps/web
npx vercel --prod
```
Follow prompts:
- Set scope (your account)
- "Set up and deploy" -> Yes
- "Link to existing project?" -> No (create new)
- Project name: growwithus (or your choice)
- Detected framework: Next.js
- Root directory: accept current (apps/web) if you run the command inside that folder
- Build Command: (leave blank, Vercel auto) or `next build`
- Output directory: (leave blank)
- Development command: (leave blank)

## 4. Environment Variables (if any later)
Add them in Vercel dashboard: Settings -> Environment Variables -> Redeploy.

## 5. Subsequent Deploys
Push to `master` (or main) if using GitHub integration OR run again:
```bash
cd apps/web
npx vercel --prod
```

## 6. Troubleshooting 404 After Deploy
- Ensure deployment root is `apps/web` NOT repository root.
- Remove legacy config: no `vercel.json` in root for basic Next.js.
- Unlink old project: delete `.vercel` folder and redeploy.
- Confirm `page.tsx` exists at `apps/web/src/app/page.tsx`.
- Run a local build: `npm run build` inside `apps/web`.

## 7. Cleaning Old Artifacts
If you previously deployed from root with a custom `vercel.json`, remove/rename those files (already done) so auto-detection works.

## 8. Monorepo Note
Only the `apps/web` folder is needed for the frontend deploy. API (`apps/api`) would require its own project if you want to host it separately.

---
Automated by assistant on fresh redeploy prep.
