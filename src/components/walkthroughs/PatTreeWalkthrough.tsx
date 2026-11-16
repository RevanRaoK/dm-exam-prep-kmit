import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";

type Node = { id: string; x: number; y: number; label: string; kind: "leaf" | "bit" | "root" };

function PatTree({
  nodes,
  edges,
  height = 300,
  caption,
}: {
  nodes: Node[];
  edges: [string, string][];
  height?: number;
  caption: string;
}) {
  return (
    <div>
      <svg className="svgviz" viewBox={`0 0 980 ${height}`} role="img" aria-label="PAT tree construction stage">
        {edges.map(([from, to]) => {
          const a = nodes.find((node) => node.id === from)!;
          const b = nodes.find((node) => node.id === to)!;
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y + 15}
              x2={b.x}
              y2={b.y - 15}
              stroke="var(--line-strong)"
              strokeWidth={1.4}
            />
          );
        })}
        {nodes.map((node) => (
          <g key={node.id}>
            {node.kind === "leaf" ? (
              <>
                <rect x={node.x - 27} y={node.y - 15} width={54} height={30} rx={6} fill="var(--c-bg)" stroke="var(--c-mid)" />
                <text x={node.x} y={node.y + 4} textAnchor="middle" className="mono xs b ink">
                  {node.label}
                </text>
              </>
            ) : node.kind === "root" ? (
              <>
                <circle cx={node.x} cy={node.y} r={22} fill="var(--c)" />
                <text x={node.x} y={node.y + 4} textAnchor="middle" className="mono xs b" style={{ fill: "#fff" }}>
                  {node.label}
                </text>
              </>
            ) : (
              <>
                <circle cx={node.x} cy={node.y} r={18} fill="var(--surface)" stroke="var(--c)" strokeWidth={1.8} />
                <text x={node.x} y={node.y + 4} textAnchor="middle" className="mono xs b ink">
                  {node.label}
                </text>
              </>
            )}
          </g>
        ))}
      </svg>
      <SlideNote>{caption}</SlideNote>
    </div>
  );
}

const sistrings = [
  ["1", "100110001101"],
  ["2", "001100011010"],
  ["3", "011000110100"],
  ["4", "110001101000"],
  ["5", "100011010000"],
  ["6", "000110100000"],
  ["7", "001101000000"],
  ["8", "011010000000"],
  ["9", "110100000000"],
  ["10", "101000000000"],
  ["11", "010000000000"],
  ["12", "100000000000"],
];

const finalNodes: Node[] = [
  { id: "r", x: 480, y: 36, label: "1", kind: "root" },
  { id: "b2l", x: 240, y: 90, label: "2", kind: "bit" },
  { id: "b3l", x: 130, y: 140, label: "3", kind: "bit" },
  { id: "b6", x: 170, y: 290, label: "6", kind: "bit" },
  { id: "l6", x: 40, y: 360, label: "s6", kind: "leaf" },
  { id: "l2", x: 120, y: 360, label: "s2", kind: "leaf" },
  { id: "l7", x: 200, y: 360, label: "s7", kind: "leaf" },
  { id: "b3r", x: 360, y: 140, label: "3", kind: "bit" },
  { id: "l11", x: 280, y: 360, label: "s11", kind: "leaf" },
  { id: "b5r", x: 400, y: 240, label: "5", kind: "bit" },
  { id: "l3", x: 360, y: 360, label: "s3", kind: "leaf" },
  { id: "l8", x: 440, y: 360, label: "s8", kind: "leaf" },
  { id: "b2r", x: 720, y: 90, label: "2", kind: "bit" },
  { id: "b3rl", x: 640, y: 140, label: "3", kind: "bit" },
  { id: "b4l", x: 600, y: 190, label: "4", kind: "bit" },
  { id: "b5l", x: 560, y: 240, label: "5", kind: "bit" },
  { id: "l12", x: 520, y: 360, label: "s12", kind: "leaf" },
  { id: "l5", x: 600, y: 360, label: "s5", kind: "leaf" },
  { id: "l1", x: 680, y: 360, label: "s1", kind: "leaf" },
  { id: "l10", x: 760, y: 360, label: "s10", kind: "leaf" },
  { id: "b4r", x: 880, y: 190, label: "4", kind: "bit" },
  { id: "l4", x: 840, y: 360, label: "s4", kind: "leaf" },
  { id: "l9", x: 920, y: 360, label: "s9", kind: "leaf" },
];

