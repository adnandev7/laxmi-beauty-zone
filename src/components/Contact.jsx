import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-beauty-gold" />,
      label: "Call Us",
      value: "1234567890",
      link: "tel:1234567890"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-beauty-gold" />,
      label: "WhatsApp",
      value: "1234567890",
      link: "https://wa.me/911234567890?text=Hello,%20I%20found%20demo%20beauty%20zone%20online%20and%20would%20like%20to%20book%20a%20service."
    },
    {
      icon: <MapPin className="w-6 h-6 text-beauty-gold" />,
      label: "Our Location",
      value: "demo beauty zone, Beside Trimurti Nagar Garden, Nagpur",
      link: "https://www.google.com/maps/place/Laxmi+Beauty+Zone/@21.1219,79.0494,15z"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-beauty-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-sans font-bold mb-4">
              Visit <span className="text-beauty-gold">Us</span>
            </motion.h2>
            <p className="text-gray-600 mb-10 leading-relaxed max-w-lg">
              We're conveniently located in Nagpur. Whether you're looking for a quick trim or a complete makeover, our doors are always open for you.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link}
                  target={info.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="flex items-start gap-5 group bg-white p-6 rounded-3xl border border-gray-50 shadow-sm hover:shadow-md transition-smooth hover:-translate-y-1"
                >
                  <div className="mt-1 p-3 rounded-full bg-beauty-light text-beauty-gold group-hover:bg-beauty-gold group-hover:text-white transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">{info.label}</p>
                    <p className="text-lg font-medium text-gray-900 group-hover:text-beauty-gold transition-colors leading-tight">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-10"
          >
            <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14886.8778465053!2d79.0644979!3d21.1854481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c17083c5d733%3A0x74685c91ebf2e306!2sLaxmi%20Beauty%20Zone!5e0!3m2!1sen!2sin!4v1707682200000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="demo beauty zone Location"
              ></iframe>
              <a 
                href="https://www.google.com/maps/place/Laxmi+Beauty+Zone/@21.1854481,79.0766077,15z"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg hover:bg-white transition-smooth transform hover:scale-105 hover:-translate-y-0.5"
              >
                <span>Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
