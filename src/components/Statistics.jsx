import React from 'react'
import { FileText, Users, Coffee, Award } from 'lucide-react'

const Statistics = () => {
  const stats = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      number: "867",
      label: "Projects Completed"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      number: "68",
      label: "Team Member"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      number: "857",
      label: "Happy Customers"
    },
    {
      icon: <Coffee className="w-8 h-8 text-orange-600" />,
      number: "8579",
      label: "Cups Of Coffee"
    }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2 text-white">
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics

