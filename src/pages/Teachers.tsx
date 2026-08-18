import React from 'react'
import {
  Users,
  Sparkles,
  BarChart3,
  CheckCircle2,
  KeyRound,
  FileSpreadsheet,
  ArrowRight,
  PlusCircle,
  HelpCircle,
  BrainCircuit
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import TeacherDashboard from '../components/demos/TeacherDashboard'
import ClassCodeDemo from '../components/demos/ClassCodeDemo'

export const Teachers: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-navy-950 min-h-screen">
      {/* Teacher Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Users className="w-3.5 h-3.5" />
          For Dedicated Educators & Instructors
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          Teach with clarity. <br />
          <span className="text-gradient">Understand every student’s learning curve.</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
          Edspire replaces grading friction with real-time diagnostic matrices. Spot struggling students early, create 1-click remedial assignments, and foster genuine classroom engagement.
        </p>

        <div className="flex items-center justify-center gap-3.5 mt-8">
          <Button href="/contact?role=teacher" size="lg" variant="primary" icon={PlusCircle}>
            Start a Class
          </Button>
          <Button href="#dashboard-preview" size="lg" variant="secondary">
            View Analytics Matrix
          </Button>
        </div>
      </div>

      {/* Live Teacher Dashboard Demo */}
      <section className="section-padding bg-navy-900 border-y border-white/5" id="dashboard-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Classroom Intelligence"
            title="Actionable Insights, Not Meaningless Numbers"
            subtitle="Explore how Edspire turns thousands of practice interactions into clear intervention recommendations for your class."
          />
          <div className="mt-10">
            <TeacherDashboard />
          </div>
        </div>
      </section>

      {/* VIVE Class Code Enrollment System */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Zero IT Overhead"
            title="Create a Class in 10 Seconds"
            subtitle="Generate a unique VIVE code like VIVE-7K42 and have your entire grade enrolled instantly on any device."
          />
          <div className="mt-10">
            <ClassCodeDemo />
          </div>
        </div>
      </section>

      {/* 3 Key Educator Pillars */}
      <section className="section-padding bg-navy-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-navy-950 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">AI Remedial Generation</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                When 6 students struggle with quadratic factorization, generate a tailored 5-minute visual worksheet in seconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-950 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Formative Mastery Matrices</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                See sub-topic mastery rates across terms without waiting for stressful end-of-semester exam results.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-950 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Empowering Differentiated Learning</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Assign enrichment problems to fast learners while providing extra foundational support to those who need it.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact?role=teacher" size="lg" variant="primary" icon={ArrowRight}>
              Create Your First Free Class
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Teachers
