const steps = [
  { n: "1", title: "Standardize input", detail: "Translate PDF, HTML, DOCX, audio and video into one internal format; map languages to Unicode.", tag: "format + language" },
  { n: "2", title: "Logical subsetting (zoning)", detail: "Split the item into Title, Author, Abstract, Main Text, Conclusion and References.", tag: "field-level search" },
  { n: "3", title: "Identify processing tokens", detail: "Valid word symbols = letters and digits; inter-word symbols = blanks and punctuation; hyphen = special.", tag: "word boundaries" },
  { n: "4", title: "Apply stop algorithm or stop list", detail: "Drop very frequent words such as the, is and of because they add no search value.", tag: "frequency × rank = constant" },
  { n: "5", title: "Characterize tokens", detail: "Mark uppercase names, acronyms, numbers and dates; tag part of speech and resolve word sense.", tag: "token features" },
  { n: "6", title: "Apply stemming", detail: "Reduce compute, computer, computes, computing and computation to the stem comput.", tag: "conflation" },
  { n: "7", title: "Create searchable data structure", detail: "Store the stemmed tokens and their locations in an inverted file, PAT tree or signature file.", tag: "index build" },
];

export default function NormalizationPipeline() {
  return (
    <svg
      className="svgviz"
      viewBox="0 0 980 560"
      role="img"
      aria-label="Item normalization pipeline from raw item to searchable data structure"
    >
      <defs>
        <marker
          id="norm-arrow"
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
        ITEM NORMALIZATION PIPELINE · FROM RAW ITEM TO SEARCHABLE INDEX
      </text>

      <rect x={18} y={42} width={150} height={80} rx={11} fill="var(--surface-2)" stroke="var(--line-strong)" />
      <text x={93} y={66} textAnchor="middle" className="mono xs b">
        RAW ITEM
      </text>
      <text x={93} y={84} textAnchor="middle" className="xs mu">
        PDF · HTML · audio · image
      </text>
      <text x={93} y={102} textAnchor="middle" className="xs mu">
        many languages
      </text>

      {steps.map((step, index) => {
        const y = 42 + index * 62;
        const isAccent = index === 5 || index === 6;
        return (
          <g key={step.n}>
            <rect
              x={190}
              y={y}
              width={500}
              height={52}
              rx={9}
              fill={isAccent ? "var(--c-bg)" : "var(--surface)"}
              stroke={isAccent ? "var(--c)" : "var(--line-strong)"}
              strokeWidth={isAccent ? 1.7 : 1.1}
            />
            <circle cx={212} cy={y + 26} r={11} fill={isAccent ? "var(--c)" : "var(--surface-2)"} stroke={isAccent ? "var(--c)" : "var(--line-strong)"} />
            <text x={212} y={y + 30} textAnchor="middle" className="mono xs b" style={{ fill: isAccent ? "#fff" : "var(--muted)" }}>
              {step.n}
            </text>
            <text x={234} y={y + 21} className="b" style={{ fontSize: 12 }}>
              {step.title}
            </text>
            <text x={234} y={y + 38} style={{ fontSize: 10 }}>
              {step.detail}
            </text>
            {index < steps.length - 1 ? (
              <line x1={440} y1={y + 52} x2={440} y2={y + 62} stroke="var(--muted)" strokeWidth={1.4} markerEnd="url(#norm-arrow)" />
            ) : null}
          </g>
        );
      })}

      <rect x={716} y={42} width={246} height={366} rx={13} fill="var(--surface)" stroke="var(--c-mid)" />
      <text x={734} y={64} className="mono xs b ink">
        WORKED EXAMPLE
      </text>
      <text x={734} y={88} className="xs mu">
        Input sentence
      </text>
      <text x={734} y={106} style={{ fontSize: 11 }}>
        “Computers are computing”
      </text>
      <text x={734} y={132} className="xs mu">
        Zone
      </text>
      <text x={734} y={150} style={{ fontSize: 11 }}>
        Abstract
      </text>
      <text x={734} y={176} className="xs mu">
        Tokens
      </text>
      <text x={734} y={194} style={{ fontSize: 11 }}>
        Computers · are · computing
      </text>
      <text x={734} y={220} className="xs mu">
        Stop list
      </text>
      <text x={734} y={238} style={{ fontSize: 11 }}>
        remove “are”
      </text>
      <text x={734} y={264} className="xs mu">
        Stemming
      </text>
      <text x={734} y={282} style={{ fontSize: 11 }}>
        computers → comput
      </text>
      <text x={734} y={300} style={{ fontSize: 11 }}>
        computing → comput
      </text>
      <text x={734} y={326} className="xs mu">
        Index entry
      </text>
      <rect x={734} y={336} width={210} height={48} rx={7} fill="var(--c-bg)" stroke="var(--c-mid)" />
      <text x={746} y={356} className="mono xs b ink">
        comput → [DOC1, DOC7]
      </text>
      <text x={746} y={374} className="mono xs mu">
        zone: abstract · position: 1, 3
      </text>

      <rect x={18} y={454} width={944} height={86} rx={11} fill="var(--surface-2)" stroke="var(--line)" />
      <text x={34} y={476} className="mono xs b ink">
        WHY EACH STEP EXISTS
      </text>
      <text x={34} y={496} className="xs">
        Standardization makes heterogeneous sources comparable, zoning raises precision, tokenization defines the searchable unit, and the stop algorithm saves index space.
      </text>
      <text x={34} y={514} className="xs">
        Characterizing preserves names and numbers, stemming improves recall by conflation, and the final data structure controls what the search process can find.
      </text>
      <text x={34} y={532} className="xs mu">
        Trade-off to quote: stemming raises recall but can reduce precision and diversity when different concepts collapse to the same stem.
      </text>
    </svg>
  );
}
