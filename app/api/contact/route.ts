import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validation'

const getResend = () => {
  if (process.env.RESEND_API_KEY) {
    const { Resend } = require('resend')
    return new Resend(process.env.RESEND_API_KEY)
  }
  return null
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body)
    
    // Check honeypot field
    if (validatedData.honeypot) {
      return NextResponse.json({ error: 'Bot detected' }, { status: 400 })
    }

    // Prepare email content
    const emailContent = `
New contact form submission from Xeinst Agency Website:

Name: ${validatedData.name}
Email: ${validatedData.email}
Company: ${validatedData.company || 'Not provided'}
Phone: ${validatedData.phone || 'Not provided'}

Problem Description:
${validatedData.problem}

Additional Message:
${validatedData.message || 'None provided'}

---
Submitted at: ${new Date().toLocaleString()}
    `.trim()

    // Send email using Resend
    const resend = getResend()
    if (resend) {
      const { data, error } = await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || 'website@xeinst.com',
        to: process.env.CONTACT_TO_EMAIL || 'nadav.benedek@xeinst.com',
        subject: `New Contact Form Submission from ${validatedData.name}`,
        text: emailContent,
        reply_to: validatedData.email,
      })

      if (error) {
        console.error('Resend error:', error)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
      }

      console.log('Email sent successfully:', data)
    } else {
      // Fallback: log to console if no Resend API key
      console.log('Contact form submission (no email sent):', emailContent)
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json({ 
        error: 'Invalid form data',
        details: error.message 
      }, { status: 400 })
    }

    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}
