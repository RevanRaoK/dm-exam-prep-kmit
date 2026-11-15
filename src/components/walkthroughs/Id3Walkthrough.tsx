import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";

const weather = [
  ["1", "Sunny", "Hot", "High", "Weak", "No"],
  ["2", "Sunny", "Hot", "High", "Strong", "No"],
  ["3", "Overcast", "Hot", "High", "Weak", "Yes"],
  ["4", "Rain", "Mild", "High", "Weak", "Yes"],
  ["5", "Rain", "Cool", "Normal", "Weak", "Yes"],
  ["6", "Rain", "Cool", "Normal", "Strong", "No"],
  ["7", "Overcast", "Cool", "Normal", "Strong", "Yes"],
  ["8", "Sunny", "Mild", "High", "Weak", "No"],
  ["9", "Sunny", "Cool", "Normal", "Weak", "Yes"],
  ["10", "Rain", "Mild", "Normal", "Weak", "Yes"],
  ["11", "Sunny", "Mild", "Normal", "Strong", "Yes"],
  ["12", "Overcast", "Mild", "High", "Strong", "Yes"],
  ["13", "Overcast", "Hot", "Normal", "Weak", "Yes"],
  ["14", "Rain", "Mild", "High", "Strong", "No"],
];

function GainBars() {
  const gains = [
    ["Outlook", 0.246],
    ["Humidity", 0.152],
    ["Wind", 0.048],
    ["Temperature", 0.029],
  ] as const;
  return (
    <svg
      className="svgviz"
      viewBox="0 0 560 190"
      role="img"
      aria-label="Information gain of each weather attribute"
    >
      <text x={10} y={20} className="mono xs mu">
        INFORMATION GAIN
      </text>
      <line x1={128} y1={34} x2={128} y2={162} stroke="var(--line-strong)" strokeWidth={1.2} />
      {gains.map(([name, value], index) => {
        const y = 38 + index * 31;
        const width = (value / 0.26) * 330;
        const best = name === "Outlook";
        return (
          <g key={name}>
            <text x={120} y={y + 15} textAnchor="end" className={`sm ${best ? "b ink" : ""}`}>
              {name}
            </text>
            <rect
              x={134}
              y={y}
              width={Math.max(3, width)}
              height={21}
              rx={5}
              fill={best ? "var(--c)" : "var(--c-bg)"}
              stroke={best ? "var(--c)" : "var(--c-mid)"}
            />
            <text x={140 + Math.max(3, width)} y={y + 15} className="mono sm b" style={{ fill: best ? "var(--c-ink)" : "var(--muted)" }}>
              {value.toFixed(3)}
            </text>
          </g>
        );
      })}
      <text x={134} y={180} className="xs mu">
        Larger gain = better split. Outlook wins at the root.
      </text>
    </svg>
  );
}

