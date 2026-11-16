import type { ComponentType } from "react";
import PorterWalkthrough from "./PorterWalkthrough";
import SignatureWalkthrough from "./SignatureWalkthrough";
import PatTreeWalkthrough from "./PatTreeWalkthrough";
import TermClusterWalkthrough from "./TermClusterWalkthrough";
import BoyerMooreWalkthrough from "./BoyerMooreWalkthrough";
import FsaWalkthrough from "./FsaWalkthrough";

export type WalkthroughInfo = {
  id: string;
  label: string;
  blurb: string;
  component: ComponentType;
};

export const walkthroughs: WalkthroughInfo[] = [
  {
    id: "porter",
    label: "Porter Stemming",
    blurb: "Steps 1a–5 · measure m · duplicatable worked case",
    component: PorterWalkthrough,
  },
  {
    id: "signature",
    label: "Signature Hashing",
    blurb: "Exact PYQ text · h(made) = 001100 · block OR · false drop",
    component: SignatureWalkthrough,
  },
  {
    id: "pat",
    label: "PAT Tree",
    blurb: "Sistrings of 100110001101 · bit-by-bit Patricia tree",
    component: PatTreeWalkthrough,
  },
  {
    id: "termcluster",
    label: "Term-Term Clustering",
    blurb: "JNTUH Feb-2023 Q7 · threshold 10 · clique, star, single link",
    component: TermClusterWalkthrough,
  },
  {
    id: "boyer",
    label: "Boyer–Moore",
    blurb: "Pattern abcac in ababdcabcdacabcac · bad character + good suffix",
    component: BoyerMooreWalkthrough,
  },
  {
    id: "fsa",
    label: "FSA / Hardware Search",
    blurb: "Five-tuple FSA · state trace · term detector hardware",
    component: FsaWalkthrough,
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
