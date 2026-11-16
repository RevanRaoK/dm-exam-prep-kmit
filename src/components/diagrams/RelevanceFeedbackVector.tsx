function px(x: number) {
  return 90 + x * 100;
}

function py(y: number) {
  return 372 - y * 68;
}

const query = { x: 2, y: 2 };
const relevant = { x: 4, y: 4 };
const nonRelevant = { x: 4.4, y: 1 };
const updated = { x: 3.3, y: 3.7 };

const relevantDocs = [
  [4.2, 4.1],
  [3.6, 3.8],
  [4.8, 3.5],
  [4.1, 4.6],
  [3.8, 3.1],
];

const nonRelevantDocs = [
  [4.6, 1.2],
  [4.1, 0.6],
  [5.0, 0.9],
  [4.9, 1.6],
];

export default function RelevanceFeedbackVector() {
  return (
    <svg
      className="svgviz"
      viewBox="0 0 780 470"
      role="img"
      aria-label="Relevance feedback vector shift from the original query towards relevant documents and away from non-relevant documents"
    >
      <defs>
        <marker id="fb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--c)" />
        </marker>
        <marker id="fb-arrow-hot" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--hot)" />
        </marker>
        <marker id="fb-arrow-amber" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--v-amber)" />
        </marker>
      </defs>

      <text x={20} y={22} className="mono xs mu">
        RELEVANCE FEEDBACK · QUERY VECTOR SHIFT IN THE TERM SPACE
      </text>

      {[0, 1, 2, 3, 4, 5].map((tick) => (
        <g key={tick}>
          <line x1={px(tick)} y1={py(0)} x2={px(tick)} y2={py(5)} stroke="var(--line)" strokeWidth={0.7} strokeDasharray="3 4" />
          <line x1={px(0)} y1={py(tick)} x2={px(5)} y2={py(tick)} stroke="var(--line)" strokeWidth={0.7} strokeDasharray="3 4" />
          <text x={px(tick)} y={py(0) + 18} textAnchor="middle" className="mono xs mu">
            {tick}
          </text>
          <text x={px(0) - 12} y={py(tick) + 4} textAnchor="end" className="mono xs mu">
            {tick}
          </text>
        </g>
      ))}
      <line x1={px(0)} y1={py(0)} x2={px(5.2)} y2={py(0)} stroke="var(--line-strong)" strokeWidth={1.3} />
      <line x1={px(0)} y1={py(0)} x2={px(0)} y2={py(5.2)} stroke="var(--line-strong)" strokeWidth={1.3} />
      <text x={px(5.1)} y={py(0) + 34} className="mono xs b">
        term 1
      </text>
      <text x={px(0) - 30} y={py(5.1)} className="mono xs b">
        term 2
      </text>

      {relevantDocs.map(([x, y], index) => (
        <circle key={`rel-${index}`} cx={px(x)} cy={py(y)} r={5.5} fill="var(--ok)" fillOpacity={0.8} />
      ))}
      {nonRelevantDocs.map(([x, y], index) => (
        <circle key={`non-${index}`} cx={px(x)} cy={py(y)} r={5.5} fill="var(--bad)" fillOpacity={0.6} />
      ))}

      <line x1={px(0)} y1={py(0)} x2={px(relevant.x)} y2={py(relevant.y)} stroke="var(--ok)" strokeWidth={2.2} markerEnd="url(#fb-arrow)" />
      <line x1={px(0)} y1={py(0)} x2={px(nonRelevant.x)} y2={py(nonRelevant.y)} stroke="var(--bad)" strokeWidth={2.2} markerEnd="url(#fb-arrow-hot)" />
      <line x1={px(0)} y1={py(0)} x2={px(query.x)} y2={py(query.y)} stroke="var(--c)" strokeWidth={2.4} markerEnd="url(#fb-arrow)" />
      <line x1={px(0)} y1={py(0)} x2={px(updated.x)} y2={py(updated.y)} stroke="var(--v-amber)" strokeWidth={2.6} markerEnd="url(#fb-arrow-amber)" strokeDasharray="6 4" />

      <circle cx={px(query.x)} cy={py(query.y)} r={7} fill="var(--c)" />
      <text x={px(query.x) - 8} y={py(query.y) + 20} textAnchor="end" className="mono xs b ink">
        Q0 (2.0, 2.0)
      </text>
      <circle cx={px(updated.x)} cy={py(updated.y)} r={7} fill="var(--v-amber)" />
      <text x={px(updated.x) + 9} y={py(updated.y) - 7} className="mono xs b" style={{ fill: "var(--v-amber)" }}>
        Q1 (3.3, 3.7)
      </text>
      <text x={px(relevant.x) + 10} y={py(relevant.y) - 5} className="mono xs b" style={{ fill: "var(--ok)" }}>
        centroid of relevant items
      </text>
      <text x={px(nonRelevant.x) + 10} y={py(nonRelevant.y) + 14} className="mono xs b" style={{ fill: "var(--bad)" }}>
        centroid of non-relevant items
      </text>

      <rect x={20} y={398} width={740} height={58} rx={9} fill="var(--c-bg)" stroke="var(--c-mid)" />
      <text x={34} y={418} className="mono xs b ink">
        RULE: Q(new) = Q(old) + α · centroid(relevant) − β · centroid(non-relevant)
      </text>
      <text x={34} y={436} className="xs">
        Positive feedback pulls the query toward terms in relevant items; negative feedback pushes it away from terms in non-relevant items. α and β are tuning weights.
      </text>
      <text x={34} y={450} className="xs mu">
        The updated query ranks the relevant cluster higher while reducing the score of the non-relevant cluster.
      </text>

      <g transform="translate(500, 66)">
        <rect x={0} y={0} width={250} height={70} rx={9} fill="var(--surface)" stroke="var(--line)" />
        <circle cx={16} cy={18} r={5} fill="var(--ok)" />
        <text x={28} y={22} className="xs">
          relevant item
        </text>
        <circle cx={16} cy={38} r={5} fill="var(--bad)" />
        <text x={28} y={42} className="xs">
          non-relevant item
        </text>
        <line x1={8} y1={56} x2={26} y2={56} stroke="var(--c)" strokeWidth={2.4} />
        <text x={34} y={60} className="xs">
          query vector
        </text>
      </g>
    </svg>
  );
}
