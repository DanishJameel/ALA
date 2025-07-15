import React from 'react'
import { cn } from '@/lib/utils'

const SectionHeader = React.forwardRef(({
  title,
  subtitle,
  description,
  className,
  align = 'center',
  showDivider = true,
  ...props
}, ref) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <div
      ref={ref}
      className={cn(
        'mb-16',
        alignClasses[align] || alignClasses.center,
        className
      )}
      {...props}
    >
      {subtitle && (
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      
      {showDivider && (
        <div className="w-24 h-1 bg-blue-600 mb-6 mx-auto"></div>
      )}
      
      {description && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
})

SectionHeader.displayName = 'SectionHeader'

export { SectionHeader } 