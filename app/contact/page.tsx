'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { WHATSAPP_ADVISOR_URL } from '@/lib/whatsapp'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="bg-surface min-h-screen">
      <div className="relative overflow-hidden bg-primary-600 text-white py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_100%_0%,rgba(249,115,22,0.18),transparent)]" />
        <div className="section-container relative text-center">
          <p className="text-sm font-semibold text-blue-200 uppercase tracking-wide mb-3">We&apos;re here to help</p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Contact us</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Questions about programs, partnerships, or enrollment — send a message or reach us directly.
          </p>
        </div>
      </div>

      <div className="section-container py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="card-elevated p-8 md:p-10 hover:-translate-y-0.5">
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8">Get in touch</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-primary-600/10 text-primary-600">
                  <Phone className="w-5 h-5" strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                  <a href="tel:9916800685" className="text-primary-600 hover:text-primary-700 font-medium text-lg transition-colors">
                    9916 800 685
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-primary-600/10 text-primary-600">
                  <MessageCircle className="w-5 h-5" strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">WhatsApp</h3>
                  <a
                    href={WHATSAPP_ADVISOR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta inline-flex items-center gap-2 px-5 py-2.5 text-sm"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-primary-600/10 text-primary-600">
                  <Mail className="w-5 h-5" strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                  <a
                    href="mailto:info@bossacademy.org"
                    className="text-primary-600 hover:text-primary-700 transition-colors break-all"
                  >
                    info@bossacademy.org
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-10 pt-8 border-t border-slate-100 text-sm text-slate-600">
              Prefer the student site?{' '}
              <Link href="/programs" className="font-medium text-primary-600 hover:underline">
                View programs
              </Link>
            </p>
          </div>

          <div className="card-elevated p-8 md:p-10 hover:-translate-y-0.5">
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8">Send a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="form-label">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field min-h-[120px] resize-y"
                  placeholder="Tell us how we can help…"
                />
              </div>

              <button type="submit" className="btn-cta w-full px-6 py-3.5 justify-center">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
