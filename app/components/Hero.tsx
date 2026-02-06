"use client";

import type { MouseEvent as ReactMouseEvent } from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const metrics = [
  { label: "Latency", value: "12ms" },
  { label: "Uptime", value: "99.97%" },
  { label: "Agents", value: "150+" },
  { label: "Status", value: "Armed" },
];

const nodes = [
  { cx: 20, cy: 30, r: 3 },
  { cx: 40, cy: 20, r: 4 },
  { cx: 60, cy: 35, r: 3 },
  { cx: 80, cy: 18, r: 4 },
  { cx: 75, cy: 60, r: 3 },
  { cx: 55, cy: 70, r: 4 },
  { cx: 30, cy: 55, r: 3 },
];

const lines = [
  { x1: 20, y1: 30, x2: 40, y2: 20 },
  { x1: 40, y1: 20, x2: 60, y2: 35 },
  { x1: 60, y1: 35, x2: 80, y2: 18 },
  { x1: 60, y1: 35, x2: 75, y2: 60 },
  { x1: 55, y1: 70, x2: 30, y2: 55 },
  { x1: 30, y1: 55, x2: 20, y2: 30 },
];

const headline = "BUILDING THE INFRASTRUCTURE THAT POWERS TOMORROW'S ENTERPRISES";
const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function randomChar() {
  return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
}

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".hero-letter", { opacity: 1, y: 0, filter: "blur(0px)" });
        gsap.set(".hero-panel", { opacity: 1, y: 0, filter: "blur(0px)" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-panel", {
          y: 24,
          opacity: 0,
          filter: "blur(6px)",
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.2,
        });

        const letters = gsap.utils.toArray<HTMLElement>(".hero-letter");
        letters.forEach((letter, index) => {
          const finalChar = letter.dataset.final || "";
          if (finalChar.trim() === "") {
            letter.textContent = " ";
            return;
          }

          gsap.set(letter, { opacity: 0, y: 20, filter: "blur(6px)" });
          gsap.to(letter, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power3.out",
            delay: index * 0.02,
          });

          const start = performance.now() + index * 18;
          const duration = 520;
          const tick = (now: number) => {
            if (now < start) {
              requestAnimationFrame(tick);
              return;
            }
            const progress = Math.min((now - start) / duration, 1);
            letter.textContent = progress < 1 ? randomChar() : finalChar;
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };
          requestAnimationFrame(tick);
        });

        gsap.to(".hero-node", {
          scale: 1.2,
          opacity: 0.6,
          repeat: -1,
          yoyo: true,
          duration: 1.8,
          ease: "sine.inOut",
          stagger: 0.2,
        });

        gsap.to(".hero-glow", {
          rotate: 360,
          duration: 20,
          repeat: -1,
          ease: "none",
        });
      });

      const glow = glowRef.current;
      if (glow) {
        const xTo = gsap.quickTo(glow, "x", { duration: 0.6, ease: "power3.out" });
        const yTo = gsap.quickTo(glow, "y", { duration: 0.6, ease: "power3.out" });

        const handleMove = (event: MouseEvent) => {
          const bounds = container.current?.getBoundingClientRect();
          if (!bounds) return;
          xTo(event.clientX - bounds.left - 140);
          yTo(event.clientY - bounds.top - 140);
        };

        const handleLeave = () => {
          xTo(boundsCenterX(container.current));
          yTo(boundsCenterY(container.current));
        };

        container.current?.addEventListener("mousemove", handleMove);
        container.current?.addEventListener("mouseleave", handleLeave);

        return () => {
          container.current?.removeEventListener("mousemove", handleMove);
          container.current?.removeEventListener("mouseleave", handleLeave);
        };
      }
    }, container);

    return () => ctx.revert();
  }, []);

  const handleMagneticMove = (event: ReactMouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    gsap.to(target, { x: x * 0.2, y: y * 0.2, duration: 0.4, ease: "power3.out" });
  };

  const handleMagneticLeave = (event: ReactMouseEvent<HTMLButtonElement>) => {
    gsap.to(event.currentTarget, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1,0.4)" });
  };

  return (
    <section ref={container} className="relative min-h-[95vh] overflow-hidden pt-12">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="hero-glow absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.24),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-[-20%] left-[-15%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_60%)] blur-2xl" />
      </div>

      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.18),transparent_65%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        <nav className="hero-panel flex items-center justify-between text-xs uppercase tracking-[0.3em] text-secondary">
          <div className="font-display text-lg tracking-[0.3em] text-primary">Perioxia</div>
          <div className="hidden md:flex items-center gap-10 font-mono-tech text-[11px]">
            <a href="#pillars" className="hover:text-primary transition-colors">Work</a>
            <a href="#visiblo" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center mt-20">
          <div className="space-y-8">
            <div className="hero-panel inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono-tech text-secondary">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-lime)] animate-pulse" />
              Systems online · 24/7 signal
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display leading-[1.05] text-primary">
              {headline.split("").map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className="hero-letter inline-block"
                  data-final={char}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              <span className="hero-letter inline-block text-gradient" data-final=".">.</span>
            </h1>

            <p className="hero-panel text-lg text-secondary max-w-xl">
              Perioxia Technology builds critical AI infrastructure across autonomous agents, predictive intelligence,
              and real-time robotic systems. Visiblo is the first product in a multi-division ecosystem built for the
              next era of enterprise.
            </p>

            <div className="hero-panel flex flex-wrap gap-4">
              <button
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                className="rounded-full bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#FF0080] px-6 py-3 text-sm font-semibold text-slate-950"
              >
                Explore Systems →
              </button>
              <button
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-primary hover:border-white/30 hover:bg-white/10 transition"
              >
                See Visiblo →
              </button>
            </div>

            <div className="hero-panel grid grid-cols-2 sm:grid-cols-4 gap-6">
              {metrics.map((metric) => (
                <div key={metric.label} className="glass-card rounded-2xl px-4 py-5">
                  <div className="text-2xl font-mono-tech text-primary">{metric.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-secondary">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel relative rounded-[28px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8">
            <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.18),transparent_55%)]" />
            <div className="relative flex h-full flex-col gap-6">
              <div className="flex items-center justify-between text-xs font-mono-tech uppercase tracking-[0.3em] text-secondary">
                <span>Neural field</span>
                <span className="text-[10px] text-primary">Live sync</span>
              </div>
              <div className="relative flex-1">
                <svg viewBox="0 0 100 100" className="w-full h-[320px]">
                  <defs>
                    <linearGradient id="nodeGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#00D4FF" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#FF0080" />
                    </linearGradient>
                  </defs>
                  {lines.map((line, index) => (
                    <line
                      key={`line-${index}`}
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      stroke="url(#nodeGradient)"
                      strokeWidth="0.6"
                      strokeDasharray="2 3"
                      opacity="0.6"
                    />
                  ))}
                  {nodes.map((node, index) => (
                    <circle
                      key={`node-${index}`}
                      className="hero-node"
                      cx={node.cx}
                      cy={node.cy}
                      r={node.r}
                      fill="url(#nodeGradient)"
                    />
                  ))}
                </svg>
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-secondary">
                  Autonomous data paths · Adaptive flow · Predictive routing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function boundsCenterX(target: HTMLElement | null) {
  if (!target) return 0;
  const rect = target.getBoundingClientRect();
  return rect.width / 2 - 140;
}

function boundsCenterY(target: HTMLElement | null) {
  if (!target) return 0;
  const rect = target.getBoundingClientRect();
  return rect.height / 2 - 140;
}
