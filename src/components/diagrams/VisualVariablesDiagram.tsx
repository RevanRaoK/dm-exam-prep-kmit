export default function VisualVariablesDiagram() {
  const cards = [
    { x: 18, y: 54, title: "1 · Position", sub: "greatest accuracy", color: "var(--v-violet)" },
    { x: 288, y: 54, title: "2 · Mark / shape", sub: "identity and category", color: "var(--v-teal)" },
    { x: 558, y: 54, title: "3 · Size", sub: "length, area, volume", color: "var(--v-blue)" },
    { x: 828, y: 54, title: "4 · Brightness", sub: "luminance", color: "var(--v-amber)" },
    { x: 18, y: 254, title: "5 · Colour", sub: "hue and saturation", color: "var(--v-pink)" },
    { x: 288, y: 254, title: "6 · Orientation", sub: "rotation and direction", color: "var(--v-amber)" },
    { x: 558, y: 254, title: "7 · Texture", sub: "pattern in a region", color: "var(--v-olive)" },
    { x: 828, y: 254, title: "8 · Motion", sub: "change over time", color: "var(--v-teal)" },
  ];
  const points = [
    [44, 170], [78, 148], [98, 182], [132, 162], [165, 195], [196, 142], [224, 178],
  ];
  return (
    <svg
      className="svgviz"
      viewBox="0 0 1120 470"
      role="img"
      aria-label="The eight visual variables with an example of each"
    >
      <text x={20} y={24} className="mono xs mu">
        THE EIGHT VISUAL VARIABLES
      </text>
      <text x={20} y={42} className="xs mu">
        Position first, then mark, size, brightness, colour, orientation, texture and motion.
      </text>

      {cards.map((card) => (
        <g key={card.title}>
          <rect x={card.x} y={card.y} width={256} height={176} rx={13} fill="var(--surface)" stroke="var(--line)" />
          <circle cx={card.x + 16} cy={card.y + 18} r={5} fill={card.color} />
          <text x={card.x + 28} y={card.y + 22} className="b" style={{ fontSize: 13, fill: card.color }}>
            {card.title}
          </text>
          <text x={card.x + 16} y={card.y + 40} className="xs mu">
            {card.sub}
          </text>
        </g>
      ))}

      {points.map(([x, y], index) => (
        <circle key={index} cx={x} cy={y} r={5.5} fill="var(--v-violet)" fillOpacity={0.8} />
      ))}
      <text x={36} y={214} className="xs mu">
        x, y encode two values
      </text>

      <circle cx={316} cy={164} r={9} fill="var(--v-teal)" />
      <rect x={344} y={154} width={18} height={18} rx={3} fill="var(--v-teal)" />
      <path d="M390 172 L400 152 L410 172 Z" fill="var(--v-teal)" />
      <path d="M428 152 L442 152 L435 170 Z" fill="var(--v-teal)" />
      <text x={304} y={214} className="xs mu">
        circle, square, triangle, diamond
      </text>

      <circle cx={588} cy={168} r={5} fill="var(--v-blue)" />
      <circle cx={622} cy={162} r={11} fill="var(--v-blue)" fillOpacity={0.85} />
      <circle cx={664} cy={154} r={22} fill="var(--v-blue)" fillOpacity={0.65} />
      <text x={582} y={214} className="xs mu">
        radius shows magnitude
      </text>

      {[0, 1, 2, 3, 4].map((index) => (
        <rect
          key={index}
          x={854 + index * 28}
          y={150}
          width={22}
          height={30}
          rx={3}
          fill="var(--v-amber)"
          fillOpacity={0.18 + index * 0.18}
        />
      ))}
      <text x={848} y={214} className="xs mu">
        light → dark
      </text>

      {["#0f766e", "#2563eb", "#7c3aed", "#be185d", "#b45309", "#4d7c0f"].map((color, index) => (
        <rect key={color} x={40 + index * 30} y={350} width={24} height={30} rx={4} fill={color} />
      ))}
      <text x={36} y={404} className="xs mu">
        hue carries category; lightness adds order
      </text>

      {[0, 1, 2, 3].map((index) => {
        const angle = -35 + index * 30;
        const cx = 320 + index * 34;
        const cy = 370;
        return (
          <g key={index} transform={`rotate(${angle} ${cx} ${cy})`}>
            <line x1={cx} y1={cy + 12} x2={cx} y2={cy - 14} stroke="var(--v-amber)" strokeWidth={2.4} markerEnd="url(#vv-arrow)" />
          </g>
        );
      })}
      <defs>
        <marker id="vv-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--v-amber)" />
        </marker>
      </defs>
      <text x={300} y={404} className="xs mu">
        direction or rotation angle
      </text>

      <rect x={586} y={344} width={70} height={46} rx={5} fill="var(--surface-2)" stroke="var(--line)" />
      {[0, 1, 2, 3, 4].map((index) => (
        <line
          key={index}
          x1={590 + index * 14}
          y1={348}
          x2={578 + index * 14}
          y2={386}
          stroke="var(--v-olive)"
          strokeWidth={2}
        />
      ))}
      <rect x={664} y={344} width={70} height={46} rx={5} fill="var(--surface-2)" stroke="var(--line)" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={672 + col * 13}
            cy={352 + row * 10}
            r={1.8}
            fill="var(--v-olive)"
          />
        )),
      )}
      <text x={588} y={404} className="xs mu">
        dashes, hatching, dots
      </text>

      <circle cx={862} cy={368} r={8} fill="var(--v-teal)" fillOpacity={0.35} />
      <circle cx={886} cy={368} r={8} fill="var(--v-teal)" fillOpacity={0.55} />
      <circle cx={910} cy={368} r={8} fill="var(--v-teal)" fillOpacity={0.75} />
      <circle cx={944} cy={368} r={8} fill="var(--v-teal)" />
      <line x1={858} y1={386} x2={948} y2={386} stroke="var(--v-teal)" strokeWidth={1.4} markerEnd="url(#vv-arrow)" />
      <text x={858} y={404} className="xs mu">
        path, speed, flashing
      </text>
    </svg>
  );
}
