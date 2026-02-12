import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Sparkles, Smile, Users, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Experts",
      description: "Our staff is highly trained and certified in modern grooming techniques."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Premium Products",
      description: "We use only high-quality, dermatologically tested products for your skin and hair."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Hygienic Setup",
      description: "Complete sanitation and dedicated disposable kits for every customer."
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Friendly Service",
      description: "A warm and welcoming environment where you feel relaxed and at home."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Trusted by Locals",
      description: "The most recommended salon in Nagpur for professional beauty care."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Scheduling",
      description: "Book your appointments at your convenience with our adaptable time slots."
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-beauty-accent text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-beauty-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-sans font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="text-beauty-gold">Laxmi Beauty Salon</span>?
          </motion.h2>
          <div className="h-1 w-20 bg-beauty-gold mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {points.map((point, index) => (
            <motion.div 
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-smooth group hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-beauty-gold text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
