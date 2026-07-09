import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'gold-zari',
    name: 'Classic Suvarna Jari',
    category: 'Gold Metallic Zari',
    price: '₹450',
    originalPrice: '₹520',
    rating: 5.0,
    reviews: 48,
    badge: 'Artisan Choice',
    tagColor: '#A63446',
    glowColor: 'rgba(201, 150, 44, 0.18)',
    filterStyle: {}, // original gold
  },
  {
    id: 'silver-zari',
    name: 'Rajat Sterling Jari',
    category: 'Silver Metallic Zari',
    price: '₹480',
    originalPrice: '₹550',
    rating: 4.9,
    reviews: 36,
    badge: 'Popular',
    tagColor: '#146B5E',
    glowColor: 'rgba(148, 163, 184, 0.18)',
    filterStyle: { filter: 'saturate(0) brightness(1.08) contrast(1.05)' }, // silver
  },
  {
    id: 'copper-zari',
    name: 'Tamra Antique Zari',
    category: 'Copper Metallic Zari',
    price: '₹420',
    originalPrice: '₹480',
    rating: 4.8,
    reviews: 29,
    badge: 'New Release',
    tagColor: '#C9962C',
    glowColor: 'rgba(180, 83, 9, 0.15)',
    filterStyle: { filter: 'sepia(0.65) saturate(1.5) hue-rotate(-25deg) contrast(1.1) brightness(0.92)' }, // copper
  },
  {
    id: 'champagne-zari',
    name: 'Ganga Jamuna Jari',
    category: 'Champagne Gold Zari',
    price: '₹490',
    originalPrice: '₹560',
    rating: 4.9,
    reviews: 42,
    badge: 'Limited Edition',
    tagColor: '#2B3A67',
    glowColor: 'rgba(161, 143, 110, 0.16)',
    filterStyle: { filter: 'saturate(0.4) brightness(1.02) contrast(1.1)' }, // champagne gold
  },
]

export default function BestSellers() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="relative py-24 sm:py-28 bg-[#fafaf9]">
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
          <div className="max-w-xl">
            <p className="font-body text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#A63446] uppercase mb-4">
              Curated Masterpieces
            </p>
            <h2 className="font-display italic text-4xl sm:text-5xl text-[#241C15] mb-4">
              Our <span className="not-italic font-semibold text-[#146B5E]">Best Sellers</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-[#241C15]/75 leading-relaxed">
              Explore our most sought-after metallic zari spools, woven into heirloom saris and luxury couture by master craftsmen across India.
            </p>
          </div>
          <button className="group mt-6 md:mt-0 flex items-center gap-2 font-body text-sm font-semibold text-[#A63446] hover:text-[#8f2b3a] transition-colors cursor-pointer shrink-0">
            View All Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, index) => {
            const isHovered = hoveredCard === p.id

            return (
              <motion.div
                key={p.id}
                onMouseEnter={() => setHoveredCard(p.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                style={{
                  boxShadow: isHovered ? `0 20px 40px -15px ${p.glowColor}` : 'none',
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                {/* Image Showcase */}
                <div className="relative aspect-square w-full bg-[#fcfbf9] overflow-hidden flex items-center justify-center p-8">
                  {/* Badge */}
                  <span
                    className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-white shadow-sm"
                    style={{ backgroundColor: p.tagColor }}
                  >
                    {p.badge}
                  </span>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-100 shadow-sm">
                    <Star className="w-3.2 h-3.2 fill-amber-400 stroke-amber-400" />
                    <span className="font-body text-[10px] font-bold text-slate-800">{p.rating.toFixed(1)}</span>
                  </div>

                  {/* Product Spool Image */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src="/spool_gold.png"
                      alt={p.name}
                      style={p.filterStyle}
                      className="w-48 h-48 sm:w-52 sm:h-52 object-contain group-hover:scale-106 transition-transform duration-500"
                    />
                  </div>

                  {/* Soft Background Radial Shadow */}
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/[0.01] pointer-events-none" />
                </div>

                {/* Info block */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="font-body text-xs font-semibold text-[#146B5E] mb-1.5 uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="font-body font-semibold text-[#241C15] text-lg leading-tight mb-2 group-hover:text-[#A63446] transition-colors">
                    {p.name}
                  </h3>

                  {/* Reviews count */}
                  <span className="font-body text-xs text-[#241C15]/50 mb-5 block">
                    ({p.reviews} verified reviews)
                  </span>

                  {/* Pricing and Action row */}
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-body font-bold text-xl text-[#241C15]">{p.price}</span>
                      <span className="font-body text-sm text-[#241C15]/40 line-through">{p.originalPrice}</span>
                    </div>
                    
                    <button className="h-10 w-10 rounded-full bg-[#241C15] hover:bg-[#A63446] text-white flex items-center justify-center transition-colors duration-300 cursor-pointer shadow-md shadow-slate-900/10">
                      <ArrowRight className="w-4 h-4" />
                    </button>
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
