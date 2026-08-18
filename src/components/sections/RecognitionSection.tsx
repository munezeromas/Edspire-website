import React from 'react'
import { Award, CheckCircle2, Trophy, Newspaper } from 'lucide-react'
import Badge from '../ui/Badge'

export const RecognitionSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-950 border-b border-white/10" id="recognition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <Badge variant="blue" size="md" className="mb-3">
            Recognition & Validation
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            GLC AI Hackathon Champions
          </h2>
          <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            Edspire was honored with first place at the Global Learning & AI Hackathon, validating our approach to making AI tutoring deeply accessible, curriculum-aligned, and equitable for African classrooms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Item 1: Hackathon Stage Win */}
          <div className="p-5 rounded-xl bg-navy-900 border border-white/15 space-y-4">
            <div className="rounded-lg overflow-hidden border border-white/10 aspect-[16/10] bg-navy-950">
              <img
                src="/hackathon.png"
                alt="Edspire team won GLC AI Hackathon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-400" />
                <h4 className="text-base font-bold text-white">First Place Award Ceremony</h4>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                The Edspire team recognized alongside national leadership for developing scalable AI-driven learning solutions for Africa.
              </p>
            </div>
          </div>

          {/* Item 2: RBA Media Coverage at AI Global Hackathon */}
          <div className="p-5 rounded-xl bg-navy-900 border border-white/15 space-y-4">
            <div className="rounded-lg overflow-hidden border border-white/10 aspect-[16/10] bg-navy-950">
              <img
                src="/Screenshot 2026-07-10 203759.png"
                alt="Munezero Aline interviewed by RBA at AI Global Hackathon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-blue-400" />
                <h4 className="text-base font-bold text-white">National Media Broadcast (RBA)</h4>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Co-Founder Munezero Aline sharing the Edspire vision for accessible AI education during the AI Global Hackathon broadcast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecognitionSection
