import Hero from '@/components/Hero'
import HomeCoreCourses from '@/components/HomeCoreCourses'
import HomeHowItWorks from '@/components/HomeHowItWorks'
import HomeWorkshop from '@/components/HomeWorkshop'
import HomeWhyChooseUs from '@/components/HomeWhyChooseUs'
import HomeFinalCTA from '@/components/HomeFinalCTA'

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <HomeCoreCourses />
      <HomeHowItWorks />
      <HomeWorkshop />
      <HomeWhyChooseUs />
      <HomeFinalCTA />
    </div>
  )
}
