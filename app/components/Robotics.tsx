"use client";

import { motion } from "framer-motion";
import { Cog, Zap, Shield, Target, Cpu, Layers } from "lucide-react";

const features = [
  { text: "Real-time perception & sensor fusion", icon: Zap, label: "01" },
  { text: "Deterministic control & safety monitors", icon: Shield, label: "02" },
  { text: "Fleet orchestration & remote management", icon: Cog, label: "03" },
];

export default function Robotics() {
  return (
    <section id="robotics" className="relative py-32 overflow-hidden scroll-mt-20">
      {/* Section Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbbf2412_1px,transparent_1px),linear-gradient(to_bottom,#fbbf2412_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[9px] font-bold mb-10 uppercase tracking-[0.3em] shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Industrial Autonomy Division
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-[1] tracking-tighter">
              Advanced <br />
              <span className="text-gradient itali">Machine Intelligence.</span>
            </h2>

            <p className="text-slate-400 text-xl leading-relaxed mb-12 font-light max-w-xl">
              Our robotics division bridges the "reality gap" by combining high-fidelity
              simulation with hardware-optimized perception pipelines. We don't just
              build robots; we build the nervous systems that make them useful.
            </p>

            <div className="space-y-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.8 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-amber-500/40 group-hover:bg-amber-500/5 transition-all duration-500">
                      <feature.icon className="text-amber-500" size={24} />
                    </div>
                    <div className="absolute -top-2 -left-2 text-[8px] font-mono text-amber-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      {feature.label}
                    </div>
                  </div>
                  <span className="text-slate-200 text-lg font-light tracking-wide group-hover:text-amber-400 transition-colors duration-300">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 flex items-center gap-6 p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-neutral-800 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-amber-500/20 to-neutral-700" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-500 font-medium tracking-tight leading-relaxed">
                Core engineering team from <br />
                <span className="text-slate-200 font-bold">NASA JPL, MIT Robotics</span> & <span className="text-slate-200 font-bold">ETH Zurich</span>.
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="relative group perspective-1000">
              {/* Animated Glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-amber-500/20 to-orange-600/10 rounded-[4rem] blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              <div className="relative glass-panel p-2 rounded-[4rem] overflow-hidden">
                {/* Scanline Effect */}
                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                  <motion.div
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="w-full h-[60%] bg-gradient-to-b from-transparent via-amber-500/10 to-transparent"
                  />
                </div>

                <video
                  className="w-full rounded-[3.8rem] aspect-[4/3] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                </video>

                {/* Technical HUD Overlays */}
                <div className="absolute top-10 left-10 space-y-3 z-30">
                  <div className="hud-border bg-black/40 backdrop-blur-md">
                    MT: NAV_EXEC_01
                  </div>
                  <div className="hud-border bg-black/40 backdrop-blur-md border-orange-500/30 text-orange-400">
                    FR: 60FPS_RAW
                  </div>
                </div>

                <div className="absolute bottom-10 right-10 z-30">
                  <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-500/50 transition-colors duration-700 bg-black/20 backdrop-blur-sm relative">
                    <div className="absolute inset-2 rounded-full border border-amber-500/50 border-t-transparent animate-spin" />
                    <div className="text-[9px] font-mono font-bold text-amber-500">LIVE</div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
