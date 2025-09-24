"use client";

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import {
  Code, Server, Smartphone, Brain, Cloud, Wrench,
  TrendingUp, Gauge, ShieldCheck, Zap, Globe, Database, Box
} from 'lucide-react';

type TechCategory = {
  category: string;
  techs: string[];
  Icon: React.ElementType;
};

const TECHNOLOGIES: TechCategory[] = [
  { category: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'], Icon: Code },
  { category: 'Backend', techs: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'], Icon: Server },
  { category: 'Mobile', techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'], Icon: Smartphone },
  { category: 'AI/ML', techs: ['OpenAI', 'TensorFlow', 'PyTorch', 'Hugging Face', 'LangChain'], Icon: Brain },
  { category: 'Cloud & DevOps', techs: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'GitHub Actions'], Icon: Cloud },
  { category: 'CMS & Tools', techs: ['Strapi', 'Sanity', 'Figma', 'Notion', 'Linear'], Icon: Wrench },
];

type Scenario = {
  key: string;
  name: string;
  icon: React.ElementType;
  blurb: string;
  benefits: string[];
  kpis: { icon: React.ElementType; label: string; value: string }[];
  stack: { label: string; items: string[] }[];
};

const SCENARIOS: Scenario[] = [
  {
    key: 'marketing',
    name: 'High‑Conversion Website',
    icon: Globe,
    blurb: 'SEO‑first with instant load. Built for rankings and conversions.',
    benefits: ['Green Core Web Vitals', 'SEO 95+ by launch', 'CMS your team can edit'],
    kpis: [
      { icon: Gauge, label: 'LCP', value: '< 2.5s' },
      { icon: TrendingUp, label: 'SEO', value: '95+' },
      { icon: Zap, label: 'TTFB', value: '< 100ms' },
    ],
    stack: [
      { label: 'Frontend', items: ['Next.js', 'Tailwind CSS'] },
      { label: 'CMS', items: ['Sanity', 'Strapi'] },
      { label: 'Infra', items: ['Vercel', 'Cloudflare'] },
    ],
  },
  {
    key: 'saas',
    name: 'Scalable SaaS App',
    icon: Box,
    blurb: 'Secure multi‑tenant apps with rock‑solid performance and DX.',
    benefits: ['Fast feature delivery', 'Observability baked‑in', 'Sensible costs'],
    kpis: [
      { icon: ShieldCheck, label: 'Uptime', value: '99.95%' },
      { icon: Gauge, label: 'P95 Latency', value: '< 200ms' },
      { icon: Database, label: 'RPO/RTO', value: '≤ 15m' },
    ],
    stack: [
      { label: 'Frontend', items: ['Next.js', 'TypeScript'] },
      { label: 'Backend', items: ['Node.js', 'tRPC / REST'] },
      { label: 'Data', items: ['PostgreSQL', 'Redis'] },
      { label: 'Infra', items: ['Docker', 'Kubernetes / Vercel'] },
    ],
  },
  {
    key: 'ai',
    name: 'Custom AI Assistant',
    icon: Brain,
    blurb: 'Task‑specific agents with guardrails, analytics, and ROI.',
    benefits: ['Safe outputs', 'Traceable prompts', 'Workflow integration'],
    kpis: [
      { icon: TrendingUp, label: 'Resolution Time', value: '↓ 60%' },
      { icon: Gauge, label: 'Quality', value: '↑ CSAT' },
      { icon: ShieldCheck, label: 'Privacy', value: 'PII safe' },
    ],
    stack: [
      { label: 'Model', items: ['OpenAI / Anthropic'] },
      { label: 'Vector', items: ['Postgres + pgvector', 'Pinecone'] },
      { label: 'Orchestration', items: ['LangChain', 'Custom agents'] },
    ],
  },
  {
    key: 'mobile',
    name: 'Cross‑Platform Mobile',
    icon: Smartphone,
    blurb: 'One codebase, native performance. Launch on iOS and Android.',
    benefits: ['Fast release cycles', 'Native modules when needed', 'Smooth animations'],
    kpis: [
      { icon: Gauge, label: 'App Size', value: 'Slim' },
      { icon: Zap, label: 'FPS', value: '60+' },
      { icon: ShieldCheck, label: 'Store Reviews', value: '★ 4.5+' },
    ],
    stack: [
      { label: 'Framework', items: ['React Native', 'Expo'] },
      { label: 'Backend', items: ['Node.js', 'GraphQL / REST'] },
      { label: 'Testing', items: ['Jest', 'Detox'] },
    ],
  },
];

export default function TechStackSection() {
  const [active, setActive] = useState<string>('marketing');
  const [showCatalog, setShowCatalog] = useState<boolean>(false);
  const [wizardOpen, setWizardOpen] = useState<boolean>(false);
  const [goal, setGoal] = useState<string>('marketing');
  const [prefs, setPrefs] = useState<{ speed: boolean; scale: boolean; cost: boolean; compliance: boolean }>({ speed: true, scale: true, cost: false, compliance: false });

  const scenario = SCENARIOS.find(s => s.key === active) ?? SCENARIOS[0];

  // Parallax split canvas
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const layerA = useRef<HTMLDivElement | null>(null);
  const layerB = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const wrap = sectionRef.current;
    if (!wrap) return;
    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      if (layerA.current) layerA.current.style.transform = `translate3d(${x * 14}px, ${y * 10}px, 0)`;
      if (layerB.current) layerB.current.style.transform = `translate3d(${x * -10}px, ${y * -8}px, 0)`;
    };
    wrap.addEventListener('mousemove', onMove);
    return () => wrap.removeEventListener('mousemove', onMove);
  }, []);

  // Wizard apply
  const applyWizard = () => {
    // Simple mapping: goal decides scenario; prefs could tweak in future
    setActive(goal);
    setWizardOpen(false);
  };

  return (
    <section ref={sectionRef} className="py-14 md:py-20 relative overflow-hidden">
      {/* Parallax split canvas background */}
      <div className="pointer-events-none absolute inset-0">
        <div ref={layerA} className="absolute -top-16 -left-16 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[var(--accent-primary)]/12 to-[var(--accent-secondary)]/12 blur-3xl" />
        <div ref={layerB} className="absolute -bottom-20 -right-20 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[var(--accent-secondary)]/12 to-[var(--accent-primary)]/12 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text mb-6 leading-tight">
              Solutions That Ship.<br />
              <span className="text-3xl md:text-5xl bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent">
                Stacks That Scale.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Pick a scenario to see our recommended approach, KPIs we target, and the 
              <span className="font-semibold text-text-primary"> stack we use</span>—then explore our full toolbox.
            </p>
          </Reveal>
        </div>

        {/* Wizard selector (bold but lightweight) */}
        <div className="mb-4">
          <button
            type="button"
            onClick={() => setWizardOpen((o) => !o)}
            className="text-sm font-semibold text-accent-primary hover:underline"
            aria-expanded={wizardOpen}
            aria-controls="stack-wizard"
          >
            {wizardOpen ? 'Close quick wizard' : 'Open quick wizard'}
          </button>
          {wizardOpen && (
            <div id="stack-wizard" className="mt-3 rounded-2xl border border-border/60 bg-glassmorphism-bg backdrop-blur-md p-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <div className="text-sm font-semibold mb-2">1. Pick your goal</div>
                  <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Goal">
                    {SCENARIOS.map(s => (
                      <label key={s.key} className={`px-3 py-1.5 rounded-full border text-sm cursor-pointer ${goal === s.key ? 'border-[var(--accent-primary)] text-text-primary' : 'border-border/60 text-text-secondary hover:text-text-primary'}`}>
                        <input className="sr-only" type="radio" name="goal" value={s.key} checked={goal === s.key} onChange={() => setGoal(s.key)} />
                        {s.name}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-2">2. What matters most?</div>
                  <div className="flex flex-wrap gap-2">
                    {([
                      ['speed','Speed to market'],
                      ['scale','Scale & reliability'],
                      ['cost','Keep costs sensible'],
                      ['compliance','Security & compliance'],
                    ] as const).map(([key, label]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setPrefs(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))}
                        className={`px-3 py-1.5 rounded-full border text-sm ${prefs[key as keyof typeof prefs] ? 'border-[var(--accent-primary)] text-text-primary' : 'border-border/60 text-text-secondary hover:text-text-primary'}`}
                        aria-pressed={prefs[key as keyof typeof prefs]}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-end">
                  <button onClick={applyWizard} className="btn btn-primary w-full md:w-auto">Apply</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div role="tablist" aria-label="Solution Playbooks" className="flex gap-3 overflow-auto pb-3 -mx-2 px-2 mb-8">
          {SCENARIOS.map(({ key, name, icon: Icon }) => {
            const selected = active === key;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${key}`}
                onClick={() => setActive(key)}
                className={`group whitespace-nowrap inline-flex items-center gap-3 rounded-2xl border px-6 py-4 text-sm font-semibold transition-all duration-300 ${
                  selected 
                    ? 'bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border-accent-primary/40 text-text-primary shadow-lg shadow-accent-primary/10 scale-105' 
                    : 'bg-glassmorphism-bg backdrop-blur-sm border-border/40 text-text-secondary hover:text-text-primary hover:border-accent-primary/30 hover:bg-gradient-to-r hover:from-accent-primary/5 hover:to-accent-secondary/5 hover:scale-102'
                }`}
              >
                <div className={`p-2 rounded-xl transition-colors ${
                  selected 
                    ? 'bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 text-accent-primary' 
                    : 'bg-border/30 text-text-secondary group-hover:bg-accent-primary/10 group-hover:text-accent-primary'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-base">{name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Panel */}
        <Reveal delay={120}>
          <div id={`panel-${scenario.key}`} role="tabpanel" aria-labelledby={scenario.key}
            className="mt-8 rounded-3xl bg-gradient-to-br from-glassmorphism-bg/80 to-glassmorphism-bg border border-border/30 backdrop-blur-xl p-8 md:p-10 shadow-2xl shadow-accent-primary/5">
            
            <div className="grid md:grid-cols-5 gap-8 md:gap-10">
              {/* Left: Blurb + Benefits - Takes 2 columns */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-accent-primary/15 to-accent-secondary/15">
                    <scenario.icon className="w-8 h-8 text-accent-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary leading-tight">{scenario.name}</h3>
                </div>
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">{scenario.blurb}</p>
                <div className="space-y-3">
                  {scenario.benefits.map((benefit, idx) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary flex-shrink-0"></div>
                      <span className="text-base text-text-primary font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a href="/case-studies" className="inline-flex items-center gap-2 text-base font-semibold text-accent-primary hover:text-accent-secondary transition-colors group">
                    See case studies 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>

              {/* Middle: KPIs - Takes 1 column */}
              <div className="md:col-span-1 md:border-l md:border-r border-border/30 md:px-6">
                <h4 className="text-lg font-bold text-text-primary mb-6 text-center">Key Metrics</h4>
                <div className="space-y-6">
                  {scenario.kpis.map(({ icon: KPIIcon, label, value }) => (
                    <div key={label} className="text-center group cursor-default">
                      <div className="mx-auto mb-3 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 text-accent-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:from-accent-primary/20 group-hover:to-accent-secondary/20">
                        <KPIIcon className="w-6 h-6" />
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-text-primary mb-1">{value}</div>
                      <div className="text-sm text-text-secondary font-medium">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Recommended Stack - Takes 2 columns */}
              <div className="md:col-span-2">
                <h4 className="text-lg font-bold text-text-primary mb-6">Recommended Stack</h4>
                <div className="space-y-5">
                  {scenario.stack.map(({ label, items }) => (
                    <div key={label} className="group">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 text-sm font-semibold text-accent-primary">
                          {label}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {items.map((item) => (
                          <span key={item} className="px-4 py-2 rounded-xl bg-glassmorphism-bg border border-border/40 text-sm font-medium text-text-primary hover:border-accent-primary/30 hover:bg-gradient-to-r hover:from-accent-primary/5 hover:to-accent-secondary/5 transition-all duration-200 cursor-default">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Architecture Mini-Diagram Toggle */}
            <div className="mt-10 pt-8 border-t border-border/30">
              <details className="group">
                <summary className="list-none cursor-pointer select-none text-base font-bold text-text-primary inline-flex items-center gap-3 hover:text-accent-primary transition-colors">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary group-open:from-accent-secondary group-open:to-accent-primary transition-all duration-300"></div>
                  Show architecture
                  <span className="text-text-secondary font-normal text-sm">(how pieces connect)</span>
                </summary>
                <div className="mt-6 rounded-2xl border border-border/30 bg-gradient-to-br from-glassmorphism-bg/60 to-glassmorphism-bg/40 backdrop-blur-md p-6 md:p-8 overflow-hidden">
                  <div className="w-full max-w-4xl mx-auto">
                    <svg viewBox="0 0 600 220" className="w-full h-auto">
                      {/* Nodes */}
                      <g>
                        <rect x="20" y="86" width="90" height="48" rx="12" className="fill-white/80 dark:fill-white/10 stroke-[color:var(--accent-primary)] stroke-2" />
                        <text x="65" y="115" textAnchor="middle" className="fill-current text-[14px] font-semibold" style={{ fill: 'var(--text-primary)' }}>Client</text>

                        <rect x="140" y="86" width="110" height="48" rx="12" className="fill-white/80 dark:fill-white/10 stroke-[color:var(--accent-primary)] stroke-2" />
                        <text x="195" y="115" textAnchor="middle" className="text-[14px] font-semibold" style={{ fill: 'var(--text-primary)' }}>Edge / CDN</text>

                        <rect x="280" y="86" width="110" height="48" rx="12" className="fill-white/80 dark:fill-white/10 stroke-[color:var(--accent-primary)] stroke-2" />
                        <text x="335" y="115" textAnchor="middle" className="text-[14px] font-semibold" style={{ fill: 'var(--text-primary)' }}>App</text>

                        <rect x="430" y="46" width="140" height="48" rx="12" className="fill-white/80 dark:fill-white/10 stroke-[color:var(--accent-secondary)] stroke-2" />
                        <text x="500" y="75" textAnchor="middle" className="text-[14px] font-semibold" style={{ fill: 'var(--text-primary)' }}>Database</text>

                        <rect x="430" y="126" width="140" height="48" rx="12" className="fill-white/80 dark:fill-white/10 stroke-[color:var(--accent-secondary)] stroke-2" />
                        <text x="500" y="155" textAnchor="middle" className="text-[14px] font-semibold" style={{ fill: 'var(--text-primary)' }}>Cache / Observability</text>
                      </g>
                      {/* Connectors */}
                      <g strokeWidth="3" fill="none" strokeLinecap="round">
                        <path d="M110 110 H140" className="dash-line" stroke="url(#g1)" />
                        <path d="M250 110 H280" className="dash-line" stroke="url(#g1)" />
                        <path d="M390 110 L430 70" className="dash-line" stroke="url(#g1)" />
                        <path d="M390 110 L430 150" className="dash-line" stroke="url(#g1)" />
                      </g>
                      <defs>
                        <linearGradient id="g1" x1="0" x2="1">
                          <stop offset="0%" stopColor="var(--accent-primary)" />
                          <stop offset="100%" stopColor="var(--accent-secondary)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <style jsx>{`
                    @keyframes dash { to { stroke-dashoffset: 0; } }
                    .dash-line { stroke-dasharray: 8; stroke-dashoffset: 80; animation: dash 2s ease forwards; }
                  `}</style>
                </div>
              </details>
            </div>
          </div>
        </Reveal>

        {/* Catalog toggle */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowCatalog((s) => !s)}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 text-base font-semibold text-accent-primary hover:from-accent-primary/20 hover:to-accent-secondary/20 hover:border-accent-primary/30 transition-all duration-300"
            aria-expanded={showCatalog}
            aria-controls="full-tech-catalog"
          >
            {showCatalog ? 'Hide full tech catalog' : 'Browse full tech catalog'}
            <span className={`transition-transform duration-300 ${showCatalog ? 'rotate-180' : ''}`}>↓</span>
          </button>
        </div>

        {/* Full Tech Catalog (collapsible) */}
        {showCatalog && (
          <div id="full-tech-catalog" className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNOLOGIES.map((category, index) => (
              <Reveal key={category.category} delay={index * 80}>
                <div className="group p-6 rounded-2xl bg-gradient-to-br from-glassmorphism-bg/60 to-glassmorphism-bg/30 border border-border/30 backdrop-blur-md hover:border-accent-primary/30 hover:from-glassmorphism-bg/80 hover:to-glassmorphism-bg/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-5">
                    <div className="mr-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-primary/15 to-accent-secondary/15 flex items-center justify-center text-accent-primary group-hover:from-accent-primary/25 group-hover:to-accent-secondary/25 transition-colors">
                      <category.Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.techs.map((tech) => (
                      <span key={tech} className="px-3 py-2 rounded-xl bg-glassmorphism-bg border border-border/40 text-sm font-medium text-text-primary hover:border-accent-primary/30 hover:bg-gradient-to-r hover:from-accent-primary/5 hover:to-accent-secondary/5 transition-all duration-200 cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
