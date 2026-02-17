import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1600"
          alt="demo beauty zone Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl bg-black/10 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-white leading-tight mb-6 drop-shadow-xl tracking-tight">
              demo <span className="text-beauty-gold font-light">beauty</span> zone
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-10 max-w-xl mx-auto leading-relaxed font-light drop-shadow-md">
              Professional grooming services in Nagpur. Precision and care for your unique beauty.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:1234567890"
                className="btn-primary flex items-center justify-center gap-2 group px-8 py-3 text-base"
              >
                <Phone size={20} fill="white" />
                <span>CALL NOW</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="https://wa.me/911234567890?text=Hello,%20I%20found%20demo%20beauty%20zone%20online%20and%20would%20like%20to%20book%20a%20service."
                target="_blank"
                className="px-8 py-3 rounded-full border border-white/50 text-white font-medium hover:bg-white hover:text-gray-900 transition-smooth active:scale-95 flex items-center justify-center gap-2 text-base backdrop-blur-md hover:-translate-y-0.5"
              >
                <MessageSquare size={20} />
                <span>WHATSAPP</span>
              </a>
            </div>

            <div className="mt-16 flex items-center justify-center gap-12">
              <div className="text-center">
                <p className="text-3xl font-sans font-bold text-beauty-gold">10+</p>
                <p className="text-[9px] text-gray-300 font-bold uppercase tracking-[0.3em] mt-2">Years Mastery</p>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-sans font-bold text-beauty-gold">1k+</p>
                <p className="text-[9px] text-gray-300 font-bold uppercase tracking-[0.3em] mt-2">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
