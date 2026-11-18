export default function MapProjections() {
  const panels = [
    {
      cx: 180,
      title: "Cylindrical",
      note: "whole world · usually conformal",
    },
    {
      cx: 510,
      title: "Planar (azimuthal)",
      note: "direction from the centre",
    },
    {
      cx: 840,
      title: "Conic",
      note: "mid-latitudes · Europe, USA",
    },
  ];
  return (
    <svg
      className="svgviz"
      viewBox="0 0 1020 330"
      role="img"
      aria-label="Cylindrical, planar and conic map projections"
    >
      <text x={20} y={24} className="mono xs mu">
        THREE SURFACES USED TO UNWRAP THE GLOBE
      </text>
      {panels.map((panel) => (
        <g key={panel.title}>
          <rect x={panel.cx - 150} y={44} width={300} height={196} rx={13} fill="var(--surface-2)" stroke="none" />
          <circle cx={panel.cx} cy={122} r={42} fill="var(--surface)" stroke="var(--line-strong)" strokeWidth={1.5} />
          <ellipse cx={panel.cx} cy={122} rx={42} ry={13} fill="none" stroke="var(--line-strong)" strokeDasharray="3 3" />
          <text x={panel.cx} y={266} textAnchor="middle" className="b" style={{ fontSize: 13, fill: "var(--v-violet)" }}>
            {panel.title}
          </text>
          <text x={panel.cx} y={284} textAnchor="middle" className="xs mu">
            {panel.note}
          </text>
        </g>
      ))}

      <rect x={94} y={56} width={172} height={132} rx={5} fill="none" stroke="var(--v-violet)" strokeWidth={2.4} />
      <line x1={94} y1={56} x2={266} y2={56} stroke="var(--v-violet)" strokeWidth={2.4} />
      <line x1={94} y1={188} x2={266} y2={188} stroke="var(--v-violet)" strokeWidth={2.4} />

      <line x1={440} y1={164} x2={580} y2={164} stroke="var(--v-violet)" strokeWidth={3} />
      <circle cx={510} cy={164} r={5} fill="var(--v-pink)" />
      <line x1={510} y1={80} x2={510} y2={164} stroke="var(--muted)" strokeDasharray="3 3" />

      <path d="M840 54 L780 200 M840 54 L900 200" fill="none" stroke="var(--v-violet)" strokeWidth={2.4} />
      <path d="M780 200 Q840 226 900 200" fill="none" stroke="var(--v-violet)" strokeWidth={2.4} />
      <ellipse cx={840} cy={190} rx={52} ry={12} fill="none" stroke="var(--line-strong)" strokeDasharray="3 3" />

      <rect x={20} y={306} width={980} height={14} rx={4} fill="var(--c-bg)" />
      <text x={30} y={317} className="xs b ink">
        Every projection distorts something. Protect the property the task needs: shape, area, distance or direction.
      </text>
    </svg>
  );
}
