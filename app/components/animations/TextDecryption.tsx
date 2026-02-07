"use client";

import { useEffect, useRef, useState } from "react";

interface TextDecryptionProps {
    text: string;
    className?: string;
    speed?: number;
}

export default function TextDecryption({ text, className = "", speed = 30 }: TextDecryptionProps) {
    const [displayText, setDisplayText] = useState("");
    const glyphs = "!<>-_\\/[]{}—=+*^?#________";

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((char, index) => {
                        if (char === " ") return " ";
                        if (index < iteration) return text[index];
                        return glyphs[Math.floor(Math.random() * glyphs.length)];
                    })
                    .join("")
            );

            iteration += 1 / 3;
            if (iteration >= text.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, glyphs]);

    return <span className={className}>{displayText}</span>;
}
