import Link from 'next/link'

export default function HomeFinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stop learning randomly. Start building real skills that get results.
        </h2>
        <p className="text-xl mb-10 text-primary-100 max-w-2xl mx-auto">
          Join a free workshop or talk to us about the right course for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition shadow-lg"
          >
            Join Free Workshop
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
