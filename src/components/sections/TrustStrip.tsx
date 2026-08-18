import React from 'react'
import { Award, Sparkles, MapPin, Cpu, CheckCircle } from 'lucide-react'

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-navy-950 border-y border-white/10 py-6 sm:py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Main Credibility Slogan */}
          <div className="flex items-center gap-3 text-center lg:text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-sm sm:text-base tracking-tight">
                Built in Rwanda • Designed for Africa • Powered by AI
              </h4>
              <p className="text-xs text-white/50 mt-0.5">
                Pioneering adaptive AI education from Kigali for learners everywhere
              </p>
            </div>
          </div>

          {/* Real Hackathon Victory Milestone Badge */}
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-navy-900 border border-blue-500/30 text-xs text-white/80">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <span className="font-bold text-white">GLC AI Hackathon Champions</span>
              <span className="text-white/50 block sm:inline sm:ml-1.5">· Recognized for AI-powered education innovation</span>
            </div>
          </div>

          {/* Core Architecture Trust Pills */}
          <div className="hidden xl:flex items-center gap-6 text-xs text-white/60">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WCAG 2.1 Accessible</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
              <span>Low-Bandwidth Optimized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustStrip
