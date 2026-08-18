import React from 'react'
import { Users, School, GraduationCap, HeartHandshake, CheckCircle2 } from 'lucide-react'
import Badge from '../ui/Badge'

export const WhatWeDoSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-950 border-b border-white/10" id="what-we-do">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: img2.png cutout */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-sm flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-2xl" />
              <img
                src="/img2.png"
                alt="Student with school backpack"
                className="relative z-10 w-full max-h-[460px] object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Right Column: 4 Stakeholder Value Points */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <Badge variant="blue" size="md" className="mb-3">
                Value Proposition
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                What We Do
              </h2>
              <p className="text-sm sm:text-base text-white/75 mt-3 leading-relaxed">
                An AI-powered learning and accessibility ecosystem connecting educators, school leaders, students, and families.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-lg bg-navy-900 border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">For Teachers</h4>
                  <p className="text-xs text-white/70 mt-1 leading-relaxed">
                    Educators focus on teaching while formative diagnostics, struggle alerts, and differentiated assignments are managed seamlessly.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-navy-900 border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <School className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">For School Administrators</h4>
                  <p className="text-xs text-white/70 mt-1 leading-relaxed">
                    School leaders access cohort-level mastery records and curriculum benchmark analytics at their fingertips.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-navy-900 border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">For Students</h4>
                  <p className="text-xs text-white/70 mt-1 leading-relaxed">
                    Learners access 24/7 Socratic AI tutoring, practice quizzes, and multi-modal accessibility tools (TTS, voice, dyslexia fonts).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-navy-900 border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">For Parents</h4>
                  <p className="text-xs text-white/70 mt-1 leading-relaxed">
                    Families monitor their children’s learning habits, progress trends, and strengths without high-pressure surveillance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDoSection
