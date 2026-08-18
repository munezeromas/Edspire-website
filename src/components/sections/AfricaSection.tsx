import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import AfricaMapVisual from '../demos/AfricaMapVisual'

export const AfricaSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden" id="africa-vision">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Pan-African Vision"
          title="Rooted in Kigali. Built for the continent."
          subtitle="Developing accessible, low-bandwidth, AI-driven learning tools from Rwanda to transform education equity across Africa and beyond."
        />

        <div className="mt-12">
          <AfricaMapVisual />
        </div>
      </div>
    </section>
  )
}

export default AfricaSection
