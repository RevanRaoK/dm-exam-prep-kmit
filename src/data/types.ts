export type Marks = 2 | 5 | 10;

export type QuestionTable = {
  head: string[];
  rows: string[][];
};

export type AnswerSection = {
  heading: string;
  bullets: string[];
};

export type Question = {
  id: string;
  question: string;
  marks: Marks;
  freq: number;
  papers?: string;
  answer?: string[];
  sections?: AnswerSection[];
  formula?: string;
  table?: QuestionTable;
  note?: string;
  walkthrough?: string;
  diagrams?: string[];
};

export type Unit = {
  id: string;
  roman: string;
  title: string;
  subtitle: string;
  color: string;
  questions: Question[];
};

export type TwoMark = {
  id: string;
  unit: string;
  question: string;
  freq: number;
  answer: string[];
  formula?: string;
};

export type PaperName =
  | "IRS Question Bank (NR21)"
  | "NR20 Model Paper (Feb 2023)"
  | "JNTUH Feb 2022 (R18)"
  | "JNTUH Feb 2023 (R18)";

export const PAPER_COUNT = 4;
