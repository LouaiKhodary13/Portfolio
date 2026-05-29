"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const skillGroups = [
  {
    category: "Languages",
    icon: "⌨",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Markdown"],
  },
  {
    category: "Frameworks",
    icon: "",
    skills: ["React.js", "Redux.js"],
  },
  {
    category: "CSS Frameworks",
    icon: "",
    skills: ["Tailwind CSS", "Bootstrap", "Material UI", "Chakra UI", "SCSS"],
  },
  {
    category: "Tools & Platforms",
    icon: "",
    skills: ["Git", "GitHub", "NPM", "WordPress", "Vite", "Docker"],
  },
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
      { threshold: 0.1 }
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
        className
      )}
    >
      {children}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-4 py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-medium text-[#22c55e] tracking-widest uppercase mb-4">
            <span className="opacity-60 mr-1">/</span>tech stack
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-16">
            Skills & Tools
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={150 + gi * 80}>
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-[#22c55e]/30 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-[#22c55e]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <p className="font-heading font-semibold text-sm">{group.category}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={cn(
                        "text-xs px-2.5 py-1 border-border bg-background/60 text-foreground hover:border-[#22c55e]/50 hover:text-[#22c55e] transition-colors cursor-default"
                      )}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Ecosystem bar */}
        <Reveal delay={400}>
          <div className="mt-8 p-6 rounded-2xl bg-[#22c55e]/5 border border-[#22c55e]/20">
            <p className="text-sm font-medium text-[#22c55e] mb-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Ecosystem & Integrations
            </p>
            <div className="flex flex-wrap gap-3">
              {["Auth0", "REST APIs", "Figma", "Docker", "Linux", "Node.js", "Agile"].map((tool) => (
                <Badge
                  key={tool}
                  variant="outline"
                  className="text-xs px-3 py-1.5 border-[#22c55e]/30 bg-[#22c55e]/5 text-[#22c55e]"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}