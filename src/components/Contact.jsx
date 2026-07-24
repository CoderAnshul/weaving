import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Store, Building } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28 overflow-hidden bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Work+Sans:wght@400;500;600&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Work Sans', sans-serif; }
      `}</style>

      {/* Faint rangoli dot texture */}
      <div
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#241C15 0.7px, transparent 0.7px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Centered Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#A63446] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display italic text-4xl sm:text-5xl text-[#241C15] mb-4">
            We'd love to <span className="not-italic font-semibold text-[#146B5E]">connect</span> with you
          </h2>
          <p className="font-body text-[#241C15]/70 leading-relaxed">
            Whether you have questions about our premium zari spools, custom dye orders, or bulk purchases, feel free to reach out. Or visit our Surat branch!
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Shop */}
          <motion.div
            className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#fafaf9] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-4 rounded-full bg-white border border-slate-200 text-[#A63446] shrink-0 shadow-sm mb-5">
              <Store className="w-6 h-6" />
            </div>
            <h3 className="font-body font-bold text-[#241C15] text-lg mb-3">Retail Showroom</h3>
            <p className="font-body text-sm text-[#241C15]/80 leading-relaxed max-w-xs">
              Shop no 1, Plot no 75, Street no 21,<br />
              Lambe Hanuman Rd, Ghansyamnagar,<br />
              Varachha, Surat, Gujarat - 395006
            </p>
          </motion.div>

          {/* Card 2: Factory */}
          <motion.div
            className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#fafaf9] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-4 rounded-full bg-white border border-slate-200 text-[#146B5E] shrink-0 shadow-sm mb-5">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="font-body font-bold text-[#241C15] text-lg mb-1">Factory &amp; Office</h3>
            <p className="font-body text-[10px] font-semibold text-[#146B5E] tracking-wider uppercase mb-3">
              SHIVSHAKTI POLYFILMS PVT. LTD.
            </p>
            <p className="font-body text-sm text-[#241C15]/80 leading-relaxed max-w-xs">
              R.S. No. 427, Block No. 412-B,<br />
              Vill - Pipodra, Tal - Mangrol,<br />
              Dist - Surat - 394110
            </p>
          </motion.div>

          {/* Card 3: Support & Connect */}
          <motion.div
            className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#fafaf9] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="p-4 rounded-full bg-white border border-slate-200 text-[#2B3A67] shrink-0 shadow-sm mb-5">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-body font-bold text-[#241C15] text-lg mb-3">Support &amp; Connect</h3>
            
            <div className="space-y-4 w-full font-body text-sm">
              <div className="flex flex-col items-center gap-1">
                <span className="text-[10px] text-[#241C15]/50 uppercase tracking-wider font-semibold">Phone &amp; WhatsApp</span>
                <a href="tel:+918866304000" className="hover:text-[#8a2b53] transition-colors font-semibold text-[#241C15]">+91 88663 04000</a>
                <a href="tel:+919099054071" className="hover:text-[#8a2b53] transition-colors font-semibold text-[#241C15]">+91 90990 54071</a>
              </div>
              
              <div className="flex flex-col items-center gap-1 border-t border-[#241C15]/10 pt-3">
                <span className="text-[10px] text-[#241C15]/50 uppercase tracking-wider font-semibold">Email</span>
                <a href="mailto:support@sspjari.com" className="hover:text-[#8a2b53] transition-colors font-semibold text-[#241C15] underline decoration-[#241C15]/20">
                  support@sspjari.com
                </a>
              </div>

              <div className="flex gap-3 justify-center border-t border-[#241C15]/10 pt-3">
                <a
                  href="https://www.facebook.com/share/17sNWiTEiR/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:bg-[#8a2b53] hover:text-white hover:border-[#8a2b53] text-[#241C15]/70 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V2h-3a4 4 0 00-4 4v2z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/ssp_sequenceandjari?igsh=MWNvZWhkN2I3YzF5ag=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:bg-[#8a2b53] hover:text-white hover:border-[#8a2b53] text-[#241C15]/70 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
