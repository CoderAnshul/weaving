import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Phone, Star, ChevronRight, ArrowRight } from 'lucide-react'
import { products } from '../data/products'

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
  exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.3 } },
}

export default function Categories() {
  const [activeImageIndexes, setActiveImageIndexes] = useState({
    prod1: 0,
    prod2: 0,
    prod3: 0,
    prod4: 0,
  })
  
  const prefersReducedMotion = useReducedMotion()

  const handleImageSelect = (productId, index, e) => {
    e.preventDefault()
    setActiveImageIndexes(prev => ({
      ...prev,
      [productId]: index
    }))
  }

  // Filter to show exactly two premium products (prod1 and prod4) on the homepage
  const visibleProducts = products.filter((p) => p.id === 'prod1' || p.id === 'prod4')

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
                  className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-500 flex flex-col md:flex-row p-6 gap-6 group"
                >
                  
                  {/* Left: Image Carousel & Gallery */}
                  <div className="md:w-1/2 flex flex-col gap-4">
                    <Link to={`/product/${p.id}`} className="block relative aspect-square w-full rounded-2xl bg-[#fafaf9] border border-slate-100 overflow-hidden p-4">
                      {/* Badge */}
                      <span className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase text-white shadow-sm bg-[#A63446]">
                        {p.badge}
                      </span>

                      {/* Rating */}
                      <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-100 shadow-sm">
                        <Star className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                        <span className="font-body text-[10px] font-bold text-slate-800">{p.rating.toFixed(1)}</span>
                      </div>

                      {/* Main Image */}
                      <img
                        src={activeImg}
                        alt={p.name}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                      />
                    </Link>

                    {/* Image Thumbnails (only if multiple images) */}
                    {p.images.length > 1 && (
                      <div className="flex gap-2 justify-center">
                        {p.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => handleImageSelect(p.id, idx, e)}
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

                      <Link to={`/product/${p.id}`} className="block group/title">
                        <h3 className="font-body font-bold text-[#241C15] text-lg sm:text-xl leading-snug mb-3 group-hover/title:text-[#A63446] transition-colors">
                          {p.name}
                        </h3>
                      </Link>


                      <p className="font-body text-xs text-[#241C15]/70 leading-relaxed mb-5 line-clamp-3">
                        {p.description}
                      </p>

                      {/* Technical Specs List */}
                      <div className="border-t border-slate-100 pt-4 mb-6">
                        <h4 className="font-body text-[11px] font-bold tracking-wider text-[#241C15]/50 uppercase mb-2">Technical Specifications</h4>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-body">
                          {Object.entries(p.specs).slice(0, 4).map(([key, val]) => (
                            <div key={key} className="flex flex-col border-b border-slate-55 pb-1">
                              <span className="text-[#241C15]/50 text-[10px] uppercase font-semibold">{key}</span>
                              <span className="text-[#241C15]/80 font-medium line-clamp-1">{val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quick Connect Actions */}
                    <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                      <Link
                        to={`/product/${p.id}`}
                        className="w-full flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-slate-900 hover:bg-black text-white font-body text-xs font-semibold shadow-sm transition cursor-pointer text-center"
                      >
                        <span>View Specifications</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>

                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href="tel:+918866304000"
                          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-55 text-slate-700 font-body text-[11px] font-semibold transition cursor-pointer text-center"
                        >
                          <Phone className="w-3.5 h-3.5 text-slate-650" />
                          <span>Call</span>
                        </a>
                        <a
                          href={`https://wa.me/918866304000?text=Hi!%20I%20am%20interested%20in%20your%20product%3A%20${encodeURIComponent(p.name)}.%20Please%20provide%20more%20details.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-emerald-500 hover:bg-emerald-50 text-emerald-600 font-body text-[11px] font-semibold transition cursor-pointer text-center"
                        >
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>

                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
        
        {/* Catalogue CTA */}
        <div className="text-center mt-16">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#A63446] hover:bg-[#8f2b3a] text-white font-body text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102 cursor-pointer"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}