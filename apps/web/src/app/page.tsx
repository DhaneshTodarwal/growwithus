'use client'
import { siteConfig } from '../config/site'
import { motion } from 'framer-motion'
import Image from 'next/image'
import CtaBand from '../components/CtaBand'
import HeroBackground from '../components/HeroBackground'
import FoundersBackground from '../components/FoundersBackground'
import FoundersSection from '../components/FoundersSection'
import Testimonials from '../components/Testimonials'
import ProcessSection from '../components/ProcessSection'
import StatsSection from '../components/StatsSection'
import TechStackSection from '../components/TechStackSection'
import FAQSection from '../components/FAQSection'
import BlogSection from '../components/BlogSection'
import NewsletterSection from '../components/NewsletterSection'
import { Code, Smartphone, Globe, ArrowRight, Rocket, Lightbulb, Handshake, BadgeDollarSign, Eye, TrendingUp, Award, Gauge, BarChart3, LineChart, Palette } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Reveal from '../components/Reveal'

export default function HomePage() {
  return (
    <>
      <motion.section
        className="hero relative min-h-[56vh] sm:min-h-[62vh] md:min-h-[72vh] flex flex-col items-center justify-center text-center px-6 pt-6 pb-8 md:pb-12 overflow-hidden"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <HeroBackground />
        <FoundersBackground />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-6 hidden md:block w-72 h-72 bg-accent-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-24 right-6 hidden md:block w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="z-10 max-w-6xl mx-auto">
          {/* Enhanced Main Heading */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-text-primary via-accent-primary to-accent-secondary bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
              {siteConfig.name}
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-text-primary/90"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            >
              Craft Your Digital Future Today
            </motion.h2>
          </motion.div>
          
          <motion.p
            className="subheading mt-6 max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed text-text-secondary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          >
            Web, Apps, and Custom AI Agents for startups, SMBs, and mid‑market enterprises.
          </motion.p>
          
          {/* Why Choose Section */}
          <motion.div
            className="mt-12 hidden md:block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-xs tracking-widest font-semibold text-text-secondary uppercase">
              Why choose {siteConfig.name}
            </h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Reveal delay={0}>
                <div className="card hover:-translate-y-1 transition-transform">
                  <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white">
                    <Rocket size={18} />
                  </div>
                  <h4 className="font-semibold text-lg text-text-primary mb-1">Fast Delivery</h4>
                  <p className="text-text-secondary text-sm">Projects completed in 2–4 weeks with weekly demos.</p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="card hover:-translate-y-1 transition-transform">
                  <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white">
                    <Lightbulb size={18} />
                  </div>
                  <h4 className="font-semibold text-lg text-text-primary mb-1">Modern Tech</h4>
                  <p className="text-text-secondary text-sm">Latest frameworks & AI for future‑proof solutions.</p>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="card hover:-translate-y-1 transition-transform">
                  <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white">
                    <Handshake size={18} />
                  </div>
                  <h4 className="font-semibold text-lg text-text-primary mb-1">Personal Service</h4>
                  <p className="text-text-secondary text-sm">Direct access to founders—no account managers.</p>
                </div>
              </Reveal>
              <Reveal delay={360}>
                <div className="card hover:-translate-y-1 transition-transform">
                  <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white">
                    <BadgeDollarSign size={18} />
                  </div>
                  <h4 className="font-semibold text-lg text-text-primary mb-1">Transparent Pricing</h4>
                  <p className="text-text-secondary text-sm">No hidden fees, clear quotes, fair pricing.</p>
                </div>
              </Reveal>
            </div>

            {/* Mini Process Timeline */}
            <div className="mt-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Reveal delay={0}>
                  <div className="bg-glassmorphism-bg border border-glassmorphism-border rounded-xl p-5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white flex items-center justify-center text-sm font-bold">1</div>
                      <div className="font-medium text-text-primary">Free Consult</div>
                    </div>
                    <p className="mt-2 text-sm text-text-secondary">Clarify goals and scope in a 30‑minute call.</p>
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <div className="bg-glassmorphism-bg border border-glassmorphism-border rounded-xl p-5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white flex items-center justify-center text-sm font-bold">2</div>
                      <div className="font-medium text-text-primary">Plan & Quote</div>
                    </div>
                    <p className="mt-2 text-sm text-text-secondary">Receive a proposal with timeline and pricing.</p>
                  </div>
                </Reveal>
                <Reveal delay={240}>
                  <div className="bg-glassmorphism-bg border border-glassmorphism-border rounded-xl p-5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white flex items-center justify-center text-sm font-bold">3</div>
                      <div className="font-medium text-text-primary">Build & Demo</div>
                    </div>
                    <p className="mt-2 text-sm text-text-secondary">Weekly updates with clickable demos.</p>
                  </div>
                </Reveal>
                <Reveal delay={360}>
                  <div className="bg-glassmorphism-bg border border-glassmorphism-border rounded-xl p-5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white flex items-center justify-center text-sm font-bold">4</div>
                      <div className="font-medium text-text-primary">Launch & Support</div>
                    </div>
                    <p className="mt-2 text-sm text-text-secondary">Deploy, monitor, and iterate with confidence.</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </motion.div>

          {/* Professional CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a className="btn-hero-primary group" href="/contact">
              <span className="btn-text flex items-center gap-3">
                🚀 Start Your Project
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            
            <a className="btn-hero-secondary group" href="/portfolio">
              <span className="flex items-center justify-center gap-3">
                <Eye className="w-5 h-5" />
                View Our Work
              </span>
            </a>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <div className="trust-indicator">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">💬 Free Consultation</span>
            </div>
            <div className="trust-indicator">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">💰 30-Day Money Back</span>
            </div>
            <div className="trust-indicator">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">🕐 24/7 Support</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-14 md:py-20 max-w-7xl mx-auto px-8 relative">
        {/* Professional Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/3 to-transparent opacity-50"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-center max-w-5xl mx-auto mb-12 md:mb-16">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter gradient-text mb-6">
              Our Core Capabilities
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-4xl mx-auto">
              We provide a complete suite of digital services to transform your ideas into reality, from initial concept to final launch and beyond.
            </p>
            <div className="mt-6 md:mt-8 flex justify-center">
              <div className="w-32 h-1.5 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary rounded-full"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-10 md:mb-12">
            <Reveal delay={0}>
              <ServiceCard
                href="/services/website-development"
                icon={<Globe size={32} />}
                title="Website Development"
                description="Build fast, SEO-optimized websites that convert visitors into customers with modern frameworks and best practices."
                gradient="bg-gradient-to-br from-blue-500 to-cyan-400"
                badge="Most Popular"
              />
            </Reveal>
            <Reveal delay={120}>
              <ServiceCard
                href="/services/application-development"
                icon={<Smartphone size={32} />}
                title="Application Development"
                description="Cross-platform mobile and desktop applications that work seamlessly across all devices and operating systems."
                gradient="bg-gradient-to-br from-purple-500 to-pink-400"
                badge="Cross-Platform"
              />
            </Reveal>
            <Reveal delay={240}>
              <ServiceCard
                href="/services/custom-ai-agents"
                icon={<Code size={32} />}
                title="Custom AI Agents"
                description="Intelligent chatbots, automation systems, and AI-powered tools that enhance your business operations."
                gradient="bg-gradient-to-br from-emerald-500 to-teal-400"
                badge="AI Powered"
              />
            </Reveal>
          </div>
        </div>
  </section>

  <ProcessSection />
  <FoundersSection />
      <StatsSection />
      <TechStackSection />
      <Testimonials />

      <div className="mx-auto max-w-7xl px-6 my-6 md:my-8 hidden md:block">
        <div className="h-px bg-gradient-to-r from-accent-primary/30 via-accent-secondary/30 to-accent-primary/30" />
      </div>

      <section className="max-w-6xl mx-auto px-6 py-6 md:py-8">
        <Reveal delay={0}>
          <div className="bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border border-glassmorphism-border rounded-2xl p-6 md:p-7 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2">Have a project in mind?</h3>
            <p className="text-text-secondary mb-6">We'll share a tailored plan and timeline within 48 hours.</p>
            <a href="/contact" className="btn btn-primary">Get a proposal</a>
          </div>
        </Reveal>
      </section>

      <div className="my-6 md:my-8"></div>
      <FAQSection />

      <div className="my-6 md:my-8"></div>
      <BlogSection />

      <div className="my-6 md:my-8"></div>
      <NewsletterSection />

      <Reveal delay={120}>
        <CtaBand />
      </Reveal>
    </>
  )
}