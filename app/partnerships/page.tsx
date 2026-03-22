import InstitutionalPartnership from '@/components/InstitutionalPartnership'
import GovernmentCSRPrograms from '@/components/GovernmentCSRPrograms'
import TrainerOverviewSection from '@/components/TrainerOverviewSection'
import Link from 'next/link'

export default function PartnershipsPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Enterprise & Partnerships</h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Hospitals, schools, corporates, government, and CSR — partner with BOSS Academy for
            industry-aligned training at scale.
          </p>
          <p className="mt-4 text-sm text-primary-200">
            <Link href="/" className="underline hover:text-white">
              ← Back to student programs
            </Link>
          </p>
        </div>
      </div>

      <InstitutionalPartnership />
      <GovernmentCSRPrograms />
      <TrainerOverviewSection />

      <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to partner?</h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Tell us about your organization and we&apos;ll suggest a training approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-cta px-8 py-4">
              Register / Inquiry
            </Link>
            <Link href="/contact" className="btn-cta-outline-light px-8 py-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
