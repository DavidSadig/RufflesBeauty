import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const floatingPhotos = [
  'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3762667/pexels-photo-3762667.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const floatingQuotes = [
  "Toronto's Loudest Beauty Secret.",
  "Styled in silence. Slayed in public.",
  "We don't do trends. We start riots.",
  "Soft. Sharp. Supreme.",
];

const LandingPage: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % floatingQuotes.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen bg-pure-white overflow-hidden">
      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center z-20"
        style={{
          transform: `translate(${-scrollY * 0.3}px, ${-scrollY * 0.2}px)`,
        }}
      >
        <h1 className="text-editorial font-black text-8xl md:text-9xl lg:text-[120px] text-editorial-black tracking-wider">
          RUFFLES BEAUTY
        </h1>
      </motion.div>

      {/* Floating Editorial Photos */}
      <div className="absolute inset-0 z-10">
        {floatingPhotos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ 
              opacity: 0, 
              y: -100, 
              rotate: Math.random() * 14 - 7,
              x: Math.random() * window.innerWidth * 0.8
            }}
            animate={{ 
              opacity: 0.7, 
              y: window.innerHeight + 200,
              rotate: Math.random() * 14 - 7,
            }}
            transition={{ 
              duration: 15 + Math.random() * 10,
              delay: index * 2,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "linear"
            }}
            className="absolute w-48 h-64 md:w-64 md:h-80"
            style={{
              left: `${10 + (index * 15) % 80}%`,
            }}
          >
            <img
              src={photo}
              alt={`Editorial photo ${index + 1}`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
              style={{
                transform: `rotate(${-7 + Math.random() * 14}deg)`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating Quotes */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute top-20 right-10 md:top-32 md:right-16"
          >
            <p className="text-script italic text-lg md:text-xl text-editorial-black transform rotate-3">
              {floatingQuotes[currentQuote]}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 3, duration: 2 }}
          className="absolute bottom-32 left-8 md:bottom-40 md:left-16"
        >
          <p className="text-typewriter text-sm md:text-base text-editorial-black transform -rotate-2">
            Where precision meets poetry.
          </p>
        </motion.div>
      </div>

      {/* Diagonal Tear Transition */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-pure-white diagonal-tear z-40"
        style={{
          transform: `translateY(${Math.max(0, scrollY - 400)}px)`,
        }}
      />
    </section>
  );
};

export default LandingPage;