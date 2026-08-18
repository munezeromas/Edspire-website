import React from 'react'
import {
  Calendar,
  FileSpreadsheet,
  TrendingUp,
  BrainCircuit,
  Eye,
  Mic,
  BookOpen,
  Bell
} from 'lucide-react'

const FEATURES = [
  {
    icon: BrainCircuit,
    title: 'Socratic AI Tutoring',
    description: 'Students receive 24/7 personalized explanations using analogies and scaffolded problem steps rather than raw answers.'
  },
  {
    icon: TrendingUp,
    title: 'Diagnostic Tracking',
    description: 'Teachers instantly view sub-topic mastery rates, identifying struggling student clusters before exams.'
  },
  {
    icon: FileSpreadsheet,
    title: 'Automated Mastery Reports',
    description: 'Comprehensive competency-based assessment analytics generated continuously from student problem-solving activity.'
  },
  {
    icon: Eye,
    title: 'Universal Accessibility',
    description: 'Native audio-first narration, dyslexia-friendly fonts, and high-contrast modes for neurodivergent and low-vision learners.'
  },
  {
    icon: Mic,
    title: 'Voice-Assisted Queries',
    description: 'Speech recognition tools allowing students with motor or typing difficulties to ask questions naturally.'
  },
  {
    icon: BookOpen,
    title: 'Digital Curriculum Library',
    description: 'Curriculum-aligned STEM textbooks, chapter summaries, and interactive formula practice banks.'
  },
  {
    icon: Calendar,
    title: 'VIVE Class Scheduling',
    description: 'Quick 8-character class codes allowing instructors to organize virtual cohorts and track assignments effortlessly.'
  },
  {
    icon: Bell,
    title: 'Constructive Progress Alerts',
    description: 'Meaningful milestone notifications for educators and families without intrusive surveillance.'
  }
]

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="section-padding bg-navy-900 border-b border-white/10" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Key Platform Capabilities
          </h2>
          <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            Edspire combines intelligence, accessibility, and teacher tools into one synchronized platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-navy-950 border border-white/10 hover:border-blue-500/40 transition-colors space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-white">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-white/70 mt-2 leading-relaxed">
                    {feat.description}
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

export default FeaturesGrid
