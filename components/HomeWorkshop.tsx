import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

const learn = [
  'What employers expect from freshers today',
  'How to pick a skill path (job vs. freelance)',
  'A clear roadmap from zero to job-ready or earning',
]

const benefits = [
  'No fluff — straight talk on skills that matter',
  'See how our training fits your goals',
  'Next steps to join a course or cohort',
]

export default function HomeWorkshop() {
  return (
    <section id="workshop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Free Workshop – From Zero Skills to Job-Ready
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4" />
          <p className="text-lg text-text-light">
            A short session to help you decide your next move — whether you want a job or to start earning on your own.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-background-light rounded-xl p-8 border border-background-dark shadow-md">
            <h3 className="font-bold text-text mb-4 text-lg">What you&apos;ll learn</h3>
            <ul className="space-y-3">
              {learn.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-light">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background-light rounded-xl p-8 border border-background-dark shadow-md">
            <h3 className="font-bold text-text mb-4 text-lg">Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-light">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/register"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition shadow-lg"
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  )
}
