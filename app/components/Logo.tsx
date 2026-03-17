"use client";

import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Recreated Logo Mark from provided image */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        {/* Outer Hexagon Nodes */}
        <circle cx="50" cy="15" r="3.5" fill="currentColor" />
        <circle cx="82" cy="33" r="3.5" fill="currentColor" />
        <circle cx="82" cy="67" r="3.5" fill="currentColor" />
        <circle cx="50" cy="85" r="3.5" fill="currentColor" />
        <circle cx="18" cy="67" r="3.5" fill="currentColor" />
        <circle cx="18" cy="33" r="3.5" fill="currentColor" />
        
        {/* Core Infrastructure Node (Blue) */}
        <circle cx="50" cy="50" r="8" fill="#4B6BFF" />
        <circle cx="50" cy="50" r="14" stroke="#4B6BFF" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />

        {/* Connection Lines (Product Fabric) */}
        <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
          {/* Outer Border */}
          <path d="M50 15L82 33L82 67L50 85L18 67L18 33Z" fill="none" />
          
          {/* Inner Spokes */}
          <path d="M50 15V42" />
          <path d="M50 85V58" />
          <path d="M18 33L42 46" />
          <path d="M82 67L58 54" />
          <path d="M82 33L58 46" />
          <path d="M18 67L42 54" />
        </g>
      </svg>
      <div className="flex flex-col -space-y-1">
        <span className="text-xl font-bold tracking-[0.05em] text-primary uppercase">
          Perioxia
        </span>
        <span className="text-[10px] tracking-[0.3em] text-secondary font-medium uppercase opacity-70">
          Technology
        </span>
      </div>
    </div>
  );
}
