import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";

const text = "ababdcabcdacabcac";
const pattern = "abcac";

function Alignment({
  offset,
  matchedSuffix,
  mismatch,
  found = false,
  label,
}: {
  offset: number;
  matchedSuffix: number;
  mismatch: boolean;
  found?: boolean;
  label: string;
}) {
  const cell = 46;
  const startX = 52;
  const textY = 74;
  const patternY = 156;
  return (
    <div>
      <svg className="svgviz" viewBox="0 0 900 250" role="img" aria-label={`Boyer-Moore alignment ${label}`}>
        <text x={20} y={24} className="mono xs mu">
          {label}
        </text>
        {text.split("").map((ch, index) => {
          const x = startX + index * cell;
          const inWindow = index >= offset && index < offset + pattern.length;
          const patternIndex = index - offset;
          const isMatch = found || (inWindow && patternIndex >= pattern.length - matchedSuffix);
          const isMismatch = mismatch && inWindow && patternIndex === pattern.length - matchedSuffix - 1;
          return (
            <g key={`t-${index}`}>
              <rect
                x={x}
                y={textY}
                width={cell - 4}
                height={38}
                rx={6}
                fill={isMismatch ? "var(--bad-bg)" : isMatch ? "var(--ok-bg)" : inWindow ? "var(--c-bg)" : "var(--surface)"}
                stroke={isMismatch ? "var(--bad)" : isMatch ? "var(--ok)" : inWindow ? "var(--c-mid)" : "var(--line)"}
                strokeWidth={inWindow ? 1.8 : 1}
              />
              <text
                x={x + (cell - 4) / 2}
                y={textY + 25}
                textAnchor="middle"
                className="mono b"
                style={{ fontSize: 14, fill: isMismatch ? "var(--bad)" : isMatch ? "var(--ok)" : "var(--fg)" }}
              >
                {ch}
              </text>
              <text x={x + (cell - 4) / 2} y={textY - 7} textAnchor="middle" className="mono xs mu">
                {index + 1}
              </text>
            </g>
          );
        })}

        <line x1={startX - 8} y1={128} x2={852} y2={128} stroke="var(--line)" strokeWidth={1} strokeDasharray="4 4" />

        {pattern.split("").map((ch, index) => {
          const x = startX + (offset + index) * cell;
          const isMatch = found || index >= pattern.length - matchedSuffix;
          const isMismatch = mismatch && index === pattern.length - matchedSuffix - 1;
          return (
            <g key={`p-${index}`}>
              <rect
                x={x}
                y={patternY}
                width={cell - 4}
                height={38}
                rx={6}
                fill={isMismatch ? "var(--bad-bg)" : isMatch ? "var(--ok-bg)" : "var(--c-bg)"}
                stroke={isMismatch ? "var(--bad)" : isMatch ? "var(--ok)" : "var(--c-mid)"}
                strokeWidth={1.8}
              />
              <text
                x={x + (cell - 4) / 2}
                y={patternY + 25}
                textAnchor="middle"
                className="mono b"
                style={{ fontSize: 14, fill: isMismatch ? "var(--bad)" : isMatch ? "var(--ok)" : "var(--c-ink)" }}
              >
                {ch}
              </text>
              <text x={x + (cell - 4) / 2} y={patternY + 55} textAnchor="middle" className="mono xs mu">
                P{index + 1}
              </text>
            </g>
          );
        })}

        <text x={20} y={220} className="xs mu">
          Text index is 1-based. Green = matched pair, red = mismatch, pale pink = current window.
        </text>
      </svg>
      <SlideNote>Boyer–Moore always compares the rightmost pattern character first and then works left.</SlideNote>
    </div>
  );
}