function TreeSvg({ stage }: { stage: 0 | 1 | 2 }) {
  const leaf = (x: number, y: number, label: string, active = false) => (
    <g>
      <rect
        x={x - 38}
        y={y - 15}
        width={76}
        height={30}
        rx={15}
        fill={active ? "var(--c)" : "var(--surface)"}
        stroke={active ? "var(--c)" : "var(--line-strong)"}
        strokeWidth={active ? 2 : 1.2}
      />
      <text x={x} y={y + 4} textAnchor="middle" className="sm b" style={{ fill: active ? "#fff" : "var(--fg)" }}>
        {label}
      </text>
    </g>
  );

  const test = (x: number, y: number, label: string, active = false) => (
    <g>
      <rect
        x={x - 66}
        y={y - 16}
        width={132}
        height={32}
        rx={7}
        fill={active ? "var(--c-bg)" : "var(--surface)"}
        stroke={active ? "var(--c)" : "var(--line-strong)"}
        strokeWidth={active ? 2 : 1.2}
      />
      <text x={x} y={y + 5} textAnchor="middle" className="sm b" style={{ fill: active ? "var(--c-ink)" : "var(--fg)" }}>
        {label}
      </text>
    </g>
  );

  const placeholder = (x: number, y: number, label: string, sub: string) => (
    <g>
      <rect
        x={x - 64}
        y={y - 20}
        width={128}
        height={40}
        rx={8}
        fill="var(--surface-2)"
        stroke="var(--line)"
        strokeDasharray="4 3"
      />
      <text x={x} y={y - 3} textAnchor="middle" className="sm b">
        {label}
      </text>
      <text x={x} y={y + 12} textAnchor="middle" className="xs mu">
        {sub}
      </text>
    </g>
  );

  const edge = (x1: number, y1: number, x2: number, y2: number, label: string) => (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--line-strong)" strokeWidth={1.3} />
      <text
        x={(x1 + x2) / 2 + (x2 < x1 ? -6 : x2 > x1 ? 6 : 0)}
        y={(y1 + y2) / 2 - 4}
        textAnchor={x2 < x1 ? "end" : x2 > x1 ? "start" : "middle"}
        className="xs b"
        style={{ fill: "var(--c-ink)" }}
      >
        {label}
      </text>
    </g>
  );

  return (
    <svg
      className="svgviz"
      viewBox="0 0 680 340"
      role="img"
      aria-label="Decision tree for play tennis after each split"
    >
      <text x={10} y={20} className="mono xs mu">
        DECISION TREE · STAGE {stage + 1}
      </text>
      {test(340, 48, "Outlook?", stage === 0)}
      {edge(340, 64, 140, 112, "Sunny")}
      {edge(340, 64, 340, 112, "Overcast")}
      {edge(340, 64, 540, 112, "Rain")}

      {stage === 0 ? placeholder(140, 132, "Sunny", "2 Yes · 3 No") : null}
      {stage >= 1 ? test(140, 132, "Humidity?", true) : null}
      {leaf(340, 132, "Yes", stage === 0)}
      {stage === 2 ? test(540, 132, "Wind?", true) : placeholder(540, 132, "Rain", "3 Yes · 2 No")}

      {stage >= 1 ? (
        <>
          {edge(140, 148, 70, 204, "High")}
          {edge(140, 148, 210, 204, "Normal")}
          {leaf(70, 222, "No", true)}
          {leaf(210, 222, "Yes", true)}
        </>
      ) : null}

      {stage === 2 ? (
        <>
          {edge(540, 148, 465, 204, "Weak")}
          {edge(540, 148, 615, 204, "Strong")}
          {leaf(465, 222, "Yes", true)}
          {leaf(615, 222, "No", true)}
        </>
      ) : null}

      <text x={10} y={322} className="xs mu">
        Outlook is the root because it has the highest information gain.
      </text>
    </svg>
  );
}

