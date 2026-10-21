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
    const t = setTimeout(done, 2600)
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
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-bg px-6"
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}
