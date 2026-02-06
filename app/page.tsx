import Hero from './components/Hero';
import MetricsMarquee from './components/MetricsMarquee';
import TechPillars from './components/TechPillars';
import VisibloSpotlight from './components/VisibloSpotlight';
import ProofStats from './components/ProofStats';
import HorizontalScroll from './components/HorizontalScroll';
import CTAFooter from './components/CTAFooter';
import CursorGlow from './components/ui/CursorGlow';
import SmoothScroll from './components/ui/SmoothScroll';

export default function Page() {
    return (
<<<<<<< HEAD
        <>
            <CursorGlow />
            <SmoothScroll />
            <main className="relative z-10">
                <Hero />
                <MetricsMarquee />
                <TechPillars />
                <VisibloSpotlight />
                <ProofStats />
                <HorizontalScroll />
                <CTAFooter />
            </main>
        </>
    );
}
=======
        <main className="relative min-h-screen selection:bg-[var(--accent-blue)] selection:text-slate-950">
            <Hero />
            <FeatureTicker />
            <SolutionsGrid />
            <TechConstellation />
            <ProcessAndStats />
            <Portfolio />
            <Footer />
        </main>
    )
}
>>>>>>> a32d989586293f049b6b08fa80ddc01140cd4d91
