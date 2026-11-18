export default function TextVisualizationDiagram() {
  const words = [
    { text: "document", size: 26, x: 70, y: 108, color: "var(--v-violet)" },
    { text: "word", size: 17, x: 145, y: 82, color: "var(--v-teal)" },
    { text: "frequency", size: 20, x: 190, y: 122, color: "var(--v-blue)" },
    { text: "context", size: 12, x: 88, y: 142, color: "var(--v-amber)" },
    { text: "corpus", size: 10, x: 210, y: 68, color: "var(--v-pink)" },
    { text: "token", size: 14, x: 240, y: 148, color: "var(--v-olive)" },
    { text: "theme", size: 11, x: 48, y: 76, color: "var(--v-teal)" },
  ];
  return (
    <svg
      className="svgviz"
      viewBox="0 0 1120 470"
      role="img"
      aria-label="Text visualization techniques: vector space model, word cloud, word tree, TileBars, ThemeRiver and SOM"
    >
      <text x={20} y={24} className="mono xs mu">
        TEXT & DOCUMENT VISUALIZATION · SIX SMALL VIEWS
      </text>

      <rect x={18} y={44} width={340} height={180} rx={12} fill="var(--surface)" stroke="var(--line)" />
      <text x={32} y={68} className="b" style={{ fontSize: 12, fill: "var(--v-violet)" }}>
        Vector space model + tf-idf
      </text>
      <text x={32} y={92} className="mono xs" style={{ fill: "var(--fg)" }}>
        w = Tf(w) × log(N / Df(w))
      </text>
      {["document", "term", "query"].map((label, index) => (
        <g key={label}>
          <rect x={40} y={110 + index * 34} width={80} height={20} rx={4} fill="var(--surface-2)" stroke="var(--line)" />
          <text x={50} y={124 + index * 34} className="xs mu">
            {label}
          </text>
          {[0.7, 0.4, 0.9].map((value, cell) => (
            <rect
              key={cell}
              x={140 + cell * 52}
              y={110 + index * 34}
              width={44}
              height={20}
              rx={4}
              fill="var(--v-violet)"
              fillOpacity={0.15 + value * 0.7}
            />
          ))}
        </g>
      ))}
      <text x={140} y={212} className="xs mu">
        high weight = frequent here, rare elsewhere
      </text>

      <rect x={378} y={44} width={340} height={180} rx={12} fill="var(--surface)" stroke="var(--line)" />
      <text x={392} y={68} className="b" style={{ fontSize: 12, fill: "var(--v-teal)" }}>
        Word cloud
      </text>
      {words.map((word) => (
        <text
          key={word.text}
          x={378 + word.x}
          y={44 + word.y}
          className="b"
          style={{ fontSize: word.size, fill: word.color }}
        >
          {word.text}
        </text>
      ))}

      <rect x={738} y={44} width={364} height={180} rx={12} fill="var(--surface)" stroke="var(--line)" />
      <text x={752} y={68} className="b" style={{ fontSize: 12, fill: "var(--v-blue)" }}>
        Word tree · root: genetically
      </text>
      <text x={752} y={104} className="b" style={{ fontSize: 18, fill: "var(--v-blue)" }}>
        genetically
      </text>
      {[
        ["engineered", 20, 134, "var(--v-teal)"],
        ["modified", 15, 168, "var(--v-amber)"],
        ["food", 13, 196, "var(--v-pink)"],
      ].map(([label, size, y, color]) => (
        <g key={label as string}>
          <path d={`M838 100 L880 ${(y as number) - 10} L908 ${(y as number) - 10}`} fill="none" stroke="var(--line-strong)" />
          <text x={916} y={y as number} className="b" style={{ fontSize: size as number, fill: color as string }}>
            {label}
          </text>
          <text x={1040} y={y as number} className="xs mu">
            {label === "engineered" ? "organisms" : label === "modified" ? "crops" : "debate"}
          </text>
        </g>
      ))}

      <rect x={18} y={244} width={340} height={196} rx={12} fill="var(--surface)" stroke="var(--line)" />
      <text x={32} y={268} className="b" style={{ fontSize: 12, fill: "var(--v-pink)" }}>
        TileBars · search results
      </text>
      {[0, 1, 2].map((row) => (
        <g key={row}>
          <text x={32} y={298 + row * 42} className="xs mu">
            doc {String.fromCharCode(65 + row)}
          </text>
          {[0, 1, 2, 3, 4].map((seg) => (
            <rect
              key={seg}
              x={80 + seg * 42}
              y={286 + row * 42}
              width={38}
              height={26}
              rx={3}
              fill="var(--v-pink)"
              fillOpacity={seg === 2 ? 0.18 + row * 0.24 : 0.08 + ((seg + row) % 3) * 0.12}
            />
          ))}
        </g>
      ))}
      <text x={32} y={418} className="xs mu">
        width = document length · darkness = term frequency
      </text>

      <rect x={378} y={244} width={340} height={196} rx={12} fill="var(--surface)" stroke="var(--line)" />
      <text x={392} y={268} className="b" style={{ fontSize: 12, fill: "var(--v-amber)" }}>
        ThemeRiver · themes over time
      </text>
      <path d="M400 384 C450 350 500 366 548 340 C596 314 640 328 700 302 L700 348 C640 368 596 356 548 382 C500 408 450 396 400 414 Z" fill="var(--v-blue)" fillOpacity={0.45} />
      <path d="M400 344 C450 322 500 338 548 318 C596 298 640 308 700 288 L700 302 C640 328 596 314 548 340 C500 366 450 350 400 384 Z" fill="var(--v-teal)" fillOpacity={0.45} />
      <path d="M400 320 C460 302 520 316 580 300 C630 288 670 292 700 286 L700 288 C640 308 596 298 548 318 C500 338 450 322 400 344 Z" fill="var(--v-pink)" fillOpacity={0.38} />
      <text x={400} y={426} className="xs mu">
        January
      </text>
      <text x={670} y={426} className="xs mu">
        March
      </text>

      <rect x={738} y={244} width={364} height={196} rx={12} fill="var(--surface)" stroke="var(--line)" />
      <text x={752} y={268} className="b" style={{ fontSize: 12, fill: "var(--v-olive)" }}>
        SOM · similar documents together
      </text>
      {Array.from({ length: 36 }).map((_, index) => {
        const row = Math.floor(index / 6);
        const col = index % 6;
        const group = row < 2 ? 0 : row < 4 ? 1 : 2;
        const shade = [0.25, 0.55, 0.8][group] + ((index * 7) % 5) * 0.03;
        const color = ["var(--v-teal)", "var(--v-violet)", "var(--v-amber)"][group];
        return (
          <rect
            key={index}
            x={768 + col * 50}
            y={286 + row * 22}
            width={44}
            height={17}
            rx={3}
            fill={color}
            fillOpacity={shade}
          />
        );
      })}
      <text x={752} y={426} className="xs mu">
        the grid preserves neighbourhood; radius shrinks during training
      </text>
    </svg>
  );
}
