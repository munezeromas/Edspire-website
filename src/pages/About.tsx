import React from 'react'
import { ArrowRight, Award, Compass, Target, Linkedin, Mail, ExternalLink, Youtube } from 'lucide-react'
import Button from '../components/ui/Button'

export const About: React.FC = () => {
  return (
    <div className="pt-28 bg-navy-950 min-h-screen">

      {/* Hero */}
      <div className="border-b border-white/10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            About <span className="text-blue-400">Edspire</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            An emerging African EdTech company pioneering AI-powered adaptive learning and accessible educational technology — built from Kigali, Rwanda.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="p-8 rounded-xl bg-navy-900 border border-white/15 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold font-display text-white">Our Mission</h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Make high-quality, personalized learning accessible to every learner regardless of cognitive ability, socioeconomic background, or connectivity constraints.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-navy-900 border border-white/15 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Compass className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold font-display text-white">Our Vision</h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              A world where technology helps every student discover how they learn best — where geography, cognitive differences, and school resources never limit potential.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Our Story</h2>
          <div className="text-xs sm:text-sm text-white/75 leading-relaxed space-y-3">
            <p>
              Edspire was founded with a simple but urgent question about equity: <em>Why do educational systems assume 40 different minds learn the same way from the same 45-minute lecture?</em>
            </p>
            <p>
              We began with <strong>Ability</strong> — an assistive suite designed for students with dyslexia, low vision, and auditory processing differences. Then came <strong>Vive-AI</strong>, our Socratic classroom intelligence platform combining AI tutoring for students and real-time diagnostic insights for teachers.
            </p>
            <p>
              Today, Edspire is headquartered in Kigali, Rwanda and developing curriculum-aligned AI tools for the realities of African schools — including resilient low-bandwidth performance, REB/NESA alignment, and teacher-empowerment at the core.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 border-b border-white/10" id="team">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">Leadership</h2>
          <div className="p-6 sm:p-8 rounded-xl bg-navy-900 border border-white/15 flex flex-col md:flex-row items-center gap-8">
            <div className="w-52 h-64 shrink-0 flex items-end justify-center overflow-hidden">
              <img
                src="/founder.png"
                alt="Munezero Aline — Co-Founder"
                className="w-full h-full object-contain object-bottom"
              />
            </div>
            <div className="space-y-3 text-center md:text-left">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">Munezero Aline</h3>
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mt-0.5">Co-Founder & Product Lead</p>
              </div>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Munezero Aline leads product strategy, accessibility design, and pedagogical integration at Edspire. Her work ensures that students across Africa — including those with neurodivergent and sensory needs — have intelligent, adaptive tools available to them.
              </p>
              <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="mailto:munezeromas@gmail.com" className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors border border-blue-500">
                  <Mail className="w-4 h-4" />
                  <span>munezeromas@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/company/edspire-hub/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors border border-white/20">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden border border-white/15 bg-navy-900">
              <div className="aspect-[16/10] overflow-hidden">
                <img src="/hackathon.png" alt="Edspire won GLC AI Hackathon" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 space-y-1">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold">
                  <Award className="w-4 h-4" /> GLC AI Hackathon — 1st Place
                </div>
                <p className="text-xs text-white/70 leading-relaxed">First place recognized by national government and education leaders for AI-powered learning innovation.</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/15 bg-navy-900">
              <div className="aspect-[16/10] overflow-hidden">
                <img src="/Screenshot 2026-07-10 203759.png" alt="Munezero Aline interviewed by RBA" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 space-y-1">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold">
                  <Youtube className="w-4 h-4" /> National Broadcast — RBA TV
                </div>
                <p className="text-xs text-white/70 leading-relaxed">Co-Founder Munezero Aline interviewed by Rwanda Broadcasting Agency at the AI Global Hackathon 2024.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">Watch Our Presentation</h2>
          <div className="rounded-xl overflow-hidden border border-white/15 bg-navy-950">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/PctaPk1tdbk?start=242&enablejsapi=1"
                title="Edspire Feature Presentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
