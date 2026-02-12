import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare, Scissors } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 glass py-3 shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center w-full">
          {/* Salon Specific Logo - Pushed to Far Left */}
          <div className="flex-shrink-0 flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:bg-beauty-gold group-hover:scale-110">
                <Scissors size={28} className="rotate-45" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-beauty-gold rounded-full border-2 border-white shadow-sm animate-bounce" />
            </div>
            <div className="flex flex-col border-l border-gray-200 pl-4">
              <h1 className="text-2xl tracking-tighter leading-none flex items-center gap-2">
                <span className="font-brand font-bold text-[#1a1a1a]">LAXMI</span>
                <span className="text-beauty-gold font-sans font-light uppercase tracking-tight">Beauty Salon</span>
              </h1>
              <span className="text-[9px] font-sans font-semibold text-gray-500 tracking-[0.5em] uppercase mt-2 leading-none">
                Expert Care Zone
              </span>
            </div>
          </div>
          
          {/* Desktop Menu - Pushed to Far Right */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-1 lg:space-x-4 bg-white/50 backdrop-blur-md px-6 py-2 rounded-full border border-gray-100 shadow-sm mr-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-beauty-gold px-3 py-2 text-sm font-bold transition-smooth hover:scale-105"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a 
              href="tel:08698162577"
              className="bg-beauty-gold text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl hover:shadow-2xl transition-smooth active:scale-95 flex items-center gap-2 hover:-translate-y-0.5"
            >
              <Phone size={16} fill="white" />
              <span>BOOK APPOINTMENT</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-beauty-gold transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/20 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 hover:bg-beauty-nude hover:text-beauty-gold block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3 px-3">
                <a 
                  href="tel:08698162577"
                  className="flex items-center justify-center space-x-2 bg-beauty-gold text-white py-3 rounded-full font-medium"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
                <a 
                  href="https://wa.me/918698162577?text=Hello,%20I%20found%20Laxmi%20Beauty%20Zone%20online%20and%20would%20like%20to%20book%20a%20service."
                  target="_blank"
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white py-3 rounded-full font-medium"
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
