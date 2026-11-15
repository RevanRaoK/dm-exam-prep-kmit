type Child = [title: string, sub: string, x: number];

type Branch = {
  label: string;
  color: string;
  x: number;
  children: Child[];
};

const branches: Branch[] = [
  {
    label: "Web Content Mining",
    color: "var(--v-blue)",
    x: 190,
    children: [
      ["Text & document mining", "classify, cluster, summarise", 60],
      ["Multimedia mining", "images, audio and video", 260],
    ],
  },
  {
    label: "Web Structure Mining",
    color: "var(--v-amber)",
    x: 570,
    children: [
      ["Intra-page structure", "layout and HTML tags", 430],
      ["Inter-page links", "HITS · hubs & authorities", 630],
    ],
  },
  {
    label: "Web Usage Mining",
    color: "var(--v-pink)",
    x: 950,
    children: [
      ["General access patterns", "frequent pages and paths", 820],
      ["Personalised usage", "recommendations and profiles", 1020],
    ],
  },
];

export default function WebMiningTaxonomy() {
  return (
    <svg
      className="svgviz"
      viewBox="0 0 1200 360"
      role="img"
      aria-label="Taxonomy of web mining: content, structure and usage mining"
    >
      <defs>
        <marker
          id="web-arrow"
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

      <rect x={480} y={22} width={180} height={48} rx={11} fill="var(--c)" stroke="var(--c)" />
      <text x={570} y={51} textAnchor="middle" className="b" style={{ fontSize: 14, fill: "#fff" }}>
        Web Mining
      </text>

      {branches.map((branch) => (
        <g key={branch.label}>
          <line
            x1={570}
            y1={70}
            x2={branch.x}
            y2={118}
            stroke="var(--line-strong)"
            strokeWidth={1.4}
            markerEnd="url(#web-arrow)"
          />
          <rect
            x={branch.x - 105}
            y={122}
            width={210}
            height={44}
            rx={9}
            fill="var(--surface)"
            stroke={branch.color}
            strokeWidth={1.9}
          />
          <text
            x={branch.x}
            y={148}
            textAnchor="middle"
            className="b"
            style={{ fontSize: 12.5, fill: branch.color }}
          >
            {branch.label}
          </text>

          {branch.children.map(([title, sub, x]) => (
            <g key={title}>
              <line
                x1={branch.x}
                y1={166}
                x2={x + 85}
                y2={228}
                stroke="var(--line-strong)"
                strokeWidth={1.2}
                markerEnd="url(#web-arrow)"
              />
              <rect
                x={x}
                y={232}
                width={170}
                height={54}
                rx={8}
                fill="var(--surface)"
                stroke="var(--line)"
              />
              <text x={x + 85} y={254} textAnchor="middle" className="b" style={{ fontSize: 10.5 }}>
                {title}
              </text>
              <text
                x={x + 85}
                y={270}
                textAnchor="middle"
                style={{ fontSize: 8.5, fill: "var(--muted)", fontFamily: "var(--font-mono)" }}
              >
                {sub}
              </text>
            </g>
          ))}
        </g>
      ))}

      <text x={600} y={330} textAnchor="middle" className="xs mu">
        VIPS segments a page by its visual layout so mining can focus on meaningful blocks.
      </text>
    </svg>
  );
}
