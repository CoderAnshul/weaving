import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Phone, ArrowRight, ArrowLeft } from 'lucide-react'
import { products } from '../data/products'

const filters = [
  { id: 'all', label: 'All Products' },
  { id: 'polymer', label: 'Polymer Films' },
  { id: 'other', label: 'Other / Embroidery' },
]

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
  exit: { opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.4 } },
}

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeImageIndexes, setActiveImageIndexes] = useState({
    prod1: 0,
    prod2: 0,
    prod3: 0,
    prod4: 0,
  })

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleImageSelect = (productId, index, e) => {
    e.preventDefault() // prevent navigating if clicking thumbnail inside a link
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
    <div className="min-h-screen bg-[#fafaf9] pt-28 pb-20 font-body">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Work+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Work Sans', sans-serif; }
      `}</style>

      {/* Decorative background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#241C15 0.7px, transparent 0.7px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Breadcrumb & Back button */}
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
            <span className="text-[#A63446]">Catalogue</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#A63446] uppercase bg-[#A63446]/5 px-3.5 py-1.5 rounded-full mb-4 inline-block">
            Complete Collection
          </span>
          <h1 className="font-display italic text-4xl sm:text-6xl text-[#241C15] mt-4 mb-6 leading-tight">
            Our Complete <span className="not-italic font-semibold text-[#146B5E]">Product Range</span>
          </h1>
          <p className="text-sm sm:text-base text-[#241C15]/70 leading-relaxed max-w-2xl mx-auto">
            Browse through our industry-leading collection of polymer films, golden coated bangles rolls, silver laminations, and embroidery sequin sheets.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-nowrap items-center justify-start md:justify-center gap-3 mb-16 overflow-x-auto no-scrollbar max-w-full py-2">
          {filters.map((f) => {
            const isActive = activeFilter === f.id
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`text-xs sm:text-sm font-semibold px-6 py-3 rounded-full border transition-all duration-300 cursor-pointer shadow-sm hover:scale-102 whitespace-nowrap shrink-0 ${
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

        {/* Catalog Grid */}
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
                  animate="show"
                  exit="exit"
                  viewport={{ once: true }}
                  className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-500 flex flex-col md:flex-row p-6 gap-6 relative group"
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
                        <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                        <span className="text-[10px] font-bold text-slate-800">{p.rating.toFixed(1)}</span>
                      </div>

                      {/* Main Image */}
                      <img
                        src={activeImg}
                        alt={p.name}
                        className="w-full h-full object-contain group-hover:scale-103 transition-transform duration-500"
                      />
                    </Link>

                    {/* Image Thumbnails */}
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
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#146B5E] bg-[#146B5E]/5 px-2.5 py-0.5 rounded-full">
                          {p.category === 'polymer' ? 'Polymer Film' : 'Embroidery'}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-400">
                          Min. Order: {p.minOrder}
                        </span>
                      </div>

                      <Link to={`/product/${p.id}`} className="block group/title">
                        <h3 className="font-bold text-[#241C15] text-lg sm:text-xl leading-snug mb-3 group-hover/title:text-[#A63446] transition-colors">
                          {p.name}
                        </h3>
                      </Link>

                      {/* Price Tag */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-xl font-bold text-[#A63446]">{p.price}</span>
                        <span className="text-xs text-slate-400">Wholesale price</span>
                      </div>

                      <p className="text-xs text-[#241C15]/70 leading-relaxed mb-5 line-clamp-3">
                        {p.description}
                      </p>

                      {/* Technical Specs List */}
                      <div className="border-t border-slate-100 pt-3.5 mb-6">
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
                          {Object.entries(p.specs).slice(0, 4).map(([key, val]) => (
                            <div key={key} className="flex flex-col border-b border-slate-50 pb-1">
                              <span className="text-[#241C15]/50 text-[9px] uppercase font-semibold">{key}</span>
                              <span className="text-[#241C15]/80 font-medium line-clamp-1">{val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quick Connect & View Details Actions */}
                    <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                      <Link
                        to={`/product/${p.id}`}
                        className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-[#A63446] hover:bg-[#8f2b3a] text-white text-xs font-semibold shadow-sm transition cursor-pointer text-center"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href="tel:+918866304000"
                          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-[11px] font-semibold transition cursor-pointer text-center"
                        >
                          <Phone className="w-3 h-3 text-slate-600" />
                          <span>Call</span>
                        </a>
                        <a
                          href={`https://wa.me/918866304000?text=Hi!%20I%20am%20interested%20in%20your%20product%3A%20${encodeURIComponent(p.name)}.%20Please%20provide%20more%20details.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-emerald-500 hover:bg-emerald-50 text-emerald-600 text-[11px] font-semibold transition cursor-pointer text-center"
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
        
      </div>
    </div>
  )
}
