import Link from 'next/link'
import { WHATSAPP_ADVISOR_URL } from '@/lib/whatsapp'

export default function HomeFinalCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-primary-600 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_100%_0%,rgba(249,115,22,0.2),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_100%,rgba(255,255,255,0.08),transparent)]" />

      <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.5rem] font-bold mb-5 leading-tight text-balance">
          Start your learning journey today
        </h2>
        <p className="text-lg text-blue-100/95 mb-10 leading-relaxed max-w-xl mx-auto">
          Choose a program, learn by doing, and get support when you need it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
          <Link href="/register" className="btn-cta px-8 py-4 text-base md:text-lg justify-center shadow-lg shadow-black/10">
            Enroll now
          </Link>
          <a
            href={WHATSAPP_ADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-outline-light px-8 py-4 text-base md:text-lg justify-center"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  )
}
