import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, message } = data || {}
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }
    // Basic length safeguards
    if (name.length > 120 || email.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: 'Input too long' }, { status: 400 })
    }
    // TODO: Replace with real email/send logic (Resend, SendGrid, etc.)
    console.log('[contact] new submission', { name, email, message: message.slice(0, 200) })
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }
}

export const dynamic = 'force-dynamic'import { NextRequest, NextResponse } from 'next/server'

// Minimal stub – replace with real email service (Nodemailer, Postmark, Resend)
export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Basic validation
    if (!data?.name || !data?.email || !data?.message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })
    }

    // Honeypot check
    if (data?.honey) {
      return NextResponse.json({ ok: true })
    }

    // TODO: send email or store lead
    // Example: await sendEmail(data)

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
