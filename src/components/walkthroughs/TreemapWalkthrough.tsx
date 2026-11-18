import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";

function TreemapFrame({ level = 1 }: { level?: number }) {
  const outer = { x: 40, y: 62, w: 680, h: 220 };
  const a = { x: 40, y: 62, w: 238, h: 220 };
  const b = { x: 278, y: 62, w: 170, h: 220 };
  const c = { x: 448, y: 62, w: 272, h: 220 };
  const a1 = { x: 40, y: 62, w: 238, h: 132 };
  const a2 = { x: 40, y: 194, w: 238, h: 88 };
  const b1 = { x: 278, y: 62, w: 170, h: 121 };
  const b2 = { x: 278, y: 183, w: 170, h: 99 };
  const c1 = { x: 448, y: 62, w: 82, h: 220 };
  const c2 = { x: 530, y: 62, w: 122, h: 220 };
  const c3 = { x: 652, y: 62, w: 68, h: 220 };
  return (
    <svg className="svgviz" viewBox="0 0 780 320" role="img" aria-label="Treemap subdivision by subtree size">
      <rect x={outer.x} y={outer.y} width={outer.w} height={outer.h} rx={6} fill="var(--surface)" stroke="var(--line-strong)" />
      {level >= 2 ? (
        <>
          <rect x={c.x + 2} y={c.y + 2} width={c.w - 4} height={c.h - 4} fill="var(--v-amber)" fillOpacity={0.2} stroke="var(--v-amber)" />
          <rect x={b.x + 2} y={b.y + 2} width={b.w - 4} height={b.h - 4} fill="var(--v-pink)" fillOpacity={0.18} stroke="var(--v-pink)" />
          <rect x={a.x + 2} y={a.y + 2} width={a.w - 4} height={a.h - 4} fill="var(--v-teal)" fillOpacity={0.18} stroke="var(--v-teal)" />
          <text x={a.x + a.w / 2} y={a.y + a.h / 2} textAnchor="middle" className="b" style={{ fill: "var(--v-teal)" }}>
            A
          </text>
          <text x={b.x + b.w / 2} y={b.y + b.h / 2} textAnchor="middle" className="b" style={{ fill: "var(--v-pink)" }}>
            B
          </text>
          <text x={c.x + c.w / 2} y={c.y + c.h / 2} textAnchor="middle" className="b" style={{ fill: "var(--v-amber)" }}>
            C
          </text>
        </>
      ) : null}
      {level >= 3 ? (
        <>
          <rect x={a1.x + 6} y={a1.y + 6} width={a1.w - 12} height={a1.h - 12} rx={3} fill="var(--v-teal)" fillOpacity={0.35} stroke="#fff" />
          <rect x={a2.x + 6} y={a2.y + 6} width={a2.w - 12} height={a2.h - 12} rx={3} fill="var(--v-teal)" fillOpacity={0.55} stroke="#fff" />
          <rect x={b1.x + 6} y={b1.y + 6} width={b1.w - 12} height={b1.h - 12} rx={3} fill="var(--v-pink)" fillOpacity={0.35} stroke="#fff" />
          <rect x={b2.x + 6} y={b2.y + 6} width={b2.w - 12} height={b2.h - 12} rx={3} fill="var(--v-pink)" fillOpacity={0.55} stroke="#fff" />
          <rect x={c1.x + 6} y={c1.y + 6} width={c1.w - 12} height={c1.h - 12} rx={3} fill="var(--v-amber)" fillOpacity={0.3} stroke="#fff" />
          <rect x={c2.x + 6} y={c2.y + 6} width={c2.w - 12} height={c2.h - 12} rx={3} fill="var(--v-amber)" fillOpacity={0.5} stroke="#fff" />
          <rect x={c3.x + 6} y={c3.y + 6} width={c3.w - 12} height={c3.h - 12} rx={3} fill="var(--v-amber)" fillOpacity={0.7} stroke="#fff" />
          <text x={a1.x + a1.w / 2} y={a1.y + a1.h / 2} textAnchor="middle" className="xs b" style={{ fill: "#fff" }}>
            A1
          </text>
          <text x={a2.x + a2.w / 2} y={a2.y + a2.h / 2} textAnchor="middle" className="xs b" style={{ fill: "#fff" }}>
            A2
          </text>
          <text x={b1.x + b1.w / 2} y={b1.y + b1.h / 2} textAnchor="middle" className="xs b" style={{ fill: "#fff" }}>
            B1
          </text>
          <text x={b2.x + b2.w / 2} y={b2.y + b2.h / 2} textAnchor="middle" className="xs b" style={{ fill: "#fff" }}>
            B2
          </text>
          <text x={c1.x + c1.w / 2} y={c1.y + c1.h / 2} textAnchor="middle" className="xs b" style={{ fill: "#fff" }}>
            C1
          </text>
          <text x={c2.x + c2.w / 2} y={c2.y + c2.h / 2} textAnchor="middle" className="xs b" style={{ fill: "#fff" }}>
            C2
          </text>
          <text x={c3.x + c3.w / 2} y={c3.y + c3.h / 2} textAnchor="middle" className="xs b" style={{ fill: "#fff" }}>
            C3
          </text>
        </>
      ) : null}
      <text x={40} y={300} className="xs mu">
        Leaf count decides area: A gets 35%, B 25% and C 40% of the root rectangle.
      </text>
    </svg>
  );
}

