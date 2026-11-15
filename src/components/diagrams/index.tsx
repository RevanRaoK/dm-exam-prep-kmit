import type { ComponentType } from "react";
import KddPipeline from "./KddPipeline";
import DataMiningArchitecture from "./DataMiningArchitecture";
import DwDmIntegration from "./DwDmIntegration";
import ClassificationTwoStep from "./ClassificationTwoStep";
import HierarchicalDendrogram from "./HierarchicalDendrogram";
import WebMiningTaxonomy from "./WebMiningTaxonomy";
import TimeSeriesComponents from "./TimeSeriesComponents";

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
    id: "kdd",
    title: "KDD Pipeline",
    caption:
      "The seven-step knowledge discovery process: the first four steps form data preprocessing, data mining extracts the patterns and pattern evaluation keeps the interesting ones.",
    unit: "unit1",
    wide: true,
    component: KddPipeline,
  },
  {
    id: "architecture",
    title: "Data Mining System Architecture",
    caption:
      "The six components of a typical data mining system: repositories, the database or warehouse server, the knowledge base, the mining engine, the pattern evaluation module and the GUI.",
    unit: "unit1",
    wide: true,
    component: DataMiningArchitecture,
  },
  {
    id: "dwdm",
    title: "Data Warehouse–Data Mining Coupling",
    caption:
      "No coupling, loose coupling, semi-tight coupling and tight coupling. The trend is towards tighter coupling because precomputed summaries speed up mining.",
    unit: "unit1",
    wide: true,
    component: DwDmIntegration,
  },
  {
    id: "classification",
    title: "Classification 2-Step Process",
    caption:
      "Step 1 learns a model from labelled training tuples, and step 2 tests it on an independent test set before classifying new tuples.",
    unit: "unit3",
    component: ClassificationTwoStep,
  },
  {
    id: "dendrogram",
    title: "Hierarchical Dendrogram",
    caption:
      "Single-link merges for objects A–E at heights 2, 3, 4 and 5. Cutting the tree at a height gives the corresponding clusters.",
    unit: "unit4",
    component: HierarchicalDendrogram,
  },
  {
    id: "webmining",
    title: "Web Mining Taxonomy",
    caption:
      "Web content mining works on page content, web structure mining works on links and web usage mining works on server logs and click streams.",
    unit: "unit5",
    wide: true,
    component: WebMiningTaxonomy,
  },
  {
    id: "timeseries",
    title: "Time-Series Components",
    caption:
      "An observed series is the combination of trend, cyclic, seasonal and irregular movements; trend analysis and moving averages isolate the long-term direction.",
    unit: "unit5",
    wide: true,
    component: TimeSeriesComponents,
  },
];

export function DiagramById({ id }: { id: string }) {
  const info = diagrams.find((diagram) => diagram.id === id);
  if (!info) return null;
  const Component = info.component;
  return (
    <figure className={`diagram-card ${info.wide ? "wide" : ""}`} id={`diagram-${info.id}`}>
      <div className="diagram-title">Reference diagram · theme-matched SVG</div>
      <h3>{info.title}</h3>
      <Component />
      <figcaption className="cap">{info.caption}</figcaption>
    </figure>
  );
}
