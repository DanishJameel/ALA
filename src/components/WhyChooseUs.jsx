import React from 'react'
import { Rocket, BarChart3, Cog, Headphones } from 'lucide-react'

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: "Good Performance",
      description: "There are many variations of passages of Lorem Ipsum available but the majority have and is suffered alteration in some form by injected humour words which don't look even slightly."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Responsibility Of Business",
      description: "There are many variations of passages of Lorem Ipsum available but the majority have and is suffered alteration in some form by injected humour words which don't look even slightly."
    },
    {
      icon: <Cog className="w-8 h-8 text-blue-600" />,
      title: "First Working Process",
      description: "There are many variations of passages of Lorem Ipsum available but the majority have and is suffered alteration in some form by injected humour words which don't look even slightly."
    },
    {
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
      title: "24X7 Support Services",
      description: "There are many variations of passages of Lorem Ipsum available but the majority have and is suffered alteration in some form by injected humour words which don't look even slightly."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div>
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-6"></div>
              <p className="text-lg text-gray-600">
                There are many variations of passages Lorem available, but the majority have suffered alteration in some form or randomised even
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-center">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-8xl mb-4">👥</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Team</h3>
                <p className="text-gray-600">Working together for your success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

