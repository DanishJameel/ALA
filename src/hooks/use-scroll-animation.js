import { useEffect, useRef, useState } from 'react'
import { debounce } from '@/lib/utils'

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, we can stop observing
          observer.unobserve(element)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold])

  return [elementRef, isVisible]
}

export const useScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      setShowScrollTop(window.scrollY > 300)
    }, 100)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return { showScrollTop, scrollToTop }
} 