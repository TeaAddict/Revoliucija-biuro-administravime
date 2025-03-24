import "./App.css";
import EvolutionSection from "./components/EvolutionSection/EvolutionSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InfoButtonSection from "./components/InfoSection/InfoButtonSection";
import KvietimoSection from "./components/KvietimoSection";
import ProgramSection from "./components/ProgramSection/ProgramSection";

function App() {
  return (
    <div className="min-h-screen w-full font-second bg-second text-black">
      <HeroSection />
      <InfoButtonSection />
      <KvietimoSection />
      <ProgramSection />
      <EvolutionSection />
      <Footer />
    </div>
  );
}

export default App;
