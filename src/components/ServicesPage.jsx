import React, { useRef } from 'react';
import { Briefcase, TrendingUp, DollarSign, Target, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: <DollarSign className="w-10 h-10 text-blue-500" />, title: 'Financial Advice',
    description: 'There are many variations of passages of that Lorem Ipsum available but the majority have suffered alteration in bypassage.'
  },
  {
    icon: <Briefcase className="w-10 h-10 text-blue-500" />, title: 'Business Promotions',
    description: 'There are many variations of passages of that Lorem Ipsum available but the majority have suffered alteration in bypassage.'
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-blue-500" />, title: 'Market Analysis',
    description: 'There are many variations of passages of that Lorem Ipsum available but the majority have suffered alteration in bypassage.'
  },
  {
    icon: <Target className="w-10 h-10 text-blue-500" />, title: 'Business Investment',
    description: 'There are many variations of passages of that Lorem Ipsum available but the majority have suffered alteration in bypassage.'
  },
  {
    icon: <Users className="w-10 h-10 text-blue-500" />, title: 'Talented Consultants',
    description: 'There are many variations of passages of that Lorem Ipsum available but the majority have suffered alteration in bypassage.'
  },
  {
    icon: <Award className="w-10 h-10 text-blue-500" />, title: 'Quality Resourcing',
    description: 'There are many variations of passages of that Lorem Ipsum available but the majority have suffered alteration in bypassage.'
  },
];

const testimonials = [
  {
    name: 'Md Nadim Khan',
    role: 'Ceo ThemeDraft',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'There are many variations of passages of the Lorem lorem available but the majority have suffered alteration in some dummy. There are many variations of passages of the Lorem lorem available but the majority have suffered alteration in some dummy.'
  },
  {
    name: 'Kappa Samchu',
    role: 'Ceo Of Idea Company',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'There are many variations of passages of the Lorem lorem available but the majority have suffered alteration in some dummy. There are many variations of passages of the Lorem lorem available but the majority have suffered alteration in some dummy.'
  },
  {
    name: 'Clara Anderson',
    role: 'Ceo Of Idea Company',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'There are many variations of passages of the Lorem lorem available but the majority have suffered alteration in some dummy. There are many variations of passages of the Lorem lorem available but the majority have suffered alteration in some dummy.'
  },
];

const ServicesPage = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80)'}}>
        <div className="bg-black bg-opacity-70 py-16 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-2">Services</h1>
          <div className="text-white flex items-center space-x-2">
            <span>Home</span>
            <span className="mx-1">&gt;</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div key={idx} className="relative bg-white border border-gray-200 rounded-lg shadow-sm p-8 pt-12 flex flex-col items-start hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-8 left-8 bg-white rounded-full shadow p-2 border border-gray-200">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-blue-600 hover:underline font-medium mt-auto">Read More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-2 text-center">Our Happy Customers</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form or randomised even slightly believable.
          </p>
          <div className="relative">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded w-12 h-12 flex items-center justify-center shadow"
              onClick={() => scroll('left')}
              aria-label="Scroll testimonials left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div
              ref={scrollRef}
              className="overflow-x-auto flex gap-8 pb-4 scrollbar-hide scroll-smooth"
              style={{ scrollBehavior: 'smooth' }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="min-w-[350px] max-w-[350px] bg-white rounded-lg shadow-lg p-8 flex flex-col items-start mx-2"
                >
                  <div className="text-5xl text-gray-200 mb-4">&ldquo;</div>
                  <p className="text-gray-700 mb-6">{t.text}</p>
                  <div className="flex items-center mt-auto">
                    <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <div className="font-bold text-gray-900">{t.name}</div>
                      <div className="text-sm text-gray-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded w-12 h-12 flex items-center justify-center shadow"
              onClick={() => scroll('right')}
              aria-label="Scroll testimonials right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 