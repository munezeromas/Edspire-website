import React, { useState } from 'react'
import {
  GraduationCap,
  Users,
  HeartHandshake,
  Building2,
  Sparkles,
  BookOpen,
  BarChart3,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import Badge from '../ui/Badge'

const NODES = [
  {
    id: 'students',
    title: 'Students',
    icon: GraduationCap,
    role: 'Active Learners',
    description: 'Engage with AI tutoring, personalized lesson branching, audio accessibility, and gamified progress streaks.',
    color: 'border-blue-500/40 bg-blue-950/30 text-blue-400'
  },
  {
    id: 'teachers',
    title: 'Teachers',
    icon: Users,
    role: 'Instructional Leaders',
    description: 'Gain real-time visibility into learning bottlenecks, automated homework grading, and instant remedial generators.',
    color: 'border-indigo-500/40 bg-indigo-950/30 text-indigo-400'
  },
  {
    id: 'parents',
    title: 'Parents',
    icon: HeartHandshake,
    role: 'Supportive Guardians',
    description: 'Receive non-invasive weekly digests highlighting strengths, study habits, and suggested home discussions.',
    color: 'border-emerald-500/40 bg-emerald-950/30 text-emerald-400'
  },
  {
    id: 'schools',
    title: 'School Leaders',
    icon: Building2,
    role: 'Institutional Growth',
    description: 'Oversee cohort-level mastery, curriculum benchmark alignment, and school-wide equity diagnostics.',
    color: 'border-amber-500/40 bg-amber-950/30 text-amber-400'
  }
]

export const EcosystemDiagram: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState(0)

  return (
    <div className="bg-navy-950/90 border border-white/10 rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto backdrop-blur-xl">
      {/* Central Connector Box */}
      <div className="text-center max-w-lg mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Edspire Unified Intelligence Core
        </div>
        <h4 className="text-xl font-bold font-display text-white">
          Connecting Every Stakeholder in the Learning Journey
        </h4>
      </div>

      {/* 4 Interactive Stakeholder Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {NODES.map((node, idx) => {
          const Icon = node.icon
          const isSelected = selectedNode === idx

          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(idx)}
              className={`p-4 rounded-xl border text-left transition-all ${node.color} ${
                isSelected ? 'ring-2 ring-blue-400 scale-[1.02] shadow-lg' : 'hover:opacity-90 opacity-70'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-white/50">
                  {node.role}
                </span>
              </div>
              <h5 className="font-bold text-white text-base">{node.title}</h5>
            </button>
          )
        })}
      </div>

      {/* Detail panel for selected stakeholder */}
      <div className="p-5 rounded-xl bg-navy-900 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Role Focus: {NODES[selectedNode].title}
            </span>
          </div>
          <p className="text-sm text-white/80 leading-relaxed">
            {NODES[selectedNode].description}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-xs text-white/70">
            Connected via Real-Time API
          </div>
        </div>
      </div>
    </div>
  )
}

export default EcosystemDiagram
