import Hero from "./components/Hero";
import SolutionsGrid from "./components/SolutionsGrid";
import TechConstellation from "./components/TechConstellation";
import ProcessAndStats from "./components/ProcessAndStats";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <SolutionsGrid />
      <TechConstellation />
      <ProcessAndStats />
      <Contact />
    </main>
  );
}
