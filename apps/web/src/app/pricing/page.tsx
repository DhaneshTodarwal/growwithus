'use client'
import { useState } from 'react'
import { trackQuoteFormSubmission } from '../../lib/gtag'

export default function PricingPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', projectType: 'other', message: '', website: '' })
  const [status, setStatus] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.website) {
      setStatus('Submission blocked.')
      return
    }
    setStatus('Sending…')
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Request failed')
      
      // Track successful conversion in Google Analytics
      trackQuoteFormSubmission({
        name: form.name,
        email: form.email,
        company: form.company,
        projectType: form.projectType
      })
      
      setStatus('Received! We will reply within 24 hours.')
    } catch (e) {
      setStatus('Failed to send. Please try again.')
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Get a Quote</h1>
      <p className="text-gray-600 mb-6">Tell us about your project and we'll provide a custom quote tailored to your needs.</p>
      <form className="grid gap-4" onSubmit={submit}>
        <input className="border-2 border-gray-300 dark:border-gray-600 focus:border-forge-gold dark:focus:border-forge-gold px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
        <input className="border-2 border-gray-300 dark:border-gray-600 focus:border-forge-gold dark:focus:border-forge-gold px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
        <input className="border-2 border-gray-300 dark:border-gray-600 focus:border-forge-gold dark:focus:border-forge-gold px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors" placeholder="Mobile Number (e.g., +91 9876543210)" type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required />
        <input className="border-2 border-gray-300 dark:border-gray-600 focus:border-forge-gold dark:focus:border-forge-gold px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors" placeholder="Company" value={form.company} onChange={e=>setForm({...form,company:e.target.value})} required />
        <select className="border-2 border-gray-300 dark:border-gray-600 focus:border-forge-gold dark:focus:border-forge-gold px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors" value={form.projectType} onChange={e=>setForm({...form,projectType:e.target.value})}>
          <option value="web">Website Development</option>
          <option value="app">App Development</option>
          <option value="ai">AI & Chatbots</option>
          <option value="ecommerce">E-Commerce Development</option>
          <option value="whatsapp">WhatsApp Business API</option>
          <option value="social-media">Social Media Management</option>
          <option value="seo">SEO Optimization</option>
          <option value="branding">Brand Identity & Logo</option>
          <option value="other">Other</option>
        </select>
        <textarea className="border-2 border-gray-300 dark:border-gray-600 focus:border-forge-gold dark:focus:border-forge-gold px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors" placeholder="Tell us about your project" rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required />
        <input className="hidden" autoComplete="off" tabIndex={-1} value={form.website} onChange={e=>setForm({...form,website:e.target.value})} placeholder="Website" aria-hidden="true" />
        <button className="px-4 py-2 rounded bg-forge-gold text-black font-semibold w-fit">Get My Quote</button>
      </form>
      {status && <p className="mt-4 text-sm" role="status">{status}</p>}
    </div>
  )
}
