import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading eyebrow="01 — About" title="Reliable data first, then what it makes possible." />
      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-5 leading-relaxed text-muted">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="glass divide-y divide-[var(--line)] rounded-xl px-7">
            {profile.highlights.map((h) => (
              <div key={h.label} className="py-5">
                <dt className="eyebrow !text-muted">{h.label}</dt>
                <dd className="mt-1 text-lg font-semibold">{h.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
