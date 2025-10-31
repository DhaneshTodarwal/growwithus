"use client";

import { siteConfig } from '../../config/site'

import { useState } from 'react'
import Script from 'next/script'
import Reveal from '../../components/Reveal'
import { Calendar, Phone, Mail, Send, ShieldCheck, CheckCircle2, HelpCircle } from 'lucide-react'
import { trackContactFormSubmission, trackCalendlyClick } from '../../lib/gtag'

type FormState = {
  name: string
  email: string
  message: string
  agree: boolean
  honey: string
}

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
  agree: false,
  honey: ''
}

export default function Contact() {
  const [state, setState] = useState<FormState>(initialState)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as any
    setState((s) => ({ ...s, [name]: type === 'checkbox' ? checked : value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setStatus('idle')
    if (state.honey) return // bot
    if (!state.name || !state.email || !state.message) {
      setError('Please provide your name, email, and a short message.')
      return
    }
    try {
      setLoading(true)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
      })
      if (!res.ok) throw new Error('Failed to send')
      
      // Track successful conversion in Google Analytics
      trackContactFormSubmission({
        name: state.name,
        email: state.email,
        messageLength: state.message.length
      })
      
      setStatus('success')
      setState(initialState)
    } catch (err) {
  setStatus('error')
  setError('Something went wrong. Please email officialdhaneshjain@gmail.com directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-6xl mx-auto p-6 md:p-10">
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <div className="text-center max-w-3xl mx-auto">
  <Reveal delay={0}><h1 className="text-4xl md:text-6xl font-bold gradient-text">Contact {siteConfig.name}</h1></Reveal>
        <Reveal delay={100}><p className="subheading mt-3">Choose how you want to start — book a quick call or send us your brief. We reply within 24 hours.</p></Reveal>
        <Reveal delay={150}>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a href="mailto:officialdhaneshjain@gmail.com" className="inline-flex items-center gap-2 opacity-90 hover:opacity-100">
              <Mail className="w-4 h-4"/> officialdhaneshjain@gmail.com
            </a>
            <span className="hidden sm:inline opacity-40">•</span>
            <a href="tel:+917276003804" className="inline-flex items-center gap-2 opacity-90 hover:opacity-100">
              <Phone className="w-4 h-4"/> +91 72760 03804
            </a>
          </div>
        </Reveal>
      </div>

      {/* Two-path cards */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Book a Call Card */}
        <Reveal delay={0}>
          <div className="card">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Book a Discovery Call</h2>
            </div>
            <p className="text-text-secondary">Prefer to talk it through? Grab a 30‑minute slot that works for you. No pressure — just a quick chat about goals and fit.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent-primary mt-0.5"/> Clear next steps in 24h</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent-primary mt-0.5"/> Fixed, transparent quotes</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent-primary mt-0.5"/> Modern stack: Next.js, AI agents, cloud</li>
            </ul>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a 
                href="https://calendly.com/dhaneshdata01/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => trackCalendlyClick()}
                className="btn btn-primary btn-sparkle inline-flex items-center justify-center gap-2"
              >
                Book 30‑min Call <Phone className="w-4 h-4" />
              </a>
                <a href="mailto:officialdhaneshjain@gmail.com" className="btn btn-secondary btn-sparkle inline-flex items-center justify-center gap-2">
                Email Us <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Send Your Brief Card (simplified form) */}
        <Reveal delay={80}>
          <div className="card">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Send Your Project Brief</h2>
            </div>
            <form onSubmit={onSubmit} className="space-y-4">
              <input name="honey" value={state.honey} onChange={onChange} className="hidden" aria-hidden="true" tabIndex={-1} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                  <input id="name" name="name" value={state.name} onChange={onChange} required placeholder="Jane Doe" className="w-full rounded-lg border border-border bg-card-bg-secondary/50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={state.email} onChange={onChange} required placeholder="jane@company.com" className="w-full rounded-lg border border-border bg-card-bg-secondary/50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">What are you building?</label>
                <textarea id="message" name="message" value={state.message} onChange={onChange} required rows={5} placeholder="Tell us about goals, audience, timeline, and success criteria…" className="w-full rounded-lg border border-border bg-card-bg-secondary/50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]" />
              </div>

              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" name="agree" checked={state.agree} onChange={onChange} className="rounded" />
                I agree to the processing of my information according to the privacy policy.
              </label>

              {error && (<div className="text-sm text-red-500">{error}</div>)}
              {status === 'success' && (
                <div className="text-sm text-green-600 flex items-center gap-2"><ShieldCheck className="w-4 h-4"/>Thanks! We’ll get back to you within 24 hours.</div>
              )}

              <button type="submit" disabled={loading} className="btn btn-primary btn-sparkle inline-flex items-center gap-2">
                {loading ? 'Sending…' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-text-secondary">
        <Reveal delay={0}><div className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-primary"/> We reply within 24h</div></Reveal>
        <Reveal delay={100}><div className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-primary"/> 100% confidential</div></Reveal>
        <Reveal delay={200}><div className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-primary"/> No spam, ever</div></Reveal>
      </div>

      {/* Inline Calendly Embed */}
      <div className="mt-16">
        <Reveal delay={0}><h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Book directly on this page</h2></Reveal>
        <Reveal delay={80}>
          <div className="card p-2">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/dhaneshdata01/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: '280px', height: '700px' }}
            />
          </div>
        </Reveal>
      </div>

      {/* Pre-sales FAQ */}
      <div className="mt-16">
        <Reveal delay={0}><h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Pre‑sales FAQ</h2></Reveal>
        <Reveal delay={80}><p className="text-center text-text-secondary max-w-3xl mx-auto mb-8">Quick answers to the most common questions before we get started.</p></Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Reveal delay={0}>
            <details className="card">
              <summary className="cursor-pointer list-none flex items-center gap-3 font-medium">
                <HelpCircle className="w-5 h-5 text-accent-primary" /> How much does a typical project cost?
              </summary>
              <div className="mt-3 text-text-secondary text-sm">Most website projects start around $5k–$15k; apps and AI agents vary by scope. We’ll confirm a fixed quote after a short discovery call.</div>
            </details>
          </Reveal>
          <Reveal delay={120}>
            <details className="card">
              <summary className="cursor-pointer list-none flex items-center gap-3 font-medium">
                <HelpCircle className="w-5 h-5 text-accent-primary" /> What timelines do you work with?
              </summary>
              <div className="mt-3 text-text-secondary text-sm">Typical delivery is 2–4 weeks for websites and 4–8 weeks for apps/agents, with weekly demos so you can see progress.</div>
            </details>
          </Reveal>
          <Reveal delay={240}>
            <details className="card">
              <summary className="cursor-pointer list-none flex items-center gap-3 font-medium">
                <HelpCircle className="w-5 h-5 text-accent-primary" /> Do I own the code and IP?
              </summary>
              <div className="mt-3 text-text-secondary text-sm">Yes. Upon payment, you own the code and IP. We deliver everything in a private repo with documentation.</div>
            </details>
          </Reveal>
          <Reveal delay={360}>
            <details className="card">
              <summary className="cursor-pointer list-none flex items-center gap-3 font-medium">
                <HelpCircle className="w-5 h-5 text-accent-primary" /> What happens after launch?
              </summary>
              <div className="mt-3 text-text-secondary text-sm">We offer support and iteration packages. Choose ongoing maintenance or engage us ad‑hoc for new features.</div>
            </details>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

