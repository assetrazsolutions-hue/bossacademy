import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomeHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-gray-50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-cta-500 mx-auto mb-4" />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            A simple path from basics to a career or income stream.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-slate-500 text-white flex items-center justify-center text-2xl font-bold shadow-inner border border-white/25">
              1
            </div>
            <div className="flex-1 bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-text mb-2">Learn Office Skills</h3>
              <p className="text-text-light">
                Start with documents, spreadsheets, email, and tools you&apos;ll use in any job — built for real workplaces.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start md:ml-8 mb-6">
            <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" aria-hidden />
          </div>

          {/* Step 2 - branch */}
          <div className="flex flex-col md:flex-row md:items-stretch gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-slate-500 text-white flex items-center justify-center text-2xl font-bold shadow-inner border border-white/25 md:self-start">
              2
            </div>
            <div className="flex-1 space-y-6">
              <p className="font-semibold text-text text-lg">Choose your path:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-md border-2 border-primary-200 hover:border-primary-400 transition">
                  <p className="text-sm font-semibold text-primary-700 mb-2">→ Job</p>
                  <h4 className="font-bold text-text mb-2">Data Analytics</h4>
                  <p className="text-sm text-text-light mb-4">
                    Build analysis and reporting skills employers look for.
                  </p>
                  <Link href="/register" className="text-cta-600 font-semibold text-sm hover:underline">
                    Reserve Your Seat →
                  </Link>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-2 border-indigo-200 hover:border-indigo-400 transition">
                  <p className="text-sm font-semibold text-indigo-700 mb-2">→ Income</p>
                  <h4 className="font-bold text-text mb-2">Digital Marketing</h4>
                  <p className="text-sm text-text-light mb-4">
                    Learn to run campaigns and freelance with practical projects.
                  </p>
                  <Link href="/register" className="text-cta-600 font-semibold text-sm hover:underline">
                    Reserve Your Seat →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
