import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL
const fromEmail = process.env.NOTIFICATION_FROM_EMAIL || 'no-reply@bossacademy.local'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const payload = {
      full_name: String(body.full_name || ''),
      phone_number: String(body.phone_number || ''),
      email: String(body.email || ''),
      experience_years: Number(body.experience_years || 0),
      area_of_expertise: String(body.area_of_expertise || ''),
      preferred_type: String(body.preferred_type || ''),
      message: String(body.message || ''),
    }

    if (resendApiKey && adminEmail) {
      try {
        const resend = new Resend(resendApiKey)

        await resend.emails.send({
          from: fromEmail,
          to: adminEmail,
          subject: 'New Trainer Application - BOSS Academy',
          text: [
            'A new trainer has applied.',
            '',
            `Name: ${payload.full_name}`,
            `Phone: ${payload.phone_number}`,
            `Email: ${payload.email}`,
            `Experience (years): ${payload.experience_years}`,
            `Area of expertise: ${payload.area_of_expertise}`,
            `Preferred type: ${payload.preferred_type}`,
            '',
            'Message:',
            payload.message || '(no message provided)',
          ].join('\n'),
        })
      } catch (emailError) {
        console.error('Error sending trainer notification email:', emailError)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Unexpected error in trainer application API:', err)
    return NextResponse.json({ ok: false, error: 'Unexpected error' }, { status: 500 })
  }
}

