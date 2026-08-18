import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import StudentDashboard from '../demos/StudentDashboard'

export const StudentExperienceSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden" id="students">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Student Experience"
          title="An intelligent space where students thrive."
          subtitle="From daily habit streaks to real-time mastery tracking across STEM and humanities, students get a unified portal that turns learning into an engaging journey."
        />

        <div className="mt-12">
          <StudentDashboard />
        </div>
      </div>
    </section>
  )
}

export default StudentExperienceSection
