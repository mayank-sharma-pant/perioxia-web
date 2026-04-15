"use client";

import { useEffect, useRef } from "react";

export default function Matrix3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const points: { x: number; y: number; z: number; char: string; color: string }[] = [];
    const radius = 600;
    const count = 300;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const colors = ["rgba(139, 92, 246, ", "rgba(34, 211, 238, "]; // Purple & Cyan

    for (let i = 0; i < count; i++) {
       const theta = Math.random() * 2 * Math.PI;
       const phi = Math.acos((Math.random() * 2) - 1);
       const r = Math.cbrt(Math.random()) * radius;

       points.push({
           x: r * Math.sin(phi) * Math.cos(theta),
           y: r * Math.sin(phi) * Math.sin(theta),
           z: r * Math.cos(phi),
           char: chars[Math.floor(Math.random() * chars.length)],
           color: colors[Math.floor(Math.random() * colors.length)]
       });
    }

    let angleX = 0;
    let angleY = 0;
    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      angleX += 0.001;
      angleY += 0.002;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      points.forEach((p) => {
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        const distance = 800;
        const scale = distance / (distance + z2);
        const xProjected = x1 * scale + width / 2;
        const yProjected = y2 * scale + height / 2;

        const alpha = Math.min(Math.max((z2 + radius) / (radius * 2), 0), 1);

        ctx.font = `${Math.max(16 * scale, 4)}px monospace`;
        ctx.fillStyle = p.color + `${alpha * 0.9})`;
        ctx.fillText(p.char, xProjected, yProjected);
        
        // Slightly scramble characters occasionally
        if (Math.random() > 0.99) {
            p.char = chars[Math.floor(Math.random() * chars.length)];
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 bg-transparent overflow-hidden mix-blend-screen opacity-50">
      <canvas
        ref={canvasRef}
        className="w-full h-full drop-shadow-[0_0_15px_rgba(139,92,246,0.6)] object-cover"
      />
    </div>
  );
}
