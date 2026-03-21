'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background-light shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="flex flex-col leading-tight">
                {/* Top row: BOSS + Global Academy */}
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-3xl md:text-4xl font-extrabold tracking-[0.03em]"
                    style={{
                      background: 'linear-gradient(90deg, #4F6EF7, #6C5CE7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: '"Baskerville Old Face", "Times New Roman", serif',
                    }}
                  >
                    BOSS
                  </span>
                  <span className="ml-2 text-[0.60rem] md:text-[0.70rem] font-semibold tracking-[0.15em] uppercase text-[#6B7280]">
                    Global Academy of Technology
                  </span>
                </div>
                {/* Tagline with BOSS initials emphasized in darker brand color */}
                <span className="mt-0.5 text-[0.60rem] md:text-[0.70rem] font-semibold tracking-[0.15em] uppercase text-[#4B5563]">
                  <span className="font-extrabold text-primary-700">B</span>uilding{' '}
                  <span className="font-extrabold text-primary-700">O</span>utstanding{' '}
                  <span className="font-extrabold text-primary-700">S</span>mart{' '}
                  <span className="font-extrabold text-primary-700">S</span>kills
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-text hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
              Home
            </Link>
            <Link href="/programs" className="text-text hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
              Programs
            </Link>
            <Link href="/partnerships" className="text-text hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
              Partnerships
            </Link>
            <Link href="/register" className="text-text hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
              Register
            </Link>
            <Link href="/contact" className="text-text hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
              Contact
            </Link>
            <Link 
              href="/register" 
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-medium"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text hover:text-primary-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background-light border-t">
            <Link
              href="/"
              className="text-text hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/programs"
              className="text-text hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/partnerships"
              className="text-text hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Partnerships
            </Link>
            <Link
              href="/register"
              className="text-text hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
            <Link
              href="/contact"
              className="text-text hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/register"
              className="bg-primary-600 text-white block px-3 py-2 rounded-lg hover:bg-primary-700 transition font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
