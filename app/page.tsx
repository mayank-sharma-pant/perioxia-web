import Hero from './components/Hero'
import SystemSnapshot from './components/SystemSnapshot'
import About from './components/About'
import Services from './components/Services'
import Robotics from './components/Robotics'
import Agents from './components/Agents'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Page() {
    return (
        <main className="relative min-h-screen selection:bg-accent-signal selection:text-black">
            {/* Global background effects */}
            {/* Note: Grid and Grain are handled in global.css body::after and bg-void */}

            <div className="relative z-10 flex flex-col">
                <Hero />
                <SystemSnapshot />

                <div className="max-w-7xl w-full flex flex-col mx-auto px-2 pb-20 pt-20">
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