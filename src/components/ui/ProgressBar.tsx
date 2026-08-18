import React from 'react'

interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  showPercentage?: boolean
  color?: string
  height?: 'sm' | 'md' | 'lg'
  className?: string
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showPercentage = true,
  color = 'from-blue-600 to-blue-400',
  height = 'md',
  className = ''
}) => {
  const percentage = Math.min(Math.max(Math.round((value / max) * 100), 0), 100)

  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  }

  return (
    <div className={`w-full ${className}`}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center text-xs text-white/70 mb-1.5 font-medium">
          {label && <span>{label}</span>}
          {showPercentage && <span className="font-semibold text-white/90">{percentage}%</span>}
        </div>
      )}
      <div className={`w-full rounded-full bg-white/10 overflow-hidden ${heightClasses[height]}`}>
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-700 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
