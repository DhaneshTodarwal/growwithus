"use client";
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { founders as foundersList } from '../data/founders'

interface Founder {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
}

// Only rotate through founders (exclude advisors)
const founders: Founder[] = foundersList

// Enhanced with accessibility, performance, and modal integration
export default function FoundersBackground() {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null)
  const [mounted, setMounted] = useState(false)

  // Respect reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const nextSlide = useCallback(() => {
    if (!isPaused && !isHovered && !prefersReducedMotion) {
      setIndex(i => (i + 1) % founders.length)
    }
  }, [isPaused, isHovered, prefersReducedMotion])

  useEffect(() => {
    if (prefersReducedMotion) return
    
    const id = setInterval(nextSlide, 5000)
    return () => clearInterval(id)
  }, [nextSlide, prefersReducedMotion])

  // Prevent initial flash by rendering background only after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const openModal = (founder: Founder) => {
    setSelectedFounder(founder)
    setShowModal(true)
    setIsPaused(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedFounder(null)
    setIsPaused(false)
  }

  return (
    <>
      {mounted && (
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-[0.15] mix-blend-luminosity">
          {founders.map((founder, i) => (
            <div
              key={founder.name}
              className={`absolute w-[420px] max-w-[70vw] aspect-[4/5] rounded-2xl border border-white/10 shadow-xl transition-opacity duration-1000 ease-out will-change-opacity ${index === i ? 'opacity-100' : 'opacity-0'}`}
              style={{ filter: 'grayscale(30%) saturate(0.9)' }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={founder.image}
                  alt={`${founder.name}, ${founder.role}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 70vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/55" />
                <div className="absolute bottom-4 left-4 right-4 text-white/90 text-sm tracking-wide font-medium">
                  <div>{founder.name}</div>
                  <div className="text-white/70 text-xs">{founder.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative radial vignette to soften edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0)_65%)]" />
      </div>
      )}

      {/* Founders Info Pill Button */}
      <div className="absolute bottom-8 right-8 z-20 pointer-events-auto">
        <button
          onClick={() => openModal(founders[index])}
          className="group flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300"
          aria-label={`Learn more about ${founders[index].name}`}
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center text-xs font-bold text-white">
            {founders[index].name.split(' ').map(n => n[0]).join('')}
          </div>
          <span>Meet Our Founders</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Modal */}
      {showModal && selectedFounder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm pointer-events-auto">
          <div className="relative w-full max-w-2xl bg-background-primary rounded-2xl shadow-2xl border border-border overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background-secondary hover:bg-background-tertiary flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-80 h-64 md:h-auto">
                <Image
                  src={selectedFounder.image}
                  alt={`${selectedFounder.name}, ${selectedFounder.role}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
              </div>
              
              <div className="flex-1 p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{selectedFounder.name}</h3>
                <p className="text-accent-primary font-medium mb-4">{selectedFounder.role}</p>
                <p className="leading-relaxed mb-6">{selectedFounder.bio}</p>
                
                <div>
                  <h4 className="font-semibold mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedFounder.expertise.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
