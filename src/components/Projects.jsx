import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filters = ['All', 'Advisor', 'Business', 'Financial', 'Investment']
  
  const projects = [
    {
      title: "Life Insurance Support",
      category: "financial, investment",
      image: "📊",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered that the alteration"
    },
    {
      title: "Business Insurance",
      category: "business, financial",
      image: "💼",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered that the alteration"
    },
    {
      title: "Tax Solution Strategy",
      category: "advisor, business",
      image: "📈",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered that the alteration"
    },
    {
      title: "Bonds and Funds",
      category: "financial, investment",
      image: "💰",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered that the alteration"
    },
    {
      title: "Business Advisor",
      category: "advisor, business",
      image: "👥",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered that the alteration"
    },
    {
      title: "Home Insurance Plan",
      category: "business, investment",
      image: "🏠",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered that the alteration"
    },
    {
      title: "House and Car Loan",
      category: "financial, investment",
      image: "🚗",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered that the alteration"
    },
    {
      title: "Car Loan",
      category: "financial, investment",
      image: "🚙",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered that the alteration"
    },
    {
      title: "Retirement Planning",
      category: "business, financial",
      image: "🎯",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered that the alteration"
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.category.toLowerCase().includes(activeFilter.toLowerCase())
      )

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            There are many variations of passages Lorem available, but the majority have suffered alteration in some form or randomised even
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.category.split(', ').map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium">
                  Read More →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

