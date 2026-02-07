"use client";

export default function Marquee() {
    const items = [
        "AI AGENTS",
        "NEURAL NETWORKS",
        "CUSTOM CRM",
        "SMART SYSTEMS",
        "INTELLIGENT AUTOMATION",
        "PREDICTIVE ANALYTICS",
    ];

    // Duplicate for seamless loop
    const allItems = [...items, ...items];

    return (
        <section className="py-16 bg-bg-secondary border-y border-gray-100 overflow-hidden">
            <div className="marquee">
                <div className="marquee-track">
                    {allItems.map((item, i) => (
                        <span
                            key={i}
                            className="text-5xl md:text-6xl font-display gradient-text mx-8 whitespace-nowrap"
                        >
                            {item} •
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
