import React from 'react'
import {
  BrainCircuit,
  Eye,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import Button from '../ui/Button'

export const ProductsShowcase: React.FC = () => {
  return (
    <section className="section-padding bg-navy-950 border-b border-white/10" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What We Have Built
          </h2>
          <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            Edspire develops purpose-built educational platforms designed to empower classrooms, teachers, and students.
          </p>
        </div>

        {/* Product 1: Vive-AI */}
        <div className="p-6 sm:p-8 rounded-xl bg-navy-900 border border-white/15 mb-10 space-y-8" id="vive-ai">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Info */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Vive-AI
                  </h3>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    AI Classroom & Tutoring Platform
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Vive-AI combines an adaptive Socratic learning companion for students with real-time diagnostic matrices for educators. It enables teachers to track class progress, pinpoint learning bottlenecks, and generate tailored remedial assignments.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Socratic AI Tutoring:</strong> Step-by-step guidance that fosters genuine understanding over answer-copying.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Teacher Diagnostics:</strong> Automatic identification of struggling student clusters per sub-topic.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Adaptive Quizzing:</strong> Dynamic difficulty adjustment to pinpoint comprehension boundaries.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>VIVE Class Codes:</strong> Instant whole-class enrollment with 8-character codes.</span>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/contact?product=vive-ai" size="md" variant="primary" icon={ArrowRight}>
                  Request Vive-AI Demo
                </Button>
              </div>
            </div>

            {/* Right: Real Screenshot */}
            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden border border-white/15 bg-navy-950">
                <img
                  src="/Screenshot 2026-08-07 140446.png"
                  alt="Vive-AI Platform Interface"
                  className="w-full h-auto object-cover"
                />
                <div className="p-2.5 bg-navy-950 border-t border-white/10 text-center text-[11px] text-white/50">
                  Vive-AI Student Portal Interface
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product 2: Ability */}
        <div className="p-6 sm:p-8 rounded-xl bg-navy-900 border border-white/15 space-y-8" id="ability">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Info */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Ability
                  </h3>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    Universal Assistive Learning Suite
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Ability makes digital education accessible to neurodivergent learners, auditory students, and low-vision individuals. Built with audio-first narration, voice navigation, and dyslexia typography.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Audio-First Narration:</strong> High-quality text-to-speech with adjustable playback speeds.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Voice Query Input:</strong> Hands-free speech recognition for asking questions.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Dyslexia Adaptation:</strong> OpenDyslexic font mode, line guides, and high contrast.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Low-Bandwidth Resilient:</strong> Works seamlessly on low-bandwidth school networks.</span>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/contact?product=ability" size="md" variant="primary" icon={ArrowRight}>
                  Inquire About Ability
                </Button>
              </div>
            </div>

            {/* Right: Real Screenshots */}
            <div className="lg:col-span-6 space-y-3">
              <div className="rounded-lg overflow-hidden border border-white/15 bg-navy-950">
                <img
                  src="/Screenshot 2026-08-18 115702.png"
                  alt="Ability Speech Interface"
                  className="w-full h-auto object-cover"
                />
                <div className="p-2 bg-navy-950 border-t border-white/10 text-center text-[11px] text-white/50">
                  Ability Speech Query Interface
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-white/15 bg-navy-950">
                <img
                  src="/Screenshot 2026-08-18 115719.png"
                  alt="Voice-enabled video learning"
                  className="w-full h-auto object-cover"
                />
                <div className="p-2 bg-navy-950 border-t border-white/10 text-center text-[11px] text-white/50">
                  Voice-Enabled Media Learning
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsShowcase
