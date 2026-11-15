type PanelProps = {
  x: number;
  y: number;
  index: string;
  title: string;
  description: string;
  color: string;
  variant: "none" | "loose" | "semi" | "tight";
};

function Panel({ x, y, index, title, description, color, variant }: PanelProps) {
  const box = (
    bx: number,
    by: number,
    w: number,
    h: number,
    label: string,
    sub?: string,
    fill = "var(--surface)",
    stroke = "var(--line-strong)",
    textFill = "var(--fg)"
  ) => (
    <g>
      <rect x={x + bx} y={y + by} width={w} height={h} rx={8} fill={fill} stroke={stroke} strokeWidth={1.2} />
      <text x={x + bx + w / 2} y={y + by + (sub ? 20 : 26)} textAnchor="middle" style={{ fontSize: 10.5, fill: textFill, fontWeight: 600 }}>
        {label}
      </text>
      {sub ? (
        <text x={x + bx + w / 2} y={y + by + 34} textAnchor="middle" style={{ fontSize: 8.5, fill: textFill === "#fff" ? "rgba(255,255,255,.8)" : "var(--muted)", fontFamily: "var(--font-mono)" }}>
          {sub}
        </text>
      ) : null}
    </g>
  );

  return (
    <g>
      <rect x={x} y={y} width={425} height={190} rx={14} fill="var(--surface)" stroke={variant === "tight" ? "var(--c)" : "var(--line)"} strokeWidth={variant === "tight" ? 1.8 : 1.1} />
      <circle cx={x + 28} cy={y + 26} r={12} fill={color} fillOpacity={0.14} stroke={color} />
      <text x={x + 28} y={y + 30} textAnchor="middle" className="mono xs b" style={{ fill: color }}>
        {index}
      </text>
      <text x={x + 48} y={y + 25} className="b" style={{ fontSize: 13.5 }}>
        {title}
      </text>
      <text x={x + 48} y={y + 43} style={{ fontSize: 10, fill: "var(--muted)" }}>
        {description}
      </text>
      <line x1={x + 18} y1={y + 56} x2={x + 407} y2={y + 56} stroke="var(--line)" />

      {variant === "none" ? (
        <>
          {box(30, 78, 120, 52, "Operational DB", "raw data")}
          <line x1={x + 154} y1={y + 104} x2={x + 224} y2={y + 104} stroke="var(--muted)" strokeWidth={1.4} markerEnd="url(#dwdm-arrow)" />
          <text x={x + 189} y={y + 96} textAnchor="middle" className="xs mu">
            raw data
          </text>
          {box(228, 78, 130, 52, "DM system", "no warehouse")}
        </>
      ) : null}

      {variant === "loose" ? (
        <>
          {box(24, 78, 125, 52, "Data warehouse", "cleaned / historical", "var(--c-bg)", "var(--c-mid)")}
          <line x1={x + 153} y1={y + 104} x2={x + 218} y2={y + 104} stroke={color} strokeWidth={1.5} markerEnd="url(#dwdm-arrow)" />
          <text x={x + 186} y={y + 96} textAnchor="middle" className="xs" style={{ fill: color }}>
            fetch
          </text>
          {box(222, 78, 120, 52, "DM system", "own scratch area")}
          <path d={`M${x + 282} ${y + 134} L${x + 282} ${y + 152} L${x + 342} ${y + 152}`} fill="none" stroke="var(--line-strong)" strokeDasharray="3 3" />
          <text x={x + 350} y={y + 156} style={{ fontSize: 9, fill: "var(--muted)", fontFamily: "var(--font-mono)" }}>
            local processing
          </text>
        </>
      ) : null}

      {variant === "semi" ? (
        <>
          {box(24, 78, 135, 64, "Data warehouse", "summaries + cube")}
          <line x1={x + 163} y1={y + 104} x2={x + 228} y2={y + 104} stroke={color} strokeWidth={1.6} markerEnd="url(#dwdm-arrow)" />
          <line x1={x + 228} y1={y + 118} x2={x + 163} y2={y + 118} stroke={color} strokeWidth={1.6} strokeDasharray="4 3" markerEnd="url(#dwdm-arrow)" />
          {box(232, 78, 130, 64, "DM system", "uses summaries")}
          <text x={x + 196} y={y + 152} textAnchor="middle" style={{ fontSize: 9, fill: color, fontFamily: "var(--font-mono)" }}>
            summaries speed up mining
          </text>
        </>
      ) : null}

      {variant === "tight" ? (
        <>
          <rect x={x + 24} y={y + 68} width={352} height={102} rx={10} fill="var(--c-bg)" stroke="var(--c-mid)" />
          <text x={x + 36} y={y + 84} className="mono xs b ink">
            DATA WAREHOUSE SERVER
          </text>
          {box(44, 94, 120, 56, "Data mining", "embedded engine", "var(--c)", "var(--c)", "#fff")}
          {box(188, 94, 72, 56, "data cube", undefined, "var(--surface)")}
          {box(274, 94, 84, 56, "OLAP +", "indexes", "var(--surface)")}
          <text x={x + 200} y={y + 164} textAnchor="middle" style={{ fontSize: 9, fill: "var(--c-ink)", fontFamily: "var(--font-mono)" }}>
            warehouse optimisation is available inside the miner
          </text>
        </>
      ) : null}
    </g>
  );
}

export default function DwDmIntegration() {
  return (
    <svg
      className="svgviz"
      viewBox="0 0 910 430"
      role="img"
      aria-label="Four coupling schemes between a data mining system and a data warehouse"
    >
      <defs>
        <marker
          id="dwdm-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="var(--muted)" />
        </marker>
      </defs>

      <Panel
        x={15}
        y={10}
        index="1"
        title="No coupling"
        description="The miner works on raw files or operational databases."
        color="var(--muted)"
        variant="none"
      />
      <Panel
        x={470}
        y={10}
        index="2"
        title="Loose coupling"
        description="The miner fetches warehouse data and processes it separately."
        color="var(--v-blue)"
        variant="loose"
      />
      <Panel
        x={15}
        y={215}
        index="3"
        title="Semi-tight coupling"
        description="The miner uses warehouse summaries and data cubes."
        color="var(--v-amber)"
        variant="semi"
      />
      <Panel
        x={470}
        y={215}
        index="4"
        title="Tight coupling"
        description="Mining functions are embedded inside the warehouse server."
        color="var(--c)"
        variant="tight"
      />
    </svg>
  );
}
