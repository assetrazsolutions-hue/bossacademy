import RegistrationForm from '@/components/RegistrationForm'
import PageHero from '@/components/PageHero'

export default function Register() {
  return (
    <div className="bg-surface min-h-screen">
      <PageHero
        eyebrow="Take the next step"
        title="Reserve your seat"
        subtitle="Register for a workshop or course. We&apos;ll follow up with clear next steps."
      />

      <div className="section-container py-20 md:py-28">
        <RegistrationForm />
      </div>
    </div>
  )
}
