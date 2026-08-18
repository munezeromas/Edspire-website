import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import CurriculumStrip from '../components/sections/CurriculumStrip'
import ProductsShowcase from '../components/sections/ProductsShowcase'
import FeaturesGrid from '../components/sections/FeaturesGrid'
import WhatWeDoSection from '../components/sections/WhatWeDoSection'
import VideoShowcase from '../components/sections/VideoShowcase'
import RecognitionSection from '../components/sections/RecognitionSection'
import FounderSection from '../components/sections/FounderSection'
import FaqSection from '../components/sections/FaqSection'
import ContactSection from '../components/sections/ContactSection'

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CurriculumStrip />
      <ProductsShowcase />
      <FeaturesGrid />
      <WhatWeDoSection />
      <VideoShowcase />
      <RecognitionSection />
      <FounderSection />
      <FaqSection />
      <ContactSection />
    </div>
  )
}

export default Home
