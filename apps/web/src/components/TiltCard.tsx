"use client";
import { useRef } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  maxTilt?: number // degrees
}

export default function TiltCard({ children, className = '', maxTilt = 6 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width // 0..1
    const py = (e.clientY - rect.top) / rect.height
    const rx = (py - 0.5) * -2 * maxTilt
    const ry = (px - 0.5) * 2 * maxTilt
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`
  }

  const reset = () => {
    const el = ref.current
    if (el) el.style.transform = 'rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div className={`tilt ${className}`} onMouseLeave={reset}>
      <div
        ref={ref}
        className="tilt-inner sheen"
        onMouseMove={onMove}
        onMouseEnter={onMove}
      >
        {children}
      </div>
    </div>
  )
}
