import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import { Check, X, Sparkles } from 'lucide-react'

const COMPARISON_ROWS = [
  {
    criterion: 'Pacing & Tempo',
    traditional: 'Uniform speed; students must keep up regardless of foundational gaps',
    edspire: 'Adaptive pacing tailored to individual mastery and prerequisite readiness'
  },
  {
    criterion: 'Individualized Attention',
    traditional: 'Limited by 1:40 teacher-to-student classroom ratios',
    edspire: '24/7 Socratic AI Tutor providing 1-on-1 step-by-step guidance'
  },
  {
    criterion: 'Learning Resources',
    traditional: 'Fragmented physical textbooks, outdated worksheets, and disjointed PDFs',
    edspire: 'Unified ecosystem: interactive simulations, smart problem banks, and digital books'
  },
  {
    criterion: 'Diagnostic Feedback',
    traditional: 'End-of-term letter grades that arrive too late for meaningful course-correction',
    edspire: 'Continuous formative analytics identifying specific sub-topic struggle points'
  },
  {
    criterion: 'Accessibility Standards',
    traditional: 'Inconsistent; neurodivergent and low-vision learners often left behind',
    edspire: 'Foundational universal access: native TTS, dyslexia typography, and voice input'
  }
]

export const WhyEdspireSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden" id="why-edspire">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Side-by-Side Comparison"
          title="Why Edspire?"
          subtitle="How modern AI-driven adaptive learning compares to conventional one-size-fits-all education."
        />

        {/* Comparison Table / Cards */}
        <div className="mt-12 max-w-5xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-navy-900/80 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 bg-navy-950 p-4 text-xs font-bold uppercase tracking-wider text-white">
            <div className="md:col-span-4 text-white/60">Dimension</div>
            <div className="md:col-span-4 text-white/60">Traditional Approach</div>
            <div className="md:col-span-4 text-blue-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              With Edspire
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-3 md:gap-4 items-start text-xs sm:text-sm hover:bg-white/[0.02] transition-colors"
              >
                <div className="md:col-span-4 font-bold text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 hidden md:inline-block" />
                  {row.criterion}
                </div>

                <div className="md:col-span-4 text-white/60 flex items-start gap-2">
                  <X className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>

                <div className="md:col-span-4 text-white/90 font-medium flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-blue-100">{row.edspire}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyEdspireSection
