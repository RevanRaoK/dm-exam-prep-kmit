"use client";

import { BookOpen, LayoutGrid, ListChecks, PlayCircle } from "lucide-react";
import type { Unit } from "@/data/types";
import type { Topic } from "@/data/topics";

type Props = {
  units: Unit[];
  topicsByUnit: Record<string, Topic[]>;
  activeTab: string;
  activeTopic: string | null;
  revisedIds: Set<string>;
  totalRevised: number;
  totalItems: number;
  onSelectTab: (tab: string) => void;
  onSelectTopic: (unitId: string, topicId: string) => void;
};

export default function CourseRail({
  units,
  topicsByUnit,
  activeTab,
  activeTopic,
  revisedIds,
  totalRevised,
  totalItems,
  onSelectTab,
  onSelectTopic,
}: Props) {
  const pct = totalItems ? Math.round((totalRevised / totalItems) * 100) : 0;

  return (
    <aside className="rail" aria-label="Course navigation">
      <div className="brand">
        <div className="eyebrow">Question bank · PYQs 2025–26</div>
        <div className="code">DVT</div>
        <div className="full">Data Visualization Techniques</div>
        <div className="exam">5 units · 2-mark recall · 6 walkthroughs</div>
        <div className="prog">
          <div className="prow">
            <span>Overall revision</span>
            <span>
              {totalRevised}/{totalItems}
            </span>
          </div>
          <div className="bar">
            <i style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      <nav className="railnav" aria-label="Units and topics">
        <div className="utitle">Dashboard</div>
        <ul className="railitems">
          <li>
            <button
              type="button"
              className={`railbtn ${activeTab === "all" ? "active" : ""}`}
              aria-current={activeTab === "all" ? "page" : undefined}
              onClick={() => onSelectTab("all")}
            >
              <span className="dot" />
              <span>All units</span>
              <span className="rcount">{units.length} units</span>
            </button>
          </li>
        </ul>

        <div className="utitle">Units & topic slugs</div>
        <ul className="railitems">
          {units.map((unit) => {
            const questions = unit.questions;
            const revised = questions.filter((question) => revisedIds.has(question.id)).length;
            const topics = topicsByUnit[unit.id] ?? [];
            const open = activeTab === unit.id;
            return (
              <li key={unit.id}>
                <button
                  type="button"
                  className={`railbtn ${open ? "active" : ""}`}
                  aria-current={open ? "page" : undefined}
                  aria-expanded={open}
                  onClick={() => onSelectTab(unit.id)}
                >
                  <span className="dot" />
                  <span>Unit {unit.roman}</span>
                  <span className="rcount">
                    {revised}/{questions.length}
                  </span>
                </button>
                {open ? (
                  <ul className="railtopics">
                    {topics.map((topic, index) => (
                      <li key={topic.id}>
                        <button
                          type="button"
                          className={`railtopic ${activeTopic === topic.id ? "active" : ""}`}
                          onClick={() => onSelectTopic(unit.id, topic.id)}
                          aria-current={activeTopic === topic.id ? "page" : undefined}
                        >
                          <span className="rt-num">{String(index + 1).padStart(2, "0")}</span>
                          <span>{topic.short}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>

        <div className="utitle">Finish</div>
        <ul className="railitems">
          <li>
            <button
              type="button"
              className={`railbtn ${activeTab === "twomarks" ? "active" : ""}`}
              aria-current={activeTab === "twomarks" ? "page" : undefined}
              onClick={() => onSelectTab("twomarks")}
            >
              <span className="dot" />
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <ListChecks size={13} /> 2-Mark Rapid Recall
              </span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`railbtn ${activeTab === "walkthroughs" ? "active" : ""}`}
              aria-current={activeTab === "walkthroughs" ? "page" : undefined}
              onClick={() => onSelectTab("walkthroughs")}
            >
              <span className="dot" />
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <PlayCircle size={13} /> Interactive Walkthroughs
              </span>
            </button>
          </li>
        </ul>
      </nav>

      <div className="railnote">
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
          <BookOpen size={13} /> Ranked by PYQ frequency
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <LayoutGrid size={13} /> Progress saved on this device only
        </div>
      </div>
    </aside>
  );
}
