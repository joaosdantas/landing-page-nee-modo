import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Solution from './sections/Solution'
import HowItWorks from './sections/HowItWorks'
import Features from './sections/Features'
import ProductPreview from './sections/ProductPreview'
import ManagerBenefits from './sections/ManagerBenefits'
import WhiteLabel from './sections/WhiteLabel'
import Pricing from './sections/Pricing'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-ink-900 font-sans text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <ProductPreview />
        <ManagerBenefits />
        <WhiteLabel />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
