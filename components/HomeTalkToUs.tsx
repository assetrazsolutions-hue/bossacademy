import Image from 'next/image'
import { WHATSAPP_ADVISOR_URL } from '@/lib/whatsapp'
import { siteImages } from '@/lib/site-images'

export default function HomeTalkToUs() {
  const { src, alt } = siteImages.teamGuide

  return (
    <section className="py-14 md:py-16 bg-white border-t border-slate-100/80">
      <div className="section-container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 md:items-start">
          <div className="shrink-0">
            <Image
              src={src}
              alt={alt}
              width={260}
              height={260}
              className="rounded-full object-cover ring-4 ring-white shadow-lg ring-slate-200/90 w-[200px] h-[200px] md:w-[260px] md:h-[260px]"
              sizes="(max-width: 768px) 200px, 260px"
            />
            <p className="text-center text-xs text-slate-500 mt-3 max-w-[200px] md:max-w-[260px] mx-auto">
              Your learning team · We&apos;re here to guide you
            </p>
          </div>
          <div className="flex-1 text-center md:text-left">
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
        </div>
      </div>
    </section>
  )
}
