import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import { Users, BookOpen, School, Sparkles, Award } from 'lucide-react'

export const ImpactSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Measurable Growth"
          title="Designed for Deep Pedagogical Impact"
          subtitle="As Edspire expands its school pilot programs, we measure success through tangible student comprehension gains, teacher time saved, and accessibility adoption."
        />

        {/* Real Recognition Feature: GLC AI Hackathon */}
        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/60 to-navy-900 border border-blue-500/30 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden shrink-0 border border-white/10">
            <img
              src="/hackathon.png"
              alt="Edspire team won GLC AI Hackathon"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
              <Award className="w-3.5 h-3.5" /> Innovation Recognition
            </div>
            <h4 className="text-lg font-bold font-display text-white">
              GLC AI Hackathon Champions
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Edspire was honored as top winner at the GLC AI Hackathon, validating our approach to making AI tutoring deeply accessible, curriculum-aligned, and equitable for African learners.
            </p>
          </div>
        </div>

        {/* Clean Placeholder Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <div className="p-5 sm:p-6 rounded-2xl bg-navy-900 border border-white/5 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Active Pilots
            </div>
            <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">
              Students Enrolled
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-navy-900 border border-white/5 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Real-time
            </div>
            <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">
              AI Learning Sessions
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-navy-900 border border-white/5 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto">
              <School className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Cohort Beta
            </div>
            <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">
              Partner Classrooms
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-navy-900 border border-white/5 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Curriculum Core
            </div>
            <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">
              STEM Problem Sets
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactSection
