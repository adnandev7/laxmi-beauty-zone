import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/918698162577?text=Hello,%20I%20found%20Laxmi%20Beauty%20Zone%20online%20and%20would%20like%20to%20book%20a%20service."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
      <MessageSquare size={32} className="relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-100">
        Book on WhatsApp
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
