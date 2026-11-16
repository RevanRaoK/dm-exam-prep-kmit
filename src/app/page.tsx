"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Flame,
  GraduationCap,
  LayoutGrid,
  ListChecks,
  PlayCircle,
  Search,
  X,
} from "lucide-react";
import type { Question, Unit } from "@/data/types";
import { PAPER_COUNT } from "@/data/types";
import { unit1 } from "@/data/unit1";
import { unit2 } from "@/data/unit2";
import { unit3 } from "@/data/unit3";
import { unit4 } from "@/data/unit4";
import { unit5 } from "@/data/unit5";
import { twoMarks } from "@/data/twoMarks";
import { unitTopics } from "@/data/topics";
import QuestionCard from "@/components/QuestionCard";
import CourseRail from "@/components/CourseRail";
import {
  walkthroughs,
  WalkthroughById,
  getWalkthroughInfo,
} from "@/components/walkthroughs";
import { diagrams, DiagramById } from "@/components/diagrams";
import RichText from "@/components/RichText";

const units: Unit[] = [unit1, unit2, unit3, unit4, unit5];

type TabKey =
  | "all"
  | "unit1"
  | "unit2"
  | "unit3"
  | "unit4"
  | "unit5"
  | "twomarks"
  | "walkthroughs";

type FreqFilter = "all" | "repeat" | "hot";
type SortKey = "freq" | "marks";

const STORAGE_KEY = "irs-merged-revised-v1";

const twoMarkUnitTitles: Record<string, string> = {
  "Unit I": "Unit I · Introduction & capabilities",
  "Unit II": "Unit II · Cataloging, indexing & data structures",
  "Unit III": "Unit III · Automatic indexing & clustering",
  "Unit IV": "Unit IV · Search techniques & visualization",
  "Unit V": "Unit V · Text search, hardware & multimedia",
};