const steps: WalkthroughStep[] = [
  {
    title: "A hierarchy is a tree",
    bullets: [
      "A **tree** is a connected, unweighted, acyclic graph; it is one of the most common relational structures.",
      "The root contains three children A, B and C, and each child contains sub-items.",
      "The display must show both the hierarchy and the relative size of every subtree.",
    ],
    visual: (
      <MiniTable
        head={["Node", "Children", "Leaf count"]}
        rows={[
          ["Root", "A, B, C", "20"],
          ["A", "A1, A2", "7"],
          ["B", "B1, B2", "5"],
          ["C", "C1, C2, C3", "8"],
        ]}
      />
    ),
  },
  {
    title: "Divide the rectangle by subtree size",
    bullets: [
      "A **treemap** is a **space-filling** rectangular layout.",
      "The root rectangle is divided into slices whose areas are proportional to B, C and A's leaf counts.",
      "No edge is drawn; the relation is shown by **juxtaposition** and nesting.",
    ],
    visual: <TreemapFrame level={2} />,
  },
  {
    title: "Divide each cell again",
    bullets: [
      "Inside every cell, divide again, alternating the direction of the slices.",
      "The recursion continues until each leaf has its own rectangle.",
      "The result uses all the display space and shows proportion directly.",
    ],
    visual: <TreemapFrame level={3} />,
  },
  {
    title: "Compare the other tree views",
    bullets: [
      "A **sunburst** is the radial space-filling version: the root is at the centre and nested rings show the layers.",
      "A **node-link diagram** is the non-space-filling version: edges show parent–child relations but space is wasted and crossings appear.",
      "Space-filling views show size and proportion; node-link views show ancestry and structure.",
    ],
    visual: <TreemapFrame level={3} />,
  },
  {
    title: "The exam line",
    bullets: [
      "Space-filling methods use the full display and show relations by juxtaposition; examples are **treemap** and **sunburst**.",
      "Non-space-filling methods draw **node-link** diagrams; their difficulty depends on **fan-out** and **depth**.",
      "Draw a rectangle, divide it by subtree size, then divide one cell again.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable
          head={["Method", "Space use", "Relation shown by"]}
          rows={[
            ["Treemap", "full", "nesting / area"],
            ["Sunburst", "full", "nested rings"],
            ["Node-link", "partial", "explicit edges"],
          ]}
        />
        <div>
          <Kpis items={["N² = 16 cells", "Space-filling", "Sunburst = radial", "Fan-out + depth"]} />
          <SlideNote>
            The treemap is the standard example of a space-filling hierarchy and a frequent 2- or 5-mark question.
          </SlideNote>
        </div>
      </div>
    ),
  },
];

export default function TreemapWalkthrough() {
  return (
    <StepByStepVisualizer
      title="Treemap & Space-Filling Trees"
      subtitle="Divide a rectangle by subtree size, recurse into every cell, and compare the treemap with sunburst and node-link views."
      steps={steps}
    />
  );
}
