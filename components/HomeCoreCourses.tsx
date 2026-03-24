import Link from 'next/link'
import { Laptop, BarChart3, Megaphone } from 'lucide-react'

const courses = [
  {
    id: 'office',
    headline: 'Walk into any workplace ready to contribute from week one.',
    title: 'AI-Powered Office Professional',
    bullets: [
      'Documents, spreadsheets, and professional email — the daily toolkit',
      'Templates and workflows you can reuse on the job',
      'Clear communication for teams and managers',
    ],
    duration: '2–3 weeks',
    icon: Laptop,
    cta: 'Get office ready',
    ctaHref: '/programs#office',
  },
  {
    id: 'data',
    headline: 'Turn raw data into clear answers hiring teams understand.',
    title: 'Data Analytics & Business Intelligence',
    bullets: [
      'Clean data, spot patterns, and explain what matters',
      'Dashboards and reports that look like real work samples',
      'Practice with questions similar to actual business decisions',
    ],
    duration: '60–90 days',
    icon: BarChart3,
    cta: 'Build data skills',
    ctaHref: '/programs#data',
  },
  {
    id: 'marketing',
    headline: 'Channel skills for a job or your first online income.',
    title: 'Digital Marketing & Freelancing',
    bullets: [
      'Campaigns and channels in plain, practical language',
      'Work you can show in interviews or to your first clients',
      'Freelance basics so you can start small and grow confidently',
    ],
    duration: 'Flexible pace',
    icon: Megaphone,
    cta: 'Start earning online',
    ctaHref: '/programs#marketing',
  },
]

export default function HomeCoreCourses() {
  return (
    <section id="courses" className="py-20 md:py-28 bg-surface border-y border-slate-200/60">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core programs</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Tracks built around skills you use on the job — short bursts of learning, then practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <article
                key={course.id}
                className="rounded-card border border-slate-200/90 bg-white p-8 flex flex-col h-full shadow-sm hover:shadow-lg hover:border-primary-200/80 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-card bg-slate-50 text-primary-600 ring-1 ring-slate-100">
                  <Icon className="w-6 h-6" strokeWidth={2} aria-hidden />
                </div>
                <p className="text-primary-700 font-semibold text-base leading-snug mb-2">{course.headline}</p>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-1">{course.title}</h3>
                <p className="text-sm text-slate-500 mb-6">Duration: {course.duration}</p>
                <ul className="mb-8 space-y-3 text-sm text-slate-600 flex-1">
                  {course.bullets.map((line) => (
                    <li key={line} className="flex gap-3 leading-relaxed">
                      <span className="text-accent-500 font-bold shrink-0 mt-0.5" aria-hidden>
                        ·
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Link href={course.ctaHref} className="btn-cta w-full text-center px-6 py-3.5 text-base">
                  {course.cta}
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
