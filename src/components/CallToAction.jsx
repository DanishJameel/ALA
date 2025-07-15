import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="text-white mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Let's start your dream project with us and stay relax.
            </h2>
            <p className="text-xl text-blue-100">
              Lorem ipsum dolor sit amet, consectetur ipsum dolor sit adipisicing elit.
            </p>
          </div>

          {/* Right CTA Button */}
          <div className="flex-shrink-0">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-md transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              GET STARTED
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

