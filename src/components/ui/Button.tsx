import React from 'react'
import { Link } from 'react-router-dom'
import { LucideIcon } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  href?: string
  external?: boolean
  className?: string
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  href,
  external = false,
  className = '',
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs rounded-md font-medium',
    md: 'px-4 py-2 text-sm rounded-md font-semibold',
    lg: 'px-6 py-2.5 text-sm sm:text-base rounded-md font-semibold'
  }

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-500 text-white border border-blue-500 transition-colors',
    secondary: 'bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors',
    outline: 'bg-transparent text-white hover:bg-white/5 border border-white/20 hover:border-white/40 transition-colors',
    ghost: 'text-white/80 hover:text-white hover:bg-white/5 transition-colors',
    glow: 'bg-blue-600 hover:bg-blue-500 text-white border border-blue-500 transition-colors'
  }

  const combinedClasses = `inline-flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  )

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
          {content}
        </a>
      )
    }
    return (
      <Link to={href} className={combinedClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  )
}

export default Button
