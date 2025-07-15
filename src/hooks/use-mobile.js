import { useState, useEffect, useCallback } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    // Initialize with current window size if available
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT
    }
    return false
  })

  const updateMobileState = useCallback(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
  }, [])

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial state
    updateMobileState()
    
    // Add event listener
    mql.addEventListener("change", updateMobileState)
    
    // Cleanup
    return () => mql.removeEventListener("change", updateMobileState)
  }, [updateMobileState])

  return isMobile
}
