import React from 'react'
import { ShieldCheck, Lock, EyeOff, Server, FileText } from 'lucide-react'
import Badge from '../components/ui/Badge'

export const Privacy: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-navy-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Badge variant="blue" size="md" className="mb-4">
          Trust and Compliance
        </Badge>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-white/50 mb-8">
          Last Updated: August 2026 · Edspire Rwanda Ltd
        </p>

        <div className="space-y-8 text-white/80 text-sm leading-relaxed">
          <section className="p-6 rounded-xl bg-navy-900 border border-white/10 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              1. Our Foundational Privacy Philosophy
            </h2>
            <p>
              Edspire is designed specifically for educational institutions, educators, families, and students. We believe learning data is sensitive and confidential. We do not sell student personal data, we do not build behavioral advertising profiles, and we treat classroom data with institutional care.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
            <p>
              We only collect data necessary to deliver personalized educational experiences:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-white/70">
              <li><strong>Account Identifiers:</strong> Name, role (student, teacher, parent), school affiliation, and contact email.</li>
              <li><strong>Learning Interactions:</strong> Socratic question prompts, practice quiz scores, sub-topic response times, and mastery milestones.</li>
              <li><strong>Technical Diagnostics:</strong> Device type, browser compatibility, and network bandwidth indicators.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. How AI Models Process Student Data</h2>
            <p>
              Our Socratic AI tutoring engine processes dialogue strictly within encrypted session boundaries to scaffold explanations. Student conversations are not used to train external public foundation models.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. School and Parental Rights</h2>
            <p>
              School administrators and verified parents maintain full rights to request export, correction, or deletion of learner records.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Contact Our Data Protection Officer</h2>
            <p>
              For any privacy inquiries or compliance requests, reach our data team at: <br />
              <strong className="text-blue-400">privacy@edspire.rw</strong> · Kigali, Rwanda
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Privacy
