import { useState } from 'react'
import { Check, Copy, FileText, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'

const row =
  'glass flex min-w-0 items-center justify-between gap-3 rounded-xl px-4 py-4 sm:px-6 sm:py-5 transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--surface-hover)]'

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
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-2xl p-5 sm:p-10">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(closest-side, var(--glow), transparent)' }}
          />
          <p className="eyebrow mb-4">05 — Contact</p>
          <h2 className="max-w-xl text-2xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s talk about data, pipelines, or what to build next.
          </h2>
          <p className="mt-4 max-w-lg text-base text-muted sm:mt-5 sm:text-lg">
            The best way to reach me is email. I usually reply within a few days.
          </p>

          <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 md:grid-cols-2">
            <div className="min-w-0">
              <ContactForm />
            </div>
            <div className="grid min-w-0 content-start gap-3">
            {profile.email && (
              <div className="flex min-w-0 gap-3">
                <a href={`mailto:${profile.email}`} className={`${row} flex-1`}>
                  <span className="flex min-w-0 items-center gap-3">
                    <Mail size={18} className="shrink-0 text-accent" />
                    <span className="min-w-0 break-all text-sm sm:text-base">{profile.email}</span>
                  </span>
                </a>
                <button
                  onClick={copy}
                  aria-label="Copy email address"
                  className="glass grid w-12 shrink-0 place-items-center rounded-xl text-accent sm:w-16 transition hover:-translate-y-0.5"
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
          </div>
          <p aria-live="polite" className="mt-4 h-5 text-sm text-accent">
            {copied ? 'Email address copied.' : ''}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
