"use client";

import { useRef, useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import type { HomeProcessStep } from "@/lib/home-types";

export function HomeProcess({ steps }: { steps: HomeProcessStep[] }) {
  const [selected, setSelected] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const active = steps[selected];
  if (!active) return null;
  return (
    <section className="editorial-section process-editorial">
      <div className="editorial-container">
        <RevealOnScroll>
          <div className="section-intro">
            <div>
              <p className="eyebrow">02 / A simpler way forward</p>
              <h2>
                You have enough
                <br />
                <span className="editorial-text">on your plate.</span>
              </h2>
            </div>
            <p>
              We turn the paperwork into a clear plan. You always know what’s
              happening, and what comes next.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="process-layout">
            <div
              className="process-tabs"
              role="tablist"
              aria-label="How working with Pelago works"
              aria-orientation="vertical"
            >
              {steps.map((step, i) => (
                <button
                  key={step.step}
                  ref={(el) => {
                    buttons.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`process-tab-${i}`}
                  aria-controls="process-panel"
                  aria-selected={selected === i}
                  tabIndex={selected === i ? 0 : -1}
                  className={`process-tab ${selected === i ? "process-tab--active" : ""}`}
                  onClick={() => setSelected(i)}
                  onKeyDown={(event) => {
                    const targets: Record<string, number> = {
                      ArrowDown: (i + 1) % steps.length,
                      ArrowUp: (i - 1 + steps.length) % steps.length,
                      Home: 0,
                      End: steps.length - 1,
                    };
                    if (event.key in targets) {
                      event.preventDefault();
                      const next = targets[event.key];
                      setSelected(next);
                      buttons.current[next]?.focus();
                    }
                  }}
                >
                  <span>{step.step}</span>
                  <strong>{step.title}</strong>
                  <ArrowIcon />
                </button>
              ))}
            </div>
            <div className="process-panel-shell">
              <div
                key={selected}
                className="process-panel"
                role="tabpanel"
                id="process-panel"
                aria-labelledby={`process-tab-${selected}`}
                tabIndex={0}
              >
                <div className="process-panel__top">
                  <span className="eyebrow">A clear path, together</span>
                  <span className="process-panel__count">
                    {active.step} / {String(steps.length).padStart(2, "0")}
                  </span>
                </div>
                <span className="process-panel__number" aria-hidden="true">
                  {active.step}
                </span>
                <div className="process-panel__copy">
                  <h3>{active.title}</h3>
                  <p>{active.desc}</p>
                  <div className="process-deliverable">
                    <span className="process-check" aria-hidden="true">
                      ✓
                    </span>
                    <div>
                      <small>WHAT YOU WALK AWAY WITH</small>
                      <strong>{active.deliverable}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
