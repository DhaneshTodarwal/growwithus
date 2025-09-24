import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { z } from 'zod'
import rateLimit from 'express-rate-limit'

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

// Quote endpoint with minimal validation
app.post('/quote', (req, res) => {
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    company: z.string().min(1),
    projectType: z.enum(['web','app','ai','other']).default('other'),
    message: z.string().min(1).max(2000)
  })
  const parsed = schema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: 'Invalid input' })
  // TODO: forward to email/CRM; for now just echo
  res.json({ received: true, at: new Date().toISOString() })
})

const port = process.env.PORT || 4001
app.listen(port, () => console.log(`forgevia-api listening on :${port}`))
