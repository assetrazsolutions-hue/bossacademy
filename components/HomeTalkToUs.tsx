import { WHATSAPP_ADVISOR_URL } from '@/lib/whatsapp'

export default function HomeTalkToUs() {
  return (
    <section className="py-14 md:py-16 bg-white border-t border-slate-100/80">
      <div className="section-container max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-3">Talk to us directly</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          We&apos;re here to guide you — feel free to reach out and ask anything.
        </p>
        <a
          href={WHATSAPP_ADVISOR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline px-8 py-3.5 text-base font-semibold inline-flex justify-center"
        >
          Get Free Guidance
        </a>
      </div>
    </section>
  )
}
