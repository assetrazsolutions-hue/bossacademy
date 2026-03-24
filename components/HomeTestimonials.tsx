import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The focus on real tasks helped me explain what I could do in interviews — not just list courses on my CV.',
    name: 'Priya S.',
    role: 'Student',
    initials: 'PS',
  },
  {
    quote:
      'I finally had projects I could talk about. The structure kept me moving without feeling lost.',
    name: 'Rahul M.',
    role: 'Job seeker',
    initials: 'RM',
  },
  {
    quote:
      'Switching fields was scary; having clear steps and support made it feel doable.',
    name: 'Anita K.',
    role: 'Career switcher',
    initials: 'AK',
  },
]

function AvatarPlaceholder({ initials }: { initials: string }) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-600/10 to-accent-500/15 text-primary-700 font-heading font-bold text-sm ring-2 ring-white shadow-sm"
      aria-hidden
    >
      {initials}
    </div>
  )
}

export default function HomeTestimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white border-y border-slate-200/60">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">What learners say</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Early feedback from learners building practical, career-ready skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-card border border-slate-200/90 bg-surface/40 p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <Quote className="w-8 h-8 text-slate-300 mb-4 shrink-0" aria-hidden />
              <blockquote className="text-slate-600 leading-relaxed flex-1 mb-8 text-sm md:text-base">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-6 border-t border-slate-200/80">
                <AvatarPlaceholder initials={t.initials} />
                <div>
                  <p className="font-heading font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
