import { useId } from "react";

export default function HardwareFastDataFinder() {
  const arrowId = `hw-arrow-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return (
    <svg
      className="svgviz"
      viewBox="0 0 980 520"
      role="img"
      aria-label="Text streaming architecture and Fast Data Finder hardware pipeline of comparator cells"
    >
      <defs>
        <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--muted)" />
        </marker>
      </defs>

      <text x={20} y={22} className="mono xs mu">
        STREAMING TEXT SEARCH + FAST DATA FINDER HARDWARE ARCHITECTURE
      </text>

      <rect x={18} y={38} width={470} height={250} rx={13} fill="var(--surface)" stroke="var(--line-strong)" />
      <text x={34} y={60} className="mono xs b ink">
        TEXT STREAMING ARCHITECTURE
      </text>
      <text x={34} y={76} className="xs mu">
        sequential scan of every item’s full text
      </text>

      <rect x={36} y={96} width={112} height={62} rx={8} fill="var(--surface-2)" stroke="var(--v-teal)" />
      <text x={92} y={118} textAnchor="middle" className="mono xs b">
        DATABASE
      </text>
      <text x={92} y={134} textAnchor="middle" className="xs mu">
        full text on disk
      </text>
      <text x={92} y={148} textAnchor="middle" className="xs mu">
        audio · image · video
      </text>

      <rect x={188} y={96} width={132} height={62} rx={8} fill="var(--c-bg)" stroke="var(--c)" />
      <text x={254} y={118} textAnchor="middle" className="mono xs b ink">
        TERM DETECTOR
      </text>
      <text x={254} y={134} textAnchor="middle" className="xs mu">
        all query terms
      </text>
      <text x={254} y={148} textAnchor="middle" className="xs mu">
        sometimes Boolean logic
      </text>

      <rect x={360} y={96} width={108} height={62} rx={8} fill="var(--surface-2)" stroke="var(--v-blue)" />
      <text x={414} y={118} textAnchor="middle" className="mono xs b">
        QUERY
      </text>
      <text x={414} y={134} textAnchor="middle" className="xs mu">
        resolver
      </text>
      <text x={414} y={148} textAnchor="middle" className="xs mu">
        logic + hits
      </text>

      <rect x={188} y={190} width={280} height={62} rx={8} fill="var(--surface-2)" stroke="var(--v-amber)" />
      <text x={328} y={212} textAnchor="middle" className="mono xs b">
        USER INTERFACE
      </text>
      <text x={328} y={228} textAnchor="middle" className="xs mu">
        search status · retrieve hits
      </text>
      <text x={328} y={243} textAnchor="middle" className="xs mu">
        results available as soon as a match is found
      </text>

      <line x1={148} y1={127} x2={188} y2={127} stroke="var(--muted)" strokeWidth={1.6} markerEnd={`url(#${arrowId})`} />
      <line x1={320} y1={127} x2={360} y2={127} stroke="var(--muted)" strokeWidth={1.6} markerEnd={`url(#${arrowId})`} />
      <line x1={414} y1={158} x2={414} y2={190} stroke="var(--muted)" strokeWidth={1.6} markerEnd={`url(#${arrowId})`} />
      <line x1={254} y1={190} x2={254} y2={158} stroke="var(--muted)" strokeWidth={1.2} strokeDasharray="4 3" markerEnd={`url(#${arrowId})`} />

      <text x={36} y={190} className="xs mu">
        The detector
      </text>
      <text x={36} y={204} className="xs mu">
        reports detected
      </text>
      <text x={36} y={218} className="xs mu">
        terms to the
      </text>
      <text x={36} y={232} className="xs mu">
        query resolver.
      </text>
      <text x={36} y={258} className="xs mu">
        Scalability: add more search devices or one machine per disk.
      </text>

      <rect x={506} y={38} width={456} height={250} rx={13} fill="var(--surface)" stroke="var(--line-strong)" />
      <text x={522} y={60} className="mono xs b ink">
        FAST DATA FINDER · PIPELINE OF COMPARATOR CELLS
      </text>
      <text x={522} y={76} className="xs mu">
        programmable text-processing cells connected in series
      </text>

      <text x={522} y={100} className="mono xs mu">
        pattern registers:
      </text>
      {["a", "b", "c", "a", "c"].map((ch, index) => (
        <g key={`reg-${index}`}>
          <rect x={610 + index * 52} y={88} width={42} height={28} rx={5} fill="var(--c-bg)" stroke="var(--c-mid)" />
          <text x={631 + index * 52} y={107} textAnchor="middle" className="mono xs b ink">
            {ch}
          </text>
          <text x={631 + index * 52} y={130} textAnchor="middle" className="mono xs mu">
            R{index + 1}
          </text>
        </g>
      ))}

      <text x={522} y={164} className="mono xs mu">
        stream:
      </text>
      <rect x={572} y={146} width={304} height={30} rx={6} fill="var(--surface-2)" stroke="var(--line)" />
      <text x={584} y={166} className="mono" style={{ fontSize: 11.5 }}>
        a b a b d c a b c d a c a b c a c
      </text>
      <text x={584} y={194} className="xs mu">
        each character flows through every cell, one cell per pattern character
      </text>

      {["a", "b", "a", "b", "d"].map((ch, index) => (
        <g key={`cell-${index}`}>
          <rect x={530 + index * 82} y={214} width={70} height={46} rx={7} fill="var(--surface)" stroke={index === 4 ? "var(--hot)" : "var(--c-mid)"} strokeWidth={index === 4 ? 2 : 1.2} />
          <text x={565 + index * 82} y={233} textAnchor="middle" className="mono xs b">
            C{index + 1}
          </text>
          <text x={565 + index * 82} y={250} textAnchor="middle" className="mono" style={{ fontSize: 11, fill: index === 4 ? "var(--hot)" : "var(--fg)" }}>
            {ch}
          </text>
        </g>
      ))}

      <text x={522} y={282} className="xs mu">
        A hit is passed to the internal microprocessor and then to the host processor.
      </text>

      <rect x={18} y={306} width={944} height={92} rx={11} fill="var(--c-bg)" stroke="var(--c-mid)" />
      <text x={34} y={328} className="mono xs b ink">
        WHY HARDWARE? ADVANTAGES TO QUOTE
      </text>
      <text x={34} y={348} className="xs">
        Eliminates the index, which is typically 70% of the size of the items, and makes new items searchable immediately.
      </text>
      <text x={34} y={366} className="xs">
        Search speed is deterministic and hits become available as soon as they are discovered, unlike a complete index search.
      </text>
      <text x={34} y={384} className="xs mu">
        Early machines: Rapid Search Machine (GE) · Associative File Processor (OSI) · GESCAN text array processor · Fast Data Finder.
      </text>

      <rect x={18} y={414} width={944} height={88} rx={11} fill="var(--surface-2)" stroke="var(--line)" />
      <text x={34} y={436} className="mono xs b ink">
        FINITE STATE AUTOMATA TERM DETECTOR
      </text>
      <text x={34} y={456} className="xs">
        An FSA term detector is the 5-tuple (Q, Σ, δ, q0, F): states, alphabet, transition function, start state and final states.
      </text>
      <text x={34} y={474} className="xs">
        Each text character drives one state transition, so the machine recognises all query patterns in a single left-to-right pass.
      </text>
      <text x={34} y={492} className="xs mu">
        GESCAN resolves Boolean logic inside the term detector; the Fast Data Finder uses programmable cells and supports fuzzy matching, term weights and numeric ranges.
      </text>
    </svg>
  );
}
