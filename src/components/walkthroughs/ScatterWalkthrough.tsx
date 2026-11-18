import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";

const data = [
  { study: 1, marks: 35, group: "Arts", size: 18 },
  { study: 2, marks: 42, group: "Arts", size: 28 },
  { study: 2.5, marks: 48, group: "Science", size: 24 },
  { study: 3, marks: 44, group: "Arts", size: 32 },
  { study: 4, marks: 58, group: "Science", size: 22 },
  { study: 4.5, marks: 63, group: "Science", size: 30 },
  { study: 5.5, marks: 61, group: "Arts", size: 20 },
  { study: 6, marks: 72, group: "Science", size: 26 },
  { study: 7, marks: 68, group: "Arts", size: 34 },
  { study: 8, marks: 82, group: "Science", size: 24 },
];

function ScatterPlot({
  showAxes = true,
  showColor = false,
  showSize = false,
  showLabels = false,
}: {
  showAxes?: boolean;
  showColor?: boolean;
  showSize?: boolean;
  showLabels?: boolean;
}) {
  const width = 760;
  const height = 300;
  const left = 48;
  const bottom = 248;
  const plotW = 670;
  const plotH = 190;
  const x = (value: number) => left + (value / 9) * plotW;
  const y = (value: number) => bottom - ((value - 20) / 80) * plotH;
  return (
    <svg className="svgviz" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Scatterplot of study hours against marks">
      {showAxes ? (
        <>
          <line x1={left} y1={bottom} x2={left + plotW} y2={bottom} stroke="var(--line-strong)" strokeWidth={1.4} />
          <line x1={left} y1={bottom} x2={left} y2={bottom - plotH - 8} stroke="var(--line-strong)" strokeWidth={1.4} />
          <text x={left + plotW / 2} y={bottom + 34} textAnchor="middle" className="xs mu">
            Study hours (independent variable)
          </text>
          <text x={14} y={bottom - plotH / 2} transform={`rotate(-90 14 ${bottom - plotH / 2})`} textAnchor="middle" className="xs mu">
            Marks (dependent variable)
          </text>
          {[0, 2, 4, 6, 8].map((tick) => (
            <g key={tick}>
              <line x1={x(tick)} y1={bottom} x2={x(tick)} y2={bottom + 4} stroke="var(--line-strong)" />
              <text x={x(tick)} y={bottom + 16} textAnchor="middle" className="mono xs mu">
                {tick}
              </text>
            </g>
          ))}
          {[20, 40, 60, 80, 100].map((tick) => (
            <g key={tick}>
              <line x1={left - 4} y1={y(tick)} x2={left} y2={y(tick)} stroke="var(--line-strong)" />
              <text x={left - 8} y={y(tick) + 3} textAnchor="end" className="mono xs mu">
                {tick}
              </text>
            </g>
          ))}
        </>
      ) : (
        <rect x={left} y={bottom - plotH - 8} width={plotW} height={plotH + 8} rx={8} fill="var(--surface)" stroke="var(--line)" />
      )}

      {data.map((point, index) => (
        <g key={index}>
          <circle
            cx={x(point.study)}
            cy={y(point.marks)}
            r={showSize ? 3 + point.size / 14 : 5}
            fill={showColor ? (point.group === "Science" ? "var(--v-violet)" : "var(--v-teal)") : "var(--v-blue)"}
            fillOpacity={0.78}
            stroke="#fff"
            strokeWidth={1}
          />
          {showLabels ? (
            <text x={x(point.study) + 8} y={y(point.marks) - 6} className="xs mu">
              {point.group}
            </text>
          ) : null}
        </g>
      ))}

      {showColor ? (
        <g>
          <circle cx={left + 8} cy={bottom - plotH - 30} r={5} fill="var(--v-teal)" />
          <text x={left + 18} y={bottom - plotH - 26} className="xs mu">
            Arts
          </text>
          <circle cx={left + 78} cy={bottom - plotH - 30} r={5} fill="var(--v-violet)" />
          <text x={left + 88} y={bottom - plotH - 26} className="xs mu">
            Science
          </text>
        </g>
      ) : null}
    </svg>
  );
}

const steps: WalkthroughStep[] = [
  {
    title: "Start with two numbers per record",
    bullets: [
      "Each record is one student with two numeric variables: **study hours** and **marks**.",
      "The horizontal variable is the **independent variable**; the vertical variable is the **dependent variable**.",
      "A scatterplot is the natural first view because people judge **relative position** very well.",
    ],
    visual: (
      <MiniTable
        head={["Student", "Study hours", "Marks", "Group"]}
        rows={data.slice(0, 6).map((point, index) => [
          `S${index + 1}`,
          String(point.study),
          String(point.marks),
          point.group,
        ])}
        caption="Two numeric columns give positions; the group is a nominal third column."
      />
    ),
  },
  {
    title: "Map the two variables to x and y",
    bullets: [
      "Normalize each variable to the plotting range, then draw one mark per record.",
      "The pseudo-code is: x ← Normalize(i, xDim); y ← Normalize(i, yDim); Circle(x, y, r).",
      "The upward pattern suggests a **positive relationship**: more study is associated with higher marks.",
    ],
    visual: <ScatterPlot />,
  },
  {
    title: "Add a third dimension with colour",
    bullets: [
      "Mapping group to **hue** adds a nominal dimension without implying order.",
      "This is **dimension embedding**: extra dimensions use attributes other than position.",
      "The two groups overlap, so colour alone does not separate them; the trend remains the main pattern.",
    ],
    visual: <ScatterPlot showColor showLabels />,
  },
  {
    title: "Add a fourth dimension with size",
    bullets: [
      "Mapping class size to **mark size** embeds another ordered dimension.",
      "Only a few extra dimensions fit before marks overlap and the picture becomes hard to read.",
      "Size is less accurate than position, so it should support, not replace, the main comparison.",
    ],
    visual: <ScatterPlot showColor showSize />,
  },
  {
    title: "Read the limits",
    bullets: [
      "The pattern is an **association, not causation**; a third variable may explain both.",
      "Moving an axis or changing the scale can exaggerate or hide the trend.",
      "With many students, marks **overlap**; transparency, jitter, smaller marks or aggregation reduces overplotting.",
    ],
    visual: (
      <div className="slide-tables">
        <ScatterPlot showColor showSize />
        <div>
          <Kpis items={["Position = strongest", "Colour = nominal", "Size = ordered", "Overplotting"]} />
          <SlideNote>
            The exam answer: axes and marks, then colour/size embedding, then three uses (trend, cluster, outlier) and two limits.
          </SlideNote>
        </div>
      </div>
    ),
  },
];

export default function ScatterWalkthrough() {
  return (
    <StepByStepVisualizer
      title="Scatterplot Mapping"
      subtitle="Two axes, one mark per record, then colour and size as extra dimensions. Read the trend, the group and the limits."
      steps={steps}
    />
  );
}
