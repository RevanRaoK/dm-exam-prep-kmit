import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";

function Bits({
  label,
  bits,
  tone = "accent",
}: {
  label: string;
  bits: string;
  tone?: "accent" | "hot" | "ok" | "mut";
}) {
  const colors = {
    accent: { fill: "var(--c-bg)", stroke: "var(--c-mid)", ink: "var(--c-ink)" },
    hot: { fill: "var(--hot-bg)", stroke: "var(--hot)", ink: "var(--hot)" },
    ok: { fill: "var(--ok-bg)", stroke: "var(--ok)", ink: "var(--ok)" },
    mut: { fill: "var(--surface-2)", stroke: "var(--line)", ink: "var(--muted)" },
  }[tone];
  return (
    <g>
      <text x={0} y={16} className="mono xs mu">
        {label}
      </text>
      {bits.split("").map((bit, index) => (
        <g key={index}>
          <rect
            x={index * 30}
            y={24}
            width={26}
            height={26}
            rx={5}
            fill={bit === "1" ? colors.fill : "var(--surface)"}
            stroke={colors.stroke}
          />
          <text
            x={index * 30 + 13}
            y={42}
            textAnchor="middle"
            className="mono xs b"
            style={{ fill: bit === "1" ? colors.ink : "var(--muted)" }}
          >
            {bit}
          </text>
        </g>
      ))}
    </g>
  );
}

function BitBoard({
  rows,
  note,
}: {
  rows: { label: string; bits: string; tone?: "accent" | "hot" | "ok" | "mut" }[];
  note: string;
}) {
  return (
    <div>
      <svg className="svgviz" viewBox="0 0 360 200" role="img" aria-label="Six-bit signature rows">
        <text x={8} y={12} className="mono xs mu">
          BIT POSITION 1 · 2 · 3 · 4 · 5 · 6
        </text>
        {rows.map((row, index) => (
          <g key={row.label} transform={`translate(8, ${16 + index * 40})`}>
            <Bits label={row.label} bits={row.bits} tone={row.tone} />
          </g>
        ))}
      </svg>
      <SlideNote>{note}</SlideNote>
    </div>
  );
}

const wordRows = [
  ["text", "000101", "the word appears twice"],
  ["many", "110000", "once"],
  ["words", "100100", "appears twice"],
  ["made", "001100", "the PYQ asks for this value"],
  ["letters", "100001", "once"],
] as const;

