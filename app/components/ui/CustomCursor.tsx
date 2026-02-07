"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const cursor = cursorRef.current;
        const dot = dotRef.current;
        if (!cursor || !dot) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        const moveCursor = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Dot follows instantly
            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
        };

        // Smooth follow for ring
        const animate = () => {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;

            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;

            requestAnimationFrame(animate);
        };

        // Hover states
        const addHoverEffects = () => {
            const interactiveElements = document.querySelectorAll("a, button, [role='button'], .magnetic");

            interactiveElements.forEach((el) => {
                el.addEventListener("mouseenter", () => {
                    cursor.classList.add("hover");
                });

                el.addEventListener("mouseleave", () => {
                    cursor.classList.remove("hover");
                });
            });
        };

        document.addEventListener("mousemove", moveCursor);
        animate();

        // Delay to ensure DOM is ready
        setTimeout(addHoverEffects, 100);

        return () => {
            document.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor hidden lg:block" />
            <div ref={dotRef} className="custom-cursor-dot hidden lg:block" />
        </>
    );
}
