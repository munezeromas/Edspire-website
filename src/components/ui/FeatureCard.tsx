import React from 'react'
import * as LucideIcons from 'lucide-react'
import Badge from './Badge'

interface FeatureCardProps {
  title: string
  subtitle?: string
  description: string
  iconName?: string
  badge?: string
  highlights?: string[]
  className?: string
  onClick?: () => void
  interactive?: boolean
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  description,
  iconName = 'Sparkles',
  badge,
  highlights,
  className = '',
  onClick,
  interactive = false
}) => {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconName] || LucideIcons.BookOpen

  return (
    <div
      onClick={onClick}
      className={`p-6 sm:p-7 rounded-xl bg-navy-800/80 border border-white/10 hover:border-blue-500/40 transition-colors flex flex-col justify-between ${
        interactive ? 'cursor-pointer' : ''
      } ${className}`}
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <IconComponent className="w-5 h-5" />
          </div>
          {badge && <Badge variant="blue" size="sm">{badge}</Badge>}
        </div>

        <h3 className="font-display text-lg font-bold text-white">
          {title}
        </h3>

        {subtitle && (
          <p className="text-xs font-semibold text-blue-400 mt-1 uppercase tracking-wider">
            {subtitle}
          </p>
        )}

        <p className="text-xs sm:text-sm text-white/70 mt-3 leading-relaxed">
          {description}
        </p>
      </div>

      {highlights && highlights.length > 0 && (
        <div className="mt-5 pt-4 border-t border-white/5 space-y-2">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-white/80">
              <LucideIcons.Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FeatureCard