const steps: WalkthroughStep[] = [
  {
    title: "The exact PYQ text and its word signatures",
    bullets: [
      "The question gives **Text: “This is text A text has many words, words are made from letters”** and five six-bit hash values.",
      "The hashes are **h(text) = 000101**, **h(many) = 110000**, **h(words) = 100100**, **h(made) = 001100** and **h(letters) = 100001**.",
      "Therefore the value asked in the paper is **h(made) = 001100**.",
      "A **word signature** is a fixed-length code with a fixed number of 1 bits, and the bit positions are chosen by a **hash function** of the word.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable head={["Word", "Hash", "Occurrence"]} rows={wordRows.map((row) => [...row])} caption="Exact data from the PYQ / question bank." />
        <BitBoard
          rows={wordRows.map(([word, bits]) => ({ label: word, bits }))}
          note="A 1 means the hash selects that bit position; a 0 means it does not."
        />
      </div>
    ),
  },
  {
    title: "OR the word signatures to build the block signature",
    bullets: [
      "**Superimposed coding** ORs all word signatures in the item to produce one **item or block signature**.",
      "Bit-by-bit OR gives **000101 OR 110000 OR 100100 OR 001100 OR 100001 = 111101**.",
      "The **block signature** is therefore **111101**, and every bit that belongs to any word in the text is set to 1.",
      "If the item is larger than the chosen block size, the text is partitioned into blocks and each block gets its own ORed signature.",
    ],
    visual: (
      <BitBoard
        rows={[
          { label: "h(text)", bits: "000101", tone: "mut" },
          { label: "h(many)", bits: "110000", tone: "mut" },
          { label: "h(words)", bits: "100100", tone: "mut" },
          { label: "h(made)", bits: "001100", tone: "mut" },
          { label: "h(letters)", bits: "100001", tone: "mut" },
          { label: "BLOCK SIGNATURE", bits: "111101", tone: "accent" },
        ]}
        note="ORing is lossy: the block signature records which bit positions occur, not which word produced each bit."
      />
    ),
  },
  {
    title: "Search query 1 · “text made” passes the filter",
    bullets: [
      "Hash each query word and OR the query signatures to build the **query template**.",
      "For **“text made”**, the template is **000101 OR 001100 = 001101**.",
      "The bit test **template AND block signature = template** gives **001101 AND 111101 = 001101**, so the block is a **candidate**.",
      "The candidate must still be checked against the full text, because the signature only proves that the bits are possible.",
    ],
    visual: (
      <BitBoard
        rows={[
          { label: "text", bits: "000101", tone: "mut" },
          { label: "made", bits: "001100", tone: "mut" },
          { label: "QUERY TEMPLATE", bits: "001101", tone: "ok" },
          { label: "BLOCK SIGNATURE", bits: "111101", tone: "accent" },
          { label: "AND RESULT", bits: "001101", tone: "ok" },
        ]}
        note="All 1 bits of the query template are present in the block signature, so the item is kept for verification."
      />
    ),
  },
  {
    title: "Search query 2 · “many words letters” passes",
    bullets: [
      "For **“many words letters”**, the template is **110000 OR 100100 OR 100001 = 110101**.",
      "The test **110101 AND 111101 = 110101** passes, so the block is again a candidate.",
      "The full text contains all three words, so this candidate survives verification and becomes a **true hit**.",
      "The query template is always built by ORing the signatures of the individual query words.",
    ],
    visual: (
      <BitBoard
        rows={[
          { label: "many", bits: "110000", tone: "mut" },
          { label: "words", bits: "100100", tone: "mut" },
          { label: "letters", bits: "100001", tone: "mut" },
          { label: "QUERY TEMPLATE", bits: "110101", tone: "ok" },
          { label: "BLOCK SIGNATURE", bits: "111101", tone: "accent" },
        ]}
        note="The signature filter is fast because it compares bit patterns instead of reading the full item."
      />
    ),
  },
  {
    title: "False-drop check · a passing signature can still be wrong",
    bullets: [
      "Suppose an unseen word **hard** has hash **101100**, but the word is not present in this text.",
      "Its template **101100** is a subset of the block signature **111101**, so the signature filter wrongly reports the block as a candidate.",
      "This is a **false drop**: the ORed block signature cannot tell which word set each bit, so unrelated words can cover the same bit positions.",
      "The exam fix is to verify candidates against the original text, or to use longer codes and fewer 1 bits per word to reduce collisions.",
    ],
    visual: (
      <BitBoard
        rows={[
          { label: "unseen hard (assumed)", bits: "101100", tone: "hot" },
          { label: "QUERY TEMPLATE", bits: "101100", tone: "hot" },
          { label: "BLOCK SIGNATURE", bits: "111101", tone: "accent" },
          { label: "AND RESULT", bits: "101100", tone: "hot" },
        ]}
        note="False drop: the bit test passes, but the word hard is absent, so the candidate fails full-text verification."
      />
    ),
  },
  {
    title: "Block partitioning and the design trade-off",
    bullets: [
      "The textbook uses a **block size of five words**, a **code length of 16 bits** and **five 1-bits per word** to stop the signature becoming too dense.",
      "A **longer code** reduces hash collisions, while **fewer 1 bits per word** reduces false drops but needs more space for the same number of terms.",
      "The signature file is **compressed and unordered**, so it uses much less space than an inverted file and new items are simply appended at the end.",
      "Deleted items are **left in place and marked deleted**, and search is a **linear scan O(N)** of the compressed signatures.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable
          head={["Property", "Signature file", "Inverted file"]}
          rows={[
            ["Structure", "compressed, unordered bit patterns", "dictionary + ordered posting lists"],
            ["Search", "linear scan of signatures", "dictionary lookup + posting list merge"],
            ["Storage", "much smaller", "larger because every posting is stored"],
            ["Updates", "append new item; mark deleted", "update inversion lists"],
            ["Best case", "medium databases, low-frequency terms", "large databases with frequent queries"],
          ]}
        />
        <div>
          <Kpis items={["Block OR", "Template match", "Verify candidates", "Beware false drops"]} />
          <SlideNote>
            Exam line: the signature file is a fast elimination filter, not a complete answer. It reduces the candidate set before a slower exact check.
          </SlideNote>
        </div>
      </div>
    ),
  },
];

export default function SignatureWalkthrough() {
  return (
    <StepByStepVisualizer
      title="Signature File Structure Hashing"
      subtitle="Exact PYQ text, h(made) = 001100, block ORing, template matching and the false-drop check."
      steps={steps}
    />
  );
}
