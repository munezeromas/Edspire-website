import React from 'react'

interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  titleClassName?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = ''
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  }

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          {badge}
        </div>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
