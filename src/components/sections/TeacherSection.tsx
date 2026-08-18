import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import TeacherDashboard from '../demos/TeacherDashboard'
import Button from '../ui/Button'
import { ArrowRight, Users, Sparkles, BookOpen, Clock } from 'lucide-react'

export const TeacherSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden" id="teachers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Teacher Intelligence"
          title="Teachers see more than grades."
          subtitle="Edspire empowers educators with live diagnostic insight matrices — identifying exactly where students are stuck before exam day and generating targeted remedial exercises with a single click."
        />

        <div className="mt-12">
          <TeacherDashboard />
        </div>

        <div className="mt-12 text-center">
          <Button href="/teachers" size="lg" variant="primary" icon={ArrowRight}>
            Explore Teacher Tools
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TeacherSection
