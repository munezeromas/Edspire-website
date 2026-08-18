import React from 'react'
import {
  Sparkles,
  BookOpen,
  Trophy,
  Flame,
  Zap,
  Target,
  ArrowRight,
  Headphones,
  CheckCircle2,
  HelpCircle,
  Clock,
  Compass
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import StudentDashboard from '../components/demos/StudentDashboard'
import AITutorDemo from '../components/demos/AITutorDemo'
import LearningPath from '../components/demos/LearningPath'

export const Students: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-navy-950 min-h-screen">
      {/* Student Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          For Curious Minds & Ambitious Learners
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          Master any subject. <br />
          <span className="text-gradient">Step by step. At your own pace.</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          No embarrassing questions. No rushed lectures. Edspire gives you an AI companion that explains tricky math, physics, and science concepts until you truly understand.
        </p>

        <div className="flex items-center justify-center gap-3.5 mt-8">
          <Button href="/contact?role=student" size="lg" variant="primary" icon={ArrowRight}>
            Start Learning for Free
          </Button>
          <Button href="#tutor-interactive" size="lg" variant="secondary">
            Try AI Tutor Demo
          </Button>
        </div>
      </div>

      {/* Student Portal Dashboard Live Preview */}
      <section className="section-padding bg-navy-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Your Daily Hub"
            title="Everything You Need to Succeed in One Place"
            subtitle="Track subject progress, check upcoming assignments, review past quizzes, and maintain daily study streaks."
          />
          <div className="mt-10">
            <StudentDashboard />
          </div>
        </div>
      </section>

      {/* Socratic AI Tutor Section */}
      <section className="section-padding bg-navy-950" id="tutor-interactive">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="24/7 AI Companion"
            title="Never Get Stuck on Homework Again"
            subtitle="Ask the AI Tutor to explain complex topics like you're 12, give real-world analogies, or quiz your understanding before exams."
          />
          <div className="mt-10">
            <AITutorDemo initialPreset="quadratic" />
          </div>
        </div>
      </section>

      {/* Personalized Adaptive Learning */}
      <section className="section-padding bg-navy-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tailored Progression"
            title="Learning Paths that Adapt to You"
            subtitle="Never feel rushed or left behind. If you struggle with fractions, Edspire strengthens the basics before unlocking advanced algebra."
          />
          <div className="mt-10">
            <LearningPath />
          </div>
        </div>
      </section>

      {/* Gamification & Streaks */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-navy-900 to-navy-800 border border-blue-500/30 text-center space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
              <Flame className="w-7 h-7 fill-amber-400 animate-pulse" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Earn XP, Level Up, and Unlock Mastery Badges
            </h3>

            <p className="text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
              Study habits stick when they feel rewarding. Complete daily 10-minute challenges, join friendly classroom STEM leagues, and celebrate real academic growth.
            </p>

            <div className="pt-2">
              <Button href="/contact?role=student" size="md" variant="primary" icon={ArrowRight}>
                Join as a Student
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Students
