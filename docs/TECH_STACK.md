# Tech Stack & Architecture

Frontend: Next.js 14 (App Router) + React + Tailwind CSS
Backend: Node.js + Express (API gateway)
CMS: Strapi (headless) + PostgreSQL
AI: OpenAI API (pluggable), LangChain optional for orchestration
Hosting: Vercel (web), Vercel/AWS (api), Render/Fly (cms)
CI/CD: GitHub Actions
Auth: NextAuth (optional for admin/demos)
Analytics: Google Analytics, Search Console
Forms: React Hook Form

Text Architecture
Client → Next.js (SSR/ISR) → API Routes / Express → Strapi/PostgreSQL → Hosting (Vercel/AWS)

ASCII Diagram
User Browser | Next.js (Frontend: React, Tailwind CSS)
| API Routes / Headless CMS (Strapi)
| Backend (Node.js, Express)
| Database (PostgreSQL) & AI Services
| Hosting (Vercel) + CI/CD (GitHub Actions)

MVP Estimate: 4–6 dev weeks, $15k–$25k (excl. salaries).
