"use client";

import { useEffect, useRef } from "react";

const taglines = [
  "Full Stack Developer building modern web applications",
  "React.js , Next.js & Laravel & Nest.js",
  "From database design to user interface",
  "Turning ideas into scalable web solutions",
];

export function HeroSection() {
  const taglineIndex = useRef(0);
  const charIndex = useRef(0);
  const displayed = useRef("");
  const isDeleting = useRef(false);
  const spanRef = useRef<HTMLSpanElement>(null);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!mounted.current || !spanRef.current) return;
      const current = taglines[taglineIndex.current];

      if (!isDeleting.current) {
        displayed.current = current.slice(0, ++charIndex.current);
        spanRef.current.textContent = displayed.current;

        if (charIndex.current === current.length) {
          timeout = setTimeout(() => {
            isDeleting.current = true;
            tick();
          }, 2000);
          return;
        }
      } else {
        displayed.current = current.slice(0, --charIndex.current);
        spanRef.current.textContent = displayed.current;

        if (charIndex.current === 0) {
          isDeleting.current = false;
          taglineIndex.current = (taglineIndex.current + 1) % taglines.length;
        }
      }

      const speed = isDeleting.current ? 30 : 70;
      timeout = setTimeout(tick, speed);
    };

    timeout = setTimeout(tick, 500);
    return () => {
      mounted.current = false;
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#22c55e]/5 blur-[100px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-[#22c55e]/10 blur-[60px]" />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-32 right-12 w-2 h-2 bg-[#22c55e] rounded-full animate-pulse opacity-60" />
      <div className="absolute bottom-48 left-12 w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse opacity-40" />
      <div className="absolute top-1/2 right-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-30" />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 border border-[#22c55e]/30 rounded-full animate-pulse" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none mb-4">
          <span className="text-foreground">Louai </span>
          <span className="text-[#22c55e]">Khodary</span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl font-medium text-muted-foreground mb-2 tracking-wide">
          FullStack Developer
        </p>

        {/* Typewriter tagline */}
        <div className="h-12 flex items-center justify-center mb-10">
          <span
            ref={spanRef}
            className="text-lg sm:text-xl text-muted-foreground font-normal"
          />
          <span className="w-0.5 h-5 bg-[#22c55e] ml-1 animate-pulse" />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3 bg-[#22c55e] text-white rounded-xl font-semibold text-base hover:bg-[#16a34a] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#22c55e]/20 cursor-pointer"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3 border border-border bg-card/50 backdrop-blur-sm rounded-xl font-semibold text-base hover:bg-accent hover:border-primary/30 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            Get in Touch
          </a>
          <a
            href="https://github.com/LouaiKhodary13"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-border bg-card/50 backdrop-blur-sm rounded-xl font-semibold text-base hover:bg-accent transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
