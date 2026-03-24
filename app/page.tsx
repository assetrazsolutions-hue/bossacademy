import Hero from '@/components/Hero'
import HomeTrustStrip from '@/components/HomeTrustStrip'
import HomeWhoFor from '@/components/HomeWhoFor'
import HomeCoreCourses from '@/components/HomeCoreCourses'
import HomeNotSureSection from '@/components/HomeNotSureSection'
import HomeWhyChooseUs from '@/components/HomeWhyChooseUs'
import HomeHowItWorks from '@/components/HomeHowItWorks'
import HomeOurApproach from '@/components/HomeOurApproach'
import HomeWhatYouWillGain from '@/components/HomeWhatYouWillGain'
import HomeTransparencyBlock from '@/components/HomeTransparencyBlock'
import HomeTalkToUs from '@/components/HomeTalkToUs'
import HomeFinalCTA from '@/components/HomeFinalCTA'

export default function Home() {
  return (
    <div className="bg-surface">
      <Hero />
      <HomeTrustStrip />
      <HomeWhoFor />
      <HomeCoreCourses />
      <HomeNotSureSection />
      <HomeWhyChooseUs />
      <HomeHowItWorks />
      <HomeOurApproach />
      <HomeWhatYouWillGain />
      <HomeTransparencyBlock />
      <HomeTalkToUs />
      <HomeFinalCTA />
    </div>
  )
}
