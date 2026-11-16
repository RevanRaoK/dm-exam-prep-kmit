type BoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  number?: string;
  title: string;
  sub: string;
  color: string;
  fill?: string;
  textFill?: string;
};

function Box({
  x,
  y,
  w,
  h,
  number,
  title,
  sub,
  color,
  fill = "var(--surface)",
  textFill = "var(--fg)",
}: BoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={11}
        fill={fill}
        stroke={color}
        strokeWidth={1.7}
      />
      {number ? (
        <>
          <circle cx={x + 17} cy={y + 16} r={8} fill={color} fillOpacity={0.14} stroke={color} />
          <text
            x={x + 17}
            y={y + 19}
            textAnchor="middle"
            className="mono xs b"
            style={{ fill: color }}
          >
            {number}
          </text>
        </>
      ) : null}
      <text
        x={number ? x + 32 : x + 12}
        y={y + 21}
        className="b"
        style={{ fontSize: 12, fill: textFill }}
      >
        {title}
      </text>
      <text
        x={x + w / 2}
        y={y + h - 12}
        textAnchor="middle"
        style={{
          fontSize: 8.5,
          fill: textFill === "#fff" ? "rgba(255,255,255,.82)" : "var(--muted)",
          fontFamily: "var(--font-mono)",
        }}
      >
        {sub}
      </text>
    </g>
  );
}

export default function IrsProcesses() {
  return (
    <svg
      className="svgviz"
      viewBox="0 0 980 500"
      role="img"
      aria-label="The four major functional processes of an information storage and retrieval system"
    >
      <defs>
        <marker
          id="proc-arrow"
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
        TOTAL INFORMATION STORAGE AND RETRIEVAL SYSTEM · FOUR FUNCTIONAL PROCESSES
      </text>

      <Box
        x={18}
        y={112}
        w={132}
        h={62}
        title="Item input"
        sub="documents · audio · video · images"
        color="var(--line-strong)"
      />

      <Box
        x={190}
        y={100}
        w={190}
        h={86}
        number="1"
        title="Item normalization"
        sub="standardize · zone · tokens · stem"
        color="var(--c)"
        fill="var(--c)"
        textFill="#fff"
      />

      <Box
        x={430}
        y={44}
        w={186}
        h={76}
        title="Document file creation"
        sub="normalized item + document manager"
        color="var(--v-teal)"
      />

      <Box
        x={430}
        y={162}
        w={186}
        h={76}
        title="Automatic file build"
        sub="extract candidate index records"
        color="var(--v-amber)"
      />

      <Box
        x={668}
        y={44}
        w={150}
        h={76}
        title="Document database"
        sub="all received items · archived"
        color="var(--v-teal)"
      />

      <Box
        x={668}
        y={132}
        w={150}
        h={60}
        title="Public index file"
        sub="professional library service"
        color="var(--v-amber)"
      />

      <Box
        x={668}
        y={206}
        w={150}
        h={60}
        title="Private index file"
        sub="one or more per user"
        color="var(--v-amber)"
      />

      <Box
        x={858}
        y={44}
        w={104}
        h={76}
        title="User query"
        sub="short and focused"
        color="var(--v-blue)"
      />

      <Box
        x={858}
        y={132}
        w={104}
        h={60}
        title="Profile"
        sub="broad standing interest"
        color="var(--v-pink)"
      />

      <Box
        x={858}
        y={206}
        w={104}
        h={60}
        title="Mail file"
        sub="new matching items"
        color="var(--v-pink)"
      />

      <Box
        x={190}
        y={292}
        w={190}
        h={82}
        number="2"
        title="Selective dissemination"
        sub="profile scan → mail file (push)"
        color="var(--v-pink)"
      />

      <Box
        x={430}
        y={292}
        w={186}
        h={82}
        number="3"
        title="Document database search"
        sub="query → hit file (pull)"
        color="var(--v-teal)"
      />

      <Box
        x={668}
        y={292}
        w={150}
        h={82}
        number="4"
        title="Index database search"
        sub="search index, then referenced items"
        color="var(--v-amber)"
      />

      <Box
        x={858}
        y={292}
        w={104}
        h={82}
        title="Hit file"
        sub="ranked references to items"
        color="var(--v-blue)"
      />

      <line x1={150} y1={143} x2={190} y2={143} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#proc-arrow)" />
      <line x1={380} y1={128} x2={430} y2={86} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#proc-arrow)" />
      <line x1={380} y1={158} x2={430} y2={196} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#proc-arrow)" />
      <line x1={616} y1={82} x2={668} y2={82} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#proc-arrow)" />
      <line x1={616} y1={190} x2={668} y2={164} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#proc-arrow)" />
      <line x1={616} y1={216} x2={668} y2={232} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#proc-arrow)" />
      <line x1={818} y1={82} x2={858} y2={82} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#proc-arrow)" />
      <line x1={818} y1={162} x2={858} y2={162} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#proc-arrow)" />
      <line x1={858} y1={192} x2={818} y2={222} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#proc-arrow)" />
      <line x1={910} y1={120} x2={910} y2={206} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#proc-arrow)" />
      <path d="M285 188 L285 292" fill="none" stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#proc-arrow)" />
      <text x={295} y={250} className="xs mu">
        new item vs every profile
      </text>
      <line x1={380} y1={333} x2={430} y2={333} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#proc-arrow)" />
      <line x1={616} y1={333} x2={668} y2={333} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#proc-arrow)" />
      <line x1={818} y1={333} x2={858} y2={333} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#proc-arrow)" />
      <path d="M742 272 L742 292" fill="none" stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#proc-arrow)" />
      <path d="M742 266 L742 266" fill="none" />
      <path d="M742 132 L742 120" fill="none" />
      <path d="M742 120 L742 120" fill="none" />

      <text x={20} y={408} className="xs mu">
        Item normalization feeds both the archival document database and automatic file build.
      </text>
      <text x={20} y={424} className="xs mu">
        SDI compares new items with every profile; document and index searches compare queries with stored items.
      </text>
      <text x={20} y={440} className="xs mu">
        Index search may retrieve the index record alone or follow it to the referenced document through a combined file search.
      </text>

      <rect x={18} y={460} width={944} height={28} rx={7} fill="var(--c-bg)" stroke="var(--c-mid)" />
      <text x={30} y={478} className="xs b ink">
        Exam line: four processes = item normalization · selective dissemination · document database search · index database search with automatic file build.
      </text>
    </svg>
  );
}
