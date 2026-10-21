import { useState } from 'react'
import { flowNodes } from '../data/flow'

const paths = [
  'M40 70 C115 70 115 170 190 170',
  'M40 170 L190 170',
  'M40 270 C115 270 115 170 190 170',
  'M190 170 C265 170 265 110 340 110',
  'M190 170 C265 170 265 230 340 230',
  'M340 110 C415 110 415 170 490 170',
  'M340 230 C415 230 415 170 490 170',
]

// Interactive data-flow diagram: hover, focus or tap a node to see what I have worked with there.
export default function DataFlow() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = flowNodes.find((n) => n.id === activeId)

  return (
    <div>
      <svg
        viewBox="0 0 580 340"
        role="group"
        aria-label="Data flow diagram. Select a stage to see the systems and tools I have worked with."
        className="h-auto w-full"
        onMouseLeave={() => setActiveId(null)}
      >
        <defs>
          <linearGradient id="df-stroke" x1="0" x2="1">
            <stop offset="0" stopColor="var(--accent)" stopOpacity="0.15" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="df-glow">
            <stop offset="0" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="490" cy="170" r="90" fill="url(#df-glow)" />

        {paths.map((d) => (
          <path key={d} d={d} fill="none" stroke="url(#df-stroke)" strokeWidth="1.5" className="flow-line" />
        ))}

        {flowNodes.map((n, i) => {
          const selected = n.id === activeId
          return (
            <g
              key={n.id}
              tabIndex={0}
              role="button"
              aria-pressed={selected}
              aria-label={`${n.title}: ${n.items.join(', ')}`}
              className="cursor-pointer outline-none [&:focus-visible_.focus-ring]:opacity-100"
              onMouseEnter={() => setActiveId(n.id)}
              onFocus={() => setActiveId(n.id)}
              onBlur={() => setActiveId(null)}
              onClick={() => setActiveId(n.id)}
              onKeyDown={(e) => e.key === 'Escape' && setActiveId(null)}
            >
              {/* larger invisible hit area for touch */}
              <circle cx={n.x} cy={n.y} r={34} fill="transparent" />
              <circle
                className="focus-ring"
                cx={n.x}
                cy={n.y}
                r={n.big ? 30 : 24}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                opacity={selected ? 1 : 0}
                style={{ transition: 'opacity .2s' }}
              />
              <circle
                cx={n.x}
                cy={n.y}
                r={n.big ? 22 : 15}
                fill="none"
                stroke="var(--accent)"
                strokeOpacity="0.5"
                className="pulse-ring"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
              <circle
                cx={n.x}
                cy={n.y}
                r={(n.big ? 10 : 6) + (selected ? 2 : 0)}
                fill="var(--accent)"
                style={{ transition: 'r .2s' }}
              />
              <text
                x={n.x}
                y={n.y + (n.big ? 42 : 32)}
                textAnchor="middle"
                fill={selected ? 'var(--fg)' : 'var(--muted)'}
                fontFamily="var(--font-mono)"
                fontSize="11"
                letterSpacing="1.5"
              >
                {n.label}
              </text>
            </g>
          )
        })}
      </svg>

      <div aria-live="polite" className="mt-3 min-h-[8.5rem] rounded-xl border border-line bg-bg/50 px-4 py-3">
        {active ? (
          <>
            <p className="eyebrow">{active.title}</p>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {active.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {it}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="pt-6 text-center font-mono text-xs text-muted">Hover or tap a node to see what I have worked with.</p>
        )}
      </div>
    </div>
  )
}
