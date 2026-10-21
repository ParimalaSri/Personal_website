import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro?: string
}) {
  return (
    <Reveal className="mb-10">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="border-b border-line pb-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-muted">{intro}</p>}
    </Reveal>
  )
}
