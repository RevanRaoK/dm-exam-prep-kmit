const leaves = [
  { label: "A", x: 110 },
  { label: "B", x: 200 },
  { label: "C", x: 330 },
  { label: "D", x: 500 },
  { label: "E", x: 600 },
];

const baseY = 320;

function y(height: number) {
  return baseY - height * 38;
}

export default function SingleLinkDendrogram() {
  return (
    <svg
      className="svgviz"
      viewBox="0 0 760 430"
      role="img"
      aria-label="Single-link hierarchical clustering dendrogram with leaves A to E in one class after the final merge"
    >
      <text x={20} y={22} className="mono xs mu">
        SINGLE-LINK CLUSTER HIERARCHY · AGGLOMERATIVE (HAC) DENDROGRAM
      </text>

      {[0, 1, 2, 3, 4, 5, 6].map((tick) => (
        <g key={tick}>
          <line
            x1={58}
            y1={y(tick)}
            x2={646}
            y2={y(tick)}
            stroke="var(--line)"
            strokeWidth={0.8}
            strokeDasharray={tick === 0 ? undefined : "3 4"}
          />
          <text x={48} y={y(tick) + 4} textAnchor="end" className="mono xs mu">
            {tick}
          </text>
        </g>
      ))}
      <line x1={58} y1={y(0)} x2={58} y2={y(6)} stroke="var(--line-strong)" strokeWidth={1.2} />
      <text x={28} y={y(3) + 4} className="mono xs mu">
        distance
      </text>

      {leaves.map((leaf) => (
        <g key={leaf.label}>
          <line x1={leaf.x} y1={baseY} x2={leaf.x} y2={y(0)} stroke="var(--line-strong)" strokeWidth={1} />
          <circle cx={leaf.x} cy={baseY} r={3.5} fill="var(--c)" />
          <text x={leaf.x} y={baseY + 23} textAnchor="middle" className="b sm">
            {leaf.label}
          </text>
        </g>
      ))}

      <path
        d={`M110 ${y(0)} L110 ${y(2)} L200 ${y(2)} L200 ${y(0)}`}
        fill="none"
        stroke="var(--c)"
        strokeWidth={2.4}
      />
      <text x={155} y={y(2) - 7} textAnchor="middle" className="mono xs b ink">
        2
      </text>

      <path
        d={`M155 ${y(2)} L155 ${y(3)} L330 ${y(3)} L330 ${y(0)}`}
        fill="none"
        stroke="var(--c)"
        strokeWidth={2.4}
      />
      <text x={242} y={y(3) - 7} textAnchor="middle" className="mono xs b ink">
        3
      </text>

      <path
        d={`M500 ${y(0)} L500 ${y(4)} L600 ${y(4)} L600 ${y(0)}`}
        fill="none"
        stroke="var(--v-amber)"
        strokeWidth={2.4}
      />
      <text x={550} y={y(4) - 7} textAnchor="middle" className="mono xs b" style={{ fill: "var(--v-amber)" }}>
        4
      </text>

      <path
        d={`M242 ${y(3)} L242 ${y(6)} L550 ${y(6)} L550 ${y(4)}`}
        fill="none"
        stroke="var(--c)"
        strokeWidth={2.8}
      />
      <text x={396} y={y(6) - 7} textAnchor="middle" className="mono xs b ink">
        6
      </text>

      <line
        x1={58}
        y1={y(3.5)}
        x2={646}
        y2={y(3.5)}
        stroke="var(--hot)"
        strokeWidth={1.8}
        strokeDasharray="6 4"
      />
      <text x={650} y={y(3.5) + 4} className="mono xs b" style={{ fill: "var(--hot)" }}>
        cut at 3.5
      </text>

      <rect x={58} y={352} width={588} height={60} rx={9} fill="var(--c-bg)" stroke="var(--c-mid)" />
      <text x={72} y={372} className="mono xs b ink">
        CUT AT HEIGHT 3.5 → TWO CLASSES
      </text>
      <text x={72} y={390} className="xs">
        Class 1 = &#123;A, B, C&#125; because A–B merge at 2 and (A,B)–C merge at 3.
      </text>
      <text x={72} y={406} className="xs">
        Class 2 = &#123;D, E&#125; because D–E merge at 4. The final merge at 6 joins everything into one class.
      </text>

      <text x={20} y={430} className="xs mu">
        Single link uses the minimum pairwise distance, so a chain can join two clusters through one close pair.
      </text>
    </svg>
  );
}
