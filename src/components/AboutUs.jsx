import { motion, useReducedMotion } from 'framer-motion'

// ---- Data ----

const stats = [
  { id: 'years', value: '15+', label: 'Years of Craft', color: '#A63446' },
  { id: 'artisans', value: '50+', label: 'Artisan Partners', color: '#146B5E' },
  { id: 'states', value: '20+', label: 'States Served', color: '#C9962C' },
  { id: 'dyes', value: '100%', label: 'Natural Dyes', color: '#2B3A67' },
]

// gentle undulating thread path used as the divider under the eyebrow
const dividerPath = 'M0,20 C120,4 220,36 340,20 C460,4 560,36 680,20'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function AboutUs() {
  const prefersReducedMotion = useReducedMotion()

  const drawTransition = (delay, duration = 1.2) =>
    prefersReducedMotion ? { duration: 0 } : { duration, delay, ease: [0.65, 0, 0.35, 1] }

  return (
    <section id="about" className="relative py-24 sm:py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Work+Sans:wght@400;500;600&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Work Sans', sans-serif; }
        .drop-cap::first-letter {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.4rem;
          font-weight: 600;
          color: #A63446;
          float: left;
          line-height: 0.8;
          margin-right: 0.35rem;
          margin-top: 0.15rem;
        }
      `}</style>

      {/* faint rangoli dot texture, consistent with hero */}
      <div
        className="absolute inset-0 opacity-[0.22] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#241C15 0.7px, transparent 0.7px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="max-w-3xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="font-body text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#A63446] uppercase mb-6"
          >
            About SSP Jari
          </motion.p>

          {/* Bobbin + unspooling thread divider */}
          <motion.div variants={fadeUp} className="relative flex justify-center mb-10">
            <svg viewBox="0 0 60 90" className="w-8 h-12 mr-1 shrink-0" style={{ marginTop: '-4px' }}>
              <ellipse cx="30" cy="10" rx="16" ry="5" fill="#241C15" />
              <ellipse cx="30" cy="70" rx="16" ry="5" fill="#241C15" />
              <rect x="14" y="10" width="32" height="60" fill="#146B5E" />
              <ellipse cx="30" cy="20" rx="16" ry="4" fill="none" stroke="#0e5548" strokeWidth="1.5" opacity="0.6" />
              <ellipse cx="30" cy="34" rx="16" ry="4" fill="none" stroke="#0e5548" strokeWidth="1.5" opacity="0.6" />
              <ellipse cx="30" cy="48" rx="16" ry="4" fill="none" stroke="#0e5548" strokeWidth="1.5" opacity="0.6" />
              <ellipse cx="30" cy="62" rx="16" ry="4" fill="none" stroke="#0e5548" strokeWidth="1.5" opacity="0.6" />
              <ellipse cx="30" cy="70" rx="16" ry="5" fill="none" stroke="#241C15" strokeWidth="1.5" />
            </svg>

            <svg viewBox="0 0 700 40" className="w-full max-w-md h-10" preserveAspectRatio="none">
              <motion.path
                d={dividerPath}
                fill="none"
                stroke="#A63446"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={drawTransition(0.2, 1.4)}
              />
              <motion.circle
                cx="680"
                cy="20"
                r="4.5"
                fill="#A63446"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={drawTransition(1.5, 0.4)}
                style={{ transformOrigin: '680px 20px' }}
              />
            </svg>
          </motion.div>

          {/* Copy with drop cap */}
          <motion.p
            variants={fadeUp}
            className="drop-cap font-body text-base sm:text-lg text-[#241C15]/80 leading-relaxed text-left sm:text-center"
          >
            -<span className="font-display italic font-semibold text-[#241C15]">SSP Jari</span>, every
            spool starts as raw fibre in an artisan's hands before it becomes thread, zari, or trim in yours.
            We work directly with weaver families across Gujarat to dye, twist, and finish each batch the way
            it's been done for generations, then hold it to a standard modern ateliers expect. No shortcuts,
            no synthetic middle ground &mdash; just thread worth building something with.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-16 pt-10 border-t border-[#241C15]/10"
          >
            {stats.map((s) => (
              <div
                key={s.id}
                className="flex flex-col items-center bg-white/90 backdrop-blur-xs border border-[#241C15]/10 rounded-xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                style={{ borderTop: `3px solid ${s.color}` }}
              >
                <span
                  className="font-display text-3xl sm:text-4xl font-semibold select-none"
                  style={{
                    color: s.color,
                    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.08), 0px 4px 12px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  {s.value}
                </span>
                <span className="font-body text-xs sm:text-sm text-[#241C15]/75 mt-2 tracking-wide font-medium text-center">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}