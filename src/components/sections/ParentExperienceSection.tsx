import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import ParentDashboard from '../demos/ParentDashboard'

export const ParentExperienceSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden" id="parents">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Family Bridge"
          title="Help families understand progress."
          subtitle="Parents gain constructive, encouraging visibility into their child’s learning journey — celebrating milestones and discovering actionable ways to support them at home without high-stress surveillance."
        />

        <div className="mt-12">
          <ParentDashboard />
        </div>
      </div>
    </section>
  )
}

export default ParentExperienceSection
