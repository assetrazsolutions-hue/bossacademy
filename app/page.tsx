import Hero from '@/components/Hero'
import InstitutionalPartnership from '@/components/InstitutionalPartnership'
import UpcomingBatches from '@/components/UpcomingBatches'
import FeaturedPrograms from '@/components/FeaturedPrograms'
import CareerPathway from '@/components/CareerPathway'
import GovernmentCSRPrograms from '@/components/GovernmentCSRPrograms'
import TrainerJoinSection from '@/components/TrainerJoinSection'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <Hero />

      {/* Institutional Partnerships */}
      <InstitutionalPartnership />

      {/* Upcoming Batches */}
      <UpcomingBatches />

      {/* Featured Programs */}
      <FeaturedPrograms />

      {/* Career Pathway */}
      <CareerPathway />

      {/* Government & CSR Programs */}
      <GovernmentCSRPrograms />

      {/* Trainer Join Section */}
      <TrainerJoinSection />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Skills?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Join thousands of professionals who have enhanced their careers through our training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition shadow-lg"
            >
              Register Now
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
