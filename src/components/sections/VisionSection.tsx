import React from 'react'
import { BrainCircuit, Eye, MapPin, Target, Sparkles, CheckCircle2 } from 'lucide-react'
import Badge from '../ui/Badge'

export const VisionSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-900 border-b border-white/10" id="vision">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="blue" size="md" className="mb-3">
            Core Philosophy
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Learning Should Adapt to the Learner
          </h2>
          <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            Not the other way around. We believe technology should meet students at their individual point of need.
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-navy-950 border border-white/15 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Socratic Guidance</h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              We reject shallow answer-dispensing. Our algorithms prompt critical thinking, break down complex concepts, and build lasting problem-solving resilience.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-navy-950 border border-white/15 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Universal Accessibility</h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Inclusion is at the foundation of everything we build. Text-to-speech, dyslexia typography, and voice navigation ensure no learner is left behind.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-navy-950 border border-white/15 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Built for Africa and the World</h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Developed from Kigali, Rwanda with deep consideration for low-bandwidth environments, curriculum alignment, and equitable school deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionSection
