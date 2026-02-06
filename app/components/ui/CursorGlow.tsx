"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const glow = glowRef.current;
        if (!glow) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        document.addEventListener("mousemove", handleMouseMove);

        // Smooth follow
        gsap.ticker.add(() => {
            gsap.to(glow, {
                x: mouseX,
                y: mouseY,
                duration: 0.8,
                ease: "power2.out",
            });
        });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className="gradient-mesh" />
            <div className="precision-grid" />
            <div ref={glowRef} className="cursor-glow hidden lg:block" />
        </>
    );
}
