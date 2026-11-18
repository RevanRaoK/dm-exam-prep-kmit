import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";
import type { MiniCell } from "./shared";

function DataTable({ rows, head }: { head: string[]; rows: MiniCell[][] }) {
  return <MiniTable head={head} rows={rows} />;
}

const steps: WalkthroughStep[] = [
  {
    title: "Start with a raw table that has problems",
    bullets: [
      "The working table has three columns: **Age**, **Income** and **City**.",
      "Age is numeric but has a **missing value**; Income has a wildly different range; City is **nominal**.",
      "A visualization cannot map these values directly without decisions that change the picture.",
    ],
    visual: (
      <div className="slide-tables">
        <DataTable
          head={["Record", "Age", "Income", "City"]}
          rows={[
            ["R1", "22", "18,000", "Hyderabad"],
            ["R2", "—", "24,000", "Hyderabad"],
            ["R3", "35", "90,000", "Mumbai"],
            ["R4", "28", "32,000", "Delhi"],
            ["R5", "41", "1,20,000", "Mumbai"],
          ]}
        />
        <div>
          <Kpis items={["Missing value", "Range mismatch", "Nominal field", "5 records"]} />
          <SlideNote>
            Notice that the Income range is almost ten times the Age range. On one axis, Age would disappear.
          </SlideNote>
        </div>
      </div>
    ),
  },
  {
    title: "Handle missing values and errors",
    bullets: [
      "Detect the missing-value symbol from **metadata**; here the dash in R2 is missing.",
      "Options are **delete** the record, **impute** a value (mean, median, model) or keep a **missing marker**.",
      "Here we impute the mean of the observed ages: (22 + 35 + 28 + 41) / 4 = **31.5**, rounded to 32.",
      "The choice must be disclosed, because deletion and imputation change later statistics.",
    ],
    visual: (
      <DataTable
        head={["Record", "Age", "Income", "City"]}
        rows={[
          ["R1", "22", "18,000", "Hyderabad"],
          ["R2", { text: "32 (imputed)", tone: "hot" }, "24,000", "Hyderabad"],
          ["R3", "35", "90,000", "Mumbai"],
          ["R4", "28", "32,000", "Delhi"],
          ["R5", "41", "1,20,000", "Mumbai"],
        ]}
      />
    ),
  },
  {
    title: "Normalize so the variables can share a scale",
    bullets: [
      "**Normalization** maps each variable into a common range, here 0 to 1.",
      "The linear formula is **(value − min) / (max − min)**.",
      "For Age: (22 − 22) / (41 − 22) = **0.00**; for 35 it is 13 / 19 = **0.68**.",
      "For Income: (18,000 − 18,000) / (1,20,000 − 18,000) = **0.00**; for 90,000 it is 72,000 / 1,02,000 = **0.71**.",
      "Without this step, the visual comparison would be dominated by income simply because its numbers are larger.",
    ],
    visual: (
      <DataTable
        head={["Record", "Age (0–1)", "Income (0–1)", "City"]}
        rows={[
          ["R1", "0.00", "0.00", "Hyderabad"],
          ["R2", "0.53", "0.06", "Hyderabad"],
          ["R3", "0.68", "0.71", "Mumbai"],
          ["R4", "0.32", "0.14", "Delhi"],
          ["R5", "1.00", "1.00", "Mumbai"],
        ]}
      />
    ),
  },
  {
    title: "Map nominal data to non-ordered cues",
    bullets: [
      "City is **nominal**: there is no natural order between Hyderabad, Mumbai and Delhi.",
      "Map each city to a **hue** or **shape**, never to a size or a colour ramp, because those imply order.",
      "If you must convert to numbers, preserve the original similarities and do not invent a ranking.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable
          head={["City", "Shape", "Hue"]}
          rows={[
            ["Hyderabad", "circle", { text: "teal", tone: "accent" }],
            ["Mumbai", "square", { text: "violet", tone: "accent" }],
            ["Delhi", "triangle", { text: "pink", tone: "accent" }],
          ]}
        />
        <div>
          <Kpis items={["Nominal → hue", "Nominal → shape", "No fake order", "Redundant cue"]} />
          <SlideNote>
            Adding both colour and shape is a redundant mapping; it helps colour-blind viewers.
          </SlideNote>
        </div>
      </div>
    ),
  },
  {
    title: "Aggregate if there is still too much data",
    bullets: [
      "Aggregation groups similar records and replaces each group with a summary such as a mean, a count or extents.",
      "For these five records, grouping by city gives **Hyderabad: 2, Mumbai: 2, Delhi: 1**.",
      "The display now shows counts instead of individual records, which is simpler but loses detail.",
      "The exam point: every preprocessing step trades information for usability, so state what was changed.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable
          head={["City", "Records", "Mean age"]}
          rows={[
            ["Hyderabad", "2", "27"],
            ["Mumbai", "2", "38"],
            ["Delhi", "1", "28"],
          ]}
        />
        <div>
          <Kpis items={["Aggregate", "Summarise", "Count", "Disclose"]} />
          <SlideNote>
            Interpolation, sampling, dimension reduction, smoothing and raster-to-vector conversion are the other preprocessing tools.
          </SlideNote>
        </div>
      </div>
    ),
  },
];

export default function PreprocessWalkthrough() {
  return (
    <StepByStepVisualizer
      title="Data Preprocessing on a Small Table"
      subtitle="Missing values, normalization, nominal mapping and aggregation on five records, with the trade-off at each step."
      steps={steps}
    />
  );
}
