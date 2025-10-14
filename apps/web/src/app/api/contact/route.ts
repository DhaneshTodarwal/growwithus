import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// Single clean POST handler
export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, message, honey } = data || {}
    if (honey) return NextResponse.json({ ok: true }) // bot trap
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })
    }
    if (name.length > 120 || email.length > 200 || message.length > 5000) {
      return NextResponse.json({ ok: false, error: 'Input too long' }, { status: 400 })
    }
    console.log('[contact] submission', { name, email, snippet: message.slice(0, 140) })
    // TODO: integrate email provider (Resend, Postmark, etc.)
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })
  }
}
