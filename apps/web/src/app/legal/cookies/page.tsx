'use client'
import { useState } from 'react'

export default function Cookies() {
  const [consent, setConsent] = useState<'granted'|'denied'|'unset'>('unset')
  return (
    <div className="max-w-3xl mx-auto p-6 prose dark:prose-invert">
      <h1>Cookie Policy</h1>
      <p>We use essential cookies for site functionality. Analytics cookies are optional.</p>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-forge-gold text-black rounded" onClick={()=>setConsent('granted')}>Accept</button>
        <button className="px-4 py-2 border rounded" onClick={()=>setConsent('denied')}>Decline</button>
      </div>
      <p className="text-sm mt-2">Consent: {consent}</p>
    </div>
  )
}
