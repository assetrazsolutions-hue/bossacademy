import ProgramCard from '@/components/ProgramCard'

export default function Programs() {
  const programs = [
    {
      title: 'Hospital Staff Training',
      description: 'Comprehensive training programs designed specifically for healthcare professionals. Our hospital staff training covers patient care protocols, medical equipment handling, emergency response procedures, infection control, and administrative efficiency. We work closely with hospitals to customize programs that address their specific needs and challenges.',
      icon: '🏥',
      features: [
        'Patient Care Excellence',
        'Medical Equipment Training',
        'Emergency Response',
        'Infection Control',
        'Administrative Skills'
      ]
    },
    {
      title: 'College Graduate Skill Development',
      description: 'Empower college graduates and students across all disciplines with industry-relevant skills that boost employability. Our programs focus on practical, hands-on training for graduates from engineering, arts, commerce, science, and all other degree programs. We bridge the gap between theoretical knowledge and practical application, ensuring graduates are job-ready.',
      icon: '📚',
      features: [
        'Degree-Specific Training',
        'Industry Certifications',
        'Practical Workshops',
        'Job Placement Support',
        'Skill Enhancement'
      ]
    },
    {
      title: 'School Future Skills',
      description: 'Prepare students and educators for the future with our innovative training programs. We focus on developing critical thinking, digital literacy, communication skills, and problem-solving abilities. Our programs are designed to complement traditional education and prepare students for real-world challenges.',
      icon: '🎓',
      features: [
        'Digital Literacy',
        'Critical Thinking',
        'Communication Skills',
        'Problem Solving',
        'Career Guidance'
      ]
    },
    {
      title: 'Corporate Upskilling',
      description: 'Transform your workforce with our corporate training solutions. We offer customized programs tailored to your organization\'s needs, covering leadership development, technical skills, soft skills, and industry-specific training. Our corporate programs are designed to improve productivity, employee satisfaction, and organizational growth.',
      icon: '💼',
      features: [
        'Leadership Development',
        'Technical Skills',
        'Soft Skills Training',
        'Customized Programs',
        'Performance Enhancement'
      ]
    }
  ]

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Training Programs</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive, industry-relevant training programs designed to enhance skills and drive excellence
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-background-light rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0">{program.icon}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-text mb-4">{program.title}</h2>
                  <p className="text-text-light mb-6">{program.description}</p>
                  <div className="mb-6">
                    <h3 className="font-semibold text-text mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-text-light">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="/register"
                    className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition"
                  >
                    Register for this program →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
