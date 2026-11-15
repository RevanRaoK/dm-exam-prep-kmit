import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";

const transactions = [
  ["T100", "I1, I2, I5"],
  ["T200", "I2, I4"],
  ["T300", "I2, I3"],
  ["T400", "I1, I2, I4"],
  ["T500", "I1, I3"],
  ["T600", "I2, I3"],
  ["T700", "I1, I3"],
  ["T800", "I1, I2, I3, I5"],
  ["T900", "I1, I2, I3"],
];

type Layer = "l1" | "l2" | "l3" | "c4" | "done";

function Box({
  x,
  y,
  label,
  count,
  pruned = false,
  active = false,
}: {
  x: number;
  y: number;
  label: string;
  count?: number;
  pruned?: boolean;
  active?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={108}
        height={40}
        rx={8}
        fill={pruned ? "var(--surface-2)" : active ? "var(--c-bg)" : "var(--surface)"}
        stroke={pruned ? "var(--line-strong)" : active ? "var(--c)" : "var(--line)"}
        strokeWidth={active ? 2 : 1.2}
        strokeDasharray={pruned ? "4 3" : undefined}
      />
      <text
        x={x + 12}
        y={y + 17}
        className="mono b"
        style={{ fontSize: 11.5, fill: pruned ? "var(--muted)" : "var(--fg)" }}
      >
        {label}
      </text>
      <text
        x={x + 12}
        y={y + 31}
        className="mono"
        style={{ fontSize: 10, fill: pruned ? "var(--bad)" : "var(--c-ink)" }}
      >
        {count === undefined ? "candidate" : `support ${count}`}
      </text>
      {pruned ? (
        <text
          x={x + 96}
          y={y + 17}
          textAnchor="end"
          className="mono b"
          style={{ fontSize: 12, fill: "var(--bad)" }}
        >
          ×
        </text>
      ) : null}
    </g>
  );
}

function AprioriLattice({ active }: { active: Layer }) {
  const l2a = [
    ["{I1,I2}", 4],
    ["{I1,I3}", 4],
    ["{I1,I5}", 2],
    ["{I2,I3}", 4],
    ["{I2,I4}", 2],
  ] as const;
  const l2b = [
    ["{I2,I5}", 2],
    ["{I1,I4}", 1],
    ["{I3,I4}", 0],
    ["{I3,I5}", 1],
    ["{I4,I5}", 0],
  ] as const;
  const l1 = [
    ["I1", 6],
    ["I2", 7],
    ["I3", 6],
    ["I4", 2],
    ["I5", 2],
  ] as const;

  return (
    <svg
      className="svgviz"
      viewBox="0 0 700 450"
      role="img"
      aria-label="Apriori candidate lattice with frequent and pruned itemsets"
    >
      <text x={8} y={42} className="mono xs mu">
        L1
      </text>
      <text x={8} y={144} className="mono xs mu">
        L2
      </text>
      <text x={8} y={316} className="mono xs mu">
        L3
      </text>
      <text x={8} y={388} className="mono xs mu">
        C4
      </text>

      {l1.map(([label, count], index) => (
        <Box
          key={label}
          x={50 + index * 126}
          y={30}
          label={label}
          count={count}
          active={active === "l1"}
        />
      ))}

      {l2a.map(([label, count], index) => (
        <Box
          key={label}
          x={50 + index * 126}
          y={120}
          label={label}
          count={count}
          active={active === "l2"}
        />
      ))}
      {l2b.map(([label, count], index) => (
        <Box
          key={label}
          x={50 + index * 126}
          y={178}
          label={label}
          count={count}
          pruned={count < 2}
          active={active === "l2" && count >= 2}
        />
      ))}

      <Box
        x={170}
        y={290}
        label="{I1,I2,I3}"
        count={active === "l3" || active === "c4" || active === "done" ? 2 : undefined}
        active={active === "l3" || active === "done"}
      />
      <Box
        x={420}
        y={290}
        label="{I1,I2,I5}"
        count={active === "l3" || active === "c4" || active === "done" ? 2 : undefined}
        active={active === "l3" || active === "done"}
      />

      <Box
        x={280}
        y={366}
        label="{I1,I2,I3,I5}"
        count={active === "c4" ? 0 : undefined}
        pruned={active === "c4" || active === "done"}
        active={active === "c4"}
      />

      <text x={50} y={440} className="sm mu">
        Solid accent boxes are frequent; dashed boxes are pruned because a subset is not
        frequent.
      </text>
    </svg>
  );
}

