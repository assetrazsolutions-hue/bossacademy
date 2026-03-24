'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLink =
  'text-slate-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm shadow-slate-900/[0.06]">
      <div className="section-container">
        <div className="flex justify-between items-center min-h-[4rem] md:min-h-[4.5rem] py-2 md:py-2.5">
          <Link
            href="/"
            className="flex-shrink-0 flex flex-col gap-1 group py-1"
            aria-label="BOSS Global Academy of Technology, home"
          >
            <span className="font-heading text-[1.875rem] sm:text-[2.125rem] md:text-[2.5rem] font-extrabold text-primary-600 tracking-[-0.035em] leading-[0.95] group-hover:text-primary-700 transition-colors">
              BOSS
            </span>
            <span className="text-[0.6875rem] sm:text-xs md:text-sm font-medium text-slate-500 leading-snug tracking-wide max-w-[17rem]">
              Global Academy of Technology
            </span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-1 lg:gap-2">
            <Link href="/" className={navLink}>
              Home
            </Link>
            <Link href="/programs" className={navLink}>
              Programs
            </Link>
            <Link href="/partnerships" className={navLink}>
              Partnerships
            </Link>
            <Link href="/register" className={navLink}>
              Register
            </Link>
            <Link href="/contact" className={navLink}>
              Contact
            </Link>
            <Link href="/register" className="btn-cta-nav ml-2">
              Enroll now
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Link href="/register" className="btn-cta-nav text-xs px-3 py-1.5">
              Enroll
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-card text-slate-700 hover:bg-slate-100 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-4 space-y-1">
            {[
              ['/', 'Home'],
              ['/programs', 'Programs'],
              ['/partnerships', 'Partnerships'],
              ['/register', 'Register'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="block rounded-card px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-surface transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/register"
              className="btn-cta block w-full text-center py-3 mt-2"
              onClick={() => setIsOpen(false)}
            >
              Enroll now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
