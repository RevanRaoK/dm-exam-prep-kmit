import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";

const points = [
  ["P1", 1, 1],
  ["P2", 1.5, 1.5],
  ["P3", 2, 1],
  ["P4", 2.5, 1.8],
  ["P5", 4, 3.5],
  ["P6", 4.5, 4],
  ["P7", 5, 3.2],
  ["P8", 5.5, 4.2],
] as const;

type Center = [number, number];

function scaleX(x: number) {
  return 66 + (x / 6) * 480;
}

function scaleY(y: number) {
  return 330 - (y / 6) * 280;
}

function KMeansSvg({
  centers,
  assignments,
  moved = [],
  final = false,
}: {
  centers: [Center, Center];
  assignments: number[];
  moved?: number[];
  final?: boolean;
}) {
  const colors = ["var(--c)", "var(--hot)"];
  return (
    <svg
      className="svgviz"
      viewBox="0 0 610 400"
      role="img"
      aria-label="K-means assignments and centroid movement on a two-dimensional scatter plot"
    >
      <text x={66} y={24} className="mono xs mu">
        {final ? "FINAL CLUSTERS" : "ASSIGNMENT VIEW"}
      </text>

      {[0, 1, 2, 3, 4, 5, 6].map((tick) => (
        <g key={`x-${tick}`}>
          <line
            x1={scaleX(tick)}
            y1={50}
            x2={scaleX(tick)}
            y2={336}
            stroke="var(--line)"
            strokeWidth={0.8}
          />
          <text
            x={scaleX(tick)}
            y={352}
            textAnchor="middle"
            className="mono xs mu"
          >
            {tick}
          </text>
        </g>
      ))}
      {[0, 1, 2, 3, 4, 5, 6].map((tick) => (
        <g key={`y-${tick}`}>
          <line
            x1={60}
            y1={scaleY(tick)}
            x2={550}
            y2={scaleY(tick)}
            stroke="var(--line)"
            strokeWidth={0.8}
          />
          <text
            x={52}
            y={scaleY(tick) + 4}
            textAnchor="end"
            className="mono xs mu"
          >
            {tick}
          </text>
        </g>
      ))}

      {points.map(([label, x, y], index) => {
        const cluster = assignments[index];
        return (
          <line
            key={`line-${label}`}
            x1={scaleX(x)}
            y1={scaleY(y)}
            x2={scaleX(centers[cluster][0])}
            y2={scaleY(centers[cluster][1])}
            stroke={colors[cluster]}
            strokeWidth={1}
            strokeDasharray="3 3"
            opacity={0.45}
          />
        );
      })}

      {points.map(([label, x, y], index) => {
        const cluster = assignments[index];
        const isMoved = moved.includes(index);
        return (
          <g key={label}>
            {isMoved ? (
              <circle
                cx={scaleX(x)}
                cy={scaleY(y)}
                r={14}
                fill="none"
                stroke="var(--hot)"
                strokeWidth={1.5}
                strokeDasharray="3 2"
              />
            ) : null}
            <circle
              cx={scaleX(x)}
              cy={scaleY(y)}
              r={8}
              fill={colors[cluster]}
              stroke="var(--surface)"
              strokeWidth={1.5}
              fillOpacity={0.9}
            />
            <text
              x={scaleX(x)}
              y={scaleY(y) - 14}
              textAnchor="middle"
              className="mono xs b"
              style={{ fill: colors[cluster] }}
            >
              {label}
            </text>
          </g>
        );
      })}

      {centers.map(([x, y], index) => (
        <g key={`centre-${index}`}>
          <path
            d={`M${scaleX(x)} ${scaleY(y) - 12} L${scaleX(x) + 12} ${scaleY(y)} L${scaleX(x)} ${scaleY(y) + 12} L${scaleX(x) - 12} ${scaleY(y)} Z`}
            fill={colors[index]}
            stroke="var(--surface)"
            strokeWidth={2}
          />
          <text
            x={scaleX(x)}
            y={scaleY(y) + 30}
            textAnchor="middle"
            className="mono sm b"
            stroke="var(--surface)"
            strokeWidth={3}
            paintOrder="stroke"
            style={{ fill: colors[index] }}
          >
            c{index + 1} ({x.toFixed(2)}, {y.toFixed(2)})
          </text>
        </g>
      ))}

      <text x={66} y={384} className="xs mu">
        Diamond = centroid · dashed line = current assignment · ring = point that changed cluster
      </text>
    </svg>
  );
}

const distanceRows1 = [
  ["P1 (1,1)", "0.00", "1.70", { text: "C1", tone: "accent" }],
  ["P2 (1.5,1.5)", "0.71", "1.06", { text: "C1", tone: "accent" }],
  ["P3 (2,1)", "1.00", "0.94", { text: "C2", tone: "hot" }],
  ["P4 (2.5,1.8)", "1.70", "0.00", { text: "C2", tone: "hot" }],
  ["P5 (4,3.5)", "3.91", "2.34", { text: "C2", tone: "hot" }],
  ["P6 (4.5,4)", "4.61", "2.97", { text: "C2", tone: "hot" }],
  ["P7 (5,3.2)", "4.57", "2.87", { text: "C2", tone: "hot" }],
  ["P8 (5.5,4.2)", "5.52", "3.84", { text: "C2", tone: "hot" }],
] as const;

