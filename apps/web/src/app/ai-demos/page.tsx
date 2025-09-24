'use client'
import { useState } from 'react'

export default function AIDemosPage() {
  const [prompt, setPrompt] = useState('Automate invoicing')
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(false)

  const send = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/demo/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      })
      const data = await res.json()
      setReply(data.reply || 'No response')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">AI Demos</h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">These demos are simulated for exploration. Data is not stored.</p>
      <div className="mt-6 flex gap-2">
        <input className="flex-1 border px-3 py-2 rounded" value={prompt} onChange={e => setPrompt(e.target.value)} />
        <button className="px-4 py-2 rounded bg-forge-gold text-black font-semibold" onClick={send} disabled={loading}>
          {loading ? 'Thinking…' : 'Run Demo'}
        </button>
      </div>
      {reply && (
        <pre className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded border overflow-auto whitespace-pre-wrap">{reply}</pre>
      )}
    </div>
  )
}
