import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Clara Anderson",
      position: "Ceo Of Idea Company",
      content: "There are many variations of passages of the Lorem lorem available but the majority have suffered alteration in some dummy. There are many variations of passages of the Lorem lorem available but the majority have suffered alteration in some dummy.",
      avatar: "👩‍💼"
    },
    {
      name: "Raisul Rice",
      position: "Ceo Of Idea Company",
      content: "There are many variations of passages of the Lorem lorem available but the majority have suffered alteration in some dummy. There are many variations of passages of the Lorem lorem available but the majority have suffered alteration in some dummy.",
      avatar: "👨‍💼"
    },
    {
      name: "Md Nadim Khan",
      position: "Ceo ThemeDraft",
      content: "There are many variations of passages of the Lorem lorem available but the majority have suffered alteration in some dummy. There are many variations of passages of the Lorem lorem available but the majority have suffered alteration in some dummy.",
      avatar: "👨‍💻"
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Happy Customers
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            There are many variations of passages Lorem available, but the majority have suffered alteration in some form or randomised even
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-6 rounded-lg transition-all duration-300 ${
                  index === currentSlide ? 'transform scale-105 shadow-lg' : 'opacity-75'
                }`}
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

