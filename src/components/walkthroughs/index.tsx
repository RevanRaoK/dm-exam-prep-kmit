import type { ComponentType } from "react";
import AprioriWalkthrough from "./AprioriWalkthrough";
import FpGrowthWalkthrough from "./FpGrowthWalkthrough";
import Id3Walkthrough from "./Id3Walkthrough";
import NaiveBayesWalkthrough from "./NaiveBayesWalkthrough";
import KMeansWalkthrough from "./KMeansWalkthrough";
import DbscanWalkthrough from "./DbscanWalkthrough";

export type WalkthroughInfo = {
  id: string;
  label: string;
  blurb: string;
  component: ComponentType;
};

export const walkthroughs: WalkthroughInfo[] = [
  {
    id: "apriori",
    label: "Apriori",
    blurb: "T100–T900 · min_sup 2 · candidate lattice and rules",
    component: AprioriWalkthrough,
  },
  {
    id: "fpgrowth",
    label: "FP-Growth",
    blurb: "Book Mart 101–105 · min_sup 25% · FP-tree build",
    component: FpGrowthWalkthrough,
  },
  {
    id: "id3",
    label: "Decision Tree (ID3)",
    blurb: "Weather data · entropy, gain and tree splits",
    component: Id3Walkthrough,
  },
  {
    id: "nb",
    label: "Naïve Bayes",
    blurb: "Fruit query (Yellow, Sweet, Long) · priors to final class",
    component: NaiveBayesWalkthrough,
  },
  {
    id: "kmeans",
    label: "K-Means",
    blurb: "Eight points · centroid distances across three rounds",
    component: KMeansWalkthrough,
  },
  {
    id: "dbscan",
    label: "DBSCAN",
    blurb: "ε-neighbourhoods · core, border and noise points",
    component: DbscanWalkthrough,
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