function readIds(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function parseHash(hash: string): { tab: TabKey; topic: string | null; walkthrough: string | null } {
  const raw = hash.replace(/^#/, "");
  const [first, second] = raw.split("/");
  if (first === "twomarks") return { tab: "twomarks", topic: null, walkthrough: null };
  if (first === "walkthroughs") {
    return { tab: "walkthroughs", topic: null, walkthrough: second || null };
  }
  const unit = units.find((item) => item.id === first);
  if (unit) {
    const topics = unitTopics[unit.id] ?? [];
    const topic = second && topics.some((item) => item.id === second) ? second : null;
    return { tab: unit.id as TabKey, topic, walkthrough: null };
  }
  return { tab: "all", topic: null, walkthrough: null };
}

function questionSearchText(question: Question): string {
  const sectionText =
    question.sections?.map((section) => `${section.heading} ${section.bullets.join(" ")}`).join(" ") ??
    "";
  return [
    question.question,
    (question.answer ?? []).join(" "),
    sectionText,
    question.formula ?? "",
    question.papers ?? "",
    question.note ?? "",
    question.table
      ? `${question.table.head.join(" ")} ${question.table.rows
          .map((row) => row.join(" "))
          .join(" ")}`
      : "",
  ]
    .join(" ")
    .toLowerCase();
}

function shortUnitTitle(unit: Unit): string {
  const parts = unit.title.split("·");
  return parts.length > 1 ? parts.slice(1).join("·").trim() : unit.title;
}

function findTopicForQuestion(questionId: string) {
  for (const unit of units) {
    const topics = unitTopics[unit.id] ?? [];
    for (const topic of topics) {
      if (topic.questions.includes(questionId)) {
        return { unit, topic };
      }
    }
  }
  return null;
}

export default function HomePage() {
  const [tab, setTab] = useState<TabKey>("all");
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [walkthroughId, setWalkthroughId] = useState("porter");
  const [search, setSearch] = useState("");
  const [freqFilter, setFreqFilter] = useState<FreqFilter>("all");
  const [sort, setSort] = useState<SortKey>("freq");
  const [revisedIds, setRevisedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const applyRoute = () => {
      const parsed = parseHash(window.location.hash);
      setTab(parsed.tab);
      setActiveTopic(parsed.topic);
      if (parsed.walkthrough) setWalkthroughId(parsed.walkthrough);
    };
    if (!window.location.hash) {
      window.history.replaceState(null, "", "#all");
    }
    applyRoute();
    window.addEventListener("hashchange", applyRoute);
    return () => window.removeEventListener("hashchange", applyRoute);
  }, []);

  const allIds = useMemo(() => {
    const ids = new Set<string>();
    for (const unit of units) {
      for (const question of unit.questions) ids.add(question.id);
    }
    for (const item of twoMarks) ids.add(item.id);
    return ids;
  }, []);

  useEffect(() => {
    const sync = () => {
      const stored = readIds().filter((id) => allIds.has(id));
      setRevisedIds(new Set(stored));
    };
    sync();
    window.addEventListener("dm-progress", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("dm-progress", sync);
      window.removeEventListener("storage", sync);
    };
  }, [allIds]);

  const go = useCallback(
    (nextTab: TabKey, topicId: string | null = null, nextWalkthrough: string | null = null) => {
      setTab(nextTab);
      setActiveTopic(topicId);
      if (nextTab === "unit1" || nextTab === "unit2" || nextTab === "unit3" || nextTab === "unit4" || nextTab === "unit5") {
        setSearch("");
        setFreqFilter("all");
        setSort("freq");
      }
      if (nextTab === "walkthroughs") {
        setWalkthroughId(nextWalkthrough ?? walkthroughId);
      }
      const parts: string[] = [nextTab];
      if (nextTab === "walkthroughs") {
        parts.push(nextWalkthrough ?? walkthroughId);
      } else if (topicId) {
        parts.push(topicId);
      }
      const hash = `#${parts.join("/")}`;
      if (window.location.hash !== hash) {
        window.location.hash = hash;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [walkthroughId],
  );

  const handleSelectTab = useCallback(
    (key: string) => {
      if (key === "walkthroughs") {
        go("walkthroughs", null, walkthroughId);
      } else {
        go(key as TabKey, null);
      }
    },
    [go, walkthroughId],
  );

  const handleSelectTopic = useCallback(
    (unitId: string, topicId: string) => {
      go(unitId as TabKey, topicId);
    },
    [go],
  );

  const term = search.trim().toLowerCase();
  const isFiltering = term.length > 0 || freqFilter !== "all";
  const totalMainQuestions = units.reduce((sum, unit) => sum + unit.questions.length, 0);
  const totalTwoMarks = twoMarks.length;
  const topFrequency = Math.max(...units.flatMap((unit) => unit.questions.map((q) => q.freq)));
  const repeatedTwoMarks = twoMarks.filter((item) => item.freq >= 2).length;
  const totalItems = allIds.size;
  const totalRevised = revisedIds.size;

  const twoMarkCards = useMemo(
    () =>
      twoMarks.map((item) => ({
        unit: item.unit,
        question: {
          id: item.id,
          question: item.question,
          marks: 2,
          freq: item.freq,
          papers:
            item.freq > 1
              ? `Part-A short question repeated in ${item.freq} of the ${PAPER_COUNT} merged sources.`
              : "Part-A short question from one of the merged IRS question sources.",
          answer: item.answer,
          formula: item.formula,
        } as Question,
      })),
    [],
  );

  const applyFilter = useCallback(
    (list: Question[]) => {
      const filtered = list.filter((question) => {
        if (freqFilter === "repeat" && question.freq < 2) return false;
        if (freqFilter === "hot" && question.freq < 4) return false;
        if (term && !questionSearchText(question).includes(term)) return false;
        return true;
      });
      return filtered.sort((a, b) =>
        sort === "freq"
          ? b.freq - a.freq || b.marks - a.marks
          : b.marks - a.marks || b.freq - a.freq,
      );
    },
    [freqFilter, sort, term],
  );

  const filteredByUnit = units
    .map((unit) => ({ unit, questions: applyFilter(unit.questions) }))
    .filter((group) => group.questions.length > 0);
  const totalMatches = filteredByUnit.reduce((sum, group) => sum + group.questions.length, 0);

  const currentUnit = units.find((unit) => unit.id === tab) ?? null;
  const currentTopics = currentUnit ? (unitTopics[currentUnit.id] ?? []) : [];
  const currentTopic =
    currentUnit && activeTopic
      ? (currentTopics.find((topic) => topic.id === activeTopic) ?? null)
      : null;
  const currentTopicIndex = currentTopic
    ? currentTopics.findIndex((topic) => topic.id === currentTopic.id)
    : -1;
  const previousTopic = currentTopicIndex > 0 ? currentTopics[currentTopicIndex - 1] : null;
  const nextTopic =
    currentTopicIndex >= 0 && currentTopicIndex < currentTopics.length - 1
      ? currentTopics[currentTopicIndex + 1]
      : null;

  const topicQuestionSet = currentUnit && currentTopic
    ? currentUnit.questions.filter((question) => currentTopic.questions.includes(question.id))
    : [];
  const topicQuestionsSorted = [...topicQuestionSet].sort(
    (a, b) => b.freq - a.freq || b.marks - a.marks,
  );
  const visibleTopicQuestions = currentUnit && currentTopic ? topicQuestionsSorted : [];
  const visibleUnitQuestions = currentUnit
    ? [...currentUnit.questions].sort((a, b) => b.freq - a.freq || b.marks - a.marks)
    : [];

  const filteredTwoMarkCards = twoMarkCards
    .filter(({ question }) => {
      if (freqFilter === "repeat" && question.freq < 2) return false;
      if (freqFilter === "hot" && question.freq < 4) return false;
      if (term && !questionSearchText(question).includes(term)) return false;
      return true;
    })
    .sort((a, b) =>
      sort === "freq"
        ? b.question.freq - a.question.freq || b.question.marks - a.question.marks
        : b.question.marks - a.question.marks || b.question.freq - a.question.freq,
    );

  const twoMarkGroups = Object.keys(twoMarkUnitTitles)
    .map((unitName) => ({
      unitName,
      items: filteredTwoMarkCards.filter((item) => item.unit === unitName),
    }))
    .filter((group) => group.items.length > 0);

  const hotList = useMemo(
    () =>
      units
        .flatMap((unit) => unit.questions.map((question) => ({ unit, question })))
        .sort(
          (a, b) =>
            b.question.freq - a.question.freq ||
            b.question.marks - a.question.marks ||
            a.question.id.localeCompare(b.question.id),
        )
        .slice(0, 10),
    [],
  );

  const activeWalkthrough =
    walkthroughs.find((item) => item.id === walkthroughId) ?? walkthroughs[0];

  const openWalkthrough = useCallback(
    (id: string) => {
      if (currentTopic?.walkthroughs?.includes(id)) {
        const element = document.getElementById(`walk-${id}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      go("walkthroughs", null, id);
    },
    [currentTopic, go],
  );

  const scrollToQuestion = useCallback((id: string) => {
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 220);
  }, []);

  const openQuestionFromHotList = useCallback(
    (question: Question, unit: Unit) => {
      const destination = findTopicForQuestion(question.id);
      if (destination) {
        go(destination.unit.id as TabKey, destination.topic.id);
        scrollToQuestion(question.id);
      } else {
        go(unit.id as TabKey);
      }
    },
    [go, scrollToQuestion],
  );

  const tabs: { key: TabKey; label: string; count: number }[] = [
    { key: "all", label: "All Units", count: totalMainQuestions },
    ...units.map((unit) => ({
      key: unit.id as TabKey,
      label: `Unit ${unit.roman}`,
      count: unit.questions.length,
    })),
    { key: "twomarks", label: "2-Mark Rapid Recall", count: totalTwoMarks },
    { key: "walkthroughs", label: "Interactive Algorithm Walkthroughs", count: walkthroughs.length },
  ];

  let showingText = "";
  if (tab === "all" && isFiltering) {
    showingText = `Showing ${totalMatches} matching question sets across all five units.`;
  } else if (tab === "twomarks") {
    showingText = `Showing ${filteredTwoMarkCards.length} of ${totalTwoMarks} unique Part-A short questions.`;
  }

  return (
    <div className="shell">
      <main>
        <div className="mobile-top">
          <span className="mcode">IRS</span>
          <div className="mname">
            <b>Information Retrieval Systems · Exam Prep</b>
            <span>Question bank + JNTUH R18 · Units I–V</span>
          </div>
          <span className="mprog">
            {totalRevised}/{totalItems}
          </span>
        </div>

        {tab === "all" ? (
          <header className="hero">
            <div className="hero-kicker">
              <GraduationCap size={14} aria-hidden="true" />
              IRS · QUESTION BANK + JNTUH R18
            </div>
            <h1>
              Every IRS question, <em>indexed and answered.</em>
            </h1>
            <p className="sub">
              The complete IRS question bank, the NR20 model paper and both JNTUH R18
              papers deduplicated into frequency-ranked 10-mark answers, every unique
              Part-A short question, and six interactive algorithm walkthroughs.
            </p>
            <div className="chips">
              <span className="chip hot">
                <Flame size={12} /> {PAPER_COUNT} merged sources
              </span>
              <span className="chip">
                <BookOpen size={12} /> {totalMainQuestions} ranked question sets
              </span>
              <span className="chip">
                <ListChecks size={12} /> {totalTwoMarks} rapid-recall questions
              </span>
              <span className="chip accent">
                <PlayCircle size={12} /> {walkthroughs.length} interactive walkthroughs
              </span>
            </div>
          </header>
        ) : (
          <header className="pagehead">
            {currentUnit && currentTopic ? (
              <>
                <div className="pagehead-top">
                  <div className="breadcrumb">
                    <button type="button" onClick={() => go(currentUnit.id as TabKey)}>
                      Unit {currentUnit.roman}
                    </button>
                    <ChevronRight size={12} aria-hidden="true" />
                    <span>{currentTopic.short}</span>
                  </div>
                  <button
                    type="button"
                    className="btn sm"
                    onClick={() => go(currentUnit.id as TabKey)}
                  >
                    <ArrowLeft size={14} /> Back to unit
                  </button>
                </div>
                <div className="pagehead-kicker">
                  Topic {String(currentTopicIndex + 1).padStart(2, "0")} of{" "}
                  {currentTopics.length} · Unit {currentUnit.roman}
                </div>
                <h1>{currentTopic.title}</h1>
                <p>{currentTopic.description}</p>
                <div className="chips">
                  <span className="chip">
                    <BookOpen size={12} /> {topicQuestionSet.length} full answer
                    {topicQuestionSet.length === 1 ? "" : "s"}
                  </span>
                  <span className="chip hot">
                    <Flame size={12} /> Up to{" "}
                    {topicQuestionsSorted.length
                      ? Math.max(...topicQuestionsSorted.map((question) => question.freq))
                      : 0}
                    /{PAPER_COUNT}
                  </span>
                  {currentTopic.walkthroughs?.length ? (
                    <span className="chip accent">
                      <PlayCircle size={12} /> {currentTopic.walkthroughs.length} interactive
                      walkthrough
                    </span>
                  ) : null}
                  <span className="chip">
                    <CheckCircle2 size={12} />
                    {topicQuestionSet.filter((question) => revisedIds.has(question.id)).length}/
                    {topicQuestionSet.length} revised
                  </span>
                </div>
              </>
            ) : currentUnit ? (
              <>
                <div className="pagehead-kicker">
                  Unit {currentUnit.roman} · {currentTopics.length} topic slugs
                </div>
                <h1>{currentUnit.title}</h1>
                <p>{currentUnit.subtitle}</p>
                <div className="chips">
                  <span className="chip">
                    <BookOpen size={12} /> {currentUnit.questions.length} question sets
                  </span>
                  <span className="chip">
                    <CheckCircle2 size={12} />
                    {currentUnit.questions.filter((question) => revisedIds.has(question.id)).length}
                    /{currentUnit.questions.length} revised
                  </span>
                  <span className="chip hot">
                    <Flame size={12} /> Top repeat{" "}
                    {Math.max(...currentUnit.questions.map((question) => question.freq))}/
                    {PAPER_COUNT}
                  </span>
                </div>
              </>
            ) : tab === "twomarks" ? (
              <>
                <div className="pagehead-kicker">Part A · 2 marks · all merged sources</div>
                <h1>2-Mark Rapid Recall</h1>
                <p>
                  Every unique Part-A short question across the IRS question bank, NR20
                  model paper and both JNTUH R18 papers, answered with two or three
                  complete sentences and the exact formula where needed.
                </p>
                <div className="chips">
                  <span className="chip">
                    <ListChecks size={12} /> {totalTwoMarks} unique questions
                  </span>
                  <span className="chip hot">
                    <Flame size={12} /> {repeatedTwoMarks} repeated 2+
                  </span>
                  <span className="chip">
                    <BookOpen size={12} /> {PAPER_COUNT} sources covered
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="pagehead-kicker">Slide-style algorithm players</div>
                <h1>Interactive Algorithm Walkthroughs</h1>
                <p>
                  Click through each algorithm exactly as you would write it in the exam. Every
                  step has a theme-matched SVG or highlighted state table plus two or three
                  single-sentence explanation points.
                </p>
                <div className="chips">
                  <span className="chip accent">
                    <PlayCircle size={12} /> {walkthroughs.length} players
                  </span>
                  <span className="chip">
                    <span className="kbd">←</span> <span className="kbd">→</span> keyboard support
                  </span>
                  <span className="chip">
                    <BookOpen size={12} /> 100% PYQ data
                  </span>
                </div>
              </>
            )}
          </header>
        )}

        <div className="tabsbar">
          <div className="tabscroll" role="tablist" aria-label="Course sections">
            {tabs.map((item) => (
              <button
                key={item.key}
                type="button"
                role="tab"
                aria-selected={tab === item.key}
                className={`tab ${tab === item.key ? "active" : ""}`}
                onClick={() => handleSelectTab(item.key)}
              >
                {item.key === "all" ? <LayoutGrid size={13} /> : null}
                {item.label}
                <span className="tcount">{item.count}</span>
              </button>
            ))}
          </div>
        </div>

        {tab === "all" || tab === "twomarks" ? (
          <>
            <div className="toolbar">
              <div className="searchwrap">
                <Search size={16} aria-hidden="true" />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search questions, keywords, formulas, concepts…"
                  aria-label="Search questions"
                />
                {search ? (
                  <button
                    type="button"
                    className="clear"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                ) : null}
              </div>
              <div className="filtergroup" role="group" aria-label="PYQ repetition filter">
                <button
                  type="button"
                  className={`filterbtn ${freqFilter === "all" ? "active" : ""}`}
                  onClick={() => setFreqFilter("all")}
                >
                  All PYQs
                </button>
                <button
                  type="button"
                  className={`filterbtn ${freqFilter === "repeat" ? "active" : ""}`}
                  onClick={() => setFreqFilter("repeat")}
                >
                  🔥 Repeated 2+
                </button>
                <button
                  type="button"
                  className={`filterbtn ${freqFilter === "hot" ? "active" : ""}`}
                  onClick={() => setFreqFilter("hot")}
                >
                  🔥 Hot 4+
                </button>
              </div>
              <select
                className="sortsel"
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                aria-label="Sort questions"
              >
                <option value="freq">Most repeated first</option>
                <option value="marks">10-mark questions first</option>
              </select>
            </div>
            {showingText ? (
              <p className="showing">
                <b>{showingText.split(" ").slice(0, 2).join(" ")}</b>{" "}
                {showingText.split(" ").slice(2).join(" ")}
              </p>
            ) : null}
          </>
        ) : null}

        {/* ---------------------------------------------------------- */}
        {/* ALL UNITS: overview or live search results                 */}
        {/* ---------------------------------------------------------- */}
        {tab === "all" && !isFiltering ? (
          <>
            <section className="section">
              <div className="section-head">
                <div>
                  <div className="kicker">Course map</div>
                  <h2>Five units, split into focused topic slugs</h2>
                  <p className="section-sub">
                    Open a unit first, then choose the exact topic slug. Every unit has eight
                    or nine slugs, and each slug contains the full exam-ready answers, the
                    must-write points and any linked interactive walkthrough.
                  </p>
                </div>
                <span className="chip accent">
                  <Flame size={12} /> Top repeat: {topFrequency}/{PAPER_COUNT}
                </span>
              </div>

              <div className="unit-grid">
                {units.map((unit) => {
                  const topics = unitTopics[unit.id] ?? [];
                  const maxFreq = Math.max(...unit.questions.map((question) => question.freq));
                  const revised = unit.questions.filter((question) =>
                    revisedIds.has(question.id),
                  ).length;
                  return (
                    <div className="unit-card" key={unit.id}>
                      <div className="uc-kicker">
                        Unit {unit.roman} · {unit.questions.length} question sets · up to{" "}
                        {maxFreq}/{PAPER_COUNT}
                      </div>
                      <h3>{shortUnitTitle(unit)}</h3>
                      <p>{unit.subtitle}</p>
                      <div className="uslug-list">
                        {topics.map((topic, index) => {
                          const count = unit.questions.filter((question) =>
                            topic.questions.includes(question.id),
                          ).length;
                          return (
                            <button
                              type="button"
                              className="uslug"
                              key={topic.id}
                              onClick={() => handleSelectTopic(unit.id, topic.id)}
                            >
                              <span className="n">{String(index + 1).padStart(2, "0")}</span>
                              <span>{topic.short}</span>
                              <span className="c">
                                {count} Q{topic.walkthroughs?.length ? " · player" : ""}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                      <div className="uc-meta">
                        <span className="chip">
                          {revised}/{unit.questions.length} revised
                        </span>
                        <button
                          type="button"
                          className="btn sm"
                          onClick={() => go(unit.id as TabKey)}
                        >
                          Open Unit {unit.roman} →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="section">
              <div className="section-head">
                <div>
                  <div className="kicker">Most repeated</div>
                  <h2>Hot list across the merged sources</h2>
                  <p className="section-sub">
                    Ranked by PYQ frequency, then by marks. Open a row to jump straight to its
                    full answer in the right topic slug.
                  </p>
                </div>
                <span className="chip hot">
                  <Flame size={12} /> Top 10
                </span>
              </div>
              <div className="hotlist">
                {hotList.map(({ unit, question }) => (
                  <button
                    type="button"
                    className="hotrow"
                    key={question.id}
                    onClick={() => openQuestionFromHotList(question, unit)}
                  >
                    <span className="hrfreq">🔥 {question.freq}/{PAPER_COUNT}</span>
                    <span className="hrq">
                      <b>
                        <RichText text={question.question} />
                      </b>
                      <span>
                        Unit {unit.roman} · {shortUnitTitle(unit)}
                      </span>
                    </span>
                    <span className="hrmarks">[{question.marks}M]</span>
                    <ChevronRight size={16} aria-hidden="true" />
                  </button>
                ))}
              </div>
            </section>

            <section className="section">
              <div className="section-head">
                <div>
                  <div className="kicker">Visual reference</div>
                  <h2>Core exam diagrams</h2>
                  <p className="section-sub">
                    Every architecture and concept diagram uses the same theme variables as
                    the dashboard, so the figures blend into the page.
                  </p>
                </div>
              </div>
              <div className="diagram-grid">
                {diagrams.map((diagram) => (
                  <DiagramById key={diagram.id} id={diagram.id} />
                ))}
              </div>
            </section>
          </>
        ) : null}

        {tab === "all" && isFiltering ? (
          <section className="section">
            <div className="section-head">
              <div>
                <div className="kicker">Live search</div>
                <h2>
                  {totalMatches > 0
                    ? `${totalMatches} matching question sets`
                    : "No matching question sets"}
                </h2>
              </div>
              <span className="chip">
                Filter: {freqFilter === "all" ? "all PYQs" : freqFilter === "repeat" ? "repeated 2+" : "hot 4+"}
              </span>
            </div>

            {filteredByUnit.length === 0 ? (
              <div className="empty">
                <Search size={26} style={{ color: "var(--line-strong)", margin: "0 auto" }} />
                <h3>Nothing matched that search</h3>
                <p>
                  Try a shorter keyword such as Porter, signature, PAT tree, clustering,
                  relevance feedback or Boyer–Moore.
                </p>
              </div>
            ) : (
              filteredByUnit.map(({ unit, questions }) => (
                <div className="result-group" key={unit.id}>
                  <h3>
                    Unit {unit.roman} · {shortUnitTitle(unit)}
                    <span className="n">{questions.length}</span>
                  </h3>
                  <div className="qstack">
                    {questions.map((question) => (
                      <QuestionCard
                        key={question.id}
                        question={question}
                        unitLabel={`Unit ${unit.roman}`}
                        onOpenWalkthrough={openWalkthrough}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </section>
        ) : null}

        {/* ---------------------------------------------------------- */}
        {/* UNIT TAB: topic list or one topic slug                     */}
        {/* ---------------------------------------------------------- */}
        {currentUnit && !currentTopic ? (
          <>
            <div className="topics-head">
              <div>
                <h3>Choose a topic slug</h3>
                <p>
                  {currentTopics.length} topics in this unit · each slug opens the complete
                  answers, must-write points and linked walkthroughs.
                </p>
              </div>
              <span className="chip accent">
                <ListChecks size={12} />
                {currentUnit.questions.filter((question) => revisedIds.has(question.id)).length}/
                {currentUnit.questions.length} revised
              </span>
            </div>

            <div className="topics-grid">
              {currentTopics.map((topic, index) => {
                const topicItems = currentUnit.questions.filter((question) =>
                  topic.questions.includes(question.id),
                );
                const topicMax = topicItems.length
                  ? Math.max(...topicItems.map((question) => question.freq))
                  : 0;
                return (
                  <button
                    type="button"
                    className="topic-card"
                    key={topic.id}
                    onClick={() => go(currentUnit.id as TabKey, topic.id)}
                  >
                    <ChevronRight className="topic-arrow" size={15} aria-hidden="true" />
                    <span className="topic-top">
                      <span className="topic-num">{String(index + 1).padStart(2, "0")}</span>
                      <span className="topic-title">{topic.title}</span>
                    </span>
                    <span className="topic-desc">{topic.description}</span>
                    <span className="topic-meta">
                      <span className="tm">{topicItems.length} Q</span>
                      {topicMax > 0 ? <span className="tm">🔥 {topicMax}/{PAPER_COUNT}</span> : null}
                      {topic.walkthroughs?.length ? (
                        <span className="tm walk">Interactive</span>
                      ) : null}
                    </span>
                  </button>
                );
              })}
            </div>

            <section className="section">
              <div className="section-head">
                <div>
                  <div className="kicker">Full unit</div>
                  <h2>All questions in Unit {currentUnit.roman}</h2>
                  <p className="section-sub">
                    Ranked by repetition. Open any card for the full one-sentence-per-point
                    exam answer and its integrated diagram.
                  </p>
                </div>
              </div>
              <div className="qstack">
                {visibleUnitQuestions.map((question) => (
                  <QuestionCard
                    key={question.id}
                    question={question}
                    unitLabel={`Unit ${currentUnit.roman}`}
                    onOpenWalkthrough={openWalkthrough}
                  />
                ))}
              </div>
            </section>
          </>
        ) : null}

        {currentUnit && currentTopic ? (
          <>
            <div className="slug-layout">
              <div className="slug-main">
                <div className="reading-label">
                  <BookOpen size={13} /> Full exam-ready answers · {topicQuestionSet.length}{" "}
                  question set{topicQuestionSet.length === 1 ? "" : "s"}
                </div>
                <div className="qstack slug-questions">
                  {visibleTopicQuestions.map((question) => (
                    <QuestionCard
                      key={question.id}
                      question={question}
                      unitLabel={`Unit ${currentUnit.roman}`}
                      defaultOpen
                      onOpenWalkthrough={openWalkthrough}
                    />
                  ))}
                </div>

                {currentTopic.walkthroughs?.map((id) => {
                  const info = getWalkthroughInfo(id);
                  if (!info) return null;
                  return (
                    <section className="embedded-walk" id={`walk-${id}`} key={id}>
                      <div className="ew-head">
                        <div>
                          <div className="eyebrow">Included in this topic</div>
                          <h3>{info.label} interactive walkthrough</h3>
                        </div>
                        <span className="step-pill">
                          <PlayCircle size={12} /> Full step player
                        </span>
                      </div>
                      <div className="section-sub" style={{ marginBottom: 10 }}>
                        {info.blurb}. Use the buttons or the keyboard arrow keys.
                      </div>
                      <WalkthroughById id={id} />
                    </section>
                  );
                })}
              </div>

              <aside className="slug-side">
                <div className="side-card">
                  <h4>What the paper asks</h4>
                  <div className="asklist">
                    {topicQuestionsSorted.map((question) => (
                      <div className="askitem" key={question.id}>
                        <span className="amark">[{question.marks}M]</span>
                        <span>
                          <RichText text={question.question} />
                        </span>
                        <span className="afreq">🔥 {question.freq}/{PAPER_COUNT}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="side-card">
                  <h4>Must-write points</h4>
                  <ul>
                    {currentTopic.mustWrite.map((point, index) => (
                      <li key={index}>
                        <RichText text={point} />
                      </li>
                    ))}
                  </ul>
                </div>

                {currentTopic.walkthroughs?.length ? (
                  <div className="side-card">
                    <h4>Interactive walkthrough</h4>
                    <div style={{ display: "grid", gap: 6 }}>
                      {currentTopic.walkthroughs.map((id) => {
                        const info = getWalkthroughInfo(id);
                        if (!info) return null;
                        return (
                          <button
                            type="button"
                            className="btn sm"
                            key={id}
                            onClick={() => {
                              document
                                .getElementById(`walk-${id}`)
                                ?.scrollIntoView({ behavior: "smooth", block: "start" });
                            }}
                          >
                            <PlayCircle size={13} /> Open {info.label} player
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : null}

                <div className="side-card">
                  <h4>Topic navigation</h4>
                  <div style={{ display: "grid", gap: 6 }}>
                    {previousTopic ? (
                      <button
                        type="button"
                        className="btn sm"
                        onClick={() => go(currentUnit.id as TabKey, previousTopic.id)}
                      >
                        <ArrowLeft size={13} /> {previousTopic.short}
                      </button>
                    ) : null}
                    {nextTopic ? (
                      <button
                        type="button"
                        className="btn sm"
                        onClick={() => go(currentUnit.id as TabKey, nextTopic.id)}
                      >
                        {nextTopic.short} <ArrowRight size={13} />
                      </button>
                    ) : null}
                    <button
                      type="button"
                      className="btn sm ghost"
                      onClick={() => go(currentUnit.id as TabKey)}
                    >
                      Back to unit overview
                    </button>
                  </div>
                </div>
              </aside>
            </div>

            <div className="slug-pager">
              {previousTopic ? (
                <button
                  type="button"
                  className="btn slug-nav"
                  onClick={() => go(currentUnit.id as TabKey, previousTopic.id)}
                >
                  <span className="lab">Previous topic</span>
                  <span className="tt">
                    <ArrowLeft size={14} /> {previousTopic.title}
                  </span>
                </button>
              ) : (
                <span />
              )}
              {nextTopic ? (
                <button
                  type="button"
                  className="btn primary next slug-nav"
                  onClick={() => go(currentUnit.id as TabKey, nextTopic.id)}
                >
                  <span className="lab">Next topic</span>
                  <span className="tt">
                    {nextTopic.title} <ArrowRight size={14} />
                  </span>
                </button>
              ) : null}
            </div>
          </>
        ) : null}

        {/* ---------------------------------------------------------- */}
        {/* 2-MARK RAPID RECALL                                        */}
        {/* ---------------------------------------------------------- */}
        {tab === "twomarks" ? (
          <>
            {twoMarkGroups.length === 0 ? (
              <div className="empty">
                <Search size={26} style={{ color: "var(--line-strong)", margin: "0 auto" }} />
                <h3>No short question matched</h3>
                <p>Try a keyword such as precision, stem, inverted, thesaurus or FSA.</p>
              </div>
            ) : (
              twoMarkGroups.map((group) => (
                <section className="section" key={group.unitName}>
                  <div className="section-head">
                    <div>
                      <div className="kicker">{group.unitName}</div>
                      <h2>{twoMarkUnitTitles[group.unitName]}</h2>
                    </div>
                    <span className="chip">
                      {group.items.length} short question{group.items.length === 1 ? "" : "s"}
                    </span>
                  </div>
                  <div className="qstack">
                    {group.items.map(({ unit, question }) => (
                      <QuestionCard
                        key={question.id}
                        question={question}
                        unitLabel={unit}
                        onOpenWalkthrough={openWalkthrough}
                      />
                    ))}
                  </div>
                </section>
              ))
            )}
          </>
        ) : null}

        {/* ---------------------------------------------------------- */}
        {/* INTERACTIVE WALKTHROUGHS                                   */}
        {/* ---------------------------------------------------------- */}
        {tab === "walkthroughs" ? (
          <>
            <div className="walk-selector" role="tablist" aria-label="Algorithm walkthroughs">
              {walkthroughs.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={activeWalkthrough.id === item.id}
                  className={`walk-pill ${activeWalkthrough.id === item.id ? "active" : ""}`}
                  onClick={() => go("walkthroughs", null, item.id)}
                >
                  <PlayCircle size={14} />
                  {item.label}
                </button>
              ))}
            </div>

            <WalkthroughById id={activeWalkthrough.id} />

            <section className="section">
              <div className="section-head">
                <div>
                  <div className="kicker">Static reference</div>
                  <h2>Core exam diagrams</h2>
                  <p className="section-sub">
                    The same {diagrams.length} architecture SVGs used throughout the units, ready to redraw
                    in the exam.
                  </p>
                </div>
              </div>
              <div className="diagram-grid">
                {diagrams.map((diagram) => (
                  <DiagramById key={diagram.id} id={diagram.id} />
                ))}
              </div>
            </section>
          </>
        ) : null}

        <footer>
          <span>
            Built from the IRS question bank (NR21), the NR20 model paper, both JNTUH R18
            papers and the Kowalski textbook notes · Information Retrieval Systems, B.Tech.
          </span>
          <span>
            Revision state is stored in localStorage only · No account, no server, no tracking.
          </span>
        </footer>
      </main>

      <CourseRail
        units={units}
        topicsByUnit={unitTopics}
        activeTab={tab}
        activeTopic={activeTopic}
        revisedIds={revisedIds}
        totalRevised={totalRevised}
        totalItems={totalItems}
        onSelectTab={handleSelectTab}
        onSelectTopic={handleSelectTopic}
      />
    </div>
  );
}
