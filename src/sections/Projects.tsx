import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Lock } from 'lucide-react'
import { GithubIcon } from '../components/Icons'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { kindLabel, projects, type Category, type Project } from '../data/projects'

const filters: Array<'All' | Category> = ['All', 'Data Engineering', 'AI', 'Analytics']
const visible = projects.filter((p) => !p.hidden)

const linkCls = 'inline-flex items-center gap-1.5 text-sm text-fg transition hover:text-accent'

function Card({ p }: { p: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6 }}
      className="glass group flex h-full flex-col rounded-3xl p-7 hover:bg-[var(--surface-hover)]"
    >
      <p className={`eyebrow ${p.kind === 'concept' ? '!text-muted' : ''}`}>{kindLabel[p.kind]}</p>
      <h3 className="mt-3 font-serif text-2xl leading-snug">{p.title}</h3>
      <p className="mt-4 flex-1 leading-relaxed text-muted">{p.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5">
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer" className={linkCls}>
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
        )}
        {p.live && (
          <a href={p.live} target="_blank" rel="noopener noreferrer" className={linkCls}>
            <ExternalLink size={15} /> Live demo
          </a>
        )}
        {p.extra?.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
            <ExternalLink size={15} /> {l.label}
          </a>
        ))}
        {p.note && (
          <span className="inline-flex items-center gap-1.5 text-sm text-muted">
            <Lock size={14} /> {p.note}
          </span>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<'All' | Category>('All')
  const shown = visible.filter((p) => filter === 'All' || p.categories.includes(filter))

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="04 — Projects"
        title="Selected work."
        intro="Professional work is described at a high level. Concepts are labelled as such."
      />
      <Reveal>
        <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                filter === f
                  ? 'border-accent bg-accent text-[var(--accent-ink)]'
                  : 'border-line text-muted hover:text-fg'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>
      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <Card key={p.id} p={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
