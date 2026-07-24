import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles, Wind, ShieldCheck, Ruler } from 'lucide-react'

// ---- Data (swap copy for your real feature claims) ----

const features = [
  {
    id: 'shine',
    index: '01',
    title: 'Brilliant Shine',
    description: 'A lustre that survives repeated washes and stays bright under stage light.',
    icon: Sparkles,
    side: 'left',
    x: 140,
    y: 150,
    color: '#C9962C',
  },
  {
    id: 'smooth',
    index: '02',
    title: 'Silk-Smooth Finish',
    description: 'Glides through high-speed heads without snagging, fraying, or linting.',
    icon: Wind,
    side: 'left',
    x: 140,
    y: 380,
    color: '#146B5E',
  },
  {
    id: 'strength',
    index: '03',
    title: 'Unmatched Strength',
    description: 'Tensile-tested to hold up through dense, high-tension embroidery runs.',
    icon: ShieldCheck,
    side: 'right',
    x: 860,
    y: 150,
    color: '#A63446',
  },
  {
    id: 'length',
    index: '04',
    title: 'Consistent Length',
    description: 'Every cone wound to the gram, so a run never stops short mid-pattern.',
    icon: Ruler,
    side: 'right',
    x: 860,
    y: 380,
    color: '#2B3A67',
  },
]

// quadratic thread paths from each badge toward the roll (desktop only)
const threadPaths = {
  shine: 'M140,150 Q320,185 430,235',
  smooth: 'M140,380 Q320,345 435,295',
  strength: 'M860,150 Q680,185 570,235',
  length: 'M860,380 Q680,345 565,295',
}

// Barrel-shaped body for the metallic foil roll (slight outward bulge,
// like a real roll of film/foil rather than a tapered cone).
const rollPath =
  'M100,110 C86,220 86,340 100,450 L260,450 C274,340 274,220 260,110 Z'

