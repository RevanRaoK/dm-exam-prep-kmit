export default function DataTypeTaxonomy() {
  const leaves = [
    { x: 70, title: "Binary", example: "0 or 1", color: "var(--v-blue)" },
    { x: 250, title: "Discrete", example: "integers, {2,4,6}", color: "var(--v-teal)" },
    { x: 430, title: "Continuous", example: "real values, [0,5]", color: "var(--v-violet)" },
    { x: 620, title: "Categorical", example: "red, blue, green", color: "var(--v-pink)" },
    { x: 800, title: "Ranked", example: "small, medium, large", color: "var(--v-amber)" },
    { x: 980, title: "Arbitrary", example: "addresses", color: "var(--v-olive)" },
  ];
  return (
    <svg
      className="svgviz"
      viewBox="0 0 1120 360"
      role="img"
      aria-label="Taxonomy of data types used in visualization"
    >
      <defs>
        <marker id="type-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--muted)" />
        </marker>
      </defs>
      <text x={20} y={24} className="mono xs mu">
        TYPES OF DATA USED IN VISUALIZATION
      </text>

      <rect x={440} y={44} width={220} height={54} rx={12} fill="var(--c-bg)" stroke="var(--c-mid)" />
      <text x={550} y={68} textAnchor="middle" className="b" style={{ fontSize: 14, fill: "var(--c-ink)" }}>
        Data variables
      </text>
      <text x={550} y={86} textAnchor="middle" className="xs mu">
        n records × m observations
      </text>

      <line x1={550} y1={98} x2={240} y2={148} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#type-arrow)" />
      <line x1={550} y1={98} x2={780} y2={148} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#type-arrow)" />

      <rect x={160} y={150} width={160} height={46} rx={10} fill="var(--surface)" stroke="var(--v-teal)" strokeWidth={1.8} />
      <text x={240} y={178} textAnchor="middle" className="b" style={{ fontSize: 14, fill: "var(--v-teal)" }}>
        Ordinal (numeric)
      </text>
      <rect x={700} y={150} width={160} height={46} rx={10} fill="var(--surface)" stroke="var(--v-pink)" strokeWidth={1.8} />
      <text x={780} y={178} textAnchor="middle" className="b" style={{ fontSize: 14, fill: "var(--v-pink)" }}>
        Nominal (non-numeric)
      </text>

      {leaves.map((leaf, index) => {
        const parentX = index < 3 ? 240 : 780;
        const y = 238 + (index % 3) * 4;
        return (
          <g key={leaf.title}>
            <line x1={parentX} y1={196} x2={leaf.x} y2={y - 2} stroke="var(--line-strong)" strokeWidth={1.2} markerEnd="url(#type-arrow)" />
            <rect x={leaf.x - 72} y={y} width={144} height={58} rx={9} fill="var(--surface)" stroke={leaf.color} strokeWidth={1.4} />
            <text x={leaf.x} y={y + 22} textAnchor="middle" className="b" style={{ fontSize: 12.5, fill: leaf.color }}>
              {leaf.title}
            </text>
            <text x={leaf.x} y={y + 40} textAnchor="middle" className="xs mu">
              {leaf.example}
            </text>
          </g>
        );
      })}

      <rect x={20} y={328} width={1080} height={0.9} fill="var(--line)" />
      <text x={20} y={348} className="xs b ink">
        Scale tests:
      </text>
      <text x={100} y={348} className="xs mu">
        ordering relation · distance metric · existence of an absolute zero. Ordered data should map to ordered visual variables.
      </text>
    </svg>
  );
}
