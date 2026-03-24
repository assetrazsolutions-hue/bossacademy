import { BookOpen, Hammer, FolderGit2, Compass } from 'lucide-react'

const steps = [
  {
    n: 1,
    title: 'Choose your course',
    text: 'Pick the track that matches your goal — office work, data, or online income.',
    icon: BookOpen,
  },
  {
    n: 2,
    title: 'Learn practically',
    text: 'Short lessons and guided practice so ideas stick without overwhelm.',
    icon: Hammer,
  },
  {
    n: 3,
    title: 'Work on projects',
    text: 'Build pieces of real work you can explain in interviews or to clients.',
    icon: FolderGit2,
  },
  {
    n: 4,
    title: 'Get guidance',
    text: 'Ask questions when you’re stuck — including WhatsApp with an advisor.',
    icon: Compass,
  },
]

export default function HomeHowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-surface border-t border-slate-200/60">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">How it works</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From picking a program to showing work you’re proud of — in four simple steps.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <li key={step.n} className="relative">
                <div className="rounded-card border border-slate-200/90 bg-white p-8 h-full shadow-sm hover:shadow-md hover:border-primary-200/70 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white font-heading font-bold text-sm">
                      {step.n}
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-card bg-primary-600/10 text-primary-600">
                      <Icon className="w-5 h-5" strokeWidth={2} aria-hidden />
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-slate-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