function ShimmerCone({ prefersReducedMotion, variant = 'default' }) {
  // Each mounted instance needs its own gradient/clip IDs — this component
  // renders twice (desktop + mobile), and duplicate SVG ids on the same
  // page is invalid and can silently break the url(#...) fill reference
  // in one of the copies (this was the cause of the hollow/missing body
  // on mobile).
  const rollFillId = `feature-roll-fill-${variant}`
  const coreFillId = `feature-core-fill-${variant}`
  const sweepId = `shimmer-sweep-${variant}`
  const clipId = `roll-clip-${variant}`

  return (
    <svg viewBox="0 0 360 500" className="w-full h-full">
      <defs>
        {/* Polished chrome/steel gradient — light/dark bands read as a
            reflective cylindrical surface */}
        <linearGradient id={rollFillId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f4f6f7" />
          <stop offset="14%" stopColor="#aeb4b7" />
          <stop offset="30%" stopColor="#62676b" />
          <stop offset="46%" stopColor="#e6e9eb" />
          <stop offset="55%" stopColor="#ffffff" />
          <stop offset="66%" stopColor="#83898c" />
          <stop offset="82%" stopColor="#4f5457" />
          <stop offset="100%" stopColor="#c7ccce" />
        </linearGradient>

        {/* Hollow core visible at the open end of the roll */}
        <radialGradient id={coreFillId} cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="65%" stopColor="#f2ede3" />
          <stop offset="100%" stopColor="#d8d2c4" />
        </radialGradient>

        <linearGradient id={sweepId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <clipPath id={clipId}>
          <path d={rollPath} />
        </clipPath>
      </defs>

      {/* ground shadow */}
      <ellipse cx="180" cy="472" rx="85" ry="12" fill="#241C15" opacity="0.15" />

      {/* barrel body */}
      <path d={rollPath} fill={`url(#${rollFillId})`} stroke="#4d5254" strokeWidth="0.75" />

      {/* moving shimmer sweep, clipped to the barrel silhouette */}
      <g clipPath={`url(#${clipId})`}>
        <motion.rect
          x="-140"
          y="90"
          width="80"
          height="400"
          fill={`url(#${sweepId})`}
          initial={{ x: -140 }}
          animate={prefersReducedMotion ? { x: -140 } : { x: 420 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 3.2, repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' }
          }
          style={{ transform: 'skewX(-18deg)' }}
        />
      </g>

      {/* static highlight streaks for extra polish, on top of the sweep */}
      <rect x="118" y="115" width="10" height="330" rx="5" fill="#ffffff" opacity="0.35" />
      <rect x="228" y="130" width="6" height="300" rx="3" fill="#ffffff" opacity="0.2" />

      {/* open top end — chrome rim around the hollow paper/plastic core */}
      <ellipse cx="180" cy="110" rx="80" ry="22" fill={`url(#${rollFillId})`} stroke="#4d5254" strokeWidth="0.75" />
      <ellipse cx="180" cy="110" rx="46" ry="13" fill={`url(#${coreFillId})`} />
      <ellipse cx="180" cy="109" rx="24" ry="7" fill="#2a2a28" opacity="0.85" />
      <ellipse cx="180" cy="107" rx="24" ry="6" fill="#050505" opacity="0.55" />

      {/* base — roll resting on the surface */}
      <ellipse cx="180" cy="450" rx="80" ry="20" fill={`url(#${rollFillId})`} stroke="#4d5254" strokeWidth="0.75" opacity="0.95" />

      {/* brand plate */}
      <ellipse cx="180" cy="300" rx="44" ry="25" fill="#F3EAD9" stroke="#241C15" strokeOpacity="0.15" />
      <text x="180" y="296" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontStyle="italic" fontWeight="600" fontSize="21" fill="#A63446">
        SSP
      </text>
      <text x="180" y="313" textAnchor="middle" fontFamily="'Work Sans', sans-serif" fontSize="8" letterSpacing="2" fill="#241C15" opacity="0.6">
        JARI
      </text>
    </svg>
  )
}

function FeatureBadge({ feature }) {
  const Icon = feature.icon
  return (
    <div className="group flex flex-col gap-3 max-w-[220px] text-left">
      <div className="flex items-center gap-3">
        <span
          className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-[#241C15]/5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shrink-0"
          style={{ color: feature.color }}
        >
          <Icon className="w-6 h-6" strokeWidth={1.8} />
        </span>
        <span className="font-display italic text-xs text-[#241C15]/30">{feature.index}</span>
      </div>
      <div>
        <h3 className="font-body font-semibold text-[#241C15] text-base leading-snug mb-1">{feature.title}</h3>
        <p className="font-body text-xs text-[#241C15]/60 leading-relaxed">{feature.description}</p>
      </div>
    </div>
  )
}

// Card variant used only below the `lg` breakpoint — self-contained
// (background, border, padding) so it holds up without the desktop's
// orbiting thread-lines to give it visual structure.
function FeatureCard({ feature, index }) {
  const Icon = feature.icon
  return (
    <motion.div
      className="relative bg-white rounded-2xl border border-[#241C15]/8 shadow-[0_4px_24px_rgba(36,28,21,0.05)] p-6 pl-7 overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.65, 0, 0.35, 1] }}
    >
      <span className="absolute left-0 top-0 h-full w-[3px]" style={{ backgroundColor: feature.color }} />
      <div className="flex items-center justify-between mb-4">
        <span
          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
        >
          <Icon className="w-5 h-5" strokeWidth={1.8} />
        </span>
        <span className="font-display italic text-sm text-[#241C15]/25">{feature.index}</span>
      </div>
      <h3 className="font-body font-semibold text-[#241C15] text-base leading-snug mb-1.5">{feature.title}</h3>
      <p className="font-body text-sm text-[#241C15]/60 leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

export default function Features() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef(null)

  const drawTransition = (delay, duration = 1.1) =>
    prefersReducedMotion ? { duration: 0 } : { duration, delay, ease: [0.65, 0, 0.35, 1] }

  return (
    <section className="relative bg-[#FCFAF5] py-24 sm:py-28 lg:h-screen lg:py-8 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Work+Sans:wght@400;500;600&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Work Sans', sans-serif; }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* ---------------- DESKTOP (lg and up) — unchanged ---------------- */}
      <div className="hidden lg:flex flex-col h-full w-full">
        <div className="text-center max-w-2xl mx-auto px-6 shrink-0">
          <h2 className="font-body text-3xl sm:text-4xl font-semibold tracking-tight text-[#241C15] uppercase mb-3">
            Features That Define
          </h2>
          <p className="font-body text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#A63446] uppercase">
            Excellence
          </p>
        </div>

        <div className="flex-1 min-h-0 flex items-center justify-center px-6">
          <div
            ref={containerRef}
            className="relative h-full max-h-[500px] w-auto max-w-full mx-auto"
            style={{ aspectRatio: '1000 / 520' }}
          >
            <div
              className="absolute left-1/2 top-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#241C15]/15"
              style={{ animation: prefersReducedMotion ? 'none' : 'orbitSpin 40s linear infinite' }}
            />

            <svg viewBox="0 0 1000 520" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid meet">
              {features.map((f) => (
                <motion.path
                  key={f.id}
                  d={threadPaths[f.id]}
                  fill="none"
                  stroke={f.color}
                  strokeWidth="1.75"
                  strokeDasharray="5,5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.55 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={drawTransition(0.3, 1.3)}
                />
              ))}
            </svg>

            <motion.div
              className="absolute left-1/2 top-1/2 w-40 lg:w-48 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={drawTransition(0.1, 0.8)}
            >
              <ShimmerCone prefersReducedMotion={prefersReducedMotion} variant="desktop" />
            </motion.div>

            {features.map((f) => (
              <motion.div
                key={f.id}
                className="absolute z-10"
                style={{
                  left: `${(f.x / 1000) * 100}%`,
                  top: `${(f.y / 520) * 100}%`,
                  marginLeft: '-28px',
                  marginTop: '-28px',
                }}
                initial={{ opacity: 0, x: f.side === 'left' ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={drawTransition(0.15, 0.6)}
              >
                <FeatureBadge feature={f} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE / TABLET (below lg) — redesigned ---------------- */}
      <div className="lg:hidden px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-body text-3xl sm:text-4xl font-semibold tracking-tight text-[#241C15] uppercase mb-3">
            Features That Define
          </h2>
          <p className="font-body text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#A63446] uppercase">
            Excellence
          </p>
        </div>

        <div className="relative w-32 sm:w-36 mx-auto mb-2">
          <div className="absolute -inset-5 rounded-full border border-dashed border-[#241C15]/15" />
          <ShimmerCone prefersReducedMotion={prefersReducedMotion} />
        </div>
        <div className="w-px h-10 bg-gradient-to-b from-[#241C15]/20 to-transparent mx-auto mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl mx-auto">
          {features.map((f, i) => (
            <FeatureCard key={f.id} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}