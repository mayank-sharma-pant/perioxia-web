"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    strength?: number; // How strong the magnetic pull is (default 0.5)
}

export default function MagneticButton({ children, className = "", strength = 0.5 }: MagneticButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const innerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        const inner = innerRef.current;
        if (!button || !inner) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(button, {
                x: x * strength,
                y: y * strength,
                rotation: 0.1 * x, // Subtle rotation
                duration: 0.3,
                ease: "power2.out"
            });

            gsap.to(inner, {
                x: x * (strength * 0.2), // Inner text moves slightly less for depth
                y: y * (strength * 0.2),
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to([button, inner], {
                x: 0,
                y: 0,
                rotation: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.3)"
            });
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [strength]);

    return (
        <button
            ref={buttonRef}
            className={`relative inline-flex items-center justify-center isolate ${className}`}
        >
            <span ref={innerRef} className="relative z-10 pointer-events-none block">
                {children}
            </span>
        </button>
    );
}