const finalEdges: [string, string][] = [
  ["r", "b2l"],
  ["r", "b2r"],
  ["b2l", "b3l"],
  ["b2l", "b3r"],
  ["b3l", "l6"],
  ["b3l", "b6"],
  ["b6", "l2"],
  ["b6", "l7"],
  ["b3r", "l11"],
  ["b3r", "b5r"],
  ["b5r", "l3"],
  ["b5r", "l8"],
  ["b2r", "b3rl"],
  ["b2r", "b4r"],
  ["b3rl", "b4l"],
  ["b3rl", "l10"],
  ["b4l", "b5l"],
  ["b4l", "l1"],
  ["b5l", "l12"],
  ["b5l", "l5"],
  ["b4r", "l4"],
  ["b4r", "l9"],
];

const steps: WalkthroughStep[] = [
  {
    title: "PAT = Practical Algorithm To Retrieve Information Coded in Alphanumerics",
    bullets: [
      "A **PAT tree** is an unbalanced **binary digital tree** built from **sistrings** (semi-infinite strings) that start at every position of the input.",
      "The input is **100110001101**, so sistring 1 is **100110001101**, sistring 2 is **001100011010**, and so on until sistring 12 is **100000000000**.",
      "The individual **bits** decide the branching: **0 goes left** and **1 goes right**, and each internal node stores the **bit position** used for its test.",
      "For a text of **n** characters there are **n leaf nodes** and at most **n − 1** higher-level nodes.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable head={["Sistring", "Bits from that anchor"]} rows={sistrings.slice(0, 6)} caption="Every position in the text is an anchor point for a suffix." />
        <MiniTable head={["Sistring", "Bits from that anchor"]} rows={sistrings.slice(6)} caption="The strings are conceptually padded on the right so they remain unique." />
      </div>
    ),
  },
  {
    title: "Insert sistring 1 · the tree starts as one leaf",
    bullets: [
      "The first sistring **100110001101** becomes the **root leaf** because there is nothing to compare it with.",
      "A leaf stores the **starting location** of the sistring; the length is implied by the text length.",
      "The root is a leaf only at this first step; later insertions replace it with a **branch node**.",
      "The key value is stored at the **leaf**, not at the internal nodes.",
    ],
    visual: (
      <PatTree
        nodes={[{ id: "l1", x: 480, y: 120, label: "s1", kind: "leaf" }]}
        edges={[]}
        height={220}
        caption="Stage 1: leaf s1 holds the whole input string starting at position 1."
      />
    ),
  },
  {
    title: "Insert sistring 2 · bit 1 splits the tree",
    bullets: [
      "Sistring 1 starts with **1** and sistring 2 starts with **0**, so they differ first at **bit 1**.",
      "The new root tests **bit 1**: the **0** branch holds **sistring 2** and the **1** branch holds **sistring 1**.",
      "This is the fundamental Patricia rule: branch at the **first bit where two keys differ**.",
      "The root is now an **internal node** labelled with the bit position 1.",
    ],
    visual: (
      <PatTree
        nodes={[
          { id: "r", x: 480, y: 50, label: "1", kind: "root" },
          { id: "l2", x: 320, y: 150, label: "s2", kind: "leaf" },
          { id: "l1", x: 640, y: 150, label: "s1", kind: "leaf" },
        ]}
        edges={[
          ["r", "l2"],
          ["r", "l1"],
        ]}
        height={220}
        caption="Stage 2: bit 1 separates the 0-prefixed sistring from the 1-prefixed sistring."
      />
    ),
  },
  {
    title: "Insert sistrings 3 and 4 · bit 2 splits both branches",
    bullets: [
      "**Sistring 3 = 011000110100** differs from sistring 2 at **bit 2**, so a bit-2 node is placed under the 0 branch.",
      "**Sistring 4 = 110001101000** differs from sistring 1 at **bit 2**, so a bit-2 node is placed under the 1 branch.",
      "The tree now has a balanced-looking first two levels, but Patricia trees do **not** rebalance; they only split where keys first differ.",
      "The internal node labels **1** and **2** mean the bit position tested at that node, not a depth or a count.",
    ],
    visual: (
      <PatTree
        nodes={[
          { id: "r", x: 480, y: 40, label: "1", kind: "root" },
          { id: "b2l", x: 300, y: 100, label: "2", kind: "bit" },
          { id: "b2r", x: 660, y: 100, label: "2", kind: "bit" },
          { id: "l3", x: 220, y: 190, label: "s3", kind: "leaf" },
          { id: "l2", x: 380, y: 190, label: "s2", kind: "leaf" },
          { id: "l1", x: 580, y: 190, label: "s1", kind: "leaf" },
          { id: "l4", x: 740, y: 190, label: "s4", kind: "leaf" },
        ]}
        edges={[
          ["r", "b2l"],
          ["r", "b2r"],
          ["b2l", "l3"],
          ["b2l", "l2"],
          ["b2r", "l1"],
          ["b2r", "l4"],
        ]}
        height={250}
        caption="Stage 4: each insertion creates a branch at the first differing bit."
      />
    ),
  },
  {
    title: "Insert sistring 5 · bit-by-bit comparison reaches bit 4",
    bullets: [
      "Sistring 5 = **100011010000** follows the root bit 1 = **1** and the bit 2 = **0** path.",
      "It reaches sistring 1 = **100110001101**; comparing bit by bit, they first differ at **bit 4** (0 versus 1).",
      "A new internal node labelled **4** is inserted above leaf s1, with **s5** on the 0 side and **s1** on the 1 side.",
      "The bit comparison continues only until the first difference; there is no need to compare the remaining bits at this stage.",
    ],
    visual: (
      <PatTree
        nodes={[
          { id: "r", x: 480, y: 36, label: "1", kind: "root" },
          { id: "b2r", x: 640, y: 90, label: "2", kind: "bit" },
          { id: "b4", x: 640, y: 160, label: "4", kind: "bit" },
          { id: "l5", x: 560, y: 250, label: "s5", kind: "leaf" },
          { id: "l1", x: 740, y: 250, label: "s1", kind: "leaf" },
          { id: "l4", x: 840, y: 170, label: "s4", kind: "leaf" },
        ]}
        edges={[
          ["r", "b2r"],
          ["b2r", "b4"],
          ["b2r", "l4"],
          ["b4", "l5"],
          ["b4", "l1"],
        ]}
        height={300}
        caption="Stage 5: sistring 5 differs from sistring 1 first at bit 4, so the branch is labelled 4."
      />
    ),
  },
  {
    title: "Final PAT tree with all 12 sistrings",
    bullets: [
      "The finished tree is an **unbalanced binary digital tree** whose leaves are the sistrings in **sorted bit order**.",
      "Search for a pattern by tracing its bits from the root and reading the matching leaf positions.",
      "PAT trees support **prefix search**, **range search** and efficient **string matching**, and they are logically sorted unlike an inverted file.",
      "The tree is more accurate for string search, but it is **not a balanced search tree**, so its shape depends on the input text.",
    ],
    visual: (
      <PatTree
        nodes={finalNodes}
        edges={finalEdges}
        height={390}
        caption="Final tree: leaves are sistrings s1–s12; internal circles show the bit position tested at that node."
      />
    ),
  },
  {
    title: "Why PAT matters in the exam",
    bullets: [
      "A PAT tree indexes **continuous text** rather than words, so it avoids word-boundary errors and supports substring queries naturally.",
      "It can be stored as a **PAT array**, which is the sorted list of sistring positions used for binary search.",
      "The trade-off is **space and construction cost**: the tree stores one leaf per character plus internal nodes.",
      "Exam answer should mention **sistrings, binary digital tree, bit-position branching, leaf keys, n leaves and n − 1 internal nodes**.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable
          head={["Feature", "PAT tree", "Inverted file"]}
          rows={[
            ["Indexed unit", "every text position (sistring)", "whole processing tokens"],
            ["Search type", "substring and prefix search", "exact term lookup"],
            ["Order", "logically sorted by bits", "dictionary sorted by term"],
            ["Strength", "no word-boundary loss", "compact and fast for words"],
          ]}
        />
        <div>
          <Kpis items={["sistring per position", "0 left, 1 right", "bit position in node", "n leaves, n−1 nodes"]} />
          <SlideNote>
            The most common exam mistake is labelling internal nodes with words instead of the bit position used for branching.
          </SlideNote>
        </div>
      </div>
    ),
  },
];

export default function PatTreeWalkthrough() {
  return (
    <StepByStepVisualizer
      title="PAT Tree Construction"
      subtitle="Bit-by-bit Patricia tree from the sistrings of 100110001101, with bit-position branching and the final tree."
      steps={steps}
    />
  );
}
