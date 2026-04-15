import Hero from "./components/Hero";
import TechConstellation from "./components/TechConstellation";
import SolutionsGrid from "./components/SolutionsGrid";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Matrix3D from "./components/ui/Matrix3D";

export default function Page() {
  return (
    <main className="relative min-h-screen selection:bg-[var(--accent)] selection:text-white">
      <Matrix3D />
      <Hero />
      <TechConstellation />
      <SolutionsGrid />
      <Contact />
      <Footer />
    </main>
  );
}
