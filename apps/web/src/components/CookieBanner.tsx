'use client'
import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const v = localStorage.getItem('cookie-consent')
    if (!v) setVisible(true)
  }, [])
  if (!visible) return null
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-xl w-[92%] bg-white dark:bg-gray-900 border rounded shadow p-4 text-sm">
      <p>We use essential cookies to run this site. Analytics cookies are optional. See our <a className="underline" href="/legal/cookies">Cookie Policy</a>.</p>
      <div className="mt-3 flex gap-2 justify-end">
        <button className="px-3 py-1 border rounded" onClick={()=>{ localStorage.setItem('cookie-consent','denied'); setVisible(false) }}>Decline</button>
        <button className="px-3 py-1 rounded bg-forge-gold text-black font-semibold" onClick={()=>{ localStorage.setItem('cookie-consent','granted'); setVisible(false) }}>Accept</button>
      </div>
    </div>
  )
}
