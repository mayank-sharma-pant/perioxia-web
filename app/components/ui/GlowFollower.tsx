"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function GlowFollower({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Standard spring for very smooth movement
  const springConfig = { damping: 25, stiffness: 350 };
  const smoothedX = useSpring(mouseX, springConfig);
  const smoothedY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${smoothedX}px ${smoothedY}px, var(--accent), transparent 80%)`,
          maskImage: "radial-gradient(300px circle at var(--x) var(--y), black, transparent)",
        }}
        // The mask above is conceptual, we use opacity + mix-blend-mode for the real "spotlight"
      />
      
      {/* Real spotlight layer */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.15 : 0,
          background: `radial-gradient(600px circle at ${smoothedX}px ${smoothedY}px, var(--accent), transparent 40%)`,
        }}
      />

      {children}
    </div>
  );
}
