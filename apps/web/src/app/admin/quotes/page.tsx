'use client'
import { useState, useEffect } from 'react'

interface Quote {
  id: string
  name: string
  email: string
  company: string
  projectType: string
  message: string
  submittedAt: string
  ipAddress?: string
}

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetchQuotes()
  }, [])

  const fetchQuotes = async () => {
    try {
      const api = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4001'
      const res = await fetch(`${api}/quotes`)
      const data = await res.json()
      setQuotes(data.quotes || [])
      setTotal(data.total || 0)
    } catch (error) {
      console.error('Error fetching quotes:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    })
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Quote Submissions</h1>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Quote Submissions</h1>
        <button 
          onClick={fetchQuotes}
          className="px-4 py-2 bg-forge-gold text-black rounded font-semibold hover:opacity-90"
        >
          Refresh
        </button>
      </div>

      <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
        <p className="text-sm">
          <strong>Total Submissions:</strong> {total}
        </p>
        <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">
          ⚠️ Note: In production, add password protection to this page!
        </p>
      </div>

      {quotes.length === 0 ? (
        <div className="text-center py-12 border rounded">
          <p className="text-gray-500">No quote submissions yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {quotes.map((quote) => (
            <div 
              key={quote.id} 
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                  <p className="font-semibold">{quote.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="font-semibold">
                    <a href={`mailto:${quote.email}`} className="text-blue-600 hover:underline">
                      {quote.email}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Company</p>
                  <p className="font-semibold">{quote.company}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Project Type</p>
                  <p className="font-semibold capitalize">{quote.projectType}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Message</p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
                  <p className="whitespace-pre-wrap">{quote.message}</p>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 pt-4 border-t">
                <span>Submitted: {formatDate(quote.submittedAt)}</span>
                <span>ID: {quote.id}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
