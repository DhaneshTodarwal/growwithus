"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { founders, advisors, type Person } from '../data/founders';

export default function FoundersSection() {
  const people: { title: string; items: Person[] }[] = [
    { title: 'Founders', items: founders },
    { title: 'Advisor', items: advisors },
  ];

  return (
    <section id="founders" className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-5xl mx-auto mb-10 md:mb-14">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-text mb-4">Meet the Team</h2>
        <p className="text-lg md:text-xl text-text-secondary">We build alongside you. Direct access to the people shipping your product.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {people.map((group, gIdx) => (
          <div key={group.title} className={gIdx === 0 ? 'md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8' : ''}>
            {group.items.map((p) => (
              <Reveal key={p.name} delay={0}>
                <div className="bg-glassmorphism-bg border border-glassmorphism-border rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform">
                  <div className="relative h-64 bg-black/5 dark:bg-white/5">
                    <Image src={p.image} alt={p.name} fill className="object-contain object-center" sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" priority={false} />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-text-primary">{p.name}</h3>
                    <p className="text-accent-primary text-sm mb-3">{p.role}</p>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">{p.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.expertise.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-xs">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
