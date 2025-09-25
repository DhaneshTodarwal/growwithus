"use client";
import { siteConfig } from '../config/site'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const founder1 = '/images/founders/dhanesh.jpeg'
const founder2 = '/images/founders/eshwar.jpeg'

const slides = [
  { name: 'Dhanesh Todarwal', role: 'Co‑Founder', image: founder1 },
  { name: 'Ishwar Hiran', role: 'Co‑Founder', image: founder2 },
]

export default function FoundersShowcase() {
  const [index, setIndex] = useState(0)
  const timer = useRef<NodeJS.Timeout | null>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    timer.current && clearInterval(timer.current)
    timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [paused])

  return (
    <section
      className="relative overflow-hidden rounded-3xl mesh-bg vignette ring-1 ring-[var(--border-color)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Founders Showcase"
    >
      {/* Light gradient shade background */}
      <div className="absolute inset-0 pointer-events-none opacity-80" />

      <div className="grid md:grid-cols-2 gap-0">
        {/* Text side */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <p className="text-sm font-medium text-accent-primary mb-2">Founders</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">The people behind {siteConfig.name}</h2>
          <p className="text-text-secondary max-w-prose">
            Builders first, operators always. We blend engineering, product, and design to ship outcomes—not just features.
          </p>

          {/* Slide indicators */}
          <div className="mt-6 flex items-center gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-10 bg-[var(--accent-primary)]' : 'w-5 bg-[var(--border-color)]'}`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="relative h-80 md:h-[28rem]">
          {slides.map((s, i) => (
            <div
              key={s.name}
              className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={s.image}
                alt={`${s.name} portrait`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={i === 0}
              />

              {/* Name plate */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 px-4 py-2 rounded-xl backdrop-blur-md bg-white/70 dark:bg-black/30 ring-1 ring-[var(--border-color)]">
                <div className="text-sm md:text-base font-semibold">{s.name}</div>
                <div className="text-xs opacity-80">{s.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
