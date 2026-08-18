import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import Badge from '../ui/Badge'

const FAQS = [
  {
    question: 'What is Edspire?',
    answer: 'Edspire is an emerging African education technology company headquartered in Kigali, Rwanda. We build intelligent educational platforms and universal accessibility tools including Vive-AI (classroom intelligence & AI tutoring) and Ability (assistive tech suite for neurodivergent and low-vision learners).'
  },
  {
    question: 'How do Vive-AI and Ability work together?',
    answer: 'Vive-AI provides the instructional intelligence (Socratic tutoring, diagnostic matrices for teachers, quiz generation), while Ability provides the inclusive multi-modal interface (audio narration, dyslexia-adapted typography, speech recognition) ensuring all students can learn without physical or cognitive barriers.'
  },
  {
    question: 'Can Edspire work in low-bandwidth or offline conditions?',
    answer: 'Yes. Both Vive-AI and Ability are engineered specifically for African infrastructure realities, featuring lightweight asset compression, local device caching, and SMS/text fallback mechanisms for schools with intermittent connectivity.'
  },
  {
    question: 'Which educational curriculum standards does Edspire support?',
    answer: 'Edspire aligns with national curricula across East Africa (including Rwanda Basic Education Board / REB standards and NESA) as well as international competency frameworks like Cambridge and TVET programs.'
  },
  {
    question: 'How can our school or institution start a pilot?',
    answer: 'School principals and department heads can contact our team at edspiree@gmail.com or submit a partnership inquiry via our Contact page to schedule an onboarding session.'
  }
]

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section className="section-padding bg-navy-950 border-b border-white/10" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="blue" size="md" className="mb-3">
            Frequently Asked Questions
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Common Questions
          </h2>
          <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            Everything you need to know about Edspire, our products, and institutional pilots.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx

            return (
              <div
                key={idx}
                className="rounded-lg bg-navy-900 border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-blue-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-blue-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
