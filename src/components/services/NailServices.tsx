import React from 'react';
import { motion } from 'framer-motion';

type Service = {
  name: string;
  price: string;
  description: string;
  image: string;
};

const nailServices: Service[] = [
  {
    name: 'Gel Manicure',
    price: '$35',
    description: 'Diamond shine. UV-sealed royalty.',
    image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Classic Manicure',
    price: '$25',
    description: 'Simplicity is a power move.',
    image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Pedicure',
    price: '$40',
    description: 'Soft steps. Sharp impressions.',
    image: 'https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Acrylic Full Set',
    price: '$50',
    description: 'Built for length. Made for drama.',
    image: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Nail Art',
    price: '$10+',
    description: 'Symbols of self. Wear your expression.',
    image: 'https://images.pexels.com/photos/4004372/pexels-photo-4004372.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Nail Extensions',
    price: '$45',
    description: 'Long game energy.',
    image: 'https://images.pexels.com/photos/3762667/pexels-photo-3762667.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'French Tips',
    price: '$10',
    description: 'Sharp, white, classic. Paris in profile.',
    image: 'https://images.pexels.com/photos/5069431/pexels-photo-5069431.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Paraffin Treatment',
    price: '$20',
    description: 'Melt. Soak. Resurrect.',
    image: 'https://images.pexels.com/photos/4004367/pexels-photo-4004367.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const calculatePolarPositions = (radius: number, count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i * 2 * Math.PI) / count;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      rotation: (Math.sin(angle * 2) * 10) + (i % 2 === 0 ? -5 : 5)
    };
  });
};

const NailServices: React.FC = () => {
  const orbitalPositions = calculatePolarPositions(460, nailServices.length);

  return (
    <section className="min-h-screen bg-pure-white py-32 px-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="text-center mb-32 relative"
      >
        <div className="relative inline-block">
          <h2 className="text-editorial font-black text-7xl md:text-8xl text-editorial-black">
            NAIL UNIVERSE
          </h2>
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold rounded-full opacity-20 rotating-glow" />
        </div>
        <p className="text-typewriter text-lg md:text-xl text-editorial-black mt-6 opacity-40">
          Orbiting elegance. One polish at a time.
        </p>
      </motion.div>

      <div className="relative mx-auto w-[1000px] h-[1000px] translate-x-[-140px] translate-y-[-60px]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] border border-gold opacity-5 rounded-full" />
          <div className="absolute w-[400px] h-[400px] border border-gold opacity-8 rounded-full" />
        </div>

        {/* STARS */}
        <div className="absolute w-full h-full z-0 pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => {
            const size = Math.random() * 3 + 1;
            const top = Math.random() * 100 + '%';
            const left = Math.random() * 100 + '%';
            const delay = Math.random() * 5;

            return (
              <div
                key={i}
                className="absolute bg-gold rounded-full opacity-30 animate-pulse"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top,
                  left,
                  animationDelay: `${delay}s`
                }}
              />
            );
          })}
        </div>

        {nailServices.map((service, index) => {
          const { x, y, rotation } = orbitalPositions[index];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7, x: 0, y: 0, rotate: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                x,
                y: service.name === "Pedicure" ? y - 80 : y,
                rotate: rotation
              }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                zIndex: 50,
                y: y - 8
              }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                type: "spring",
                stiffness: 120
              }}
              viewport={{ once: true }}
              className="absolute w-64 h-80 group cursor-pointer"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                transformOrigin: 'center center',
                zIndex: 10 + index
              }}
            >
              <div className="relative w-full h-full bg-pure-white shadow-xl border border-gray-100 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 h-32 flex flex-col justify-center bg-pure-white">
                  <h3 className="text-editorial font-bold text-xl text-editorial-black mb-2 leading-tight">
                    {service.name}
                  </h3>
                  <p className="text-gold text-2xl font-bold mb-3">
                    {service.price}
                  </p>
                  <p className="text-script italic text-sm text-editorial-black opacity-80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute -top-3 -right-3 bg-gold text-editorial-black text-sm px-3 py-1 font-bold rounded-full shadow-lg">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default NailServices;
