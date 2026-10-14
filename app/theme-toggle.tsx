"use client";

import { useEffect, useRef } from "react";

export default function ThemeToggle() {
  const switchRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        document.documentElement.dataset.theme = savedTheme;
        switchRef.current?.setAttribute("aria-checked", String(savedTheme === "dark"));
      }
    } catch {}
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = nextTheme;
    switchRef.current?.setAttribute("aria-checked", String(nextTheme === "dark"));
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch {}
  }

  return (
    <button
      type="button"
      ref={switchRef}
      className="theme-toggle"
      onClick={toggleTheme}
      role="switch"
      aria-checked="true"
      aria-label="Dark mode"
      title="Switch light and dark mode"
    >
      <svg className="theme-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </svg>
      <svg className="theme-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.5 14A9 9 0 0 1 10 3.5 9 9 0 1 0 20.5 14Z" />
      </svg>
      <span className="theme-thumb" aria-hidden="true" />
    </button>
  );
}
