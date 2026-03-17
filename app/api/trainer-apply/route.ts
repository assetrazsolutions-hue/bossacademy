import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL
const fromEmail = process.env.NOTIFICATION_FROM_EMAIL || 'no-reply@bossacademy.local'

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5
const trainerRateLimitStore = new Map<string, { count: number; windowStart: number }>()

function isRateLimited(ip: string | null) {
  const key = ip || 'unknown'
  const now = Date.now()
  const existing = trainerRateLimitStore.get(key)

  if (!existing || now - existing.windowStart > RATE_LIMIT_WINDOW_MS) {
    trainerRateLimitStore.set(key, { count: 1, windowStart: now })
    return false
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  existing.count += 1
  trainerRateLimitStore.set(key, existing)
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

