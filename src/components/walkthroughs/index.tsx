import type { ComponentType } from "react";
import PipelineWalkthrough from "./PipelineWalkthrough";
import PreprocessWalkthrough from "./PreprocessWalkthrough";
import ScatterWalkthrough from "./ScatterWalkthrough";
import ParallelCoordinatesWalkthrough from "./ParallelCoordinatesWalkthrough";
import FisheyeWalkthrough from "./FisheyeWalkthrough";
import TreemapWalkthrough from "./TreemapWalkthrough";

export type WalkthroughInfo = {
  id: string;
  label: string;
  blurb: string;
  component: ComponentType;
};

export const walkthroughs: WalkthroughInfo[] = [
  {
    id: "pipeline",
    label: "Visualization Pipeline",
    blurb: "Data → modelling → selection → mapping → scene → render, with interaction",
    component: PipelineWalkthrough,
  },
  {
    id: "preprocess",
    label: "Data Preprocessing",
    blurb: "Missing values · normalization · nominal mapping · aggregation",
    component: PreprocessWalkthrough,
  },
  {
    id: "scatter",
    label: "Scatterplot Mapping",
    blurb: "x and y, then colour and size as extra dimensions · overplotting",
    component: ScatterWalkthrough,
  },
  {
    id: "pcp",
    label: "Parallel Coordinates",
    blurb: "Inselberg 1985 · one polyline per record · axis reordering",
    component: ParallelCoordinatesWalkthrough,
  },
  {
    id: "fisheye",
    label: "Fisheye & Perspective Wall",
    blurb: "Focus + context · log radius transform · object-space wall",
    component: FisheyeWalkthrough,
  },
  {
    id: "treemap",
    label: "Treemap Layout",
    blurb: "Space-filling hierarchy · rectangle subdivision · sunburst & node-link",
    component: TreemapWalkthrough,
  },
];

export function WalkthroughById({ id }: { id: string }) {
  const item = walkthroughs.find((walkthrough) => walkthrough.id === id);
  if (!item) return null;
  const Component = item.component;
  return <Component />;
}

export function getWalkthroughInfo(id: string) {
  return walkthroughs.find((walkthrough) => walkthrough.id === id);
}
