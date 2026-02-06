"use client";

import type { MouseEvent as ReactMouseEvent } from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const headline =
  "BUILDING THE INFRASTRUCTURE THAT POWERS TOMORROW'S ENTERPRISES";
const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

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

function randomChar() {
  return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLElement>(".hero-letter");

      letters.forEach((letter, index) => {
        const finalChar = letter.dataset.final || " ";

        gsap.set(letter, { opacity: 0, y: 20, filter: "blur(6px)" });

        gsap.to(letter, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          delay: index * 0.02,
          ease: "power3.out",
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
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      });

      gsap.from(".hero-panel", {
        y: 24,
        opacity: 0,
        filter: "blur(6px)",
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
      });

      gsap.to(".hero-node", {
        scale: 1.25,
        opacity: 0.6,
        repeat: -1,
        yoyo: true,
        duration: 1.8,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      if (glowRef.current && containerRef.current) {
        const xTo = gsap.quickTo(glowRef.current, "x", {
          duration: 0.6,
          ease: "power3.out",
        });
        const yTo = gsap.quickTo(glowRef.current, "y", {
          duration: 0.6,
          ease: "power3.out",
        });

        const bounds = containerRef.current.getBoundingClientRect();

        const onMove = (e: MouseEvent) => {
          xTo(e.clientX - bounds.left - 140);
          yTo(e.clientY - bounds.top - 140);
        };

        containerRef.current.addEventListener("mousemove", onMove);
        return () =>
          containerRef.current?.removeEventListener("mousemove", onMove);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const magneticMove = (e: ReactMouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    gsap.to(e.currentTarget, {
      x: (e.clientX - r.left - r.width / 2) * 0.2,
      y: (e.clientY - r.top - r.height / 2) * 0.2,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const magneticLeave = (e: ReactMouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1,0.4)",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-24"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.18),transparent_65%)] blur-3xl"
      />

      <div className="container mx-auto px-6 grid gap-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display leading-[1.05] text-primary">
            {headline.split("").map((char, i) => (
              <span
                key={i}
                className="hero-letter inline-block"
                data-final={char}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p className="hero-panel max-w-xl text-lg text-secondary">
            Perioxia builds critical AI infrastructure across autonomous agents,
            predictive intelligence, and real-time systems.
          </p>

          <div className="hero-panel flex gap-4">
            <button
              onMouseMove={magneticMove}
              onMouseLeave={magneticLeave}
              className="rounded-full bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#FF0080] px-6 py-3 text-sm font-semibold text-slate-950"
            >
              Explore Systems →
            </button>
            <button
              onMouseMove={magneticMove}
              onMouseLeave={magneticLeave}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-primary"
            >
              See Visiblo →
            </button>
          </div>

          <div className="hero-panel grid grid-cols-2 sm:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5"
              >
                <div className="text-2xl font-mono text-primary">{m.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-secondary">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-panel rounded-3xl border border-white/10 bg-white/5 p-8">
          <svg viewBox="0 0 100 100" className="h-[320px] w-full">
            {lines.map((l, i) => (
              <line
                key={i}
                {...l}
                stroke="#8B5CF6"
                strokeWidth="0.6"
                opacity="0.5"
                strokeDasharray="2 3"
              />
            ))}
            {nodes.map((n, i) => (
              <circle
                key={i}
                className="hero-node"
                cx={n.cx}
                cy={n.cy}
                r={n.r}
                fill="#00D4FF"
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
