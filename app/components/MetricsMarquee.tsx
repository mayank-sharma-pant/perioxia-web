"use client";

export default function MetricsMarquee() {
    const metrics = [
        { icon: "⚡", label: "LATENCY", value: "12ms" },
        { icon: "🎯", label: "THROUGHPUT", value: "2.4M/s" },
        { icon: "✓", label: "UPTIME", value: "99.97%" },
        { icon: "🔒", label: "SECURITY", value: "ACTIVE" },
        { icon: "🌐", label: "NODES", value: "47" },
        { icon: "📊", label: "QUERIES", value: "10.2M" },
    ];

    // Duplicate for seamless loop
    const allMetrics = [...metrics, ...metrics];

    return (
        <section className="py-4 bg-bg-elevated/50 border-y border-border-subtle overflow-hidden">
            <div className="marquee-track">
                {allMetrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-3 px-8 whitespace-nowrap">
                        <span className="text-lg">{metric.icon}</span>
                        <span className="text-xs text-text-muted uppercase">{metric.label}:</span>
                        <span className="font-mono text-sm text-cyber-blue">{metric.value}</span>
                        <span className="text-text-muted mx-4">│</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
