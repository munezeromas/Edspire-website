import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import { Flame, Zap, Trophy, Award, Target, Star, Shield, Sparkles } from 'lucide-react'
import Badge from '../ui/Badge'

export const GamificationSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden" id="gamification">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Intrinsic Motivation"
          title="Progress should feel rewarding."
          subtitle="Meaningful mastery streaks, skill milestones, and lightweight daily challenges celebrate consistent study habits rather than high-stakes exam anxiety."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* Streak Card */}
          <div className="p-6 rounded-2xl bg-navy-950/80 border border-amber-500/30 space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Flame className="w-5 h-5 fill-amber-400 animate-pulse" />
              </div>
              <Badge variant="warning" size="sm">Consistency</Badge>
            </div>
            <div className="text-2xl font-bold font-display text-white">
              🔥 12-Day Streak
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Maintained by completing at least one 10-minute diagnostic session each morning.
            </p>
          </div>

          {/* XP & Level Card */}
          <div className="p-6 rounded-2xl bg-navy-950/80 border border-blue-500/30 space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Zap className="w-5 h-5" />
              </div>
              <Badge variant="blue" size="sm">+120 XP Today</Badge>
            </div>
            <div className="text-2xl font-bold font-display text-white">
              Level 8 Scholar
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Earn XP by solving practice problems, formulating thoughtful questions, and helping peers.
            </p>
          </div>

          {/* Badges Card */}
          <div className="p-6 rounded-2xl bg-navy-950/80 border border-indigo-500/30 space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Trophy className="w-5 h-5" />
              </div>
              <Badge variant="purple" size="sm">Milestone</Badge>
            </div>
            <div className="text-2xl font-bold font-display text-white">
              🏆 Science Explorer
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Unlocked upon completing all 6 virtual laboratory simulations in physics mechanics.
            </p>
          </div>

          {/* Daily Quests Card */}
          <div className="p-6 rounded-2xl bg-navy-950/80 border border-emerald-500/30 space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Target className="w-5 h-5" />
              </div>
              <Badge variant="success" size="sm">Daily Quests</Badge>
            </div>
            <div className="text-2xl font-bold font-display text-white">
              3/3 Complete
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Bite-sized micro-challenges designed to reinforce previous lessons without fatigue.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GamificationSection
