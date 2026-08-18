import React from 'react'
import {
  HeartHandshake,
  Flame,
  CheckCircle2,
  Calendar,
  MessageCircle,
  ShieldCheck
} from 'lucide-react'
import { parentMockData } from '../../data/mockData'
import ProgressBar from '../ui/ProgressBar'
import Badge from '../ui/Badge'

export const ParentDashboard: React.FC = () => {
  return (
    <div className="bg-navy-900 border border-white/15 rounded-xl p-4 sm:p-6 lg:p-7 max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-base sm:text-lg font-bold text-white">
                {parentMockData.childName}'s Learning Overview
              </h3>
              <Badge variant="blue" size="sm">{parentMockData.grade}</Badge>
            </div>
            <p className="text-xs text-white/60">
              Weekly progress report · Last activity {parentMockData.lastActive}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 text-blue-400" />
            <span>{parentMockData.streakDays} Day Study Habit</span>
          </div>
        </div>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-5">
        <div className="p-4 rounded-lg bg-navy-950 border border-white/10">
          <div className="text-xs text-white/50 mb-1">Activities Completed</div>
          <div className="text-xl font-bold font-display text-white">
            {parentMockData.completedActivities} this week
          </div>
          <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mt-1">
            <CheckCircle2 className="w-3 h-3" /> All tasks on schedule
          </div>
        </div>

        <div className="p-4 rounded-lg bg-navy-950 border border-white/10">
          <div className="text-xs text-white/50 mb-1">Recommended Home Review</div>
          <div className="text-sm font-bold font-display text-blue-300">
            {parentMockData.recommendedFocus}
          </div>
          <div className="text-[11px] text-white/60 mt-1">
            Practical application problems
          </div>
        </div>

        <div className="p-4 rounded-lg bg-navy-950 border border-white/10">
          <div className="text-xs text-white/50 mb-1">Data Privacy Guarantee</div>
          <div className="text-xs font-semibold text-emerald-300 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Student Data Protected
          </div>
          <div className="text-[10px] text-white/50 mt-1">
            Zero third-party advertising or profiling
          </div>
        </div>
      </div>

      {/* Subject Mastery Progress Breakdown */}
      <div className="space-y-3 bg-navy-950 p-4 rounded-lg border border-white/10">
        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
          Subject Conceptual Mastery
        </h4>
        <div className="space-y-3">
          {parentMockData.subjects.map((subj) => (
            <div key={subj.name} className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white/90">{subj.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-emerald-400">{subj.trend}</span>
                  <span className="font-bold text-blue-300">{subj.score}%</span>
                </div>
              </div>
              <ProgressBar
                value={subj.score}
                showPercentage={false}
                color="from-blue-600 to-blue-400"
                height="sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Teacher Constructive Note */}
      <div className="mt-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs flex items-start gap-3">
        <MessageCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-blue-300 block mb-0.5">Note from Educator:</span>
          <p className="text-white/80 leading-relaxed">
            "{parentMockData.teacherNote}"
          </p>
        </div>
      </div>
    </div>
  )
}

export default ParentDashboard
