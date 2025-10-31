import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Honeypot check - block spam bots
    if (body.website) {
      return NextResponse.json({ error: 'Blocked' }, { status: 400 })
    }
    
    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.company || !body.message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }
    
    // Validate phone number (minimum 10 digits)
    const phoneDigits = body.phone.replace(/\D/g, '')
    if (phoneDigits.length < 10) {
      return NextResponse.json({ error: 'Phone number must be at least 10 digits' }, { status: 400 })
    }
    
    // Send email notification via Web3Forms
    const emailResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '7dbc2fc6-f2e9-4c9c-8b4b-542f1b7b0548',
        subject: `🎉 New Quote Request from ${body.name}`,
        from_name: 'Grow-Withus Website',
        to: 'officialgrowwithus1@gmail.com',
        name: body.name,
        email: body.email,
        phone: body.phone,
        company: body.company,
        project_type: body.projectType || 'other',
        message: body.message,
        submitted_at: new Date().toISOString(),
        // Auto-reply to the user
        replyto: body.email,
        autoresponse: true,
        autoresponse_subject: 'Your Quote Request Has Been Received! 🚀',
        autoresponse_message: `Hi ${body.name},

Thank you for requesting a quote from Grow-WithUs! We're excited about the opportunity to work with ${body.company}.

Our team is reviewing your requirements and will send you a detailed proposal within 24-48 hours.

What happens next:
1. ✅ We'll review your project requirements
2. 📊 Prepare a customized proposal with pricing
3. 📞 Schedule a call to discuss the details
4. 🚀 Get started on your project!

Your Quote Details:
• Company: ${body.company}
• Service: ${body.service || 'Not specified'}
• Budget: ${body.budget || 'Not specified'}
• Timeline: ${body.timeline || 'Not specified'}

Have questions? Reply to this email or reach us:
• WhatsApp: +91 820-896-3473
• Website: https://officialgrowwithus.vercel.app

Best regards,
The Grow-WithUs Team`
      })
    })
    
    if (!emailResponse.ok) {
      console.error('Web3Forms error:', await emailResponse.text())
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }
    
    const emailData = await emailResponse.json()
    
    if (!emailData.success) {
      console.error('Web3Forms returned error:', emailData)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }
    
    console.log('[quote] Email sent successfully')
    
    // Save to Google Sheets (non-blocking - won't fail if sheets fails)
    try {
      const sheetsUrl = process.env.GOOGLE_SHEETS_FORMS_WEBHOOK_URL
      console.log('[quote] Google Sheets URL configured:', !!sheetsUrl)
      
      if (sheetsUrl) {
        const headers = req.headers
        const userAgent = headers.get('user-agent') || 'Unknown'
        const device = /mobile/i.test(userAgent) ? 'Mobile' : 'Desktop'
        
        const sheetData = {
          formType: 'quote',
          timestamp: new Date().toISOString(),
          name: body.name,
          email: body.email,
          phone: body.phone,
          company: body.company,
          service: body.service || 'Not specified',
          budget: body.budget || 'Not specified',
          timeline: body.timeline || 'Not specified',
          message: body.message,
          page: headers.get('referer') || 'Direct',
          device
        }
        
        console.log('[quote] Sending to Google Sheets:', JSON.stringify(sheetData))
        
        const sheetsResponse = await fetch(sheetsUrl, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(sheetData),
          redirect: 'follow'
        })
        
        console.log('[quote] Google Sheets response status:', sheetsResponse.status)
        const sheetsResult = await sheetsResponse.text()
        console.log('[quote] Google Sheets response:', sheetsResult)
        console.log('[quote] Saved to Google Sheets successfully')
      } else {
        console.log('[quote] Google Sheets URL not configured - skipping')
      }
    } catch (sheetsError) {
      console.error('[quote] Google Sheets error (non-critical):', sheetsError)
      // Don't fail the request if sheets fails
    }
    
    return NextResponse.json({ 
      received: true, 
      at: new Date().toISOString(),
      message: 'Quote request submitted successfully'
    })
    
  } catch (error) {
    console.error('Quote submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
