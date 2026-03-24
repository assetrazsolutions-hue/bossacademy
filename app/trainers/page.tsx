import Link from 'next/link'
import TrainerJoinSection from '@/components/TrainerJoinSection'

export default function TrainersPage() {
  return (
    <div className="bg-surface min-h-screen">
      <div className="relative overflow-hidden bg-primary-600 text-white py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_100%_0%,rgba(249,115,22,0.18),transparent)]" />
        <div className="section-container relative text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-blue-200 uppercase tracking-wide mb-3">Teach with us</p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Apply as a trainer
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            Share your expertise through practical, high-impact programs — part-time or full-time.
          </p>
          <p className="mt-8">
            <Link
              href="/partnerships"
              className="text-sm font-medium text-white/90 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
            >
              ← Enterprise &amp; partnerships
            </Link>
          </p>
        </div>
      </div>

      <TrainerJoinSection />
    </div>
  )
}
