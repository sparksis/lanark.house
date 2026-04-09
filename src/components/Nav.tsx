"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Nav() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") {
        setTheme(saved);
        document.documentElement.setAttribute("data-theme", saved);
      } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        setTheme("light");
        document.documentElement.setAttribute("data-theme", "light");
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage unavailable
    }
  }

  const links = [
    { href: "/", label: "Home" },
    { href: "/journey", label: "Journey" },
    { href: "/builders", label: "Builders" },
    { href: "/posts", label: "Posts" },
    { href: "/checklist", label: "Checklist" },
    { href: "/post-possession", label: "Post-Possession" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-bold text-[var(--color-text)] hover:text-[var(--color-accent)]"
        >
          lanark.house
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-[var(--color-surface-card)] transition-colors"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] px-4 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
