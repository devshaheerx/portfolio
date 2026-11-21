"use client";

import { Moon, Sun } from "lucide-react";

// Switches between light and dark mode and remembers the choice.
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  };

  return (
    <button type="button" onClick={toggle} aria-label="Switch between light and dark mode" className={`rounded-md p-2 ${className}`}>
      <Sun size={19} className="hidden dark:block" aria-hidden />
      <Moon size={19} className="block dark:hidden" aria-hidden />
    </button>
  );
}
