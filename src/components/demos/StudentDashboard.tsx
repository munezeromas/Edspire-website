import React, { useState } from 'react'
import {
  Flame,
  Zap,
  Trophy,
  Award,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Clock,
  Play,
  BrainCircuit
} from 'lucide-react'
import { studentMockData } from '../../data/mockData'
import ProgressBar from '../ui/ProgressBar'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

export const StudentDashboard: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [tasks, setTasks] = useState(studentMockData.tasks)
  const [currentXP, setCurrentXP] = useState(studentMockData.xp)

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(t => {
        if (t.id === id) {
          const updated = !t.completed
          if (updated) {
            setCurrentXP(xp => xp + t.xpReward)
          } else {
            setCurrentXP(xp => xp - t.xpReward)
          }
          return { ...t, completed: updated }
        }
        return t
      })
    )
  }

  return (
    <div className="bg-navy-900 border border-white/15 rounded-xl p-4 sm:p-6 lg:p-7 max-w-5xl mx-auto w-full">
      {/* Top Banner / Welcome Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div className="flex items-center gap-3.5">
          <div className="relative">
            <div className="w-11 h-11 rounded-full overflow-hidden border border-blue-500/40">
              <img
                src="/founder.jpg"
                alt="Aline"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = studentMockData.avatar
                }}
              />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border border-navy-950 rounded-full" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-base sm:text-lg font-bold text-white">
                Welcome back, {studentMockData.name}
              </h3>
              <Badge variant="blue" size="sm">Level {studentMockData.level}</Badge>
            </div>
            <p className="text-xs text-white/60 mt-0.5">
              Personalized STEM Track
            </p>
          </div>
        </div>

        {/* Metric pills */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 text-blue-400" />
            <span>{studentMockData.streakDays} Day Streak</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>{currentXP.toLocaleString()} XP</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-semibold">
            <Trophy className="w-3.5 h-3.5 text-blue-400" />
            <span>{studentMockData.badgesCount} Badges</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left Column: Subjects & Continue Learning (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Continue Learning Featured Card */}
          <div className="rounded-xl bg-navy-950 border border-blue-500/30 p-5">
            <div className="flex items-center justify-between gap-2 mb-3">
              <Badge variant="blue" size="sm">Continue Learning</Badge>
              <span className="text-xs text-white/50 flex items-center gap-1">
                <Clock className="w-3 h-3" /> ~15 min left
              </span>
            </div>

            <h4 className="text-sm sm:text-base font-bold text-white">
              Quadratic Formula and Vertex Form
            </h4>
            <p className="text-xs text-white/70 mt-1 mb-4 leading-relaxed">
              You completed factoring trinomials yesterday. Next step is understanding the vertex coordinate equation.
            </p>

            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 max-w-xs">
                <ProgressBar value={72} label="Lesson Progress" height="sm" />
              </div>
              <Button size="sm" variant="primary" icon={Play} className="shrink-0">
                Resume
              </Button>
            </div>
          </div>

          {/* Subject Mastery Progress Bars */}
          <div className="bg-navy-950 border border-white/10 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-400" />
                Subject Mastery Overview
              </h4>
              <span className="text-xs text-blue-400 font-medium">
                Term 2 Curriculum
              </span>
            </div>

            <div className="space-y-3">
              {studentMockData.subjects.map((subj) => (
                <div key={subj.name} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-white/90">{subj.name}</span>
                    <span className="font-bold text-blue-400">{subj.progress}%</span>
                  </div>
                  <ProgressBar
                    value={subj.progress}
                    showPercentage={false}
                    color="from-blue-600 to-blue-400"
                    height="sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: AI Tutor Recommendation & Interactive Tasks (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* AI Tutor Recommendation Box */}
          <div className="bg-navy-950 border border-blue-500/30 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <BrainCircuit className="w-3.5 h-3.5" />
              </div>
              <h5 className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                AI Tutor Recommendation
              </h5>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              "Aline, we detected hesitation on graphing negative parabola slopes. Let us do a 3-question visual drill."
            </p>
            <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/5">
              <span className="text-[11px] text-blue-300 font-semibold">+30 Bonus XP</span>
              <button className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
                Start 3-min drill <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Interactive Tasks List */}
          <div className="bg-navy-950 border border-white/10 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                Tasks and Quizzes
              </h4>
              <span className="text-[11px] text-white/40">Select to complete</span>
            </div>

            <div className="space-y-2">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`p-2.5 rounded-lg border transition-colors cursor-pointer flex items-start gap-2.5 ${
                    task.completed
                      ? 'bg-white/5 border-white/5 opacity-60'
                      : 'bg-navy-900 border-white/10 hover:border-blue-500/40'
                  }`}
                >
                  <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                    task.completed ? 'bg-blue-600 border-blue-600 text-white' : 'border-white/30'
                  }`}>
                    {task.completed && <CheckCircle2 className="w-3 h-3" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-medium ${task.completed ? 'line-through text-white/50' : 'text-white'}`}>
                      {task.title}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5 text-[10px] text-white/40">
                      <span>{task.subject}</span>
                      <span>•</span>
                      <span>{task.due}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-blue-400 shrink-0">
                    +{task.xpReward} XP
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements showcase */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-navy-950 border border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="font-semibold text-white">Latest Milestone: Science Explorer</span>
            </div>
            <span className="text-[11px] text-white/60">Unlocked Grade 9 Lab</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
