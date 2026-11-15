const leaves = [
  ["A", 120],
  ["B", 210],
  ["C", 330],
  ["D", 470],
  ["E", 580],
] as const;

const baseY = 320;

function y(height: number) {
  return baseY - height * 42;
}

export default function HierarchicalDendrogram() {
  return (
    <svg
      className="svgviz"
      viewBox="0 0 700 380"
      role="img"
      aria-label="Single-link dendrogram for objects A to E with merge heights 2, 3, 4 and 5"
    >
      <text x={22} y={24} className="mono xs mu">
        SINGLE-LINK DENDROGRAM · A–E DISTANCE MATRIX
      </text>

      {[0, 1, 2, 3, 4, 5, 6].map((tick) => (
        <g key={tick}>
          <line
            x1={55}
            y1={y(tick)}
            x2={650}
            y2={y(tick)}
            stroke="var(--line)"
            strokeWidth={0.8}
            strokeDasharray={tick === 0 ? undefined : "3 4"}
          />
          <text x={46} y={y(tick) + 4} textAnchor="end" className="mono xs mu">
            {tick}
          </text>
        </g>
      ))}
      <line x1={55} y1={y(0)} x2={55} y2={y(6)} stroke="var(--line-strong)" strokeWidth={1.2} />

      {leaves.map(([label, x]) => (
        <g key={label}>
          <line x1={x} y1={baseY} x2={x} y2={y(0) - 0} stroke="var(--line-strong)" strokeWidth={1} />
          <text x={x} y={baseY + 22} textAnchor="middle" className="b sm">
            {label}
          </text>
        </g>
      ))}

      <path
        d={`M120 ${baseY} L120 ${y(2)} L210 ${y(2)} L210 ${baseY}`}
        fill="none"
        stroke="var(--c)"
        strokeWidth={2.4}
      />
      <text x={165} y={y(2) - 7} textAnchor="middle" className="mono xs b ink">
        2
      </text>

      <path
        d={`M165 ${y(2)} L165 ${y(3)} L330 ${y(3)} L330 ${baseY}`}
        fill="none"
        stroke="var(--c)"
        strokeWidth={2.4}
      />
      <text x={248} y={y(3) - 7} textAnchor="middle" className="mono xs b ink">
        3
      </text>

      <path
        d={`M470 ${baseY} L470 ${y(4)} L580 ${y(4)} L580 ${baseY}`}
        fill="none"
        stroke="var(--hot)"
        strokeWidth={2.4}
      />
      <text x={525} y={y(4) - 7} textAnchor="middle" className="mono xs b" style={{ fill: "var(--hot)" }}>
        4
      </text>

      <path
        d={`M248 ${y(3)} L248 ${y(5)} L525 ${y(5)} L525 ${y(4)}`}
        fill="none"
        stroke="var(--hot)"
        strokeWidth={2.8}
      />
      <text x={386} y={y(5) - 7} textAnchor="middle" className="mono xs b" style={{ fill: "var(--hot)" }}>
        5
      </text>

      <text x={600} y={y(5) + 4} className="mono xs mu">
        merge height
      </text>
      <text x={22} y={baseY + 22} className="mono xs mu">
        leaves
      </text>

      <text x={350} y={370} textAnchor="middle" className="xs mu">
        Merge heights: A–B = 2, (A,B)–C = 3, D–E = 4, (A,B,C)–(D,E) = 5
      </text>
    </svg>
  );
}
