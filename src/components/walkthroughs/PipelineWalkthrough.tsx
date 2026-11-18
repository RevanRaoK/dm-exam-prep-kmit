import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";

const stages = [
  { title: "Raw data", sub: "files, sensors, simulation" },
  { title: "Data modelling", sub: "types, ranges, semantics" },
  { title: "Data selection", sub: "subset, time slices, features" },
  { title: "Visual mapping", sub: "position, size, colour" },
  { title: "Scene & render", sub: "colour map, lighting, image" },
];

function PipelineStrip({ active }: { active?: number }) {
  return (
    <svg className="svgviz" viewBox="0 0 920 250" role="img" aria-label="Visualization pipeline with the active stage highlighted">
      <defs>
        <marker id="pw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--muted)" />
        </marker>
      </defs>
      {stages.map((stage, index) => {
        const x = 16 + index * 178;
        const on = active === index;
        return (
          <g key={stage.title}>
            <rect
              x={x}
              y={64}
              width={158}
              height={92}
              rx={12}
              fill={on ? "var(--c)" : "var(--surface)"}
              stroke={on ? "var(--c)" : "var(--line-strong)"}
              strokeWidth={on ? 2.4 : 1.5}
            />
            <circle cx={x + 18} cy={82} r={8} fill={on ? "rgba(255,255,255,.22)" : "var(--surface-2)"} />
            <text x={x + 18} y={86} textAnchor="middle" className="mono xs b" style={{ fill: on ? "#fff" : "var(--muted)" }}>
              {index + 1}
            </text>
            <text x={x + 12} y={112} className="b" style={{ fontSize: 12.5, fill: on ? "#fff" : "var(--fg)" }}>
              {stage.title}
            </text>
            <text x={x + 12} y={132} className="xs" style={{ fill: on ? "rgba(255,255,255,.8)" : "var(--muted)" }}>
              {stage.sub}
            </text>
            {index < stages.length - 1 ? (
              <line x1={x + 160} y1={110} x2={x + 174} y2={110} stroke="var(--muted)" strokeWidth={1.4} markerEnd="url(#pw-arrow)" />
            ) : null}
          </g>
        );
      })}
      <rect x={16} y={184} width={888} height={42} rx={9} fill="var(--c-bg)" stroke="var(--c-mid)" />
      <text x={30} y={210} className="mono xs b ink">
        USER INTERACTION AT EVERY STAGE · EACH LINK IS MANY-TO-MANY
      </text>
    </svg>
  );
}

const steps: WalkthroughStep[] = [
  {
    title: "The pipeline starts with a question about data",
    bullets: [
      "Visualization always starts with **data** and ends with a **user**; the path is a pipeline of stages.",
      "Different pipelines exist for graphics, visualization and knowledge discovery, and they overlap heavily.",
      "The first decision is what the data **is**: the name, type, range and semantics of every field must be known.",
    ],
    visual: <PipelineStrip active={0} />,
  },
  {
    title: "Data modelling and selection",
    bullets: [
      "**Data modelling** structures the data so it can be accessed and modified quickly.",
      "**Data selection** chooses the subset that will be visualized, by user control or by an algorithm.",
      "Selection can cycle through time slices or automatically detect features of interest, just as clipping selects what is visible in graphics.",
    ],
    visual: <PipelineStrip active={2} />,
  },
  {
    title: "The mapping is the heart of the pipeline",
    bullets: [
      "**Data-to-visual mapping** turns data values into graphical entities and attributes.",
      "One field may control size, another position and another colour.",
      "Mapping may need **scaling, shifting, filtering, interpolation or subsampling** before drawing.",
      "The mapping decides **expressiveness** (all and only the data) and **effectiveness** (how easily the viewer reads the intended relation).",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable
          head={["Data field", "Visual feature", "Why"]}
          rows={[
            ["Maths mark", "x position", "most accurate variable"],
            ["Physics mark", "y position", "relative position is read well"],
            ["Subject group", "colour hue", "nominal, no fake order"],
            ["Class size", "mark size", "ordered magnitude"],
          ]}
        />
        <div>
          <Kpis items={["Expressiveness", "Effectiveness", "Numerical only", "Normalize 0–1"]} />
          <SlideNote>
            A bad mapping produces a nonsense graphic even when the data itself is correct.
          </SlideNote>
        </div>
      </div>
    ),
  },
  {
    title: "Scene parameters and rendering",
    bullets: [
      "The user or designer sets the **colour map**, optional **sound map** and **lighting** for 3D scenes.",
      "**Rendering** projects and shades the objects and adds axes, keys, labels and annotations.",
      "Interactive visualization can run at every step of the knowledge-discovery pipeline, which is called **computational steering**.",
    ],
    visual: <PipelineStrip active={4} />,
  },
  {
    title: "The one-line answer",
    bullets: [
      "Write: **data → modelling → selection → mapping → scene → render**, with interaction at every stage.",
      "Mention that each link is **many-to-many**, because one data set can produce several views and one view can combine several data sets.",
      "Add one example, such as a scatterplot mapping two marks to position and size to class size.",
    ],
    visual: <PipelineStrip />,
  },
];

export default function PipelineWalkthrough() {
  return (
    <StepByStepVisualizer
      title="The Visualization Pipeline"
      subtitle="From raw data to a rendered image: modelling, selection, mapping, scene parameters and rendering, with interaction at every stage."
      steps={steps}
    />
  );
}
