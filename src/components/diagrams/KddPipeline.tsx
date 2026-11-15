const steps = [
  { title: "Data cleaning", sub: "remove noise", accent: false },
  { title: "Data integration", sub: "combine sources", accent: false },
  { title: "Data selection", sub: "relevant data", accent: false },
  { title: "Data transformation", sub: "normalise / aggregate", accent: false },
  { title: "Data mining", sub: "extract patterns", accent: true },
  { title: "Pattern evaluation", sub: "interestingness", accent: false },
  { title: "Knowledge presentation", sub: "visualise / store", accent: false },
];

export default function KddPipeline() {
  return (
    <svg
      className="svgviz"
      viewBox="0 0 1020 230"
      role="img"
      aria-label="The seven steps of the knowledge discovery in databases process"
    >
      <defs>
        <marker
          id="kdd-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="var(--muted)" />
        </marker>
      </defs>

      {steps.map((step, index) => {
        const x = 22 + index * 142;
        return (
          <g key={step.title}>
            <rect
              x={x}
              y={34}
              width={124}
              height={78}
              rx={10}
              fill={step.accent ? "var(--c)" : "var(--surface)"}
              stroke={step.accent ? "var(--c)" : "var(--c-mid)"}
              strokeWidth={step.accent ? 2 : 1.2}
            />
            <text
              x={x + 62}
              y={62}
              textAnchor="middle"
              className="b"
              style={{ fontSize: 11, fill: step.accent ? "#fff" : "var(--fg)" }}
            >
              {step.title.split(" ").slice(0, 1).join(" ")}
            </text>
            <text
              x={x + 62}
              y={77}
              textAnchor="middle"
              className="b"
              style={{ fontSize: 11, fill: step.accent ? "#fff" : "var(--fg)" }}
            >
              {step.title.split(" ").slice(1).join(" ")}
            </text>
            <text
              x={x + 62}
              y={96}
              textAnchor="middle"
              style={{
                fontSize: 9,
                fill: step.accent ? "rgba(255,255,255,.8)" : "var(--muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {step.sub}
            </text>
            {index < steps.length - 1 ? (
              <line
                x1={x + 126}
                y1={73}
                x2={x + 138}
                y2={73}
                stroke="var(--muted)"
                strokeWidth={1.4}
                markerEnd="url(#kdd-arrow)"
              />
            ) : null}
          </g>
        );
      })}

      <path
        d="M22 142 L22 154 L570 154 L570 142"
        fill="none"
        stroke="var(--c)"
        strokeWidth={1.4}
      />
      <text x={296} y={173} textAnchor="middle" className="mono xs b ink">
        DATA PREPROCESSING · STEPS 1–4
      </text>

      <path
        d="M794 116 L794 202 L652 202 L652 122"
        fill="none"
        stroke="var(--hot)"
        strokeWidth={1.5}
        strokeDasharray="5 4"
        markerEnd="url(#kdd-arrow)"
      />
      <text x={742} y={218} textAnchor="middle" className="xs" style={{ fill: "var(--hot)" }}>
        iterative evaluation
      </text>
    </svg>
  );
}
