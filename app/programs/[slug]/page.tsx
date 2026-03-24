import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock,
  Headphones,
  HelpCircle,
  Laptop,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import CourseCtaBlock from '@/components/CourseCtaBlock'
import CoursePageHero from '@/components/CoursePageHero'
import { getProgramBySlug, programs } from '@/lib/programs'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const course = getProgramBySlug(slug)
  if (!course) return { title: 'Course' }
  return {
    title: `${course.title} | BOSS Academy`,
    description: course.heroSubtitle,
  }
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params
  const course = getProgramBySlug(slug)
  if (!course) notFound()

  const Icon = course.icon

  const h2 = 'font-heading text-xl md:text-2xl font-bold text-slate-900'
  const sectionY = 'py-14 md:py-20'
  const cardWrap = 'rounded-card border border-slate-200/90 bg-white p-6 md:p-8 shadow-sm'

  return (
    <div className="bg-surface min-h-screen">
      <CoursePageHero title={course.title} outcomeSubtext={course.heroSubtitle} />

      {/* What you will be able to do */}
      <section className={`${sectionY} border-b border-slate-100/80`}>
        <div className="section-container max-w-3xl">
          <div className={cardWrap}>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-card bg-accent-500/15 text-accent-600">
                <Sparkles className="w-5 h-5" aria-hidden />
              </span>
              <h2 className={`${h2} mb-0`}>What you will be able to do</h2>
            </div>
            <ul className="space-y-3 mb-8">
              {course.ableToDo.map((line) => (
                <li key={line} className="flex gap-3 text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <CourseCtaBlock />
          </div>
        </div>
      </section>

      {/* What you will learn */}
      <section className={`${sectionY} bg-white border-b border-slate-100/80`}>
        <div className="section-container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-card bg-primary-600/10 text-primary-600">
              <BookOpen className="w-5 h-5" aria-hidden />
            </span>
            <h2 className={`${h2} mb-0`}>What you will learn</h2>
          </div>
          <ul className="space-y-3">
            {course.whatYouLearn.map((line) => (
              <li key={line} className="flex gap-3 text-slate-600 leading-relaxed">
                <span className="text-accent-500 font-bold shrink-0 mt-0.5" aria-hidden>
                  ·
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tools you will use */}
      <section className={`${sectionY} border-b border-slate-100/80`}>
        <div className="section-container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-card bg-primary-600/10 text-primary-600">
              <Laptop className="w-5 h-5" aria-hidden />
            </span>
            <h2 className={`${h2} mb-0`}>Tools you will use</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {course.toolsCovered.map((tool) => (
              <li
                key={tool}
                className="flex items-start gap-2 rounded-card border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-700"
              >
                <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" aria-hidden />
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Learn by doing */}
      <section className={`${sectionY} bg-white border-b border-slate-100/80`}>
        <div className="section-container max-w-3xl">
          <div className={cardWrap}>
            <h2 className={`${h2} mb-4`}>Learn by doing</h2>
            <p className="text-slate-600 leading-relaxed mb-6">{course.learnByDoing.intro}</p>
            <p className="font-heading text-sm font-semibold text-slate-800 mb-3">Example tasks</p>
            <ul className="space-y-3 mb-8">
              {course.learnByDoing.tasks.map((t) => (
                <li key={t} className="flex gap-3 text-slate-600 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
              <strong className="text-slate-800">Real-world angle:</strong> {course.realWorldApplication}
            </p>
            <div className="mt-8 pt-6 border-t border-slate-100">
              <CourseCtaBlock />
            </div>
          </div>
        </div>
      </section>

      {/* Who this course is for */}
      <section className={`${sectionY} border-b border-slate-100/80`}>
        <div className="section-container max-w-3xl">
          <h2 className={`${h2} mb-6`}>Who this course is for</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {course.whoFor.map((line) => (
              <div
                key={line}
                className="flex gap-3 rounded-card border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-700"
              >
                <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" aria-hidden />
                <span>{line}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Fits <strong className="text-slate-700 font-medium">students</strong>,{' '}
            <strong className="text-slate-700 font-medium">job seekers</strong>,{' '}
            <strong className="text-slate-700 font-medium">beginners</strong>, and{' '}
            <strong className="text-slate-700 font-medium">career switchers</strong>. We start from where you are.
          </p>
        </div>
      </section>

      {/* Course details */}
      <section className={`${sectionY} bg-white border-b border-slate-100/80`}>
        <div className="section-container max-w-3xl">
          <h2 className={`${h2} mb-6`}>Course details</h2>
          <dl className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-card border border-slate-200/90 bg-surface/50 p-5">
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                <Clock className="w-4 h-4 text-primary-600" aria-hidden />
                Duration
              </dt>
              <dd className="font-heading font-semibold text-slate-900">{course.duration}</dd>
            </div>
            <div className="rounded-card border border-slate-200/90 bg-surface/50 p-5">
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                <MessageCircle className="w-4 h-4 text-primary-600" aria-hidden />
                Mode
              </dt>
              <dd className="text-sm text-slate-700 leading-snug">{course.courseDetails.mode}</dd>
            </div>
            <div className="rounded-card border border-slate-200/90 bg-surface/50 p-5 sm:col-span-1">
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                <Headphones className="w-4 h-4 text-primary-600" aria-hidden />
                Support
              </dt>
              <dd className="text-sm text-slate-700 leading-snug">{course.courseDetails.support}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Why this course */}
      <section className={`${sectionY} border-b border-slate-100/80`}>
        <div className="section-container max-w-3xl">
          <div className={cardWrap}>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-card bg-primary-600/10 text-primary-600">
                <Icon className="w-6 h-6" aria-hidden />
              </span>
              <h2 className={`${h2} mb-0`}>Why this course</h2>
            </div>
            <ul className="space-y-3 mb-8">
              {course.whyThisCourse.map((line) => (
                <li key={line} className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <CourseCtaBlock />
            <Link
              href="/contact"
              className="mt-4 block text-center text-sm font-semibold text-primary-600 hover:text-primary-700"
            >
              Talk to Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20">
        <div className="section-container max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-primary-600 shrink-0" aria-hidden />
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">Common questions</h2>
          </div>
          <div className="space-y-4">
            {course.faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-card border border-slate-200/90 bg-white p-5 shadow-sm open:shadow-md transition-shadow"
              >
                <summary className="font-heading font-semibold text-slate-900 cursor-pointer list-none flex justify-between gap-4 items-start">
                  <span>{item.q}</span>
                  <ChevronDown
                    className="w-5 h-5 text-primary-600 shrink-0 group-open:rotate-180 transition-transform"
                    aria-hidden
                  />
                </summary>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CourseCtaBlock />
            <Link href="/programs" className="text-sm font-semibold text-primary-600 hover:text-primary-700">
              ← Back to all programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
