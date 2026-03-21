import Link from 'next/link'
import { Laptop, BarChart3, Megaphone } from 'lucide-react'

const courses = [
  {
    id: 'office',
    title: 'AI-Powered Office Professional',
    outcome: 'Become confident in real office work in 15 days',
    duration: '2–3 weeks',
    icon: Laptop,
  },
  {
    id: 'data',
    title: 'Data Analytics & Business Intelligence',
    outcome: 'Become job-ready in 60–90 days',
    duration: '60–90 days',
    icon: BarChart3,
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & Freelancing',
    outcome: 'Start earning through freelancing or marketing jobs',
    duration: 'Flexible pace',
    icon: Megaphone,
  },
]

export default function HomeCoreCourses() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Core Courses</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4" />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Outcome-focused programs built for people who want real skills — not endless theory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <div
                key={course.id}
                className="bg-background-light rounded-xl shadow-lg border border-background-dark hover:border-primary-300 hover:shadow-xl transition-all duration-300 p-8 flex flex-col h-full"
              >
                <div className="text-primary-600 mb-4">
                  <Icon className="w-14 h-14" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{course.title}</h3>
                <p className="text-text font-medium mb-2 text-primary-700">{course.outcome}</p>
                <p className="text-sm text-text-light mb-6">Duration: {course.duration}</p>
                <Link
                  href="/register"
                  className="mt-auto inline-block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
                >
                  Enroll Now
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
