"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Philosophy() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={ref} className="py-40 relative overflow-hidden">

            {/* Background Spotlight */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-laser-purple/10 via-transparent to-transparent rounded-full blur-3xl" />
            </div>

            <div className="container-custom max-w-4xl text-center relative z-10">

                {/* Decorative Quote Marks */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="absolute -top-10 left-0 text-[200px] font-display text-electric-cyan leading-none select-none"
                    style={{ y }}
                >
                    "
                </motion.div>

                {/* Quote */}
                <motion.blockquote
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10"
                >
                    <p className="font-display text-3xl md:text-5xl lg:text-6xl text-text-primary leading-tight mb-8">
                        We don't build software.
                        <br />
                        We build the{" "}
                        <span className="gradient-text">intelligence layer</span>
                        <br />
                        that makes enterprises unstoppable.
                    </p>
                </motion.blockquote>

                {/* Body Text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto"
                >
                    Perioxia exists to solve the hardest problems in AI infrastructure.
                    We combine neural networks, real-time data systems, and intelligent
                    automation to give businesses unfair advantages.
                </motion.p>

                {/* Decorative End Quote */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute -bottom-20 right-0 text-[200px] font-display text-plasma-pink leading-none select-none rotate-180"
                    style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
                >
                    "
                </motion.div>

            </div>
        </section>
    );
}
