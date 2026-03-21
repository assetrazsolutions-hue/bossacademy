import Hero from '@/components/Hero'
import HomeWorkshop from '@/components/HomeWorkshop'
import HomeCoreCourses from '@/components/HomeCoreCourses'
import HomeHowItWorks from '@/components/HomeHowItWorks'
import HomeWhyChooseUs from '@/components/HomeWhyChooseUs'
import HomeFinalCTA from '@/components/HomeFinalCTA'

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <HomeWorkshop />
      <HomeCoreCourses />
      <HomeHowItWorks />
      <HomeWhyChooseUs />
      <HomeFinalCTA />
    </div>
  )
}
