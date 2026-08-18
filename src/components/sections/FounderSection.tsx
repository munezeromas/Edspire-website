import React from 'react'
import { Linkedin, Mail, ExternalLink } from 'lucide-react'
import Button from '../ui/Button'

export const FounderSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-900 border-b border-white/10" id="founder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Meet the Founder
          </h2>
          <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            Leading product design, accessibility engineering, and pedagogical innovation at Edspire.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-xl border border-white/15 bg-navy-950 p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center gap-8 lg:gap-10">
          {/* Transparent cutout portrait */}
          <div className="w-52 h-64 sm:w-60 sm:h-72 shrink-0 flex items-end justify-center overflow-hidden">
            <img
              src="/founder.png"
              alt="Munezero Aline — Co-Founder"
              className="w-full h-full object-contain object-bottom"
            />
          </div>

          {/* Details */}
          <div className="space-y-4 text-center md:text-left">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Munezero Aline
              </h3>
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mt-1">
                Co-Founder & Product Lead
              </p>
            </div>

            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              Munezero Aline spearheads product development, assistive technology engineering, and curriculum alignment at Edspire. Her work focuses on bridging digital accessibility gaps so that neurodivergent learners, auditory students, and youth across Africa have equal access to high-quality STEM education.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="mailto:munezeromas@gmail.com"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors border border-blue-500"
              >
                <Mail className="w-4 h-4" />
                <span>munezeromas@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/company/edspire-hub/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors border border-white/20"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-white/40" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderSection
