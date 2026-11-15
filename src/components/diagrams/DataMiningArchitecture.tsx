type BoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub: string;
  color: string;
  fill?: string;
  textFill?: string;
  number: string;
};

function Box({
  x,
  y,
  w,
  h,
  title,
  sub,
  color,
  fill = "var(--surface)",
  textFill = "var(--fg)",
  number,
}: BoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={11}
        fill={fill}
        stroke={color}
        strokeWidth={1.7}
      />
      <circle cx={x + 16} cy={y + 15} r={8} fill={color} fillOpacity={0.15} stroke={color} />
      <text
        x={x + 16}
        y={y + 18}
        textAnchor="middle"
        className="mono xs b"
        style={{ fill: color }}
      >
        {number}
      </text>
      <text
        x={x + 31}
        y={y + 20}
        className="b"
        style={{ fontSize: 12, fill: textFill }}
      >
        {title}
      </text>
      <text
        x={x + w / 2}
        y={y + h - 15}
        textAnchor="middle"
        style={{ fontSize: 9, fill: textFill === "#fff" ? "rgba(255,255,255,.8)" : "var(--muted)", fontFamily: "var(--font-mono)" }}
      >
        {sub}
      </text>
    </g>
  );
}

const repositories = [
  { x: 70, label: "Databases", sub: "relational, spatial, time-series" },
  { x: 280, label: "Data warehouses", sub: "cleaned, historical, summarised" },
  { x: 490, label: "Web & text", sub: "pages, documents, multimedia" },
  { x: 700, label: "Flat files & streams", sub: "text, binary, continuous data" },
];

export default function DataMiningArchitecture() {
  return (
    <svg
      className="svgviz"
      viewBox="0 0 980 510"
      role="img"
      aria-label="Architecture of a typical data mining system with six components"
    >
      <defs>
        <marker
          id="arch-arrow"
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

      <text x={20} y={22} className="mono xs mu">
        ARCHITECTURE OF A TYPICAL DATA MINING SYSTEM
      </text>

      <Box
        x={425}
        y={28}
        w={130}
        h={54}
        title="User"
        sub="asks a mining query"
        color="var(--fg)"
        number="U"
      />
      <line
        x1={490}
        y1={82}
        x2={490}
        y2={102}
        stroke="var(--muted)"
        strokeWidth={1.5}
        markerStart="url(#arch-arrow)"
        markerEnd="url(#arch-arrow)"
      />

      <Box
        x={370}
        y={106}
        w={240}
        h={52}
        title="Graphical User Interface"
        sub="query input + pattern visualisation"
        color="var(--v-blue)"
        number="5"
      />

      <Box
        x={330}
        y={188}
        w={320}
        h={84}
        title="Data Mining Engine"
        sub="characterisation · association · classification · clustering"
        color="var(--c)"
        fill="var(--c)"
        textFill="#fff"
        number="3"
      />

      <Box
        x={42}
        y={188}
        w={238}
        h={84}
        title="Knowledge Base"
        sub="concept hierarchies · thresholds · user beliefs"
        color="var(--v-teal)"
        number="2"
      />

      <Box
        x={700}
        y={188}
        w={238}
        h={84}
        title="Pattern Evaluation Module"
        sub="interestingness measures + filtering"
        color="var(--v-amber)"
        number="4"
      />

      <line
        x1={490}
        y1={158}
        x2={490}
        y2={188}
        stroke="var(--muted)"
        strokeWidth={1.5}
        markerEnd="url(#arch-arrow)"
      />
      <line
        x1={280}
        y1={230}
        x2={330}
        y2={230}
        stroke="var(--muted)"
        strokeWidth={1.5}
        markerEnd="url(#arch-arrow)"
      />
      <line
        x1={650}
        y1={230}
        x2={700}
        y2={230}
        stroke="var(--muted)"
        strokeWidth={1.5}
        markerEnd="url(#arch-arrow)"
      />
      <path
        d="M819 188 L819 160 L610 160 L610 158"
        fill="none"
        stroke="var(--muted)"
        strokeWidth={1.3}
        strokeDasharray="4 3"
        markerEnd="url(#arch-arrow)"
      />
      <text x={695} y={151} className="xs mu">
        evaluated patterns
      </text>

      <Box
        x={300}
        y={310}
        w={380}
        h={58}
        title="Database or Data Warehouse Server"
        sub="fetches the task-relevant data for the mining request"
        color="var(--v-pink)"
        number="1"
      />
      <line
        x1={490}
        y1={310}
        x2={490}
        y2={272}
        stroke="var(--v-pink)"
        strokeWidth={1.8}
        markerEnd="url(#arch-arrow)"
      />

      {repositories.map((repo, index) => {
        const targets = [350, 450, 550, 650];
        return (
          <g key={repo.label}>
            <rect
              x={repo.x}
              y={418}
              width={180}
              height={58}
              rx={9}
              fill="var(--surface)"
              stroke="var(--line-strong)"
              strokeWidth={1.2}
            />
            <text x={repo.x + 90} y={440} textAnchor="middle" className="b" style={{ fontSize: 10.5 }}>
              {repo.label}
            </text>
            <text
              x={repo.x + 90}
              y={455}
              textAnchor="middle"
              style={{ fontSize: 8, fill: "var(--muted)", fontFamily: "var(--font-mono)" }}
            >
              {repo.sub}
            </text>
            <line
              x1={repo.x + 90}
              y1={418}
              x2={targets[index]}
              y2={368}
              stroke="var(--line-strong)"
              strokeWidth={1.2}
              markerEnd="url(#arch-arrow)"
            />
          </g>
        );
      })}

      <text x={20} y={500} className="xs mu">
        The engine consults the knowledge base, sends candidate patterns to the evaluation module,
        and the GUI presents the accepted knowledge to the user.
      </text>
    </svg>
  );
}
