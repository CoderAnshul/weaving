import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowLeft } from 'lucide-react'

export default function ContactPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-[#fafaf9] pt-28 pb-20 font-body">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Work+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Work Sans', sans-serif; }
      `}</style>

      {/* Decorative dot background */}
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#241C15 0.7px, transparent 0.7px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Navigation & Breadcrumbs */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#241C15]/60 hover:text-[#A63446] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="text-xs sm:text-sm font-semibold text-[#241C15]/40">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-[#A63446]">Contact Us</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#A63446] uppercase bg-[#A63446]/5 px-3.5 py-1.5 rounded-full mb-4 inline-block">
            Get In Touch
          </span>
          <h1 className="font-display italic text-4xl sm:text-6xl text-[#241C15] mt-4 mb-4">
            Contact <span className="not-italic font-semibold text-[#146B5E]">SSP Jari</span>
          </h1>
          <p className="text-sm sm:text-base text-[#241C15]/70 leading-relaxed">
            Have questions about our metallic films, sequin rolls, or bulk order rates? Feel free to reach out to our team. We usually respond within a few business hours.
          </p>
        </div>

        {/* 3-Column Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Showroom */}
          <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-slate-50 border border-slate-100 text-[#A63446] mb-5">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#241C15] text-base mb-2">Registered Office</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
              SHIVSHAKTI POLYFILMS PVT. LTD.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
              R.S. No. 427, Block No. 412-B,<br />
              Vill - Pipodra, Tal - Mangrol,<br />
              Dist - Surat - 394110
            </p>
          </div>

          {/* Card 2: Call & WhatsApp */}
          <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-slate-50 border border-slate-100 text-[#146B5E] mb-5">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#241C15] text-base mb-2">Phone &amp; WhatsApp</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-2">
              <span className="font-semibold text-slate-700">Direct Line:</span>{' '}
              <a href="tel:+918866304000" className="hover:text-[#A63446] transition-colors font-medium">+91 88663 04000</a>
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              <span className="font-semibold text-slate-700">WhatsApp Support:</span>{' '}
              <a href="https://wa.me/918866304000" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors underline font-medium">+91 88663 04000</a>
            </p>
          </div>

          {/* Card 3: Email & Socials */}
          <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-slate-50 border border-slate-100 text-purple-700 mb-5">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#241C15] text-base mb-2">Email &amp; Connect</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
              <a href="mailto:support@sspjari.com" className="hover:text-[#A63446] transition-colors font-medium underline">support@sspjari.com</a>
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://www.facebook.com/share/17sNWiTEiR/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-900 hover:text-white flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V2h-3a4 4 0 00-4 4v2z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ssp_sequenceandjari?igsh=MWNvZWhkN2I3YzF5ag=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-900 hover:text-white flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="bg-white border border-slate-100 rounded-3xl p-4 shadow-sm overflow-hidden h-[450px]">
          <iframe
            title="Shivshakti Polyfilms Location Map"
            src="https://maps.google.com/maps?q=Shivshakti%20Polyfilms%20Pvt.%20Ltd.,%20Pipodara,%20Gujarat&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full rounded-2xl border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </div>
  )
}
