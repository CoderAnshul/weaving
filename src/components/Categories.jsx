import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Phone, Star, Layers, Calendar, ChevronRight } from 'lucide-react'
import { products } from '../data/products'

const filters = [
  { id: 'all', label: 'All Products' },
  { id: 'polymer', label: 'Polymer Films' },
  { id: 'other', label: 'Other / Embroidery' },
]

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
  exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.3 } },
}

export default function Categories() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeImageIndexes, setActiveImageIndexes] = useState({
    prod1: 0,
    prod2: 0,
    prod3: 0,
    prod4: 0,
  })
  
  const prefersReducedMotion = useReducedMotion()

  const handleImageSelect = (productId, index) => {
    setActiveImageIndexes(prev => ({
      ...prev,
      [productId]: index
    }))
  }

  const visibleProducts =
    activeFilter === 'all'
      ? products
      : products.filter((p) => p.category === activeFilter)

  return (
    <section id="catalogue" className="relative py-24 sm:py-28 bg-[#fafaf9]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Work+Sans:wght@400;500;600;700&display=swap');
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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#A63446] uppercase mb-4">
            Industrial Range &amp; Supplies
          </p>
          <h2 className="font-display italic text-4xl sm:text-5xl text-[#241C15] mb-4">
            Our Premium <span className="not-italic font-semibold text-[#146B5E]">Products</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-[#241C15]/70 leading-relaxed">
            We manufacture and supply high-performance coated films, plain polymer rolls, and sequin sheets engineered for maximum durability, consistency, and style.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {filters.map((f) => {
            const isActive = activeFilter === f.id
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`font-body text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full border transition-all duration-300 cursor-pointer shadow-sm hover:scale-102 ${
                  isActive
                    ? 'bg-[#A63446] border-[#A63446] text-white shadow-[#A63446]/20'
                    : 'bg-white border-slate-200 text-[#241C15]/70 hover:border-[#A63446]/50 hover:text-[#A63446]'
                }`}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        {/* Product Catalog Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((p) => {
              const activeIndex = activeImageIndexes[p.id] || 0
              const activeImg = p.images[activeIndex] || p.images[0]

              return (
                <motion.div
                  key={p.id}
                  layout
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="show"
                  exit="exit"
                  viewport={{ once: true, amount: 0.15 }}
                  className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-500 flex flex-col md:flex-row p-6 gap-6"
                >
                  
                  {/* Left: Image Carousel & Gallery */}
                  <div className="md:w-1/2 flex flex-col gap-4">
                    <div className="relative aspect-square w-full rounded-2xl bg-[#fafaf9] border border-slate-100 overflow-hidden flex items-center justify-center p-4">
                      {/* Badge */}
                      <span className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase text-white shadow-sm bg-[#A63446]">
                        {p.badge}
                      </span>

                      {/* Rating */}
                      <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-100 shadow-sm">
                        <Star className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                        <span className="font-body text-[10px] font-bold text-slate-800">{p.rating.toFixed(1)}</span>
                      </div>

                      {/* Main Image */}
                      <img
                        src={activeImg}
                        alt={p.name}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Image Thumbnails (only if multiple images) */}
                    {p.images.length > 1 && (
                      <div className="flex gap-2 justify-center">
                        {p.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleImageSelect(p.id, idx)}
                            className={`w-12 h-12 rounded-lg border overflow-hidden p-1 bg-white transition-all cursor-pointer ${
                              idx === activeIndex
                                ? 'border-[#A63446] ring-2 ring-[#A63446]/10 scale-105'
                                : 'border-slate-200 opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img src={img} alt={`${p.name} thumb ${idx}`} className="w-full h-full object-contain" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: Info and Specs */}
                  <div className="md:w-1/2 flex flex-col justify-between">
                    <div>
                      {/* Header info */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-body text-[10px] font-bold uppercase tracking-wider text-[#146B5E] bg-[#146B5E]/5 px-2.5 py-0.5 rounded-full">
                          {p.category === 'polymer' ? 'Polymer Film' : 'Embroidery'}
                        </span>
                        <span className="font-body text-[10px] font-semibold text-slate-400">
                          Min. Order: {p.minOrder}
                        </span>
                      </div>

                      <h3 className="font-body font-bold text-[#241C15] text-lg sm:text-xl leading-snug mb-3">
                        {p.name}
                      </h3>

                      {/* Price Tag */}
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="font-body text-xl font-bold text-[#A63446]">{p.price}</span>
                        <span className="font-body text-xs text-slate-400">Glow price rate</span>
                      </div>

                      <p className="font-body text-xs text-[#241C15]/70 leading-relaxed mb-5">
                        {p.description}
                      </p>

                      {/* Technical Specs List */}
                      <div className="border-t border-slate-100 pt-4 mb-6">
                        <h4 className="font-body text-[11px] font-bold tracking-wider text-[#241C15]/50 uppercase mb-2">Technical Specifications</h4>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-body">
                          {Object.entries(p.specs).map(([key, val]) => (
                            <div key={key} className="flex flex-col border-b border-slate-50 pb-1">
                              <span className="text-[#241C15]/50 text-[10px] uppercase font-semibold">{key}</span>
                              <span className="text-[#241C15]/80 font-medium">{val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quick Connect Actions */}
                    <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-slate-100">
                      <a
                        href="tel:+918866304000"
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#A63446] hover:bg-[#8f2b3a] text-white font-body text-xs font-semibold shadow-sm hover:shadow transition cursor-pointer text-center"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call to Connect</span>
                      </a>
                      <a
                        href={`https://wa.me/918866304000?text=Hi!%20I%20am%20interested%20in%20your%20product%3A%20${encodeURIComponent(p.name)}%20priced%20at%20${encodeURIComponent(p.price)}.%20Please%20provide%20more%20details.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-emerald-500 hover:bg-emerald-50 text-emerald-600 font-body text-xs font-semibold transition cursor-pointer text-center"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.46 3.475 1.332 4.987l-1.354 4.95 5.064-1.328A9.953 9.953 0 0 0 12.012 22c5.506 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm6.09 13.985c-.25.702-1.228 1.282-1.688 1.332-.4.043-.92.05-1.472-.124-.343-.109-.778-.261-1.341-.5-2.387-1.01-3.924-3.414-4.042-3.576-.118-.162-.97-1.289-.97-2.459 0-1.17.61-1.745.827-1.98.217-.235.474-.293.633-.293.158 0 .316.002.454.008.145.006.336-.056.527.4.2.477.678 1.66.737 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.312-.356.418-.118.118-.242.247-.104.483.137.235.61.996 1.31 1.62.9.8 1.66 1.05 1.897 1.17.237.12.376.1.514-.06.138-.162.61-.71.77-.954.162-.244.32-.2.535-.12.217.08 1.38.652 1.617.77.237.118.395.178.454.278.06.1.06.58-.19 1.282z"/>
                        </svg>
                        <span>WhatsApp Inquiry</span>
                      </a>
                    </div>
                  </div>

                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  )
}