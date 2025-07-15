import React from 'react'
import { cn } from '@/lib/utils'

const FormInput = React.forwardRef(({
  label,
  error,
  className,
  containerClassName,
  ...props
}, ref) => {
  const inputId = props.id || props.name

  return (
    <div className={cn("space-y-2", containerClassName)}>
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        ref={ref}
        id={inputId}
        className={cn(
          "w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200",
          error 
            ? "border-red-300 focus:ring-red-500" 
            : "border-gray-300 hover:border-gray-400",
          className
        )}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      
      {error && (
        <p 
          id={`${inputId}-error`}
          className="text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
})

FormInput.displayName = 'FormInput'

export { FormInput } 