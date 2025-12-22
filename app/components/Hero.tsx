"use client";

import { useLayoutEffect, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Terminal } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const comp = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const object1Ref = useRef<HTMLDivElement>(null); // Primary Foreground Mass
  const object2Ref = useRef<HTMLDivElement>(null); // Secondary Floating Element
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useLayoutEffect(() => {
    if (prefersReducedMotion) {
      gsap.set([bgRef.current, object1Ref.current, object2Ref.current, headlineRef.current, subtextRef.current, ctaRef.current], { opacity: 1 });
      return;
    }

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      const words = gsap.utils.toArray(".headline-word");

      // Initial States
      gsap.set(bgRef.current, { opacity: 0 });
      gsap.set(object1Ref.current, { opacity: 0, scale: 0.85, x: 100, rotateZ: -5 });
      gsap.set(object2Ref.current, { opacity: 0, scale: 0.9, y: 80 });
      gsap.set(words, { y: 100, opacity: 0, filter: "blur(10px)" });
      gsap.set(subtextRef.current, { y: 30, opacity: 0 });
      gsap.set(ctaRef.current, { scale: 0.9, opacity: 0 });

      // ENTRANCE SEQUENCE: OBJECTS FIRST, THEN TEXT
      tl
        // 1. Background Motion Field
        .to(bgRef.current, {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out"
        })

        // 2. Primary Foreground Mass (LARGE OBJECT)
        .to(object1Ref.current, {
          opacity: 1,
          scale: 1,
          x: 0,
          rotateZ: 0,
          duration: 1.8,
          ease: "power4.out"
        }, "-=1.0")

        // 3. Secondary Floating Element
        .to(object2Ref.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out"
        }, "-=1.2")

        // 4. THEN Headline
        .to(words, {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.08,
          ease: "power4.out",
        }, "-=0.8")

        // Impact Moment
        .to(".headline-word-accent", {
          color: "#FF4D00",
          textShadow: "0 0 30px rgba(255,77,0,0.6)",
          duration: 0.15,
          ease: "steps(1)",
        }, "<+0.3")
        .to(".headline-word-accent", {
          color: "#ffffff",
          textShadow: "none",
          duration: 0.6,
          ease: "power2.out"
        }, "+=0.1")

        // 5. Subtext
        .to(subtextRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
        }, "-=0.4")

        // 6. CTA
        .to(ctaRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "back.out(1.2)",
        }, "+=0.2");

      // IDLE STATE: CONTINUOUS MOTION (CRITICAL)

      // Background gradient animation (always moving)
      gsap.to(".gradient-orb-1", {
        x: "+=60",
        y: "+=40",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 3
      });

      gsap.to(".gradient-orb-2", {
        x: "-=50",
        y: "+=30",
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 3.5
      });

      // Primary Object slow drift
      gsap.to(object1Ref.current, {
        y: "+=15",
        rotateZ: "+=2",
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 3
      });

      // Secondary Object floating
      gsap.to(object2Ref.current, {
        y: "+=20",
        x: "+=10",
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 3.5
      });

      // PARALLAX
      gsap.to(object1Ref.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: comp.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(object2Ref.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: comp.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, comp);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const headlineText = "ENGINEERING THE FUTURE";
  const words = headlineText.split(" ");

  return (
    <section
      ref={comp}
      className="relative h-screen w-full overflow-hidden bg-void flex items-center justify-center"
      aria-label="Hero Section"
    >
      {/* OBJECT 1: BACKGROUND MOTION FIELD */}
      <div ref={bgRef} className="absolute inset-0 z-0 opacity-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-void via-zinc-900 to-void" />

        {/* Moving Gradient Orbs */}
        <div className="gradient-orb-1 absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-gradient-radial from-accent-signal/20 via-accent-signal/5 to-transparent rounded-full blur-3xl" />
        <div className="gradient-orb-2 absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-gradient-radial from-blue-500/15 via-purple-500/5 to-transparent rounded-full blur-3xl" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-grid-engineer opacity-[0.06]" />

        {/* Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-overlay" />
      </div>

      {/* OBJECT 2: PRIMARY FOREGROUND MASS (30-40% viewport, CRITICAL) */}
      <div
        ref={object1Ref}
        className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[45%] h-[60%] z-10 opacity-0 hidden md:block"
        style={{ transformOrigin: "center center" }}
      >
        {/* Large Glowing Panel / UI Mockup */}
        <div className="relative w-full h-full">
          {/* Main Panel */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/40 via-zinc-900/60 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            {/* Accent Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-signal/20 via-transparent to-blue-500/10 opacity-50" />

            {/* Inner Content (Abstract UI) */}
            <div className="absolute inset-6 border border-white/5 rounded-xl p-6 space-y-4">
              {/* Fake UI Elements */}
              <div className="h-3 w-1/3 bg-gradient-to-r from-accent-signal/60 to-accent-signal/20 rounded" />
              <div className="h-2 w-1/2 bg-white/10 rounded" />
              <div className="h-2 w-2/3 bg-white/5 rounded" />

              <div className="mt-8 space-y-2">
                <div className="h-16 bg-gradient-to-r from-white/5 to-transparent rounded border border-white/5" />
                <div className="h-16 bg-gradient-to-r from-white/5 to-transparent rounded border border-white/5" />
                <div className="h-16 bg-gradient-to-r from-white/5 to-transparent rounded border border-white/5" />
              </div>

              {/* Glowing Accent */}
              <div className="absolute bottom-6 right-6 w-24 h-24 bg-accent-signal/20 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Outer Glow */}
          <div className="absolute -inset-4 bg-gradient-to-br from-accent-signal/10 to-blue-500/5 rounded-3xl blur-2xl -z-10" />
        </div>
      </div>

      {/* OBJECT 3: SECONDARY FLOATING ELEMENT */}
      <div
        ref={object2Ref}
        className="absolute left-[8%] bottom-[15%] w-72 h-48 z-10 opacity-0 hidden md:block"
      >
        <div className="relative w-full h-full bg-gradient-to-br from-zinc-800/50 via-zinc-900/70 to-black/90 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl p-6">
          {/* Mini Card Content */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-signal rounded-full animate-pulse" />
              <div className="h-2 w-24 bg-white/20 rounded" />
            </div>
            <div className="h-3 w-full bg-gradient-to-r from-accent-signal/40 to-transparent rounded" />
            <div className="h-2 w-3/4 bg-white/10 rounded" />
            <div className="h-2 w-1/2 bg-white/5 rounded" />
          </div>

          {/* Accent Corner */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-signal/30 to-transparent rounded-tr-xl" />
        </div>
      </div>

      {/* OBJECT 4: CONTENT BLOCK (BETWEEN OBJECTS) */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex items-center h-full">
        <div className="max-w-2xl">

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-white font-black tracking-tighter select-none mb-8 flex flex-wrap gap-x-[1.5vw] gap-y-1 text-[12vw] md:text-[7vw] lg:text-[6vw] leading-[0.9]"
          >
            {words.map((word, i) => (
              <span
                key={i}
                className={`headline-word inline-block will-change-transform ${i === 0 ? 'headline-word-accent' : ''}`}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <div className="overflow-hidden mb-12">
            <p
              ref={subtextRef}
              className="text-white/50 font-mono-tech text-sm md:text-base tracking-[0.2em] uppercase leading-relaxed max-w-lg"
            >
              Advancing human potential through precision robotics and autonomous agents.
            </p>
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <button className="group relative px-10 py-5 bg-white text-black font-mono-tech text-xs tracking-[0.2em] uppercase transition-all duration-300 ease-out overflow-hidden hover:tracking-[0.25em]">
              <span className="relative z-10 flex items-center gap-3 font-bold">
                Run Protocol <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-accent-signal transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>

            <button className="group px-10 py-5 border border-white/10 text-white font-mono-tech text-xs tracking-[0.2em] uppercase hover:border-white/30 hover:bg-white/5 transition-all duration-300 backdrop-blur-md flex items-center gap-3">
              <Terminal size={14} className="text-accent-signal group-hover:text-white transition-colors" />
              <span>Initialize</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
