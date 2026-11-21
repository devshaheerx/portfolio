"use client";

import { useEffect, useState } from "react";

type Col = 0 | 1 | 2;
type Card = { id: string; title: string; note: string };

const CARDS: Card[] = [
  { id: "orbit", title: "Orbit", note: "Real-time boards" },
  { id: "ledger", title: "Ledger", note: "OAuth + sessions" },
  { id: "snip", title: "Snip", note: "Click analytics" },
  { id: "next", title: "Your next project", note: "Open to work" },
];

const COLUMNS = ["Planned", "Building", "Shipped"];

// Each step: where every card sits, which card was just moved, and where the cursor points.
const STEPS: {
  at: Record<string, Col>;
  fresh?: string;
  cursor: { col: Col; row: number };
  status: string;
}[] = [
  { at: { orbit: 2, ledger: 2, snip: 1, next: 0 }, cursor: { col: 1, row: 0 }, status: "typing" },
  { at: { orbit: 2, ledger: 2, snip: 2, next: 0 }, fresh: "snip", cursor: { col: 2, row: 2 }, status: "Snip moved to Shipped" },
  { at: { orbit: 2, ledger: 2, snip: 2, next: 0 }, cursor: { col: 0, row: 0 }, status: "Snip moved to Shipped" },
  { at: { orbit: 2, ledger: 2, snip: 2, next: 1 }, fresh: "next", cursor: { col: 1, row: 0 }, status: "Your next project moved to Building" },
];

const ROW_H = 68;

export default function LiveBoard() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // People who prefer reduced motion see a still board.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setStep((s) => (s + 1) % STEPS.length), 2400);
    return () => clearInterval(id);
  }, []);

  const s = STEPS[step];

  return (
    <figure
      aria-label="A small project board showing Orbit, Ledger and Snip shipped, and your next project moving into Building"
      className="relative w-full rounded-2xl border border-white/10 bg-white p-4 text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]"
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="font-display text-[15px] font-semibold">shaheer / portfolio</p>
        <div className="flex items-center gap-2 text-[13px] text-muted">
          <span className="flex -space-x-2">
            <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-ink text-[11px] font-semibold text-white">
              SS
            </span>
            <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-brand text-[11px] font-semibold text-white">
              You
            </span>
          </span>
          <span className="pulse-dot h-2 w-2 rounded-full bg-signal" aria-hidden />
          2 online
        </div>
      </div>

      <div className="relative grid grid-cols-3 gap-2">
        {COLUMNS.map((title, c) => {
          const cards = CARDS.filter((card) => s.at[card.id] === c);
          return (
            <div key={title} className="min-h-[170px] sm:min-h-[230px] rounded-xl bg-paper p-2">
              <p className="mb-2 flex items-center justify-between px-1 text-[12px] font-medium text-muted">
                {title}
                <span>{cards.length}</span>
              </p>
              <ul className="space-y-2">
                {cards.map((card) => (
                  <li
                    key={card.id}
                    data-fresh={s.fresh === card.id}
                    className="board-card rounded-lg border border-line bg-white px-2.5 py-2"
                  >
                    <p className="text-[13px] font-semibold leading-tight">{card.title}</p>
                    <p className="mt-0.5 truncate text-[11.5px] text-muted">{card.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <div
          aria-hidden
          className="board-cursor pointer-events-none absolute left-0 top-0 hidden sm:block"
          style={{
            transform: `translate(calc(${s.cursor.col * 100}% + ${s.cursor.col * 8}px), 0)`,
            width: "33.33%",
          }}
        >
          <div
            className="board-cursor absolute"
            style={{ transform: `translate(70%, ${44 + s.cursor.row * ROW_H}px)` }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" className="drop-shadow">
              <path d="M1 1l5.5 13 2-5.5L14 6.5z" fill="#142033" stroke="white" strokeWidth="1" />
            </svg>
            <span className="ml-3 rounded-md bg-ink px-1.5 py-0.5 text-[11px] font-medium text-white">
              Shaheer
            </span>
          </div>
        </div>
      </div>

      <figcaption className="mt-3 flex h-5 items-center gap-2 text-[12.5px] text-muted" aria-live="polite">
        {s.status === "typing" ? (
          <>
            Shaheer is typing
            <span className="typing inline-flex gap-0.5" aria-hidden>
              <span className="h-1 w-1 rounded-full bg-muted" />
              <span className="h-1 w-1 rounded-full bg-muted" />
              <span className="h-1 w-1 rounded-full bg-muted" />
            </span>
          </>
        ) : (
          <>
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
            {s.status}
          </>
        )}
      </figcaption>
    </figure>
  );
}
