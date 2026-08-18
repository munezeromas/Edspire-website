import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from '../ui/Logo'
import TopBar from '../sections/TopBar'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <TopBar />

      <div
        className={`transition-colors duration-150 ${
          isScrolled
            ? 'bg-navy-950/95 border-b border-white/10 py-3 backdrop-blur-md'
            : 'bg-navy-900 border-b border-white/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                to="/"
                className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-md transition-colors ${
                  location.pathname === '/' ? 'text-blue-400 bg-blue-500/10' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </Link>

              <a
                href="/#programs"
                className="px-3 py-1.5 text-xs xl:text-sm font-semibold text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                Supported Programs
              </a>

              <Link
                to="/products"
                className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-md transition-colors ${
                  location.pathname === '/products' ? 'text-blue-400 bg-blue-500/10' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                Products (Vive-AI & Ability)
              </Link>

              <a
                href="/#features"
                className="px-3 py-1.5 text-xs xl:text-sm font-semibold text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                Features
              </a>

              <a
                href="/#impact"
                className="px-3 py-1.5 text-xs xl:text-sm font-semibold text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                Impact
              </a>

              <Link
                to="/about"
                className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-md transition-colors ${
                  location.pathname === '/about' ? 'text-blue-400 bg-blue-500/10' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                About
              </Link>

              <a
                href="/#media"
                className="px-3 py-1.5 text-xs xl:text-sm font-semibold text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                Video
              </a>

              <Link
                to="/contact"
                className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-md transition-colors ${
                  location.pathname === '/contact' ? 'text-blue-400 bg-blue-500/10' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link
                to="/contact"
                className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors inline-flex items-center gap-1.5 border border-blue-500"
              >
                <span>Partner with Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-white/80 hover:text-white hover:bg-white/5 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-white/10 space-y-1 bg-navy-950 rounded-lg p-3 border">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                  location.pathname === '/' ? 'text-blue-400 bg-blue-500/10' : 'text-white/80 hover:text-white'
                }`}
              >
                Home
              </Link>
              <a
                href="/#programs"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-semibold text-white/80 hover:text-white"
              >
                Supported Programs
              </a>
              <Link
                to="/products"
                className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                  location.pathname === '/products' ? 'text-blue-400 bg-blue-500/10' : 'text-white/80 hover:text-white'
                }`}
              >
                Products (Vive-AI & Ability)
              </Link>
              <a
                href="/#features"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-semibold text-white/80 hover:text-white"
              >
                Features
              </a>
              <a
                href="/#impact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-semibold text-white/80 hover:text-white"
              >
                Impact
              </a>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                  location.pathname === '/about' ? 'text-blue-400 bg-blue-500/10' : 'text-white/80 hover:text-white'
                }`}
              >
                About
              </Link>
              <a
                href="/#media"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-semibold text-white/80 hover:text-white"
              >
                Featured Video
              </a>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                  location.pathname === '/contact' ? 'text-blue-400 bg-blue-500/10' : 'text-white/80 hover:text-white'
                }`}
              >
                Contact
              </Link>

              <div className="pt-2 border-t border-white/10">
                <Link
                  to="/contact"
                  className="w-full text-center py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs block"
                >
                  Partner with Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
