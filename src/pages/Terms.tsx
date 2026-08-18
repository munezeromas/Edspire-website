import React from 'react'
import { FileCheck, BookOpen, AlertCircle } from 'lucide-react'
import Badge from '../components/ui/Badge'

export const Terms: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-navy-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Badge variant="blue" size="md" className="mb-4">
          Legal Agreement
        </Badge>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-xs text-white/50 mb-8">
          Last Updated: August 2026 · Edspire Rwanda Ltd
        </p>

        <div className="space-y-8 text-white/80 text-sm leading-relaxed">
          <section className="p-6 rounded-xl bg-navy-900 border border-white/10 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-blue-400" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Edspire learning platform, teacher portal, or mobile interfaces, you agree to abide by these Terms of Service. If you are registering on behalf of a school or educational institution, you represent that you possess appropriate administrative authority.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Permitted Educational Use</h2>
            <p>
              Edspire is provided to foster academic inquiry, STEM practice, teacher intelligence, and accessible learning. Users agree not to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-white/70">
              <li>Attempt to reverse-engineer, exploit, or bypass platform rate limits or security layers.</li>
              <li>Upload malicious code, harmful media, or non-educational content into classroom dialogues.</li>
              <li>Impersonate teachers, institutional staff, or fellow students using counterfeit class codes.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Intellectual Property</h2>
            <p>
              All proprietary algorithms, UI components, pedagogical workflows, and platform brand assets belong exclusively to Edspire Rwanda Ltd. Curriculum content supplied by partnering ministries or educational publishers remains the property of their respective copyright holders.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Disclaimers and Pedagogical Scope</h2>
            <p>
              Edspire’s AI Tutor is an instructional assistive companion. It is designed to scaffold student reasoning and provide formative guidance; it does not replace certified classroom educators or official national examination grading boards.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Terms
