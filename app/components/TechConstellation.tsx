"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { X, ExternalLink, ArrowRight, ArrowUpRight } from "lucide-react";
import SplitTextReveal from "./ui/SplitTextReveal";

gsap.registerPlugin(ScrollTrigger);

interface PanelRow {
  label: string;
  value: string;
}

interface Panel {
  name: string;
  status: string;
  desc: string;
  cta: string;
  href: string;
  previewTitle: string;
  previewRows: PanelRow[];
  fullDescription: string;
  keyFeatures: string[];
  technologies: string[];
  timeline: string;
  teamSize: string;
}

const panels: Panel[] = [
  {
    name: "Visiblo",
    status: "Live",
    desc: "Visibility analytics for AI-first brands with clear, actionable signals.",
    cta: "View Product",
    href: "https://visiblo.in/",
    previewTitle: "Signal coverage",
    previewRows: [
      { label: "Tracked surfaces", value: "152" },
      { label: "Coverage score", value: "84%" },
      { label: "Visibility delta", value: "+12%" },
    ],
    fullDescription:
      "Visiblo is a visibility analytics platform purpose-built for AI-first brands. It tracks how and where your brand appears across AI-powered search surfaces, knowledge panels, and recommendation engines. Unlike traditional SEO tools, Visiblo focuses on the new frontier — understanding your brand's presence in AI-generated answers, chatbot recommendations, and intelligent search results. It provides clear, actionable signals so you can measure, optimize, and grow your visibility in the AI-first internet.",
    keyFeatures: [
      "Real-time tracking across 150+ AI-powered surfaces",
      "Coverage scoring with competitive benchmarking",
      "Visibility delta tracking over time",
      "Actionable signal reports with prioritized recommendations",
      "Dashboard with team-level views and alerts",
      "API access for custom integrations",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Vercel", "TailwindCSS"],
    timeline: "3 months build + ongoing iteration",
    teamSize: "2 engineers + 1 designer",
  },
  {
    name: "Custom CRM",
    status: "Live",
    desc: "A focused CRM designed for product-led teams and reliable data foundations.",
    cta: "View Product",
    href: "https://crm.perioxia.com",
    previewTitle: "Pipeline model",
    previewRows: [
      { label: "Lifecycle stages", value: "6" },
      { label: "Data readiness", value: "In build" },
      { label: "Reporting grid", value: "Scoping" },
    ],
    fullDescription:
      "Our Custom CRM is being built from the ground up for product-led teams who need a reliable, structured data foundation for managing relationships. Instead of bolting on features to a generic CRM, we're designing every layer — from the data model to the reporting grid — to serve teams that care about clean data, clear lifecycle stages, and repeatable workflows. The CRM is designed to integrate seamlessly with internal tools, providing a unified view of customer relationships, pipeline health, and team performance.",
    keyFeatures: [
      "6-stage lifecycle pipeline with custom transitions",
      "Structured data model with validation at every layer",
      "Built-in reporting grid with exportable views",
      "Role-based access control for team management",
      "Integration-ready API for internal tool connectivity",
      "Audit logging for compliance and transparency",
    ],
    technologies: ["Next.js", "TypeScript", "SQLite", "Drizzle ORM", "TailwindCSS", "Node.js"],
    timeline: "Currently in active development",
    teamSize: "2 engineers",
  },
  {
    name: "Infrastructure & R&D",
    status: "Ongoing",
    desc: "The underlying architecture and specialized labs that power our product ecosystem.",
    cta: "View Labs",
    href: "#approach",
    previewTitle: "Delivery flow",
    previewRows: [
      { label: "Architecture maps", value: "Quarterly" },
      { label: "Integration audits", value: "Monthly" },
      { label: "Reliability reviews", value: "Weekly" },
    ],
    fullDescription:
      "Our Systems & Work practice covers the foundational engineering that makes every product possible. This includes system architecture design, integration planning, reliability engineering, and continuous infrastructure improvement. We maintain quarterly architecture maps, run monthly integration audits, and conduct weekly reliability reviews to ensure every system we build and maintain meets our standards for performance, security, and scalability.",
    keyFeatures: [
      "Quarterly architecture mapping and review",
      "Monthly integration audits across all systems",
      "Weekly reliability reviews with incident tracking",
      "Infrastructure-as-code for reproducible environments",
      "Automated testing pipelines for continuous delivery",
      "Documentation-first approach for knowledge sharing",
    ],
    technologies: ["Node.js", "Docker", "GitHub Actions", "PostgreSQL", "Redis", "Terraform"],
    timeline: "Ongoing — continuous improvement",
    teamSize: "Full team involvement",
  },
];

export default function TechConstellation() {
  const pinRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [expandedProject, setExpandedProject] = useState<Panel | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panelsEls = gsap.utils.toArray<HTMLElement>(".product-panel");
      const container = stageRef.current;
      if (!container) return;

      gsap.to(container, {
        xPercent: -((panelsEls.length - 1) * 100) / panelsEls.length,
        ease: "none",
        scrollTrigger: {
          trigger: pinRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${window.innerWidth * panelsEls.length}`,
          invalidateOnRefresh: true,
        },
      });
    }, pinRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (expandedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [expandedProject]);

  return (
    <>
      {/* Heading — scrolls away naturally before pinning */}
      <section id="products" className="relative pt-32 pb-16 bg-surface">
        <div className="container mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent)] font-bold">
            Our Product Ecosystem
          </p>
          <SplitTextReveal className="mt-4 text-3xl sm:text-4xl lg:text-7xl font-bold text-primary tracking-tight">
            Systems designed to lead.
          </SplitTextReveal>
        </div>
      </section>

      {/* Pinned horizontal scroll — cards get full viewport height */}
      <div ref={pinRef} className="relative h-screen w-full overflow-hidden bg-surface">
        <div
          ref={stageRef}
          className="flex h-full items-center"
          style={{ width: `${panels.length * 100}vw` }}
        >
          {panels.map((panel, index) => (
            <div
              key={panel.name}
              className="product-panel h-full flex items-center justify-center px-6 md:px-12"
              style={{ width: "100vw" }}
            >
              <div
                className="w-full max-w-[1200px] mx-auto grid gap-8 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center rounded-3xl border border-white/5 bg-white/5 backdrop-blur-2xl p-8 sm:p-12 lg:p-16 cursor-pointer group hover:border-[var(--accent)]/30 hover:bg-white/[0.07] hover:shadow-[0_0_80px_rgba(75,107,255,0.08)] transition-all duration-500"
                style={{ animationDelay: `${index * 1.5}s` }}
                onClick={() => setExpandedProject(panel)}
              >
                {/* Left column */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl sm:text-4xl font-semibold text-primary">
                      {panel.name}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.3em] text-secondary">
                      {panel.status}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-secondary max-w-xl">{panel.desc}</p>
                  <div className="mt-10 flex items-center gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedProject(panel);
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-gray-200 hover:scale-[1.02] transition-all duration-300"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                    {panel.status === "Live" && (
                      <a
                        href={panel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 px-6 py-3 text-sm font-semibold text-secondary hover:border-[var(--accent)] hover:text-primary transition-all duration-300"
                      >
                        Visit Site
                        <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </a>
                    )}
                  </div>
                  <p className="mt-4 text-[11px] text-secondary/60 italic group-hover:text-[var(--accent)]/80 transition-colors">
                    Click anywhere on this card to expand details
                  </p>
                </div>

                {/* Right column — preview panel */}
                <div className="rounded-3xl border border-white/5 bg-black/40 p-6 md:p-8 backdrop-blur-md relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--accent)]/20 rounded-full blur-[80px]" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-secondary/70">
                      <span className="font-semibold text-[var(--accent)]">
                        {panel.previewTitle}
                      </span>
                      <span className="text-secondary/50">Live Snapshot</span>
                    </div>
                    <div className="mt-6 space-y-4">
                      {panel.previewRows.map((row) => (
                        <div key={row.label} className="group/row">
                          <div className="flex items-center justify-between text-xs text-secondary/90 mb-2">
                            <span>{row.label}</span>
                            <span className="text-white font-medium">{row.value}</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                            <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-[var(--accent)]/40 to-[var(--accent)] group-hover/row:w-[100%] transition-all duration-1000 ease-out" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {expandedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setExpandedProject(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative z-10 w-[95vw] max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[var(--bg-elevated)] p-8 md:p-12 shadow-2xl"
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button
                onClick={() => setExpandedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-[var(--bg-surface)] text-secondary hover:text-primary hover:border-[var(--accent)] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>

              <div className="flex items-center gap-4 mb-2">
                <h2 className="text-4xl sm:text-5xl font-semibold text-primary">
                  {expandedProject.name}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    expandedProject.status === "Live"
                      ? "bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30"
                      : expandedProject.status === "In Development"
                      ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                      : "bg-white/10 text-secondary border border-white/10"
                  }`}
                >
                  {expandedProject.status}
                </span>
              </div>

              <p className="mt-6 text-sm sm:text-base text-secondary leading-relaxed max-w-3xl">
                {expandedProject.fullDescription}
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-6">
                  <h3 className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {expandedProject.keyFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-primary"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-6">
                    <h3 className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {expandedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-full text-xs font-medium text-primary border border-white/10 bg-[var(--bg-elevated)] hover:border-[var(--accent)]/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-5">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-secondary">
                        Timeline
                      </p>
                      <p className="mt-2 text-sm font-medium text-primary">
                        {expandedProject.timeline}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-5">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-secondary">
                        Team
                      </p>
                      <p className="mt-2 text-sm font-medium text-primary">
                        {expandedProject.teamSize}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[var(--bg-surface)] p-6">
                    <h3 className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
                      {expandedProject.previewTitle}
                    </h3>
                    <div className="space-y-3">
                      {expandedProject.previewRows.map((row) => (
                        <div
                          key={row.label}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-secondary">{row.label}</span>
                          <span className="font-semibold text-primary">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-4">
                {expandedProject.status === "Live" && (
                  <a
                    href={expandedProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-white hover:bg-[var(--accent)]/90 transition-colors"
                  >
                    Visit {expandedProject.name}
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                )}
                <button
                  onClick={() => setExpandedProject(null)}
                  className="inline-flex items-center rounded-full border border-white/10 px-8 py-3 text-sm font-semibold text-secondary hover:border-[var(--accent)] hover:text-primary transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
