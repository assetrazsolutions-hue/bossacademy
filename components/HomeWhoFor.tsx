import { CheckCircle2, XCircle } from 'lucide-react'

const forYou = [
  'Students who want job-ready skills',
  'Freshers struggling to get interviews',
  'Anyone who wants to start earning',
]

const notForYou = [
  'People looking only for certificates',
  'People not willing to practice',
]

export default function HomeWhoFor() {
  return (
    <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-text text-center mb-3">Who This Is For</h2>
        <div className="w-16 h-1 bg-cta-500 mx-auto mb-10" />
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white rounded-xl border border-primary-100 shadow-sm p-6 md:p-8">
            <h3 className="font-bold text-primary-700 mb-4 text-lg">This is for you if…</h3>
            <ul className="space-y-3">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-light">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
            <h3 className="font-bold text-text mb-4 text-lg">Not for you if…</h3>
            <ul className="space-y-3">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-muted">
                  <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
