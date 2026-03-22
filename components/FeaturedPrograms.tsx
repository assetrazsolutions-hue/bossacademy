import Link from 'next/link'
import { Stethoscope, Zap, Brain } from 'lucide-react'

interface Program {
  title: string
  duration: string
  modules: string[]
  icon: React.ReactNode
  buttonText: string
  availability: string
  outcome: string
}

interface FeaturedProgramCardProps {
  program: Program
}

function FeaturedProgramCard({ program }: FeaturedProgramCardProps) {
  return (
    <div className="bg-background-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-background-dark hover:border-primary-300 h-full flex flex-col">
      {/* Icon */}
      <div className="mb-6 text-primary-600">
        {program.icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-text mb-4">{program.title}</h3>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        <div className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1 rounded-full">
          <span aria-hidden="true">⏱</span>
          <span>{program.duration}</span>
        </div>
        <div className="inline-block bg-orange-50 text-orange-700 text-sm font-semibold px-4 py-1 rounded-full">
          {program.availability}
        </div>
      </div>

      {/* Modules List */}
      <div className="flex-1 mb-4">
        <h4 className="font-semibold text-text mb-4">Modules:</h4>
        <ul className="space-y-3">
          {program.modules.map((module, index) => (
            <li key={index} className="flex items-start text-text-light">
              <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{module}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Outcome text */}
      <p className="text-text-muted text-sm mb-6">
        {program.outcome}
      </p>

      {/* Register Button */}
      <Link
        href="/register"
        className="btn-cta block w-full text-center px-6 py-3 mt-auto"
      >
        {program.buttonText}
      </Link>
    </div>
  )
}

export default function FeaturedPrograms() {
  const programs: Program[] = [
    {
      title: 'Hospital Staff Training',
      duration: '3 Months',
      modules: [
        'Patient care systems',
        'Medical computer systems',
        'Insurance handling',
        'Hospital administration',
      ],
      icon: <Stethoscope className="w-16 h-16" />,
      buttonText: 'Register',
      availability: 'Limited Seats Available',
      outcome: 'Ideal for hospital administrators, patient care staff, and healthcare assistants.',
    },
    {
      title: 'Electric Vehicle Technician',
      duration: '4 Months',
      modules: [
        'EV maintenance',
        'Battery systems',
        'Charging infrastructure',
        'Safety protocols',
      ],
      icon: <Zap className="w-16 h-16" />,
      buttonText: 'Register',
      availability: 'Limited Seats Available',
      outcome: 'Hands-on technical training for EV maintenance careers.',
    },
    {
      title: 'Artificial Intelligence for Students',
      duration: '2 Months',
      modules: [
        'AI fundamentals',
        'Prompt engineering',
        'Automation tools',
        'AI applications',
      ],
      icon: <Brain className="w-16 h-16" />,
      buttonText: 'Register',
      availability: 'Limited Seats Available',
      outcome: 'Perfect for students interested in AI, automation, and emerging technologies.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wide text-text-muted mb-2">
            Explore Our Core Training Programs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
            Featured Industry Training Programs
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-text-light max-w-2xl mx-auto">
            Designed to build practical skills aligned with industry demand.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <FeaturedProgramCard key={index} program={program} />
          ))}
        </div>
      </div>
    </section>
  )
}
