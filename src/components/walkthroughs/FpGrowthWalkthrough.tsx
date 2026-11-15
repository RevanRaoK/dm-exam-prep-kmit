import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";

type FpKey = "B" | "Proot" | "BP" | "BPE" | "BE" | "BPEN" | "BEN";

type FpCounts = Partial<Record<FpKey, number>>;

const positions: Record<FpKey | "root", { x: number; y: number; label: string }> = {
  root: { x: 300, y: 35, label: "null" },
  B: { x: 200, y: 105, label: "B" },
  Proot: { x: 410, y: 105, label: "P" },
  BP: { x: 120, y: 180, label: "B → P" },
  BE: { x: 290, y: 180, label: "B → E" },
  BPE: { x: 120, y: 255, label: "B → P → E" },
  BEN: { x: 290, y: 255, label: "B → E → N" },
  BPEN: { x: 120, y: 330, label: "B → P → E → N" },
};

const parents: Record<Exclude<FpKey, "B" | "Proot">, FpKey | "root"> = {
  BP: "B",
  BE: "B",
  BPE: "BP",
  BEN: "BE",
  BPEN: "BPE",
};

function TreeNode({
  x,
  y,
  label,
  count,
  highlighted,
  root,
}: {
  x: number;
  y: number;
  label: string;
  count?: number;
  highlighted?: boolean;
  root?: boolean;
}) {
  return (
    <g>
      <rect
        x={x - 46}
        y={y - 17}
        width={92}
        height={34}
        rx={8}
        fill={root ? "var(--surface-2)" : highlighted ? "var(--hot-bg)" : "var(--surface)"}
        stroke={highlighted ? "var(--hot)" : root ? "var(--line-strong)" : "var(--c-mid)"}
        strokeWidth={highlighted ? 2.2 : 1.3}
      />
      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        className="mono b"
        style={{ fontSize: count !== undefined ? 10.5 : 11.5, fill: highlighted ? "var(--hot)" : "var(--fg)" }}
      >
        {count !== undefined ? `${label}:${count}` : label}
      </text>
    </g>
  );
}

function FpTreeSvg({
  counts,
  highlight = [],
}: {
  counts: FpCounts;
  highlight?: FpKey[];
}) {
  const present = (key: FpKey) => (counts[key] ?? 0) > 0;
  const keys = Object.keys(parents) as Exclude<FpKey, "B" | "Proot">[];

  return (
    <svg
      className="svgviz"
      viewBox="0 0 700 390"
      role="img"
      aria-label="Step by step FP-tree construction for Book Mart transactions"
    >
      <text x={12} y={24} className="xs mono mu">
        FP-TREE
      </text>
      <TreeNode x={positions.root.x} y={positions.root.y} label="null" root />

      {present("B") ? (
        <line
          x1={positions.root.x}
          y1={positions.root.y + 17}
          x2={positions.B.x}
          y2={positions.B.y - 17}
          stroke="var(--line-strong)"
          strokeWidth={1.3}
        />
      ) : null}
      {present("Proot") ? (
        <line
          x1={positions.root.x}
          y1={positions.root.y + 17}
          x2={positions.Proot.x}
          y2={positions.Proot.y - 17}
          stroke="var(--line-strong)"
          strokeWidth={1.3}
        />
      ) : null}

      {keys.map((key) => {
        if (!present(key)) return null;
        const parent = parents[key];
        const from = positions[parent];
        const to = positions[key];
        return (
          <line
            key={`edge-${key}`}
            x1={from.x}
            y1={from.y + 17}
            x2={to.x}
            y2={to.y - 17}
            stroke="var(--line-strong)"
            strokeWidth={1.3}
          />
        );
      })}

      {(Object.keys(counts) as FpKey[]).map((key) =>
        present(key) ? (
          <TreeNode
            key={key}
            x={positions[key].x}
            y={positions[key].y}
            label={positions[key].label}
            count={counts[key]}
            highlighted={highlight.includes(key)}
          />
        ) : null,
      )}

      <rect
        x={540}
        y={20}
        width={145}
        height={148}
        rx={10}
        fill="var(--surface)"
        stroke="var(--line)"
      />
      <text x={554} y={40} className="mono xs mu">
        HEADER TABLE
      </text>
      {[
        ["B", 4],
        ["P", 4],
        ["E", 3],
        ["N", 2],
      ].map(([item, count], index) => (
        <g key={item}>
          <rect
            x={554}
            y={52 + index * 27}
            width={116}
            height={21}
            rx={5}
            fill="var(--surface-2)"
          />
          <text x={564} y={66 + index * 27} className="mono b sm">
            {item}
          </text>
          <text x={650} y={66 + index * 27} textAnchor="end" className="mono sm ink">
            {count}
          </text>
        </g>
      ))}
      <text x={12} y={378} className="xs mu">
        Each path is a transaction; shared prefixes are stored once. Highlighted node = the
        node just changed.
      </text>
    </svg>
  );
}

