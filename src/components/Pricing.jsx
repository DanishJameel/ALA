import React from 'react'
import { Button } from '@/components/ui/button'
import { Check, Star } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$39.00",
      popular: false,
      features: [
        "1 Website Design",
        "30,000 Monthly Visits",
        "Unlimited Dta Transfer",
        "5GB Data Storage",
        "Email Support"
      ],
      icon: "📁"
    },
    {
      name: "Professional",
      price: "$49.99",
      popular: true,
      features: [
        "1 Website Design",
        "30,000 Monthly Visits",
        "Unlimited Dta Transfer",
        "5GB Data Storage",
        "Email Support"
      ],
      icon: "💼"
    },
    {
      name: "Stander",
      price: "$79.99",
      popular: false,
      features: [
        "1 Website Design",
        "30,000 Monthly Visits",
        "Unlimited Dta Transfer",
        "5GB Data Storage",
        "Email Support"
      ],
      icon: "⭐"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Our Pricing Plan
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            There are many variations of passages Lorem available, but the majority have suffered alteration in some form or randomised even
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'transform scale-105 border-2 border-blue-500' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2 px-4 relative">
                  <span className="font-medium">Popular</span>
                </div>
              )}

              {/* Plan Header */}
              <div className="p-8 text-center">
                <div className="text-4xl mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-gray-600">
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full py-3 font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  BUY NOW
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

