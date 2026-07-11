import { useState } from 'react'
import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react'

export default function Footer() {
  const [activeSection, setActiveSection] = useState(null)

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const shopLinks = [
    { label: 'Jari', href: '/#catalogue' },
    { label: 'Dori', href: '/#catalogue' },
    { label: 'Metallic Film', href: '/#catalogue' }
  ]

  const infoLinks = [
    { label: 'About Us', href: '/#about' },
    { label: 'Contact Us', href: '/#contact' },
    { label: 'Shiv Shakti Polyfilms', href: '/shiv-shakti-polyfilms' }
  ]

  return (
    <>
      <style>{`
        @keyframes ws-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5), 0 4px 10px rgba(0,0,0,0.15);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0), 0 4px 10px rgba(0,0,0,0.15);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0), 0 4px 10px rgba(0,0,0,0.15);
          }
        }
        .whatsapp-pulse {
          animation: ws-pulse 2s infinite;
        }
      `}</style>

      <footer className="bg-[#eef1f2] pt-16 pb-0 border-t border-slate-200/85 font-body relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
            
            {/* Column 1: Follow Us & Newsletter Sign Up */}
            <div className="lg:col-span-4 space-y-8 pr-0 lg:pr-6">
              <div>
                <div className="mb-6">
                  <img 
                    src="/SSP LOGO - Curve.png" 
                    alt="SSP Logo" 
                    className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-102"
                  />
                </div>
                <h4 className="text-slate-800 text-[14px] font-bold tracking-wider uppercase mb-4">Follow Us</h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/share/17sNWiTEiR/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#8a2b53] text-slate-700 hover:text-white border border-slate-300 hover:border-[#8a2b53] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                    aria-label="Facebook"
                  >
                    <svg className="w-[17px] h-[17px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V2h-3a4 4 0 00-4 4v2z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/ssp_sequenceandjari?igsh=MWNvZWhkN2I3YzF5ag=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#8a2b53] text-slate-700 hover:text-white border border-slate-300 hover:border-[#8a2b53] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                    aria-label="Instagram"
                  >
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-slate-800 text-[14px] font-bold tracking-wider uppercase mb-2">Newsletter Sign Up</h4>
                <p className="text-slate-600 text-[13px] leading-relaxed mb-4">
                  Receive our latest updates about our products and promotions.
                </p>
                <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-grow bg-white border border-slate-300 rounded px-3 py-2 text-[13px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#5caebd] focus:ring-2 focus:ring-[#5caebd]/25 transition-all outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#5caebd] hover:bg-[#4ea2b1] text-white text-xs font-bold px-5 py-2.5 rounded uppercase transition-all duration-200 tracking-wider shrink-0 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* Column 2: Customer Care */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="text-slate-800 text-[14px] font-bold tracking-wider uppercase pb-1 border-b border-slate-300/40 lg:border-none">Customer Care</h4>
              
              {/* Address details */}
              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-white border border-slate-200/80 text-slate-700 shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-slate-600 text-[13px] leading-relaxed">
                  <span className="font-bold text-slate-800">Contact Us:</span>
                  <p className="mt-1 text-slate-600 hover:text-slate-900 transition-colors">
                    SSP Jari<br />
                    shop no 1, Plot no 75, Street no 21,<br />
                    Lambe Hanuman Rd, Ghansyamnagar,<br />
                    Varachha, Surat, Gujarat 395006
                  </p>
                </div>
              </div>

              {/* Phone details */}
              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-white border border-slate-200/80 text-slate-700 shrink-0 shadow-sm mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-slate-600 text-[13px] leading-relaxed">
                  <span className="font-bold text-slate-800">Customer Care:</span>{' '}
                  <a href="tel:+918866304000" className="hover:text-[#8a2b53] transition-colors font-semibold text-slate-700">+91 88663 04000</a>
                  <p className="mt-1">
                    <span className="font-bold text-slate-800">Whatsapp Support:</span>{' '}
                    <a href="https://wa.me/918866304000" target="_blank" rel="noopener noreferrer" className="hover:text-[#8a2b53] transition-colors underline font-semibold text-slate-700">+91 88663 04000</a>
                  </p>
                </div>
              </div>

              {/* Email details */}
              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-white border border-slate-200/80 text-slate-700 shrink-0 shadow-sm mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-slate-600 text-[13px] leading-relaxed mt-1">
                  <a href="mailto:support@sspjari.com" className="underline hover:text-[#8a2b53] transition-colors font-semibold text-slate-750">support@sspjari.com</a>
                </div>
              </div>
            </div>

            {/* Column 3: Shop By */}
            <div className="lg:col-span-2 border-b border-slate-300/40 lg:border-none pb-4 lg:pb-0">
              <button 
                onClick={() => toggleSection('shop')}
                className="w-full lg:cursor-default flex items-center justify-between text-left focus:outline-none lg:pointer-events-none group py-2 lg:py-0"
              >
                <h4 className="text-slate-800 text-[14px] font-bold tracking-wider uppercase">Shop By</h4>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 lg:hidden ${
                  activeSection === 'shop' ? 'rotate-180' : ''
                }`} />
              </button>
              <ul className={`mt-2 lg:mt-5 space-y-2.5 text-[13px] transition-all duration-300 overflow-hidden ${
                activeSection === 'shop' ? 'max-h-[350px] opacity-100' : 'max-h-0 lg:max-h-none opacity-0 lg:opacity-100'
              }`}>
                {shopLinks.map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href} 
                      className="text-slate-600 hover:text-[#8a2b53] transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Information */}
            <div className="lg:col-span-2 border-b border-slate-300/40 lg:border-none pb-4 lg:pb-0">
              <button 
                onClick={() => toggleSection('info')}
                className="w-full lg:cursor-default flex items-center justify-between text-left focus:outline-none lg:pointer-events-none group py-2 lg:py-0"
              >
                <h4 className="text-slate-800 text-[14px] font-bold tracking-wider uppercase">Information</h4>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 lg:hidden ${
                  activeSection === 'info' ? 'rotate-180' : ''
                }`} />
              </button>
              <ul className={`mt-2 lg:mt-5 space-y-2.5 text-[13px] transition-all duration-300 overflow-hidden ${
                activeSection === 'info' ? 'max-h-[350px] opacity-100' : 'max-h-0 lg:max-h-none opacity-0 lg:opacity-100'
              }`}>
                {infoLinks.map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href} 
                      className="text-slate-600 hover:text-[#8a2b53] transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar with copyright and card icons */}
        <div className="bg-[#111111] text-slate-400 py-6 border-t border-zinc-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            <p className="text-[13px]">
              Copyright © {new Date().getFullYear()}, SSP Jari.
            </p>
            
            {/* Card logos */}
            <div className="flex items-center justify-center flex-wrap gap-2.5">
              {/* Visa */}
              <div className="bg-white px-2 py-1 rounded flex items-center justify-center h-7 w-11 border border-zinc-700 shadow-sm shrink-0 hover:scale-105 transition-transform duration-200">
                <svg viewBox="0 0 36 12" className="h-3 w-auto" fill="#1A1F71">
                  <path d="M14.0 0.2 L11.2 11.8 H8.8 L11.6 0.2 H14.0 Z M22.2 0.2 C22.9 0.2 23.5 0.6 23.8 1.2 L24.0 0.2 H26.2 L24.6 11.8 H22.3 L22.0 10.3 C21.5 11.2 20.6 11.8 19.5 11.8 C18.1 11.8 16.8 10.5 16.8 8.8 C16.8 6.1 19.8 5.6 21.2 5.6 L22.0 5.6 V4.0 C22.0 3.1 21.5 2.5 20.3 2.5 C19.2 2.5 18.2 2.9 17.5 3.3 L17.0 1.4 C17.8 0.9 19.2 0.2 20.8 0.2 H22.2 Z M22.0 7.3 L21.2 7.3 C20.4 7.3 19.4 7.5 19.4 8.5 C19.4 9.3 20.1 9.7 20.9 9.7 C21.7 9.7 22.0 9.2 22.0 8.7 V7.3 Z M7.8 0.2 L5.6 9.8 L5.1 7.0 C4.8 5.8 4.0 4.8 2.8 4.5 H5.3 L6.0 8.5 L7.8 0.2 H10.1 L8.3 11.8 H5.9 L4.8 4.5 C4.4 3.1 3.5 1.8 1.9 1.5 L1.8 1.4 H5.0 L5.8 4.8 L7.8 0.2 H7.8 Z" />
                </svg>
              </div>
              {/* Mastercard */}
              <div className="bg-white px-2 py-1 rounded flex items-center justify-center h-7 w-11 border border-zinc-700 shadow-sm shrink-0 hover:scale-105 transition-transform duration-200">
                <svg viewBox="0 0 32 20" className="h-4.5 w-auto">
                  <circle cx="11" cy="10" r="9" fill="#EB001B" />
                  <circle cx="21" cy="10" r="9" fill="#F79E1B" opacity="0.85" />
                  <path d="M16 10a8.94 8.94 0 0 1 2.37-6.04 8.94 8.94 0 0 1 0 12.08A8.94 8.94 0 0 1 16 10z" fill="#FF5F00" />
                </svg>
              </div>
              {/* Maestro / Card */}
              <div className="bg-white px-2 py-1 rounded flex items-center justify-center h-7 w-11 border border-zinc-700 shadow-sm shrink-0 hover:scale-105 transition-transform duration-200">
                <svg viewBox="0 0 32 20" className="h-4.5 w-auto">
                  <circle cx="11" cy="10" r="9" fill="#00A2E8" />
                  <circle cx="21" cy="10" r="9" fill="#EB001B" opacity="0.85" />
                  <path d="M16 10a8.94 8.94 0 0 1 2.37-6.04 8.94 8.94 0 0 1 0 12.08A8.94 8.94 0 0 1 16 10z" fill="#751A80" />
                </svg>
              </div>
              {/* Paypal */}
              <div className="bg-white px-2 py-1 rounded flex items-center justify-center h-7 w-11 border border-zinc-700 shadow-sm shrink-0 hover:scale-105 transition-transform duration-200">
                <svg viewBox="0 0 32 20" className="h-3.5 w-auto" fill="#003087">
                  <path d="M12.6 1.8 C13.3 1.1 14.3 0.8 15.6 0.8 H23.0 C24.0 0.8 24.8 1.4 25.0 2.4 L27.4 13.5 C27.6 14.5 26.8 15.4 25.8 15.4 H20.6 L19.4 21.0 C19.3 21.6 18.8 22.0 18.2 22.0 H13.6 C13.0 22.0 12.5 21.5 12.6 20.8 L15.6 6.8 L12.6 6.8 C12.0 6.8 11.5 6.3 11.6 5.6 L12.6 1.8 Z" fill="#0079C1" />
                  <path d="M8.6 5.8 C9.3 5.1 10.3 4.8 11.6 4.8 H19.0 C20.0 4.8 20.8 5.4 21.0 6.4 L23.4 17.5 C23.6 18.5 22.8 19.4 21.8 19.4 H16.6 L15.4 25.0 C15.3 25.6 14.8 26.0 14.2 26.0 H9.6 C9.0 26.0 8.5 25.5 8.6 24.8 L11.6 10.8 L8.6 10.8 C8.0 10.8 7.5 10.3 7.6 9.6 L8.6 5.8 Z" />
                </svg>
              </div>
              {/* Google Pay */}
              <div className="bg-white px-2 py-1 rounded flex items-center justify-center h-7 w-11 border border-zinc-700 shadow-sm shrink-0 hover:scale-105 transition-transform duration-200">
                <svg viewBox="0 0 37 15" className="h-3.5 w-auto" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.06 6.44h4.74c-.09.6-.36 1.1-.78 1.48v1.23h1.29c.75-.69 1.19-1.72 1.19-2.95 0-.25-.02-.5-.06-.73H6.06v1.97z" fill="#4285F4"/>
                  <path d="M6.06 10.5c1.43 0 2.63-.47 3.51-1.3l-1.71-1.33c-.47.32-1.07.51-1.8.51-1.38 0-2.55-.93-2.97-2.19H1.72v1.38c.87 1.73 2.66 2.93 4.74 2.93z" fill="#34A853"/>
                  <path d="M3.09 7.19a3.86 3.86 0 010-2.46V3.35H1.72a6.02 6.02 0 000 5.22l1.37-1.38z" fill="#FBBC05"/>
                  <path d="M6.06 2.56c.78 0 1.48.27 2.03.8l1.52-1.52C8.69.93 7.49.5 6.06.5A4.77 4.77 0 001.32 3.43l1.37 1.38c.42-1.26 1.59-2.25 2.97-2.25z" fill="#EA4335"/>
                  <text x="15" y="11" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="10.5" fill="#5F6368" letterSpacing="-0.2">Pay</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Support Button */}
      <a
        href="https://wa.me/918866304000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25d366] text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center whatsapp-pulse"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6.5 h-6.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.59 1.973 14.12 .95 11.5 0.95c-5.437 0-9.862 4.371-9.866 9.8.002 2.01.534 3.97 1.54 5.68L2.17 21.8l5.59-1.446c-.057-.101-.115-.202-.173-.3z" />
          <path d="M12.008 2.01c-4.852 0-8.8 3.948-8.8 8.8.003 1.95.64 3.75 1.72 5.21l-1.12 4.1 4.2-1.08c1.42.92 3.09 1.41 4.83 1.41 4.851 0 8.8-3.949 8.8-8.8 0-4.852-3.949-8.8-8.83-8.8zm4.98 12.26c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.23-.55-.48-.47-.66-.48-.17-.01-.37-.01-.57-.01-.2 0-.52.08-.79.37-.27.29-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.09 4.5.71.31 1.27.5 1.7.64.72.23 1.37.2 1.88.12.57-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.1-.25-.19-.52-.33z" />
        </svg>
      </a>
    </>
  )
}
