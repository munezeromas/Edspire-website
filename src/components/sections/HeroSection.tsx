import React from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Button from '../ui/Button'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-navy-950 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Mission */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              AI-Powered Learning that Adapts to <span className="text-blue-400">Every Learner</span>
            </h1>

            <p className="text-base sm:text-lg text-white/75 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Edspire builds intelligent classroom software and universal assistive technology. Creators of <strong>Vive-AI</strong> for personalized learning and <strong>Ability</strong> for multi-modal accessibility.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Button href="#products" size="lg" variant="primary" icon={ArrowRight}>
                Explore Our Products
              </Button>
              <Button href="/contact" size="lg" variant="outline">
                Partner with Us
              </Button>
            </div>

            {/* Credibility highlights */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/70">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>GLC AI Hackathon Champions</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>WCAG-Conscious Accessibility Suite</span>
              </div>
            </div>
          </div>

          {/* Right Column: Transparent Cutout Student (img1.png) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-2xl" />
              <img
                src="/img1.png"
                alt="Student using Edspire digital learning"
                className="relative z-10 w-full max-h-[480px] object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
