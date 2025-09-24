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

Content © ForgeVia.
