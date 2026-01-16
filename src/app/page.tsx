import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Credibility from "@/components/Credibility";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Work from "@/components/Work";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="bg-navy-900 min-h-screen">
            <Header />
            <Hero />
            <Credibility />
            <About />
            <Capabilities />
            <Work />
            <Writing />
            <Contact />
            <Footer />
        </main>
    );
}
