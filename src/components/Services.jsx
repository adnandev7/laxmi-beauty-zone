import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Haircut & Styling",
      desc: "Trendy haircuts and professional styling for every occasion.",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Facial & Cleanup",
      desc: "Deep skin nourishment and glow with organic products.",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Hair Spa & Treatment",
      desc: "Renew your hair's strength and shine with expert care.",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Makeup & Bridal",
      desc: "Stunning transformations for your most special moments.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Threading & Waxing",
      desc: "Gentle and precise grooming for smooth, beautiful skin.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Manicure & Pedicure",
      desc: "Complete care for your hands and feet with expert finishing.",
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="services" className="section-padding bg-beauty-light/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-sans font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Professional <span className="text-beauty-gold">Services</span>
          </motion.h2>
          <p className="text-gray-600">
            "Beauty begins the moment you decide to be yourself."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-smooth group border border-gray-100 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1, 
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <div className="h-0.5 w-10 bg-beauty-gold group-hover:w-full transition-smooth duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
