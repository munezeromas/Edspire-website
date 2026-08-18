import React, { useState } from 'react'
import {
  Users,
  BarChart3,
  CheckCircle,
  AlertCircle,
  Sparkles,
  ArrowRight,
  PlusCircle,
  TrendingUp,
  Copy,
  Check
} from 'lucide-react'
import { teacherMockClass, teacherInsightsMock } from '../../data/mockData'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

export const TeacherDashboard: React.FC = () => {
  const [actionAlert, setActionAlert] = useState<string | null>(null)
  const [copiedCode, setCopiedCode] = useState(false)

  const handleAction = (title: string, actionName: string) => {
    setActionAlert(`Executing Action: "${actionName}" for ${title}`)
    setTimeout(() => {
      setActionAlert(null)
    }, 3500)
  }

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(teacherMockClass.code)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  return (
    <div className="bg-navy-900 border border-white/15 rounded-xl p-4 sm:p-6 lg:p-7 max-w-5xl mx-auto w-full">
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="font-display text-base sm:text-lg font-bold text-white">
              {teacherMockClass.name}
            </h3>
            <Badge variant="blue" size="sm">{teacherMockClass.grade}</Badge>
          </div>
          <p className="text-xs text-white/60 mt-0.5">
            Real-time formative analytics and classroom intelligence
          </p>
        </div>

        {/* Class Code Pill with copy */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-950 border border-blue-500/30 text-xs">
            <span className="text-white/50">Class Code:</span>
            <code className="font-mono font-bold text-blue-400 tracking-wider">
              {teacherMockClass.code}
            </code>
            <button
              onClick={handleCopyCode}
              className="p-1 text-white/60 hover:text-white transition-colors"
              title="Copy code"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <Button size="sm" variant="secondary" icon={PlusCircle}>
            New Assignment
          </Button>
        </div>
      </div>

      {/* Action Trigger feedback toast */}
      {actionAlert && (
        <div className="my-4 p-3 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-200 text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
            <span>{actionAlert}</span>
          </div>
          <span className="text-[10px] text-blue-300 font-semibold uppercase">Action Dispatched</span>
        </div>
      )}

      {/* 4 Key Metrics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 my-5">
        <div className="p-4 rounded-lg bg-navy-950 border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-white/50 text-xs">
            <span>Enrolled Students</span>
            <Users className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-bold font-display text-white">
            {teacherMockClass.studentsCount}
          </div>
          <div className="text-[11px] text-emerald-400 font-medium">100% active this week</div>
        </div>

        <div className="p-4 rounded-lg bg-navy-950 border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-white/50 text-xs">
            <span>Average Mastery</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold font-display text-white">
            {teacherMockClass.avgMastery}%
          </div>
          <div className="text-[11px] text-emerald-400 font-medium">+5.2% vs baseline</div>
        </div>

        <div className="p-4 rounded-lg bg-navy-950 border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-white/50 text-xs">
            <span>Assignment Completion</span>
            <CheckCircle className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-bold font-display text-white">
            {teacherMockClass.completionRate}%
          </div>
          <div className="text-[11px] text-white/50">38/42 submitted on time</div>
        </div>

        <div className="p-4 rounded-lg bg-navy-950 border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-white/50 text-xs">
            <span>Need Support</span>
            <AlertCircle className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold font-display text-white">
            {teacherMockClass.needingSupport} Students
          </div>
          <div className="text-[11px] text-amber-400">Flagged by Diagnostic</div>
        </div>
      </div>

      {/* Classroom Insights Cards */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Classroom Formative Insights
          </h4>
          <span className="text-[11px] text-white/40">Live Analysis</span>
        </div>

        <div className="space-y-2.5">
          {teacherInsightsMock.map((insight) => {
            const statusConfig = {
              urgent: {
                label: 'Attention Needed',
                badgeStyle: 'bg-rose-500/10 text-rose-300 border-rose-500/20'
              },
              warning: {
                label: 'Pending',
                badgeStyle: 'bg-amber-500/10 text-amber-300 border-amber-500/20'
              },
              positive: {
                label: 'Mastered',
                badgeStyle: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
              }
            }

            const config = statusConfig[insight.type]

            return (
              <div
                key={insight.id}
                className="p-4 rounded-lg bg-navy-950 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${config.badgeStyle}`}>
                      {config.label}
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-white">
                      {insight.title}
                    </h5>
                    <span className="text-[10px] font-medium text-white/50">
                      {insight.topic}
                    </span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {insight.description}
                  </p>
                </div>

                <button
                  onClick={() => handleAction(insight.title, insight.action)}
                  className="shrink-0 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                >
                  <span>{insight.action}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboard
