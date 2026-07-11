import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'home', label: 'Home', href: '/#home' },
    { id: 'catalogue', label: 'Catalogue', href: '/#catalogue' },
    { id: 'about', label: 'About', href: '/#about' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm' 
        : 'bg-white border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/#home" className="flex-shrink-0 flex items-center cursor-pointer">
            <img 
              src="/SSP LOGO - Curve.png" 
              alt="Kishan Jari Pvt. Ltd Logo" 
              className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-102"
            />
          </a>

          {/* Desktop Navigation (Centered) */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveTab(link.id)}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  activeTab === link.id
                    ? 'text-[#8a2b53]'
                    : 'text-[#475569] hover:text-[#8a2b53]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="/#contact"
              className="group border border-[#f87171] hover:bg-[#f87171]/5 px-6 py-2.5 rounded-full text-sm font-bold text-[#3b0764] transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow"
            >
              Contact
              <ArrowRight className="w-4 h-4 text-[#3b0764] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-[#8a2b53] hover:bg-slate-50 focus:outline-none transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100 border-b border-slate-100 bg-white' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                setActiveTab(link.id)
                setIsOpen(false)
              }}
              className={`block px-3 py-2 rounded-lg text-base font-semibold transition-colors duration-200 ${
                activeTab === link.id
                  ? 'text-[#8a2b53] bg-purple-50/50'
                  : 'text-slate-600 hover:text-[#8a2b53] hover:bg-slate-50'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 px-3">
            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 border border-[#f87171] hover:bg-[#f87171]/5 py-2.5 rounded-full text-base font-bold text-[#3b0764] transition-all duration-200"
            >
              Contact
              <ArrowRight className="w-4 h-4 text-[#3b0764]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
