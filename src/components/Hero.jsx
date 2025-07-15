import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 flex items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to Xzopro
              <br />
              <span className="text-blue-400">Grow Your Business</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              We look forward to getting to know you and your company...
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                OUR PROJECTS
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-black hover:bg-white hover:text-gray-900 px-8 py-3 rounded-md font-medium transition-all duration-300">
                CONTACT US
              </Button>
            </div>
          </div>

          {/* Right content - Professional image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-96 h-96 mx-auto flex items-center justify-center">
              <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="text-6xl text-gray-600">👨‍💼</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
      </div>
    </section>
  )
}

export default Hero

