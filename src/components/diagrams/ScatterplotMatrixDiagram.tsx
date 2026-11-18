const N = 4;
const SIZE = 560;
const MARGIN = 54;
const CELL = (SIZE - MARGIN * 2) / N;
const NAMES = ["A", "B", "C", "D"];

function seeded(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

const random = seeded(42);
const DATA = Array.from({ length: 38 }, () => {
  const a = random();
  const b = Math.min(1, Math.max(0, 0.78 * a + 0.22 * random()));
  const c = Math.min(1, Math.max(0, 1 - 0.7 * a + 0.18 * (random() - 0.5)));
  const d = random();
  return [a, b, c, d];
});

export default function ScatterplotMatrixDiagram() {
  return (
    <svg
      className="svgviz"
      viewBox={`0 0 ${SIZE} ${SIZE + 40}`}
      role="img"
      aria-label="A four by four scatterplot matrix for four dimensions"
    >
      <text x={20} y={24} className="mono xs mu">
        SCATTERPLOT MATRIX · N = 4 · 16 CELLS · 6 UNIQUE PAIRS
      </text>

      {Array.from({ length: N }).map((_, row) =>
        Array.from({ length: N }).map((__, col) => {
          const x = MARGIN + col * CELL;
          const y = MARGIN + row * CELL;
          const diagonal = row === col;
          return (
            <g key={`${row}-${col}`}>
              <rect
                x={x}
                y={y}
                width={CELL}
                height={CELL}
                fill={diagonal ? "var(--c-bg)" : "var(--surface)"}
                stroke={diagonal ? "var(--c-mid)" : "var(--line-strong)"}
                strokeWidth={1}
              />
              {diagonal ? (
                <text x={x + CELL / 2} y={y + CELL / 2 + 6} textAnchor="middle" className="b" style={{ fontSize: 22, fill: "var(--c-ink)" }}>
                  {NAMES[row]}
                </text>
              ) : (
                DATA.map((point, index) => (
                  <circle
                    key={index}
                    cx={x + 8 + point[col] * (CELL - 16)}
                    cy={y + CELL - 8 - point[row] * (CELL - 16)}
                    r={2.6}
                    fill={col > row ? "var(--v-violet)" : "var(--v-teal)"}
                    fillOpacity={0.75}
                  />
                ))
              )}
            </g>
          );
        }),
      )}

      {NAMES.map((name, index) => (
        <text
          key={name}
          x={MARGIN + index * CELL + CELL / 2}
          y={MARGIN + N * CELL + 16}
          textAnchor="middle"
          className="mono xs mu"
        >
          {name}
        </text>
      ))}
      {NAMES.map((name, index) => (
        <text
          key={`row-${name}`}
          x={MARGIN - 12}
          y={MARGIN + index * CELL + CELL / 2}
          textAnchor="end"
          className="mono xs mu"
        >
          {name}
        </text>
      ))}

      <text x={MARGIN} y={MARGIN + N * CELL + 34} className="xs mu">
        Every pair appears twice (upper and lower triangle, rotated 90°). The diagonal holds the dimension names.
      </text>
    </svg>
  );
}
