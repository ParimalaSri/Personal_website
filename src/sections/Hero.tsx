import { motion } from 'framer-motion'
import { ArrowDownRight, Mail } from 'lucide-react'
import DataFlow from '../components/DataFlow'
import { GithubIcon } from '../components/Icons'
import { profile } from '../data/profile'

const btn =
  'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition duration-200 hover:-translate-y-0.5'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40">
      <div aria-hidden className="grain-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--glow), transparent)' }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-6">{profile.name}</p>
          <h1 className="font-serif text-5xl leading-[1.05] sm:text-7xl">
            Building with data.
            <br />
            <span className="italic text-accent">Exploring beyond it.</span>
          </h1>
          <p className="mt-7 font-mono text-sm tracking-wide text-muted">{profile.subtitle}</p>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            I design the pipelines behind enterprise analytics at 3M, and I am growing into AI engineering.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} bg-accent text-[var(--accent-ink)]`}>
              Explore My Work <ArrowDownRight size={16} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn} glass hover:text-accent`}
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a href="#contact" className={`${btn} glass hover:text-accent`}>
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-6"
        >
          <DataFlow />
        </motion.div>
      </div>
    </section>
  )
}
