import React from 'react';
import { motion } from 'framer-motion';

const hairServices = [
  {
    name: 'Cut & Style',
    price: '$60',
    description: 'Sculpt your silhouette. Styled to command. Styled to whisper.',
    image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Cut Only',
    price: '$45',
    description: 'No drama. Just edge.',
    image: 'https://images.pexels.com/photos/3997349/pexels-photo-3997349.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Blow Dry',
    price: '$40',
    description: 'Volume as weapon. Warmth as armor.',
    image: 'https://images.pexels.com/photos/3065203/pexels-photo-3065203.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Color',
    price: '$65',
    description: 'From faded to famous. Choose whisper or war paint.',
    image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Highlights',
    price: '$70',
    description: 'Foiled brilliance. Glint, gleam, and glow.',
    image: 'https://images.pexels.com/photos/3065264/pexels-photo-3065264.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: "Men's Haircut",
    price: '$25',
    description: 'Tapered. Tight. Ruthless precision.',
    image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
];

const HairServices: React.FC = () => {
  return (
    <section className="min-h-screen bg-pure-white py-32 px-8 relative overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-editorial font-black text-7xl md:text-8xl text-editorial-black gold-underline">
          CROWNWORK
        </h2>
        <p className="text-script italic text-xl md:text-2xl text-editorial-black mt-4 opacity-70">
          Hair Services
        </p>
      </motion.div>

      {/* Background Video Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-gold to-transparent animate-pulse" />
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        {hairServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            whileHover={{ scale: 1.02, rotate: 1, x: 10 }}
            transition={{ 
              duration: 0.8,
              delay: index * 0.2,
              hover: { duration: 0.3 }
            }}
            viewport={{ once: true }}
            className={`flex items-center mb-16 md:mb-24 ${
              index % 2 === 0 ? 'justify-start ml-0 md:ml-16' : 'justify-end mr-0 md:mr-16'
            }`}
          >
            <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 max-w-4xl`}>
              {/* Service Image */}
              <motion.div 
                className="relative w-48 h-64 md:w-64 md:h-80 flex-shrink-0"
                whileHover={{ y: -5 }}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover shadow-2xl"
                  style={{ transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-editorial-black/20 to-transparent" />
              </motion.div>

              {/* Service Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <div className="space-y-4">
                  <h3 className="text-editorial font-bold text-3xl md:text-4xl text-editorial-black">
                    {service.name}
                  </h3>
                  <p className="text-gold text-2xl md:text-3xl font-medium">
                    {service.price}
                  </p>
                  <p className="text-script italic text-lg md:text-xl text-editorial-black leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HairServices;