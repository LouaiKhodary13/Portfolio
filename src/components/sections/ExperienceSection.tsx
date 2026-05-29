"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "Risidio",
    role: "Frontend Developer",
    period: "Feb 2024 – Present",
    location: "Remote · London, UK",
    color: "#22c55e",
    responsibilities: [
      "Translate Figma designs into interactive React web interfaces with pixel-perfect fidelity.",
      "Collaborate with UI/UX team to understand design intent and provide optimization feedback.",
      "Participate in daily stand-ups and end-of-day strategic meetings for project alignment.",
      "Integrate APIs and work closely with backend developers for seamless data flow.",
      "Mentor new team members through codebase onboarding and code standards.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Git", "APIs"],
  },
  {
    company: "Tqniyati",
    role: "Frontend Developer",
    period: "May 2023 – Feb 2024",
    location: "Cairo, Egypt",
    color: "#60a5fa",
    responsibilities: [
      "Built high-quality web solutions using JavaScript, jQuery, CSS, and Bootstrap.",
      "Implemented Figma designs for servio.ae — integrated APIs for full data exchange.",
      "Developed administrator dashboard for managing users, companies, and items.",
      "Contributed to WordPress websites for UCCI Restaurant and Merak Capital clients.",
    ],
    tech: ["JavaScript", "jQuery", "Bootstrap", "WordPress", "CSS"],
  },
  {
    company: "Subul Impact Outsourcing",
    role: "Frontend Developer Intern",
    period: "Oct 2022 – May 2023",
    location: "Remote · Netherlands",
    color: "#a78bfa",
    responsibilities: [
      "Built multiple production websites using HTML, CSS, JavaScript, and React.",
      "Worked with Tailwind CSS, TypeScript, MUI, and Node.js on various projects.",
      "Applied agile development methodologies across a collaborative team environment.",
      "Gained foundational DevOps exposure: Docker, Linux, Containers.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "SCSS", "Node.js"],
  },
  {
    company: "Planton",
    role: "Frontend Developer (Voluntary)",
    period: "Oct 2023 – Feb 2024",
    location: "Remote",
    color: "#f97316",
    responsibilities: [
      "Added error routes and Error components to the Planton website.",
      "Built with Vite + React for enhanced error handling and user experience.",
      "Collaborated with a cross-functional team for smooth project delivery.",
    ],
    tech: ["React", "Vite"],
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

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-4 py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-medium text-[#22c55e] tracking-widest uppercase mb-4">
            <span className="opacity-60 mr-1">/</span>career path
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-16">
            Work Experience
          </h2>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#22c55e]/40 via-border to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 100}>
                <div className="relative">
                  {/* Dot */}
                  <div
                    className="absolute left-8 md:left-1/2 top-7 w-3 h-3 rounded-full border-2 border-background z-10 -translate-x-1/2"
                    style={{ backgroundColor: exp.color, boxShadow: `0 0 12px ${exp.color}80` }}
                  />

                  <div className={cn(
                    "ml-16 md:ml-0 md:w-[calc(50%-2rem)]",
                    i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  )}>
                    <div className="p-6 rounded-2xl bg-card border border-border hover:border-[#22c55e]/20 transition-all duration-300 group">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div
                            className="inline-block w-2 h-2 rounded-full mb-1"
                            style={{ backgroundColor: exp.color }}
                          />
                          <h3 className="font-heading font-bold text-lg">
                            {exp.company}
                          </h3>
                          <p className="text-[#22c55e] font-medium text-sm mt-0.5">
                            {exp.role}
                          </p>
                        </div>
                        <div className="text-right shrink-0 ml-4">
                          <p className="text-xs font-medium text-muted-foreground">
                            {exp.period}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2 mb-5">
                        {exp.responsibilities.map((r, ri) => (
                          <li key={ri} className="flex gap-2.5 items-start">
                            <span
                              className="mt-2 shrink-0 w-1 h-1 rounded-full"
                              style={{ backgroundColor: exp.color }}
                            />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {r}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-0.5 rounded-md border border-border/60 text-muted-foreground bg-background/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}