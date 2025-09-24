'use client'
import { useState } from 'react'

export default function PricingPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', projectType: 'other', message: '', website: '' })
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
      setStatus('Received! We will reply within 24 hours.')
    } catch (e) {
      setStatus('Failed to send. Please try again.')
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Pricing & Get a Quote</h1>
      <div className="grid md:grid-cols-3 gap-4 my-6 text-sm" aria-label="Pricing tiers">
        <div className="border rounded p-4"><h2 className="font-semibold">Starter</h2><p>$10k+</p></div>
        <div className="border rounded p-4"><h2 className="font-semibold">Growth</h2><p>$25k+</p></div>
        <div className="border rounded p-4"><h2 className="font-semibold">Enterprise</h2><p>Custom</p></div>
      </div>
      <form className="grid gap-3" onSubmit={submit}>
        <input className="border px-3 py-2 rounded" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
        <input className="border px-3 py-2 rounded" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
        <input className="border px-3 py-2 rounded" placeholder="Company" value={form.company} onChange={e=>setForm({...form,company:e.target.value})} required />
        <select className="border px-3 py-2 rounded" value={form.projectType} onChange={e=>setForm({...form,projectType:e.target.value})}>
          <option value="web">Web</option>
          <option value="app">App</option>
          <option value="ai">AI</option>
          <option value="other">Other</option>
        </select>
        <textarea className="border px-3 py-2 rounded" placeholder="Tell us about your project" rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required />
        <input className="hidden" autoComplete="off" tabIndex={-1} value={form.website} onChange={e=>setForm({...form,website:e.target.value})} placeholder="Website" aria-hidden="true" />
        <button className="px-4 py-2 rounded bg-forge-gold text-black font-semibold w-fit">Get My Quote</button>
      </form>
      {status && <p className="mt-4 text-sm" role="status">{status}</p>}
    </div>
  )
}
