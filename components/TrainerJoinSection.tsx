'use client'

import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TrainerJoinSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)

    const payload = {
      full_name: String(formData.get('trainerName') || ''),
      phone_number: String(formData.get('trainerPhone') || ''),
      email: String(formData.get('trainerEmail') || ''),
      experience_years: Number(formData.get('trainerExperience') || 0),
      area_of_expertise: String(formData.get('trainerExpertise') || ''),
      preferred_type: String(formData.get('trainerType') || ''),
      message: String(formData.get('trainerMessage') || ''),
    }

    try {
      const { error } = await supabase.from('trainer_applications').insert([payload])
      if (error) throw error

      setSubmitStatus('success')
      e.currentTarget.reset()
    } catch (error) {
      console.error('Error submitting trainer application:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Join BOSS Academy as a Trainer
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            We are looking for passionate professionals and experts to deliver high-impact training programs.
          </p>
        </div>

        {/* Trainer types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-background-dark">
            <h3 className="text-2xl font-bold text-text mb-3">Part-Time Trainers</h3>
            <p className="text-text-light mb-4">
              Industry professionals who can deliver sessions on weekends or specific modules as part of our
              specialized programs.
            </p>
            <ul className="space-y-2 text-text-light text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5" />
                <span>Flexible scheduling around your professional commitments.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5" />
                <span>Opportunities to mentor students and working professionals.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-background-dark">
            <h3 className="text-2xl font-bold text-text mb-3">Full-Time Trainers</h3>
            <p className="text-text-light mb-4">
              Dedicated trainers who work with BOSS Global Academy of Technology on ongoing training programs
              and institutional partnerships.
            </p>
            <ul className="space-y-2 text-text-light text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5" />
                <span>Structured training assignments across multiple programs.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5" />
                <span>Opportunities to design curriculum and lead new initiatives.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Areas of expertise */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-text mb-4 text-center md:text-left">
            Areas of Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Healthcare & Hospital Administration',
              'Electric Vehicle (EV) Technology',
              'Artificial Intelligence & Data Science',
              'Cybersecurity',
              'Electronics & Mobile Repair',
              'Solar & Electrical Systems',
              'Soft Skills & Communication',
              'Corporate Training & Leadership',
            ].map((area) => (
              <span
                key={area}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-10">
          <Link
            href="#trainer-application"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition shadow-md hover:shadow-lg"
          >
            Apply as Trainer
          </Link>
        </div>

        {/* Trainer application form */}
        <div
          id="trainer-application"
          className="bg-white rounded-xl shadow-lg p-8 border border-background-dark max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-text mb-4 text-center md:text-left">
            Trainer Application Form
          </h3>
          <p className="text-sm text-text-light mb-6 text-center md:text-left">
            Share your details and our team will get in touch with you regarding trainer opportunities at
            BOSS Academy.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="trainerName" className="block text-sm font-medium text-text mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="trainerName"
                  name="trainerName"
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="trainerPhone" className="block text-sm font-medium text-text mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="trainerPhone"
                  name="trainerPhone"
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="trainerEmail" className="block text-sm font-medium text-text mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="trainerEmail"
                  name="trainerEmail"
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="trainerExperience" className="block text-sm font-medium text-text mb-2">
                  Experience (years) <span className="text-red-500">*</span>
                </label>
                <input
                  id="trainerExperience"
                  name="trainerExperience"
                  type="number"
                  min={0}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="trainerExpertise" className="block text-sm font-medium text-text mb-2">
                Area of Expertise <span className="text-red-500">*</span>
              </label>
              <select
                id="trainerExpertise"
                name="trainerExpertise"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select an area</option>
                <option value="Healthcare & Hospital Administration">Healthcare &amp; Hospital Administration</option>
                <option value="Electric Vehicle (EV) Technology">Electric Vehicle (EV) Technology</option>
                <option value="Artificial Intelligence & Data Science">
                  Artificial Intelligence &amp; Data Science
                </option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Electronics & Mobile Repair">Electronics &amp; Mobile Repair</option>
                <option value="Solar & Electrical Systems">Solar &amp; Electrical Systems</option>
                <option value="Soft Skills & Communication">Soft Skills &amp; Communication</option>
                <option value="Corporate Training & Leadership">Corporate Training &amp; Leadership</option>
              </select>
            </div>

            <div>
              <label htmlFor="trainerType" className="block text-sm font-medium text-text mb-2">
                Preferred Type <span className="text-red-500">*</span>
              </label>
              <select
                id="trainerType"
                name="trainerType"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select type</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Full-Time">Full-Time</option>
              </select>
            </div>

            <div>
              <label htmlFor="trainerMessage" className="block text-sm font-medium text-text mb-2">
                Message
              </label>
              <textarea
                id="trainerMessage"
                name="trainerMessage"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Tell us about your experience and the kind of training you would like to deliver..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
                Thank you! Your trainer application has been submitted. Our team will contact you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                There was an error submitting your application. Please try again or contact us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

