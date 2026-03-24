import Link from 'next/link'
import { Laptop, BarChart3, Megaphone, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/PageHero'

const programs = [
  {
    id: 'office',
    title: 'AI-Powered Office Professional',
    outcome: 'Start your first job with confidence: Excel, emails, reports from Day 1',
    duration: '2–3 weeks',
    description:
      'Build practical skills in documents, spreadsheets, email, and everyday workplace tools, with AI-assisted workflows so you can hit the ground running in any office role.',
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
    outcome: 'Become the candidate companies shortlist: dashboards and job-ready projects',
    duration: '60–90 days',
    description:
      'Learn to analyze data, build reports, and communicate insights employers actually need, from spreadsheets to dashboards and business questions.',
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
    outcome: 'Start earning your first income online with practical marketing skills',
    duration: 'Flexible pace',
    description:
      'Get hands-on with digital channels, campaigns, and client-ready deliverables, whether you want a job in marketing or to offer services independently.',
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
    <div className="bg-surface min-h-screen">
      <PageHero
        eyebrow="Our programs"
        title="Courses for students & job seekers"
        subtitle="Get job-ready or start earning with practical training in office skills, data analytics, and digital marketing, aligned with what you see on our homepage."
        conversionCtas={{ primaryHref: '#programs' }}
      />

      <div id="programs" className="section-container py-20 md:py-28 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <div
                id={program.id}
                key={program.id}
                className="bg-white rounded-card shadow-md p-8 hover:shadow-lg transition-all duration-300 border border-slate-200/90 hover:border-primary-200 hover:-translate-y-0.5 flex flex-col h-full scroll-mt-24"
              >
                <div className="text-slate-400 mb-4">
                  <Icon className="w-12 h-12 md:w-14 md:h-14" aria-hidden />
                </div>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900 mb-2">{program.title}</h2>
                <p className="text-primary-700 font-semibold text-sm md:text-base mb-1">{program.outcome}</p>
                <p className="text-sm text-slate-500 mb-4">Duration: {program.duration}</p>
                <p className="text-slate-600 text-sm md:text-base mb-6 flex-1 leading-relaxed">{program.description}</p>
                <div className="mb-6">
                  <h3 className="font-heading font-semibold text-slate-900 mb-3 text-sm md:text-base">
                    You&apos;ll work on:
                  </h3>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-slate-600 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/register" className="btn-cta mt-auto w-full text-center px-6 py-3.5 text-base">
                  Enroll now
                </Link>
              </div>
            )
          })}
        </div>

        <div className="mt-16 md:mt-20 max-w-3xl mx-auto text-center rounded-card bg-white border border-slate-200/90 shadow-sm p-8 md:p-10">
          <h2 className="font-heading text-lg md:text-xl font-bold text-slate-900 mb-2">
            Hospitals, schools, or companies?
          </h2>
          <p className="text-slate-600 text-sm md:text-base mb-4 leading-relaxed">
            Custom training for organizations lives on our Partnerships page, not here. This page is for individual
            learners (students, freshers, career switchers).
          </p>
          <Link
            href="/partnerships"
            className="inline-block font-semibold text-primary-600 hover:text-primary-700 transition-colors"
          >
            Enterprise &amp; partnerships →
          </Link>
        </div>
      </div>
    </div>
  )
}
