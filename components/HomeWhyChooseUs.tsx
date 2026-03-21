import { CheckCircle2 } from 'lucide-react'

const points = [
  'Learn by doing real tasks, not just watching videos',
  'Structured path from basics to career',
  'Focus on job skills and income skills',
  'Designed for beginners with no prior experience',
]

export default function HomeWhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-text text-center mb-3">
          Built for Real Outcomes — Not Just Certificates
        </h2>
        <div className="w-16 h-1 bg-primary-600 mx-auto mb-8" />
        <ul className="space-y-4">
          {points.map((item) => (
            <li key={item} className="flex items-start gap-3 text-text-light">
              <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" aria-hidden />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
