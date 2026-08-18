import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import { accessibilityFeatures } from '../../data/features'
import { Headphones, BookOpen, Lightbulb, Mic, Glasses, Layers, CheckCircle2, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

const iconMap: Record<string, React.ElementType> = {
  Headphones,
  BookOpen,
  Lightbulb,
  Mic,
  Glasses,
  Layers
}

export const AccessibilitySection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden" id="accessibility">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Universal Access"
          title="Education without barriers."
          subtitle="Accessibility is not an afterthought or an optional add-on at Edspire. It is woven into our core product architecture so every learner has an equal opportunity to understand."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {accessibilityFeatures.map((feat) => {
            const Icon = iconMap[feat.icon] || Headphones

            return (
              <div
                key={feat.id}
                className="p-6 sm:p-7 rounded-2xl bg-navy-900/90 border border-white/10 hover:border-blue-500/40 transition-all duration-300 space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
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

        <div className="mt-12 p-6 rounded-2xl bg-navy-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">
              Learn more about our WCAG 2.1 AA Accessibility Standards
            </h4>
            <p className="text-xs text-white/60">
              Read our full accessibility statement and assistive technology roadmap.
            </p>
          </div>
          <Button href="/accessibility" size="sm" variant="outline" icon={ArrowRight}>
            View Accessibility Suite
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AccessibilitySection
