"use client";

import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Recreated Logo Mark from provided image */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
      >
        {/* The Stylized V with arrow */}
        <path
          d="M20 35L45 85L65 40L85 50M20 35L10 40"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M65 40L80 25M80 25L65 20M80 25L85 40"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Connecting nodes / Data points */}
        <circle cx="28" cy="45" r="4" fill="#4B6BFF" />
        <circle cx="38" cy="40" r="4" fill="#4B6BFF" />
        <circle cx="48" cy="45" r="4" fill="#4B6BFF" />
        <path d="M45 85L28 45M45 85L38 40M45 85L48 45" stroke="#4B6BFF" strokeWidth="2" opacity="0.6" />
      </svg>
      <span className="text-xl font-bold tracking-tight text-primary">
        Perioxia
      </span>
    </div>
  );
}
