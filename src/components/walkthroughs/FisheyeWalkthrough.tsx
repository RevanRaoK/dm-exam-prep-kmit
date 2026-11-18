import StepByStepVisualizer, {
  type WalkthroughStep,
} from "../StepByStepVisualizer";
import { Kpis, MiniTable, SlideNote } from "./shared";

const focusX = 380;
const focusY = 160;
const radius = 150;
const deflection = 0.05;
const scale = radius / Math.log(1 + deflection * radius);

function FisheyeFrame({ lens = false, distort = false }: { lens?: boolean; distort?: boolean }) {
  const cells: { x: number; y: number; size: number }[] = [];
  for (let row = 0; row < 11; row += 1) {
    for (let col = 0; col < 22; col += 1) {
      const x = 30 + col * 34;
      const y = 44 + row * 24;
      let nx = x;
      let ny = y;
      if (distort) {
        const dx = x - focusX;
        const dy = y - focusY;
        const r = Math.hypot(dx, dy);
        if (r < radius && r > 0.0001) {
          const nr = scale * Math.log(1 + deflection * r);
          nx = focusX + (dx / r) * nr;
          ny = focusY + (dy / r) * nr;
        }
      }
      cells.push({ x: nx, y: ny, size: distort ? 4 : 3 });
    }
  }
  return (
    <svg className="svgviz" viewBox="0 0 800 320" role="img" aria-label="A grid of dots before and after fisheye distortion">
      <rect x={20} y={24} width={760} height={270} rx={10} fill="var(--surface)" stroke="var(--line)" />
      {cells.map((cell, index) => (
        <circle
          key={index}
          cx={cell.x}
          cy={cell.y}
          r={cell.size}
          fill={distort ? "var(--v-violet)" : "var(--v-blue)"}
          fillOpacity={0.75}
        />
      ))}
      {lens ? (
        <>
          <circle cx={focusX} cy={focusY} r={radius} fill="none" stroke="var(--v-pink)" strokeWidth={2} strokeDasharray="6 4" />
          <circle cx={focusX} cy={focusY} r={4} fill="var(--v-pink)" />
          <text x={focusX + 8} y={focusY - 8} className="xs" style={{ fill: "var(--v-pink)" }}>
            focus (cx, cy)
          </text>
          <text x={focusX + radius - 12} y={focusY - 8} textAnchor="end" className="xs mu">
            radius rl
          </text>
        </>
      ) : null}
      <text x={32} y={286} className="xs mu">
        {distort ? "Distorted: the centre is stretched, the edge is fixed, and the outside is untouched." : "Undistorted grid of marks."}
      </text>
    </svg>
  );
}

const values = [
  ["0", "0.0"],
  ["10", "22.6"],
  ["25", "45.3"],
  ["50", "69.9"],
  ["75", "87.0"],
  ["100", "100.0"],
];

const steps: WalkthroughStep[] = [
  {
    title: "Focus plus context",
    bullets: [
      "A fisheye lens works like a peephole: the middle looks big, while the edges are squeezed but still visible.",
      "This is **focus + context**, the central idea of screen-space distortion.",
      "The lens changes only the **distance from the centre**, never the direction of a pixel.",
    ],
    visual: <FisheyeFrame lens />,
  },
  {
    title: "The transformation",
    bullets: [
      "Choose a centre (cx, cy), a lens radius **rl** and a deflection amount **d**.",
      "Convert every pixel to polar coordinates. Inside the lens, replace the radius by **r_new = s × log(1 + d × r_old)**.",
      "A common scale choice fixes the lens edge: **s = rl / ln(1 + d × rl)**; for rl = 100 and d = 0.05, s ≈ 55.8.",
    ],
    visual: (
      <div className="slide-tables">
        <MiniTable head={["r_old", "r_new"]} rows={values} caption="The centre is stretched strongly; the lens edge stays fixed." />
        <div>
          <Kpis items={["Magnify centre", "Keep edge fixed", "Log profile", "Interpolate gaps"]} />
          <SlideNote>
            At the centre the magnification is about s × d ≈ 2.8 times for the values above.
          </SlideNote>
        </div>
      </div>
    ),
  },
  {
    title: "Run the algorithm on the grid",
    bullets: [
      "Clear the output image.",
      "For each pixel, compute its polar coordinates and test whether it is inside the lens radius.",
      "Inside: compute the new radius, fetch the source colour and write the output pixel. Outside: copy the original pixel.",
      "Stretching leaves **gaps**, filled by interpolation; squeezing makes pixels **overlap**, which is harmless.",
    ],
    visual: <FisheyeFrame lens distort />,
  },
  {
    title: "Tune the shape",
    bullets: [
      "A larger **d** magnifies the centre more strongly.",
      "A larger **rl** covers more of the picture.",
      "For text, a **piecewise-linear function with a flat top** keeps magnified words evenly readable.",
    ],
    visual: <FisheyeFrame distort />,
  },
  {
    title: "Object-space companion: the perspective wall",
    bullets: [
      "The **perspective wall** is the 3-D counterpart: one panel faces the viewer, and side panels fade into the distance.",
      "The front panel is a horizontal scaling; the side panels add distance-dependent scaling and shear.",
      "Users move by sequential page flips or jump with **index tabs**.",
      "Exam contrast: fisheye = screen space (pixels); perspective wall = object space (3-D panels).",
    ],
    visual: (
      <svg className="svgviz" viewBox="0 0 800 280" role="img" aria-label="Perspective wall with a flat front panel and side panels fading into the distance">
        <defs>
          <linearGradient id="pw-fade" x1="0" x2="1">
            <stop offset="0" stopColor="var(--v-violet)" stopOpacity="0.7" />
            <stop offset="1" stopColor="var(--v-violet)" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <polygon points="250,70 550,70 550,210 250,210" fill="var(--c-bg)" stroke="var(--c)" strokeWidth={2} />
        <polygon points="120,100 250,70 250,210 120,190" fill="url(#pw-fade)" stroke="var(--v-violet)" strokeWidth={1.4} />
        <polygon points="550,70 680,100 680,190 550,210" fill="url(#pw-fade)" stroke="var(--v-violet)" strokeWidth={1.4} />
        <text x={400} y={146} textAnchor="middle" className="b" style={{ fontSize: 15, fill: "var(--c-ink)" }}>
          front panel
        </text>
        <text x={400} y={168} textAnchor="middle" className="xs mu">
          full detail
        </text>
        <text x={160} y={146} textAnchor="middle" className="xs mu">
          page −1
        </text>
        <text x={640} y={146} textAnchor="middle" className="xs mu">
          page +1
        </text>
        <text x={400} y={252} textAnchor="middle" className="xs mu">
          side panels shrink by perspective; tabs allow jumps
        </text>
      </svg>
    ),
  },
];

export default function FisheyeWalkthrough() {
  return (
    <StepByStepVisualizer
      title="Fisheye Lens & Perspective Wall"
      subtitle="Screen-space focus + context with a log radius transform, then the object-space perspective wall."
      steps={steps}
    />
  );
}
