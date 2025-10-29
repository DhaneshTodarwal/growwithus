import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { timestamp, page, referrer } = data || {}
    
    // Get user info from headers
    const userAgent = req.headers.get('user-agent') || 'unknown'
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'
    
    // Prepare data for Google Sheets
    const trackingData = {
      timestamp: timestamp || new Date().toISOString(),
      page: page || '/',
      referrer: referrer || 'direct',
      userAgent: userAgent,
      ip: ip,
      device: userAgent.includes('Mobile') ? 'Mobile' : 'Desktop'
    }
    
    console.log('[WhatsApp Click]', trackingData)
    
    // Send to Google Sheets
    // You'll need to set up Google Sheets API and add the credentials to environment variables
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(trackingData)
        })
      } catch (error) {
        console.error('Failed to send to Google Sheets:', error)
      }
    }
    
    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('WhatsApp tracking error:', error)
    return NextResponse.json({ success: false, error: 'Failed to track' }, { status: 500 })
  }
}
