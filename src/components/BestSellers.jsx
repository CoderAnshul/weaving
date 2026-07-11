import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Phone } from 'lucide-react'
import { products } from '../data/products'

export default function BestSellers() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="relative py-24 sm:py-28 bg-white">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#241C15 0.7px, transparent 0.7px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <p className="font-body text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#A63446] uppercase mb-4">
              Curated Masterpieces
            </p>
            <h2 className="font-display italic text-4xl sm:text-5xl text-[#241C15] mb-4">
              Our <span className="not-italic font-semibold text-[#146B5E]">Best Sellers</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-[#241C15]/75 leading-relaxed">
              Explore our most sought-after polymer film rolls and embroidery sequence sheets, trusted by leading manufacturing and textile industries across Surat and pan-India.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, index) => {
            const isHovered = hoveredCard === p.id

            return (
              <motion.div
                key={p.id}
                onMouseEnter={() => setHoveredCard(p.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                {/* Image Showcase */}
                <div className="relative aspect-square w-full bg-[#fafaf9] overflow-hidden flex items-center justify-center p-6">
                  {/* Badge */}
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase text-white shadow-sm bg-[#A63446]">
                    {p.badge}
                  </span>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-slate-100 shadow-sm">
                    <Star className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                    <span className="font-body text-[10px] font-bold text-slate-800">{p.rating.toFixed(1)}</span>
                  </div>

                  {/* Product Spool Image */}
                  <div className="relative w-full h-full flex items-center justify-center p-2">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-contain group-hover:scale-106 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="font-body text-[10px] font-bold text-[#146B5E] mb-1.5 uppercase tracking-wider">
                    {p.category === 'polymer' ? 'Polymer Film' : 'Embroidery'}
                  </span>
                  
                  <h3 className="font-body font-semibold text-[#241C15] text-base leading-snug mb-2 group-hover:text-[#A63446] transition-colors line-clamp-2 h-12">
                    {p.name}
                  </h3>

                  {/* Reviews count */}
                  <span className="font-body text-[11px] text-[#241C15]/50 mb-4 block">
                    ({p.reviews} verified purchases)
                  </span>

                  <div className="border-t border-slate-100 pt-3 mt-auto">
                    <div className="flex justify-between items-baseline mb-4">
                      <span className="font-body text-xs text-slate-400">Rate</span>
                      <span className="font-body font-bold text-lg text-[#A63446]">{p.price}</span>
                    </div>

                    {/* Action Row */}
                    <div className="flex gap-2">
                      <a
                        href="tel:+918866304000"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#A63446] hover:bg-[#8f2b3a] text-white font-body text-[11px] font-semibold transition cursor-pointer text-center"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`https://wa.me/918866304000?text=Hi!%20I%20am%20interested%20in%20your%20product%3A%20${encodeURIComponent(p.name)}%20priced%20at%20${encodeURIComponent(p.price)}.%20Please%20provide%20more%20details.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-emerald-500 hover:bg-emerald-50 text-emerald-600 font-body text-[11px] font-semibold transition cursor-pointer text-center"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.46 3.475 1.332 4.987l-1.354 4.95 5.064-1.328A9.953 9.953 0 0 0 12.012 22c5.506 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm6.09 13.985c-.25.702-1.228 1.282-1.688 1.332-.4.043-.92.05-1.472-.124-.343-.109-.778-.261-1.341-.5-2.387-1.01-3.924-3.414-4.042-3.576-.118-.162-.97-1.289-.97-2.459 0-1.17.61-1.745.827-1.98.217-.235.474-.293.633-.293.158 0 .316.002.454.008.145.006.336-.056.527.4.2.477.678 1.66.737 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.312-.356.418-.118.118-.242.247-.104.483.137.235.61.996 1.31 1.62.9.8 1.66 1.05 1.897 1.17.237.12.376.1.514-.06.138-.162.61-.71.77-.954.162-.244.32-.2.535-.12.217.08 1.38.652 1.617.77.237.118.395.178.454.278.06.1.06.58-.19 1.282z"/>
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
