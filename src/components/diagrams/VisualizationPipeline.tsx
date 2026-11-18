export default function VisualizationPipeline() {
  const stages = [
    { x: 18, title: "Raw data", sub: "files · sensors · simulation", color: "var(--line-strong)" },
    { x: 190, title: "Data modelling", sub: "types · ranges · semantics", color: "var(--v-blue)" },
    { x: 380, title: "Data selection", sub: "subset · time slices · features", color: "var(--v-teal)" },
    { x: 570, title: "Visual mapping", sub: "position · size · colour", color: "var(--c)" },
    { x: 760, title: "Scene & render", sub: "colour map · lighting · image", color: "var(--v-amber)" },
  ];
  return (
    <svg
      className="svgviz"
      viewBox="0 0 980 360"
      role="img"
      aria-label="The data visualization pipeline from raw data to the rendered image with user interaction"
    >
      <defs>
        <marker id="pipe-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--muted)" />
        </marker>
      </defs>
      <text x={20} y={24} className="mono xs mu">
        DATA / INFORMATION VISUALIZATION PIPELINE
      </text>

      {stages.map((stage, index) => (
        <g key={stage.title}>
          <rect
            x={stage.x}
            y={70}
            width={160}
            height={92}
            rx={13}
            fill={index === 3 ? "var(--c)" : "var(--surface)"}
            stroke={stage.color}
            strokeWidth={index === 3 ? 0 : 1.8}
          />
          <circle cx={stage.x + 18} cy={88} r={9} fill={index === 3 ? "rgba(255,255,255,.2)" : "var(--surface-2)"} />
          <text x={stage.x + 18} y={92} textAnchor="middle" className="mono xs b" style={{ fill: index === 3 ? "#fff" : stage.color }}>
            {index + 1}
          </text>
          <text x={stage.x + 12} y={116} className="b" style={{ fontSize: 13, fill: index === 3 ? "#fff" : "var(--fg)" }}>
            {stage.title}
          </text>
          <text x={stage.x + 12} y={136} className="xs" style={{ fill: index === 3 ? "rgba(255,255,255,.8)" : "var(--muted)" }}>
            {stage.sub}
          </text>
          {index < stages.length - 1 ? (
            <line
              x1={stage.x + 162}
              y1={116}
              x2={stages[index + 1].x - 4}
              y2={116}
              stroke="var(--muted)"
              strokeWidth={1.5}
              markerEnd="url(#pipe-arrow)"
            />
          ) : null}
        </g>
      ))}

      <rect x={18} y={202} width={944} height={52} rx={10} fill="var(--c-bg)" stroke="var(--c-mid)" />
      <text x={32} y={224} className="mono xs b ink">
        USER INTERACTION AT EVERY STAGE
      </text>
      <text x={32} y={242} className="xs mu">
        Select data, change the mapping, adjust the colour map, filter, zoom or animate. Each link is a many-to-many mapping.
      </text>
      <path d="M900 160 L900 202" fill="none" stroke="var(--c)" strokeWidth={1.5} markerEnd="url(#pipe-arrow)" />
      <path d="M80 202 L80 160" fill="none" stroke="var(--c)" strokeWidth={1.5} markerEnd="url(#pipe-arrow)" />

      <text x={20} y={292} className="xs mu">
        Mapping stage: one record component can control size, another position and another colour. Data may be scaled, shifted,
      </text>
      <text x={20} y={308} className="xs mu">
        filtered, interpolated or subsampled before mapping. The rendering stage adds axes, keys and annotations.
      </text>
      <text x={20} y={336} className="xs b" style={{ fill: "var(--c-ink)" }}>
        Exam line: data modelling → data selection → data-to-visual mapping → scene parameter setting → rendering.
      </text>
    </svg>
  );
}
