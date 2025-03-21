import './App.css'
import EvolutionSection from './components/EvolutionSection/EvolutionSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProgramSection from './components/ProgramSection';

function App() {

  return (
    <div className='bg-first min-h-screen'>
      <HeroSection/>
      <EvolutionSection/>
      <ProgramSection/>
      <Footer/>
    </div>
  )
}

export default App
