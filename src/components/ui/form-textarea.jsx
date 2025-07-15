import React from 'react'
import { cn } from '@/lib/utils'

const FormTextarea = React.forwardRef(({
  label,
  error,
  className,
  containerClassName,
  ...props
}, ref) => {
  const textareaId = props.id || props.name

  return (
    <div className={cn("space-y-2", containerClassName)}>
      {label && (
        <label 
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        ref={ref}
        id={textareaId}
        className={cn(
          "w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none",
          error 
            ? "border-red-300 focus:ring-red-500" 
            : "border-gray-300 hover:border-gray-400",
          className
        )}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        {...props}
      />
      
      {error && (
        <p 
          id={`${textareaId}-error`}
          className="text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
})

FormTextarea.displayName = 'FormTextarea'

export { FormTextarea } 