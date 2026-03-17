'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    city: '',
    educationProfession: '',
    programInterested: '',
    organization: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Transform camelCase to snake_case for database
      const dbData = {
        full_name: formData.fullName,
        phone_number: formData.phoneNumber,
        email: formData.email,
        city: formData.city,
        education_profession: formData.educationProfession,
        program_interested: formData.programInterested,
        organization: formData.organization || null,
        message: formData.message || null,
      }

      const { error } = await supabase.from('registrations').insert([dbData])

      if (error) throw error

      // Fire-and-forget email notification; failures here won't affect the user
      fetch('/api/registration-apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dbData),
      }).catch((notifyError) => {
        console.error('Error sending registration notification email:', notifyError)
      })

      setSubmitStatus('success')
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        city: '',
        educationProfession: '',
        programInterested: '',
        organization: '',
        message: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6 bg-white shadow-lg rounded-xl p-6 md:p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-text mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
            City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="educationProfession" className="block text-sm font-medium text-gray-700 mb-2">
            Education / Profession <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="educationProfession"
            name="educationProfession"
            required
            value={formData.educationProfession}
            onChange={handleChange}
            placeholder="e.g., B.Tech, Doctor, Teacher"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="programInterested" className="block text-sm font-medium text-gray-700 mb-2">
            Program Interested <span className="text-red-500">*</span>
          </label>
          <select
            id="programInterested"
            name="programInterested"
            required
            value={formData.programInterested}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select a program</option>
            <option value="Hospital Staff Training">Hospital Staff Training</option>
            <option value="College Graduate Skill Development">College Graduate Skill Development</option>
            <option value="School Future Skills">School Future Skills</option>
            <option value="Corporate Upskilling">Corporate Upskilling</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
          Organization
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          placeholder="Name of your hospital, school, college, or company"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Tell us about your training needs..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Thank you! Your registration has been submitted successfully. We'll contact you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          There was an error submitting your registration. Please try again or contact us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Register for Training'}
      </button>

      {/* Trust signals */}
      <div className="mt-6 bg-background-light border border-background-dark rounded-lg px-4 py-4 text-sm text-text-light">
        <h3 className="text-text font-semibold mb-2 text-sm">
          Why Train with BOSS Academy?
        </h3>
        <ul className="space-y-1">
          <li className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✔</span>
            <span>Industry focused training</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✔</span>
            <span>Experienced trainers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✔</span>
            <span>Practical skill development</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✔</span>
            <span>Certification and career support</span>
          </li>
        </ul>
      </div>
    </form>
  )
}
