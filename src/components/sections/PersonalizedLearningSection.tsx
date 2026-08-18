import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import LearningPath from '../demos/LearningPath'

export const PersonalizedLearningSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden" id="personalized-learning">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Adaptive Pathways"
          title="No two learners follow the same path."
          subtitle="Edspire uses real-time learning activity to recommend what students should focus on next — reinforcing fundamental prerequisites before introducing advanced concepts."
        />

        <div className="mt-12">
          <LearningPath />
        </div>
      </div>
    </section>
  )
}

export default PersonalizedLearningSection
