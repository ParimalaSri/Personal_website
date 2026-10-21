import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading
        eyebrow="03 — Skills"
        title="The toolkit."
        intro="Technologies I work with, grouped by what they are used for."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 0.08}>
            <article className="glass h-full rounded-xl p-7 transition duration-300 hover:-translate-y-1 hover:bg-[var(--surface-hover)]">
              <h3 className="text-xl font-semibold">{g.title}</h3>
              <p className="mt-2 text-sm text-muted">{g.blurb}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full border border-line px-3 py-1 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
