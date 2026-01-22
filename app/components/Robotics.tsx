"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Scan, Cpu, Radio, Zap, Crosshair } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Robotics() {
  const container = useRef(null);
  const scanLine = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Continuous Scan Animation
      gsap.to(scanLine.current, {
        top: "100%",
        duration: 3,
        ease: "linear",
        repeat: -1,
      });

      // HUD Elements Entrance
      gsap.from(".hud-element", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-screen bg-void flex items-center py-20 overflow-hidden">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 bg-grid-engineer opacity-30" />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Visual / Schematic Side */}
        <div className="relative aspect-square max-w-lg mx-auto lg:mx-0 border border-white/10 bg-white/5 backdrop-blur-sm p-4 blueprint-card">
          {/* Scanning Line */}
          <div ref={scanLine} className="absolute top-0 left-0 w-full h-[2px] bg-accent-signal shadow-[0_0_20px_var(--accent-signal)] z-20 opacity-70" />

          <div className="absolute inset-0 flex items-center justify-center">
            {/* Outer Ring - Clockwise */}
            <div className="absolute w-[75%] h-[75%] border border-dashed border-accent-signal/40 rounded-full animate-spin-slow shadow-[0_0_30px_rgba(255,255,255,0.05)]"></div>

            {/* Inner Ring - Counter-Clockwise */}
            <div className="absolute w-[55%] h-[55%] border-2 border-white/20 rounded-full animate-spin-reverse-slow shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center justify-center">
              <div className="w-[95%] h-[95%] border border-white/5 rounded-full" />
            </div>

            {/* Core Glow */}
            <div className="absolute w-[15%] h-[15%] bg-accent-signal/20 rounded-full backdrop-blur-md border border-accent-signal/50 shadow-[0_0_20px_var(--accent-signal)] animate-pulse z-10" />

            {/* Robotic Eye Core */}
            <div className="absolute w-[35%] h-[35%] rounded-full z-0 flex items-center justify-center overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(0,255,255,0.3)]">

              {/* Base Image Layer */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/robotic-eye.png"
                alt="Robotic Core"
                className="w-full h-full object-cover animate-spin-slow opacity-90 mix-blend-screen scale-110"
                style={{ animationDuration: '20s' }}
              />

              {/* Overlaid Pulse Effect */}
              <div className="absolute inset-0 bg-accent-signal/30 mix-blend-overlay animate-pulse rounded-full" />

              {/* Technic Glint */}
              <div className="absolute w-[40%] h-[40%] bg-white/10 rounded-full blur-md animate-ping" style={{ animationDuration: '3s' }} />
            </div>
          </div>

          <div className="absolute top-4 left-4 text-accent-signal font-mono-tech text-xs">
            <Crosshair size={14} className="inline mr-2" />
            TARGET_LOCK: AUTOMATION
          </div>

          <div className="absolute bottom-4 right-4 text-right">
            <div className="text-white/40 font-mono-tech text-[10px]">SCHEMATIC_V.04</div>
            <div className="text-white font-bold text-lg">ROBOTIC OS</div>
          </div>
        </div>

        {/* Specs / Content Side */}
        <div className="space-y-12">
          <div className="hud-element">
            <h2 className="text-6xl font-black text-white leading-[0.85] mb-6">
              HARDWARE <br />
              <span className="text-stroke-white text-transparent">FUSION.</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-md border-l border-accent-signal pl-6">
              We bridge the gap between digital logic and kinetic reality. Our OS integrates seamlessly with industrial manipulators.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Zap, label: "Real-time Kernel", val: "< 1ms" },
              { icon: Cpu, label: "Neural Compute", val: "128 TOPS" },
              { icon: Radio, label: "Signal Range", val: "50km+" },
              { icon: Scan, label: "Vision Processing", val: "120 FPS" }
            ].map((stat, i) => (
              <div key={i} className="hud-element p-6 border border-white/10 bg-white/[0.02] hover:bg-accent-signal/10 transition-colors duration-300">
                <stat.icon className="text-accent-signal mb-4" size={24} />
                <div className="text-2xl font-bold text-white mb-1">{stat.val}</div>
                <div className="text-xs font-mono-tech text-white/50 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
