import React from 'react'
import { BrainCircuit, Eye, CheckCircle2, ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'

export const ProductsPage: React.FC = () => {
  return (
    <div className="pt-28 bg-navy-950 min-h-screen">

      {/* Header */}
      <div className="border-b border-white/10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Our <span className="text-blue-400">Products</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Edspire has built two core platforms — <strong>Vive-AI</strong> for intelligent classroom learning and <strong>Ability</strong> for universal assistive education.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="py-16 space-y-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Vive-AI */}
          <section className="p-8 sm:p-10 rounded-xl bg-navy-900 border border-white/15 mb-10" id="vive-ai">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Vive-AI</h2>
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">AI Classroom & Tutoring Platform</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Vive-AI is a Socratic AI tutoring companion for students paired with a powerful diagnostic dashboard for teachers. Students get personalized step-by-step learning guidance; teachers get automated mastery reports and class-wide struggle alerts.
                </p>
                <div className="space-y-2.5">
                  {[
                    ['Socratic AI Tutoring', 'Guides learners to discover answers themselves through analogies, examples, and scaffolded questions.'],
                    ['Teacher Diagnostics', 'Instantly identifies sub-topics where students are struggling class-wide.'],
                    ['Adaptive Quizzing', 'Dynamically adjusts difficulty to precisely measure comprehension.'],
                    ['VIVE Class Codes', '8-character codes for instant whole-class enrollment on any device.']
                  ].map(([title, desc], i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span><strong>{title}:</strong> {desc}</span>
                    </div>
                  ))}
                </div>
                <Button href="/contact?product=vive-ai" size="md" variant="primary" icon={ArrowRight}>
                  Request Vive-AI Pilot
                </Button>
              </div>
              <div className="lg:col-span-6 space-y-3">
                <div className="rounded-lg overflow-hidden border border-white/15 bg-navy-950">
                  <img src="/Screenshot 2026-08-07 140446.png" alt="Vive-AI Student Dashboard" className="w-full h-auto object-cover" />
                  <div className="p-2 border-t border-white/10 text-center text-[11px] text-white/50">Vive-AI Student Dashboard</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ['/Screenshot 2026-08-07 140700.png', 'Teacher diagnostic view'],
                    ['/Screenshot 2026-08-07 140822.png', 'Adaptive quiz interface'],
                  ].map(([src, label], i) => (
                    <div key={i} className="rounded-lg overflow-hidden border border-white/15 bg-navy-950">
                      <img src={src} alt={label} className="w-full h-auto object-cover" />
                      <div className="p-1.5 border-t border-white/10 text-center text-[10px] text-white/50">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Ability */}
          <section className="p-8 sm:p-10 rounded-xl bg-navy-900 border border-white/15" id="ability">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Ability</h2>
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Universal Assistive Learning Suite</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Ability ensures that cognitive, auditory, or visual differences never prevent a student from engaging with educational content. Built with audio-first narration, voice input, dyslexia-adapted typography, and low-bandwidth resilience.
                </p>
                <div className="space-y-2.5">
                  {[
                    ['Audio-First Narration', 'Full TTS (text-to-speech) with adjustable pacing for auditory learners and low-vision students.'],
                    ['Voice Queries', 'Hands-free speech recognition for students with motor or typing difficulties.'],
                    ['Dyslexia Typography', 'OpenDyslexic font, reading guides, and high-contrast modes.'],
                    ['Low-Bandwidth Resilient', 'Works on slow or intermittent internet connections common in African schools.']
                  ].map(([title, desc], i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span><strong>{title}:</strong> {desc}</span>
                    </div>
                  ))}
                </div>
                <Button href="/contact?product=ability" size="md" variant="primary" icon={ArrowRight}>
                  Inquire About Ability
                </Button>
              </div>
              <div className="lg:col-span-6 space-y-3">
                <div className="rounded-lg overflow-hidden border border-white/15 bg-navy-950">
                  <img src="/Screenshot 2026-08-18 115702.png" alt="Ability Voice Interface" className="w-full h-auto object-cover" />
                  <div className="p-2 border-t border-white/10 text-center text-[11px] text-white/50">Ability — Voice Query Interface</div>
                </div>
                <div className="rounded-lg overflow-hidden border border-white/15 bg-navy-950">
                  <img src="/Screenshot 2026-08-18 115719.png" alt="Voice-enabled media learning" className="w-full h-auto object-cover" />
                  <div className="p-2 border-t border-white/10 text-center text-[11px] text-white/50">Ability — Voice-Enabled Media Learning</div>
                </div>
                <div className="rounded-lg overflow-hidden border border-white/15 bg-navy-950">
                  <img src="/Screenshot 2026-08-18 115751.png" alt="Blind Navigator Guide" className="w-full h-auto object-cover" />
                  <div className="p-2 border-t border-white/10 text-center text-[11px] text-white/50">Ability — Blind Navigator Guide Mode</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
