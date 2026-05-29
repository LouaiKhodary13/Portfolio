"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "Comfy Store",
    description:
      "Full-featured React e-commerce app with product browsing, cart, filtering, responsive design, Auth0 authentication, and React Context + Reducer state management.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Auth0", "Context API"],
    github: "https://github.com/LouaiKhodary13/react-comfy-sloth-ecommerce",
    demo: "https://react-comfy-sloth-ecommerce-store.netlify.app/",
    accent: "#22c55e",
    image: "🛒",
    featured: true,
  },
  {
    name: "React Cocktail DB",
    description:
      "Cocktail discovery app allowing users to search, browse, and learn about drink recipes and ingredients. Powered by the Cocktail DB API.",
    tech: ["React", "JavaScript", "REST API", "CSS"],
    github: "https://github.com/LouaiKhodary13/cocktails-API-project",
    demo: "https://cocktails-react-project-api.netlify.app/",
    accent: "#60a5fa",
    image: "🍸",
    featured: true,
  },
  {
    name: "Little Lemon Booking",
    description:
      "Restaurant booking app created for Meta's Front-End Developer Capstone. Implements reservation flow, date/time selection, and form validation.",
    tech: ["React", "JavaScript", "CSS", "Meta Certification"],
    github: "https://github.com/LouaiKhodary13/React-little-lemon-app",
    demo: "https://react-little-lemon.netlify.app/",
    accent: "#facc15",
    image: "🍋",
    featured: true,
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
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative px-4 py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-medium text-[#22c55e] tracking-widest uppercase mb-4">
            <span className="opacity-60 mr-1">/</span>selected work
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-12">
            Featured Projects
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={150 + i * 100}>
              <div
                className="group relative flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-[#22c55e]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
              >
                {/* Accent bar */}
                <div
                  className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: project.accent }}
                />

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon + name */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${project.accent}15` }}
                    >
                      {project.image}
                    </div>
                    {project.featured && (
                      <Badge className="text-xs bg-[#22c55e]/10 text-[#22c55e] border-[#22c55e]/20">
                        Featured
                      </Badge>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-[#22c55e] transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-xs px-2 py-0.5 border-border/60 text-muted-foreground"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border/60">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* More link */}
        <Reveal delay={500}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/LouaiKhodary13"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium cursor-pointer"
            >
              View all projects on GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}