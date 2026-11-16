import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";

function StemCard({
  word,
  stem,
  suffix,
  rule,
  condition,
  measure,
}: {
  word: string;
  stem: string;
  suffix: string;
  rule: string;
  condition: string;
  measure?: string;
}) {
  return (
    <div>
      <svg
        className="svgviz"
        viewBox="0 0 700 170"
        role="img"
        aria-label={`Porter rule ${rule} applied to ${word}`}
      >
        <rect x={24} y={24} width={652} height={122} rx={12} fill="var(--surface)" stroke="var(--line)" />
        <text x={42} y={50} className="mono xs mu">
          WORD
        </text>
        <text x={42} y={82} className="mono b" style={{ fontSize: 22 }}>
          {word}
        </text>
        <text x={42} y={108} className="mono xs mu">
          stem + suffix
        </text>
        <text x={42} y={128} className="mono" style={{ fontSize: 12, fill: "var(--c-ink)" }}>
          {stem}
          <tspan style={{ fill: "var(--hot)" }}>{suffix}</tspan>
        </text>

        <line x1={250} y1={70} x2={330} y2={70} stroke="var(--muted)" strokeWidth={1.5} strokeDasharray="5 4" />
        <text x={290} y={60} textAnchor="middle" className="mono xs mu">
          {rule}
        </text>
        <text x={290} y={86} textAnchor="middle" className="mono xs" style={{ fill: "var(--hot)" }}>
          {condition}
        </text>

        <rect x={356} y={42} width={296} height={88} rx={9} fill="var(--c-bg)" stroke="var(--c-mid)" />
        <text x={374} y={66} className="mono xs b ink">
          RESULT
        </text>
        <text x={374} y={96} className="mono b" style={{ fontSize: 20 }}>
          {stem}
        </text>
        <text x={374} y={118} className="mono xs mu">
          {measure ?? "one rule per step"}
        </text>
      </svg>
      <SlideNote>
        The highlighted suffix is removed or replaced only when the stem condition is satisfied.
      </SlideNote>
    </div>
  );
}

