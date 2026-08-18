import React from 'react'
import { ArrowRight, GraduationCap, Users, Building2, Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

export const CTASection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-navy-900 to-navy-950 relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-navy-900/90 border border-blue-500/30 p-8 sm:p-12 lg:p-14 text-center shadow-2xl backdrop-blur-xl">
          <Badge variant="blue" size="md" className="mb-4">
            Get Started Today
          </Badge>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Ready to experience learning that <span className="text-gradient">adapts to you?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Join students, teachers, and school leaders building the next era of intelligent, accessible African education.
          </p>

          {/* 3 Persona Action Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 text-left">
            <div className="p-5 rounded-2xl bg-navy-950/80 border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">I'm a Student</h4>
                <p className="text-xs text-white/60 mt-1">
                  Start self-paced AI tutoring and streak challenges.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5">
                <Button href="/students" size="sm" variant="outline" className="w-full">
                  Explore Student App
                </Button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-navy-950/80 border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">I'm a Teacher</h4>
                <p className="text-xs text-white/60 mt-1">
                  Generate VIVE class codes and live diagnostic matrices.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5">
                <Button href="/teachers" size="sm" variant="outline" className="w-full">
                  Create a Class
                </Button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-navy-950/80 border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">I'm a School Leader</h4>
                <p className="text-xs text-white/60 mt-1">
                  Deploy institution-wide ecosystem analytics.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5">
                <Button href="/schools" size="sm" variant="primary" className="w-full">
                  Partner with Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
