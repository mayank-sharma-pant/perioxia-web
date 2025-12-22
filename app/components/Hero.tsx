"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects for scroll
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  // Mouse tracking parallax for "Magnetic" feel
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const translateTitleX = useTransform(springX, [-500, 500], [-20, 20]);
  const translateTitleY = useTransform(springY, [-500, 500], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden py-32"
    >
      {/* Background Media with Parallax */}
      <motion.div
        style={{ y: y1, scale: 1.15 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <video
          className="w-full h-full object-cover opacity-20 grayscale brightness-50"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
      </motion.div>

      {/* Decorative Light Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content */}
      <motion.div
        style={{
          opacity,
          scale,
          x: translateTitleX,
          y: translateTitleY
        }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.div style={{ y: y2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-2xl bg-white/[0.03] border border-white/10 text-amber-500 text-[10px] font-bold mb-10 tracking-[0.3em] uppercase backdrop-blur-md"
          >
            <Zap size={14} className="fill-amber-500" />
            <span>Redefining Physical Intelligence</span>
          </motion.div>

          <div className="space-y-4 mb-10">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-6xl md:text-9xl font-extrabold tracking-tighter leading-[0.9] text-white"
              >
                Engineering
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="text-6xl md:text-9xl font-extrabold tracking-tighter leading-[0.9] text-gradient"
              >
                Autonomy
              </motion.h1>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
          >
            We bridge the gap between high-level reasoning and low-latency execution.
            Building the cognitive stack for the machines of tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 80,
              delay: 1
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <Link href="#contact" className="btn-premium group min-w-[240px]">
              Initialize Project
              <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
            <Link href="#portfolio" className="btn-secondary group min-w-[200px]">
              Explore Research
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Tech HUD Elements */}
      <div className="absolute bottom-12 left-12 hidden lg:block">
        <div className="hud-border animate-pulse">
          SYS_STATUS: OPTIMAL
        </div>
      </div>
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="hud-border">
          COORD: 24.5N / 54.3E
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-slate-500 font-bold">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-amber-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
