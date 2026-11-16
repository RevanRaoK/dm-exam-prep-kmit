import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";

const pattern = "abcac";
const states = [0, 1, 2, 3, 4, 5];
const alphabet = ["a", "b", "c", "d"];

const transitions: Record<number, Record<string, number>> = {
  0: { a: 1, b: 0, c: 0, d: 0 },
  1: { a: 1, b: 2, c: 0, d: 0 },
  2: { a: 1, b: 0, c: 3, d: 0 },
  3: { a: 4, b: 0, c: 0, d: 0 },
  4: { a: 1, b: 2, c: 5, d: 0 },
  5: { a: 1, b: 0, c: 0, d: 0 },
};

const trace = [
  [1, "a", 1],
  [2, "b", 2],
  [3, "a", 1],
  [4, "b", 2],
  [5, "d", 0],
  [6, "c", 0],
  [7, "a", 1],
  [8, "b", 2],
  [9, "c", 3],
  [10, "d", 0],
  [11, "a", 1],
  [12, "c", 0],
  [13, "a", 1],
  [14, "b", 2],
  [15, "c", 3],
  [16, "a", 4],
  [17, "c", 5],
];

function StateMachine({ activeState }: { activeState?: number }) {
  const rows = [
    { y: 64, x: [70, 180, 290, 400, 510, 620], state: 0 },
  ];
  return (
    <svg className="svgviz" viewBox="0 0 760 280" role="img" aria-label="Finite state automaton for the pattern abcac">
      <text x={16} y={24} className="mono xs mu">
        FSA FOR PATTERN abcac · STATES 0 TO 5 · STATE 5 IS ACCEPTING
      </text>
      {[0, 1, 2, 3, 4, 5].map((state, index) => {
        const x = 70 + index * 112;
        const active = activeState === state;
        const accepting = state === 5;
        return (
          <g key={state}>
            <circle
              cx={x}
              cy={100}
              r={28}
              fill={active ? "var(--c)" : accepting ? "var(--ok-bg)" : "var(--surface)"}
              stroke={active ? "var(--c)" : accepting ? "var(--ok)" : "var(--c-mid)"}
              strokeWidth={active ? 3 : 2}
            />
            {accepting ? <circle cx={x} cy={100} r={22} fill="none" stroke={active ? "#fff" : "var(--ok)"} strokeWidth={1.4} /> : null}
            <text
              x={x}
              y={105}
              textAnchor="middle"
              className="mono b"
              style={{ fontSize: 15, fill: active ? "#fff" : accepting ? "var(--ok)" : "var(--c-ink)" }}
            >
              {state}
            </text>
            <text x={x} y={148} textAnchor="middle" className="mono xs mu">
              q{state}
            </text>
          </g>
        );
      })}
      {[
        { from: 0, to: 1, label: "a" },
        { from: 1, to: 2, label: "b" },
        { from: 2, to: 3, label: "c" },
        { from: 3, to: 4, label: "a" },
        { from: 4, to: 5, label: "c" },
      ].map((edge) => {
        const x1 = 70 + edge.from * 112 + 28;
        const x2 = 70 + edge.to * 112 - 28;
        return (
          <g key={`${edge.from}-${edge.to}`}>
            <line x1={x1} y1={92} x2={x2} y2={92} stroke="var(--c)" strokeWidth={1.8} markerEnd="url(#fsa-arrow)" />
            <text x={(x1 + x2) / 2} y={82} textAnchor="middle" className="mono xs b ink">
              {edge.label}
            </text>
          </g>
        );
      })}
      <defs>
        <marker id="fsa-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--c)" />
        </marker>
      </defs>
      <path d="M70 72 L70 40 L20 40 L20 100 L42 100" fill="none" stroke="var(--muted)" strokeWidth={1.4} markerEnd="url(#fsa-arrow)" />
      <text x={26} y={34} className="mono xs mu">
        start
      </text>
      <text x={16} y={264} className="xs mu">
        Unlabelled or failure transitions return to the longest prefix that is still a suffix of the text read so far.
      </text>
    </svg>
  );
}

