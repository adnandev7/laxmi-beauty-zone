import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "User 1",
    service: "Hair Spa",
    rating: 5,
    text: "Testimonial 1"
  },
  {
    name: "User 2",
    service: "Clean-up & Threading",
    rating: 5,
    text: "Testimonial 2"
  },
  {
    name: "User 3",
    service: "Makeup",
    rating: 5,
    text: "Testimonial 3"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-beauty-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-beauty-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-beauty-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-sans font-bold mb-4">
            Loved by Our <span className="text-beauty-gold">Clients</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-sans">
            Real reviews from our beautiful community.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full relative group hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-6 right-8 text-beauty-gold/10 group-hover:text-beauty-gold/20 transition-colors">
                <Quote size={40} />
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-beauty-gold text-beauty-gold mr-1" />
                ))}
              </div>

              <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed font-sans">
                "{testimonial.text}"
              </p>

              <div className="mt-auto pt-6 border-t border-gray-50">
                <h4 className="font-bold text-beauty-accent font-sans">{testimonial.name}</h4>
                <p className="text-sm text-beauty-gold font-medium mt-1">{testimonial.service}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 pt-10 border-t border-beauty-gold/10"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-beauty-accent">4.9/5</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold mt-1">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-beauty-accent">100+</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold mt-1">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-beauty-accent">Verified</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold mt-1">Google Reviews</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
