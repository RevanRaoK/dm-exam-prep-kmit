import type { ComponentType } from "react";
import { useId } from "react";
import IrsProcesses from "./IrsProcesses";
import InvertedFileStructure from "./InvertedFileStructure";
import NormalizationPipeline from "./NormalizationPipeline";
import HypertextXmlTree from "./HypertextXmlTree";
import SingleLinkDendrogram from "./SingleLinkDendrogram";
import RelevanceFeedbackVector from "./RelevanceFeedbackVector";
import HardwareFastDataFinder from "./HardwareFastDataFinder";

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
    id: "processes",
    title: "IRS 4 Major Functional Processes",
    caption:
      "Item normalization, selective dissemination of information, archival document database search, and index database search with automatic file build. The same normalized item feeds the document store and the index store.",
    unit: "unit1",
    wide: true,
    component: IrsProcesses,
  },
  {
    id: "normalization",
    title: "Item Normalization Pipeline",
    caption:
      "The eight-step normalization pipeline: standardize input, zone the item, identify processing tokens, apply the stop algorithm, characterize tokens, stem, and create the searchable data structure.",
    unit: "unit1",
    wide: true,
    component: NormalizationPipeline,
  },
  {
    id: "inverted",
    title: "Inverted File Structure",
    caption:
      "The document file stores normalized items, the dictionary stores the sorted vocabulary with document frequency and a pointer, and the inversion lists store the posting lists. A Boolean query intersects the posting lists to form the hit file.",
    unit: "unit2",
    wide: true,
    component: InvertedFileStructure,
  },
  {
    id: "hypertext",
    title: "Hypertext & XML Tree",
    caption:
      "Hypertext is a graph of nodes joined by embedded links, while XML is a hierarchical element tree defined by a DTD. Both provide zoning-like structure, but only hypertext creates a navigable link space.",
    unit: "unit2",
    wide: true,
    component: HypertextXmlTree,
  },
  {
    id: "dendrogram",
    title: "Single-Link Cluster Hierarchy Dendrogram",
    caption:
      "Agglomerative single-link clustering merges A–B at height 2, (A,B)–C at 3, D–E at 4 and the two groups at 6. Cutting the dendrogram at 3.5 gives two classes, {A,B,C} and {D,E}.",
    unit: "unit3",
    wide: true,
    component: SingleLinkDendrogram,
  },
  {
    id: "feedback",
    title: "Relevance Feedback Vector Shift",
    caption:
      "The new query vector is the old query plus a weighted relevant centroid minus a weighted non-relevant centroid, so ranking moves toward terms in relevant items and away from terms in non-relevant items.",
    unit: "unit4",
    wide: true,
    component: RelevanceFeedbackVector,
  },
  {
    id: "hardware",
    title: "Streaming / Hardware Fast Data Finder Architecture",
    caption:
      "Text streams from storage through a term detector to a query resolver and user interface. The Fast Data Finder implements the detector as a pipeline of programmable comparator cells, one cell per pattern character.",
    unit: "unit5",
    wide: true,
    component: HardwareFastDataFinder,
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
