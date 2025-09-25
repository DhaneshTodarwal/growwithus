# ForgeVia - Premium Digital Agency Website

This repo hosts the ForgeVia marketing site, AI demos, CMS, and API.

Objectives
- High-conversion, accessible site (WCAG 2.1 AA)
- Core Web Vitals: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1
- KPIs: ≥ 20% lead conversion, < 2s hero load on fast 4G

Structure
- apps/web — Next.js 14 (App Router) + Tailwind CSS
- apps/api — Node.js/Express API for demos and quote form
- cms/ — Strapi headless CMS (PostgreSQL) (placeholder)
- docs/ — Brand, sitemap, checklists, timeline, architecture

Quick start
1) Install Node 18+ and pnpm 8+
2) pnpm install
3) pnpm -r dev (runs web on 3000 and api on 4000)

Deploy
- Web: Vercel
- API: Vercel serverless or AWS Lambda
- CMS: Managed Postgres + Strapi host

## 🚀 Free Deployment (Vercel) – Project name: `growwithus`

You can deploy the frontend (apps/web) completely free on Vercel.

### Option A: GitHub Import (Recommended)
1. Push this repo to GitHub if not already:
	```bash
	git init # if not already
	git remote add origin <YOUR_GITHUB_REPO_URL>
	git add . && git commit -m "Initial"
	git push -u origin master
	```
2. Visit https://vercel.com/new
3. Import the repository
4. When prompted for Root Directory choose: `apps/web`
5. Project Name: `growwithus` (type manually if auto-filled differently)
6. Leave Build / Output / Install blank (auto-detected Next.js)
7. Click Deploy – done.

### Option B: CLI (No GitHub Needed)
From repository root:
```bash
cd apps/web
npx vercel --name growwithus
# After first (preview) deploy:
npx vercel --prod --name growwithus
```
Answers to prompts:
- Create new project: Yes
- Link existing: No
- Detected framework: Next.js (accept)
- Root directory: (use current) `apps/web`
- Build command: (leave blank) or `next build`
- Output directory: (blank)
- Env vars: skip for now

### Subsequent Production Deploys
```bash
cd apps/web
npx vercel --prod --name growwithus
```
Or from repo root (uses helper script):
```bash
npm run deploy:web
```

### Common 404 Causes & Fixes
| Problem | Fix |
|---------|-----|
| Deployed from repo root without config | Redeploy from inside `apps/web` |
| Old `.vercel` link pointing to broken project | Delete/rename `.vercel` folder then redeploy |
| Missing `page.tsx` | Ensure `apps/web/src/app/page.tsx` exists |
| Custom `vercel.json` overriding build incorrectly | Remove or simplify (we removed it) |

### Custom Domain (Optional)
Add a domain in Vercel > Project > Settings > Domains (e.g. growwithus.site). Point DNS A/ALIAS or CNAME as instructed.

---
Need backend/API live too? Deploy `apps/api` as a separate Vercel project or a lightweight host (Railway, Fly.io, Render). It’s optional for the marketing site.

Content © ForgeVia.
