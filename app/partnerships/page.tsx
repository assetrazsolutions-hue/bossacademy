import InstitutionalPartnership from '@/components/InstitutionalPartnership'
import GovernmentCSRPrograms from '@/components/GovernmentCSRPrograms'
import TrainerOverviewSection from '@/components/TrainerOverviewSection'
import Link from 'next/link'

export default function PartnershipsPage() {
  return (
    <div className="bg-surface min-h-screen">
      <div className="relative overflow-hidden bg-primary-600 text-white py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_100%_0%,rgba(249,115,22,0.18),transparent)]" />
        <div className="section-container relative text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-blue-200 uppercase tracking-wide mb-3">
            Hospitals, schools, government &amp; enterprise
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Enterprise &amp; partnerships
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            Industry-aligned training at scale — for organizations that need real outcomes, not generic slides.
          </p>
          <p className="mt-8">
            <Link
              href="/"
              className="text-sm font-medium text-white/90 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
            >
              ← Back to learner programs
            </Link>
          </p>
        </div>
      </div>

      <InstitutionalPartnership />
      <GovernmentCSRPrograms />
      <TrainerOverviewSection />

      <section className="relative py-16 md:py-20 overflow-hidden bg-primary-600 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_100%_0%,rgba(249,115,22,0.2),transparent)]" />
        <div className="section-container relative text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Ready to partner?</h2>
          <p className="text-blue-100 mb-10 leading-relaxed">
            Tell us about your organization and we&apos;ll suggest a training approach that fits.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/register" className="btn-cta px-8 py-3.5 text-base justify-center">
              Start an inquiry
            </Link>
            <Link href="/contact" className="btn-cta-outline-light px-8 py-3.5 text-base justify-center">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
