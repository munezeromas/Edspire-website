import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import AITutorDemo from '../demos/AITutorDemo'
import { Sparkles, BrainCircuit, MessageSquareText, Layers, CheckCircle2 } from 'lucide-react'

export const AITutorSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden" id="ai-tutor">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Intelligence"
          title="Meet your AI learning companion."
          subtitle="Edspire’s AI Tutor doesn’t just give students answers. It scaffolds understanding through Socratic questioning, real-world analogies, and step-by-step diagnostic feedback."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
          {/* Left Column: Interactive Chat Interface Demo (7 cols) */}
          <div className="lg:col-span-7">
            <AITutorDemo />
          </div>

          {/* Right Column: Key Pedagogical Capabilities (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 rounded-2xl bg-navy-900 border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Socratic Inquiry, Not Direct Cheating</h4>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                When a student gets stuck on quadratic factoring or photosynthesis, the AI Tutor asks guiding questions to help the learner reach the breakthrough themselves.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-navy-900 border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Dynamic Difficulty Adaptation</h4>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Students can switch instantly between "Explain simpler", "Give me a real-world example", or "Quiz me" to reinforce concepts from multiple angles.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-navy-900 border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <MessageSquareText className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Multi-Modal Audio & Dyslexia Support</h4>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Auditory learners and students with reading difficulties can listen to speech-synthesized lessons and ask questions using natural voice input.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AITutorSection
