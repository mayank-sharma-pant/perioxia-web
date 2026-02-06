import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-accent-cyan/10 pt-20 pb-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

                {/* COLUMN 1: BRAND */}
                <div className="md:col-span-5">
                    <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">PERIOXIA.</h2>
                    <p className="text-text-warm-gray text-lg leading-relaxed max-w-sm mb-8">
                        Engineering the machines of tomorrow. We are building the physical cognitive stacks that define the boundaries of intelligence.
                    </p>
                    <div className="flex gap-4">
                        {/* Social Placeholders */}
                        {['twitter', 'linkedin', 'github'].map((social) => (
                            <a key={social} href={`#${social}`} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300">
                                <span className="capitalize text-xs">{social[0]}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* COLUMN 2: CAPABILITIES */}
                <div className="md:col-span-4">
                    <h3 className="text-sm font-mono-tech uppercase tracking-widest text-[#555] mb-8">Capabilities</h3>
                    <ul className="space-y-4">
                        {['CRM Architecture', 'Mobile Kinetics', 'System Integration', 'AI Agent Swarms', 'Robotic OS'].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-text-warm-gray hover:text-accent-cyan transition-colors text-lg">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* COLUMN 3: COMPANY */}
                <div className="md:col-span-3">
                    <h3 className="text-sm font-mono-tech uppercase tracking-widest text-[#555] mb-8">Company</h3>
                    <ul className="space-y-4">
                        {['Research Papers', 'Case Studies', 'Global Careers', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-text-warm-gray hover:text-accent-cyan transition-colors text-lg">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="container mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-[#444]">
                <div>&copy; 2024 Perioxia Technology Private Limited.</div>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                    <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
                </div>
            </div>
        </footer>
    );
}
