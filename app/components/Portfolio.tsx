"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

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
  const slideContainerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".project-slide");
      const totalSlides = slides.length;

      // Calculate the total scroll distance
      const scrollWidth = slideContainerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      gsap.to(slideContainerRef.current, {
        x: -(scrollWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (totalSlides - 1),
            duration: 0.3,
            ease: "power1.inOut"
          },
          end: () => `+=${scrollWidth - viewportWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black">
      <section
        ref={sectionRef}
        id="portfolio"
        className="relative bg-black overflow-hidden h-screen"
      >
        {/* Background label */}
        <div className="absolute top-10 left-10 text-white/20 font-mono text-xs tracking-widest z-10">
          // CASE_STUDIES_ARCHIVE
        </div>

        <div ref={slideContainerRef} className="flex h-screen">
          {projects.map((p) => (
            <div
              key={p.id}
              className="project-slide min-w-screen h-screen flex items-center justify-center relative px-20 border-r border-white/5"
            >
              <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-8">
                  <div className="text-cyan-400 font-mono mb-6 block">
                    {p.client} // {p.year}
                  </div>
                  <h2 className="text-5xl md:text-7xl lg:text-8xl leading-none font-black text-white mb-8 uppercase tracking-tighter">
                    {p.title}
                  </h2>
                </div>

                <div className="lg:col-span-4 border-l border-white/20 pl-8 pb-2">
                  <div className="text-5xl text-white/10 font-black mb-6">
                    /{p.id}
                  </div>
                  <p className="text-gray-400 text-xl font-light mb-10 leading-relaxed">
                    {p.desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-white border-b border-cyan-400 hover:text-cyan-400 transition-colors pb-1"
                  >
                    VIEW DATA <ArrowUpRight className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Add some content after to demonstrate the scroll works */}
      {/* <div className="h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white text-2xl">Content after portfolio section</p>
      </div> */}
    </div>
  );
}