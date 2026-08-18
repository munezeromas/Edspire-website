import React from 'react'
import { ShieldAlert, HeartHandshake, EyeOff, Bot, Lock, CheckCircle2 } from 'lucide-react'
import Badge from '../components/ui/Badge'

export const ChildSafety: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-navy-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Badge variant="blue" size="md" className="mb-4">
          Student Protection
        </Badge>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Child Safety and Online Protection Policy
        </h1>
        <p className="text-xs text-white/50 mb-8">
          Last Updated: August 2026 · Edspire Rwanda Ltd
        </p>

        <div className="space-y-8 text-white/80 text-sm leading-relaxed">
          <section className="p-6 rounded-xl bg-navy-900 border border-blue-500/30 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-blue-400" />
              1. Our Safety-First Pledge
            </h2>
            <p>
              At Edspire, we take our responsibility to protect young learners seriously. We create safe, constructive, and age-appropriate digital learning environments free from commercial exploitation, harmful content, and peer harassment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Multi-Tiered AI Content Guardrails</h2>
            <p>
              Every conversation with the Edspire AI Tutor passes through strict real-time safety guardrails:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-navy-900 border border-white/5 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-2">
                  <Bot className="w-4 h-4 text-blue-400" /> Pedagogical Boundaries
                </div>
                <p className="text-xs text-white/70">
                  The AI is strictly constrained to educational topics (STEM, languages, literature, study skills). Off-topic or unsafe queries are redirected safely.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-navy-900 border border-white/5 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-400" /> Automated Redaction
                </div>
                <p className="text-xs text-white/70">
                  Personal identifiers (phone numbers, physical addresses, passwords) are automatically filtered and redacted prior to model inference.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Zero Third-Party Advertising</h2>
            <p>
              Edspire is 100% ad-free. We never show commercial ads, sponsored products, or behavioral promotions to students of any age.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Reporting and Immediate Intervention</h2>
            <p>
              Students and teachers have 1-click reporting mechanisms on every AI response. Flagged interactions are immediately audited by our human safety team.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ChildSafety
