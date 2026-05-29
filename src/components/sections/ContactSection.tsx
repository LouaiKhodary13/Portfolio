"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/LouaiKhodary13",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/louai-khodary-b29347302/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Portfolio",
    url: "https://louai-khodary.vercel.app/",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    name: "Frontend Mentor",
    url: "https://www.frontendmentor.io/profile/LouaiKhodary13",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.31l8.36 4.8v9.78L12 21.69l-8.36-4.8V7.11L12 2.31zM12 16l-7-4v-6.32l7 4 7-4V12l-7 4z" />
      </svg>
    ),
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
      { threshold: 0.2 }
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

export function ContactSection() {
  return (
    <section id="contact" className="relative px-4 py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-sm font-medium text-[#22c55e] tracking-widest uppercase mb-4">
              <span className="opacity-60 mr-1">/</span>get in touch
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s Work Together
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Open to new opportunities, freelance projects, and creative collaborations.
              Drop me a line — I&apos;d love to hear from you.
            </p>
          </Reveal>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <Reveal delay={200}>
            <a
              href="mailto:louai.z.khodary96@gmail.com"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-[#22c55e]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#22c55e]/10 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#22c55e]/10 flex items-center justify-center shrink-0 group-hover:bg-[#22c55e]/20 transition-colors">
                <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-sm mb-0.5">Email</p>
                <p className="text-muted-foreground text-sm">louai.z.khodary96@gmail.com</p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={250}>
            <a
              href="tel:+201018897762"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-[#22c55e]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#22c55e]/10 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#22c55e]/10 flex items-center justify-center shrink-0 group-hover:bg-[#22c55e]/20 transition-colors">
                <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-sm mb-0.5">Phone</p>
                <p className="text-muted-foreground text-sm">+20 101 889 7762</p>
              </div>
            </a>
          </Reveal>
        </div>

        {/* Social links */}
        <Reveal delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card border border-border hover:border-[#22c55e]/40 hover:bg-[#22c55e]/5 transition-all duration-200 group cursor-pointer"
                aria-label={social.name}
              >
                <span className="text-muted-foreground group-hover:text-[#22c55e] transition-colors">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* References */}
        <Reveal delay={400}>
          <div className="p-8 rounded-2xl bg-card border border-border">
            <p className="text-sm font-medium text-[#22c55e] mb-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              References
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Hamdi Khalil",
                  title: "Senior AI and Fullstack Engineer",
                  email: "hamdi3khalil@gmail.com",
                  phone: "+49 176 81275777",
                },
                {
                  name: "Olaide Olanipekun",
                  title: "Senior Frontend Developer",
                  email: "oolaide.dev@gmail.com",
                  phone: "+44 743 858 5545",
                },
              ].map((ref) => (
                <div key={ref.name} className="p-4 rounded-xl bg-background/50 border border-border">
                  <p className="font-medium text-sm">{ref.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{ref.title}</p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <a
                      href={`mailto:${ref.email}`}
                      className="text-xs text-[#22c55e] hover:underline cursor-pointer"
                    >
                      {ref.email}
                    </a>
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