import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ProgramDetailCard from '@/components/ProgramDetailCard'
import { programs } from '@/lib/programs'

export default function Programs() {
  return (
    <div className="bg-surface min-h-screen">
      <PageHero
        eyebrow="Our programs"
        title="Courses for students & job seekers"
        subtitle="Practical training in office skills, data analytics, and digital marketing. Clear structure, honest expectations, and support when you need it."
        conversionCtas={{ primaryHref: '#programs' }}
      />

      <div id="programs" className="section-container py-20 md:py-28 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {programs.map((program) => (
            <ProgramDetailCard key={program.id} program={program} />
          ))}
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
