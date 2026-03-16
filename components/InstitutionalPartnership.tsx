import Link from 'next/link'

interface PartnershipCardProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  icon: string
}

function PartnershipCard({ title, description, buttonText, buttonLink, icon }: PartnershipCardProps) {
  return (
    <div className="bg-background-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-background-dark hover:border-primary-300 flex flex-col">
      <div className="text-5xl mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-text mb-4">{title}</h3>
      <p className="text-text-light mb-6 leading-relaxed">{description}</p>
      <Link
        href={buttonLink}
        className="mt-auto inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
      >
        {buttonText}
      </Link>
    </div>
  )
}

export default function InstitutionalPartnership() {
  const partnerships = [
    {
      title: 'Hospitals',
      description: 'Hospital staff training including patient care systems, insurance handling, hospital administration, and digital healthcare systems.',
      buttonText: 'Hospital Training Inquiry',
      buttonLink: '/register',
      icon: '🏥',
    },
    {
      title: 'Schools & Colleges',
      description: 'Future skills training programs including AI, robotics, cybersecurity, and career readiness programs for students.',
      buttonText: 'School / College Partnership',
      buttonLink: '/register',
      icon: '🎓',
    },
    {
      title: 'Corporate Organizations',
      description: 'Corporate workforce training including digital transformation, leadership development, and technology upskilling.',
      buttonText: 'Corporate Workforce Training',
      buttonLink: '/register',
      icon: '🏢',
    },
  ]

  return (
    <section id="partnerships" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Institutional Partnerships
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            We collaborate with organizations to deliver industry-ready training programs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerships.map((partnership, index) => (
            <PartnershipCard
              key={index}
              title={partnership.title}
              description={partnership.description}
              buttonText={partnership.buttonText}
              buttonLink={partnership.buttonLink}
              icon={partnership.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
