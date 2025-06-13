import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const confessions = [
  {
    title: 'REVELATION',
    quote: 'I came in for a trim and left with a new personality.',
    author: 'Mel, 24',
    image: 'https://images.pexels.com/photos/3065264/pexels-photo-3065264.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'SALVATION',
    quote: 'The laser made me believe in witchcraft. Legit magic.',
    author: 'Andre, 36',
    image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'WITNESS',
    quote: 'My nail art is so sharp I had to register my hands as weapons.',
    author: 'Zahra, 29',
    image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'REBIRTH',
    quote: 'They didn\'t just cut my hair. They cut away my past.',
    author: 'Taylor, 31',
    image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'AWAKENING',
    quote: 'I walked in invisible. I walked out legendary.',
    author: 'Jordan, 27',
    image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'TRANSFORMATION',
    quote: 'The glow-up was so real, my ex tried to slide back.',
    author: 'Sam, 25',
    image: 'https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
];

const Confessions: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  return (
    <section className="min-h-screen bg-pure-white py-32 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-editorial font-black text-6xl md:text-7xl text-editorial-black">
          CONFESSIONS
        </h2>
        <p className="text-script italic text-lg md:text-xl text-editorial-black mt-4 opacity-60">
          Testimonial Theater
        </p>
      </motion.div>

      {/* Horizontal Scrolling Cards */}
      <div
        ref={containerRef}
        className="flex gap-8 px-8 overflow-x-auto scrollbar-hide pb-16"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {confessions.map((confession, index) => {
          const rotation = [-5, 3, -2, 7, -3, 2][index % 6];
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: rotation }}
              whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                y: -10,
                zIndex: 50
              }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                hover: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-80 h-96 relative bg-pure-white shadow-2xl cursor-pointer group"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {/* Polaroid-style frame */}
              <div className="w-full h-full p-4 bg-pure-white border-2 border-gray-100">
                {/* Image */}
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img
                    src={confession.image}
                    alt={confession.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-editorial font-black text-2xl text-editorial-black tracking-wider">
                    {confession.title}
                  </h3>
                  <p className="text-script italic text-base text-editorial-black leading-relaxed">
                    "{confession.quote}"
                  </p>
                  <p className="text-typewriter text-sm text-editorial-black opacity-70">
                    — {confession.author}
                  </p>
                </div>

                {/* Gold tape corners */}
                <div className="absolute top-2 left-2 w-6 h-6 bg-gold opacity-60 transform rotate-45" />
                <div className="absolute top-2 right-2 w-6 h-6 bg-gold opacity-60 transform -rotate-45" />
              </div>

              {/* Floating timestamp */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -bottom-8 left-4 text-typewriter text-xs text-editorial-black opacity-50"
              >
                {new Date().toLocaleDateString()}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom fade with quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-script italic text-lg md:text-xl text-editorial-black opacity-60">
          We don't call them testimonials. We call them confessions.
        </p>
      </motion.div>
    </section>
  );
};

export default Confessions;