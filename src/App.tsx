import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DoubleDiamond } from './components/DoubleDiamond';
import { ToolsExplorer } from './components/ToolsExplorer';
import { UniversityBanner } from './components/UniversityBanner';
import { AgentDesignKit } from './components/AgentDesignKit';
import { CaseStudies } from './components/CaseStudies';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <Hero />
      <UniversityBanner />
      <DoubleDiamond onPhaseSelect={setSelectedPhase} selectedPhase={selectedPhase} />
      <ToolsExplorer selectedPhase={selectedPhase} />
      <AgentDesignKit />
      <CaseStudies />
      <Footer />
    </div>
  );
}