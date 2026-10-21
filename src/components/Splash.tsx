import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../data/profile'

const SEEN = 'splash-seen'

function shouldShow() {
  try {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return !sessionStorage.getItem(SEEN)
  } catch {
    return false
  }
}

// Orbiting rings and nodes behind the name.
function SplashArt() {
  const rings = [
    { r: 200, d: '38s', dots: [[0, 1], [150, 0.6]], dash: '4 10' },
    { r: 290, d: '56s', dots: [[70, 1], [250, 0.6]], dash: '2 14' },
    { r: 380, d: '80s', dots: [[200, 0.8]], dash: '1 18' },
  ]
  return (
    <motion.svg
      aria-hidden
      viewBox="-400 -400 800 800"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute left-1/2 top-1/2 h-[min(150vw,900px)] w-[min(150vw,900px)] -translate-x-1/2 -translate-y-1/2"
    >
      <defs>
        <radialGradient id="sp-glow">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.18" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle r="320" fill="url(#sp-glow)" />
      {rings.map((ring, i) => (
        <g key={ring.r} className="orbit" style={{ ['--d' as string]: ring.d, animationDirection: i % 2 ? 'reverse' : 'normal' }}>
          <circle r={ring.r} fill="none" stroke="var(--accent)" strokeOpacity="0.28" strokeDasharray={ring.dash} />
          {ring.dots.map(([deg, o]) => {
            const a = (deg * Math.PI) / 180
            return <circle key={deg} cx={Math.cos(a) * ring.r} cy={Math.sin(a) * ring.r} r="5" fill="var(--accent)" opacity={o} />
          })}
        </g>
      ))}
    </motion.svg>
  )
}

// A tiny pipeline that draws itself under the name: source -> transform -> destination.
function Pipeline() {
  const nodes = [10, 110, 210]
  return (
    <svg aria-hidden viewBox="0 0 220 30" className="mt-6 h-8 w-56">
      <motion.path
        d="M10 15 C45 0 75 30 110 15 S175 0 210 15"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.9, ease: 'easeInOut' }}
      />
      {nodes.map((x, i) => (
        <motion.circle
          key={x}
          cx={x}
          cy={15}
          r="4"
          fill="var(--accent)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9 + i * 0.6, type: 'spring', stiffness: 300 }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />
      ))}
    </svg>
  )
}

// Full-screen name intro. Plays once per browser session, can be skipped by click or key.
export default function Splash() {
  const [show, setShow] = useState(shouldShow)

  const done = () => {
    try {
      sessionStorage.setItem(SEEN, '1')
    } catch {
      /* ignore */
    }
    setShow(false)
  }

  useEffect(() => {
    if (!show) return
    document.body.style.overflow = 'hidden'
    const t = setTimeout(done, 3200)
    const onKey = () => done()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

  const words = profile.name.split(' ')

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          role="presentation"
          onClick={done}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center overflow-hidden bg-bg px-6"
        >
          <SplashArt />
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="flex flex-wrap justify-center gap-x-4 text-center text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-gradient-to-r from-fg via-fg/60 to-fg bg-clip-text text-transparent"
                >
                  {w}
                </motion.span>
              ))}
            </h1>
            <Pipeline />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-5 font-mono text-xs tracking-[0.25em] text-muted sm:text-sm"
            >
              DATA ENGINEER · AI EXPLORER
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
