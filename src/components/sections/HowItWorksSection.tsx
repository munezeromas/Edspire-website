import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import { UserPlus, BookOpen, CheckCircle, TrendingUp, Sparkles } from 'lucide-react'

const STEPS = [
  {
    step: '01',
    title: 'Join',
    subtitle: 'Instant Access',
    description: 'Create an account in seconds or enter a teacher’s 8-character VIVE code to join your virtual class.',
    icon: UserPlus
  },
  {
    step: '02',
    title: 'Learn',
    subtitle: 'Explore Content',
    description: 'Access curriculum-aligned chapters, interactive simulations, and 24/7 Socratic AI tutoring support.',
    icon: BookOpen
  },
  {
    step: '03',
    title: 'Practice',
    subtitle: 'Adaptive Activities',
    description: 'Solve problem sets with instant feedback, interactive scratchpad hints, and diagnostic concept checks.',
    icon: CheckCircle
  },
  {
    step: '04',
    title: 'Improve',
    subtitle: 'Close Gaps Early',
    description: 'AI detects foundation misconceptions and provides targeted remediation before misunderstandings compound.',
    icon: TrendingUp
  },
  {
    step: '05',
    title: 'Grow',
    subtitle: 'Mastery & Confidence',
    description: 'Earn badges, maintain daily learning streaks, and develop lifelong independent study confidence.',
    icon: Sparkles
  }
]

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Simple 5-Step Cycle"
          title="How Edspire Works"
          subtitle="A seamless continuous learning cycle designed for simplicity, agency, and deep conceptual mastery."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-14 relative">
          {/* Subtle connecting line across desktop columns */}
          <div className="hidden md:block absolute top-1/4 left-10 right-10 h-0.5 bg-gradient-to-r from-blue-600/20 via-blue-500/40 to-blue-400/20 z-0" />

          {STEPS.map((step, idx) => {
            const Icon = step.icon

            return (
              <div
                key={step.step}
                className="relative z-10 p-5 rounded-2xl bg-navy-950 border border-white/10 hover:border-blue-500/40 transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                      {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/70">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-400/90 uppercase tracking-wider">
                    {step.subtitle}
                  </p>

                  <p className="text-xs text-white/70 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
