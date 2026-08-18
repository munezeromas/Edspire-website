import React from 'react'
import {
  Building2,
  ShieldCheck,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  School,
  WifiOff,
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import EcosystemDiagram from '../components/demos/EcosystemDiagram'

export const Schools: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-navy-950 min-h-screen">
      {/* School Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Building2 className="w-3.5 h-3.5" />
          For Principals, Deans & Educational Institutions
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          Modernize your school’s <br />
          <span className="text-gradient">STEM learning infrastructure.</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
          Deploy an institution-wide learning ecosystem that empowers teachers, accelerates student comprehension, engages families, and delivers measurable academic equity.
        </p>

        <div className="flex items-center justify-center gap-3.5 mt-8">
          <Button href="/contact?role=school" size="lg" variant="primary" icon={ArrowRight}>
            Talk to Edspire
          </Button>
          <Button href="#institutional-ecosystem" size="lg" variant="secondary">
            Explore Ecosystem
          </Button>
        </div>
      </div>

      {/* Ecosystem Architecture */}
      <section className="section-padding bg-navy-900 border-y border-white/5" id="institutional-ecosystem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Ecosystem"
            title="Unified for Every Level of Your School"
            subtitle="Connect leadership, subject department heads, classroom teachers, students, and parents into one synchronized learning graph."
          />
          <div className="mt-10">
            <EcosystemDiagram />
          </div>
        </div>
      </section>

      {/* Institutional Value Pillars */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Enterprise Ready"
            title="Engineered for Scalable School Rollouts"
            subtitle="Built to fit real African educational environments with zero infrastructure headaches."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-2xl bg-navy-900 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Cohort Mastery Analytics</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Track grade-level mastery curves across mathematics, physics, and computer science. Pinpoint curriculum standards needing institutional emphasis.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <WifiOff className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Low-Bandwidth Optimized</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Lightweight asset payloads, aggressive offline caching, and responsive design ensure high performance even on intermittent campus Wi-Fi networks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Enterprise Privacy & Safety</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Strict adherence to student data protection laws. Zero behavioral ad tracking, role-based access control, and complete data ownership.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Curriculum Integration</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Directly maps to national examination boards (e.g. Rwanda Basic Education Board / REB standards) and international competency-based curricula.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Teacher Onboarding & PD</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                We provide hands-on teacher onboarding workshops, pedagogy guides, and ongoing support to ensure maximum educator adoption.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Universal Accessibility</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Meet institution-wide inclusion mandates with built-in text-to-speech, dyslexia typography, and multi-modal practice modes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot CTA Section */}
      <section className="section-padding bg-navy-900 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="blue" size="md">Join Our School Pilot Cohort</Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Bring AI-Powered Learning to Your Classrooms
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Schedule a 30-minute institutional consultation with our pedagogy and engineering team to evaluate Edspire for your upcoming academic term.
          </p>
          <div className="pt-2">
            <Button href="/contact?role=school" size="lg" variant="primary" icon={ArrowRight}>
              Talk to Edspire
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Schools
