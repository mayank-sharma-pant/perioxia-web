"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link"; // Assuming Next.js

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    client: "AEROSPACE_DYNAMICS",
    title: "Autonomous Drone Swarm",
    desc: "Coordination algorithms for 500+ UAVs in contested environments.",
    year: "2024",
  },
  {
    id: "02",
    client: "NEXUS_MEDICAL",
    title: "Robotic Surgery OS",
    desc: "Real-time haptic feedback kernel for remote surgical interventions.",
    year: "2023",
  },
  {
    id: "03",
    client: "GLOBAL_LOGISTICS",
    title: "Warehouse Neural Net",
    desc: "Vision-based inventory tracking with 99.99% accuracy at edge.",
    year: "2024",
  },
  {
    id: "04",
    client: "FINTECH_CORE",
    title: "High-Frequency Trading",
    desc: "FPGA-accelerated execution engine for sub-microsecond latency.",
    year: "2023",
  },
];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const slideContainer = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Horizontal Scroll Animation
      const slides = gsap.utils.toArray(".project-slide");
      const totalWidth = 100 * (slides.length - 1); // 100% per slide

      gsap.to(slideContainer.current, {
        xPercent: -100 * (projects.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (projects.length - 1),
          end: "+=3000", // Scroll distance
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="relative h-screen bg-void overflow-hidden flex items-center">
      {/* Background Decor */}
      <div className="absolute top-10 left-10 text-white/20 font-mono-tech text-xs tracking-widest z-10">
        // CASE_STUDIES_ARCHIVE
      </div>

      <div ref={slideContainer} className="flex h-full w-full">
        {projects.map((p, i) => (
          <div key={p.id} className="project-slide min-w-full h-full flex items-center justify-center relative px-20 border-r border-white/5">
            <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

              <div className="lg:col-span-8">
                <div className="text-accent-signal font-mono-tech mb-6 block">{p.client} // {p.year}</div>
                <h2 className="text-[8vw] leading-[0.85] font-black text-white mb-8 uppercase tracking-tighter">
                  {p.title}
                </h2>
              </div>

              <div className="lg:col-span-4 border-l border-white/20 pl-8 pb-2">
                <div className="text-5xl text-white/10 font-black mb-6">/{p.id}</div>
                <p className="text-text-secondary text-xl font-light mb-10 leading-relaxed">
                  {p.desc}
                </p>
                <Link href="#" className="inline-flex items-center text-white border-b border-accent-signal hover:text-accent-signal transition-colors pb-1">
                  VIEW DATA <ArrowUpRight className="ml-2" size={16} />
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
