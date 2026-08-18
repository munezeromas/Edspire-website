import React from 'react'
import {
  Eye,
  Headphones,
  BookOpen,
  Lightbulb,
  Mic,
  Glasses,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { accessibilityFeatures } from '../data/features'

const iconMap: Record<string, React.ElementType> = {
  Headphones,
  BookOpen,
  Lightbulb,
  Mic,
  Glasses,
  Layers
}

export const AccessibilityPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-navy-950 min-h-screen">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <Badge variant="blue" size="md" className="mb-4">
          Universal Access
        </Badge>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          Education Without <span className="text-gradient">Barriers</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
          At Edspire, accessibility is our foundational philosophy. We architect software so that every student — regardless of cognitive, visual, or auditory needs — can learn with confidence.
        </p>

        <div className="flex items-center justify-center gap-3.5 mt-8">
          <Button href="/students" size="lg" variant="primary" icon={ArrowRight}>
            Try Accessible Student App
          </Button>
          <Button href="/contact" size="lg" variant="secondary">
            Request Inclusion Demo
          </Button>
        </div>
      </div>

      {/* 6 Core Accessibility Pillars */}
      <section className="section-padding bg-navy-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Multi-Modal Suite"
            title="Designed for Every Way of Learning"
            subtitle="Built-in assistive tools engineered into every chapter, quiz, and dialogue."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {accessibilityFeatures.map((feat) => {
              const Icon = iconMap[feat.icon] || Headphones

              return (
                <div
                  key={feat.id}
                  className="p-6 sm:p-7 rounded-2xl bg-navy-950 border border-white/10 hover:border-blue-500/40 transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold font-display text-white">
                    {feat.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    {feat.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WCAG Conformance & Assistive Standards */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <Badge variant="blue" size="sm">Standards Compliance</Badge>
            <h2 className="font-display text-3xl font-bold text-white">
              WCAG 2.1 Level AA Conformance Commitment
            </h2>
            <p className="text-sm text-white/70">
              We continually audit our user interfaces against global accessibility benchmarks.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-navy-900 border border-white/10 space-y-2">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Perceivable
              </h4>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                High contrast ratios (exceeding 4.5:1 for body copy), scalable vector typography, customizable line heights, and full descriptive text alternatives for all diagrammatic models.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-navy-900 border border-white/10 space-y-2">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Operable
              </h4>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Full keyboard navigation support with visible focus rings, bypass links to main content, and voice-assisted query capability.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-navy-900 border border-white/10 space-y-2">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Understandable & Robust
              </h4>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Predictable UI transitions, zero jarring auto-play media, explicit form labels, and robust compatibility across assistive screen readers (NVDA, VoiceOver, TalkBack).
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/60 to-navy-900 border border-blue-500/30 text-center space-y-3">
            <h4 className="text-base font-bold text-white">
              Have Feedback on Accessibility?
            </h4>
            <p className="text-xs sm:text-white/70 max-w-lg mx-auto">
              We welcome direct feedback from learners, educators, and accessibility advocates to continuously refine our features.
            </p>
            <div className="pt-2">
              <Button href="/contact" size="sm" variant="primary">
                Contact Accessibility Lead
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AccessibilityPage
