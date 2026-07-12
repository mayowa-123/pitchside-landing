import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Features from "./component/features";
import Stats from "./component/stats";
import Roadmap from "./component/roadmap";
import Waitlist from "./component/waitlist";
import Footer from "./component/footer";

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
