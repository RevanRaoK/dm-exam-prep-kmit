import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable } from "./shared";

const pts = [
  ["A", 2, 2],
  ["B", 2.6, 2.1],
  ["C", 3.2, 2],
  ["D", 2, 1.4],
  ["E", 2.6, 1.5],
  ["F", 3.6, 2.2],
  ["G", 7, 5],
  ["H", 7.5, 5.2],
  ["I", 8, 5],
  ["J", 7.2, 4.4],
  ["K", 8.8, 5.8],
  ["L", 4.5, 7],
] as const;

type Mode = "all" | "core" | "border" | "noise" | "final";

function sx(x: number) {
  return 54 + (x / 10) * 480;
}

function sy(y: number) {
  return 350 - (y / 8) * 300;
}

const core = new Set(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]);
const border = new Set(["K"]);
const cluster1 = new Set(["A", "B", "C", "D", "E", "F"]);
const cluster2 = new Set(["G", "H", "I", "J", "K"]);

function DbscanSvg({ mode }: { mode: Mode }) {
  const focus = mode === "core" ? "A" : mode === "border" ? "K" : mode === "noise" ? "L" : null;
  const focusPoint = pts.find((p) => p[0] === focus);

  const pointColor = (label: string) => {
    if (mode === "final") {
      if (cluster1.has(label)) return "var(--c)";
      if (cluster2.has(label)) return "var(--hot)";
      return "var(--muted)";
    }
    if (mode === "core") {
      return ["A", "B", "C", "D", "E"].includes(label) ? "var(--c)" : "var(--muted)";
    }
    if (mode === "border") {
      return ["H", "I", "K"].includes(label) ? "var(--hot)" : "var(--muted)";
    }
    return "var(--muted)";
  };

  const labelOffset: Record<string, [number, number, "start" | "middle" | "end"]> = {
    A: [-10, -14, "end"],
    B: [0, -14, "middle"],
    C: [12, -14, "start"],
    D: [-12, 19, "end"],
    E: [0, 21, "middle"],
    F: [13, -14, "start"],
    G: [-14, -10, "end"],
    H: [0, -15, "middle"],
    I: [14, -10, "start"],
    J: [0, 21, "middle"],
    K: [0, -17, "middle"],
    L: [0, -15, "middle"],
  };

  return (
    <svg
      className="svgviz"
      viewBox="0 0 610 400"
      role="img"
      aria-label="DBSCAN epsilon-neighbourhoods and core, border and noise points"
    >
      <text x={54} y={22} className="mono xs mu">
        {mode === "final" ? "DBSCAN RESULT · ε = 1.5 · MinPts = 3" : "ε-NEIGHBOURHOOD VIEW · ε = 1.5 · MinPts = 3"}
      </text>

      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((tick) => (
        <g key={`x-${tick}`}>
          <line x1={sx(tick)} y1={44} x2={sx(tick)} y2={356} stroke="var(--line)" strokeWidth={0.8} />
          <text x={sx(tick)} y={374} textAnchor="middle" className="mono xs mu">
            {tick}
          </text>
        </g>
      ))}
      {[1, 2, 3, 4, 5, 6, 7, 8].map((tick) => (
        <g key={`y-${tick}`}>
          <line x1={48} y1={sy(tick)} x2={540} y2={sy(tick)} stroke="var(--line)" strokeWidth={0.8} />
          <text x={40} y={sy(tick) + 4} textAnchor="end" className="mono xs mu">
            {tick}
          </text>
        </g>
      ))}

      {focusPoint ? (
        <g>
          <ellipse
            cx={sx(focusPoint[1])}
            cy={sy(focusPoint[2])}
            rx={1.5 * 48}
            ry={1.5 * 37.5}
            fill="var(--c-bg)"
            fillOpacity={0.55}
            stroke="var(--c)"
            strokeWidth={2}
            strokeDasharray="6 4"
          />
          <text
            x={sx(focusPoint[1])}
            y={sy(focusPoint[2]) - 68}
            textAnchor="middle"
            className="mono xs b ink"
          >
            ε = 1.5
          </text>
        </g>
      ) : null}

      {pts.map(([label, x, y]) => {
        const isCore = core.has(label);
        const isBorder = border.has(label);
        const isFocus = focus === label;
        const color = pointColor(label);

        if (mode === "final" && isBorder) {
          return (
            <circle
              key={label}
              cx={sx(x)}
              cy={sy(y)}
              r={9}
              fill="var(--surface)"
              stroke={color}
              strokeWidth={2.6}
            />
          );
        }

        if (mode === "final" && !isCore) {
          return (
            <g key={label}>
              <line x1={sx(x) - 6} y1={sy(y) - 6} x2={sx(x) + 6} y2={sy(y) + 6} stroke="var(--muted)" strokeWidth={2} />
              <line x1={sx(x) - 6} y1={sy(y) + 6} x2={sx(x) + 6} y2={sy(y) - 6} stroke="var(--muted)" strokeWidth={2} />
            </g>
          );
        }

        return (
          <g key={label}>
            {isFocus ? (
              <circle cx={sx(x)} cy={sy(y)} r={15} fill="none" stroke={color} strokeWidth={1.5} strokeDasharray="3 2" />
            ) : null}
            <circle
              cx={sx(x)}
              cy={sy(y)}
              r={isCore ? 8 : 7}
              fill={mode === "all" ? "var(--surface)" : color}
              stroke={color}
              strokeWidth={2}
              fillOpacity={mode === "all" ? 1 : 0.85}
            />
          </g>
        );
      })}

      {pts.map(([label, x, y]) => {
        const color = pointColor(label);
        const [dx, dy, anchor] = labelOffset[label] ?? [0, -13, "middle"];
        let text: string = label;
        if (mode === "final" && border.has(label)) text = `${label} (border)`;
        if (mode === "final" && !core.has(label) && !border.has(label)) text = `${label} (noise)`;
        return (
          <text
            key={`label-${label}`}
            x={sx(x) + dx}
            y={sy(y) + dy}
            textAnchor={anchor}
            className="mono xs b"
            stroke="var(--surface)"
            strokeWidth={3}
            paintOrder="stroke"
            style={{ fill: mode === "all" ? "var(--muted)" : color }}
          >
            {text}
          </text>
        );
      })}

      <text x={54} y={392} className="xs mu">
        Filled dot = core · ring = border · cross = noise · shaded ellipse = ε-neighbourhood
      </text>
    </svg>
  );
}