const steps: WalkthroughStep[] = [
  {
    title: "Start with the 14-tuple weather data set",
    bullets: [
      "Each tuple records **Outlook, Temperature, Humidity and Wind**, and the class is **PlayTennis = Yes or No**.",
      "There are **9 Yes tuples and 5 No tuples**, so the data set is mixed and needs a split.",
    ],
    visual: (
      <div>
        <MiniTable
          head={["#", "Outlook", "Temp", "Humidity", "Wind", "Play"]}
          rows={weather.map((row) => [row[0], row[1], row[2], row[3], row[4], row[5]])}
        />
        <Kpis items={["14 tuples", "9 Yes · 5 No", "4 attributes"]} />
      </div>
    ),
  },
  {
    title: "Root entropy: how mixed is the class?",
    bullets: [
      "The class distribution is **9/14 Yes and 5/14 No**, so the entropy is computed from those two probabilities.",
      "**Info(D) = −(9/14)log₂(9/14) − (5/14)log₂(5/14) = 0.940 bits**.",
    ],
    visual: (
      <div>
        <div className="formula" style={{ marginTop: 0 }}>
          <span className="fhead">Root entropy calculation</span>
          Info(D) = −(9/14) log₂(9/14) − (5/14) log₂(5/14)
          {"\n"}Info(D) = 0.410 + 0.530 = 0.940 bits
        </div>
        <MiniTable
          head={["Class", "Count", "Probability", "Contribution"]}
          rows={[
            ["Yes", "9", "9/14 = 0.643", "−0.643 log₂ 0.643 = 0.410"],
            ["No", "5", "5/14 = 0.357", "−0.357 log₂ 0.357 = 0.530"],
          ]}
        />
      </div>
    ),
  },
  {
    title: "Compute information gain for every attribute",
    bullets: [
      "**Gain(Outlook) = 0.246**, **Gain(Humidity) = 0.152**, **Gain(Wind) = 0.048** and **Gain(Temperature) = 0.029**.",
      "**Outlook** removes the most entropy, so it becomes the splitting attribute at the root.",
    ],
    visual: (
      <div>
        <GainBars />
        <MiniTable
          head={["Attribute", "Info after split", "Gain", "Decision"]}
          rows={[
            ["Outlook", "0.694", "0.246", { text: "Root", tone: "good" }],
            ["Humidity", "0.789", "0.152", { text: "Later on Sunny", tone: "accent" }],
            ["Wind", "0.892", "0.048", { text: "Later on Rain", tone: "accent" }],
            ["Temperature", "0.911", "0.029", { text: "Not selected", tone: "mut" }],
          ]}
        />
      </div>
    ),
  },
  {
    title: "Split the root on Outlook",
    bullets: [
      "The root creates three branches: **Sunny, Overcast and Rain**.",
      "The **Overcast** branch contains four tuples that are all Yes, so it becomes a leaf labelled **Yes**.",
      "The **Sunny** branch (2 Yes, 3 No) and the **Rain** branch (3 Yes, 2 No) are still mixed, so each needs another split.",
    ],
    visual: <TreeSvg stage={0} />,
  },
  {
    title: "Sunny branch: choose Humidity",
    bullets: [
      "The Sunny subset has entropy **0.971**, and **Humidity** has the highest gain of **0.971** on this subset.",
      "Sunny + High gives three No tuples, so it becomes a leaf **No**, while Sunny + Normal gives two Yes tuples and becomes a leaf **Yes**.",
      "Temperature gain is 0.571 and Wind gain is 0.171, so Humidity clearly wins.",
    ],
    visual: (
      <div>
        <TreeSvg stage={1} />
        <MiniTable
          head={["Sunny subset", "Info", "Gain"]}
          rows={[
            ["Humidity", "0.000 after split", "0.971"],
            ["Temperature", "0.400 after split", "0.571"],
            ["Wind", "0.800 after split", "0.171"],
          ]}
        />
      </div>
    ),
  },
  {
    title: "Rain branch: choose Wind",
    bullets: [
      "The Rain subset has entropy **0.971**, and **Wind** has the highest gain of **0.971** on this subset.",
      "Rain + Weak gives three Yes tuples, so it becomes **Yes**, while Rain + Strong gives two No tuples and becomes **No**.",
      "The completed tree now classifies every training tuple correctly.",
    ],
    visual: (
      <div>
        <TreeSvg stage={2} />
        <MiniTable
          head={["Rain subset", "Info", "Gain"]}
          rows={[
            ["Wind", "0.000 after split", "0.971"],
            ["Temperature", "0.951 after split", "0.020"],
            ["Humidity", "0.951 after split", "0.020"],
          ]}
        />
      </div>
    ),
  },
  {
    title: "Final tree and its IF-THEN rules",
    bullets: [
      "The final tree is **Outlook → Sunny: Humidity(High = No, Normal = Yes), Overcast = Yes, Rain: Wind(Weak = Yes, Strong = No)**.",
      "Each root-to-leaf path becomes a rule such as **IF Outlook = Sunny AND Humidity = High THEN PlayTennis = No**.",
      "The rules are then **pruned** on a validation set so that branches caused by noise are removed.",
    ],
    visual: (
      <div>
        <TreeSvg stage={2} />
        <MiniTable
          head={["Rule", "Class"]}
          rows={[
            ["Sunny ∧ High", { text: "No", tone: "bad" }],
            ["Sunny ∧ Normal", { text: "Yes", tone: "good" }],
            ["Overcast", { text: "Yes", tone: "good" }],
            ["Rain ∧ Weak", { text: "Yes", tone: "good" }],
            ["Rain ∧ Strong", { text: "No", tone: "bad" }],
          ]}
        />
        <SlideNote>ID3 uses information gain; C4.5 adds gain ratio and pruning.</SlideNote>
      </div>
    ),
  },
];

export default function Id3Walkthrough() {
  return (
    <StepByStepVisualizer
      title="Decision Tree · ID3 · Weather data"
      subtitle="Root entropy → gain of every attribute → root split → Sunny split → Rain split → final tree and rules."
      steps={steps}
    />
  );
}
