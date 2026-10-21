// Decorative abstract data-flow diagram: sources -> ingest -> transform -> warehouse -> insight.
const nodes = [
  { x: 40, y: 70, label: 'sources' },
  { x: 40, y: 170, label: 'APIs' },
  { x: 40, y: 270, label: 'files' },
  { x: 190, y: 170, label: 'ingest' },
  { x: 340, y: 110, label: 'transform' },
  { x: 340, y: 230, label: 'validate' },
  { x: 490, y: 170, label: 'warehouse' },
]

const paths = [
  'M40 70 C115 70 115 170 190 170',
  'M40 170 L190 170',
  'M40 270 C115 270 115 170 190 170',
  'M190 170 C265 170 265 110 340 110',
  'M190 170 C265 170 265 230 340 230',
  'M340 110 C415 110 415 170 490 170',
  'M340 230 C415 230 415 170 490 170',
]

export default function DataFlow() {
  return (
    <svg
      viewBox="0 0 580 340"
      role="img"
      aria-label="Abstract diagram of data flowing from sources through ingestion and transformation into a warehouse"
      className="float h-auto w-full"
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

      {nodes.map((n, i) => {
        const big = n.label === 'warehouse' || n.label === 'ingest'
        return (
          <g key={n.label + i}>
            <circle
              cx={n.x}
              cy={n.y}
              r={big ? 22 : 15}
              fill="none"
              stroke="var(--accent)"
              strokeOpacity="0.5"
              className="pulse-ring"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
            <circle cx={n.x} cy={n.y} r={big ? 10 : 6} fill="var(--accent)" />
            <text
              x={n.x}
              y={n.y + (big ? 42 : 32)}
              textAnchor="middle"
              fill="var(--muted)"
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
  )
}