const distanceRows2 = [
  ["P1", "0.35", "3.51", { text: "C1", tone: "accent" }],
  ["P2", "0.35", "2.82", { text: "C1", tone: "accent" }],
  ["P3", "0.79", "2.73", { text: "C1 (moved)", tone: "accent" }],
  ["P4", "1.37", "1.83", { text: "C1 (moved)", tone: "accent" }],
  ["P5", "3.55", "0.56", { text: "C2", tone: "hot" }],
  ["P6", "4.26", "1.20", { text: "C2", tone: "hot" }],
  ["P7", "4.23", "1.11", { text: "C2", tone: "hot" }],
  ["P8", "5.17", "2.02", { text: "C2", tone: "hot" }],
] as const;

const steps: WalkthroughStep[] = [
  {
    title: "Start with eight points and two initial centres",
    bullets: [
      "The eight points form two natural groups, and **k = 2** because we want two clusters.",
      "The initial centres are chosen as **c1 = (1,1)** and **c2 = (2.5,1.8)**, and every point will join the nearer centre.",
    ],
    visual: (
      <div>
        <MiniTable
          head={["Point", "x", "y"]}
          rows={points.map(([label, x, y]) => [label, String(x), String(y)])}
        />
        <KpiRow />
      </div>
    ),
  },
  {
    title: "Iteration 1: assign each point to the nearest centre",
    bullets: [
      "**P1 and P2** are closer to c1, while **P3 through P8** are closer to c2.",
      "The boundary lies between x = 1.5 and x = 2, so the first partition is **{P1,P2}** and **{P3,…,P8}**.",
    ],
    visual: (
      <div>
        <KMeansSvg
          centers={[
            [1, 1],
            [2.5, 1.8],
          ]}
          assignments={[0, 0, 1, 1, 1, 1, 1, 1]}
        />
        <MiniTable
          head={["Point", "d to c1", "d to c2", "Assigned"]}
          rows={distanceRows1.map((row) => [...row])}
        />
      </div>
    ),
  },
  {
    title: "Iteration 1: recompute both centroids",
    bullets: [
      "The new c1 is the mean of **P1 and P2**, which is **(1.25,1.25)**.",
      "The new c2 is the mean of **P3 through P8**, which is **(3.92,2.95)**.",
    ],
    visual: (
      <div>
        <KMeansSvg
          centers={[
            [1.25, 1.25],
            [3.9167, 2.95],
          ]}
          assignments={[0, 0, 1, 1, 1, 1, 1, 1]}
        />
        <Kpis
          items={[
            "c1 = mean(P1,P2) = **(1.25, 1.25)**",
            "c2 = mean(P3…P8) = **(3.92, 2.95)**",
          ]}
        />
      </div>
    ),
  },
  {
    title: "Iteration 2: P3 and P4 move to cluster 1",
    bullets: [
      "With the updated centres, **P3 and P4 are now closer to c1**, so they change cluster.",
      "The new partition is **{P1,P2,P3,P4}** and **{P5,P6,P7,P8}**.",
      "The dashed rings mark the two points whose membership changed.",
    ],
    visual: (
      <div>
        <KMeansSvg
          centers={[
            [1.25, 1.25],
            [3.9167, 2.95],
          ]}
          assignments={[0, 0, 0, 0, 1, 1, 1, 1]}
          moved={[2, 3]}
        />
        <MiniTable
          head={["Point", "d to c1", "d to c2", "Assigned"]}
          rows={distanceRows2.map((row) => [...row])}
        />
      </div>
    ),
  },
  {
    title: "Iteration 2: recompute the centroids again",
    bullets: [
      "The mean of **P1 through P4** becomes **c1 = (1.75,1.325)**.",
      "The mean of **P5 through P8** becomes **c2 = (4.75,3.725)**.",
      "The centres have moved, so the assignment step must run one more time.",
    ],
    visual: (
      <div>
        <KMeansSvg
          centers={[
            [1.75, 1.325],
            [4.75, 3.725],
          ]}
          assignments={[0, 0, 0, 0, 1, 1, 1, 1]}
        />
        <Kpis
          items={[
            "c1 = **(1.75, 1.325)**",
            "c2 = **(4.75, 3.725)**",
            "Cluster sizes = **4 and 4**",
          ]}
        />
      </div>
    ),
  },
  {
    title: "Iteration 3: no point moves, so the algorithm stops",
    bullets: [
      "Every point remains with its current centre, so the cluster membership is **stable**.",
      "The final clusters are **{P1,P2,P3,P4}** with centre (1.75,1.325) and **{P5,P6,P7,P8}** with centre (4.75,3.725).",
      "K-means has converged, and the result can be reported with the final **sum of squared errors**.",
    ],
    visual: (
      <div>
        <KMeansSvg
          centers={[
            [1.75, 1.325],
            [4.75, 3.725],
          ]}
          assignments={[0, 0, 0, 0, 1, 1, 1, 1]}
          final
        />
        <SlideNote>
          The algorithm repeats only the assignment and centroid-update steps; choosing k and
          the initial centres happens once.
        </SlideNote>
      </div>
    ),
  },
];

function KpiRow() {
  return (
    <Kpis
      items={[
        "Initial c1 = **(1,1)**",
        "Initial c2 = **(2.5,1.8)**",
        "k = **2**",
      ]}
    />
  );
}

export default function KMeansWalkthrough() {
  return (
    <StepByStepVisualizer
      title="K-Means · eight 2-D points · k = 2"
      subtitle="Pick centres → assign every point → recompute the means → repeat until no point moves, with the full distance working."
      steps={steps}
    />
  );
}
