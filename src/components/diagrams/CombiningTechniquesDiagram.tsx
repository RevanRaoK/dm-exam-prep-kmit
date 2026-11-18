export default function CombiningTechniquesDiagram() {
  return (
    <svg
      className="svgviz"
      viewBox="0 0 1020 400"
      role="img"
      aria-label="Combining visualization techniques: slice plus isosurface, isosurface plus glyphs, and rubber sheet plus contours and colour"
    >
      <text x={20} y={24} className="mono xs mu">
        COMBINING TECHNIQUES · THE SUM OF THE STRENGTHS
      </text>

      <rect x={20} y={44} width={300} height={290} rx={12} fill="var(--surface-2)" />
      <text x={34} y={68} className="b" style={{ fontSize: 12.5, fill: "var(--v-blue)" }}>
        Slice + isosurface
      </text>
      <ellipse cx={168} cy={154} rx={90} ry={52} fill="var(--v-blue)" fillOpacity={0.18} stroke="var(--v-blue)" strokeWidth={1.8} />
      <ellipse cx={168} cy={154} rx={56} ry={30} fill="none" stroke="var(--v-blue)" strokeWidth={1.2} strokeDasharray="4 3" />
      <rect x={80} y={168} width={176} height={58} rx={3} fill="var(--v-amber)" fillOpacity={0.35} stroke="var(--v-amber)" strokeWidth={1.4} transform="rotate(-12 168 197)" />
      <text x={34} y={286} className="xs mu">
        surface structure + detailed 2-D distribution
      </text>
      <text x={34} y={304} className="xs mu">
        hide either component / vary opacity
      </text>

      <rect x={360} y={44} width={300} height={290} rx={12} fill="var(--surface-2)" />
      <text x={374} y={68} className="b" style={{ fontSize: 12.5, fill: "var(--v-teal)" }}>
        Isosurface + glyphs
      </text>
      <path d="M440 198 C460 120, 560 112, 600 162 C630 200, 590 240, 528 236 C470 232, 430 226, 440 198 Z" fill="var(--v-teal)" fillOpacity={0.18} stroke="var(--v-teal)" strokeWidth={1.8} />
      {[
        [470, 160, -30],
        [510, 138, 5],
        [560, 148, 28],
        [592, 184, 50],
        [540, 212, 78],
        [482, 206, 110],
      ].map(([x, y, angle], index) => (
        <g key={index} transform={`rotate(${angle} ${x} ${y})`}>
          <line x1={x - 12} y1={y} x2={x + 12} y2={y} stroke="var(--v-pink)" strokeWidth={2.2} markerEnd="url(#cb-arrow)" />
        </g>
      ))}
      <defs>
        <marker id="cb-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--v-pink)" />
        </marker>
      </defs>
      <text x={374} y={286} className="xs mu">
        surface + magnitude and direction
      </text>
      <text x={374} y={304} className="xs mu">
        glyph density, size and colour
      </text>

      <rect x={700} y={44} width={300} height={290} rx={12} fill="var(--surface-2)" />
      <text x={714} y={68} className="b" style={{ fontSize: 12.5, fill: "var(--v-amber)" }}>
        Rubber sheet + contours + colour
      </text>
      <path d="M730 226 C760 180, 790 196, 820 154 C850 112, 890 130, 910 108 L960 108 L960 246 L730 246 Z" fill="var(--v-amber)" fillOpacity={0.22} stroke="var(--v-amber)" strokeWidth={1.6} />
      {[0, 1, 2].map((index) => (
        <path
          key={index}
          d={`M746 ${232 - index * 16} C786 ${208 - index * 16}, 824 ${222 - index * 16}, 856 ${186 - index * 16} C888 ${150 - index * 16}, 922 ${160 - index * 16}, 944 ${142 - index * 16}`}
          fill="none"
          stroke="var(--v-amber)"
          strokeWidth={1.2}
          strokeOpacity={0.8}
        />
      ))}
      {[0, 1, 2, 3, 4].map((index) => (
        <rect key={index} x={932} y={104 + index * 28} width={16} height={24} rx={3} fill="var(--v-amber)" fillOpacity={0.15 + index * 0.18} />
      ))}
      <text x={714} y={286} className="xs mu">
        height + colour + contour lines = redundant mapping
      </text>
      <text x={714} y={304} className="xs mu">
        peaks, valleys and gradients all visible
      </text>

      <rect x={20} y={352} width={980} height={30} rx={7} fill="var(--c-bg)" stroke="var(--c-mid)" />
      <text x={32} y={371} className="xs b ink">
        Combine only when the strengths add and occlusion is controlled; let the user show or hide each component.
      </text>
    </svg>
  );
}
