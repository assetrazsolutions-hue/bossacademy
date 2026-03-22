import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export default function TrainerOverviewSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Join BOSS Academy as a Trainer
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            We are looking for passionate professionals and experts to deliver high-impact training programs.
          </p>
        </div>

        {/* Trainer types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-background-dark">
            <h3 className="text-2xl font-bold text-text mb-3">Part-Time Trainers</h3>
            <p className="text-text-light mb-4">
              Industry professionals who can deliver sessions on weekends or specific modules as part of our
              specialized programs.
            </p>
            <ul className="space-y-2 text-text-light text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5" />
                <span>Flexible scheduling around your professional commitments.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5" />
                <span>Opportunities to mentor students and working professionals.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-background-dark">
            <h3 className="text-2xl font-bold text-text mb-3">Full-Time Trainers</h3>
            <p className="text-text-light mb-4">
              Dedicated trainers who work with BOSS Global Academy of Technology on ongoing training programs
              and institutional partnerships.
            </p>
            <ul className="space-y-2 text-text-light text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5" />
                <span>Structured training assignments across multiple programs.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5" />
                <span>Opportunities to design curriculum and lead new initiatives.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Areas of expertise */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-text mb-4 text-center md:text-left">
            Areas of Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Healthcare & Hospital Administration',
              'Electric Vehicle (EV) Technology',
              'Artificial Intelligence & Data Science',
              'Cybersecurity',
              'Electronics & Mobile Repair',
              'Solar & Electrical Systems',
              'Soft Skills & Communication',
              'Corporate Training & Leadership',
            ].map((area) => (
              <span
                key={area}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/trainers"
            className="btn-cta px-8 py-3 shadow-md"
          >
            Apply as Trainer
          </Link>
        </div>
      </div>
    </section>
  )
}

