import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowRight, ImageIcon } from 'lucide-react'

// ---- Data (swap names/colors/filter group for your real categories) ----

const filters = [
  { id: 'all', label: 'All' },
  { id: 'jari', label: 'Jari' },
  { id: 'dori', label: 'Dori' },
  { id: 'film', label: 'Film' },
]

const categories = [
  {
    id: 'chapat-jari',
    name: '100D Chapat Jari',
    group: 'jari',
    primary: '#d9b878',
    secondary: '#8a6a34',
    cap: '#241C15',
  },
  {
    id: 'glitter-dori',
    name: 'Glitter Dori',
    group: 'dori',
    primary: '#4a4d52',
    secondary: '#17181a',
    cap: '#0d0d0d',
    sparkle: true,
  },
  {
    id: 'metallic-film',
    name: 'Metallic Film',
    group: 'film',
    primary: '#e4cfa8',
    secondary: '#a9895a',
    cap: '#5b4632',
  },
  {
    id: 'polyester-jari',
    name: '180D Polyester Jari',
    group: 'jari',
    primary: '#5f6e3f',
    secondary: '#33401f',
    cap: '#241C15',
  },
  {
    id: 'pithha-dori',
    name: '3 Tar Pithha Dori',
    group: 'dori',
    primary: '#cba869',
    secondary: '#8a6a34',
    cap: '#5b4632',
    accent: '#146B5E',
  },
  {
    id: 'val-dori',
    name: 'Val Dori',
    group: 'dori',
    primary: '#c9a45f',
    secondary: '#7a5a2c',
    cap: '#3d2e18',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -10, scale: 0.97, transition: { duration: 0.25 } },
}

// Placeholder box — swap this for a real <img src={c.image} alt={c.name} ... /> once photos are ready
function ImagePlaceholder() {
  return (
    <div className="w-full aspect-square rounded-xl bg-[#241C15]/10 flex items-center justify-center">
      <ImageIcon className="w-7 h-7 text-[#241C15]/25" />
    </div>
  )
}

export default function Categories() {
  const [active, setActive] = useState('all')
  const prefersReducedMotion = useReducedMotion()

  const visible =
    active === 'all' ? categories : categories.filter((c) => c.group === active)

  return (
    <section className="relative py-24 sm:py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Work+Sans:wght@400;500;600&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Work Sans', sans-serif; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-body text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#A63446] uppercase mb-4">
            Crafted for Every Weave
          </p>
          <h2 className="font-display italic text-4xl sm:text-5xl text-[#241C15] mb-4">
            Our <span className="not-italic font-semibold text-[#146B5E]">Categories</span>
          </h2>
          <p className="font-body text-[#241C15]/70 leading-relaxed">
            Every thread we spool is sorted by weave, weight, and finish, so you can find the
            right one without wading through the wrong ones.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((f) => {
            const isActive = active === f.id
            return (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`font-body text-sm font-semibold px-5 py-2 rounded-full border transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#A63446] border-[#A63446] text-white'
                    : 'bg-transparent border-[#241C15]/20 text-[#241C15]/70 hover:border-[#A63446]/50 hover:text-[#A63446]'
                }`}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((c) => (
              <motion.div
                key={c.id}
                layout
                variants={cardVariant}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover={prefersReducedMotion ? {} : { y: -6 }}
                className="group flex flex-col items-center text-center bg-white/50 border border-[#241C15]/10 rounded-2xl p-6 sm:p-7 hover:border-[#A63446]/30 hover:bg-white/80 transition-colors duration-300"
              >
                <ImagePlaceholder />
                <span className="font-body text-sm sm:text-base font-semibold text-[#241C15] mt-4 mb-2 tracking-wide">
                  {c.name}
                </span>
                <span className="inline-flex items-center gap-1 font-body text-xs font-semibold text-[#A63446] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Reset / view all */}
        {active !== 'all' && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setActive('all')}
              className="font-body text-sm font-semibold px-6 py-2.5 rounded-full bg-[#241C15] text-white hover:bg-[#241C15]/85 transition-colors duration-300 cursor-pointer"
            >
              View All Categories
            </button>
          </div>
        )}
      </div>
    </section>
  )
}