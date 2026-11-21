"use client";

import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import CvMenu from "./CvMenu";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { profile } from "../data";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "projects", label: "University projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? "border-b border-line bg-surface/90 text-fg backdrop-blur" : "border-b border-transparent text-white"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand text-white shadow-[inset_0_-2px_0_rgb(0_0_0/0.15)]">
            <Code2 size={20} strokeWidth={2.4} aria-hidden />
          </span>
          <span className="font-display text-[16px] font-semibold leading-none tracking-tight sm:text-[17px]">
            Syed Shaheer Ahmed
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`rounded-md px-3 py-2 text-[15px] transition-colors ${
                  active === l.id
                    ? solid
                      ? "bg-brand-soft font-medium text-brand-dark"
                      : "bg-white/10 font-medium text-white"
                    : solid
                      ? "text-muted hover:text-fg"
                      : "text-white/75 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={`hidden rounded-md p-2 sm:inline-flex ${solid ? "text-muted hover:text-fg" : "text-white/75 hover:text-white"}`}
          >
            <GitHubIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={`hidden rounded-md p-2 sm:inline-flex ${solid ? "text-muted hover:text-fg" : "text-white/75 hover:text-white"}`}
          >
            <LinkedInIcon />
          </a>
          <ThemeToggle className={solid ? "text-muted hover:text-fg" : "text-white/75 hover:text-white"} />
          <div className="hidden sm:block">
            <CvMenu size="sm" tone={solid ? "light" : "dark"} />
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="rounded-md p-2 xl:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-surface px-5 pb-5 pt-2 text-fg xl:hidden">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-3 text-[16px] ${active === l.id ? "bg-brand-soft font-medium text-brand-dark" : ""}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-3 sm:hidden">
            <CvMenu size="sm" align="left" />
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 text-muted">
              <GitHubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 text-muted">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
