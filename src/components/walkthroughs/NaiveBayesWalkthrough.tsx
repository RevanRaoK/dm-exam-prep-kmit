import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";

function PosteriorBars() {
  const values = [
    ["Orange", 0],
    ["Banana", 0.021875],
    ["Others", 0.074074],
  ] as const;
  return (
    <svg
      className="svgviz"
      viewBox="0 0 560 210"
      role="img"
      aria-label="Posterior numerator comparison for the fruit query"
    >
      <text x={10} y={20} className="mono xs mu">
        POSTERIOR NUMERATOR · P(X | C) × P(C)
      </text>
      <line x1={110} y1={38} x2={110} y2={170} stroke="var(--line-strong)" strokeWidth={1.2} />
      {values.map(([name, value], index) => {
        const y = 42 + index * 40;
        const width = (value / 0.08) * 340;
        const best = name === "Others";
        return (
          <g key={name}>
            <text x={102} y={y + 17} textAnchor="end" className={`sm ${best ? "b ink" : ""}`}>
              {name}
            </text>
            <rect
              x={116}
              y={y}
              width={Math.max(3, width)}
              height={24}
              rx={5}
              fill={best ? "var(--c)" : "var(--hot-bg)"}
              stroke={best ? "var(--c)" : "var(--hot)"}
            />
            <text x={122 + Math.max(3, width)} y={y + 17} className="mono sm b" style={{ fill: best ? "var(--c-ink)" : "var(--hot)" }}>
              {value.toFixed(4)}
            </text>
          </g>
        );
      })}
      <text x={116} y={196} className="xs mu">
        Largest value wins because P(X) is identical for every class.
      </text>
    </svg>
  );
}

const steps: WalkthroughStep[] = [
  {
    title: "The query and the training table",
    bullets: [
      "The query tuple is **X = (Yellow, Sweet, Long)**, and the classifier must choose among **Orange, Banana and Others**.",
      "The table gives the count of each feature value inside each class, so every probability comes directly from those counts.",
    ],
    visual: (
      <div>
        <MiniTable
          head={["Fruit", "Yellow", "Sweet", "Long", "Total"]}
          rows={[
            ["Orange", "350", "450", "0", "650"],
            ["Banana", "400", "300", "35", "400"],
            ["Others", "50", "100", "400", "150"],
            ["Total", "800", "850", "435", "1200"],
          ]}
        />
        <Kpis items={["Query: **Yellow ∧ Sweet ∧ Long**", "Classes = **3**", "Total tuples = **1200**"]} />
      </div>
    ),
  },
  {
    title: "Step 1: compute the class priors",
    bullets: [
      "The prior of a class is the number of tuples in that class divided by the total number of tuples.",
      "**P(Orange) = 650/1200 = 0.542**, **P(Banana) = 400/1200 = 0.333** and **P(Others) = 150/1200 = 0.125**.",
      "These priors are multiplied by the likelihoods in the final posterior step.",
    ],
    visual: (
      <MiniTable
        head={["Class", "Count", "Prior P(C)"]}
        rows={[
          ["Orange", "650", { text: "0.542", tone: "accent" }],
          ["Banana", "400", { text: "0.333", tone: "accent" }],
          ["Others", "150", { text: "0.125", tone: "accent" }],
        ]}
        caption="The priors sum to 1, so the class frequencies are consistent."
      />
    ),
  },
  {
    title: "Step 2: compute the likelihoods for the query",
    bullets: [
      "The likelihood **P(xₖ | Cᵢ)** is the number of class tuples with value xₖ divided by the class total.",
      "For Orange, the Long likelihood is **0/650 = 0**, which will make the whole product zero.",
      "For Banana, the likelihoods are **1.000, 0.750 and 0.0875**, and for Others they are **0.333, 0.667 and 2.667** using the printed counts.",
    ],
    visual: (
      <MiniTable
        head={["Class", "P(Yellow | C)", "P(Sweet | C)", "P(Long | C)"]}
        rows={[
          ["Orange", "350/650 = 0.538", "450/650 = 0.692", { text: "0/650 = 0", tone: "bad" }],
          ["Banana", "400/400 = 1.000", "300/400 = 0.750", "35/400 = 0.0875"],
          ["Others", "50/150 = 0.333", "100/150 = 0.667", "400/150 = 2.667"],
        ]}
      />
    ),
  },
  {
    title: "Step 3: multiply the likelihoods and the prior",
    bullets: [
      "The **naïve Bayes assumption** lets us multiply the three likelihoods because the attributes are assumed conditionally independent given the class.",
      "**Orange: 0.542 × 0.538 × 0.692 × 0 = 0**, **Banana: 0.333 × 1.000 × 0.750 × 0.0875 = 0.0219** and **Others: 0.125 × 0.333 × 0.667 × 2.667 = 0.0741**.",
      "The denominator **P(X)** is omitted because it is the same for every class.",
    ],
    visual: (
      <div>
        <MiniTable
          head={["Class", "Calculation", "Numerator"]}
          rows={[
            ["Orange", "0.542 × 0.538 × 0.692 × 0", { text: "0.0000", tone: "bad" }],
            ["Banana", "0.333 × 1.000 × 0.750 × 0.0875", { text: "0.0219", tone: "hot" }],
            ["Others", "0.125 × 0.333 × 0.667 × 2.667", { text: "0.0741", tone: "good" }],
          ]}
        />
        <div className="formula" style={{ marginTop: 10 }}>
          <span className="fhead">Full posterior formula</span>
          P(Cᵢ | X) = P(Cᵢ) × P(Yellow | Cᵢ) × P(Sweet | Cᵢ) × P(Long | Cᵢ) / P(X)
        </div>
      </div>
    ),
  },
  {
    title: "Step 4: compare and assign the class",
    bullets: [
      "**Others has the largest numerator (0.0741)**, so the fruit is classified as **Others**.",
      "Orange is zero because the table contains **0 long oranges**, and **Laplacian correction** would add a small count to avoid a zero probability.",
      "For comparison, the next best class is Banana with **0.0219**, which is much smaller than 0.0741.",
    ],
    visual: (
      <div>
        <PosteriorBars />
        <Kpis items={["Winner: **Others**", "Banana: **0.0219**", "Orange: **0**"]} />
        <SlideNote>
          The Long count for Others makes the printed table internally inconsistent, but the
          exam solution follows the given counts and still selects Others.
        </SlideNote>
      </div>
    ),
  },
];

export default function NaiveBayesWalkthrough() {
  return (
    <StepByStepVisualizer
      title="Naïve Bayes · Fruit data · query (Yellow, Sweet, Long)"
      subtitle="Priors → likelihoods → posterior numerators → class assignment, with the zero-count and Laplacian caveats."
      steps={steps}
    />
  );
}
