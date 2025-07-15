import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Menu, X, MapPin, Phone, Clock, Facebook, Linkedin, Search, X as XIcon
} from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'
import { scrollToSection } from '@/lib/utils'
import { CONTACT_INFO, NAVIGATION_ITEMS } from '@/lib/constants'
import xzoproLogo from '../assets/white-logo.png'
import { Link, useLocation } from 'react-router-dom'

const SOCIALS = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: XIcon, label: 'X', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useIsMobile()
  const location = useLocation()

  // Close mobile menu when screen size changes
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isMobile, isMenuOpen])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false)
    scrollToSection(sectionId)
  }

  // Helper to determine if a nav item should use Link or anchor
  const getNavLink = (item) => {
    if (item.href.startsWith('/')) {
      return (
        <Link
          key={item.label}
          to={item.href}
          className="relative text-white font-medium px-1 py-4 transition-colors duration-200 hover:text-blue-400"
          onClick={() => setIsMenuOpen(false)}
        >
          {item.label}
        </Link>
      )
    } else {
      // For in-page sections
      return (
        <a
          key={item.label}
          href={item.href}
          onClick={e => { e.preventDefault(); handleNavClick(item.href.replace('#', '')) }}
          className="relative text-white font-medium px-1 py-4 transition-colors duration-200 hover:text-blue-400"
        >
          {item.label}
        </a>
      )
    }
  }

  return (
    <header className="relative" role="banner">
      {/* Top Bar */}
      <div className="bg-[#32323a] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-200" />
            <span>We are serving since 1985 at New York</span>
          </div>
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} aria-label={label} className="hover:text-blue-400 transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Header Info Section */}
      <div className="bg-white w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4 gap-6 md:gap-0">
          {/* Logo */}
          <div className="flex items-center gap-2 min-w-[120px]">
            <img src={xzoproLogo} alt="xzopro" className="h-12 w-auto" />
            <span className="text-4xl font-bold text-gray-900 ml-2">xzopro</span>
          </div>
          {/* Info blocks */}
          <div className="flex flex-1 flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-3">
              <MapPin className="w-8 h-8 text-blue-500" />
              <div>
                <div className="font-bold text-md text-gray-900">1010 Avenue of the Moon</div>
                <div className="text-sm text-gray-600">New York, Y 10018 USA.</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-8 h-8 text-blue-500" />
              <div>
                <div className="font-bold text-md text-gray-900">+24-554-246-2466</div>
                <div className="text-sm text-gray-600">Call Free</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-500" />
              <div>
                <div className="font-bold text-md text-gray-900">Mon - Sat 9.00 - 18.00</div>
                <div className="text-sm text-gray-600">Sunday Closed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#2d2c46] w-full" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto flex items-center justify-between px-4 py-0 min-h-[56px]">
          {/* Nav Links */}
          <div className="flex-1 flex items-center gap-8">
            {NAVIGATION_ITEMS.map(getNavLink)}
          </div>
          {/* Search Icon */}
          <button className="p-2 text-white hover:text-blue-400 transition-colors">
            <Search className="w-6 h-6" />
          </button>
          {/* CTA Button */}
          <Button className="ml-4 bg-[#0070c9] hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
            GET A QUOTE
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header

