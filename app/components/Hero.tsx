"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Box, CreditCard, Layers } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Text Entrance (Split Lines)
      tl.from(".hero-line-1", { y: 100, opacity: 0, rotateX: -20, duration: 1.2 })
        .from(".hero-line-2", { y: 100, opacity: 0, rotateX: -20, duration: 1.2 }, "-=1.0")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-cta", { y: 20, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.6");

      // 2. Cards 3D Entrance
      tl.from(".hero-card-3d", {
        x: 100,
        opacity: 0,
        rotateY: 45,
        rotateX: 10,
        scale: 0.8,
        stagger: 0.1,
        duration: 1.5,
        ease: "power4.out"
      }, "-=1.5");

      // 3. Stats Counter
      tl.from(".hero-stat", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8
      }, "-=1.0");

      // Parallax on Scroll for Cards
      gsap.to(cardsRef.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        },
        yPercent: 30, // Cards move slower than scroll
        ease: "none"
      });

    }, container);
    return () => ctx.revert();
  }, []);

  // Mouse Parallax for Cards (Interactive Tilt)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardsRef.current) return;
    const { clientX, clientY, currentTarget } = e;
    const width = currentTarget.clientWidth;
    const height = currentTarget.clientHeight;

    // Calculate normalized position -0.5 to 0.5
    const x = (clientX / width) - 0.5;
    const y = (clientY / height) - 0.5;

    gsap.to(cardsRef.current, {
      rotateY: x * 10, // Tilt Y
      rotateX: -y * 10, // Tilt X
      duration: 0.5,
      ease: "power2.out"
    });
  };

  return (
    <section
      ref={container}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center overflow-hidden pt-24 lg:pt-0 bg-bg-charcoal perspective-[2000px]"
    >

      {/* Background Spotlight */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent-cyan/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 h-full items-center">

        {/* LEFT: 55% */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">

          <div className="hero-sub mb-6 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-cyan"></span>
            </span>
            <span className="text-sm font-mono-tech text-accent-cyan tracking-widest uppercase">v4.0 Platform Live</span>
          </div>

          <div className="overflow-hidden mb-2">
            <h1 className="hero-line-1 text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.95] tracking-tight">
              Building Intelligence
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className="hero-line-2 text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.95] tracking-tight">
              for <span className="text-gradient-primary">Modern Enterprises.</span>
            </h1>
          </div>

          <p className="hero-sub text-lg md:text-xl text-text-warm-gray max-w-lg mb-12 leading-relaxed">
            We engineer AI-Agent Swarms, Custom CRM Systems, and High-Scale IT Solutions that drive operational velocity.
          </p>

          <div className="flex flex-wrap gap-5 mb-16">
            <div className="hero-cta">
              <MagneticButton className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-shadow">
                Explore Solutions
                <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </MagneticButton>
            </div>
            <div className="hero-cta">
              <MagneticButton className="px-8 py-4 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
                View Case Studies
              </MagneticButton>
            </div>
          </div>

          <div className="flex items-center gap-12 border-l border-white/10 pl-8">
            <div className="hero-stat">
              <div className="text-3xl font-display font-bold text-white mb-1">500+</div>
              <div className="text-sm text-text-warm-gray uppercase tracking-wider">Projects Shipped</div>
            </div>
            <div className="hero-stat">
              <div className="text-3xl font-display font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-text-warm-gray uppercase tracking-wider">Uptime Guaranteed</div>
            </div>
          </div>

        </div>

        {/* RIGHT: 45% - 3D Perspective Cards */}
        <div ref={cardsRef} className="lg:col-span-5 h-[600px] relative hidden lg:flex items-center justify-center preserve-3d">

          {/* Main Card (Neural Engine) */}
          <div className="hero-card-3d absolute w-[380px] h-[480px] bg-bg-slate border border-white/10 rounded-3xl shadow-2xl z-20 flex flex-col p-8">
            <div className="flex-1">
              <div className="w-16 h-16 rounded-2xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-8 border border-accent-cyan/20">
                <Box size={32} />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                <span className="text-accent-emerald font-mono-tech text-xs">ONLINE</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Neural Engine</h3>
              <p className="text-text-warm-gray">Active processing of distributed agent swarms.</p>
            </div>
            {/* Visual Data */}
            <div className="space-y-3 mt-8">
              <div className="flex justify-between text-xs font-mono-tech text-gray-500">
                <span>CPU_LOAD</span>
                <span>42%</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[42%] bg-accent-cyan" />
              </div>
              <div className="flex justify-between text-xs font-mono-tech text-gray-500 pt-2">
                <span>MEM_ALLOC</span>
                <span>89%</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[89%] bg-accent-purple" />
              </div>
            </div>
          </div>

          {/* Secondary Card (Full Stack) - Behind */}
          <div className="hero-card-3d absolute top-20 -right-12 w-[340px] h-[400px] bg-[#151515] border border-white/5 rounded-3xl z-10 p-8 transform translate-z-[-50px] opacity-80 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/5 rounded-xl">
                <Layers className="text-accent-purple" size={24} />
              </div>
              <div>
                <div className="text-white font-bold">Full Stack</div>
                <div className="text-xs text-text-warm-gray">Integration Ready</div>
              </div>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-16 rounded-xl bg-white/5 border border-white/5 w-full" />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
