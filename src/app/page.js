import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />

      <div className="container mx-auto px-10 md:px-0 py-4 mt-24">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
