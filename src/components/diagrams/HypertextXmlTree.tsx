const htmlNodes = [
  { id: "home", x: 86, y: 76, w: 112, label: "home.html", sub: "index page" },
  { id: "search", x: 250, y: 150, w: 124, label: "search.html", sub: "search engines" },
  { id: "library", x: 250, y: 264, w: 124, label: "library.html", sub: "digital libraries" },
  { id: "crawler", x: 430, y: 108, w: 124, label: "crawler.html", sub: "web crawler" },
  { id: "index", x: 430, y: 194, w: 124, label: "index.html", sub: "inverted index" },
];

const xmlRows = [
  { depth: 0, tag: "<catalog>", note: "root element" },
  { depth: 1, tag: "<book isbn=\"978-1\">", note: "one record" },
  { depth: 2, tag: "<title>", note: "Information Retrieval" },
  { depth: 2, tag: "<author>", note: "Kowalski" },
  { depth: 2, tag: "<chapter no=\"1\">", note: "Introduction" },
  { depth: 3, tag: "<section>", note: "functional overview" },
  { depth: 1, tag: "<book isbn=\"978-2\">", note: "another record" },
];

export default function HypertextXmlTree() {
  return (
    <svg
      className="svgviz"
      viewBox="0 0 980 470"
      role="img"
      aria-label="Hypertext node-link structure and XML document tree"
    >
      <defs>
        <marker
          id="ht-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="var(--v-blue)" />
        </marker>
      </defs>

      <text x={20} y={22} className="mono xs mu">
        HYPERTEXT NODE–LINK STRUCTURE AND XML DOCUMENT TREE
      </text>

      <rect x={18} y={38} width={548} height={322} rx={13} fill="var(--surface)" stroke="var(--line-strong)" />
      <text x={34} y={60} className="mono xs b ink">
        HYPERTEXT · NODES + EMBEDDED LINKS
      </text>
      <text x={34} y={76} className="xs mu">
        each item is a node; each reference is a link
      </text>

      {[
        ["home", "search"],
        ["home", "library"],
        ["search", "crawler"],
        ["search", "index"],
      ].map(([from, to]) => {
        const a = htmlNodes.find((node) => node.id === from)!;
        const b = htmlNodes.find((node) => node.id === to)!;
        return (
          <line
            key={`${from}-${to}`}
            x1={a.x + a.w / 2}
            y1={a.y + 40}
            x2={b.x + b.w / 2}
            y2={b.y}
            stroke="var(--v-blue)"
            strokeWidth={1.5}
            markerEnd="url(#ht-arrow)"
          />
        );
      })}

      {htmlNodes.map((node) => (
        <g key={node.id}>
          <rect x={node.x} y={node.y} width={node.w} height={44} rx={9} fill="var(--c-bg)" stroke="var(--c-mid)" />
          <text x={node.x + node.w / 2} y={node.y + 18} textAnchor="middle" className="mono xs b ink">
            {node.label}
          </text>
          <text x={node.x + node.w / 2} y={node.y + 33} textAnchor="middle" className="xs mu">
            {node.sub}
          </text>
        </g>
      ))}

      <text x={34} y={328} className="xs">
        &lt;a href=&quot;search.html&quot;&gt;Search&lt;/a&gt; is the anchor tag that creates the link.
      </text>
      <text x={34} y={344} className="xs mu">
        The viewer for each node is chosen from the file type of that node.
      </text>

      <rect x={584} y={38} width={378} height={322} rx={13} fill="var(--surface)" stroke="var(--line-strong)" />
      <text x={600} y={60} className="mono xs b ink">
        XML · ELEMENT TREE
      </text>
      <text x={600} y={76} className="xs mu">
        DTD defines the grammar; DOM exposes the tree
      </text>

      {xmlRows.map((row, index) => {
        const y = 98 + index * 36;
        return (
          <g key={row.tag}>
            {index > 0 ? (
              <line
                x1={620 + row.depth * 20 - 10}
                y1={y - 12}
                x2={620 + row.depth * 20}
                y2={y + 6}
                stroke="var(--line-strong)"
                strokeWidth={1}
              />
            ) : null}
            <rect
              x={620 + row.depth * 20}
              y={y - 2}
              width={310 - row.depth * 20}
              height={28}
              rx={6}
              fill={row.depth === 0 ? "var(--c)" : row.depth === 1 ? "var(--c-bg)" : "var(--surface-2)"}
              stroke={row.depth <= 1 ? "var(--c-mid)" : "var(--line)"}
            />
            <text
              x={630 + row.depth * 20}
              y={y + 16}
              className="mono xs b"
              style={{ fill: row.depth === 0 ? "#fff" : "var(--c-ink)" }}
            >
              {row.tag}
            </text>
            <text x={900} y={y + 16} textAnchor="end" className="xs mu">
              {row.note}
            </text>
          </g>
        );
      })}

      <rect x={18} y={376} width={944} height={74} rx={11} fill="var(--c-bg)" stroke="var(--c-mid)" />
      <text x={34} y={398} className="mono xs b ink">
        EXAM CONTRAST
      </text>
      <text x={34} y={418} className="xs">
        Hypertext is a graph of items connected by embedded pointers, so it supports navigation and link analysis.
      </text>
      <text x={34} y={436} className="xs">
        XML is a hierarchical element tree with tags defined by a DTD, so it supports structured zoning, exchange and validation of content.
      </text>
    </svg>
  );
}
