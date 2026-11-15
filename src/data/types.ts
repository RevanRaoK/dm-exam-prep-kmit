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
  | "KR21 Dec 2025 (S)"
  | "RKR21 Dec 2025"
  | "RKR21 May 2026 (S)"
  | "KR20 Jun 2026 (S)"
  | "RKR21 Dec 2025 (IT)"
  | "KR20 May 2024 (IT)"
  | "KR20 Jun 2024 (IT)"
  | "KR21 Aug 2024 (IT)"
  | "KR21 Jan 2025"
  | "KR21 Jun 2025"
  | "KR20 May 2024"
  | "KR20 Dec 2023";

export const PAPER_COUNT = 12;
