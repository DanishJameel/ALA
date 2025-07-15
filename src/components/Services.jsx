import React from 'react'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { TrendingUp, DollarSign, Briefcase, Users, Target, Award } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Market Analysis",
      description: "There are many varatos of pasages of thats Lorem available bust the major have sufered alteron",
      link: "#"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-red-600" />,
      title: "Financial Advice",
      description: "There are many varatos of pasages of thats Lorem available bust the major have sufered alteron",
      link: "#"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-600" />,
      title: "Business Promotions",
      description: "There are many varatos of pasages of thats Lorem available bust the major have sufered alteron",
      link: "#"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Business Investment",
      description: "There are many varatos of pasages of thats Lorem available bust the major have sufered alteron",
      link: "#"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Talented Consultants",
      description: "There are many varatos of pasages of thats Lorem available bust the major have sufered alteron",
      link: "#"
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-600" />,
      title: "Quality Resourcing",
      description: "There are many varatos of pasages of thats Lorem available bust the major have sufered alteron",
      link: "#"
    }
  ]

  return (
    <Section id="services" background="white">
      <SectionHeader
        title="Finance And Business Services"
        description="There are many variations of passages Lorem available, but the majority have suffered alteration in some form or randomised even"
      />

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <article 
            key={index} 
            className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
            tabIndex="0"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-300">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="link" 
                  className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium focus:outline-none focus:ring-0 focus:ring-offset-0 rounded text-left no-underline"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Read More
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Services

