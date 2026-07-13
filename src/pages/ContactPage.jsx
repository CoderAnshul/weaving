import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate API request
    setTimeout(() => {
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 800)
  }

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
            <h3 className="font-bold text-[#241C15] text-base mb-2">Surat Showroom</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Shop no 1, Plot no 75, Street no 21,<br />
              Lambe Hanuman Rd, Ghansyamnagar,<br />
              Varachha, Surat, Gujarat 395006
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

        {/* Contact Form & Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Message Form (7 Columns) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#241C15] mb-2">Send Us a Message</h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-8">Fill out the quick form below and our sales agent will review your inquiry immediately.</p>
              
              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center text-emerald-800 my-8">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-bold text-base mb-1">Message Sent Successfully!</h3>
                  <p className="text-xs sm:text-sm text-emerald-700/80">Thank you for writing to us. Our team will contact you very soon.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-5 text-xs font-bold text-emerald-800 hover:text-emerald-950 underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Patel"
                        className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#A63446] rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#A63446]/20 transition"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@example.com"
                        className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#A63446] rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#A63446]/20 transition"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#A63446] rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#A63446]/20 transition"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Your Message / Inquiry</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi! I want to request a wholesale quote for the Metallic Film Rolls. Please contact me with details..."
                      className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#A63446] rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#A63446]/20 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#A63446] hover:bg-[#8f2b3a] text-white text-xs sm:text-sm font-bold shadow-sm transition cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Interactive Map (5 Columns) */}
          <div className="lg:col-span-5 bg-white border border-slate-100 rounded-3xl p-4 shadow-sm overflow-hidden flex flex-col h-full min-h-[300px]">
            <iframe
              title="SSP Jari Surat Showroom Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4674176465495!2d72.846505!3d21.213305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f479d2822a1%3A0xe54e6eb4dfd1c3cb!2sLambe%20Hanuman%20Rd%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full rounded-2xl border-0 min-h-[350px] flex-grow"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </div>
  )
}
