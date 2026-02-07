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
}
