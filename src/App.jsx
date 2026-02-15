import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import { Scissors } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-beauty-light selection:bg-beauty-gold/30 selection:text-beauty-accent">
      <Navbar />
      
      <main>
        <Hero />
        <Overview />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6 group cursor-default">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white shadow-lg rotate-3 group-hover:rotate-0 transition-all duration-300">
              <Scissors size={24} className="rotate-45" />
            </div>
            <div className="flex flex-col items-start border-l-2 border-beauty-gold/20 pl-4 text-left">
              <span className="text-2xl tracking-tight leading-none">
                <span className="font-brand font-bold text-[#1a1a1a]">LAXMI</span>
                <span className="text-beauty-gold font-sans font-light uppercase tracking-tight ml-2">Beauty Salon</span>
              </span>
              <span className="text-[9px] font-sans font-semibold text-gray-500 tracking-[0.5em] uppercase mt-2">
                Expert Care Zone
              </span>
            </div>
          </div>
          <div className="h-px w-24 bg-beauty-gold/20 mx-auto mb-4" />
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Laxmi Beauty Salon. Professionally managed in Nagpur.
          </p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

export default App;
