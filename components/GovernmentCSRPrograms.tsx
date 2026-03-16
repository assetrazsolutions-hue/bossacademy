import Link from 'next/link'
import { Landmark, Handshake, Users } from 'lucide-react'

interface ProgramCard {
  title: string
  description: string
  buttonText: string
  icon: React.ReactNode
}

export default function GovernmentCSRPrograms() {
  const programs: ProgramCard[] = [
    {
      title: 'Government Skill Programs',
      description:
        'Training programs supporting national skill development initiatives including healthcare training, digital literacy, and youth employment skills.',
      buttonText: 'Partner With Us',
      icon: <Landmark className="w-12 h-12" />,
    },
    {
      title: 'CSR Skill Development',
      description:
        'Corporate social responsibility programs focused on job-ready skills, digital education, and workforce development.',
      buttonText: 'CSR Collaboration',
      icon: <Handshake className="w-12 h-12" />,
    },
    {
      title: 'NGO & Social Impact Programs',
      description:
        'Skill development initiatives supporting youth empowerment, women empowerment, and community training programs.',
      buttonText: 'Work With Us',
      icon: <Users className="w-12 h-12" />,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Government & CSR Skill Development Programs
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-text-light max-w-3xl mx-auto mb-2">
            We partner with government bodies, CSR initiatives, and NGOs to deliver impactful skill development programs.
          </p>
          <p className="text-base text-text-light max-w-3xl mx-auto">
            Delivering large-scale skill development programs for institutions, communities, and industries.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-background-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-background-dark hover:border-primary-300 flex flex-col"
            >
              <div className="mb-4 text-primary-600">{program.icon}</div>
              <h3 className="text-xl font-bold text-text mb-3">{program.title}</h3>
              <p className="text-text-light mb-6 flex-1">{program.description}</p>
              <Link
                href="/register"
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                {program.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
