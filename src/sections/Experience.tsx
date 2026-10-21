import { Briefcase, GraduationCap } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading eyebrow="02 — Experience" title="Where I have worked." />
      <ol className="relative">
        <span aria-hidden className="absolute bottom-0 left-5 top-10 w-px bg-line" />
        {experience.map((e, i) => {
          const current = e.period.includes('Present')
          const Icon = e.type === 'Internship' ? GraduationCap : Briefcase
          return (
            <li key={e.company} className="relative flex gap-5 pb-10 last:pb-0">
              <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-bg shadow-md">
                <Icon size={18} className="text-accent" aria-hidden />
              </span>
              <Reveal delay={i * 0.05} className="min-w-0 flex-1">
                <div className={`relative rounded-xl ${current ? 'overflow-hidden p-[2px]' : ''}`}>
                  {current && (
                    <span aria-hidden className="absolute inset-0 overflow-hidden rounded-xl">
                      <span
                        className="absolute inset-[-100%] animate-[shine_4s_linear_infinite]"
                        style={{ background: 'conic-gradient(from 0deg, transparent 0 70%, var(--accent) 100%)' }}
                      />
                    </span>
                  )}
                  <div className="relative rounded-xl border border-line bg-bg p-5 sm:p-6">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                      <h3 className="text-xl font-semibold">
                        {e.role} <span className="text-accent">· {e.company}</span>
                      </h3>
                      <p className="font-mono text-xs tabular-nums text-muted">{e.period}</p>
                    </div>
                    <ul className="mt-4 space-y-2.5 text-sm text-muted">
                      {e.points.map((p) => (
                        <li key={p} className="flex gap-3 leading-relaxed">
                          <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {e.stack.map((s) => (
                        <li key={s} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
