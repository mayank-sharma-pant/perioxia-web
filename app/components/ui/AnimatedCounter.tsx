"use client";

import { useRef, useEffect, useState } from "react";

interface AnimatedCounterProps {
    target: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    duration?: number;
}

export default function AnimatedCounter({
    target,
    suffix = "",
    prefix = "",
    decimals = 0,
    duration = 2000,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCount();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCount = () => {
        const startTime = Date.now();

        const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCount(target * eased);

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(tick);
    };

    const displayValue = decimals > 0
        ? count.toFixed(decimals)
        : Math.floor(count).toLocaleString();

    return (
        <span ref={ref} className="font-mono">
            {prefix}{displayValue}{suffix}
        </span>
    );
}
