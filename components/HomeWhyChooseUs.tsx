import { Wrench, FolderKanban, Target, Route } from 'lucide-react'

const points = [
  {
    title: 'Practical training',
    description: 'No theory overload — you practice what you’ll use.',
    icon: Wrench,
  },
  {
    title: 'Real-world projects',
    description: 'Work on tasks that mirror real jobs and clients.',
    icon: FolderKanban,
  },
  {
    title: 'Career-focused',
    description: 'Paths are built around employability and income — not certificates alone.',
    icon: Target,
  },
  {
    title: 'Step-by-step path',
    description: 'Office basics first, then Data or Marketing — so you’re never lost.',
    icon: Route,
  },
]

export default function HomeWhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4" />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Built for people who want clarity, practice, and outcomes — not another generic course.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <Icon className="w-10 h-10 text-primary-600 mb-4" aria-hidden />
                <h3 className="font-bold text-text mb-2">{p.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{p.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
