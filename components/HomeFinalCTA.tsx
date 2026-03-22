import Link from 'next/link'

export default function HomeFinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stop learning randomly. Start building skills that actually get results.
        </h2>
        <p className="text-xl mb-10 text-primary-100 max-w-2xl mx-auto">
          Take the first step toward a job or income today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register" className="btn-cta px-8 py-4 text-lg">
            Join Free Workshop Now
          </Link>
          <Link href="/contact" className="btn-cta-outline-light px-8 py-4 text-lg">
            Talk to Us
          </Link>
        </div>
        <p className="mt-8 text-sm font-medium text-primary-100">
          ⚡ Seats fill fast — don&apos;t miss this batch
        </p>
      </div>
    </section>
  )
}
