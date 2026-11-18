export default function GeoPhenomena() {
  const panels = [
    { x: 20, name: "Point", dim: "0-D", note: "one coordinate pair", color: "var(--v-violet)" },
    { x: 270, name: "Line", dim: "1-D", note: "length, no width", color: "var(--v-teal)" },
    { x: 520, name: "Area", dim: "2-D", note: "length + width", color: "var(--v-blue)" },
    { x: 770, name: "Surface", dim: "2.5-D", note: "one height per point", color: "var(--v-amber)" },
  ];
  return (
    <svg
      className="svgviz"
      viewBox="0 0 1020 310"
      role="img"
      aria-label="Point, line, area and surface spatial phenomena"
    >
      <text x={20} y={24} className="mono xs mu">
        FOUR KINDS OF SPATIAL PHENOMENA
      </text>
      {panels.map((panel) => (
        <g key={panel.name}>
          <rect x={panel.x} y={48} width={230} height={188} rx={13} fill="var(--surface-2)" stroke="none" />
          <circle cx={panel.x + 20} cy={68} r={5} fill={panel.color} />
          <text x={panel.x + 32} y={72} className="b" style={{ fontSize: 13, fill: panel.color }}>
            {panel.name}
          </text>
          <text x={panel.x + 230 - 12} y={72} textAnchor="end" className="mono xs mu">
            {panel.dim}
          </text>
          <text x={panel.x + 115} y={222} textAnchor="middle" className="xs mu">
            {panel.note}
          </text>
        </g>
      ))}

      {[
        [90, 110], [135, 92], [150, 138], [190, 112], [118, 165], [180, 172],
      ].map(([x, y], index) => (
        <circle key={index} cx={x} cy={y} r={6} fill="var(--v-violet)" fillOpacity={0.75} stroke="#fff" strokeWidth={1.5} />
      ))}
      <text x={36} y={196} className="xs mu">
        city · ATM · oil well
      </text>

      <path d="M296 170 L330 104 L364 134 L402 84 L444 112" fill="none" stroke="var(--v-teal)" strokeWidth={3.5} strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={296} cy={170} r={5} fill="#fff" stroke="var(--v-teal)" strokeWidth={2} />
      <circle cx={444} cy={112} r={5} fill="#fff" stroke="var(--v-teal)" strokeWidth={2} />
      <text x={286} y={196} className="xs mu">
        road · border · flight route
      </text>

      <path d="M560 160 L600 110 L680 92 L742 128 L722 184 L640 196 L578 178 Z" fill="var(--v-blue)" fillOpacity={0.22} stroke="var(--v-blue)" strokeWidth={2} />
      <text x={530} y={196} className="xs mu">
        lake · park · state
      </text>

      {[
        [845, 128, 82, 46, 0.12],
        [845, 128, 58, 32, 0.2],
        [845, 128, 34, 18, 0.3],
        [845, 128, 14, 8, 0.45],
      ].map(([cx, cy, rx, ry, opacity], index) => (
        <ellipse key={index} cx={cx} cy={cy} rx={rx} ry={ry} fill="var(--v-amber)" fillOpacity={opacity} stroke="var(--v-amber)" strokeWidth={1} />
      ))}
      <text x={845} y={132} textAnchor="middle" className="xs b" style={{ fill: "var(--v-amber)" }}>
        high
      </text>
      <text x={790} y={196} className="xs mu">
        elevation · temperature
      </text>
    </svg>
  );
}
