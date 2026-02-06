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