function FpNTreeSvg() {
  return (
    <svg
      className="svgviz"
      viewBox="0 0 440 300"
      role="img"
      aria-label="Conditional FP-tree for item N"
    >
      <text x={12} y={22} className="mono xs mu">
        CONDITIONAL FP-TREE FOR N
      </text>
      <TreeNode x={220} y={50} label="null" root />
      <line x1={220} y1={67} x2={220} y2={123} stroke="var(--line-strong)" strokeWidth={1.3} />
      <TreeNode x={220} y={140} label="B" count={2} highlighted />
      <line x1={220} y1={157} x2={220} y2={213} stroke="var(--line-strong)" strokeWidth={1.3} />
      <TreeNode x={220} y={230} label="E" count={2} highlighted />
      <text x={290} y={140} className="sm mu">
        P is pruned because its count is below 2
      </text>
      <text x={290} y={230} className="sm ink">
        Frequent with N: {"{N}, {B,N}, {E,N}, {B,E,N}"}
      </text>
    </svg>
  );
}

const db = [
  ["101", "Book, Pen, Eraser", "B, P, E"],
  ["102", "Pen, Pencil", "P"],
  ["103", "Notebook, Book, Pen, Eraser", "B, P, E, N"],
  ["104", "Book, Pen", "B, P"],
  ["105", "Book, Notebook, Eraser", "B, E, N"],
];

