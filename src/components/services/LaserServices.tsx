import React from 'react';
import { motion } from 'framer-motion';

const womenServices = [
  { name: 'Full Body', price: '$200', description: 'From crown to toe, smooth like silk set free.' },
  { name: 'Bikini', price: '$30', description: 'Where precision meets poetry.' },
  { name: 'Deep Bikini', price: '$50', description: 'For secrets worth spotlighting.' },
  { name: 'Legs', price: '$60', description: 'Power that walks in silence.' },
  { name: 'Underarms', price: '$25', description: 'Raise. Radiate. Reclaim.' },
  { name: 'Back', price: '$50', description: 'Leave behind more than hair.' },
  { name: 'Chest', price: '$40', description: 'Still. Smooth. Statement.' },
  { name: 'Face', price: '$75', description: 'Bold skin. Zero noise.' },
  { name: 'Forehead', price: '$30', description: 'Bright ideas. Brighter skin.' },
  { name: 'Neck', price: '$30', description: 'Grace etched in beams.' },
];

const menServices = [
  { name: 'Full Body', price: '$300', description: 'Reset the armor. Reveal the king.' },
  { name: 'Shoulder + Upper Back', price: '$80', description: 'Drop the weight.' },
  { name: 'Full Stomach', price: '$60', description: 'Defined lines. Quiet pride.' },
  { name: 'Full Chest', price: '$50', description: 'Open shirt energy.' },
  { name: 'Under Arm', price: '$50', description: 'Edge and elevation.' },
  { name: 'Back', price: '$50', description: 'Clean lines. Absolute presence.' },
  { name: 'Waist', price: '$50', description: 'Precision at the pivot.' },
  { name: 'Face', price: '$75', description: 'More than a shave. A shape.' },
  { name: 'Throat', price: '$40', description: 'Below the beard, beyond the surface.' },
  { name: 'Forehead', price: '$35', description: 'Sharper than thought.' },
  { name: 'Neck', price: '$40', description: 'Smooth strength.' },
  { name: 'Legs', price: '$100', description: 'Every step a strike.' },
];

const LaserServices: React.FC = () => {
  return (
    <section className="min-h-screen bg-pure-white py-32 px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-editorial font-black text-7xl md:text-8xl text-editorial-black gold-underline">
          LASER PRECISION
        </h2>
        <p className="text-script italic text-xl md:text-2xl text-editorial-black mt-4 opacity-70">
          A beam of light. A declaration of self.
        </p>
      </motion.div>

      {/* Split Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Women's Column */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Blush overlay */}
            <div className="absolute inset-0 bg-blush opacity-30 -skew-y-1" />
            
            <div className="relative z-10 p-8">
              <h3 className="text-editorial font-bold text-4xl md:text-5xl text-editorial-black mb-12 text-center">
                Women's Treatments
              </h3>
              
              <div className="space-y-8">
                {womenServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.1,
                      hover: { duration: 0.2 }
                    }}
                    viewport={{ once: true }}
                    className="border-b border-gray-200 pb-6 group cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-editorial font-semibold text-xl md:text-2xl text-editorial-black group-hover:text-gold transition-colors">
                        {service.name}
                      </h4>
                      <span className="text-gold text-xl md:text-2xl font-medium">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-script italic text-base md:text-lg text-editorial-black opacity-80 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Men's Column */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Gunmetal overlay */}
            <div className="absolute inset-0 bg-gunmetal opacity-10 skew-y-1" />
            
            <div className="relative z-10 p-8">
              <h3 className="text-editorial font-bold text-4xl md:text-5xl text-editorial-black mb-12 text-center">
                Men's Treatments
              </h3>
              
              <div className="space-y-8">
                {menServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ x: -10, scale: 1.02 }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.1,
                      hover: { duration: 0.2 }
                    }}
                    viewport={{ once: true }}
                    className="border-b border-gray-200 pb-6 group cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-editorial font-semibold text-xl md:text-2xl text-editorial-black group-hover:text-gunmetal transition-colors">
                        {service.name}
                      </h4>
                      <span className="text-gunmetal text-xl md:text-2xl font-medium">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-script italic text-base md:text-lg text-editorial-black opacity-80 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Diagonal transition */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-gold to-transparent opacity-20 transform -skew-y-1 origin-left"
      />
    </section>
  );
};

export default LaserServices;