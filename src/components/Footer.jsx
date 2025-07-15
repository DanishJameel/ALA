import React from 'react'
import { MapPin, Phone, Mail, Facebook, Linkedin, X as XIcon, ArrowRight } from 'lucide-react'
import xzoproLogo from '../assets/white-logo.png'

const SOCIALS = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: XIcon, label: 'X', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  // Pinterest not in lucide-react, so use a placeholder
  { icon: ArrowRight, label: 'Pinterest', href: '#' },
]

const usefulLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Recent Projects', href: '#' },
  { name: 'Our Services', href: '#' },
]

const recentPosts = [
  {
    title: 'Business Ueporting Rouncil Could Plan',
    date: 'July 8, 2018',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=64&h=64&q=80',
  },
  {
    title: 'Financial Reporting Qouncil Could More',
    date: 'July 8, 2018',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=64&h=64&q=80',
  },
  {
    title: 'Consulting Reporting Qouncil Could More',
    date: 'July 8, 2018',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=64&h=64&q=80',
  },
]

const Footer = () => {
  return (
    <footer className="bg-[#18181c] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={xzoproLogo} alt="Xzopro" className="h-12 w-auto" />
              <span className="text-3xl font-bold">Xzopro</span>
            </div>
            <p className="text-gray-300 mb-3 leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              It is a long established fact that a reader will be distracted.
            </p>
            <div className="mb-2 font-semibold">Follow us</div>
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }, i) => (
                <a key={label} href={href} aria-label={label} className="bg-white text-[#18181c] hover:bg-blue-100 hover:text-blue-600 rounded-full w-9 h-9 flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Useful Link</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, idx) => (
                <li key={link.name} className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                  <a href={link.href} className="text-white hover:text-blue-400 transition-colors font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Recent Posts</h3>
            <div className="space-y-5">
              {recentPosts.map((post, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <img src={post.image} alt="post" className="w-14 h-14 rounded object-cover" />
                  <div>
                    <div className="text-white font-semibold leading-tight hover:text-blue-400 cursor-pointer">
                      {post.title}
                    </div>
                    <div className="text-blue-300 text-xs mt-1">{post.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">1102 Saint Marys, Jackson Blvd, Chicago United State</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">examplemail.com</span>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <Phone className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">(123) 456 789 1002</span>
            </div>
            <form className="flex gap-2 mt-2">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded px-4 py-2 flex-1 text-gray-900 focus:outline-none"
                style={{ minWidth: 0 }}
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded font-semibold">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#131316] border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-2 md:mb-0">
            © Xzopro 2025 | Designed and Developed by: ThemeDraft
          </div>
          <div className="flex gap-6 text-gray-300 text-sm">
            <a href="#" className="hover:text-blue-400">Home</a>
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

