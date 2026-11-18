export default function FlowVisualizationDiagram() {
  const arrows = [
    [60, 120, 16],
    [105, 96, 34],
    [150, 126, 58],
    [195, 104, 76],
    [70, 162, 28],
    [118, 174, 54],
    [166, 168, 72],
    [212, 150, 88],
  ];
  return (
    <svg
      className="svgviz"
      viewBox="0 0 1020 360"
      role="img"
      aria-label="Flow visualization techniques: arrow glyphs, streamlines, streaklines and line integral convolution"
    >
      <text x={20} y={24} className="mono xs mu">
        DYNAMIC DATA · FOUR FLOW VISUALIZATION VIEWS
      </text>

      <rect x={20} y={44} width={230} height={250} rx={12} fill="var(--surface-2)" />
      <text x={32} y={68} className="b" style={{ fontSize: 12.5, fill: "var(--v-violet)" }}>
        Arrow glyphs
      </text>
      {arrows.map(([x, y, angle], index) => (
        <g key={index} transform={`rotate(${angle} ${x + 20} ${y + 40})`}>
          <line x1={x} y1={y + 40} x2={x + 34} y2={y + 40} stroke="var(--v-violet)" strokeWidth={2.4} markerEnd="url(#flow-arrow)" />
        </g>
      ))}
      <defs>
        <marker id="flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--v-violet)" />
        </marker>
      </defs>
      <text x={32} y={280} className="xs mu">
        vector direction and magnitude
      </text>

      <rect x={268} y={44} width={230} height={250} rx={12} fill="var(--surface-2)" />
      <text x={280} y={68} className="b" style={{ fontSize: 12.5, fill: "var(--v-teal)" }}>
        Streamlines
      </text>
      {[0, 1, 2, 3, 4].map((index) => {
        const y = 104 + index * 34;
        return (
          <path
            key={index}
            d={`M284 ${y} C330 ${y - 22}, 390 ${y + 24}, 478 ${y - 6}`}
            fill="none"
            stroke="var(--v-teal)"
            strokeWidth={1.8}
            strokeOpacity={0.8}
          />
        );
      })}
      <text x={280} y={280} className="xs mu">
        curves tangent to the field
      </text>

      <rect x={516} y={44} width={230} height={250} rx={12} fill="var(--surface-2)" />
      <text x={528} y={68} className="b" style={{ fontSize: 12.5, fill: "var(--v-pink)" }}>
        Streaklines
      </text>
      {[0, 1, 2].map((line) => (
        <g key={line}>
          <path
            d={`M548 ${236 - line * 18} C596 ${190 - line * 22}, 646 ${216 + line * 14}, 712 ${118 + line * 8}`}
            fill="none"
            stroke="var(--v-pink)"
            strokeWidth={1.4}
            strokeOpacity={0.55}
          />
          {[0, 1, 2, 3, 4].map((dot) => {
            const t = 0.15 + dot * 0.18;
            const x = 548 + t * 164;
            const y = 236 - line * 18 - Math.sin(t * 2.4) * 46 - line * 4;
            return <circle key={dot} cx={x} cy={y} r={3.4} fill="var(--v-pink)" />;
          })}
        </g>
      ))}
      <text x={528} y={280} className="xs mu">
        particles released continuously
      </text>

      <rect x={764} y={44} width={236} height={250} rx={12} fill="var(--surface-2)" />
      <text x={776} y={68} className="b" style={{ fontSize: 12.5, fill: "var(--v-amber)" }}>
        Line integral convolution
      </text>
      {Array.from({ length: 14 }).map((_, row) =>
        Array.from({ length: 12 }).map((__, col) => {
          const x = 782 + col * 17;
          const y = 88 + row * 14;
          const opacity = 0.1 + ((row * 7 + col * 3) % 10) / 18;
          return <rect key={`${row}-${col}`} x={x} y={y} width={12} height={3} rx={1.5} fill="var(--v-amber)" fillOpacity={opacity} />;
        }),
      )}
      <path d="M780 214 C840 178, 900 226, 978 186" fill="none" stroke="var(--v-amber)" strokeWidth={2.2} />
      <text x={776} y={280} className="xs mu">
        texture smeared along streamlines
      </text>

      <rect x={20} y={312} width={980} height={32} rx={7} fill="var(--c-bg)" stroke="var(--c-mid)" />
      <text x={32} y={332} className="xs b ink">
        Definitions: pathline = one particle over time · streakline = simultaneous positions · timeline = one instant batch · streamline = tangent curve.
      </text>
    </svg>
  );
}
