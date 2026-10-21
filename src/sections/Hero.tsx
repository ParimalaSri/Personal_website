import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import DataFlow from '../components/DataFlow'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import { profile } from '../data/profile'

const btn =
  'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 hover:-translate-y-0.5'

export default function Hero() {
  const initials = profile.name.split(' ').map((w) => w[0]).slice(0, 2).join('')

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-12 pt-20 sm:pt-28">
      <div aria-hidden className="grain-grid absolute inset-0 -z-10 opacity-60" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[460px] w-[760px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--glow), transparent)' }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl"
      >
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow mb-4">{profile.role}</p>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Building with data.
              <br />
              <span className="bg-gradient-to-r from-accent to-fg/60 bg-clip-text text-transparent">
                Exploring beyond it.
              </span>
            </h1>
            <p className="mt-5 font-mono text-sm text-muted">{profile.subtitle}</p>
          </div>
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={176}
              height={176}
              fetchPriority="high"
              className="h-32 w-32 shrink-0 rounded-full border-2 border-line object-cover shadow-xl ring-4 ring-[var(--glow)] sm:h-44 sm:w-44"
            />
          ) : (
            <div
              aria-hidden
              className="grid h-32 w-32 shrink-0 place-items-center rounded-full border border-line bg-bg2 text-5xl font-bold text-accent sm:h-44 sm:w-44"
            >
              {initials}
            </div>
          )}
        </div>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          I&apos;m {profile.name}. I design the pipelines behind enterprise analytics at 3M, and I am growing into AI
          engineering.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className={`${btn} bg-accent text-[var(--accent-ink)]`}>
            Explore My Work
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={`${btn} glass hover:text-accent`}>
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={`${btn} glass hover:text-accent`}>
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
          )}
          <a href="#contact" className={`${btn} glass hover:text-accent`}>
            <Mail size={16} /> Contact Me
          </a>
        </div>

        <div className="glass mt-14 rounded-2xl p-5">
          <DataFlow />
        </div>
      </motion.div>
    </section>
  )
}
