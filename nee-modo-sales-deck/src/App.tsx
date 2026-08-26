import { useState, useCallback } from 'react';
import Navigation from './components/Navigation';
import ProgressIndicator from './components/ProgressIndicator';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Change from './sections/Change';
import ForManager from './sections/ForManager';
import HowItWorks from './sections/HowItWorks';
import Features from './sections/Features';
import Demo from './sections/Demo';
import Differential from './sections/Differential';
import WhiteLabel from './sections/WhiteLabel';
import Pricing from './sections/Pricing';
import InitialInvestment from './sections/InitialInvestment';
import WhyNeeModo from './sections/WhyNeeModo';
import CommercialProcess from './sections/CommercialProcess';
import FAQ from './sections/Faq';
import FinalCTA from './sections/FinalCTA';
import { NAV_ITEMS } from './lib/constants';

const TOTAL_SECTIONS = NAV_ITEMS.length;

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const handleNavigate = useCallback((index: number) => {
    const item = NAV_ITEMS[index];
    if (item) {
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setCurrentSection(index);
      }
    }
  }, []);

  const handleSectionVisible = useCallback((id: string) => {
    const idx = NAV_ITEMS.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setCurrentSection(idx);
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-background text-foreground antialiased">
      {/* Background decorations */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <Navigation
        currentSection={currentSection}
        totalSections={TOTAL_SECTIONS}
        onNavigate={handleNavigate}
      />
      <ProgressIndicator current={currentSection} total={TOTAL_SECTIONS} />

      <main className="relative z-10">
        <Hero />
        <Problem />
        <Change />
        <ForManager />
        <HowItWorks />
        <Features />
        <Demo />
        <Differential />
        <WhiteLabel />
        <Pricing />
        <InitialInvestment />
        <WhyNeeModo />
        <CommercialProcess />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
