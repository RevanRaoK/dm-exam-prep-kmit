export default function PerceptionStages() {
  const stages = [
    {
      x: 20,
      title: "Stage 1 · Parallel",
      color: "var(--v-blue)",
      lines: ["rapid parallel processing", "orientation, colour, texture, motion", "iconic store", "bottom-up, data-driven"],
    },
    {
      x: 385,
      title: "Stage 2 · Pattern",
      color: "var(--v-teal)",
      lines: ["slow serial process", "working + long-term memory", "contours, regions, symbols", "bottom-up + top-down attention"],
    },
    {
      x: 750,
      title: "Stage 3 · Goal-directed",
      color: "var(--v-violet)",
      lines: ["few objects in working memory", "visual queries and visual search", "sequential attention", "supports visual thinking"],
    },
  ];
  return (
    <svg
      className="svgviz"
      viewBox="0 0 1020 360"
      role="img"
      aria-label="The three stage model of perceptual processing"
    >
      <defs>
        <marker id="per-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--muted)" />
        </marker>
      </defs>
      <text x={20} y={24} className="mono xs mu">
        A THREE-STAGE MODEL OF PERCEPTUAL PROCESSING
      </text>

      {stages.map((stage, index) => (
        <g key={stage.title}>
          <rect x={stage.x} y={62} width={250} height={190} rx={14} fill="var(--surface)" stroke={stage.color} strokeWidth={1.8} />
          <rect x={stage.x} y={62} width={250} height={36} rx={14} fill={stage.color} />
          <text x={stage.x + 125} y={85} textAnchor="middle" className="b" style={{ fontSize: 13, fill: "#fff" }}>
            {stage.title}
          </text>
          {stage.lines.map((line, lineIndex) => (
            <text key={line} x={stage.x + 16} y={126 + lineIndex * 26} className="xs" style={{ fill: "var(--fg)" }}>
              • {line}
            </text>
          ))}
          {index < stages.length - 1 ? (
            <line
              x1={stage.x + 254}
              y1={158}
              x2={stages[index + 1].x - 6}
              y2={158}
              stroke="var(--muted)"
              strokeWidth={1.6}
              markerEnd="url(#per-arrow)"
            />
          ) : null}
        </g>
      ))}

      <rect x={20} y={276} width={980} height={58} rx={10} fill="var(--c-bg)" stroke="var(--c-mid)" />
      <text x={34} y={298} className="mono xs b ink">
        DESIGN READING
      </text>
      <text x={34} y={316} className="xs mu">
        Stage 1 wants strong low-level features. Stage 2 wants clear grouping. Stage 3 wants few objects and stable labels.
      </text>
      <text x={34} y={330} className="xs mu">
        Do not overload working memory; do not hide structure; animate only when it preserves context.
      </text>
    </svg>
  );
}
