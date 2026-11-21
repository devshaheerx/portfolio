"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Download, FileText } from "lucide-react";
import { cvFiles } from "../data";

export default function CvMenu({
  tone = "light",
  align = "right",
  size = "md",
  up = false,
}: {
  tone?: "light" | "dark";
  align?: "left" | "right";
  size?: "sm" | "md";
  up?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const pad = size === "sm" ? "px-3 py-1.5 text-[14px]" : "px-4 py-2.5 text-[15px]";
  const look =
    tone === "dark"
      ? "bg-amber text-[#0f1e33] hover:bg-[#ffb83d]"
      : "bg-brand-deep text-white hover:opacity-90";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex items-center gap-2 rounded-lg font-medium transition-colors ${pad} ${look}`}
      >
        <Download size={16} aria-hidden />
        Download CV
        <ChevronDown size={16} aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          role="menu"
          className={`absolute z-30 w-72 ${up ? "bottom-full mb-2" : "mt-2"} overflow-hidden rounded-xl border border-line bg-surface p-1.5 text-fg shadow-[0_20px_40px_-16px_rgba(15,30,51,0.35)] ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {cvFiles.map((f) => (
            <a
              key={f.href}
              role="menuitem"
              href={f.href}
              download
              onClick={() => setOpen(false)}
              className="flex items-start gap-3 rounded-lg p-3 hover:bg-brand-soft focus-visible:bg-brand-soft"
            >
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-brand-soft text-brand">
                <FileText size={17} aria-hidden />
              </span>
              <span>
                <span className="block text-[15px] font-semibold">{f.label}</span>
                <span className="block text-[13px] text-muted">{f.note}</span>
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
