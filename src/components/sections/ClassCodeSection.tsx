import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import ClassCodeDemo from '../demos/ClassCodeDemo'

export const ClassCodeSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden" id="class-code">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Instant Onboarding"
          title="Frictionless Class Code System"
          subtitle="No complex IT setup required. Teachers generate a clean 8-character VIVE code, and students can enroll in seconds from any smartphone, tablet, or desktop."
        />

        <div className="mt-12">
          <ClassCodeDemo />
        </div>
      </div>
    </section>
  )
}

export default ClassCodeSection
