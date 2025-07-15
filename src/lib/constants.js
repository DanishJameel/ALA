// Navigation items
export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
]

// Contact information
export const CONTACT_INFO = {
  address: '1010 Avenue of the Moon, New York, NY 10018 USA',
  phone: '+24-554-246-2466',
  email: 'info@xzopro.com',
  hours: 'Mon - Sat 9.00 - 18.00 Sunday Closed',
  servingSince: '1985'
}

// Services data
export const SERVICES_DATA = [
  {
    icon: 'TrendingUp',
    title: "Market Analysis",
    description: "Comprehensive market research and analysis to identify opportunities and threats in your industry.",
    color: "blue"
  },
  {
    icon: 'DollarSign',
    title: "Financial Advice",
    description: "Expert financial planning and investment strategies to maximize your business growth potential.",
    color: "red"
  },
  {
    icon: 'Briefcase',
    title: "Business Promotions",
    description: "Strategic marketing and promotional campaigns to increase your brand visibility and market share.",
    color: "green"
  },
  {
    icon: 'Target',
    title: "Business Investment",
    description: "Investment consulting and capital allocation strategies for optimal business expansion.",
    color: "purple"
  },
  {
    icon: 'Users',
    title: "Talented Consultants",
    description: "Access to industry experts and consultants with proven track records in business development.",
    color: "orange"
  },
  {
    icon: 'Award',
    title: "Quality Resourcing",
    description: "Premium resource allocation and management solutions for enhanced operational efficiency.",
    color: "indigo"
  }
]

// Form validation rules
export const FORM_VALIDATION_RULES = {
  name: [{ required: true, minLength: 2 }],
  email: [{ required: true, email: true }],
  phone: [{ phone: true }],
  message: [{ required: true, minLength: 10 }]
}

// Animation thresholds
export const ANIMATION_THRESHOLDS = {
  default: 0.1,
  subtle: 0.05,
  prominent: 0.2
}

// Breakpoints
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280
} 