const steps: WalkthroughStep[] = [
  {
    title: "Measure m and the four Porter stem conditions",
    bullets: [
      "The **measure m** of a stem is the number of **VC sequences** in the pattern **C(VC)ᵐV**, where V is a vowel and C is a consonant.",
      "The initial C and the final V are optional, so **free** and **why** have **m = 0**, **frees** and **whose** have **m = 1**, and **prologue** and **compute** have **m = 2**.",
      "The four stem conditions are ***<X>** (ends with letter X), ***v*** (contains a vowel), ***d** (ends in a double consonant) and ***o** (ends in consonant-vowel-consonant, not w, x or y).",
      "Porter rules are **condition → action** pairs grouped into ordered **steps**, and only **one rule per step** is applied to avoid over-stemming.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable
          head={["Stem", "Measured m", "Reason"]}
          rows={[
            ["free", "m = 0", "no VC sequence"],
            ["frees", "m = 1", "one VC sequence"],
            ["prologue", "m = 2", "two VC sequences"],
            ["compute", "m = 2", "two VC sequences"],
          ]}
          caption="The measure m is tested before many suffix rules."
        />
        <MiniTable
          head={["Condition", "Meaning", "Example"]}
          rows={[
            ["*<X>", "stem ends with letter X", "suffix rule boundary"],
            ["*v*", "stem contains a vowel", "making → mak"],
            ["*d", "stem ends in double consonant", "controll → control"],
            ["*o", "CVC ending, final C not w/x/y", "hop → hopping rule"],
          ]}
        />
      </div>
    ),
  },
  {
    title: "Step 1a · plurals and the -sses rule",
    bullets: [
      "**Step 1a** handles plural endings: **sses → ss**, **ies → i**, **ss → ss** and **s → NULL**.",
      "The textbook example is **stresses → stress**, because the **sses** ending is replaced by **ss** under the **NULL** condition.",
      "The rule order matters, so **sses** is tested before the single **s** rule to avoid producing **stresse**.",
      "These rules raise **recall** by conflating singular and plural forms, but they can reduce **precision** when a plural has a different meaning.",
    ],
    visual: (
      <StemCard word="stresses" stem="stress" suffix="es" rule="Step 1a" condition="sses → ss" measure="NULL condition, no m test" />
    ),
  },
  {
    title: "Step 1b · remove -ing and -ed after a vowel",
    bullets: [
      "**Step 1b** removes **ing** or **ed** when the remaining stem contains a vowel, written as the condition ***v***.",
      "The textbook example is **making → mak**, because **ing** is deleted and the stem **mak** still contains the vowel **a**.",
      "The sub-rule **1b1** repairs some results by mapping **at → ate** when the condition is **NULL**, as in **inflat(ed) → inflate**.",
      "The rule is not applied when removing the suffix would leave no vowel, because the result would not be a meaningful stem.",
    ],
    visual: (
      <StemCard word="making" stem="mak" suffix="ing" rule="Step 1b" condition="*v* → delete ing" measure="vowel present in mak" />
    ),
  },
  {
    title: "Step 1c · change final y to i",
    bullets: [
      "**Step 1c** changes a final **y** to **i** when the stem contains a vowel, written as ***v* y → i**.",
      "The textbook example is **happy → happi**, which allows later rules to treat the word consistently.",
      "The condition prevents the rule from changing words such as **sky**, where the **y** is not preceded by a vowel stem pattern.",
      "The replacement is a **normalization** step, not a deletion, so the stem keeps the same length.",
    ],
    visual: <StemCard word="happy" stem="happ" suffix="y" rule="Step 1c" condition="*v* y → i" measure="result = happi" />,
  },
  {
    title: "Step 2 · m > 0 suffix replacements",
    bullets: [
      "**Step 2** applies only when the measure is **m > 0**, so the stem must contain at least one **VC sequence**.",
      "The textbook example is **formaliti → formal**, where **aliti** is replaced by **al**.",
      "Other common Step 2 mappings include **ational → ate**, **tional → tion**, **enci → ence**, **izer → ize** and **bli → ble**.",
      "The m > 0 test stops the rule from stripping a suffix from a very short stem where no VC pattern exists.",
    ],
    visual: <StemCard word="formaliti" stem="formal" suffix="iti" rule="Step 2" condition="m > 0 · aliti → al" measure="formal contains m = 2" />,
  },
  {
    title: "Step 3 · m > 0 and -icate",
    bullets: [
      "**Step 3** replaces **icate → ic** when **m > 0**, and the textbook example is **duplicate → duplic**.",
      "The replacement is a shortening rule, so the final **e** disappears with the **ate** ending.",
      "The m > 0 condition protects short stems that have no vowel-consonant sequence to measure.",
      "Only one rule from Step 3 is applied to a word, because the Porter algorithm executes each step once in order.",
    ],
    visual: <StemCard word="duplicate" stem="duplic" suffix="ate" rule="Step 3" condition="m > 0 · icate → ic" measure="duplic is the stem" />,
  },
  {
    title: "Step 4 · m > 1 and -able",
    bullets: [
      "**Step 4** deletes **able** only when **m > 1**, so the stem must contain at least two VC sequences.",
      "The textbook example is **adjustable → adjust**, because **able** is removed from a stem with a sufficiently large measure.",
      "The same step also handles **ible**, **ance**, **ence**, **ment**, **ant** and **ent** under the same m > 1 condition.",
      "The strict m > 1 test prevents over-stemming of short words that merely look as if they end in a suffix.",
    ],
    visual: <StemCard word="adjustable" stem="adjust" suffix="able" rule="Step 4" condition="m > 1 · able → NULL" measure="adjust has m = 2" />,
  },
  {
    title: "Step 5a · m > 1 and final e",
    bullets: [
      "**Step 5a** deletes a final **e** when **m > 1**, and the textbook example is **inflate → inflat**.",
      "The rule removes the **e** only after the stricter measure test, so it does not shorten every word that ends in **e**.",
      "The deletion makes related forms such as **inflate** and **inflating** converge to the same stem.",
      "The rule is applied after Steps 1–4, so the word has already been simplified before the final **e** is considered.",
    ],
    visual: <StemCard word="inflate" stem="inflat" suffix="e" rule="Step 5a" condition="m > 1 · e → NULL" measure="inflat has m = 2" />,
  },
  {
    title: "Step 5b · m > 1, double consonant and single letter",
    bullets: [
      "**Step 5b** removes a final letter when **m > 1**, the stem ends in a **double consonant** (*d) and ends with a **single letter** (*<L>).",
      "The textbook example is **controll → control**, because the doubled **l** is reduced to one **l**.",
      "This is a **correction rule** that repairs stems produced by earlier suffix removal rather than removing a meaningful ending.",
      "The condition is deliberately narrow, so ordinary double letters in short stems are not collapsed.",
    ],
    visual: <StemCard word="controll" stem="control" suffix="l" rule="Step 5b" condition="m > 1 · *d and *<L>" measure="double l → single l" />,
  },
  {
    title: "Worked word · duplicatable in three rule steps",
    bullets: [
      "Start with **duplicatable** and apply **Step 4**: **duplicatable → duplicat** by removing **able** under the m > 1 condition.",
      "Then apply **Step 1b1**: **duplicat → duplicate** by expanding **at → ate**, which is the correction rule for proper conflation.",
      "Then apply **Step 2**: **duplicate → duplic** by replacing **ate** with **ic** under the m > 0 condition.",
      "Another Step 4 rule that removes **ic** cannot be applied to the same word because only **one rule from each step** is allowed.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable
          head={["Stage", "Word", "Rule applied", "Condition"]}
          rows={[
            ["0", "duplicatable", "—", "start"],
            ["1", "duplicat", "Step 4 · able → NULL", "m > 1"],
            ["2", "duplicate", "Step 1b1 · at → ate", "NULL"],
            ["3", "duplic", "Step 2 · ate → ic", "m > 0"],
          ]}
          caption="The final stem is duplic. Each step is visited once, in order."
        />
        <div>
          <Kpis items={["Measure m checks the stem", "One rule per step", "Step 1b1 repairs over-stemming", "Stemming raises recall"]} />
          <SlideNote>
            Exam trap: the Porter algorithm is not a dictionary lookup; it is a fixed set of condition-action rules applied to the query as well as to incoming items.
          </SlideNote>
        </div>
      </div>
    ),
  },
];

export default function PorterWalkthrough() {
  return (
    <StepByStepVisualizer
      title="Porter Stemming Algorithm"
      subtitle="Steps 1a–5 with the measure m rules, exact textbook examples and the duplicatable worked case."
      steps={steps}
    />
  );
}