const steps: WalkthroughStep[] = [
  {
    title: "Start: the transaction database and the threshold",
    bullets: [
      "**Apriori** reads the nine T100–T900 transactions and treats each item as a candidate 1-itemset.",
      "The **minimum support count is 2**, because 2 out of 9 transactions equals 22.2%.",
    ],
    visual: (
      <div>
        <MiniTable head={["TID", "Items"]} rows={transactions} />
        <Kpis items={["Database: **9 transactions**", "min_sup count = **2**", "Level-wise search begins at **1-itemsets**"]} />
      </div>
    ),
  },
  {
    title: "Scan the database and build C1",
    bullets: [
      "The first full scan counts every item and creates **C1 = {I1, I2, I3, I4, I5}**.",
      "Every item meets the threshold, so **L1 is identical to C1**.",
    ],
    visual: (
      <div>
        <MiniTable
          head={["Candidate C1", "Support count", "Meets min_sup = 2?"]}
          rows={[
            ["{I1}", "6", { text: "Yes", tone: "good" }],
            ["{I2}", "7", { text: "Yes", tone: "good" }],
            ["{I3}", "6", { text: "Yes", tone: "good" }],
            ["{I4}", "2", { text: "Yes", tone: "good" }],
            ["{I5}", "2", { text: "Yes", tone: "good" }],
          ]}
        />
        <SlideNote>All five candidate 1-itemsets survive, so |L1| = 5.</SlideNote>
      </div>
    ),
  },
  {
    title: "L1 → L2: join and count candidate pairs",
    bullets: [
      "The **join step** self-joins L1 to produce all ten possible 2-itemsets in C2.",
      "The second database scan counts each pair, and the **prune step** removes any pair below support 2.",
    ],
    visual: <AprioriLattice active="l2" />,
  },
  {
    title: "The frequent 2-itemsets L2",
    bullets: [
      "**Six itemsets** meet min_sup: {I1,I2} 4, {I1,I3} 4, {I1,I5} 2, {I2,I3} 4, {I2,I4} 2 and {I2,I5} 2.",
      "Four pairs are pruned: {I1,I4} 1, {I3,I5} 1, {I3,I4} 0 and {I4,I5} 0.",
      "These six frequent pairs form **L2** and become the input for the next level.",
    ],
    visual: (
      <div>
        <MiniTable
          head={["2-itemset", "Support", "Frequent?"]}
          rows={[
            ["{I1,I2}", "4", { text: "Yes", tone: "good" }],
            ["{I1,I3}", "4", { text: "Yes", tone: "good" }],
            ["{I1,I5}", "2", { text: "Yes", tone: "good" }],
            ["{I2,I3}", "4", { text: "Yes", tone: "good" }],
            ["{I2,I4}", "2", { text: "Yes", tone: "good" }],
            ["{I2,I5}", "2", { text: "Yes", tone: "good" }],
            ["{I1,I4}", "1", { text: "No, pruned", tone: "bad" }],
            ["{I3,I5}", "1", { text: "No, pruned", tone: "bad" }],
            ["{I3,I4}", "0", { text: "No, pruned", tone: "bad" }],
            ["{I4,I5}", "0", { text: "No, pruned", tone: "bad" }],
          ]}
        />
      </div>
    ),
  },
  {
    title: "L2 → C3: join, then prune with the Apriori property",
    bullets: [
      "Joining L2 with itself produces **{I1,I2,I3}** and **{I1,I2,I5}** as valid candidates.",
      "Candidates whose 2-subsets are missing from L2 are **pruned**, such as {I2,I3,I5} because {I3,I5} is infrequent.",
      "The **prune step** is the direct use of the Apriori property and it avoids a useless database scan.",
    ],
    visual: <AprioriLattice active="l3" />,
  },
  {
    title: "Count C3: two frequent 3-itemsets",
    bullets: [
      "**{I1,I2,I3}** occurs in T800 and T900, so its support is **2**.",
      "**{I1,I2,I5}** occurs in T100 and T800, so its support is also **2**.",
      "Since both meet min_sup, **L3 contains these two itemsets**.",
    ],
    visual: (
      <div>
        <MiniTable
          head={["3-itemset", "Transactions", "Support", "Frequent?"]}
          rows={[
            ["{I1,I2,I3}", "T800, T900", "2", { text: "Yes", tone: "good" }],
            ["{I1,I2,I5}", "T100, T800", "2", { text: "Yes", tone: "good" }],
          ]}
        />
        <SlideNote>The level-wise scan stops when no new frequent itemsets can be formed.</SlideNote>
      </div>
    ),
  },
  {
    title: "C4 is pruned, so the algorithm terminates",
    bullets: [
      "Joining L3 gives the 4-itemset **{I1,I2,I3,I5}**.",
      "The candidate is pruned because its subset **{I2,I3,I5}** is not in L3.",
      "With an empty **C4**, Apriori stops and returns L1, L2 and L3.",
    ],
    visual: <AprioriLattice active="c4" />,
  },
  {
    title: "Generate association rules from L3",
    bullets: [
      "Every non-empty subset of a frequent itemset becomes an **antecedent**, and the remaining items become the **consequent**.",
      "For **{I1,I2,I5}**, **I1 ∧ I5 → I2** and **I2 ∧ I5 → I1** both have confidence **2/2 = 100%**.",
      "The rule **I1 ∧ I2 → I5** has confidence **2/4 = 50%**, so only rules above min_conf are kept.",
    ],
    visual: (
      <div>
        <MiniTable
          head={["Rule", "Support", "Confidence", "Status"]}
          rows={[
            ["I1 ∧ I2 → I5", "2/9 = 22.2%", "2/4 = 50%", { text: "Keep if min_conf ≤ 50%", tone: "good" }],
            ["I1 ∧ I5 → I2", "2/9 = 22.2%", "2/2 = 100%", { text: "Strong rule", tone: "good" }],
            ["I2 ∧ I5 → I1", "2/9 = 22.2%", "2/2 = 100%", { text: "Strong rule", tone: "good" }],
            ["I1 ∧ I2 → I3", "2/9 = 22.2%", "2/4 = 50%", { text: "Keep if min_conf ≤ 50%", tone: "accent" }],
            ["I1 ∧ I3 → I2", "2/9 = 22.2%", "2/4 = 50%", { text: "Keep if min_conf ≤ 50%", tone: "accent" }],
            ["I2 ∧ I3 → I1", "2/9 = 22.2%", "2/4 = 50%", { text: "Keep if min_conf ≤ 50%", tone: "accent" }],
          ]}
        />
        <Kpis
          items={[
            "Frequent itemsets: **8**",
            "Rules with 100% confidence: **3**",
            "Highest support: **I1 and I2**",
          ]}
        />
      </div>
    ),
  },
];

export default function AprioriWalkthrough() {
  return (
    <StepByStepVisualizer
      title="Apriori · T100–T900 · min_sup = 2"
      subtitle="Scan → C1 → L1 → C2 → L2 → C3 → L3 → prune C4 → association rules. Every number matches the PYQ dataset."
      steps={steps}
    />
  );
}
