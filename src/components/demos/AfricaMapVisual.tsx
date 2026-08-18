import React from 'react'
import { MapPin, Globe, Sparkles, WifiOff, Languages, ShieldCheck, Zap } from 'lucide-react'
import Badge from '../ui/Badge'

export const AfricaMapVisual: React.FC = () => {
  return (
    <div className="bg-navy-950/80 border border-white/10 rounded-2xl p-6 sm:p-10 max-w-5xl mx-auto backdrop-blur-xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left column: Vision & Pillars (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              Born in Kigali, Rwanda
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Built in Africa. Designed for Every Learner.
            </h3>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Edspire is being built from Kigali with a deep understanding of local classroom realities, connectivity constraints, and multilingual nuances — aiming to scale across the African continent and globally.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-navy-900/90 border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <WifiOff className="w-4 h-4" />
              </div>
              <h5 className="text-sm font-bold text-white">Low-Bandwidth Resilient</h5>
              <p className="text-xs text-white/60 leading-relaxed">
                Engineered for rapid asset compression, SMS fallbacks, and offline caching for regional stability.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-navy-900/90 border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Languages className="w-4 h-4" />
              </div>
              <h5 className="text-sm font-bold text-white">Multilingual Ready</h5>
              <p className="text-xs text-white/60 leading-relaxed">
                Adaptive NLP architectures built to support English, French, and regional language translations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-navy-900/90 border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <h5 className="text-sm font-bold text-white">Equitable Access</h5>
              <p className="text-xs text-white/60 leading-relaxed">
                Pricing and institutional deployments structured to democratize world-class AI tutoring for public schools.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-navy-900/90 border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h5 className="text-sm font-bold text-white">Pedagogical Rigor</h5>
              <p className="text-xs text-white/60 leading-relaxed">
                Aligned with national curriculum standards (REB and continental competency-based frameworks).
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Abstract Tech Africa Visual (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-xs aspect-square rounded-2xl bg-navy-900 border border-blue-500/30 p-6 flex flex-col items-center justify-center text-center shadow-xl">
            {/* Ambient concentric radar rings */}
            <div className="absolute inset-4 rounded-full border border-blue-500/10 animate-ping [animation-duration:4s]" />
            <div className="absolute inset-12 rounded-full border border-blue-500/20" />
            <div className="absolute inset-20 rounded-full border border-blue-500/30" />

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 mb-4 z-10">
              <Globe className="w-8 h-8" />
            </div>

            <h4 className="font-display font-bold text-white text-base z-10">
              Kigali Innovation Hub
            </h4>
            <p className="text-xs text-blue-300 font-medium z-10 mt-1">
              Rwanda · Continental Gateway
            </p>

            <div className="mt-4 pt-4 border-t border-white/10 w-full flex items-center justify-around text-[11px] text-white/60 z-10">
              <div>
                <span className="block font-bold text-white">EAC</span>
                <span>Regional Target</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="block font-bold text-white">Global</span>
                <span>Vision</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AfricaMapVisual
