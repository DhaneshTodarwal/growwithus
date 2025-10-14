import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { z } from 'zod'
import rateLimit from 'express-rate-limit'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(helmet())
app.use(cors({ origin: '*', methods: ['GET','POST'] }))
app.use(express.json({ limit: '1mb' }))
app.use(rateLimit({ windowMs: 60_000, max: 60 }))

app.get('/health', (_req, res) => res.json({ ok: true }))

// Simple demo endpoint (mocked, no external calls)
app.post('/demo/chatbot', (req, res) => {
  const schema = z.object({ prompt: z.string().min(1).max(500) })
  const parsed = schema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: 'Invalid input' })
  const { prompt } = parsed.data
  const reply = `Simulated AI: For "${prompt}", we would design a workflow with intake → process → result. This demo does not store data.`
  res.json({ reply })
})

// Quote endpoint with data persistence and email notification
app.post('/quote', async (req, res) => {
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    company: z.string().min(1),
    projectType: z.enum(['web','app','ai','ecommerce','whatsapp','social-media','seo','branding','other']).default('other'),
    message: z.string().min(1).max(2000)
  })
  const parsed = schema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: 'Invalid input' })
  
  try {
    // Create quote entry with timestamp and unique ID
    const quoteEntry = {
      id: Date.now().toString(),
      ...parsed.data,
      submittedAt: new Date().toISOString(),
      ipAddress: req.ip || req.headers['x-forwarded-for'] || 'unknown'
    }
    
    // Read existing quotes
    const dataPath = path.join(__dirname, '..', 'data', 'quotes.json')
    let quotes = []
    try {
      const data = await fs.readFile(dataPath, 'utf-8')
      quotes = JSON.parse(data)
    } catch (err) {
      // If file doesn't exist or is empty, start with empty array
      console.log('Creating new quotes file')
    }
    
    // Add new quote
    quotes.push(quoteEntry)
    
    // Save back to file
    await fs.writeFile(dataPath, JSON.stringify(quotes, null, 2))
    
    console.log(`[quote] New submission from ${quoteEntry.email} - ID: ${quoteEntry.id}`)
    
    // Send email notification via Web3Forms (FREE service)
    try {
      const emailResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '7dbc2fc6-f2e9-4c9c-8b4b-542f1b7b0548',
          subject: `🎉 New Quote Request from ${parsed.data.name}`,
          from_name: 'Grow-Withus Website',
          to: 'officialgrowwithus1@gmail.com',
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone,
          company: parsed.data.company,
          project_type: parsed.data.projectType,
          message: parsed.data.message,
          submission_id: quoteEntry.id,
          submitted_at: quoteEntry.submittedAt
        })
      })
      
      if (emailResponse.ok) {
        console.log(`[email] Notification sent for quote ${quoteEntry.id}`)
      } else {
        console.warn(`[email] Failed to send notification for quote ${quoteEntry.id}`)
      }
    } catch (emailError) {
      // Don't fail the request if email fails
      console.error('[email] Error sending notification:', emailError)
    }
    
    res.json({ 
      received: true, 
      at: quoteEntry.submittedAt,
      id: quoteEntry.id 
    })
  } catch (error) {
    console.error('Error saving quote:', error)
    res.status(500).json({ error: 'Failed to save quote' })
  }
})

// Admin endpoint to view all quotes (add password protection in production!)
app.get('/quotes', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, '..', 'data', 'quotes.json')
    const data = await fs.readFile(dataPath, 'utf-8')
    const quotes = JSON.parse(data)
    res.json({ 
      total: quotes.length, 
      quotes: quotes.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
    })
  } catch (error) {
    res.json({ total: 0, quotes: [] })
  }
})

const port = process.env.PORT || 4001
app.listen(port, () => console.log(`forgevia-api listening on :${port}`))
