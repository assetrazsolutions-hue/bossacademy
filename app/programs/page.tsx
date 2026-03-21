import Link from 'next/link'
import { Laptop, BarChart3, Megaphone } from 'lucide-react'

const programs = [
  {
    id: 'office',
    title: 'AI-Powered Office Professional',
    outcome: 'Become confident in real office work in 15 days',
    duration: '2–3 weeks',
    description:
      'Build practical skills in documents, spreadsheets, email, and everyday workplace tools — with AI-assisted workflows so you can hit the ground running in any office role.',
    icon: Laptop,
    features: [
      'Real tasks, not slide decks',
      'AI tools for productivity',
      'Professional communication',
      'Hands-on practice',
    ],
  },
  {
    id: 'data',
    title: 'Data Analytics & Business Intelligence',
    outcome: 'Become job-ready in 60–90 days',
    duration: '60–90 days',
    description:
      'Learn to analyze data, build reports, and communicate insights employers actually need — from spreadsheets to dashboards and business questions.',
    icon: BarChart3,
    features: [
      'Data cleaning & analysis mindset',
      'Reporting & visualization basics',
      'Business questions & KPIs',
      'Project-style practice',
    ],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & Freelancing',
    outcome: 'Start earning through freelancing or marketing jobs',
    duration: 'Flexible pace',
    description:
      'Get hands-on with digital channels, campaigns, and client-ready deliverables — whether you want a job in marketing or to offer services independently.',
    icon: Megaphone,
    features: [
      'Campaign & channel fundamentals',
      'Content and practical assignments',
      'Freelance-ready basics',
      'Portfolio-oriented work',
    ],
  },
]

export default function Programs() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Courses for Students & Job Seekers</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Get job-ready or start earning with practical training in office skills, data analytics, and digital
            marketing — aligned with what you see on our homepage.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <div
                key={program.id}
                className="bg-background-light rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-background-dark flex flex-col h-full"
              >
                <div className="text-primary-600 mb-4">
                  <Icon className="w-14 h-14" aria-hidden />
                </div>
                <h2 className="text-2xl font-bold text-text mb-2">{program.title}</h2>
                <p className="text-primary-700 font-semibold mb-1">{program.outcome}</p>
                <p className="text-sm text-text-muted mb-4">Duration: {program.duration}</p>
                <p className="text-text-light mb-6 flex-1">{program.description}</p>
                <div className="mb-6">
                  <h3 className="font-semibold text-text mb-3">You&apos;ll work on:</h3>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start text-text-light text-sm">
                        <svg
                          className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/register"
                  className="inline-block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition mt-auto"
                >
                  Enroll Now
                </Link>
              </div>
            )
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center rounded-xl bg-gray-50 border border-gray-200 p-8">
          <h2 className="text-lg font-bold text-text mb-2">Hospitals, schools, or companies?</h2>
          <p className="text-text-light text-sm mb-4">
            Custom training for organizations lives on our Partnerships page — not here. This page is for
            individual learners (students, freshers, career switchers).
          </p>
          <Link
            href="/partnerships"
            className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition"
          >
            Enterprise &amp; partnerships →
          </Link>
        </div>
      </div>
    </div>
  )
}
