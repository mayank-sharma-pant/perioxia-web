import Hero from './components/Hero'
import FeatureTicker from './components/FeatureTicker'
import SolutionsGrid from './components/SolutionsGrid'
import TechConstellation from './components/TechConstellation'
import ProcessAndStats from './components/ProcessAndStats'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

export default function Page() {
    return (
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