const steps: WalkthroughStep[] = [
  {
    title: "Set DBSCAN parameters and load the points",
    bullets: [
      "We choose **ε = 1.5** and **MinPts = 3**, so a point is dense when at least three points lie within radius 1.5.",
      "The twelve points form two obvious dense groups, with **K** sitting at the edge of the right group and **L** sitting far away.",
    ],
    visual: (
      <div>
        <DbscanSvg mode="all" />
        <Kpis items={["ε = **1.5**", "MinPts = **3**", "Points = **12**"]} />
      </div>
    ),
  },
  {
    title: "Neighbourhood of A: a core point",
    bullets: [
      "A's ε-neighbourhood contains **A, B, C, D and E**, which is five points including A itself.",
      "Since **5 ≥ MinPts = 3**, A is a **core point** and it can start a new cluster.",
      "Core points are the seeds that let DBSCAN expand a cluster.",
    ],
    visual: (
      <div>
        <DbscanSvg mode="core" />
        <Kpis items={["|Nε(A)| = **5**", "5 ≥ 3 → **core**", "Seeds cluster 1"]} />
      </div>
    ),
  },
  {
    title: "Neighbourhood of K: a border point",
    bullets: [
      "K's ε-neighbourhood contains only **H and I**, so K has fewer than MinPts points.",
      "K is within ε of the core points H and I, so it is a **border point** of the right-hand cluster.",
      "A border point belongs to a cluster but cannot expand it further.",
    ],
    visual: (
      <div>
        <DbscanSvg mode="border" />
        <Kpis items={["|Nε(K)| = **2**", "Below MinPts → not core", "Within ε of H and I → **border**"]} />
      </div>
    ),
  },
  {
    title: "Neighbourhood of L: a noise point",
    bullets: [
      "L's ε-neighbourhood contains only **L itself**, so it is not dense and is not near any core point.",
      "DBSCAN labels L as **noise**, and it is treated as an outlier rather than part of a cluster.",
      "Noise points can later become border points if they fall near a cluster discovered later.",
    ],
    visual: (
      <div>
        <DbscanSvg mode="noise" />
        <Kpis items={["|Nε(L)| = **1**", "Not core and not near a core", "Label = **noise**"]} />
      </div>
    ),
  },
  {
    title: "Expand both clusters and read the final result",
    bullets: [
      "The core points **A–F** form cluster 1, and the core points **G–J** form cluster 2, with **K** attached as a border point.",
      "The final result is **2 clusters, 10 core points, 1 border point and 1 noise point**.",
      "Because DBSCAN grows through density-reachable points, it can find non-spherical cluster shapes.",
    ],
    visual: (
      <div>
        <DbscanSvg mode="final" />
        <MiniTable
          head={["Point type", "Points", "Count"]}
          rows={[
            ["Core", "A–J", "10"],
            ["Border", "K", "1"],
            ["Noise", "L", "1"],
          ]}
        />
      </div>
    ),
  },
];

export default function DbscanWalkthrough() {
  return (
    <StepByStepVisualizer
      title="DBSCAN · ε = 1.5 · MinPts = 3"
      subtitle="See exactly why A is core, K is border and L is noise, then watch the two clusters form."
      steps={steps}
    />
  );
}
