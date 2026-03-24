import RegistrationForm from '@/components/RegistrationForm'

export default function Register() {
  return (
    <div className="bg-surface min-h-screen">
      <div className="relative overflow-hidden bg-primary-600 text-white py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_100%_0%,rgba(249,115,22,0.18),transparent)]" />
        <div className="section-container relative text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-blue-200 uppercase tracking-wide mb-3">Take the next step</p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Reserve your seat
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            Register for a workshop or course. We&apos;ll follow up with clear next steps.
          </p>
        </div>
      </div>

      <div className="section-container py-14 md:py-20">
        <RegistrationForm />
      </div>
    </div>
  )
}
