export default function InteractionFramework() {
  const operators = [
    "Navigation",
    "Selection",
    "Filtering",
    "Reconfiguring",
    "Encoding",
    "Connecting",
    "Abstraction / elaboration",
  ];
  const spaces = [
    { name: "Screen", operand: "pixels" },
    { name: "Data value", operand: "multivariate values" },
    { name: "Data structure", operand: "organisation of data" },
    { name: "Attribute", operand: "graphical attributes" },
    { name: "Object", operand: "3D surfaces" },
    { name: "Visualization structure", operand: "layout of the display" },
  ];
  const parameters = [
    { name: "Focus", note: "where the user is interested" },
    { name: "Extents", note: "how far the interaction reaches" },
    { name: "Transformation", note: "what happens inside, and how strongly" },
    { name: "Blender", note: "what happens where interactions overlap" },
  ];
  return (
    <svg
      className="svgviz"
      viewBox="0 0 1120 590"
      role="img"
      aria-label="Interaction operators, operand spaces and the four parameters of the unified framework"
    >
      <defs>
        <marker id="int-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--muted)" />
        </marker>
      </defs>
      <text x={20} y={24} className="mono xs mu">
        INTERACTION OPERATORS · OPERAND SPACES · UNIFIED FRAMEWORK
      </text>
      <text x={20} y={42} className="xs mu">
        Same operator, different operand: what a click or drag means depends on the space it acts on.
      </text>

      <text x={20} y={78} className="mono xs b ink">
        OPERATORS (VERBS)
      </text>
      {operators.map((operator, index) => {
        const x = 20 + (index % 4) * 218;
        const y = 92 + Math.floor(index / 4) * 48;
        return (
          <g key={operator}>
            <rect x={x} y={y} width={202} height={38} rx={8} fill="var(--c-bg)" stroke="var(--c-mid)" />
            <text x={x + 12} y={y + 24} className="b" style={{ fontSize: 12, fill: "var(--c-ink)" }}>
              {operator}
            </text>
          </g>
        );
      })}

      <path d="M130 190 L130 226 L530 226 L530 250" fill="none" stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#int-arrow)" />
      <text x={150} y={218} className="xs mu">
        applied to an operand in a space
      </text>

      <text x={500} y={274} textAnchor="middle" className="mono xs b ink">
        UNIFIED PARAMETERS
      </text>
      {parameters.map((parameter, index) => {
        const x = 290 + (index % 2) * 250;
        const y = 288 + Math.floor(index / 2) * 64;
        return (
          <g key={parameter.name}>
            <rect x={x} y={y} width={230} height={52} rx={9} fill="var(--surface)" stroke="var(--v-violet)" strokeWidth={1.5} />
            <text x={x + 12} y={y + 21} className="b" style={{ fontSize: 12.5, fill: "var(--v-violet)" }}>
              {parameter.name}
            </text>
            <text x={x + 12} y={y + 39} className="xs mu">
              {parameter.note}
            </text>
          </g>
        );
      })}

      <text x={20} y={304} className="mono xs b ink">
        OPERAND SPACES
      </text>
      {spaces.map((space, index) => {
        const y = 318 + index * 38;
        return (
          <g key={space.name}>
            <rect x={20} y={y} width={230} height={30} rx={7} fill="var(--surface)" stroke="var(--line-strong)" />
            <text x={30} y={y + 15} className="b" style={{ fontSize: 11.5, fill: "var(--fg)" }}>
              {space.name}
            </text>
            <text x={30} y={y + 26} className="xs mu">
              {space.operand}
            </text>
          </g>
        );
      })}

      <rect x={20} y={548} width={1080} height={26} rx={6} fill="var(--surface-2)" />
      <text x={32} y={565} className="xs mu">
        The eight techniques add animating transformations and interaction control to these six spaces. The fisheye is screen space; the perspective wall is object space.
      </text>
    </svg>
  );
}
