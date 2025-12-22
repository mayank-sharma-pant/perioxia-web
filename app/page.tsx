import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Robotics from './components/Robotics'
import Agents from './components/Agents'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Page() {
    return (
        <main className="relative min-h-screen">
            {/* Global background effects */}
            <div className="bg-mesh" />
            <div className="bg-grid fixed inset-0 z-[-1] opacity-20" />

            <div className="relative z-10">
                <Hero />
                <div className="max-w-7xl mx-auto px-6 space-y-32 pb-20">
                    <About />
                    <Services />
                    <Robotics />
                    <Agents />
                    <Portfolio />
                    <Contact />
                </div>
                <Footer />
            </div>
        </main>
    )
}