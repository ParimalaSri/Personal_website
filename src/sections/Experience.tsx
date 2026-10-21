import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="02 — Experience" title="Where I have worked." />
      <ol className="relative ml-2 border-l border-line">
        {experience.map((e, i) => (
          <li key={e.company} className="relative pb-14 pl-8 last:pb-0 sm:pl-12">
            <span
              aria-hidden
              className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg"
            />
            <Reveal delay={i * 0.05}>
              <div className="glass rounded-3xl p-7 sm:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-serif text-3xl">
                    {e.role} <span className="text-accent">· {e.company}</span>
                  </h3>
                  <p className="font-mono text-sm text-muted">{e.period}</p>
                </div>
                <p className="eyebrow !text-muted mt-2">{e.type}</p>
                <ul className="mt-6 space-y-3 text-muted">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed">
                      <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {e.stack.map((s) => (
                    <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
