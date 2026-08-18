import React, { useState } from 'react'
import {
  Sparkles,
  Compass,
  BookOpen,
  CheckCircle2,
  BarChart3,
  Eye,
  Trophy,
  KeyRound,
  HeartHandshake,
  ArrowRight,
  Play,
  Layers,
  Bot,
  Zap,
  ShieldCheck
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { corePlatformFeatures } from '../data/features'
import AITutorDemo from '../components/demos/AITutorDemo'
import StudentDashboard from '../components/demos/StudentDashboard'
import TeacherDashboard from '../components/demos/TeacherDashboard'
import LearningPath from '../components/demos/LearningPath'
import ClassCodeDemo from '../components/demos/ClassCodeDemo'
import EcosystemDiagram from '../components/demos/EcosystemDiagram'

export const Product: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <div className="pt-28 pb-20 bg-navy-950 min-h-screen">
      {/* Product Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <Badge variant="blue" size="md" className="mb-4">
          Platform Architecture
        </Badge>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          A Complete AI Learning <span className="text-gradient">Ecosystem</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
          Edspire unifies adaptive Socratic AI tutoring, dynamic mastery branching, curriculum-aligned digital libraries, real-time educator intelligence, and universal accessibility.
        </p>

        <div className="flex items-center justify-center gap-3 mt-8">
          <Button href="/contact" size="md" variant="primary" icon={ArrowRight}>
            Request School Pilot
          </Button>
          <Button href="/students" size="md" variant="secondary">
            Try Student App
          </Button>
        </div>
      </div>

      {/* Feature Deep Dive 1: AI Tutor */}
      <section className="section-padding bg-navy-900 border-y border-white/5" id="ai-tutor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <Badge variant="blue" size="sm">Module 01</Badge>
              <h2 className="font-display text-3xl font-bold text-white">
                Socratic AI Learning Companion
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                Most AI tools act as direct answer engines, robbing students of the struggle required for deep conceptual understanding. Edspire’s AI Tutor is pedagogical-first: it breaks down roadblocks, poses scaffolding questions, and uses real-world analogies.
              </p>
              <ul className="space-y-2 text-xs text-white/80 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Step-by-step problem deconstruction</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Multi-level explanation: "Simpler", "Analogy", "Quiz me"</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Audio synthesis for auditory & low-vision learners</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-7">
              <AITutorDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive 2: Personalized Learning & Curriculum */}
      <section className="section-padding bg-navy-950" id="personalized-learning">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Module 02"
            title="Dynamic Mastery & Prerequisite Branching"
            subtitle="Every learner has unique knowledge gaps. Edspire maps STEM subjects into dependency graphs that adapt lesson volume and difficulty automatically."
          />
          <div className="mt-10">
            <LearningPath />
          </div>
        </div>
      </section>

      {/* Feature Deep Dive 3: Teacher Intelligence */}
      <section className="section-padding bg-navy-900 border-y border-white/5" id="teacher-intelligence">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Module 03"
            title="Real-Time Classroom Diagnostics for Teachers"
            subtitle="Eliminate guesswork and grading fatigue. Instantly see which students struggle with specific sub-topics and assign differentiated remedial problem sets."
          />
          <div className="mt-10">
            <TeacherDashboard />
          </div>
        </div>
      </section>

      {/* Feature Deep Dive 4: Class Code Enrollment */}
      <section className="section-padding bg-navy-950" id="classroom-management">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Module 04"
            title="Instant Class Code Onboarding"
            subtitle="Teachers generate clean VIVE codes (e.g. VIVE-7K42) to enroll whole classrooms in under 30 seconds."
          />
          <div className="mt-10">
            <ClassCodeDemo />
          </div>
        </div>
      </section>

      {/* All Core Features Grid */}
      <section className="section-padding bg-navy-900 border-t border-white/5" id="all-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Comprehensive Capabilities"
            title="Every Feature Built for Pedagogical Rigor"
            subtitle="Explore the complete suite of capabilities powering the Edspire platform."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {corePlatformFeatures.map((f) => (
              <div
                key={f.id}
                className="p-6 rounded-2xl bg-navy-950 border border-white/10 space-y-3 flex flex-col justify-between hover:border-blue-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="blue" size="sm">{f.badge || 'Feature'}</Badge>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{f.title}</h3>
                  <p className="text-xs text-blue-400 font-medium uppercase tracking-wider">{f.subtitle}</p>
                  <p className="text-xs sm:text-sm text-white/70 mt-2 leading-relaxed">{f.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                  {f.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
