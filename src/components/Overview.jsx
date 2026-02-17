import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Heart, CircleDollarSign } from 'lucide-react';

const Overview = () => {
  const highlights = [
    {
      icon: <UserCheck className="w-8 h-8 text-beauty-gold" />,
      title: "Experienced Professionals",
      desc: "Our team consists of certified beauty experts with years of experience."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-beauty-gold" />,
      title: "Clean & Hygienic",
      desc: "We prioritize your safety with sanitized tools and a pristine environment."
    },
    {
      icon: <Heart className="w-8 h-8 text-beauty-gold" />,
      title: "Personalized Service",
      desc: "Get customized beauty treatments tailored to your unique needs."
    },
    {
      icon: <CircleDollarSign className="w-8 h-8 text-beauty-gold" />,
      title: "Affordable Pricing",
      desc: "Premium beauty services that fit your budget perfectly."
    }
  ];

  return (
    <section id="overview" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800" 
                alt="Our Salon" 
                className="rounded-3xl shadow-2xl z-10 relative w-full aspect-square object-cover"
              />
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.h2 
            className="text-4xl md:text-5xl font-sans font-bold mb-6 text-gray-900">
              Nagpur's Destination for <br />
              <span className="text-beauty-gold">Pure Beauty</span>
            </motion.h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At demo beauty zone, we focus on quality, hygiene, and customer satisfaction. Our mission is to provide you with a relaxing environment where you can rejuvenate and reveal your best self.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
