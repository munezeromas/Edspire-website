import React from 'react'
import { Link } from 'react-router-dom'

interface LogoProps {
  className?: string
  iconOnly?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  iconOnly = false,
  size = 'md'
}) => {
  const imgSizes = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-12 w-auto'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }

  return (
    <Link to="/" className={`inline-flex items-center gap-2 group ${className}`}>
      {/* Logo — brightness invert makes any dark logo visible on dark backgrounds without white bg */}
      <img
        src="/logo.png"
        alt="Edspire"
        className={`${imgSizes[size]} object-contain`}
        style={{ filter: 'brightness(0) invert(1)' }}
      />
      {!iconOnly && (
        <span className={`font-display font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors ${textSizes[size]}`}>
          Edspire
        </span>
      )}
    </Link>
  )
}

export default Logo