const steps: WalkthroughStep[] = [
  {
    title: "Book Mart 101–105: count every item",
    bullets: [
      "The first scan counts **Book (B) = 4, Pen (P) = 4, Eraser (E) = 3, Notebook (N) = 2** and **Pencil (PN) = 1**.",
      "With **min_sup = 25% of 5 = 1.25**, the required support count is **2**.",
    ],
    visual: (
      <div>
        <MiniTable head={["Trans_ID", "Items", "Frequency"]} rows={[
          ["B = Book", "101, 103, 104, 105", "4"],
          ["P = Pen", "101, 102, 103, 104", "4"],
          ["E = Eraser", "101, 103, 105", "3"],
          ["N = Notebook", "103, 105", "2"],
          ["PN = Pencil", "102", { text: "1, removed", tone: "bad" }],
        ]} />
        <Kpis items={["min_sup = **2 transactions**", "PN is **infrequent**", "Order: **B > P > E > N**"]} />
      </div>
    ),
  },
  {
    title: "Rewrite every transaction in frequency order",
    bullets: [
      "Items are sorted by descending frequency, so **B comes first, then P, then E, then N**.",
      "Every transaction is rewritten in that order so that common prefixes can be shared in the tree.",
    ],
    visual: (
      <div>
        <MiniTable
          head={["Trans_ID", "Original items", "Sorted for FP-tree"]}
          rows={db.map((row) => [row[0], row[1], { text: row[2], tone: undefined }])}
        />
        <SlideNote>The sorted paths become BPE, P, BPEN, BP and BEN.</SlideNote>
      </div>
    ),
  },
  {
    title: "Insert T101 = B, P, E",
    bullets: [
      "T101 creates the first branch **root → B:1 → P:1 → E:1**.",
      "No node exists yet, so all three nodes are new.",
    ],
    visual: <FpTreeSvg counts={{ B: 1, BP: 1, BPE: 1 }} highlight={["B", "BP", "BPE"]} />,
  },
  {
    title: "Insert T102 = P",
    bullets: [
      "T102 contains only **P**, so a separate **P:1** node is attached directly to the root.",
      "The P count is now split between the root P node and the B → P branch.",
    ],
    visual: (
      <FpTreeSvg
        counts={{ B: 1, Proot: 1, BP: 1, BPE: 1 }}
        highlight={["Proot"]}
      />
    ),
  },
  {
    title: "Insert T103 = B, P, E, N",
    bullets: [
      "T103 shares the prefix **B → P → E**, so those node counts increase to **B:2, P:2, E:2**.",
      "The remaining **N** creates a new child **B → P → E → N:1**.",
    ],
    visual: (
      <FpTreeSvg
        counts={{ B: 2, Proot: 1, BP: 2, BPE: 2, BPEN: 1 }}
        highlight={["BPEN"]}
      />
    ),
  },
  {
    title: "Insert T104 = B, P",
    bullets: [
      "T104 follows the existing **B → P** path, so B becomes **3** and B → P becomes **3**.",
      "No new nodes are created because the whole path already exists.",
    ],
    visual: (
      <FpTreeSvg
        counts={{ B: 3, Proot: 1, BP: 3, BPE: 2, BPEN: 1 }}
        highlight={["B", "BP"]}
      />
    ),
  },
  {
    title: "Insert T105 = B, E, N",
    bullets: [
      "T105 increases B to **4** and creates a new **B → E:1** branch.",
      "Notebook then creates a new child **B → E → N:1**.",
      "The final tree is complete and is much smaller than the original five transactions.",
    ],
    visual: (
      <FpTreeSvg
        counts={{ B: 4, Proot: 1, BP: 3, BPE: 2, BPEN: 1, BE: 1, BEN: 1 }}
        highlight={["BE", "BEN"]}
      />
    ),
  },
  {
    title: "The complete FP-tree and header links",
    bullets: [
      "The header table stores each frequent item and its total count, with node links joining all occurrences.",
      "The tree shares prefixes, so the whole database is compressed into **seven nodes plus the root**.",
      "Every path from the root spells a prefix of one or more transactions.",
    ],
    visual: (
      <div>
        <FpTreeSvg
          counts={{ B: 4, Proot: 1, BP: 3, BPE: 2, BPEN: 1, BE: 1, BEN: 1 }}
        />
        <Kpis items={["B = 4", "P = 4", "E = 3", "N = 2"]} />
      </div>
    ),
  },
  {
    title: "Conditional pattern base of N",
    bullets: [
      "The conditional pattern base of N collects the prefixes of every path that ends at N.",
      "The two prefixes are **{B,P,E}:1** and **{B,E}:1**, because N occurs once under each branch.",
    ],
    visual: (
      <MiniTable
        head={["Path ending at N", "Prefix (conditional pattern base)", "Count"]}
        rows={[
          ["B → P → E → N", "{B, P, E}", "1"],
          ["B → E → N", "{B, E}", "1"],
        ]}
        caption="Count the prefix items across all rows: B appears twice, P once and E twice."
      />
    ),
  },
  {
    title: "Conditional FP-tree of N",
    bullets: [
      "Only B (count 2) and E (count 2) meet min_sup inside the N pattern base, so P (count 1) is removed.",
      "The conditional FP-tree for N is **root → B:2 → E:2**.",
      "This tree gives the frequent itemsets **{N}, {B,N}, {E,N} and {B,E,N}**, all with support 2.",
    ],
    visual: <FpNTreeSvg />,
  },
  {
    title: "Conditional bases of E and P, then the final itemsets",
    bullets: [
      "The conditional pattern base of E is **{B,P}:2 and {B}:1**, so its conditional FP-tree is **B:3 → P:2**.",
      "The conditional pattern base of P is **{B}:3**, so the only extension is **{B,P}**.",
      "All frequent itemsets are **{B}, {P}, {E}, {N}, {B,P}, {B,E}, {P,E}, {B,P,E}, {B,N}, {E,N} and {B,E,N}**.",
    ],
    visual: (
      <div>
        <MiniTable
          head={["Item", "Conditional pattern base", "Conditional FP-tree", "Frequent itemsets"]}
          rows={[
            ["N", "{B,P,E}:1, {B,E}:1", "B:2 → E:2", "{N}, {B,N}, {E,N}, {B,E,N}"],
            ["E", "{B,P}:2, {B}:1", "B:3 → P:2", "{E}, {B,E}, {P,E}, {B,P,E}"],
            ["P", "{B}:3", "B:3", "{P}, {B,P}"],
            ["B", "empty", "B:4", "{B}"],
          ]}
        />
        <Kpis items={["11 frequent itemsets", "2 scans only", "No candidate generation"]} />
      </div>
    ),
  },
];

export default function FpGrowthWalkthrough() {
  return (
    <StepByStepVisualizer
      title="FP-Growth · Book Mart 101–105 · min_sup = 25%"
      subtitle="Frequency sort → FP-tree construction transaction by transaction → conditional pattern base → conditional FP-tree → all frequent itemsets."
      steps={steps}
    />
  );
}
