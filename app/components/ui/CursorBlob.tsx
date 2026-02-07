"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorBlob() {
    const blobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const blob = blobRef.current;
        if (!blob) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        document.addEventListener("mousemove", handleMouseMove);

        // Smooth follow with GSAP ticker
        gsap.ticker.add(() => {
            gsap.to(blob, {
                x: mouseX,
                y: mouseY,
                duration: 1.5,
                ease: "power2.out",
            });
        });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={blobRef}
            className="cursor-blob hidden lg:block"
            style={{ left: 0, top: 0 }}
        />
    );
}