const steps: WalkthroughStep[] = [
  {
    title: "The five elements of a finite state automaton",
    bullets: [
      "A **finite state automaton (FSA)** is defined by the five-tuple **(Q, Σ, δ, q0, F)**.",
      "**Q** is the finite set of states, **Σ** is the input alphabet, and **δ** is the transition function that maps a state and a character to the next state.",
      "**q0** is the start state and **F** is the set of accepting or final states that report a pattern match.",
      "In text search the FSA reads one text character at a time and changes state, so it never needs to move backwards in the text.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable
          head={["Element", "Meaning in text search", "For pattern abcac"]}
          rows={[
            ["Q", "finite set of states", "{0, 1, 2, 3, 4, 5}"],
            ["Σ", "input alphabet", "{a, b, c, d}"],
            ["δ", "transition function", "state × character → next state"],
            ["q0", "start state", "0"],
            ["F", "accepting states", "{5}"],
          ]}
        />
        <div>
          <Kpis items={["5-tuple", "One pass", "No backtracking", "Accepting state = hit"]} />
          <SlideNote>
            The 2023 paper asks exactly for the five elements of an FSA used in text searching algorithms.
          </SlideNote>
        </div>
      </div>
    ),
  },
  {
    title: "Build the automaton for the pattern abcac",
    bullets: [
      "State **qk** means that the last **k** characters read match the first **k** characters of the pattern.",
      "State **0** is the start, state **5** is accepting, and the forward path is **q0 --a--> q1 --b--> q2 --c--> q3 --a--> q4 --c--> q5**.",
      "A wrong character follows a **failure transition** to the longest prefix of the pattern that is still a suffix of the text read so far.",
      "For example, from **q2** the character **a** returns to **q1**, because the **a** can start a new prefix even though the earlier **ab** cannot continue.",
    ],
    visual: <StateMachine activeState={5} />,
  },
  {
    title: "The full transition table",
    bullets: [
      "The table stores **δ(state, character)** for every state and every character in the alphabet.",
      "From **q0**, only **a** advances to **q1**; every other character keeps the automaton at **q0**.",
      "From **q4**, **c** reaches the accepting state **q5**, while **a** returns to **q1**, **b** goes to **q2** and **d** returns to **q0**.",
      "After accepting at **q5**, the machine falls back to **q1** on **a** and **q0** otherwise, so overlapping matches can still be found.",
    ],
    visual: (
      <MiniTable
        head={["State", "a", "b", "c", "d"]}
        rows={states.map((state) => [
          `q${state}${state === 5 ? " (accept)" : ""}`,
          ...alphabet.map((ch) => {
            const next = transitions[state][ch];
            return {
              text: `q${next}`,
              tone: next === 5 ? ("good" as const) : next === state ? ("mut" as const) : undefined,
            };
          }),
        ])}
        caption="The transition function δ is total: every state and character has exactly one next state."
      />
    ),
  },
  {
    title: "Run the automaton on ababdcabcdacabcac",
    bullets: [
      "The text is read left to right: **a** moves to q1, **b** to q2, the next **a** falls back to q1, and the next **b** returns to q2.",
      "The **d** at position 5 has no useful prefix, so the automaton returns to **q0** and starts fresh.",
      "The subsequence **a b c** at positions 7–9 reaches **q3**, but the following **d** resets the state to **q0**.",
      "The final characters **a b c a c** at positions 13–17 drive the automaton through **q1, q2, q3, q4, q5**, so a match is reported.",
    ],
    visual: (
      <MiniTable
        head={["i", "Character", "Next state", "Interpretation"]}
        rows={trace.map(([i, ch, state]) => [
          String(i),
          String(ch),
          { text: `q${state}`, tone: state === 5 ? ("good" as const) : state === 0 ? ("mut" as const) : undefined },
          state === 5
            ? "accepting state — pattern found"
            : state === 0
              ? "no prefix matched, restart"
              : `last ${state} characters match a prefix`,
        ])}
        caption="State 5 at position 17 is the accepting state; the pattern abcac starts at position 13."
      />
    ),
  },
  {
    title: "Failure transitions are what make the FSA fast",
    bullets: [
      "A naive matcher restarts from the next text position after every mismatch, which wastes comparisons.",
      "The FSA uses the **failure function** to keep the longest prefix that is also a suffix, so the text pointer never goes backwards.",
      "The pre-processing cost is **O(m)** for a pattern of length m, and the scan cost is **O(n)** for n text characters.",
      "This is the same principle used by the **Aho–Corasick** algorithm, which builds one automaton for many patterns.",
    ],
    visual: (
      <StateMachine activeState={2} />
    ),
  },
  {
    title: "FSA inside hardware text search",
    bullets: [
      "A **universal finite state automaton** can be implemented as a **term detector** in hardware, with one state machine for each query term.",
      "The **HSTS** machine runs three parallel state machines: one for contiguous phrases, one for embedded terms and one for exact words.",
      "The **Fast Data Finder** implements a pipeline of comparator cells, while **GESCAN** uses a text array processor that resolves Boolean logic.",
      "The exam line is: software uses FSA for **O(n)** scanning, and hardware uses FSA or comparator arrays to search **many terms simultaneously**.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable
          head={["Approach", "Mechanism", "Strength"]}
          rows={[
            ["Software FSA", "transition table + failure function", "linear scan, no backtracking"],
            ["Aho–Corasick", "one automaton for many patterns", "multi-pattern search in one pass"],
            ["GESCAN", "text array processor", "many terms and Boolean conditions"],
            ["Fast Data Finder", "pipeline of comparator cells", "deterministic hardware search"],
          ]}
        />
        <div>
          <Kpis items={["Q, Σ, δ, q0, F", "q0 = 0", "F = {5}", "Hit at position 13"]} />
          <SlideNote>
            State the 5-tuple first, draw the transition table, then trace the text character by character.
          </SlideNote>
        </div>
      </div>
    ),
  },
];

export default function FsaWalkthrough() {
  return (
    <StepByStepVisualizer
      title="Finite State Automata / Hardware Text Search"
      subtitle="The 5-tuple FSA, the transition table for abcac, state-by-state scanning of ababdcabcdacabcac and the hardware term detector."
      steps={steps}
    />
  );
}
