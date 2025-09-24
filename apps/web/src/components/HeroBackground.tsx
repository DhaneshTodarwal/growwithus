"use client";

import { useEffect, useRef } from 'react'

export default function HeroBackground() {
  const layerRef1 = useRef<HTMLDivElement | null>(null)
  const layerRef2 = useRef<HTMLDivElement | null>(null)
  const layerRef3 = useRef<HTMLDivElement | null>(null)
  const gridRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset
        // Stop applying parallax after leaving hero (~1000px)
        const activeY = Math.min(y, 1000)
        // Slightly subtler parallax
        const translate1 = Math.min(activeY * 0.03, 18) // closest layer
        const translate2 = Math.min(activeY * 0.02, 14)
        const translate3 = Math.min(activeY * 0.01, 10)

        if (layerRef1.current) layerRef1.current.style.transform = `translate3d(0, ${translate1}px, 0)`
        if (layerRef2.current) layerRef2.current.style.transform = `translate3d(0, ${translate2}px, 0)`
        if (layerRef3.current) layerRef3.current.style.transform = `translate3d(0, ${translate3}px, 0)`
        if (gridRef.current) gridRef.current.style.transform = `translate3d(0, ${Math.min(activeY * 0.006, 6)}px, 0)`
        raf = 0
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background (base layer) */}
      <div ref={gridRef} className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20 will-change-transform" />
      
      {/* Floating orbs with parallax */}
      <div ref={layerRef1} className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 blur-xl animate-pulse will-change-transform" 
           style={{animationDelay: '0s', animationDuration: '4s'}} />
      
      <div ref={layerRef2} className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 blur-xl animate-pulse will-change-transform"
           style={{animationDelay: '2s', animationDuration: '6s'}} />
      
      <div ref={layerRef3} className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-gradient-to-tr from-purple-400/10 to-pink-400/10 blur-xl animate-pulse transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
           style={{animationDelay: '1s', animationDuration: '5s'}} />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 will-change-transform"
           style={{
             backgroundImage: 'radial-gradient(circle at 1px 1px, var(--text-secondary) 1px, transparent 0)',
             backgroundSize: '40px 40px'
           }} />
    </div>
  )
}
