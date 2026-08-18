import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import TransformationComparison from '../demos/TransformationComparison'

export const ProblemSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Paradigm Shift"
          title="Every learner is different."
          subtitle="Traditional classrooms assume every student learns at the same pace, in the same style, and with the exact same resources. Edspire changes the equation."
        />

        <div className="mt-12">
          <TransformationComparison />
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
