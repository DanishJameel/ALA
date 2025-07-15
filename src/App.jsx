import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CallToAction from './components/CallToAction'
import Projects from './components/Projects'
import Statistics from './components/Statistics'
import Blog from './components/Blog'
import Partners from './components/Partners'
import Contact from './components/Contact'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import { ScrollToTop } from './components/ui/scroll-to-top'
import AboutUs from './components/AboutUs'
import ServicesPage from './components/ServicesPage'
import ContactPage from './components/ContactPage'
import BlogPost from './components/BlogPost'
import './App.css'

function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Projects />
      <Statistics />
      <Blog />
      <Partners />
      <Contact />
      <MapSection />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App

