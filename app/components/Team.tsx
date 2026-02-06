"use client";

export default function Team() {
    const principles = [
        {
            title: "DEPTH OVER BREADTH",
            description: "One product done right beats ten done poorly.",
        },
        {
            title: "SPEED OVER PERFECTION",
            description: "Ship fast, iterate faster, learn constantly.",
        },
        {
            title: "OWNERSHIP OVER HIERARCHY",
            description: "Everyone owns their domain. No micromanagement.",
        },
        {
            title: "IMPACT OVER HOURS",
            description: "Results matter, not time logged.",
        },
    ];

    return (
        <section className="py-32 bg-[--obsidian] border-t border-[--graphite]/30">
            <div className="container-custom max-w-5xl mx-auto text-center">

                {/* Headline */}
                <h2 className="font-display text-[clamp(3rem,8vw,5rem)] text-[--ivory] mb-16">
                    BUILT BY OBSESSIVES
                </h2>

                {/* Philosophy Text */}
                <div className="space-y-8 text-[clamp(1.25rem,3vw,1.5rem)] leading-relaxed mb-24">
                    <p className="text-[--ivory]">
                        We're not a traditional company.
                    </p>
                    <p className="text-[--silver]">
                        No corporate hierarchy. No pointless meetings. No "synergy."
                    </p>
                    <p className="text-[--silver]">
                        Just a small team of engineers, designers, and product thinkers who are{" "}
                        <span className="text-[--lime]">obsessed</span> with building exceptional software.
                    </p>
                    <p className="text-[--silver]">
                        We work remotely. We move fast. We own our decisions.
                    </p>
                    <p className="text-[--ivory] font-medium">
                        And we're building the kind of products we wish existed in the world.
                    </p>
                </div>

                {/* Team Principles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {principles.map((principle, i) => (
                        <div key={i} className="text-left space-y-3">
                            <h3 className="text-xl font-display text-[--lime] uppercase">
                                {principle.title}
                            </h3>
                            <p className="text-base text-[--silver]">
                                "{principle.description}"
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
