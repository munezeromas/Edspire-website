import React from 'react'
import { BookOpen, Award, CheckCircle } from 'lucide-react'

const PROGRAMS = [
  { name: 'Rwanda Basic Education Board', abbr: 'REB' },
  { name: 'National Examination Authority', abbr: 'NESA' },
  { name: 'Cambridge International', abbr: 'Cambridge' },
  { name: 'Rwanda TVET & Polytechnic', abbr: 'TVET / RP' },
  { name: 'Competency-Based Curriculum', abbr: 'CBC East Africa' }
]

export const CurriculumStrip: React.FC = () => {
  return (
    <section className="bg-navy-900 border-b border-white/10 py-10" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/60">
            Aligned with National & International Educational Curricula
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {PROGRAMS.map((prog, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-navy-950 border border-white/10 text-center flex flex-col items-center justify-center space-y-1 hover:border-blue-500/40 transition-colors"
            >
              <span className="text-sm sm:text-base font-extrabold text-blue-400 font-display">
                {prog.abbr}
              </span>
              <span className="text-[11px] text-white/60 font-medium">
                {prog.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurriculumStrip
