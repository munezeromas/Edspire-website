import React, { useState } from 'react'
import {
  CheckCircle2,
  Compass,
  ArrowRight,
  Sparkles,
  BookOpen,
  HelpCircle,
  Award,
  Zap,
  TrendingUp
} from 'lucide-react'
import Badge from '../ui/Badge'

const PATH_STEPS = [
  {
    step: '01',
    title: 'Diagnostic Assessment',
    shortDesc: 'Maps prior knowledge and baseline understanding.',
    fullDesc: 'The system initiates a low-stakes 4-question adaptive diagnostic to identify prerequisite mastery before introducing new concepts.',
    icon: Compass,
    tag: 'Step 1'
  },
  {
    step: '02',
    title: 'Concept Understanding',
    shortDesc: 'Interactive multi-modal conceptual introduction.',
    fullDesc: 'Students explore bite-sized explanations supported by analogies, interactive diagrams, and optional audio narration.',
    icon: BookOpen,
    tag: 'Step 2'
  },
  {
    step: '03',
    title: 'Personalized Lesson',
    shortDesc: 'Paced specifically to the student’s learning velocity.',
    fullDesc: 'Lesson difficulty and problem volume adjust dynamically, providing deeper exploration for fast mastery or extra scaffolding where needed.',
    icon: Zap,
    tag: 'Step 3'
  },
  {
    step: '04',
    title: 'Interactive Practice',
    shortDesc: 'Immediate problem solving with scratchpad tools.',
    fullDesc: 'Students apply what they learned through formative questions, formula manipulation, and step-by-step simulations.',
    icon: HelpCircle,
    tag: 'Step 4'
  },
  {
    step: '05',
    title: 'AI Feedback and Hints',
    shortDesc: 'Socratic hints when misconceptions arise.',
    fullDesc: 'Instead of revealing answers immediately, the AI Tutor detects the exact step with error and gives a targeted clue.',
    icon: Sparkles,
    tag: 'Step 5'
  },
  {
    step: '06',
    title: 'Mastery Verification',
    shortDesc: 'Confirms long-term retention and understanding.',
    fullDesc: 'Once the student demonstrates consistent accuracy across problem variations, the topic is certified mastered.',
    icon: Award,
    tag: 'Step 6'
  },
  {
    step: '07',
    title: 'Next Recommendation',
    shortDesc: 'Generates optimal subsequent milestone.',
    fullDesc: 'The learning engine maps mastered skills to the curriculum graph to unlock the next logical topic or real-world STEM challenge.',
    icon: TrendingUp,
    tag: 'Step 7'
  }
]

export const LearningPath: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2)

  return (
    <div className="bg-navy-900 border border-white/15 rounded-xl p-5 sm:p-7 max-w-5xl mx-auto">
      {/* Horizontal Steps Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pb-6 border-b border-white/10">
        {PATH_STEPS.map((item, index) => {
          const Icon = item.icon
          const isActive = activeStep === index
          const isPassed = index < activeStep

          return (
            <button
              key={item.step}
              onClick={() => setActiveStep(index)}
              className={`p-3 rounded-lg border text-left transition-colors relative flex flex-col justify-between ${
                isActive
                  ? 'bg-blue-600 border-blue-400 text-white'
                  : isPassed
                  ? 'bg-navy-950 border-blue-500/30 text-blue-300'
                  : 'bg-navy-950 border-white/10 text-white/50 hover:text-white/80'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold">{item.step}</span>
                {isPassed ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                ) : (
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-white/40'}`} />
                )}
              </div>
              <div className="text-xs font-bold leading-tight">
                {item.title}
              </div>
            </button>
          )
        })}
      </div>

      {/* Selected Step Deep Dive Details */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="blue" size="sm">
              Stage {PATH_STEPS[activeStep].step} of 07
            </Badge>
            <span className="text-xs text-white/40">Interactive Progression Node</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            {PATH_STEPS[activeStep].title}
          </h3>

          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            {PATH_STEPS[activeStep].fullDesc}
          </p>

          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : prev))}
              disabled={activeStep === 0}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-white/70 hover:text-white disabled:opacity-30 transition-colors"
            >
              Previous Stage
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < PATH_STEPS.length - 1 ? prev + 1 : prev))}
              disabled={activeStep === PATH_STEPS.length - 1}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 border border-blue-500 text-white hover:bg-blue-500 disabled:opacity-30 transition-colors"
            >
              Next Stage
            </button>
          </div>
        </div>

        {/* Callout Card */}
        <div className="md:col-span-4 p-5 rounded-lg bg-navy-950 border border-blue-500/20 space-y-2">
          <div className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Adaptive Intelligence Rule
          </div>
          <p className="text-xs text-white/70 leading-relaxed">
            Edspire evaluates diagnostic accuracy and response latency to formulate recommendations, keeping learners in their optimal zone of understanding.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LearningPath
