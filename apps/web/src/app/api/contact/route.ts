import { NextRequest, NextResponse } from 'next/server'

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
