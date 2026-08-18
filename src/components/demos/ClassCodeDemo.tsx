import React, { useState } from 'react'
import {
  KeyRound,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  School,
  UserCheck,
  ShieldAlert,
  GraduationCap
} from 'lucide-react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

export const ClassCodeDemo: React.FC = () => {
  const [code, setCode] = useState('')
  const [joined, setJoined] = useState(false)
  const [error, setError] = useState(false)

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault()
    const clean = code.trim().toUpperCase()
    if (clean === 'VIVE-7K42' || clean === 'VIVE7K42' || clean === '7K42') {
      setJoined(true)
      setError(false)
    } else if (clean.length >= 4) {
      // Simulate success for any reasonable code input in demo
      setJoined(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  const handleAutofill = () => {
    setCode('VIVE-7K42')
    setError(false)
  }

  const handleReset = () => {
    setJoined(false)
    setCode('')
    setError(false)
  }

  return (
    <div className="bg-navy-950/80 border border-white/10 rounded-2xl p-5 sm:p-8 max-w-4xl mx-auto backdrop-blur-xl">
      {/* 5-Step Visual Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8">
        <div className="p-3.5 rounded-xl bg-navy-900 border border-white/5 text-center flex flex-col items-center justify-between">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2">
            <School className="w-4 h-4" />
          </div>
          <div className="text-xs font-bold text-white">1. Teacher</div>
          <div className="text-[11px] text-white/60">Creates class</div>
        </div>

        <div className="hidden sm:flex items-center justify-center text-blue-400">
          <ArrowRight className="w-4 h-4" />
        </div>

        <div className="p-3.5 rounded-xl bg-navy-900 border border-blue-500/30 text-center flex flex-col items-center justify-between shadow-lg shadow-blue-500/10">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-2">
            <KeyRound className="w-4 h-4" />
          </div>
          <div className="text-xs font-bold text-blue-300">2. Generates Code</div>
          <code className="text-[11px] font-mono text-white bg-white/10 px-2 py-0.5 rounded mt-1">
            VIVE-7K42
          </code>
        </div>

        <div className="hidden sm:flex items-center justify-center text-blue-400">
          <ArrowRight className="w-4 h-4" />
        </div>

        <div className="p-3.5 rounded-xl bg-navy-900 border border-white/5 text-center flex flex-col items-center justify-between">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2">
            <UserCheck className="w-4 h-4" />
          </div>
          <div className="text-xs font-bold text-white">3. Student</div>
          <div className="text-[11px] text-white/60">Enrolls instantly</div>
        </div>
      </div>

      {/* Interactive Join Simulation Widget */}
      <div className="max-w-md mx-auto bg-navy-900 border border-white/10 rounded-xl p-5 sm:p-6 text-center">
        {!joined ? (
          <form onSubmit={handleJoin} className="space-y-4">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-white">
                Test Classroom Code Join
              </h4>
              <p className="text-xs text-white/60">
                Enter teacher code below or click autofill to test the workflow.
              </p>
            </div>

            <div className="space-y-2">
              <input
                type="text"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value.toUpperCase())
                  setError(false)
                }}
                placeholder="e.g. VIVE-7K42"
                maxLength={10}
                className="w-full text-center font-mono text-lg uppercase tracking-widest bg-navy-950 border border-white/15 rounded-xl py-2.5 px-4 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
              />
              {error && (
                <p className="text-xs text-rose-400">Please enter a valid code like VIVE-7K42</p>
              )}
            </div>

            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={handleAutofill}
                className="px-3 py-2 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              >
                Autofill VIVE-7K42
              </button>
              <Button type="submit" size="sm" variant="primary" icon={ArrowRight}>
                Join Class
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-4 py-2 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <Badge variant="success" size="sm">Class Joined Successfully</Badge>
              <h4 className="text-lg font-bold text-white mt-1">Class 9A — STEM Core</h4>
              <p className="text-xs text-white/60 mt-0.5">Instructor: Mr. Jean-Paul Habimana · Kigali</p>
            </div>

            <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-white/70">
              Assigned topics: Quadratic Equations, Newtonian Mechanics, Algorithm Flowcharts.
            </div>

            <button
              onClick={handleReset}
              className="text-xs text-blue-400 hover:text-blue-300 font-semibold"
            >
              Test another code ↺
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ClassCodeDemo
