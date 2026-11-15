type RowProps = {
  y: number;
  label: string;
  color: string;
  left: [string, string];
  middle: [string, string];
  right: [string, string];
};

function Row({ y, label, color, left, middle, right }: RowProps) {
  const box = (x: number, w: number, title: string, sub: string, accent = false) => (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={62}
        rx={10}
        fill={accent ? color : "var(--surface)"}
        stroke={accent ? color : "var(--line-strong)"}
        strokeWidth={accent ? 1.8 : 1.1}
      />
      <text
        x={x + w / 2}
        y={y + 26}
        textAnchor="middle"
        className="b"
        style={{ fontSize: 12.5, fill: accent ? "#fff" : "var(--fg)" }}
      >
        {title}
      </text>
      <text
        x={x + w / 2}
        y={y + 44}
        textAnchor="middle"
        style={{
          fontSize: 9.5,
          fill: accent ? "rgba(255,255,255,.82)" : "var(--muted)",
          fontFamily: "var(--font-mono)",
        }}
      >
        {sub}
      </text>
    </g>
  );

  return (
    <g>
      <text x={30} y={y - 9} className="mono xs b" style={{ fill: color }}>
        {label}
      </text>
      {box(30, 180, left[0], left[1])}
      {box(290, 180, middle[0], middle[1])}
      {box(550, 180, right[0], right[1], true)}
      <line x1={214} y1={y + 31} x2={278} y2={y + 31} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#cls-arrow)" />
      <line x1={474} y1={y + 31} x2={538} y2={y + 31} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#cls-arrow)" />
      <text x={246} y={y + 23} textAnchor="middle" className="xs mu">
        train
      </text>
      <text x={506} y={y + 23} textAnchor="middle" className="xs mu">
        output
      </text>
    </g>
  );
}

export default function ClassificationTwoStep() {
  return (
    <svg
      className="svgviz"
      viewBox="0 0 760 420"
      role="img"
      aria-label="The two-step classification process with a learning step, evaluation and classification step"
    >
      <defs>
        <marker
          id="cls-arrow"
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

      <Row
        y={55}
        label="STEP 1 · LEARNING"
        color="var(--v-blue)"
        left={["Training set", "class labels are known"]}
        middle={["Learning algorithm", "ID3 · Bayes · rules · k-NN"]}
        right={["Model", "rules / tree / formula"]}
      />
      <Row
        y={190}
        label="EVALUATE THE MODEL"
        color="var(--v-amber)"
        left={["Test set", "independent, labels known"]}
        middle={["Model", "built in step 1"]}
        right={["Accuracy", "percentage classified right"]}
      />
      <Row
        y={325}
        label="STEP 2 · CLASSIFICATION"
        color="var(--c)"
        left={["New tuple", "class label unknown"]}
        middle={["Model", "built in step 1"]}
        right={["Predicted class", "e.g. buys_computer = yes"]}
      />

      <text x={30} y={24} className="xs mu">
        Training data and test data must be separate, or accuracy will be optimistic because of
        overfitting.
      </text>
      <text x={30} y={410} className="xs mu">
        Classification is supervised because every training tuple already carries its class label.
      </text>
    </svg>
  );
}
