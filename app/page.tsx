import Hero from '@/components/Hero'
import HomeTrustStrip from '@/components/HomeTrustStrip'
import HomeWhoFor from '@/components/HomeWhoFor'
import HomeCoreCourses from '@/components/HomeCoreCourses'
import HomeWhyChooseUs from '@/components/HomeWhyChooseUs'
import HomeHowItWorks from '@/components/HomeHowItWorks'
import HomeTestimonials from '@/components/HomeTestimonials'
import HomeFinalCTA from '@/components/HomeFinalCTA'

export default function Home() {
  return (
    <div className="bg-surface">
      <Hero />
      <HomeTrustStrip />
      <HomeWhoFor />
      <HomeCoreCourses />
      <HomeWhyChooseUs />
      <HomeHowItWorks />
      <HomeTestimonials />
      <HomeFinalCTA />
    </div>
  )
}