const steps: WalkthroughStep[] = [
  {
    title: "Set up the pattern, the text and the last-occurrence table",
    bullets: [
      "The pattern is **P = abcac** with length **m = 5**, and the text is **T = ababdcabcdacabcac** with length **n = 17**.",
      "The **bad-character heuristic** needs the last occurrence of each pattern letter: **a → 4**, **b → 2** and **c → 5** in 1-based positions.",
      "The **looking-glass heuristic** compares the pattern from its **right end** and moves left, so the last character is tested first.",
      "On a mismatch at text position **i** with character **c**, align the last **c** in P with T[i]; if c is not in P, shift P[1] to T[i+1].",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable
          head={["Character", "Last position in P", "Bad-character shift"]}
          rows={[
            ["a", "4", "i − 4"],
            ["b", "2", "i − 2"],
            ["c", "5", "i − 5"],
            ["any other", "absent", "i + 1 − 1 = i (move past it)"],
          ]}
          caption="The bad-character table for P = abcac."
        />
        <div>
          <Kpis items={["m = 5", "n = 17", "Compare right to left", "Shift = max(bad char, good suffix)"]} />
          <SlideNote>The good-suffix heuristic uses the part of the pattern that already matched to avoid re-testing it.</SlideNote>
        </div>
      </div>
    ),
  },
  {
    title: "Alignment 1 · pattern at position 1, mismatch at the last character",
    bullets: [
      "Align **abcac** with text positions **1–5** and compare the last pair: **P5 = c** against **T5 = d**.",
      "The characters differ, so this is a **mismatch** at the last pattern position with text character **d**.",
      "The bad-character rule shifts by **5** because **d is not in the pattern**, so P moves completely past the text **d**.",
      "The good-suffix rule also gives a shift of **5** here because no suffix of the pattern matched; the pattern moves to position **6**.",
    ],
    visual: <Alignment offset={0} matchedSuffix={0} mismatch label="Alignment 1 · compare P5 = c with T5 = d → shift 5" />,
  },
  {
    title: "Alignment 2 · pattern at position 6, another last-character mismatch",
    bullets: [
      "The pattern now covers text positions **6–10**, and the rightmost comparison is **P5 = c** against **T10 = d**.",
      "The mismatch is again on **d**, which is absent from **abcac**.",
      "The bad-character shift is **5**, so the pattern jumps from position 6 to position **11**.",
      "No characters of the pattern matched before the mismatch, so the good-suffix shift does not improve on 5.",
    ],
    visual: <Alignment offset={5} matchedSuffix={0} mismatch label="Alignment 2 · compare P5 = c with T10 = d → shift 5" />,
  },
  {
    title: "Alignment 3 · one suffix match, then mismatch at P4",
    bullets: [
      "The pattern covers text positions **11–15**, and the first comparison **P5 = c** with **T15 = c** matches.",
      "The next comparison is **P4 = a** against **T14 = b**, which mismatches after a matched suffix of length **1**.",
      "Bad-character shift for **b**: its last occurrence in P is position **2**, so shift = **4 − 2 = 2**.",
      "Good-suffix shift: the matched suffix **c** occurs earlier at pattern position **3**, so shift = **4 − 3 = 2**; both heuristics agree on **2**.",
    ],
    visual: <Alignment offset={10} matchedSuffix={1} mismatch label="Alignment 3 · c matches, then P4 = a vs T14 = b → shift 2" />,
  },
  {
    title: "Alignment 4 · full match at text position 13",
    bullets: [
      "After shifting by 2, the pattern covers text positions **13–17**: **T13 = a, T14 = b, T15 = c, T16 = a, T17 = c**.",
      "Comparing right to left gives **c = c**, **a = a**, **c = c**, **b = b** and **a = a**, so every character matches.",
      "The pattern **abcac** is found starting at **position 13** of the text.",
      "A full match is an **accepting state** for the search, and the algorithm can report the position and continue if more occurrences are wanted.",
    ],
    visual: <Alignment offset={12} matchedSuffix={5} mismatch={false} found label="Alignment 4 · abcac matches T13–T17 · hit at position 13" />,
  },
  {
    title: "Step summary and exam table",
    bullets: [
      "Alignment 1 at position 1 shifts **5**; alignment 2 at position 6 shifts **5**; alignment 3 at position 11 shifts **2**; alignment 4 at position 13 is a **match**.",
      "The algorithm used **9 character comparisons** for this scenario, while brute force would restart after every mismatch and compare many more pairs.",
      "The **bad-character** rule is strongest when the mismatching text character does not occur in the pattern.",
      "The **good-suffix** rule is strongest when a long suffix has already matched and a shorter prefix can be aligned under it.",
    ],
    visual: (
      <MiniTable
        head={["Alignment", "Window start", "First comparison", "Mismatch", "Bad-char shift", "Good-suffix shift", "Chosen shift"]}
        rows={[
          ["1", "1", "P5 c vs T5 d", "d at P5", "5", "5", { text: "5", tone: "good" }],
          ["2", "6", "P5 c vs T10 d", "d at P5", "5", "5", { text: "5", tone: "good" }],
          ["3", "11", "P5 c vs T15 c", "b at P4", "2", "2", { text: "2", tone: "good" }],
          ["4", "13", "P5 c vs T17 c", "none", "—", "—", { text: "HIT", tone: "good" }],
        ]}
        caption="Chosen shift = maximum of the bad-character and good-suffix shifts, with a minimum of 1."
      />
    ),
  },
  {
    title: "Write the algorithm in the exam",
    bullets: [
      "**Step 1:** pre-process P to build the **last-occurrence table** for the bad-character rule and the **good-suffix shift table**.",
      "**Step 2:** align P with the start of T and compare from **P[m] down to P[1]**.",
      "**Step 3:** on a mismatch at T[i] = c, compute both shifts and move P by the **larger** one; if c is absent, align P[1] with T[i+1].",
      "**Step 4:** when all m characters match, report a hit; otherwise continue until the pattern passes the end of the text.",
      "Complexity to quote: preprocessing is **O(n + m)** in the standard treatment, and Boyer–Moore is fastest in practice for large alphabets and long patterns.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable
          head={["Heuristic", "Question it asks", "Shift rule"]}
          rows={[
            ["Bad character", "Where did the mismatching text character last occur in P?", "Align that occurrence under the text character."],
            ["Good suffix", "Where does the matched suffix occur again, or as a prefix?", "Align the next occurrence or a prefix of P."],
          ]}
        />
        <div>
          <Kpis items={["Right-to-left comparison", "Two heuristics", "Take the larger shift", "Hit at position 13"]} />
          <SlideNote>Do not forget the special case: if the last occurrence would move the pattern backwards, shift by at least one.</SlideNote>
        </div>
      </div>
    ),
  },
];

export default function BoyerMooreWalkthrough() {
  return (
    <StepByStepVisualizer
      title="Boyer–Moore String Search"
      subtitle="Exact JNTUH Feb-2023 Q9a scenario: pattern abcac in ababdcabcdacabcac with bad-character and good-suffix shifts."
      steps={steps}
    />
  );
}
