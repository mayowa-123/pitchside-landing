import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Roadmap from "./components/Roadmap";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Roadmap />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;
