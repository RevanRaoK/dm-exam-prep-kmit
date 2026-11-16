const docs = [
  { id: "DOC1", text: "Chips, Computer, Memory" },
  { id: "DOC2", text: "Memory, Design" },
  { id: "DOC3", text: "Computer, Chips, Design" },
  { id: "DOC4", text: "Memory, Chips, Computer" },
];

const dictionary = [
  { term: "Chips", df: 3, ptr: 1, docs: "1, 3, 4" },
  { term: "Computer", df: 3, ptr: 2, docs: "1, 3, 4" },
  { term: "Design", df: 2, ptr: 3, docs: "2, 3" },
  { term: "Memory", df: 3, ptr: 4, docs: "1, 2, 4" },
];

export default function InvertedFileStructure() {
  return (
    <svg
      className="svgviz"
      viewBox="0 0 980 500"
      role="img"
      aria-label="Inverted file structure with document file, dictionary and inversion lists"
    >
      <defs>
        <marker
          id="inv-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="var(--muted)" />
        </marker>
      </defs>

      <text x={20} y={22} className="mono xs mu">
        INVERTED FILE STRUCTURE · DOCUMENT FILE + DICTIONARY + INVERSION LISTS
      </text>

      <rect x={20} y={42} width={284} height={322} rx={13} fill="var(--surface)" stroke="var(--line-strong)" />
      <text x={36} y={64} className="mono xs b ink">
        DOCUMENT FILE
      </text>
      <text x={36} y={80} className="xs mu">
        normalized items in arrival order
      </text>
      {docs.map((doc, index) => (
        <g key={doc.id}>
          <rect x={34} y={96 + index * 62} width={254} height={52} rx={8} fill="var(--surface-2)" stroke="var(--line)" />
          <text x={46} y={116 + index * 62} className="mono xs b" style={{ fill: "var(--v-teal)" }}>
            {doc.id}
          </text>
          <text x={46} y={134 + index * 62} style={{ fontSize: 10.5 }}>
            {doc.text}
          </text>
        </g>
      ))}

      <rect x={348} y={42} width={276} height={322} rx={13} fill="var(--surface)" stroke="var(--line-strong)" />
      <text x={364} y={64} className="mono xs b ink">
        DICTIONARY
      </text>
      <text x={364} y={80} className="xs mu">
        sorted vocabulary · DF · pointer
      </text>
      <rect x={362} y={92} width={248} height={24} rx={4} fill="var(--c-bg)" stroke="var(--c-mid)" />
      <text x={374} y={108} className="mono xs mu">
        TERM
      </text>
      <text x={498} y={108} className="mono xs mu">
        DF
      </text>
      <text x={540} y={108} className="mono xs mu">
        POINTER
      </text>
      {dictionary.map((entry, index) => (
        <g key={entry.term}>
          <rect
            x={362}
            y={122 + index * 56}
            width={248}
            height={46}
            rx={7}
            fill={index === 1 ? "var(--c-bg)" : "var(--surface-2)"}
            stroke={index === 1 ? "var(--c)" : "var(--line)"}
            strokeWidth={index === 1 ? 1.8 : 1}
          />
          <text x={374} y={144 + index * 56} className="mono" style={{ fontSize: 11.5, fill: index === 1 ? "var(--c-ink)" : "var(--fg)" }}>
            {entry.term}
          </text>
          <text x={504} y={144 + index * 56} textAnchor="middle" className="mono xs">
            {entry.df}
          </text>
          <text x={556} y={144 + index * 56} textAnchor="middle" className="mono xs" style={{ fill: "var(--v-blue)" }}>
            P{entry.ptr}
          </text>
          <text x={374} y={160 + index * 56} className="xs mu">
            posting list in inversion file
          </text>
        </g>
      ))}

      <rect x={676} y={42} width={284} height={322} rx={13} fill="var(--surface)" stroke="var(--line-strong)" />
      <text x={692} y={64} className="mono xs b ink">
        INVERSION LISTS
      </text>
      <text x={692} y={80} className="xs mu">
        posting list = item IDs containing the term
      </text>
      {dictionary.map((entry, index) => (
        <g key={entry.term}>
          <rect
            x={690}
            y={122 + index * 56}
            width={256}
            height={46}
            rx={7}
            fill={index === 1 ? "var(--c-bg)" : "var(--surface-2)"}
            stroke={index === 1 ? "var(--c)" : "var(--line)"}
            strokeWidth={index === 1 ? 1.8 : 1}
          />
          <text x={702} y={144 + index * 56} className="mono xs b" style={{ fill: "var(--v-blue)" }}>
            P{entry.ptr}
          </text>
          <text x={728} y={144 + index * 56} className="mono" style={{ fontSize: 11.5 }}>
            {entry.term} → [{entry.docs}]
          </text>
          <text x={702} y={160 + index * 56} className="xs mu">
            document frequency = {entry.df}
          </text>
        </g>
      ))}

      {dictionary.map((entry, index) => (
        <line
          key={entry.term}
          x1={610}
          y1={145 + index * 56}
          x2={690}
          y2={145 + index * 56}
          stroke="var(--v-blue)"
          strokeWidth={1.3}
          strokeDasharray="4 3"
          markerEnd="url(#inv-arrow)"
        />
      ))}

      {docs.map((doc, index) => (
        <line
          key={doc.id}
          x1={288}
          y1={122 + index * 62}
          x2={362}
          y2={145 + (index % dictionary.length) * 56}
          stroke="var(--line-strong)"
          strokeWidth={1}
          strokeDasharray="3 4"
        />
      ))}

      <rect x={20} y={384} width={940} height={76} rx={11} fill="var(--c-bg)" stroke="var(--c-mid)" />
      <text x={36} y={406} className="mono xs b ink">
        QUERY: Computer AND Memory
      </text>
      <text x={36} y={426} className="xs">
        Posting list Computer = [1, 3, 4]; posting list Memory = [1, 2, 4]; intersection = [1, 4].
      </text>
      <text x={36} y={444} className="xs mu">
        The dictionary locates each term, the inversion lists supply item IDs, and the intersection gives the hit file without scanning every document.
      </text>
    </svg>
  );
}
