import React from 'react';
import { Breadcrumb } from './ui/breadcrumb';
import { Button } from './ui/button';
import Partners from './Partners';

const team = [
  {
    name: 'Michale Joe',
    role: 'Salse Executive',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    socials: [
      { icon: 'fab fa-facebook-f', url: '#' },
      { icon: 'fab fa-twitter', url: '#' },
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-pinterest-p', url: '#' },
    ],
  },
  {
    name: 'Jasmin Jerry',
    role: 'Salse Executive',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    socials: [
      { icon: 'fab fa-facebook-f', url: '#' },
      { icon: 'fab fa-twitter', url: '#' },
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-pinterest-p', url: '#' },
    ],
  },
  {
    name: 'Michale Hussy',
    role: 'Salse Executive',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    socials: [
      { icon: 'fab fa-facebook-f', url: '#' },
      { icon: 'fab fa-twitter', url: '#' },
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-pinterest-p', url: '#' },
    ],
  },
];

const skills = [
  { name: 'MARKETING', value: 98 },
  { name: 'BUSINESS LOAN', value: 90 },
  { name: 'INVESTMENT', value: 85 },
  { name: 'FINANCIAL ADVICE', value: 70 },
  { name: 'CONSULTING', value: 90 },
];

const AboutUs = () => (
  <div className="bg-white">
    {/* Hero Section */}
    <section className="relative bg-gray-900 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80)'}}>
      <div className="bg-black bg-opacity-70 py-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-2">About Us</h1>
        <div className="text-white flex items-center space-x-2">
          <span>Home</span>
          <span className="mx-1">&gt;</span>
          <span>About Us</span>
        </div>
      </div>
    </section>

    {/* Experience Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        <div className="md:w-1/2">
          <p className="text-blue-700 font-semibold text-lg mb-1 italic">More Than</p>
          <h2 className="text-4xl font-bold text-blue-800 mb-4">25 Years of Experience</h2>
          <p className="text-gray-600 mb-3">There are many variations of passages of Lorem Ipsum available but the majority the have suffered alteration in some form by injected humour orignis randomised</p>
          <p className="text-gray-600 mb-3">There are many variations of passages of Lorem Ipsum available but the majority the have suffered alteration in some form by injected humour orignis randomised</p>
          <p className="text-gray-600 mb-6">There are many variations of passages of Lorem Ipsum available but the majority the have suffered alteration in some form by injected humour orignis randomised words and which don't look even slightly believable.</p>
          <Button className="bg-blue-700 text-white px-6 py-2 rounded">OUR HISTORY</Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="Team working" className="rounded-lg shadow-lg w-full max-w-md" />
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Meet Our Best Team</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">There are many variations of passages Lorem available, but the majority have suffered alteration in some form or randomised even</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg flex flex-col items-center p-8">
              <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-100" />
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-pinterest-p"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team Skills Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Awesome Team Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mb-4"></div>
          <p className="text-gray-600 mb-8">There are many variations of passages Lorem available, but the majority have suffered alteration in some form or randomised even</p>
          <div className="space-y-6">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 text-sm font-semibold">{skill.name}</span>
                  <span className="text-gray-700 text-sm font-semibold">{skill.value}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{width: `${skill.value}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Team skills" className="rounded-lg shadow-lg w-full max-w-md" />
        </div>
      </div>
    </section>

    {/* Partners Section */}
    <section className="py-10 bg-white">
      <Partners />
    </section>
  </div>
);

export default AboutUs; 