const N = 60;

function noise(i: number) {
  const raw = Math.sin(i * 12.9898 + 3.17) * 43758.5453;
  return (raw - Math.floor(raw) - 0.5) * 9;
}

const trendValues = Array.from({ length: N }, (_, i) => 62 + i * 0.55);
const cyclicValues = Array.from({ length: N }, (_, i) => 68 + 9 * Math.sin((2 * Math.PI * i) / 30));
const seasonalValues = Array.from({ length: N }, (_, i) => 68 + 6 * Math.sin((2 * Math.PI * i) / 10));
const irregularValues = Array.from({ length: N }, (_, i) => 68 + noise(i));
const observedValues = Array.from(
  { length: N },
  (_, i) =>
    62 +
    i * 0.55 +
    9 * Math.sin((2 * Math.PI * i) / 30) +
    6 * Math.sin((2 * Math.PI * i) / 10) +
    noise(i),
);

function linePath(
  values: number[],
  x0: number,
  x1: number,
  y0: number,
  y1: number,
  min: number,
  max: number,
) {
  return values
    .map((value, index) => {
      const x = x0 + (index / (values.length - 1)) * (x1 - x0);
      const y = y1 - ((value - min) / (max - min)) * (y1 - y0);
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

const panels = [
  { title: "Trend (T)", sub: "long-term direction", values: trendValues, color: "var(--v-amber)" },
  { title: "Cyclic (C)", sub: "long oscillation, no fixed period", values: cyclicValues, color: "var(--v-blue)" },
  { title: "Seasonal (S)", sub: "repeats in a fixed period", values: seasonalValues, color: "var(--v-teal)" },
  { title: "Irregular (I)", sub: "random one-off shocks", values: irregularValues, color: "var(--v-pink)" },
];

export default function TimeSeriesComponents() {
  const x0 = 72;
  const x1 = 940;
  const y0 = 48;
  const y1 = 250;
  const min = 40;
  const max = 120;

  return (
    <svg
      className="svgviz"
      viewBox="0 0 980 500"
      role="img"
      aria-label="A time series decomposed into trend, cyclic, seasonal and irregular components"
    >
      <text x={20} y={25} className="mono xs mu">
        TIME SERIES = TREND + CYCLIC + SEASONAL + IRREGULAR
      </text>

      {[40, 60, 80, 100, 120].map((tick) => {
        const y = y1 - ((tick - min) / (max - min)) * (y1 - y0);
        return (
          <g key={tick}>
            <line x1={x0} y1={y} x2={x1} y2={y} stroke="var(--line)" strokeWidth={0.8} strokeDasharray="3 4" />
            <text x={x0 - 8} y={y + 4} textAnchor="end" className="mono xs mu">
              {tick}
            </text>
          </g>
        );
      })}
      <line x1={x0} y1={y0} x2={x0} y2={y1} stroke="var(--line-strong)" strokeWidth={1.2} />
      <line x1={x0} y1={y1} x2={x1} y2={y1} stroke="var(--line-strong)" strokeWidth={1.2} />

      {[0, 12, 24, 36, 48, 60].map((tick) => {
        const x = x0 + (tick / N) * (x1 - x0);
        return (
          <g key={tick}>
            <line x1={x} y1={y1} x2={x} y2={y1 + 5} stroke="var(--line-strong)" strokeWidth={1} />
            <text x={x} y={y1 + 18} textAnchor="middle" className="mono xs mu">
              {tick}
            </text>
          </g>
        );
      })}

      <path
        d={linePath(observedValues, x0, x1, y0, y1, min, max)}
        fill="none"
        stroke="var(--c)"
        strokeWidth={2.4}
        strokeLinejoin="round"
      />
      <path
        d={linePath(trendValues, x0, x1, y0, y1, min, max)}
        fill="none"
        stroke="var(--v-amber)"
        strokeWidth={2}
        strokeDasharray="6 4"
      />
      <text x={x1} y={y0 + 12} textAnchor="end" className="xs" style={{ fill: "var(--c-ink)" }}>
        observed series + dashed trend
      </text>
      <text x={(x0 + x1) / 2} y={y1 + 34} textAnchor="middle" className="xs mu">
        time (months)
      </text>

      {panels.map((panel, index) => {
        const px = 55 + index * 232;
        const py = 318;
        const pw = 205;
        const ph = 110;
        const panelMin = Math.min(...panel.values) - 2;
        const panelMax = Math.max(...panel.values) + 2;
        return (
          <g key={panel.title}>
            <rect x={px} y={py} width={pw} height={ph} rx={9} fill="var(--surface)" stroke="var(--line)" />
            <text x={px + 11} y={py + 18} className="b" style={{ fontSize: 11.5, fill: panel.color }}>
              {panel.title}
            </text>
            <text x={px + 11} y={py + 31} style={{ fontSize: 8.5, fill: "var(--muted)", fontFamily: "var(--font-mono)" }}>
              {panel.sub}
            </text>
            <line
              x1={px + 12}
              y1={py + ph - 16}
              x2={px + pw - 12}
              y2={py + ph - 16}
              stroke="var(--line-strong)"
              strokeWidth={1}
            />
            <path
              d={linePath(panel.values, px + 12, px + pw - 12, py + 40, py + ph - 20, panelMin, panelMax)}
              fill="none"
              stroke={panel.color}
              strokeWidth={2}
              strokeLinejoin="round"
            />
          </g>
        );
      })}

      <text x={490} y={472} textAnchor="middle" className="xs mu">
        Trend and seasonal patterns are predictable; the irregular component is random noise.
      </text>
    </svg>
  );
}
