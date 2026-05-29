"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "+4", label: "Years Experience" },
  { value: "React, Next.js, Laravel, NestJS", label: "Primary Stack" },
  { value: "+15", label: "Projects Built" },
  { value: "8", label: "Certifications" },
];

const highlights = [
  "Full Stack Developer building modern web applications using React, Next.js, Laravel, NestJS, and WordPress",
  "Experienced in designing APIs, backend systems, and database-driven architectures",
  "Focused on performance, scalability, and clean user experiences across the stack",
  "Meta Front-End Developer Certified — 8 certifications including advanced React and UX/UI Design",
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-32 overflow-hidden">
      {/* Subtle background line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <Reveal>
          <p className="text-sm font-medium text-[#22c55e] tracking-widest uppercase mb-4">
            <span className="opacity-60 mr-1">/</span>about me
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-16">
            Who I Am
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Bio */}
          <div className="space-y-6">
            <Reveal delay={150}>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Full Stack Developer with over 3 years of experience building
                modern web applications from frontend interfaces to backend
                systems
                <span className="text-foreground font-medium"> Next.js</span>,
                <span className="text-foreground font-medium"> React.js</span>,
                <span className="text-foreground font-medium"> TypeScript</span>
                ,<span className="text-foreground font-medium"> Laravel</span>,
                <span className="text-foreground font-medium"> NestJS</span>
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-muted-foreground leading-relaxed">
                I work across the full development lifecycle, from transforming
                Figma designs into responsive user interfaces to building APIs,
                integrating databases, and developing scalable backend
                solutions. Passionate about clean code, maintainable
                architecture, and continuous learning
              </p>
            </Reveal>

            <ul className="space-y-3 mt-8">
              {highlights.map((item, i) => (
                <Reveal key={i} delay={250 + i * 50}>
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 shrink-0 w-1.5 h-1.5 bg-[#22c55e] rounded-full" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Right - Stats + Location card */}
          <div className="space-y-6">
            <Reveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-[#22c55e]/30 transition-colors duration-300"
                  >
                    <p className="font-heading text-3xl font-bold text-[#22c55e] mb-1">
                      {value}
                    </p>
                    <p className="text-sm text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    className="w-4 h-4 text-[#22c55e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="font-medium">Location</p>
                </div>
                <p className="text-foreground font-semibold">Aleppo, Syria</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Open to remote opportunities worldwide
                </p>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    className="w-4 h-4 text-[#22c55e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="font-medium">Currently</p>
                </div>
                <p className="text-foreground font-semibold">
                  Full Stack Developer | Freelance | Open to Work
                </p>
                {/* <p className="text-sm text-muted-foreground mt-1">
                  Remote · Feb 2024 – Present
                </p> */}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
