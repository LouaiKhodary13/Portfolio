"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { threshold: 0.3 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-4 left-4 right-4 z-50 transition-all duration-300",
        scrolled
          ? "top-3"
          : ""
      )}
    >
      <nav
        className={cn(
          "mx-auto max-w-5xl flex items-center justify-between px-5 py-3 rounded-2xl border transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-md border-border shadow-lg shadow-black/10"
            : "bg-background/60 backdrop-blur-sm border-border/50"
        )}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-heading font-700 text-base tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span className="text-primary font-bold">{"<"}</span>
          <span className="text-[#22c55e] font-bold">Louai</span>
          <span className="text-primary font-bold">{"/>"}</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-lg transition-all duration-200 cursor-pointer",
                  active === id
                    ? "text-[#22c55e] bg-[#22c55e]/10 font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:louai.z.khodary96@gmail.com"
            className="px-4 py-1.5 text-sm bg-[#22c55e] text-white rounded-lg font-medium hover:bg-[#16a34a] transition-colors cursor-pointer"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mx-4 mt-2 p-4 rounded-2xl bg-background/95 backdrop-blur-md border border-border shadow-xl">
          <ul className="flex flex-col gap-1">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 cursor-pointer",
                    active === id
                      ? "text-[#22c55e] bg-[#22c55e]/10 font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-border">
            <a
              href="mailto:louai.z.khodary96@gmail.com"
              className="block w-full text-center px-4 py-2 text-sm bg-[#22c55e] text-white rounded-lg font-medium hover:bg-[#16a34a] transition-colors cursor-pointer"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}