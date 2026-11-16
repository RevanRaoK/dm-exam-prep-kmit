import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";

const terms = ["T1", "T2", "T3", "T4", "T5", "T6"];

const matrix: Record<string, Record<string, number>> = {
  T1: { T2: 15, T3: 6, T4: 8, T5: 12, T6: 14 },
  T2: { T1: 15, T3: 12, T4: 10, T5: 6, T6: 8 },
  T3: { T1: 6, T2: 12, T4: 16, T5: 4, T6: 10 },
  T4: { T1: 8, T2: 10, T3: 16, T5: 9, T6: 4 },
  T5: { T1: 12, T2: 6, T3: 4, T4: 9, T6: 13 },
  T6: { T1: 14, T2: 8, T3: 10, T4: 4, T5: 13 },
};

function matrixRow(term: string) {
  return [
    term,
    ...terms.map((other) => {
      if (other === term) return "—";
      const value = matrix[term][other];
      return { text: String(value), tone: value >= 10 ? ("good" as const) : ("mut" as const) };
    }),
  ];
}

function relationRow(term: string) {
  return [
    term,
    ...terms.map((other) => {
      if (other === term) return "—";
      const value = matrix[term][other];
      return { text: value >= 10 ? "1" : "0", tone: value >= 10 ? ("good" as const) : ("mut" as const) };
    }),
  ];
}

function ClusterGraph({ mode }: { mode: "all" | "cliques" }) {
  const positions: Record<string, { x: number; y: number }> = {
    T1: { x: 250, y: 60 },
    T2: { x: 110, y: 170 },
    T3: { x: 250, y: 285 },
    T4: { x: 410, y: 200 },
    T5: { x: 430, y: 70 },
    T6: { x: 345, y: 155 },
  };
  const edges: [string, string][] = [
    ["T1", "T2"],
    ["T1", "T5"],
    ["T1", "T6"],
    ["T2", "T3"],
    ["T2", "T4"],
    ["T3", "T4"],
    ["T3", "T6"],
    ["T5", "T6"],
  ];
  const cliqueEdges = new Set(["T1-T5", "T1-T6", "T5-T6", "T2-T3", "T2-T4", "T3-T4"]);
  return (
    <svg className="svgviz" viewBox="0 0 560 340" role="img" aria-label="Term relationship graph with clique and star classes">
      <text x={12} y={16} className="mono xs mu">
        TERM RELATIONSHIP GRAPH · THRESHOLD ≥ 10
      </text>
      {edges.map(([a, b]) => {
        const key = [a, b].sort().join("-");
        const strong = mode === "cliques" && cliqueEdges.has(key);
        return (
          <line
            key={`${a}-${b}`}
            x1={positions[a].x}
            y1={positions[a].y}
            x2={positions[b].x}
            y2={positions[b].y}
            stroke={strong ? "var(--c)" : "var(--line-strong)"}
            strokeWidth={strong ? 3 : 1.6}
          />
        );
      })}
      {terms.map((term) => (
        <g key={term}>
          <circle cx={positions[term].x} cy={positions[term].y} r={22} fill="var(--c-bg)" stroke="var(--c-mid)" strokeWidth={1.6} />
          <text x={positions[term].x} y={positions[term].y + 4} textAnchor="middle" className="mono xs b ink">
            {term}
          </text>
        </g>
      ))}
      {mode === "cliques" ? (
        <>
          <text x={318} y={28} className="mono xs b ink">
            clique 1: T1, T5, T6
          </text>
          <text x={318} y={320} className="mono xs b ink">
            clique 2: T2, T3, T4
          </text>
        </>
      ) : (
        <text x={12} y={320} className="mono xs mu">
          An edge means the pair has similarity ≥ 10.
        </text>
      )}
    </svg>
  );
}

