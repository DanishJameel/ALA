import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronUp } from 'lucide-react'
import { useScrollToTop } from '@/hooks/use-scroll-animation'

const ScrollToTop = () => {
  const { showScrollTop, scrollToTop } = useScrollToTop()

  if (!showScrollTop) return null

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label="Scroll to top of page"
    >
      <ChevronUp className="w-6 h-6" />
    </Button>
  )
}

export { ScrollToTop } 