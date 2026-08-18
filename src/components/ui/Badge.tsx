import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'blue' | 'neutral' | 'success' | 'warning' | 'purple'
  size?: 'sm' | 'md'
  className?: string
  dot?: boolean
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  className = '',
  dot = false
}) => {
  const variantStyles = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/25',
    neutral: 'bg-white/5 text-white/80 border-white/10',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
    purple: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/25'
  }

  const dotStyles = {
    blue: 'bg-blue-400',
    neutral: 'bg-white/60',
    success: 'bg-emerald-400',
    warning: 'bg-amber-400',
    purple: 'bg-indigo-400'
  }

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5',
    md: 'text-xs px-3 py-1'
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold rounded-full border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotStyles[variant]}`} />}
      {children}
    </span>
  )
}

export default Badge
