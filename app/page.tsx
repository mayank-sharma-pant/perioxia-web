import Hero from './components/Hero'
import ProductSpotlight from './components/ProductSpotlight'
import TechConstellation from './components/TechConstellation'
import Approach from './components/Approach'
import SolutionsGrid from './components/SolutionsGrid'
import Contact from './components/Contact'

export default function Page() {
    return (
        <main className="relative min-h-screen selection:bg-[var(--accent)] selection:text-white">
            <Hero />
            <ProductSpotlight />
            <TechConstellation />
            <Approach />
            <SolutionsGrid />
            <Contact />
        </main>
    )
}
