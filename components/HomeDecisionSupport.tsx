import Link from 'next/link'

export default function HomeDecisionSupport() {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center rounded-2xl border border-primary-200 bg-primary-50/50 py-10 px-6">
        <h2 className="text-xl md:text-2xl font-bold text-text mb-3">Not Sure Which Course to Choose?</h2>
        <p className="text-text-light mb-6 leading-relaxed">
          Start with the free workshop. We&apos;ll guide you based on your goals.
        </p>
        <Link
          href="/register"
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition shadow-md"
        >
          Join Free Workshop
        </Link>
      </div>
    </section>
  )
}
