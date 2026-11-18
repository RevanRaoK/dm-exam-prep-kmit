import type { ComponentType } from "react";
import { useId } from "react";
import VisualizationPipeline from "./VisualizationPipeline";
import DataTypeTaxonomy from "./DataTypeTaxonomy";
import VisualVariablesDiagram from "./VisualVariablesDiagram";
import PerceptionStages from "./PerceptionStages";
import GeoPhenomena from "./GeoPhenomena";
import FlowVisualizationDiagram from "./FlowVisualizationDiagram";
import CombiningTechniquesDiagram from "./CombiningTechniquesDiagram";
import MapProjections from "./MapProjections";
import ScatterplotMatrixDiagram from "./ScatterplotMatrixDiagram";
import MultivariateTaxonomy from "./MultivariateTaxonomy";
import InteractionFramework from "./InteractionFramework";
import TextVisualizationDiagram from "./TextVisualizationDiagram";

export type DiagramInfo = {
  id: string;
  title: string;
  caption: string;
  unit: string;
  wide?: boolean;
  component: ComponentType;
};

export const diagrams: DiagramInfo[] = [
  {
    id: "pipeline",
    title: "The Data Visualization Pipeline",
    caption:
      "Data modelling, data selection, data-to-visual mapping, scene parameter setting and rendering. User interaction is possible at every stage, and each link is a many-to-many mapping.",
    unit: "unit1",
    wide: true,
    component: VisualizationPipeline,
  },
  {
    id: "data-taxonomy",
    title: "Data Types & Measurement Scales",
    caption:
      "Ordinal data splits into binary, discrete and continuous; nominal data splits into categorical, ranked and arbitrary. The scale attributes are ordering, distance and absolute zero.",
    unit: "unit1",
    wide: true,
    component: DataTypeTaxonomy,
  },
  {
    id: "visual-variables",
    title: "The Eight Visual Variables",
    caption:
      "Position, mark/shape, size, brightness, colour, orientation, texture and motion. Position is the most accurate variable; colour is the most misused one.",
    unit: "unit2",
    wide: true,
    component: VisualVariablesDiagram,
  },
  {
    id: "perception-stages",
    title: "The Three-Stage Model of Perception",
    caption:
      "Stage 1 extracts low-level features in parallel, Stage 2 groups them into patterns, and Stage 3 answers visual queries with a few objects held in working memory.",
    unit: "unit2",
    wide: true,
    component: PerceptionStages,
  },
  {
    id: "geo-types",
    title: "Point, Line, Area & Surface Phenomena",
    caption:
      "The dimension grows from point (0-D) to line (1-D), area (2-D) and surface (2.5-D). The data kind plus the nominal/ordinal measurement decides the map type.",
    unit: "unit3",
    wide: true,
    component: GeoPhenomena,
  },
  {
    id: "flow-viz",
    title: "Dynamic Data & Flow Visualization",
    caption:
      "Arrow glyphs show vectors directly; streamlines follow the tangent field; streaklines show continuously released particles; line integral convolution smears a texture along the flow to make a dense display.",
    unit: "unit3",
    wide: true,
    component: FlowVisualizationDiagram,
  },
  {
    id: "combine-viz",
    title: "Combining Visualization Techniques",
    caption:
      "Slice plus isosurface, isosurface plus glyphs, and rubber sheet plus contours and colour. Each component adds a strength, and users can hide either component to build their mental model incrementally.",
    unit: "unit3",
    wide: true,
    component: CombiningTechniquesDiagram,
  },
  {
    id: "projections",
    title: "Map Projections: Cylinder, Plane & Cone",
    caption:
      "A projection flattens the globe and always distorts something. Cylindrical suits the whole world, planar suits direction from the centre, and conic suits mid-latitudes.",
    unit: "unit3",
    wide: true,
    component: MapProjections,
  },
  {
    id: "scatter-matrix",
    title: "Scatterplot Matrix for Four Dimensions",
    caption:
      "A scatterplot matrix has N² cells. Every pair appears twice, rotated by 90°, and the diagonal cells carry the dimension names or histograms.",
    unit: "unit4",
    wide: true,
    component: ScatterplotMatrixDiagram,
  },
  {
    id: "mv-taxonomy",
    title: "Multivariate Technique Taxonomy",
    caption:
      "Point, line, region, glyph and pixel techniques, plus trees, graphs and text. The data structure and task decide the family, not visual fashion.",
    unit: "unit4",
    wide: true,
    component: MultivariateTaxonomy,
  },
  {
    id: "text-viz",
    title: "Text & Document Visualization at a Glance",
    caption:
      "Vector-space weighting, word clouds, word trees, TileBars, ThemeRiver and SOM. Each technique shows a different property of text: frequency, context, position, distribution or similarity.",
    unit: "unit4",
    wide: true,
    component: TextVisualizationDiagram,
  },
  {
    id: "interaction-framework",
    title: "Interaction Operators, Spaces & Parameters",
    caption:
      "Seven operators act on six operand spaces, and every interaction is described by focus, extents, transformation and blender. Animating transformations and interaction control complete the eight techniques.",
    unit: "unit5",
    wide: true,
    component: InteractionFramework,
  },
];

export function DiagramById({ id }: { id: string }) {
  const info = diagrams.find((diagram) => diagram.id === id);
  const instanceId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  if (!info) return null;
  const Component = info.component;
  return (
    <figure
      className={`diagram-card ${info.wide ? "wide" : ""}`}
      id={`diagram-${info.id}-${instanceId}`}
    >
      <div className="diagram-title">Reference diagram · theme-matched SVG</div>
      <h3>{info.title}</h3>
      <Component />
      <figcaption className="cap">{info.caption}</figcaption>
    </figure>
  );
}
