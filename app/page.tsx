<<<<<<< HEAD
import Hero from './components/Hero'
import SolutionsGrid from './components/SolutionsGrid'
import TechConstellation from './components/TechConstellation'
import CRMSection from './components/CRMSection'
import Approach from './components/Approach'
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
            <ProcessAndStats />
            <Contact />
        </main>
    )
=======
import Hero from "./components/Hero";
import TechConstellation from "./components/TechConstellation";
import SolutionsGrid from "./components/SolutionsGrid";
import Approach from "./components/Approach";
import ProcessAndStats from "./components/ProcessAndStats";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <main className="relative min-h-screen selection:bg-[var(--accent)] selection:text-white">
      <Hero />
      <TechConstellation />
      <SolutionsGrid />
      <Approach />
      <ProcessAndStats />
      <Contact />
    </main>
  );
>>>>>>> 945e42af58a5077e1ed49bd887de9759d2a39263
}
