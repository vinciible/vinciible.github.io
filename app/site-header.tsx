"use client";

import { useSyncExternalStore } from "react";
import SocialLinks from "./social-links";
import ThemeToggle from "./theme-toggle";
import "./site-header.css";

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function getScrollSnapshot() {
  return window.scrollY > 24;
}

function getServerSnapshot() {
  return false;
}

export default function SiteHeader() {
  const isScrolled = useSyncExternalStore(
    subscribeToScroll,
    getScrollSnapshot,
    getServerSnapshot,
  );

  return (
    <header className={`site-header${isScrolled ? " site-header-scrolled" : ""}`}>
      <div className="site-header-inner">
        <div className="profile-identity">
          <h1>Vincent Angeles</h1>
          <p>Aspiring Software Developer / IT Professional</p>
          <SocialLinks />
        </div>
        <nav className="section-nav" aria-label="Page sections">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
