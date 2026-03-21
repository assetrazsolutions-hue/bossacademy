import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

const bullets = [
  'How to become job-ready in 60–90 days',
  'What skills companies actually expect from freshers',
  'Live demo of real office or marketing tasks',
  'How to choose between Data Analytics and Digital Marketing',
]

export default function HomeWorkshop() {
  return (
    <section id="free-workshop" className="py-16 md:py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-3">
          What You&apos;ll Learn in the Free Workshop
        </h2>
        <div className="w-16 h-1 bg-primary-600 mx-auto mb-8" />
        <ul className="text-left space-y-4 mb-10 max-w-xl mx-auto">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-3 text-text-light">
              <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" aria-hidden />
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/register"
          className="inline-block bg-primary-600 text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-primary-700 transition shadow-lg"
        >
          Reserve Your Free Seat
        </Link>
        <div className="mt-6 space-y-1 text-sm text-text-muted">
          <p>⚡ Limited seats per batch — early registration recommended</p>
          <p>Next batch starting soon</p>
        </div>
      </div>
    </section>
  )
}
