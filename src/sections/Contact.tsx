import { useState } from 'react'
import { Check, Copy, FileText, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'

const row =
  'glass flex items-center justify-between gap-4 rounded-2xl px-6 py-5 transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--surface-hover)]'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copy this email address:', profile.email)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-14">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(closest-side, var(--glow), transparent)' }}
          />
          <p className="eyebrow mb-4">05 — Contact</p>
          <h2 className="max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
            Let&apos;s talk about data, pipelines, or what to build next.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-muted">
            The best way to reach me is email. I usually reply within a few days.
          </p>

          <div className="mt-10 grid gap-3 sm:max-w-xl">
            {profile.email && (
              <div className="flex gap-3">
                <a href={`mailto:${profile.email}`} className={`${row} flex-1`}>
                  <span className="flex items-center gap-3">
                    <Mail size={18} className="text-accent" /> {profile.email}
                  </span>
                </a>
                <button
                  onClick={copy}
                  aria-label="Copy email address"
                  className="glass grid w-16 place-items-center rounded-2xl text-accent transition hover:-translate-y-0.5"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            )}
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={row}>
              <span className="flex items-center gap-3">
                <GithubIcon className="h-[18px] w-[18px] text-accent" /> GitHub
              </span>
              <span className="text-sm text-muted">ParimalaSri</span>
            </a>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={row}>
                <span className="flex items-center gap-3">
                  <LinkedinIcon className="h-[18px] w-[18px] text-accent" /> LinkedIn
                </span>
              </a>
            )}
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className={row}>
                <span className="flex items-center gap-3">
                  <FileText size={18} className="text-accent" /> Resume (PDF)
                </span>
              </a>
            )}
          </div>
          <p aria-live="polite" className="mt-4 h-5 text-sm text-accent">
            {copied ? 'Email address copied.' : ''}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
