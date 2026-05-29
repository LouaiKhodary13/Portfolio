"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const certs = [
  { issuer: "META", title: "Meta Front-End Developer Specialization", badge: "META" },
  { issuer: "META", title: "Front-End Developer Capstone", badge: "META" },
  { issuer: "META", title: "Advanced React", badge: "META" },
  { issuer: "META", title: "React Basics", badge: "META" },
  { issuer: "META", title: "Programming with JavaScript", badge: "META" },
  { issuer: "META", title: "HTML and CSS in depth", badge: "META" },
  { issuer: "META", title: "Introduction to Front-End Development", badge: "META" },
  { issuer: "META", title: "Principles of UX/UI Design", badge: "META" },
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

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative px-4 py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-medium text-[#22c55e] tracking-widest uppercase mb-4">
            <span className="opacity-60 mr-1">/</span>credentials
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-12">
            Certifications
          </h2>
        </Reveal>

        {/* Meta certification highlight */}
        <Reveal delay={150}>
          <div className="mb-10 p-8 rounded-2xl bg-gradient-to-br from-[#22c55e]/10 via-[#22c55e]/5 to-transparent border border-[#22c55e]/20">
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#22c55e]/15 flex items-center justify-center">
                <span className="text-2xl font-heading font-black text-[#22c55e]">M</span>
              </div>
              <div>
                <Badge className="mb-3 bg-[#22c55e]/10 text-[#22c55e] border-[#22c55e]/20">
                  Meta Certified
                </Badge>
                <h3 className="font-heading text-xl font-bold mb-1">
                  Meta Front-End Developer Specialization
                </h3>
                <p className="text-muted-foreground text-sm">
                  Issued by Meta · 8 comprehensive certifications covering all aspects of modern front-end development
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <Reveal key={cert.title} delay={200 + i * 50}>
              <div className="p-5 rounded-xl bg-card border border-border hover:border-[#22c55e]/30 transition-all duration-200 group cursor-default">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 shrink-0 rounded-lg bg-[#22c55e]/10 flex items-center justify-center">
                    <span className="text-xs font-black text-[#22c55e]">M</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{cert.issuer}</span>
                </div>
                <p className="text-sm font-medium leading-snug group-hover:text-[#22c55e] transition-colors">
                  {cert.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education */}
        <Reveal delay={500}>
          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="font-heading text-xl font-bold mb-6">Education</h3>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#22c55e]/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-bold">Cordoba Private University</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Bachelor&apos;s Degree, Computer Systems in Engineering
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Aleppo, Syria · 2018 – 2022</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Languages */}
        <Reveal delay={550}>
          <div className="mt-8">
            <h3 className="font-heading text-xl font-bold mb-6">Languages</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { lang: "Arabic", level: "Native" },
                { lang: "English", level: "Proficient" },
              ].map(({ lang, level }) => (
                <div key={lang} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border">
                  <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <div>
                    <p className="font-medium text-sm">{lang}</p>
                    <p className="text-xs text-muted-foreground">{level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}