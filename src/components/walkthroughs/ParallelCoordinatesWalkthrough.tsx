import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";

const axes = ["Maths", "Physics", "Chemistry", "Biology"];
const records = [
  { name: "R1", values: [82, 74, 68, 60], color: "var(--v-teal)" },
  { name: "R2", values: [78, 70, 66, 64], color: "var(--v-teal)" },
  { name: "R3", values: [40, 88, 72, 55], color: "var(--v-pink)" },
  { name: "R4", values: [45, 84, 70, 58], color: "var(--v-pink)" },
  { name: "R5", values: [60, 62, 90, 78], color: "var(--v-amber)" },
];

function ParallelAxes({ order = axes, showRecords = 0 }: { order?: string[]; showRecords?: number }) {
  const xAt = (index: number) => 80 + index * 190;
  const yAt = (value: number) => 246 - (value / 100) * 170;
  const indexOf = (axis: string) => order.indexOf(axis);
  return (
    <svg className="svgviz" viewBox="0 0 780 300" role="img" aria-label="Parallel coordinates with four axes and records as polylines">
      {order.map((axis, index) => (
        <g key={axis}>
          <line x1={xAt(index)} y1={60} x2={xAt(index)} y2={250} stroke="var(--line-strong)" strokeWidth={1.5} />
          <text x={xAt(index)} y={48} textAnchor="middle" className="b" style={{ fontSize: 12 }}>
            {axis}
          </text>
          {[0, 25, 50, 75, 100].map((tick) => (
            <g key={tick}>
              <line x1={xAt(index) - 3} y1={yAt(tick)} x2={xAt(index)} y2={yAt(tick)} stroke="var(--line-strong)" />
              <text x={xAt(index) - 7} y={yAt(tick) + 3} textAnchor="end" className="mono xs mu">
                {tick}
              </text>
            </g>
          ))}
        </g>
      ))}
      {records.slice(0, showRecords).map((record) => {
        const points = order.map((axis) => {
          const original = axes.indexOf(axis);
          return `${xAt(indexOf(axis))},${yAt(record.values[original])}`;
        });
        return (
          <g key={record.name}>
            <polyline points={points.join(" ")} fill="none" stroke={record.color} strokeWidth={1.8} strokeOpacity={0.8} />
            {order.map((axis, index) => (
              <circle key={axis} cx={xAt(index)} cy={yAt(record.values[axes.indexOf(axis)])} r={2.8} fill={record.color} />
            ))}
          </g>
        );
      })}
      <text x={80} y={282} className="xs mu">
        Each polyline is one record. A bundle is a group; a line that leaves the bundle is an outlier.
      </text>
    </svg>
  );
}

const steps: WalkthroughStep[] = [
  {
    title: "The idea: rotate the data",
    bullets: [
      "A normal line graph links the values of one **dimension** over an ordering.",
      "**Parallel coordinates** link the values of one **record** across dimensions.",
      "Instead of orthogonal axes, every dimension gets its own parallel vertical axis.",
    ],
    visual: <ParallelAxes showRecords={0} />,
  },
  {
    title: "Draw one record",
    bullets: [
      "Place each axis at an evenly spaced x position and scale every value to the same height range.",
      "For the record, mark its value on each axis and join the marks with a **polyline**.",
      "The polyline crosses all four axes at heights proportional to the record's marks.",
    ],
    visual: <ParallelAxes showRecords={1} />,
  },
  {
    title: "Add the other records",
    bullets: [
      "Bundles of roughly parallel lines are groups of **similar records**.",
      "In this example the teal records are strong in Maths and Physics, while the amber record is strong in Chemistry and Biology.",
      "A line that runs away from every bundle is an **outlier**.",
    ],
    visual: <ParallelAxes showRecords={5} />,
  },
  {
    title: "Reorder the axes to see different patterns",
    bullets: [
      "The axis order changes which relationships are visible.",
      "Putting related dimensions next to each other makes correlations appear as parallel or crossing bundles.",
      "In a real tool the user drags the axes; the rest of the display updates immediately.",
    ],
    visual: <ParallelAxes order={["Maths", "Chemistry", "Physics", "Biology"]} showRecords={5} />,
  },
  {
    title: "The exam line",
    bullets: [
      "Parallel coordinates were introduced by **Inselberg in 1985**; they are also called **||-coords** or **PCP**.",
      "Each record is a **polyline** crossing every axis at a height proportional to its value.",
      "Draw at least three parallel axes and two or three polylines, and label one bundle and one outlier.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable
          head={["Record", "Maths", "Physics", "Chemistry", "Biology"]}
          rows={records.map((record) => [record.name, ...record.values.map(String)])}
        />
        <div>
          <Kpis items={["Inselberg 1985", "One line per record", "Axis order matters", "Brush to select"]} />
          <SlideNote>
            Parallel coordinates are a standard 5-mark diagram question, and they are also part of the line-based comparison.
          </SlideNote>
        </div>
      </div>
    ),
  },
];

export default function ParallelCoordinatesWalkthrough() {
  return (
    <StepByStepVisualizer
      title="Parallel Coordinates"
      subtitle="One axis per dimension, one polyline per record. Build the picture, read the bundles, then reorder the axes."
      steps={steps}
    />
  );
}
