'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../config/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  
  return (
  <header className={`navbar sticky top-0 z-40 ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Enhanced Logo: prefer image from siteConfig.logo, fallback to monogram */}
        <Link href="/" className="group flex items-center gap-3 no-underline hover:no-underline" aria-label={`${siteConfig.name} home`}>
          {siteConfig.logo?.light ? (
            <>
              {/* Light theme logo */}
              <Image
                src={siteConfig.logo.light}
                alt={siteConfig.logo.alt || `${siteConfig.name} logo`}
                width={siteConfig.logo.width || 40}
                height={siteConfig.logo.height || 40}
                className={`h-12 w-12 rounded-md object-contain object-center block ${siteConfig.logo.dark ? 'dark:hidden' : ''}`}
                priority
              />
              {/* Dark theme logo (optional) */}
              {siteConfig.logo.dark && (
                <Image
                  src={siteConfig.logo.dark}
                  alt={siteConfig.logo.alt || `${siteConfig.name} logo`}
                  width={siteConfig.logo.width || 40}
                  height={siteConfig.logo.height || 40}
                  className="h-12 w-12 rounded-md object-contain object-center hidden dark:block"
                  priority
                />
              )}
              <span className="sr-only">{siteConfig.name}</span>
            </>
          ) : (
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-xl flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 will-change-transform group-hover:scale-110 group-hover:rotate-3">
                {siteConfig.name.charAt(0).toUpperCase()}
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-80 group-hover:scale-125 transition-transform" style={{ background: 'var(--accent-tertiary)' }}></div>
            </div>
          )}
          <span className="font-bold text-2xl bg-gradient-to-r from-[var(--text-primary)] to-[var(--accent-primary)] bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex gap-2 text-sm">
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/case-studies" className="nav-link">Case Studies</Link>
            <Link href="/ai-demos" className="nav-link">AI Demos</Link>
            <Link href="/pricing" className="nav-link">Pricing</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/#founders" className="nav-link">Founders</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/careers" className="nav-link">Careers</Link>
            <Link href="/contact" className="nav-link-cta">Contact</Link>
          </div>
          
          <ThemeToggle />
          
          {/* Enhanced Mobile Menu Button */}
          <button 
            aria-label="Toggle menu" 
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-glassmorphism-border bg-glassmorphism-bg backdrop-blur-sm transition-all hover:bg-card-bg-secondary hover:border-accent-primary/50" 
            onClick={() => setOpen(!open)}
          >
            <div className="relative w-5 h-5">
              <Menu className={`absolute inset-0 w-5 h-5 transition-transform transition-opacity duration-300 will-change-transform will-change-opacity ${open ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
              <X className={`absolute inset-0 w-5 h-5 transition-transform transition-opacity duration-300 will-change-transform will-change-opacity ${open ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
            </div>
          </button>
        </div>
      </nav>
      
      {/* Enhanced Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-2 bg-glassmorphism-bg backdrop-blur-xl border-t border-glassmorphism-border">
          <div className="flex flex-col gap-2">
            <Link href="/services" onClick={() => setOpen(false)} className="mobile-nav-link">Services</Link>
            <Link href="/case-studies" onClick={() => setOpen(false)} className="mobile-nav-link">Case Studies</Link>
            <Link href="/ai-demos" onClick={() => setOpen(false)} className="mobile-nav-link">AI Demos</Link>
            <Link href="/pricing" onClick={() => setOpen(false)} className="mobile-nav-link">Pricing</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="mobile-nav-link">About</Link>
            <Link href="/#founders" onClick={() => setOpen(false)} className="mobile-nav-link">Founders</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="mobile-nav-link">Blog</Link>
            <Link href="/careers" onClick={() => setOpen(false)} className="mobile-nav-link">Careers</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="mobile-nav-link-cta">Contact Us</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
