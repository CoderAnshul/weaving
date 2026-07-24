import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

// Custom hook to detect prefers-reduced-motion to avoid external dependency issues
function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const listener = (event) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [])

  return prefersReducedMotion
}

const warpThreads = [
  { y: 90, color: '#A63446', delay: 0.1, opacity: 0.16 },
  { y: 160, color: '#2B3A67', delay: 0.25, opacity: 0.14 },
  { y: 230, color: '#C9962C', delay: 0.4, opacity: 0.16 },
  { y: 300, color: '#146B5E', delay: 0.55, opacity: 0.12 },
  { y: 370, color: '#A63446', delay: 0.7, opacity: 0.1 },
]

const templePath =
  'M0,120 L0,102 L22,102 L22,88 L44,88 L44,74 L66,74 L88,74 L88,60 L108,60 L108,46 L128,46 L140,30 L150,16 L160,30 L172,46 L192,46 L192,60 L212,60 L232,60 L232,74 L254,74 L254,88 L276,88 L276,102 L300,102 L300,120 Z'

// ---- Motion variants ----

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.15 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const rootRef = useRef(null)

  const drawTransition = (delay, duration = 1.4) =>
    prefersReducedMotion
      ? { duration: 0 }
      : { duration, delay, ease: [0.65, 0, 0.35, 1] }

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative min-h-screen overflow-hidden bg-white pt-40 pb-24 flex flex-col items-center justify-center"
    >
      {/* Rangoli dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 0.7px, transparent 0.7px)',
          backgroundSize: '26px 26px',
        }}
      />

      {/* Background warp threads */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1000 460"
      >
        {warpThreads.map((t) => (
          <motion.path
            key={t.y}
            d={`M0,${t.y} Q250,${t.y - 22} 500,${t.y} T1000,${t.y}`}
            fill="none"
            stroke={t.color}
            strokeWidth="1"
            strokeOpacity={t.opacity * 0.7}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={drawTransition(t.delay, 1.8)}
            style={{ animation: prefersReducedMotion ? 'none' : `threadDrift 9s ease-in-out infinite` }}
          />
        ))}
      </svg>

      {/* Temple silhouette top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 opacity-30">
        <svg viewBox="0 0 300 120" className="w-full h-16 sm:h-20" preserveAspectRatio="xMidYMin meet">
          <motion.path
            d={templePath}
            fill="none"
            stroke="#A63446"
            strokeWidth="1.5"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={drawTransition(0.1, 1.6)}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Copy Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 text-center lg:text-left"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#A63446]/25 bg-white/70 font-body text-xs font-semibold tracking-wide text-[#A63446] mb-7 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Handloom threads &amp; natural dyes
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display italic text-4xl sm:text-6xl lg:text-7xl text-[#241C15] leading-[1.12] mb-6"
            >
              Woven from heritage,
              <br />
              <span className="not-italic font-semibold text-[#146B5E]">spun for today</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-body text-base sm:text-lg text-[#241C15]/75 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Naturally dyed cotton, silk, and khadi threads, sourced from weaver
              collectives and spun the way they have been for generations.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button className="group w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#A63446] text-white font-body font-semibold text-sm tracking-wide shadow-md shadow-[#A63446]/10 hover:bg-[#8f2b3a] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                Shop Threads
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-[#241C15]/20 text-[#241C15] font-body font-semibold text-sm tracking-wide hover:border-[#241C15]/40 hover:bg-white/40 transition-all duration-300 cursor-pointer">
                Our Craft Story
              </button>
            </motion.div>
          </motion.div>

          {/* New Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-4">
              {/* Decorative background blur shape */}
              <motion.div
                animate={{
                  borderRadius: [
                    "50% 50% 30% 70% / 50% 60% 40% 50%",
                    "30% 70% 70% 30% / 50% 30% 70% 50%",
                    "50% 50% 30% 70% / 50% 60% 40% 50%"
                  ]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-4 bg-gradient-to-tr from-[#146B5E]/20 to-[#A63446]/20 blur-xl opacity-60 scale-105 pointer-events-none"
              />

              {/* Main Morphing Image Container */}
              <motion.div
                animate={{
                  borderRadius: [
                    "42% 58% 70% 30% / 45% 45% 55% 55%",
                    "70% 30% 52% 48% / 60% 40% 60% 40%",
                    "42% 58% 70% 30% / 45% 45% 55% 55%"
                  ]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="overflow-hidden border border-[#241C15]/10 shadow-[0_20px_50px_rgba(36,28,21,0.12)] relative z-10 w-full h-full bg-[#FCFAF5]"
              >
                <img
                  src="/banner.png"
                  alt="Heritage Handloom Craft Visual"
                  className="w-full h-full object-cover scale-105 select-none"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