const steps: WalkthroughStep[] = [
  {
    title: "The exact JNTUH Feb-2023 Q7 term-term matrix",
    bullets: [
      "The question gives a symmetric **6 × 6 term-term matrix** for **T1 to T6**, and the diagonal is empty because a term is not correlated with itself.",
      "The similarity is **SIM(Termᵢ, Termⱼ) = Σₖ (Termₖ,ᵢ)(Termₖ,ⱼ)** summed across all items.",
      "The matrix is **symmetric** because the simple formula is reflexive, so only the upper triangle needs to be read.",
      "The threshold rule is: a pair is similar when its value is **10 or greater**.",
    ],
    visual: (
      <MiniTable
        head={["", ...terms]}
        rows={terms.map(matrixRow)}
        caption="Green cells are ≥ 10 and become 1; muted cells are below 10 and become 0."
      />
    ),
  },
  {
    title: "Step 2 · Term Relationship matrix at threshold 10",
    bullets: [
      "Replace every value **≥ 10** with **1** and every value **< 10** with **0**, and leave the diagonal blank.",
      "The resulting binary matrix is the **Term Relationship matrix**, which records which terms are similar enough to share a class.",
      "The 1 entries are **T1–T2, T1–T5, T1–T6, T2–T3, T2–T4, T3–T4, T3–T6 and T5–T6**.",
      "A term with no 1 in its row would form a class by itself, which is why isolated terms always remain singleton clusters.",
    ],
    visual: (
      <MiniTable
        head={["", ...terms]}
        rows={terms.map(relationRow)}
        caption="Term Relationship matrix: 1 = similar at threshold 10 or higher; 0 = not similar."
      />
    ),
  },
  {
    title: "Step 3 · Draw the network of term relationships",
    bullets: [
      "Each term is a **node**, and each 1 in the relationship matrix becomes an **arc** between two nodes.",
      "The graph contains two **triangles**: **T1–T5–T6** and **T2–T3–T4**.",
      "Two extra arcs, **T1–T2** and **T3–T6**, connect the triangles but do not create a larger complete subgraph.",
      "A **clique** is a maximal complete subgraph, so every pair inside the clique must be directly connected.",
    ],
    visual: <ClusterGraph mode="cliques" />,
  },
  {
    title: "Step 4 · Clique technique classes",
    bullets: [
      "The first maximal clique is **{T1, T5, T6}**, because all three pairwise edges exist: T1–T5, T1–T6 and T5–T6.",
      "The second maximal clique is **{T2, T3, T4}**, because T2–T3, T2–T4 and T3–T4 all exist.",
      "**T1 and T2 are not in the same clique**, even though they have a strong edge, because T1–T3 and T1–T4 are below threshold.",
      "The clique technique gives the strongest classes but usually produces **more classes** than the other techniques.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable
          head={["Class", "Terms", "Why it is a clique"]}
          rows={[
            ["Clique 1", { text: "{T1, T5, T6}", tone: "good" }, "all three pair similarities ≥ 10"],
            ["Clique 2", { text: "{T2, T3, T4}", tone: "good" }, "all three pair similarities ≥ 10"],
            ["Not a clique", { text: "{T1, T2, T5, T6}", tone: "bad" }, "T2–T5 = 6 and T2–T6 = 8"],
            ["Not a clique", { text: "{T2, T3, T4, T6}", tone: "bad" }, "T2–T6 = 8 and T4–T6 = 4"],
          ]}
        />
        <div>
          <Kpis items={["Clique = complete subgraph", "Two cliques here", "No overlap", "Strongest classes"]} />
          <SlideNote>Write the cliques in set notation and justify each with the pairwise threshold test.</SlideNote>
        </div>
      </div>
    ),
  },
  {
    title: "Step 5 · Star technique classes",
    bullets: [
      "Start with the lowest-numbered term **T1** and place it in a new class together with every term directly similar to it.",
      "The first star is **{T1, T2, T5, T6}**, because T2, T5 and T6 all have a 1 with T1.",
      "The next seed is the smallest term **not already in a class**, which is **T3**.",
      "The second star is **{T3, T2, T4}**, because T2 and T4 are directly similar to T3; **T2 appears in both classes**, so star clusters may overlap.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable
          head={["Seed", "Members directly similar to seed", "Class"]}
          rows={[
            ["T1", "T1 + T2, T5, T6", { text: "{T1, T2, T5, T6}", tone: "good" }],
            ["T3", "T3 + T2, T4", { text: "{T2, T3, T4}", tone: "good" }],
            ["Stop", "all terms are now in a class", "no further seed"],
          ]}
          caption="Star classes can overlap; T2 belongs to both classes in this example."
        />
        <MiniTable
          head={["Class", "Term", "Role"]}
          rows={[
            ["Star 1", "T1", "seed"],
            ["Star 1", "T2, T5, T6", "directly similar to T1"],
            ["Star 2", "T3", "next seed not in a class"],
            ["Star 2", "T2, T4", "directly similar to T3"],
          ]}
        />
      </div>
    ),
  },
  {
    title: "Step 6 · Single-link technique",
    bullets: [
      "**Single link** joins two clusters when any one pair of their members is similar, so it follows chains of relationships.",
      "Start with each term alone and merge **T1–T2, T1–T5, T1–T6, T2–T3, T2–T4, T3–T4, T3–T6 and T5–T6**.",
      "The chain **T4–T2–T1–T6–T3** connects both triangles, so the final single-link result is **one class {T1, T2, T3, T4, T5, T6}**.",
      "A term **cannot appear in two single-link clusters**, because single link always produces a partition of the terms.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable
          head={["Step", "Merge", "Working classes"]}
          rows={[
            ["1", "T1–T5 and T1–T6", "{T1,T5,T6}"],
            ["2", "T2–T3 and T3–T4", "{T2,T3,T4}"],
            ["3", "T1–T2 bridges the groups", "{T1,T2,T3,T4,T5,T6}"],
            ["Final", "one connected component", { text: "one class", tone: "good" }],
          ]}
          caption="Single link is the most permissive technique because one close pair can merge two large clusters."
        />
        <div>
          <Kpis items={["Single link = connected components", "One cluster here", "No overlap possible", "Chain effect"]} />
          <SlideNote>
            This is exactly why the 2022 paper asks you to prove that a term cannot be found in multiple clusters under single link.
          </SlideNote>
        </div>
      </div>
    ),
  },
  {
    title: "Compare the three techniques · exam conclusion",
    bullets: [
      "**Clique** gives tight, strongly related classes and allows a term to be in several cliques, but it creates the most classes.",
      "**Star** is cheaper, allows overlap, and uses a seed plus its direct neighbours, so it can create broad classes around hub terms.",
      "**Single link** is the most permissive and produces a partition, but a chain of weak links can merge unrelated groups.",
      "For the given matrix the answers are: clique **{T1,T5,T6}** and **{T2,T3,T4}**, star **{T1,T2,T5,T6}** and **{T2,T3,T4}**, and single link **{T1,T2,T3,T4,T5,T6}**.",
    ],
    visual: (
      <MiniTable
        head={["Technique", "Classes for this matrix", "Overlap", "Main risk"]}
        rows={[
          ["Clique", "{T1,T5,T6} · {T2,T3,T4}", "yes", "too many small classes"],
          ["Star", "{T1,T2,T5,T6} · {T2,T3,T4}", "yes", "a hub term pulls in weak neighbours"],
          ["Single link", "{T1,T2,T3,T4,T5,T6}", "no", "chaining merges distinct concepts"],
        ]}
        caption="State the matrix, the threshold, the relationship matrix, the graph, then the classes."
      />
    ),
  },
];

export default function TermClusterWalkthrough() {
  return (
    <StepByStepVisualizer
      title="Term-Term Matrix Clustering"
      subtitle="Exact JNTUH Feb-2023 Q7: 6 × 6 T1–T6 matrix, threshold ≥ 10, relationship matrix, clique classes and star / single-link clusters."
      steps={steps}
    />
  );
}
