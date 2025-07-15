import React from 'react'
import { cn } from '@/lib/utils'

const Section = React.forwardRef(({
  id,
  className,
  children,
  background = 'white',
  padding = 'py-20',
  container = true,
  ...props
}, ref) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 text-white'
  }

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        backgroundClasses[background] || backgroundClasses.white,
        padding,
        className
      )}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
})

Section.displayName = 'Section'

export { Section } 