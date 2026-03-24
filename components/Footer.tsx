import Link from 'next/link'
import { WHATSAPP_ADVISOR_URL } from '@/lib/whatsapp'

const linkClass = 'text-slate-400 hover:text-white transition-colors duration-200 text-sm'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="section-container py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-heading text-xl font-bold text-white mb-1">BOSS</p>
            <p className="text-xs font-medium text-slate-500 mb-3 leading-snug">
              Global Academy of Technology
            </p>
            <p className="text-sm leading-relaxed max-w-xs">
              Practical training for careers in the office, in data, and online, built for beginners who want real
              skills.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-white font-semibold text-sm uppercase tracking-wider mb-4">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/programs#office" className={linkClass}>
                  Office professional
                </Link>
              </li>
              <li>
                <Link href="/programs#data" className={linkClass}>
                  Data analytics
                </Link>
              </li>
              <li>
                <Link href="/programs#marketing" className={linkClass}>
                  Digital marketing
                </Link>
              </li>
              <li>
                <Link href="/programs" className={linkClass}>
                  All programs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className={linkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/register" className={linkClass}>
                  Register
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className={linkClass}>
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:9916800685" className={linkClass}>
                  9916 800 685
                </a>
              </li>
              <li>
                <a href="mailto:info@bossacademy.org" className={linkClass}>
                  info@bossacademy.org
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_ADVISOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} BOSS Global Academy of Technology. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
