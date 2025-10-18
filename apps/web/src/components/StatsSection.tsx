"use client";

import { useEffect, useRef, useState, type ElementType } from 'react';
import { TrendingUp, Smile, CalendarClock, Award } from 'lucide-react';
import Reveal from './Reveal';

type Stat = {
  target: number; // numeric target for counter
  suffix?: string; // e.g. '+', '%', ' /7'
  label: string;
  description: string;
  icon: ElementType;
};

function useCountUp(whenVisible: boolean, target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!whenVisible) return;
    let raf = 0;
    const step = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const elapsed = ts - (startRef.current ?? 0);
      const progress = Math.min(1, elapsed / duration);
      setValue(Math.round(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setDone(true);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [whenVisible, target, duration]);

  return { value, done };
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { value, done } = useCountUp(visible, stat.target);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Icon = stat.icon;

  return (
    <Reveal delay={index * 100}>
      <div ref={ref} className="relative group" role="region" aria-labelledby={`stat-${index}-label`}>
        {/* Minimal monochrome card */}
        <div className="rounded-2xl">
          <div className="rounded-2xl bg-[var(--card-bg,rgba(255,255,255,0.6))] dark:bg-[var(--card-bg-dark,rgba(20,20,20,0.6))] backdrop-blur-md border border-border/60 p-3 md:p-4 text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            {/* Icon chip */}
            <div className="mx-auto mb-2 md:mb-3 w-9 h-9 md:w-10 md:h-10 rounded-full bg-border/30 text-text-primary flex items-center justify-center">
              <Icon className="w-4.5 h-4.5 md:w-5 md:h-5 opacity-80" aria-hidden="true" />
            </div>

            {/* Number */}
            <div className={`relative z-10 text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary ${done ? 'flash-glow' : ''}`}>
              {value}{stat.suffix ?? ''}
            </div>

            {/* Label */}
            <h3 id={`stat-${index}-label`} className="mt-1 text-sm md:text-base font-semibold text-text-primary">
              {stat.label}
            </h3>

            {/* Description */}
            <p className="mt-0.5 text-xs md:text-sm text-text-secondary leading-relaxed">
              {stat.description}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function StatsSection() {
  const stats: Stat[] = [
    {
      target: 14,
      suffix: ' Days',
      label: 'Avg Delivery Time',
      description: 'Most projects completed in just 2 weeks.',
      icon: TrendingUp,
    },
    {
      target: 100,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Every client loves our work and dedication.',
      icon: Smile,
    },
    {
      target: 20,
      suffix: '+',
      label: 'Modern Technologies',
      description: 'Latest tools: React, Next.js, AI, and more.',
      icon: Award,
    },
    {
      target: 24,
      suffix: '/7',
      label: 'Support Available',
      description: '24/7 premium client assistance.',
      icon: CalendarClock,
    },
  ];

  return (
  <section id="results" aria-labelledby="results-heading" className="py-10 md:py-14 relative overflow-hidden">
      {/* subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-8 -left-8 w-56 h-56 bg-accent-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-accent-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
  <div className="text-center mb-6 md:mb-8">
          <Reveal>
            <h2 id="results-heading" className="text-2xl md:text-4xl font-bold tracking-tight text-text-primary mb-2">
              Our Track Record
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-text-secondary max-w-2xl mx-auto text-sm md:text-base">
              Numbers that speak to our commitment and success in delivering exceptional results.
            </p>
          </Reveal>
        </div>

        {/* 2x2 on desktop, stacked on mobile with tighter gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Optional: client logos row placeholder – non-intrusive */}
        {/* <div className="mt-12 opacity-80">
          <Reveal delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              <img src="/logos/client1.svg" alt="Client 1" className="h-8 mx-auto" />
              <img src="/logos/client2.svg" alt="Client 2" className="h-8 mx-auto" />
              <img src="/logos/client3.svg" alt="Client 3" className="h-8 mx-auto" />
              <img src="/logos/client4.svg" alt="Client 4" className="h-8 mx-auto" />
            </div>
          </Reveal>
        </div> */}
      </div>
    </section>
  );
}
