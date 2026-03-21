import Hero from '@/components/Hero'
import HomeWorkshop from '@/components/HomeWorkshop'
import HomeCoreCourses from '@/components/HomeCoreCourses'
import HomeAfterJoin from '@/components/HomeAfterJoin'
import HomeDecisionSupport from '@/components/HomeDecisionSupport'
import HomeHowItWorks from '@/components/HomeHowItWorks'
import HomeWhyChooseUs from '@/components/HomeWhyChooseUs'
import HomeFinalCTA from '@/components/HomeFinalCTA'

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <HomeWorkshop />
      <HomeCoreCourses />
      <HomeAfterJoin />
      <HomeDecisionSupport />
      <HomeHowItWorks />
      <HomeWhyChooseUs />
      <HomeFinalCTA />
    </div>
  )
}
