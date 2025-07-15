import React from 'react'
import { Settings, Code, Headphones } from 'lucide-react'

const Introduction = () => {
  const services = [
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: "Management",
      description: "There are many variations of passages of Lorem available butter the majority have suffered and alteration in some duimy."
    },
    {
      icon: <Code className="w-12 h-12 text-green-600" />,
      title: "Development",
      description: "There are many variations of passages of Lorem available butter the majority have suffered and alteration in some duimy."
    },
    {
      icon: <Headphones className="w-12 h-12 text-purple-600" />,
      title: "Fast support",
      description: "There are many variations of passages of Lorem available butter the majority have suffered and alteration in some duimy."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Introduction Xzopro Solutions
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            There are many variations of passages Lorem available, but the majority have suffered alteration in some form or randomised even
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Introduction

