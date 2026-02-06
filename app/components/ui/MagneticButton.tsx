"use client";

import { useRef, ReactNode, MouseEvent } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function MagneticButton({ children, className = "", onClick }: MagneticButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current || !textRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(buttonRef.current, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.4,
            ease: "power2.out",
        });

        gsap.to(textRef.current, {
            x: x * 0.1,
            y: y * 0.1,
            duration: 0.4,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(buttonRef.current, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)",
        });

        gsap.to(textRef.current, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)",
        });
    };

    return (
        <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className={`magnetic-btn ${className}`}
        >
            <span ref={textRef} className="relative z-10 block">
                {children}
            </span>
        </button>
    );
}
