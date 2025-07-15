import { useState, useCallback } from 'react'
import { validateEmail, validatePhone } from '@/lib/utils'

export const useForm = (initialState = {}, validationRules = {}) => {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }, [errors])

  const validateField = useCallback((name, value) => {
    const rules = validationRules[name]
    if (!rules) return ''

    for (const rule of rules) {
      if (rule.required && !value) {
        return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
      }
      
      if (rule.minLength && value.length < rule.minLength) {
        return `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least ${rule.minLength} characters`
      }
      
      if (rule.email && !validateEmail(value)) {
        return 'Please enter a valid email address'
      }
      
      if (rule.phone && !validatePhone(value)) {
        return 'Please enter a valid phone number'
      }
      
      if (rule.pattern && !rule.pattern.test(value)) {
        return rule.message || 'Invalid format'
      }
    }
    
    return ''
  }, [validationRules])

  const validateForm = useCallback(() => {
    const newErrors = {}
    let isValid = true

    Object.keys(validationRules).forEach(fieldName => {
      const error = validateField(fieldName, formData[fieldName] || '')
      if (error) {
        newErrors[fieldName] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }, [formData, validationRules, validateField])

  const handleSubmit = useCallback(async (onSubmit) => {
    if (!validateForm()) {
      return false
    }

    setIsSubmitting(true)
    try {
      await onSubmit(formData)
      return true
    } catch (error) {
      console.error('Form submission error:', error)
      return false
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, validateForm])

  const resetForm = useCallback(() => {
    setFormData(initialState)
    setErrors({})
    setIsSubmitting(false)
  }, [initialState])

  return {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit,
    resetForm,
    setFormData
  }
} 