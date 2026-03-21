import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full z-0" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full z-0" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-soft-light z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-0">
        <span className="absolute top-16 left-10 text-4xl opacity-15">💼</span>
        <span className="absolute bottom-24 left-1/4 text-4xl opacity-15">📊</span>
        <span className="absolute top-24 right-1/4 text-4xl opacity-15">🎯</span>
        <span className="absolute bottom-16 right-10 text-4xl opacity-15">🚀</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Get Job-Ready or Start Earning in 60–90 Days
          </h1>
          <p className="text-base md:text-lg font-medium text-amber-100/95 max-w-2xl mx-auto mb-4 leading-snug">
            Most graduates don&apos;t get hired because they don&apos;t know how to do the work.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Stop applying blindly. Learn the exact skills companies expect and become job-ready with real-world
            training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition"
            >
              Save My Free Seat
            </Link>
            <Link
              href="/programs"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-700 transition"
            >
              View Courses
            </Link>
          </div>

          <p className="mt-6 text-sm text-indigo-100">
            For students, freshers &amp; job seekers • No prior experience needed
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/#free-workshop"
              className="inline-flex flex-col items-center text-indigo-100 text-sm animate-bounce"
            >
              <span className="mb-1">↓ See what the free workshop covers</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
