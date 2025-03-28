import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InfoButtonSection from "./components/InfoSection/InfoButtonSection";
import KvietimoSection from "./components/KvietimoSection";

function App() {
  return (
    // <div className="min-h-screen w-full font-second bg-second text-black">
    <div className="min-h-screen w-full font-third bg-second text-black">
      <HeroSection />
      <InfoButtonSection />
      <KvietimoSection />
      {/* <ProgramSection /> */}
      {/* <EvolutionSection /> */}
      <Footer />
    </div>
  );
}

export default App;
