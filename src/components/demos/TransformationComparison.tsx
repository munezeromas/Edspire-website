import React from 'react'
import {
  Users,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  UserCheck,
  BrainCircuit,
  BookOpen,
  LineChart,
  CheckCircle2,
  XCircle
} from 'lucide-react'
import Badge from '../ui/Badge'

export const TransformationComparison: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
      {/* Traditional Model Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-navy-950/60 border border-white/10 relative overflow-hidden backdrop-blur-md">
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant="neutral" size="sm">Traditional Model</Badge>
          <span className="text-xs text-white/40">One-Size-Fits-All</span>
        </div>

        <h3 className="text-xl font-bold font-display text-white mb-2">
          Fixed Pacing & Static Delivery
        </h3>
        <p className="text-xs sm:text-sm text-white/60 mb-6 leading-relaxed">
          Assumes every student learns at the exact same pace, in the same style, with identical resources.
        </p>

        {/* Traditional Flow Visual */}
        <div className="p-4 rounded-xl bg-navy-900/80 border border-white/5 space-y-3 mb-6">
          <div className="flex items-center justify-between text-xs text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-white/60">
                <Users className="w-4 h-4" />
              </div>
              <span className="font-semibold">Single Teacher</span>
            </div>
            <ArrowRight className="w-4 h-4 text-white/30" />
            <div className="font-semibold text-amber-300/90">Same 45-min Lecture</div>
            <ArrowRight className="w-4 h-4 text-white/30" />
            <div className="font-semibold text-white/70">40+ Students</div>
          </div>
        </div>

        {/* Pain points list */}
        <div className="space-y-2.5 text-xs text-white/70">
          <div className="flex items-start gap-2">
            <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>Fast learners get bored while struggling students get left behind silently.</span>
          </div>
          <div className="flex items-start gap-2">
            <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>Teachers spend 15+ hours weekly on repetitive manual homework grading.</span>
          </div>
          <div className="flex items-start gap-2">
            <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>Gaps in fundamental prerequisites compound into permanent learning roadblocks.</span>
          </div>
        </div>
      </div>

      {/* Edspire Adaptive Ecosystem Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 border border-blue-500/40 relative overflow-hidden shadow-xl shadow-blue-500/10 backdrop-blur-md">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant="blue" size="sm" dot>The Edspire Model</Badge>
          <span className="text-xs text-blue-300 font-medium">Continuous Adaptation</span>
        </div>

        <h3 className="text-xl font-bold font-display text-white mb-2">
          Personalized Mastery + Teacher Intelligence
        </h3>
        <p className="text-xs sm:text-sm text-white/70 mb-6 leading-relaxed">
          The platform adapts to the individual learner, while feeding actionable diagnostics back to the educator.
        </p>

        {/* Edspire Flow Visual */}
        <div className="p-4 rounded-xl bg-navy-950/80 border border-blue-500/30 space-y-3 mb-6">
          <div className="grid grid-cols-5 gap-1 items-center text-center text-[11px] font-semibold text-white">
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
              <span className="text-blue-300">Student</span>
            </div>
            <div className="text-blue-400">→</div>
            <div className="p-1.5 rounded-lg bg-blue-600/30 border border-blue-500/40">
              <span className="text-white">AI + Content</span>
            </div>
            <div className="text-blue-400">→</div>
            <div className="p-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40">
              <span className="text-emerald-300">Teacher Insight</span>
            </div>
          </div>
        </div>

        {/* Benefits list */}
        <div className="space-y-2.5 text-xs text-white/90">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>AI Tutor breaks down roadblocks with Socratic hints in real-time.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Teachers receive live struggle alerts and 1-click remediation sets.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Multi-modal accessibility: audio, dyslexia fonts, and voice assistance.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransformationComparison
