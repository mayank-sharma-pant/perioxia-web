"use client";

import { useEffect, useRef } from "react";

interface ScanLineProps {
    duration?: number;
    delay?: number;
}

export default function ScanLine({ duration = 3, delay = 0 }: ScanLineProps) {
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!lineRef.current) return;

        const line = lineRef.current;
        line.style.animationDuration = `${duration}s`;
        line.style.animationDelay = `${delay}s`;
    }, [duration, delay]);

    return <div ref={lineRef} className="scanline" />;
}
