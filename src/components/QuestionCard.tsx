"use client";

import { useCallback, useEffect, useState } from "react";
import {
  AlertTriangle,
  Check,
  ChevronDown,
  Flame,
  History,
  PlayCircle,
  RotateCcw,
} from "lucide-react";
import type { Question } from "@/data/types";
import { PAPER_COUNT } from "@/data/types";
import RichText from "./RichText";
import { DiagramById } from "./diagrams";

const STORAGE_KEY = "dvt-merged-revised-v1";

const walkthroughLabels: Record<string, string> = {
  pipeline: "Visualization Pipeline",
  preprocess: "Data Preprocessing",
  scatter: "Scatterplot Mapping",
  pcp: "Parallel Coordinates",
  fisheye: "Fisheye Lens",
  treemap: "Treemap Layout",
};

function readRevisedIds(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

type Props = {
  question: Question;
  unitLabel?: string;
  defaultOpen?: boolean;
  onOpenWalkthrough?: (id: string) => void;
};

export default function QuestionCard({
  question,
  unitLabel,
  defaultOpen = false,
  onOpenWalkthrough,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const [revised, setRevised] = useState(false);
  const q = question;

  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen, q.id]);

  useEffect(() => {
    const sync = () => setRevised(readRevisedIds().includes(q.id));
    sync();
    window.addEventListener("dm-progress", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("dm-progress", sync);
      window.removeEventListener("storage", sync);
    };
  }, [q.id]);

  const toggleRevised = useCallback(() => {
    const ids = readRevisedIds();
    const next = ids.includes(q.id)
      ? ids.filter((id) => id !== q.id)
      : [...ids, q.id];
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      return;
    }
    setRevised(next.includes(q.id));
    window.dispatchEvent(new Event("dm-progress"));
  }, [q.id]);

  const frequencyText =
    q.freq >= 2
      ? `Repeated in ${q.freq} / ${PAPER_COUNT} merged sources`
      : `Seen in ${q.freq} / ${PAPER_COUNT} merged sources`;

  const detail =
    q.papers ??
    "This question appears once across the six merged DVT question sources.";

  return (
    <article className={`qcard ${open ? "open" : ""}`} id={q.id}>
      <button
        type="button"
        className="qhead"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={`${q.id}-body`}
      >
        <div>
          <div className="qmeta">
            <span
              className={`tag marks ${q.marks === 10 ? "" : q.marks >= 5 ? "m5" : "fresh"}`}
            >
              [{q.marks}M]
            </span>
            {q.freq >= 2 ? (
              <span className="tag hot">
                <Flame size={12} aria-hidden="true" />
                🔥 Repeated {q.freq}/{PAPER_COUNT}
              </span>
            ) : (
              <span className="tag fresh">
                <History size={12} aria-hidden="true" />
                1/{PAPER_COUNT} sources
              </span>
            )}
            {q.walkthrough ? (
              <span className="tag accent">
                <PlayCircle size={12} aria-hidden="true" />
                Walkthrough
              </span>
            ) : null}
            {unitLabel ? <span className="tag unit">{unitLabel}</span> : null}
            {revised ? (
              <span className="tag fresh">
                <Check size={12} aria-hidden="true" />
                Revised
              </span>
            ) : null}
          </div>

          <h3 className="qtitle">
            <RichText text={q.question} />
          </h3>

          <div className="qhistory">
            <Flame className="hflame" size={19} aria-hidden="true" />
            <div className="hmain">
              <div className="hcount">{frequencyText}</div>
              <div className="hdetail">
                <RichText text={detail} />
              </div>
            </div>
          </div>
        </div>
        <span className="qchev" aria-hidden="true">
          <ChevronDown size={18} />
        </span>
      </button>

      <div
        className={`qbody ${open ? "open" : ""}`}
        id={`${q.id}-body`}
        hidden={!open}
      >
        <div className="qbody-inner">
          <p className="answer-label">
            Exam-ready answer · one complete sentence per point
          </p>

          {q.sections?.length ? (
            <div>
              {q.sections.map((section, sectionIndex) => (
                <section className="answer-section" key={section.heading}>
                  <h4 className="answer-subhead">
                    <span className="secnum">
                      {String(sectionIndex + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </h4>
                  <ul className="points">
                    {section.bullets.map((point, index) => (
                      <li key={index}>
                        <RichText text={point} />
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          ) : (
            <ul className="points">
              {(q.answer ?? []).map((point, index) => (
                <li key={index}>
                  <RichText text={point} />
                </li>
              ))}
            </ul>
          )}

          {q.formula ? (
            <div className="formula">
              <span className="fhead">Formula / structure to reproduce</span>
              <RichText text={q.formula} />
            </div>
          ) : null}

          {q.table ? (
            <div className="qtable-wrap">
              <table className="qtable">
                <thead>
                  <tr>
                    {q.table.head.map((cell, index) => (
                      <th key={index}>
                        <RichText text={cell} />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {q.table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>
                          <RichText text={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}

          {q.diagrams?.length ? (
            <div className="answer-diagrams">
              {q.diagrams.map((diagramId) => (
                <DiagramById key={diagramId} id={diagramId} />
              ))}
            </div>
          ) : null}

          {q.note ? (
            <div className="qnote">
              <AlertTriangle size={16} aria-hidden="true" />
              <div>
                <RichText text={q.note} />
              </div>
            </div>
          ) : null}

          {q.walkthrough ? (
            <div className="qlinks">
              <button
                type="button"
                className="qlink"
                onClick={() => onOpenWalkthrough?.(q.walkthrough as string)}
              >
                <PlayCircle size={14} aria-hidden="true" />
                Open the interactive{" "}
                {walkthroughLabels[q.walkthrough ?? ""] ?? "algorithm"} walkthrough
              </button>
            </div>
          ) : null}

          <div className="donebar">
            <button
              type="button"
              className={`btn ${revised ? "done" : ""}`}
              onClick={toggleRevised}
              aria-pressed={revised}
            >
              {revised ? <Check size={15} /> : <RotateCcw size={15} />}
              {revised ? "Revised — tap to undo" : "Mark as Revised"}
            </button>
            <span>
              Saved in your browser only · no account needed · progress follows this
              device.
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
