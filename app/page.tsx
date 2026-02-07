import Hero from './components/Hero'
import SolutionsGrid from './components/SolutionsGrid'
import TechConstellation from './components/TechConstellation'
import CRMSection from './components/CRMSection'
import Approach from './components/Approach'
import SolutionsGrid from './components/SolutionsGrid'
import About from './components/About'
import ProcessAndStats from './components/ProcessAndStats'
import Contact from './components/Contact'

export default function Page() {
    return (
        <main className="relative min-h-screen selection:bg-[var(--accent)] selection:text-white">
            <Hero />
            <TechConstellation />
            <CRMSection />
            <Approach />
            <SolutionsGrid />
            <About />
            <SolutionsGrid />
            <TechConstellation />
            <ProcessAndStats />
            <Contact />
        </main>
    )
}
