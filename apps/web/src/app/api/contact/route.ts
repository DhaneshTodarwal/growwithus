import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// Single clean POST handler with Web3Forms email integration
export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, message, honey } = data || {}
    
    // Bot trap
    if (honey) return NextResponse.json({ ok: true })
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })
    }
    
    // Validate field lengths
    if (name.length > 120 || email.length > 200 || message.length > 5000) {
      return NextResponse.json({ ok: false, error: 'Input too long' }, { status: 400 })
    }
    
    console.log('[contact] submission', { name, email, snippet: message.slice(0, 140) })
    
    // Send email notification via Web3Forms
    try {
      const emailResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '7dbc2fc6-f2e9-4c9c-8b4b-542f1b7b0548',
          subject: `📧 New Contact Message from ${name}`,
          from_name: 'Grow-Withus Website - Contact Form',
          to: 'officialgrowwithus1@gmail.com',
          name: name,
          email: email,
          message: message,
          submitted_at: new Date().toISOString()
        })
      })
      
      if (!emailResponse.ok) {
        console.error('[contact] Web3Forms error:', await emailResponse.text())
        return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
      }
      
      const emailData = await emailResponse.json()
      
      if (!emailData.success) {
        console.error('[contact] Web3Forms returned error:', emailData)
        return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
      }
      
      console.log('[contact] Email sent successfully')
      
      // Save to Google Sheets (non-blocking - won't fail if sheets fails)
      try {
        const sheetsUrl = process.env.GOOGLE_SHEETS_FORMS_WEBHOOK_URL
        console.log('[contact] Google Sheets URL configured:', !!sheetsUrl)
        
        if (sheetsUrl) {
          const headers = req.headers
          const userAgent = headers.get('user-agent') || 'Unknown'
          const device = /mobile/i.test(userAgent) ? 'Mobile' : 'Desktop'
          
          const sheetData = {
            formType: 'contact',
            timestamp: new Date().toISOString(),
            name,
            email,
            phone: data.phone || 'Not provided',
            message,
            page: headers.get('referer') || 'Direct',
            device,
            userAgent
          }
          
          console.log('[contact] Sending to Google Sheets:', JSON.stringify(sheetData))
          
          const sheetsResponse = await fetch(sheetsUrl, {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(sheetData),
            redirect: 'follow'
          })
          
          console.log('[contact] Google Sheets response status:', sheetsResponse.status)
          const sheetsResult = await sheetsResponse.text()
          console.log('[contact] Google Sheets response:', sheetsResult)
          console.log('[contact] Saved to Google Sheets successfully')
        } else {
          console.log('[contact] Google Sheets URL not configured - skipping')
        }
      } catch (sheetsError) {
        console.error('[contact] Google Sheets error (non-critical):', sheetsError)
        // Don't fail the request if sheets fails
      }
      
      return NextResponse.json({ ok: true, message: 'Message sent successfully!' })
      
    } catch (emailError) {
      console.error('[contact] Error sending email:', emailError)
      return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
    }
    
  } catch (e) {
    console.error('[contact] Error:', e)
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })
  }
}
