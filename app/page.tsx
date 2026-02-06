import Hero from './components/Hero'
import FeatureTicker from './components/FeatureTicker'
import SolutionsGrid from './components/SolutionsGrid'
import TechConstellation from './components/TechConstellation'
import ProcessAndStats from './components/ProcessAndStats'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

export default function Page() {
    return (
        <main className="relative min-h-screen selection:bg-accent-blue selection:text-white">
            <Hero />
            <FeatureTicker />
            <SolutionsGrid />
            <TechConstellation />
            <Portfolio />
            <ProcessAndStats />
            <Footer />
        </main>
    )
}