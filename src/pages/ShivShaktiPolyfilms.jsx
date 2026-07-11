import { motion } from 'framer-motion'
import { Shield, Sparkles, Award, CheckCircle2, ChevronRight, Layers, Flame, Star, Palette, Truck, Zap } from 'lucide-react'

export default function ShivShaktiPolyfilms() {
  const stats = [
    { label: 'Industry Experience', value: '20+ Years', icon: Star, color: '#A63446' },
    { label: 'Monthly Production', value: '700 Tons', icon: Zap, color: '#146B5E' },
    { label: 'Roll Varieties', value: '400+ Types', icon: Layers, color: '#C9962C' },
    { label: 'Color Options', value: '250+ Shades', icon: Palette, color: '#2B3A67' },
  ]

  const products = [
    { name: 'Glass Sequin Rolls', desc: 'Highly reflective, premium rolls offering a diamond-like glass shine.' },
    { name: 'Wall Moti Sequin Rolls', desc: 'Textured sequin rolls designed to replicate beadwork embroidery.' },
    { name: 'Holography Rolls', desc: 'Multi-tonal rainbow film that shifts colors dynamically with light.' },
    { name: 'Devdas Rolls', desc: 'Traditional heavy-finish rolls curated for rich designer saris.' },
    { name: 'Milky Rainbow Rolls', desc: 'Soft pastel rolls with an iridescent pearlescent finish.' },
    { name: 'Metallic Films', desc: 'Base high-tensile films used for custom luxury packaging and textile trims.' },
    { name: 'Metallic Yarn', desc: 'Strong, uniformly twisted yarns for dense handloom and machine weaving.' },
    { name: 'Plain Color Sequin Rolls', desc: 'Classic, solid-hue rolls ranging from subtle mattes to brilliant glosses.' },
  ]

  const strengths = [
    { title: '20 Years of Expertise', desc: 'Two decades of manufacturing leadership and industrial trust.' },
    { title: 'Zero Shade Variation', desc: 'Guaranteed color match consistency, even for repeat orders placed months apart.' },
    { title: 'Custom Shade Development', desc: 'Collaborate with our lab to formulate any custom color or thickness you specify.' },
    { title: 'Bulk Order Capabilities', desc: 'Scalable production lines to handle multi-ton commercial demands efficiently.' },
    { title: 'On-Time Logistics', desc: 'Robust network ensuring on-time delivery across national and global markets.' },
    { title: 'Certified Reliability', desc: 'Fully compliant with ISO, GST, and MSME frameworks, assuring quality standards.' },
  ]

  return (
    <div className="pt-24 min-h-screen bg-[#fafaf9] font-body text-[#241C15]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Work+Sans:wght@400;500;600&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Work Sans', sans-serif; }
      `}</style>

      {/* Decorative dot background */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#241C15 0.7px, transparent 0.7px)',
          backgroundSize: '26px 26px',
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#eef1f2] to-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#146B5E]/20 bg-white font-body text-xs font-semibold tracking-wide text-[#146B5E] mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Industry Leader Since 2006
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display italic text-4xl sm:text-6xl text-[#241C15] leading-tight mb-6 max-w-4xl mx-auto"
          >
            Shiv Shakti Polyfilms <br />
            <span className="not-italic font-semibold text-[#A63446]">Pvt. Ltd.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-base sm:text-lg text-[#241C15]/75 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A premier manufacturer in the Sequin Roll industry located in Pipodara, Surat. We represent quality, consistency, and trust across Indian and global markets.
          </motion.p>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-6"
                  style={{ backgroundColor: s.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-display text-2xl sm:text-3xl font-semibold text-[#241C15] mb-1">
                    {s.value}
                  </span>
                  <span className="block font-body text-xs text-[#241C15]/60 uppercase tracking-wider font-medium">
                    {s.label}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* About Company Details */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              className="lg:col-span-6 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display italic text-3xl sm:text-4xl text-[#241C15]">
                Manufacturing Excellence &amp; <span className="not-italic font-semibold text-[#146B5E]">Precision</span>
              </h2>
              <p className="font-body text-sm sm:text-base text-[#241C15]/75 leading-relaxed">
                SHIV SHAKTI POLYFILMS PVT. LTD. has been leading sequin roll production since 2006. Operating from our state-of-the-art facility in Pipodara, Surat, we serve both domestic and international markets. Our massive facility employs a team of 100+ professionals dedicated to research, innovation, and strict quality control.
              </p>
              <p className="font-body text-sm sm:text-base text-[#241C15]/75 leading-relaxed">
                We formulate our products using premium raw materials, including high-grade Polyester Film, uniform Yarn, Epoxy Chemicals, and high-performance Dyes. This careful selection ensures that our Sequin Rolls survive intense stitching runs, maintaining shine and stability without cracking or fading.
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#fafaf9] border border-slate-100 shadow-sm relative overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute right-0 top-0 w-24 h-24 bg-[#146B5E]/5 rounded-bl-full" />
              <div className="flex gap-4 items-start mb-6">
                <div className="p-3 rounded-2xl bg-[#146B5E]/10 text-[#146B5E] shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-body font-bold text-base text-[#241C15]">Repeat Order Shade matching Guarantee</h3>
                  <p className="font-body text-xs text-[#241C15]/50 mt-0.5">Strict Zero-Variation Quality Control</p>
                </div>
              </div>
              <p className="font-body text-sm text-[#241C15]/70 leading-relaxed mb-6">
                One of our defining features is color consistency. Through advanced dye-batch tracking and computerized epoxy mixing, we guarantee that repeat orders placed even <strong>6 months later</strong> will match your initial shade with absolute precision.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-sm text-[#241C15]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#146B5E]" />
                  <span>Computerized shade cataloging</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#241C15]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#146B5E]" />
                  <span>UV-light shade verification</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#241C15]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#146B5E]" />
                  <span>Zero batch-to-batch variation</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-20 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display italic text-3xl sm:text-4xl text-[#241C15] mb-4">
              Our Sequin Roll <span className="not-italic font-semibold text-[#A63446]">Catalog</span>
            </h2>
            <p className="font-body text-sm text-[#241C15]/70 leading-relaxed">
              We manufacture over 400 varieties of sequin rolls and films, accommodating thicknesses from 75 microns to 180 microns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, idx) => (
              <motion.div
                key={p.name}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#146B5E]/20 transition-all group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className="flex items-center gap-2 text-[#A63446] mb-3 font-semibold font-body text-sm">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>0{idx + 1}</span>
                </div>
                <h3 className="font-body font-bold text-[#241C15] text-base mb-2 group-hover:text-[#A63446] transition-colors">
                  {p.name}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#241C15]/60 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Strengths & Certifications */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Strengths Column */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <h2 className="font-display italic text-3xl sm:text-4xl text-[#241C15] mb-4">
                  Why Choose <span className="not-italic font-semibold text-[#146B5E]">Shiv Shakti</span>
                </h2>
                <p className="font-body text-sm text-[#241C15]/70 max-w-xl">
                  We align advanced manufacturing with customer-centric services to guarantee unmatched outcomes.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {strengths.map((str) => (
                  <div key={str.title} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A63446] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-body font-bold text-sm sm:text-base text-[#241C15] mb-1.5">{str.title}</h4>
                      <p className="font-body text-xs sm:text-sm text-[#241C15]/60 leading-relaxed">{str.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Trust Column */}
            <motion.div
              className="lg:col-span-4 bg-[#fafaf9] border border-slate-100 rounded-3xl p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-body font-bold text-base text-[#241C15] mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#A63446]" />
                Compliance &amp; Trust
              </h3>
              
              <p className="font-body text-xs sm:text-sm text-[#241C15]/70 leading-relaxed mb-6">
                We are committed to operational transparency. Shiv Shakti Polyfilms is certified with standard industrial frameworks including:
              </p>

              <div className="space-y-4">
                {[
                  { title: 'ISO 9001:2015', desc: 'Quality Management Systems' },
                  { title: 'GST Registration', desc: 'Standard tax compliance' },
                  { title: 'MSME Certified', desc: 'Recognized enterprise standard' },
                  { title: 'Export Compliant', desc: 'Approved for international trade' },
                ].map((cert) => (
                  <div key={cert.title} className="p-3 bg-white border border-slate-200/50 rounded-xl">
                    <span className="block font-body font-semibold text-xs text-[#241C15]">{cert.title}</span>
                    <span className="block font-body text-[10px] text-[#241C15]/50">{cert.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Inquiry CTA Section */}
      <section className="py-20 bg-gradient-to-t from-[#eef1f2] to-transparent text-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-6">
          <h2 className="font-display italic text-3xl sm:text-4xl text-[#241C15]">
            Place a Bulk Order or <span className="not-italic font-semibold text-[#A63446]">Custom Shade</span> Inquiry
          </h2>
          <p className="font-body text-sm text-[#241C15]/70 leading-relaxed max-w-xl mx-auto">
            Ready to design a custom sequin roll thickness or color option? Get in touch with our team in Surat for quotes and catalog requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="tel:+918866304000"
              className="px-8 py-3.5 rounded-full bg-[#A63446] hover:bg-[#8f2b3a] text-white font-body font-semibold text-sm transition shadow"
            >
              Call Executive
            </a>
            <a
              href="https://wa.me/918866304000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-slate-350 hover:bg-white text-[#241C15] font-body font-semibold text-sm transition"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
