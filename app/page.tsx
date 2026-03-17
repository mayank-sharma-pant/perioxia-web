import Hero from "./components/Hero";
import TechConstellation from "./components/TechConstellation";
import SolutionsGrid from "./components/SolutionsGrid";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="relative min-h-screen selection:bg-[var(--accent)] selection:text-white">
      <Hero />
      <TechConstellation />
      <SolutionsGrid />
      <Contact />
      <Footer />
    </main>
  );
}
