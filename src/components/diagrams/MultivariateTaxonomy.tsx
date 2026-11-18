export default function MultivariateTaxonomy() {
  const branches = [
    { x: 20, title: "Point-based", sub: "scatterplot · matrix · MDS", color: "var(--v-violet)" },
    { x: 260, title: "Line-based", sub: "line graph · PCP · Andrews", color: "var(--v-teal)" },
    { x: 500, title: "Region-based", sub: "bars · histogram · heatmap", color: "var(--v-blue)" },
    { x: 740, title: "Glyphs & pixels", sub: "glyph · dense pixel", color: "var(--v-pink)" },
  ];
  const lower = [
    { x: 140, title: "Trees", sub: "treemap · sunburst · node-link", color: "var(--v-amber)" },
    { x: 460, title: "Graphs", sub: "force layout · adjacency matrix", color: "var(--v-olive)" },
    { x: 780, title: "Text", sub: "word cloud · VSM · ThemeRiver", color: "var(--v-violet)" },
  ];
  return (
    <svg
      className="svgviz"
      viewBox="0 0 1020 420"
      role="img"
      aria-label="A taxonomy of multivariate visualization techniques"
    >
      <defs>
        <marker id="mv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--muted)" />
        </marker>
      </defs>
      <text x={20} y={24} className="mono xs mu">
        MULTIVARIATE VISUALIZATION TECHNIQUES
      </text>

      <rect x={360} y={48} width={300} height={54} rx={12} fill="var(--c-bg)" stroke="var(--c-mid)" />
      <text x={510} y={72} textAnchor="middle" className="b" style={{ fontSize: 14, fill: "var(--c-ink)" }}>
        Multivariate data
      </text>
      <text x={510} y={90} textAnchor="middle" className="xs mu">
        n records × m dimensions
      </text>

      {branches.map((branch) => {
        const cx = branch.x + 120;
        return (
          <g key={branch.title}>
            <path d={`M510 102 L510 126 L${cx} 126 L${cx} 158`} fill="none" stroke="var(--muted)" strokeWidth={1.3} markerEnd="url(#mv-arrow)" />
            <rect x={branch.x} y={160} width={240} height={64} rx={11} fill="var(--surface)" stroke={branch.color} strokeWidth={1.6} />
            <text x={cx} y={186} textAnchor="middle" className="b" style={{ fontSize: 13, fill: branch.color }}>
              {branch.title}
            </text>
            <text x={cx} y={206} textAnchor="middle" className="xs mu">
              {branch.sub}
            </text>
          </g>
        );
      })}

      {lower.map((item) => {
        const cx = item.x + 110;
        return (
          <g key={item.title}>
            <path d={`M510 240 L510 268 L${cx} 268 L${cx} 292`} fill="none" stroke="var(--muted)" strokeWidth={1.3} markerEnd="url(#mv-arrow)" />
            <rect x={item.x} y={294} width={220} height={58} rx={10} fill="var(--surface)" stroke={item.color} strokeWidth={1.6} />
            <text x={cx} y={318} textAnchor="middle" className="b" style={{ fontSize: 13, fill: item.color }}>
              {item.title}
            </text>
            <text x={cx} y={336} textAnchor="middle" className="xs mu">
              {item.sub}
            </text>
          </g>
        );
      })}

      <rect x={20} y={378} width={980} height={26} rx={6} fill="var(--surface-2)" />
      <text x={32} y={395} className="xs mu">
        Choose by data structure and task, not by visual fashion. Each family trades accuracy, space and occlusion differently.
      </text>
    </svg>
  );
}
