import React from 'react'
import {
  GraduationCap,
  Users,
  Building2,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  BarChart3
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import StudentDashboard from '../components/demos/StudentDashboard'
import TeacherDashboard from '../components/demos/TeacherDashboard'
import ParentDashboard from '../components/demos/ParentDashboard'
import EcosystemDiagram from '../components/demos/EcosystemDiagram'

export const Solutions: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-navy-950 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <Badge variant="blue" size="md" className="mb-4">
          Tailored Solutions
        </Badge>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          Intelligent Learning for <span className="text-gradient">Every Stakeholder</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
          Whether you are a student discovering your study rhythm, a teacher running a 40-student classroom, a parent supporting homework, or a school principal modernizing STEM education.
        </p>

        {/* Quick Anchor Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <a
            href="#students"
            className="px-4 py-2 rounded-xl bg-navy-900 border border-white/10 text-xs font-semibold text-white/80 hover:text-white hover:border-blue-500/40 transition-colors"
          >
            For Students ↓
          </a>
          <a
            href="#teachers"
            className="px-4 py-2 rounded-xl bg-navy-900 border border-white/10 text-xs font-semibold text-white/80 hover:text-white hover:border-blue-500/40 transition-colors"
          >
            For Teachers ↓
          </a>
          <a
            href="#parents"
            className="px-4 py-2 rounded-xl bg-navy-900 border border-white/10 text-xs font-semibold text-white/80 hover:text-white hover:border-blue-500/40 transition-colors"
          >
            For Parents ↓
          </a>
          <a
            href="#schools"
            className="px-4 py-2 rounded-xl bg-navy-900 border border-white/10 text-xs font-semibold text-white/80 hover:text-white hover:border-blue-500/40 transition-colors"
          >
            For Schools ↓
          </a>
        </div>
      </div>

      {/* 1. For Students */}
      <section className="section-padding bg-navy-900 border-y border-white/5" id="students">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <Badge variant="blue" size="sm" className="mb-2">For Students</Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Learn at Your Own Pace, Without Fear of Judgment
            </h2>
            <p className="text-sm sm:text-base text-white/70 mt-2 leading-relaxed">
              Edspire gives students a safe, personalized space to ask infinite questions, practice difficult math and science concepts, and celebrate daily study streaks.
            </p>
          </div>

          <StudentDashboard />

          <div className="mt-8 flex justify-center">
            <Button href="/students" size="md" variant="primary" icon={ArrowRight}>
              Explore Student Features
            </Button>
          </div>
        </div>
      </section>

      {/* 2. For Teachers */}
      <section className="section-padding bg-navy-950" id="teachers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <Badge variant="blue" size="sm" className="mb-2">For Teachers</Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Understand Every Learner in Your Classroom
            </h2>
            <p className="text-sm sm:text-base text-white/70 mt-2 leading-relaxed">
              Eliminate hours spent manually grading standard homework. Get live alerts showing exact sub-topic misconceptions so you can focus class time on deep discussions and high-impact interventions.
            </p>
          </div>

          <TeacherDashboard />

          <div className="mt-8 flex justify-center">
            <Button href="/teachers" size="md" variant="primary" icon={ArrowRight}>
              Explore Teacher Tools
            </Button>
          </div>
        </div>
      </section>

      {/* 3. For Parents */}
      <section className="section-padding bg-navy-900 border-y border-white/5" id="parents">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <Badge variant="blue" size="sm" className="mb-2">For Parents</Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Support Your Child's Learning Journey with Clarity
            </h2>
            <p className="text-sm sm:text-base text-white/70 mt-2 leading-relaxed">
              Gain transparent weekly visibility into what concepts your child is exploring, celebrate their learning streaks, and receive thoughtful discussion questions without invasive surveillance.
            </p>
          </div>

          <ParentDashboard />

          <div className="mt-8 flex justify-center">
            <Button href="/contact?role=parent" size="md" variant="primary" icon={ArrowRight}>
              Sign Up for Parent Weekly Digest
            </Button>
          </div>
        </div>
      </section>

      {/* 4. For Schools */}
      <section className="section-padding bg-navy-950" id="schools">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <Badge variant="blue" size="sm" className="mb-2">For Schools</Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Build a Connected, Modern STEM Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-white/70 mt-2 leading-relaxed">
              Equip your school with curriculum-aligned digital textbooks, automated school-wide analytics, and teacher-empowering tools that require zero IT overhaul.
            </p>
          </div>

          <EcosystemDiagram />

          <div className="mt-8 flex justify-center">
            <Button href="/schools" size="md" variant="primary" icon={ArrowRight}>
              Schedule School Leadership Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Solutions
