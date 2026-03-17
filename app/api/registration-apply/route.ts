import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL
const fromEmail = process.env.NOTIFICATION_FROM_EMAIL || 'no-reply@bossacademy.local'

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5
const registrationRateLimitStore = new Map<string, { count: number; windowStart: number }>()

function isRateLimited(ip: string | null) {
  const key = ip || 'unknown'
  const now = Date.now()
  const existing = registrationRateLimitStore.get(key)

  if (!existing || now - existing.windowStart > RATE_LIMIT_WINDOW_MS) {
    registrationRateLimitStore.set(key, { count: 1, windowStart: now })
    return false
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  existing.count += 1
  registrationRateLimitStore.set(key, existing)
  return false
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      null

    if (isRateLimited(ip)) {
      return NextResponse.json({ ok: false, error: 'Too many requests' }, { status: 429 })
    }

    const body = await req.json()

    const payload = {
      full_name: String(body.full_name || ''),
      phone_number: String(body.phone_number || ''),
      email: String(body.email || ''),
      city: String(body.city || ''),
      education_profession: String(body.education_profession || ''),
      program_interested: String(body.program_interested || ''),
      organization: String(body.organization || ''),
      message: String(body.message || ''),
    }

    if (resendApiKey && adminEmail) {
      try {
        const resend = new Resend(resendApiKey)

        await resend.emails.send({
          from: fromEmail,
          to: adminEmail,
          subject: 'New Program Registration - BOSS Academy',
          text: [
            'A new program registration has been submitted.',
            '',
            `Name: ${payload.full_name}`,
            `Phone: ${payload.phone_number}`,
            `Email: ${payload.email}`,
            `City: ${payload.city}`,
            `Education / Profession: ${payload.education_profession}`,
            `Program interested: ${payload.program_interested}`,
            `Organization: ${payload.organization || '(not provided)'}`,
            '',
            'Message:',
            payload.message || '(no message provided)',
          ].join('\n'),
        })
      } catch (emailError) {
        console.error('Error sending registration notification email:', emailError)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Unexpected error in registration notification API:', err)
    return NextResponse.json({ ok: false, error: 'Unexpected error' }, { status: 500 })
  }
}

