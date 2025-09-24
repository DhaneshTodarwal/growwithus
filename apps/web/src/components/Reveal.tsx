'use client'

import React, { useEffect, useRef } from 'react'

type RevealProps = {
  children: React.ReactNode
  as?: React.ElementType
  className?: string
  delay?: number // ms
  once?: boolean
  threshold?: number
  variant?: 'fade-up' | 'fade-in' | 'fade-right' | 'fade-left'
}

export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  once = true,
  threshold = 0.15,
  variant = 'fade-up',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current
    el.classList.add('reveal')
    el.classList.add(variant)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            if (once) observer.unobserve(el)
          } else if (!once) {
            el.classList.remove('is-visible')
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, threshold, variant])

  return (
    <Tag ref={ref as any} className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
