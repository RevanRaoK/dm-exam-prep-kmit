"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import RichText from "./RichText";

export type WalkthroughStep = {
  title: string;
  bullets: string[];
  visual: React.ReactNode;
};

type Props = {
  title: string;
  subtitle: string;
  steps: WalkthroughStep[];
};

export default function StepByStepVisualizer({ title, subtitle, steps }: Props) {
  const [index, setIndex] = useState(0);
  const total = steps.length;

  useEffect(() => {
    setIndex(0);
  }, [title]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName?.toLowerCase();
      if (tag === "input" || tag === "select" || tag === "textarea") return;
      if (document.querySelectorAll("[data-step-player]").length > 1) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((value) => Math.min(total - 1, value + 1));
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((value) => Math.max(0, value - 1));
      } else if (event.key === "Home") {
        event.preventDefault();
        setIndex(0);
      } else if (event.key === "End") {
        event.preventDefault();
        setIndex(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  if (!total) return null;
  const step = steps[index];

  return (
    <div className="player" data-step-player>
      <div className="player-head">
        <div>
          <div className="eyebrow">Interactive slide walkthrough</div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <span className="step-pill">
          Step {index + 1} of {total}
        </span>
      </div>

      <div className="step-view" aria-live="polite">
        <div className="step-title">{step.title}</div>
        {step.visual}
      </div>

      <div className="step-bullets">
        {step.bullets.map((bullet, bulletIndex) => (
          <div className="sbc" key={bulletIndex}>
            <span className="num" aria-hidden="true">
              {bulletIndex + 1}
            </span>
            <div>
              <RichText text={bullet} />
            </div>
          </div>
        ))}
      </div>

      <div className="player-controls">
        <div className="ctrl-group">
          <button
            type="button"
            className="btn"
            onClick={() => setIndex(0)}
            disabled={index === 0}
            title="Back to the first step"
          >
            <RotateCcw size={14} />
            Reset
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => setIndex((value) => Math.max(0, value - 1))}
            disabled={index === 0}
          >
            <ArrowLeft size={14} />
            ← Previous Step
          </button>
          <button
            type="button"
            className="btn primary"
            onClick={() => setIndex((value) => Math.min(total - 1, value + 1))}
            disabled={index === total - 1}
          >
            Next Step →
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="ctrl-group">
          <div className="dots" role="tablist" aria-label="Walkthrough steps">
            {steps.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                role="tab"
                aria-selected={dotIndex === index}
                aria-label={`Go to step ${dotIndex + 1}`}
                className={`dotbtn ${dotIndex === index ? "active" : dotIndex < index ? "done" : ""}`}
                onClick={() => setIndex(dotIndex)}
              />
            ))}
          </div>
          <span className="kbd-hint">
            <span className="kbd">←</span> <span className="kbd">→</span> keys work too
          </span>
        </div>
      </div>
    </div>
  );
}
