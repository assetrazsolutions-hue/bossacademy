import RegistrationForm from '@/components/RegistrationForm'

export default function Register() {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Register for a Course or Workshop
          </h1>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Tell us what you want — job-ready skills, freelancing, or our free workshop. We&apos;ll reach out
            with next steps.
          </p>
        </div>
        <RegistrationForm />
      </div>
    </div>
  )
}
