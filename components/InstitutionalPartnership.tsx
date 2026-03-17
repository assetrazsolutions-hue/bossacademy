'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Building2,
  GraduationCap,
  Users,
  Lightbulb,
  CircuitBoard,
  Car,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react'

type Card = {
  id: string
  title: string
  label: string
  description: string
  cta: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const primaryCards: Card[] = [
  {
    id: 'education',
    title: 'Educational Institutions',
    label: 'Schools & Colleges',
    description:
      'Equip students with industry-ready skills, future technologies, and career-focused training that improves placement outcomes.',
    cta: 'Partner With Us',
    icon: GraduationCap,
  },
  {
    id: 'hospitals',
    title: 'Healthcare Organizations',
    label: 'Hospitals',
    description:
      'Train staff in patient care, hospital administration, billing, and digital systems to reduce errors and improve patient experience.',
    cta: 'Get Started',
    icon: MessageCircle,
  },
  {
    id: 'corporate',
    title: 'Corporate & Business Teams',
    label: 'Corporate Organizations',
    description:
      'Upskill employees in digital tools, leadership, and emerging technologies to boost productivity and business growth.',
    cta: 'Get Started',
    icon: Building2,
  },
  {
    id: 'industrial',
    title: 'Industrial & Manufacturing Units',
    label: 'Industrial & Manufacturing',
    description:
      'Develop skilled technicians in EV, electrical systems, safety, and operations to improve throughput and reduce downtime.',
    cta: 'Get Started',
    icon: Car,
  },
  {
    id: 'government',
    title: 'Government & Skill Development Bodies',
    label: 'Government & Missions',
    description:
      'Collaborate on large-scale skill development, employment programs, and workforce initiatives that deliver measurable impact.',
    cta: 'Partner With Us',
    icon: CheckCircle2,
  },
  {
    id: 'trainers',
    title: 'Trainers & Industry Experts',
    label: 'Trainers / Partners',
    description:
      'Join as a trainer or partner to deliver high-impact training programs across industries.',
    cta: 'Apply Now',
    icon: Users,
  },
]

const moreCards: Card[] = [
  {
    id: 'startups',
    title: 'Startups & SMEs',
    label: 'Startups & Small Businesses',
    description:
      'Support lean teams with practical training that accelerates product delivery, customer acquisition, and market readiness.',
    cta: 'Get Started',
    icon: Lightbulb,
  },
  {
    id: 'it-tech',
    title: 'IT & Technology Companies',
    label: 'IT & Tech',
    description:
      'Build strong engineering and operations teams with upskilling in modern stacks, tools, and delivery practices.',
    cta: 'Get Started',
    icon: CircuitBoard,
  },
  {
    id: 'ev-auto',
    title: 'EV & Automotive Sector',
    label: 'EV & Automotive',
    description:
      'Create EV-ready technicians and engineers through hands-on training in EV systems and diagnostics that improves service quality.',
    cta: 'Get Started',
    icon: Car,
  },
  {
    id: 'ngos',
    title: 'NGOs & Social Organizations',
    label: 'NGOs & Impact Orgs',
    description:
      'Partner on community-focused skilling, employability, and livelihood programs that increase long-term impact.',
    cta: 'Partner With Us',
    icon: CheckCircle2,
  },
]

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function IndustryPartnershipsSection() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="industry-partnerships" className="bg-[#f9fafb] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-sm">
            Flexible training for modern organizations
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Industry Partnerships That Deliver Real Results
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Customized training solutions tailored to your organization’s needs across industries.
          </p>
        </motion.div>

        {/* Primary cards */}
        <motion.div
          className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {primaryCards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </motion.div>

        {/* Micro-conversion strip */}
        <motion.div
          className="mt-10 rounded-2xl bg-white px-4 py-5 text-center shadow-sm ring-1 ring-gray-200 sm:px-6 md:flex md:items-center md:justify-between md:text-left"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div>
            <p className="text-sm font-semibold text-gray-900 sm:text-base">
              Not sure where to start?
            </p>
            <p className="mt-1 text-xs text-gray-600 sm:text-sm">
              Talk to our team to find the right training solution for your organization.
            </p>
          </div>
          <div className="mt-4 flex justify-center gap-3 md:mt-0 md:justify-end">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-xs font-semibold text-gray-800 shadow-sm ring-1 ring-gray-200 transition-colors duration-200 hover:bg-gray-50 sm:text-sm"
            >
              📞 Contact Us
            </a>
            <a
              href="https://wa.me/919916800685"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow-md transition-colors duration-200 hover:from-green-600 hover:to-emerald-600 sm:text-sm"
            >
              💬 WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Divider + expand button */}
        <div className="mt-10 flex flex-col items-center">
          <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <p className="mt-3 text-xs text-gray-500 sm:text-sm">
            We support multiple industries across sectors and organization sizes.
          </p>
          <button
            type="button"
            onClick={() => setShowMore((prev) => !prev)}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors duration-200 hover:from-blue-700 hover:to-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            {showMore ? 'Show Less' : 'Explore More Industries'}
            <span className={`transition-transform ${showMore ? 'rotate-180' : ''}`}>{showMore ? '↑' : '↓'}</span>
          </button>
        </div>

        {/* Expandable cards */}
        <motion.div
          initial={false}
          animate={showMore ? 'open' : 'collapsed'}
          variants={{
            open: { opacity: 1, height: 'auto', marginTop: 24 },
            collapsed: { opacity: 0, height: 0, marginTop: 0 },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          {showMore && (
            <motion.div
              className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {moreCards.map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Trust strip */}
        <motion.div
          className="mt-12 rounded-full bg-white/90 px-4 py-3 text-center text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-200 sm:text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Industry-Focused | Practical Learning | Scalable Training Solutions
        </motion.div>
      </div>
    </section>
  )
}

function Card({ card }: { card: Card }) {
  const Icon = card.icon
  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition-transform transition-shadow duration-300 hover:scale-[1.03] hover:shadow-xl hover:ring-indigo-200"
    >
      {/* gradient border on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:[background:radial-gradient(circle_at_top,_rgba(59,130,246,0.10),_transparent_55%)] transition-opacity duration-300" />

      <div className="relative z-10 flex flex-1 flex-col">
        {/* Icon + label */}
        <div className="mb-4 flex items-center gap-3">
          <motion.div
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm"
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          >
            <Icon className="h-6 w-6" />
          </motion.div>
          <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            {card.label}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">{card.title}</h3>
        <p className="mt-3 text-sm text-gray-600">{card.description}</p>

        <div className="mt-6">
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(37,99,235,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md ring-1 ring-transparent transition-all duration-200 hover:from-blue-700 hover:to-indigo-600 hover:ring-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            {card.cta}
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}
